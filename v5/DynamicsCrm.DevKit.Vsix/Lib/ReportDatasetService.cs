using DynamicsCrm.DevKit.Lib.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Lib
{
    internal sealed class ReportDatasetService
    {
        private static readonly Regex SafeName = new Regex("^[A-Za-z_][A-Za-z0-9_]*$", RegexOptions.Compiled);
        private static readonly Regex ParameterToken = new Regex("^@[A-Za-z_][A-Za-z0-9_]*$", RegexOptions.Compiled);
        private readonly string filePath;
        private readonly Dictionary<string, EntityMetadata> metadataCache = new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase);
        private XDocument document;
        private string originalHash;
        private Encoding originalEncoding;
        private bool originalHasBom;
        private string originalNewLine;
        private string originalXmlDeclarationPrefix;

        public ReportDatasetService(string filePath)
        {
            this.filePath = filePath ?? throw new ArgumentNullException(nameof(filePath));
            Reload();
        }

        public XDocument Document => document;
        public string FilePath => filePath;
        public bool IsDirty { get; private set; }
        public List<string> Warnings { get; } = new List<string>();

        public void Reload()
        {
            var bytes = File.ReadAllBytes(filePath);
            DetectTextFormat(bytes, out originalEncoding, out originalHasBom);
            var preambleLength = originalHasBom ? originalEncoding.GetPreamble().Length : 0;
            var text = originalEncoding.GetString(bytes, preambleLength, bytes.Length - preambleLength);
            originalNewLine = text.Contains("\r\n") ? "\r\n" : "\n";
            var declaration = Regex.Match(text, @"^\s*<\?xml[^?]*\?>", RegexOptions.IgnoreCase);
            originalXmlDeclarationPrefix = declaration.Success ? declaration.Value : null;
            document = XDocument.Parse(text, LoadOptions.PreserveWhitespace | LoadOptions.SetLineInfo);
            if (document.Root == null || !string.Equals(document.Root.Name.LocalName, "Report", StringComparison.Ordinal))
                throw new InvalidDataException("The selected file has no RDL Report root.");
            Warnings.Clear();
            ValidateReportDataSource(document.Root, Warnings);
            originalHash = Hash(bytes);
            IsDirty = false;
        }

        public List<ReportDatasetInfo> List()
        {
            var root = document.Root;
            var ns = root?.GetDefaultNamespace() ?? XNamespace.None;
            var result = new List<ReportDatasetInfo>();
            foreach (var dataSet in root?.Element(ns + "DataSets")?.Elements(ns + "DataSet") ?? Enumerable.Empty<XElement>())
            {
                var info = new ReportDatasetInfo
                {
                    Name = (string)dataSet.Attribute("Name") ?? string.Empty,
                    DataSourceName = dataSet.Element(ns + "Query")?.Element(ns + "DataSourceName")?.Value ?? string.Empty,
                    CommandText = dataSet.Element(ns + "Query")?.Element(ns + "CommandText")?.Value ?? string.Empty
                };
                info.Fields = dataSet.Element(ns + "Fields")?.Elements(ns + "Field").Select(field => new ReportDatasetFieldInfo
                {
                    Name = (string)field.Attribute("Name"),
                    DataField = field.Element(ns + "DataField")?.Value,
                    TypeName = field.Elements().FirstOrDefault(x => x.Name.LocalName == "TypeName")?.Value
                }).ToList() ?? new List<ReportDatasetFieldInfo>();
                info.Parameters = ReadParameters(dataSet, root).ToList();
                info.FetchEntities = ReadFetchEntities(info.CommandText).ToList();
                if (!string.IsNullOrWhiteSpace(info.CommandText) && info.FetchEntities.Count == 0)
                    info.Warnings.Add("CommandText could not be parsed as FetchXML. Raw text is still available for editing or deletion.");
                info.RootEntityName = info.FetchEntities.FirstOrDefault(x => x.IsRoot)?.LogicalName;
                info.ReferencePaths = FindReferences(info.Name).ToList();
                info.ReferenceCount = info.ReferencePaths.Count;
                result.Add(info);
            }
            return result;
        }

        public ReportDatasetInfo Get(string name) => List().FirstOrDefault(x => string.Equals(x.Name, name, StringComparison.OrdinalIgnoreCase));

        public IEnumerable<string> FindReferences(string datasetName)
        {
            var root = document.Root;
            if (root == null || string.IsNullOrWhiteSpace(datasetName)) yield break;
            foreach (var element in root.Descendants())
            {
                if (element.Name.LocalName == "DataSet" && element.Parent?.Name.LocalName == "DataSets") continue;
                if ((element.Name.LocalName == "DataSetName" || element.Name.LocalName == "DataSet") &&
                    string.Equals(element.Value.Trim(), datasetName, StringComparison.OrdinalIgnoreCase))
                    yield return GetPath(element);
                if (element.Attributes().Any(a => string.Equals(a.Value.Trim(), datasetName, StringComparison.OrdinalIgnoreCase) &&
                    (a.Name.LocalName == "DataSetName" || a.Name.LocalName == "Dataset")))
                    yield return GetPath(element);
            }
        }

        public Task<ReportDatasetValidationResult> ValidateAsync(ServiceClient serviceClient, string fetchXml,
            IDictionary<string, bool> prefilterSelections = null, string existingDatasetName = null)
        {
            return Task.Run(() => Validate(serviceClient, fetchXml, prefilterSelections, existingDatasetName));
        }

        public ReportDatasetValidationResult ValidateSyntax(string fetchXml)
        {
            var result = new ReportDatasetValidationResult { FetchXml = fetchXml };
            if (string.IsNullOrWhiteSpace(fetchXml)) return Fail(result, "FetchXML is required.");
            try
            {
                var fetch = XDocument.Parse(fetchXml, LoadOptions.PreserveWhitespace | LoadOptions.SetLineInfo);
                if (fetch.Root == null || fetch.Root.Name.LocalName != "fetch") return Fail(result, "FetchXML root must be <fetch>.");
                var entities = fetch.Root.Elements().Where(x => x.Name.LocalName == "entity").ToList();
                if (entities.Count != 1) return Fail(result, "FetchXML must contain exactly one root <entity>.");
                ValidateEntityGraph(entities[0], true, new HashSet<string>(StringComparer.OrdinalIgnoreCase));
                result.IsSuccess = true;
            }
            catch (Exception ex)
            {
                return Fail(result, "FetchXML validation failed: " + ex.Message);
            }
            return result;
        }

        public void Add(string name, ReportDatasetValidationResult validation)
        {
            EnsureSuccessfulValidation(validation);
            ValidateParameterMappings(validation);
            EnsureValidName(name);
            if (Get(name) != null) throw new InvalidOperationException($"Dataset '{name}' already exists.");
            var working = new XDocument(document);
            var root = working.Root ?? throw new InvalidOperationException("RDL has no Report root.");
            var ns = root.GetDefaultNamespace();
            var dataSets = root.Element(ns + "DataSets");
            if (dataSets == null)
            {
                dataSets = new XElement(ns + "DataSets");
                var dataSources = root.Element(ns + "DataSources");
                if (dataSources != null) dataSources.AddAfterSelf(dataSets);
                else root.AddFirst(dataSets);
            }
            var dataSet = BuildDataSet(ns, name, validation);
            ApplyPrefilterAndParameters(root, dataSet, validation);
            dataSets.Add(dataSet);
            document = working;
            IsDirty = true;
        }

        public void Update(string name, ReportDatasetValidationResult validation)
        {
            EnsureSuccessfulValidation(validation);
            ValidateParameterMappings(validation);
            EnsureValidName(name);
            var working = new XDocument(document);
            var root = working.Root ?? throw new InvalidOperationException("RDL has no Report root.");
            var ns = root.GetDefaultNamespace();
            var existing = root.Element(ns + "DataSets")?.Elements(ns + "DataSet")
                .FirstOrDefault(x => string.Equals((string)x.Attribute("Name"), name, StringComparison.OrdinalIgnoreCase));
            if (existing == null) throw new InvalidOperationException($"Dataset '{name}' was not found.");
            var previousPrefilterParameters = ReadFetchEntities(existing.Element(ns + "Query")?.Element(ns + "CommandText")?.Value)
                .Where(x => x.IsPreFiltered && !string.IsNullOrWhiteSpace(x.PrefilterParameterName))
                .Select(x => x.PrefilterParameterName)
                .ToList();
            var previousUserParameters = ReadParameters(existing, root)
                .Where(x => !string.IsNullOrWhiteSpace(x.FetchToken))
                .Select(x => x.ReportParameterName)
                .ToList();
            var replacement = BuildDataSet(ns, name, validation);
            ReplaceOrAdd(existing, ns + "Query", replacement.Element(ns + "Query"));
            ReplaceOrAdd(existing, ns + "Fields", replacement.Element(ns + "Fields"));
            ApplyPrefilterAndParameters(root, existing, validation);
            var removedPrefilters = previousPrefilterParameters.Except(
                validation.FetchEntities.Where(x => x.IsPreFiltered).Select(x => x.PrefilterParameterName),
                StringComparer.OrdinalIgnoreCase).ToList();
            if (removedPrefilters.Count > 0)
                validation.Warnings.Add(
                    "Removed prefilter attributes and dataset QueryParameters; retained report-level artifacts conservatively: " +
                    string.Join(", ", removedPrefilters) + ".");
            var removedUserParameters = previousUserParameters.Except(
                validation.Parameters.Select(x => x.ReportParameterName),
                StringComparer.OrdinalIgnoreCase).ToList();
            if (removedUserParameters.Count > 0)
                validation.Warnings.Add(
                    "Removed dataset QueryParameters; retained report-level parameters conservatively: " +
                    string.Join(", ", removedUserParameters) + ".");
            document = working;
            IsDirty = true;
        }

        public void Delete(string name)
        {
            var working = new XDocument(document);
            var root = working.Root ?? throw new InvalidOperationException("RDL has no Report root.");
            var ns = root.GetDefaultNamespace();
            var existing = root.Element(ns + "DataSets")?.Elements(ns + "DataSet")
                .FirstOrDefault(x => string.Equals((string)x.Attribute("Name"), name, StringComparison.OrdinalIgnoreCase));
            if (existing == null) throw new InvalidOperationException($"Dataset '{name}' was not found.");
            existing.Remove();
            document = working;
            IsDirty = true;
        }

        public async Task<string> SaveAsync(string solutionFolder)
        {
            if (!IsDirty) return null;
            var currentBytes = await Task.Run(() => File.ReadAllBytes(filePath));
            var currentHash = Hash(currentBytes);
            if (!string.Equals(currentHash, originalHash, StringComparison.OrdinalIgnoreCase))
                throw new IOException("The RDL changed outside this dialog. Reload it before saving.");
            var directory = Path.GetDirectoryName(filePath);
            var backupRoot = Directory.Exists(solutionFolder) ? solutionFolder : directory;
            var backupDirectory = Path.Combine(backupRoot, ".devkit", "manage_report", "backups");
            Directory.CreateDirectory(backupDirectory);
            var backupPath = Path.Combine(backupDirectory, Path.GetFileNameWithoutExtension(filePath) + "_" + DateTime.Now.ToString("yyyyMMddHHmmssfff") + ".rdl");
            File.Copy(filePath, backupPath, false);
            var tempPath = filePath + ".devkit." + Guid.NewGuid().ToString("N") + ".tmp";
            var replaced = false;
            try
            {
                var serialized = document.ToString(SaveOptions.DisableFormatting);
                if (!string.IsNullOrEmpty(originalXmlDeclarationPrefix)) serialized = originalXmlDeclarationPrefix + serialized;
                if (originalNewLine != "\n") serialized = serialized.Replace("\r\n", "\n").Replace("\n", originalNewLine);
                var content = originalEncoding.GetBytes(serialized);
                var preamble = originalHasBom ? originalEncoding.GetPreamble() : Array.Empty<byte>();
                var output = new byte[preamble.Length + content.Length];
                Buffer.BlockCopy(preamble, 0, output, 0, preamble.Length);
                Buffer.BlockCopy(content, 0, output, preamble.Length, content.Length);
                await Task.Run(() => File.WriteAllBytes(tempPath, output));
                File.Replace(tempPath, filePath, null);
                replaced = true;
                var savedBytes = File.ReadAllBytes(filePath);
                var reparsed = XDocument.Parse(ReadText(savedBytes), LoadOptions.PreserveWhitespace);
                if (reparsed.Root == null || reparsed.Root.Name.LocalName != "Report")
                    throw new InvalidDataException("Saved file has no Report root.");
                originalHash = Hash(savedBytes);
                IsDirty = false;
                return backupPath;
            }
            catch
            {
                if (replaced && File.Exists(backupPath)) File.Copy(backupPath, filePath, true);
                if (File.Exists(tempPath)) File.Delete(tempPath);
                throw;
            }
        }

        private ReportDatasetValidationResult Validate(ServiceClient serviceClient, string fetchXml,
            IDictionary<string, bool> prefilterSelections, string existingDatasetName)
        {
            var result = new ReportDatasetValidationResult { FetchXml = fetchXml };
            result.Warnings.AddRange(Warnings);
            if (string.IsNullOrWhiteSpace(fetchXml)) return Fail(result, "FetchXML is required.");
            XDocument fetch;
            try { fetch = XDocument.Parse(fetchXml, LoadOptions.PreserveWhitespace | LoadOptions.SetLineInfo); }
            catch (Exception ex) { return Fail(result, "FetchXML is not well-formed XML: " + ex.Message); }
            var fetchRoot = fetch.Root;
            if (fetchRoot == null || fetchRoot.Name.LocalName != "fetch") return Fail(result, "FetchXML root must be <fetch>.");
            var entities = fetchRoot.Elements().Where(x => x.Name.LocalName == "entity").ToList();
            if (entities.Count != 1) return Fail(result, "FetchXML must contain exactly one root <entity>.");
            var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            try
            {
                ValidateEntityGraph(entities[0], true, new HashSet<string>(StringComparer.OrdinalIgnoreCase));
                WalkEntity(
                    entities[0],
                    true,
                    entities[0].Attribute("name")?.Value,
                    result,
                    serviceClient,
                    metadataCache,
                    names,
                    prefilterSelections,
                    IsTrue((string)fetchRoot.Attribute("aggregate")));
                result.RootEntityName = (string)entities[0].Attribute("name");
                ValidateReferencedAttributes(fetchRoot, result, metadataCache);
                DiscoverParameters(fetchRoot, result, metadataCache, existingDatasetName);
                if (fetchRoot.Attribute("page") != null || fetchRoot.Attribute("count") != null)
                {
                    AddField("PagingCookie", null, result.RootEntityName, "System.String", result, names, false);
                    AddField("MoreRecords", null, result.RootEntityName, "System.Boolean", result, names, false);
                }
                result.ProbeFetchXml = BuildProbe(fetch);
                if (serviceClient != null)
                {
                    var containsParameters = result.Parameters.Count > 0;
                    var validationXml = containsParameters ? result.ProbeFetchXml : BuildExecutionCandidate(fetch);
                    try { serviceClient.RetrieveMultiple(new FetchExpression(validationXml)); }
                    catch (Exception ex) { return Fail(result, "Dataverse rejected the validation probe: " + ex.Message); }
                    if (containsParameters) result.Warnings.Add("Projection validated; parameterized filters were excluded from the validation probe.");
                }
                else result.Warnings.Add("Dataverse connection was not available; server validation was skipped.");
                result.IsSuccess = result.Errors.Count == 0;
                return result;
            }
            catch (Exception ex) { return Fail(result, ex.Message); }
        }

        private static void ValidateEntityGraph(XElement entity, bool isRoot, ISet<string> aliases)
        {
            var logicalName = (string)entity.Attribute("name");
            if (string.IsNullOrWhiteSpace(logicalName))
                throw new InvalidOperationException("Every entity/link-entity requires a name" + GetLineSuffix(entity) + ".");
            var alias = (string)entity.Attribute("alias");
            if (!isRoot && string.IsNullOrWhiteSpace(alias))
                throw new InvalidOperationException(
                    $"link-entity '{logicalName}' is missing alias{GetLineSuffix(entity)}; add an explicit alias.");
            if (!string.IsNullOrWhiteSpace(alias) && !aliases.Add(alias))
                throw new InvalidOperationException($"Duplicate entity alias '{alias}'{GetLineSuffix(entity)}.");
            foreach (var link in GetOwnedLinks(entity)) ValidateEntityGraph(link, false, aliases);
        }

        private void WalkEntity(XElement entity, bool isRoot, string path,
            ReportDatasetValidationResult result, ServiceClient serviceClient, IDictionary<string, EntityMetadata> metadataCache,
            ISet<string> fieldNames, IDictionary<string, bool> prefilterSelections, bool aggregateFetch)
        {
            var logicalName = (string)entity.Attribute("name");
            if (string.IsNullOrWhiteSpace(logicalName)) throw new InvalidOperationException("Every entity/link-entity requires a name" + GetLineSuffix(entity) + ".");
            var alias = (string)entity.Attribute("alias");
            if (!isRoot && string.IsNullOrWhiteSpace(alias))
                throw new InvalidOperationException(
                    $"link-entity '{logicalName}' is missing alias{GetLineSuffix(entity)}; add an explicit alias.");
            if (!isRoot && result.FetchEntities.Any(x => string.Equals(x.Alias, alias, StringComparison.OrdinalIgnoreCase)))
                throw new InvalidOperationException($"Duplicate link alias '{alias}'{GetLineSuffix(entity)}.");
            var entityInfo = new ReportFetchEntityInfo
            {
                Path = path,
                LogicalName = logicalName,
                Alias = alias,
                IsRoot = isRoot,
                IsPreFiltered = ReadBool(prefilterSelections, path, entity.Attribute("enableprefiltering")?.Value),
                PrefilterParameterName = (string)entity.Attribute("prefilterparametername") ?? DefaultPrefilterName(isRoot ? logicalName : alias)
            };
            result.FetchEntities.Add(entityInfo);
            var metadata = GetMetadata(serviceClient, logicalName, metadataCache);
            var explicitAttributes = entity.Elements().Where(x => x.Name.LocalName == "attribute").ToList();
            var allAttributes = entity.Elements().Any(x => x.Name.LocalName == "all-attributes");
            if (explicitAttributes.Count > 0)
            {
                foreach (var attribute in explicitAttributes) AddAttribute(attribute, entityInfo, metadata, result, fieldNames, aggregateFetch);
            }
            else if (allAttributes)
            {
                foreach (var attribute in metadata.Attributes.Where(x => x.IsValidForRead != false && x.AttributeOf == null))
                    AddMetadataAttribute(attribute.LogicalName, null, entityInfo, attribute, result, fieldNames, false);
            }
            foreach (var link in GetOwnedLinks(entity))
            {
                var childAlias = (string)link.Attribute("alias");
                WalkEntity(
                    link,
                    false,
                    path + "/" + (string)link.Attribute("name") + "[" + childAlias + "]",
                    result,
                    serviceClient,
                    metadataCache,
                    fieldNames,
                    prefilterSelections,
                    aggregateFetch);
            }
        }

        private void AddAttribute(XElement attribute, ReportFetchEntityInfo entityInfo, EntityMetadata metadata,
            ReportDatasetValidationResult result, ISet<string> fieldNames, bool aggregateFetch)
        {
            var logicalName = (string)attribute.Attribute("name");
            if (string.IsNullOrWhiteSpace(logicalName)) throw new InvalidOperationException("Every <attribute> requires a name" + GetLineSuffix(attribute) + ".");
            var metadataAttribute = metadata.Attributes.FirstOrDefault(x => string.Equals(x.LogicalName, logicalName, StringComparison.OrdinalIgnoreCase));
            if (metadataAttribute == null) throw new InvalidOperationException($"Attribute '{logicalName}' was not found on entity '{entityInfo.LogicalName}'.");
            var aggregate = (string)attribute.Attribute("aggregate");
            var groupBy = IsTrue((string)attribute.Attribute("groupby"));
            if ((aggregateFetch || !string.IsNullOrWhiteSpace(aggregate) || groupBy) && string.IsNullOrWhiteSpace((string)attribute.Attribute("alias")))
                throw new InvalidOperationException($"Aggregate/grouped attribute '{logicalName}' requires an explicit alias.");
            var integerOverride = !string.IsNullOrWhiteSpace(aggregate) &&
                (aggregate.Equals("count", StringComparison.OrdinalIgnoreCase) || aggregate.Equals("countcolumn", StringComparison.OrdinalIgnoreCase));
            integerOverride = integerOverride || groupBy && metadataAttribute.AttributeType == AttributeTypeCode.DateTime && attribute.Attribute("dategrouping") != null;
            AddMetadataAttribute(logicalName, (string)attribute.Attribute("alias"), entityInfo, metadataAttribute, result, fieldNames, integerOverride);
        }

        private void AddMetadataAttribute(string logicalName, string explicitAlias, ReportFetchEntityInfo entityInfo,
            AttributeMetadata metadata, ReportDatasetValidationResult result, ISet<string> fieldNames, bool integerOverride = false)
        {
            EnsureSupportedReportAttribute(metadata, entityInfo.LogicalName);
            var baseName = explicitAlias;
            if (string.IsNullOrWhiteSpace(baseName)) baseName = entityInfo.IsRoot ? logicalName : entityInfo.Alias + "." + logicalName;
            var normalized = NormalizeFieldName(baseName);
            var type = integerOverride ? AttributeTypeCode.Integer : metadata.AttributeType;
            AddField(normalized, logicalName, entityInfo.Path, "System.String", result, fieldNames, false);
            var valueType = ValueType(type);
            if (valueType != null) AddField(normalized + "Value", logicalName, entityInfo.Path, valueType, result, fieldNames, true);
            if (type == AttributeTypeCode.Lookup || type == AttributeTypeCode.Customer || type == AttributeTypeCode.Owner)
                AddField(normalized + "EntityName", logicalName, entityInfo.Path, "System.String", result, fieldNames, true);
        }

        private static void AddField(string name, string sourceAttribute, string sourcePath, string typeName,
            ReportDatasetValidationResult result, ISet<string> names, bool companion)
        {
            if (!names.Add(name))
            {
                var previous = result.Fields.FirstOrDefault(x => string.Equals(x.Name, name, StringComparison.OrdinalIgnoreCase));
                throw new InvalidOperationException(
                    $"Duplicate generated RDL field '{name}' conflicts between " +
                    $"'{previous?.SourceEntityPath}/{previous?.SourceAttribute}' and '{sourcePath}/{sourceAttribute}'. " +
                    "Add explicit FetchXML aliases.");
            }
            result.Fields.Add(new ReportDatasetFieldInfo
            {
                Name = name,
                DataField = name,
                TypeName = typeName,
                SourceEntityPath = sourcePath,
                SourceAttribute = sourceAttribute,
                IsGeneratedCompanion = companion
            });
        }

        private EntityMetadata GetMetadata(ServiceClient serviceClient, string logicalName, IDictionary<string, EntityMetadata> cache)
        {
            if (cache.TryGetValue(logicalName, out var existing)) return existing;
            if (serviceClient == null) throw new InvalidOperationException("A Dataverse connection is required to resolve entity metadata.");
            var response = (RetrieveEntityResponse)serviceClient.Execute(new RetrieveEntityRequest { LogicalName = logicalName, EntityFilters = EntityFilters.Attributes });
            if (response.EntityMetadata == null) throw new InvalidOperationException($"Entity '{logicalName}' metadata could not be resolved.");
            cache[logicalName] = response.EntityMetadata;
            return response.EntityMetadata;
        }

        private static void ValidateReferencedAttributes(XElement fetchRoot, ReportDatasetValidationResult result,
            IDictionary<string, EntityMetadata> cache)
        {
            foreach (var entity in fetchRoot.Descendants().Where(x => x.Name.LocalName == "entity" || x.Name.LocalName == "link-entity"))
            {
                var logicalName = (string)entity.Attribute("name");
                if (!cache.TryGetValue(logicalName ?? string.Empty, out var entityMetadata)) continue;
                if (entity.Name.LocalName == "link-entity")
                {
                    ValidateAttributeExists(entityMetadata, (string)entity.Attribute("from"), "link from", logicalName);
                    var parent = entity.Ancestors().FirstOrDefault(x => x.Name.LocalName == "entity" || x.Name.LocalName == "link-entity");
                    var parentName = (string)parent?.Attribute("name");
                    if (cache.TryGetValue(parentName ?? string.Empty, out var parentMetadata))
                        ValidateAttributeExists(parentMetadata, (string)entity.Attribute("to"), "link to", parentName);
                }
                foreach (var order in entity.Elements().Where(x => x.Name.LocalName == "order"))
                {
                    var orderMetadata = ResolveElementMetadata(order, result, cache) ?? entityMetadata;
                    ValidateAttributeExists(orderMetadata, (string)order.Attribute("attribute"), "order", orderMetadata.LogicalName);
                }
            }
            foreach (var condition in fetchRoot.Descendants().Where(x => x.Name.LocalName == "condition"))
            {
                var metadata = ResolveElementMetadata(condition, result, cache);
                ValidateAttributeExists(metadata, (string)condition.Attribute("attribute"), "condition", metadata?.LogicalName);
                ValidateValueOf(condition, result, cache);
            }
        }

        private static void ValidateValueOf(XElement condition, ReportDatasetValidationResult result,
            IDictionary<string, EntityMetadata> cache)
        {
            var valueOf = (string)condition.Attribute("valueof");
            if (string.IsNullOrWhiteSpace(valueOf)) return;
            var separator = valueOf.IndexOf('.');
            if (separator < 0)
            {
                var metadata = ResolveElementMetadata(condition, result, cache);
                ValidateAttributeExists(metadata, valueOf, "condition valueof", metadata?.LogicalName);
                return;
            }
            var alias = valueOf.Substring(0, separator);
            var attributeName = valueOf.Substring(separator + 1);
            var info = result.FetchEntities.FirstOrDefault(x =>
                string.Equals(x.Alias, alias, StringComparison.OrdinalIgnoreCase));
            if (info == null || !cache.TryGetValue(info.LogicalName, out var aliasMetadata))
                throw new InvalidOperationException($"FetchXML valueof references unknown entity alias '{alias}'.");
            ValidateAttributeExists(aliasMetadata, attributeName, "condition valueof", info.LogicalName);
        }

        private static AttributeMetadata ResolveConditionAttribute(XElement condition, ReportDatasetValidationResult result,
            IDictionary<string, EntityMetadata> cache)
        {
            var metadata = ResolveElementMetadata(condition, result, cache);
            var attributeName = (string)condition.Attribute("attribute");
            return metadata?.Attributes.FirstOrDefault(x => string.Equals(x.LogicalName, attributeName, StringComparison.OrdinalIgnoreCase));
        }

        private static EntityMetadata ResolveElementMetadata(XElement element, ReportDatasetValidationResult result,
            IDictionary<string, EntityMetadata> cache)
        {
            var explicitEntity = (string)element.Attribute("entityname");
            if (!string.IsNullOrWhiteSpace(explicitEntity))
            {
                var info = result.FetchEntities.FirstOrDefault(x => string.Equals(x.Alias, explicitEntity, StringComparison.OrdinalIgnoreCase))
                    ?? result.FetchEntities.FirstOrDefault(x => x.IsRoot && string.Equals(x.LogicalName, explicitEntity, StringComparison.OrdinalIgnoreCase));
                if (info != null && cache.TryGetValue(info.LogicalName, out var explicitMetadata)) return explicitMetadata;
                throw new InvalidOperationException($"FetchXML references unknown entity alias '{explicitEntity}'.");
            }
            var owner = element.Ancestors().FirstOrDefault(x => x.Name.LocalName == "entity" || x.Name.LocalName == "link-entity");
            var logicalName = (string)owner?.Attribute("name");
            cache.TryGetValue(logicalName ?? string.Empty, out var metadata);
            return metadata;
        }

        private static string ResolveConditionType(XElement condition, ReportDatasetValidationResult result,
            IDictionary<string, EntityMetadata> cache)
        {
            var attribute = ResolveConditionAttribute(condition, result, cache);
            if (attribute == null) return "String";
            switch (attribute.AttributeType)
            {
                case AttributeTypeCode.Boolean: return "Boolean";
                case AttributeTypeCode.DateTime: return "DateTime";
                case AttributeTypeCode.BigInt:
                case AttributeTypeCode.Integer:
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status: return "Integer";
                case AttributeTypeCode.Decimal:
                case AttributeTypeCode.Double:
                case AttributeTypeCode.Money: return "Float";
                default: return "String";
            }
        }

        private static void ValidateAttributeExists(EntityMetadata metadata, string attributeName, string usage, string logicalName)
        {
            if (string.IsNullOrWhiteSpace(attributeName) || metadata == null) return;
            if (!metadata.Attributes.Any(x => string.Equals(x.LogicalName, attributeName, StringComparison.OrdinalIgnoreCase)))
                throw new InvalidOperationException($"Attribute '{attributeName}' used by {usage} was not found on entity '{logicalName}'.");
        }

        private static void EnsureSupportedReportAttribute(AttributeMetadata metadata, string logicalName)
        {
            if (metadata is MultiSelectPicklistAttributeMetadata || metadata is FileAttributeMetadata || metadata is ImageAttributeMetadata)
                throw UnsupportedAttributeException(metadata, logicalName);
            var supported = new[]
            {
                AttributeTypeCode.BigInt, AttributeTypeCode.Boolean, AttributeTypeCode.Customer, AttributeTypeCode.DateTime,
                AttributeTypeCode.Decimal, AttributeTypeCode.Double, AttributeTypeCode.EntityName, AttributeTypeCode.Integer,
                AttributeTypeCode.Lookup, AttributeTypeCode.Memo, AttributeTypeCode.Money, AttributeTypeCode.Owner,
                AttributeTypeCode.Picklist, AttributeTypeCode.State, AttributeTypeCode.Status, AttributeTypeCode.String,
                AttributeTypeCode.Uniqueidentifier
            };
            if (!metadata.AttributeType.HasValue || !supported.Contains(metadata.AttributeType.Value))
                throw UnsupportedAttributeException(metadata, logicalName);
        }

        private static InvalidOperationException UnsupportedAttributeException(AttributeMetadata metadata, string logicalName)
        {
            var typeName = metadata.AttributeTypeName?.Value ?? metadata.GetType().Name;
            return new InvalidOperationException(
                $"Attribute '{metadata.LogicalName}' on entity '{logicalName}' has unsupported report type '{typeName}'.");
        }

        private static XElement BuildDataSet(XNamespace ns, string name, ReportDatasetValidationResult validation)
        {
            var designerNamespace = XNamespace.Get("http://schemas.microsoft.com/SQLServer/reporting/reportdesigner");
            return new XElement(ns + "DataSet",
                new XAttribute("Name", name),
                new XElement(ns + "Query",
                    new XElement(ns + "DataSourceName", "Dynamics365"),
                    new XElement(ns + "QueryParameters"),
                    new XElement(ns + "CommandText", validation.FetchXml)),
                new XElement(ns + "Fields", validation.Fields.Select(field =>
                    new XElement(ns + "Field",
                        new XAttribute("Name", field.Name),
                        new XElement(ns + "DataField", field.DataField),
                        new XElement(designerNamespace + "TypeName", field.TypeName)))));
        }

        private static void ApplyPrefilterAndParameters(XElement reportRoot, XElement dataSet, ReportDatasetValidationResult validation)
        {
            var ns = reportRoot.GetDefaultNamespace();
            var query = dataSet.Element(ns + "Query");
            var parameters = query?.Element(ns + "QueryParameters");
            if (parameters == null) { parameters = new XElement(ns + "QueryParameters"); query?.Add(parameters); }
            var commandText = query?.Element(ns + "CommandText");
            var fetchDocument = ParseFetch(commandText?.Value);
            var selectedPrefilterNames = new HashSet<string>(
                validation.Parameters.Select(x => (x.ReportParameterName ?? string.Empty).TrimStart('@')),
                StringComparer.OrdinalIgnoreCase);
            foreach (var parameter in validation.Parameters)
            {
                var reportParameterName = (parameter.ReportParameterName ?? string.Empty).TrimStart('@');
                if (!SafeName.IsMatch(reportParameterName)) throw new InvalidOperationException($"Report parameter name '{parameter.ReportParameterName}' is invalid.");
                var validTypes = new[] { "String", "Boolean", "DateTime", "Integer", "Float" };
                if (!validTypes.Contains(parameter.DataType ?? string.Empty, StringComparer.OrdinalIgnoreCase))
                    throw new InvalidOperationException($"Report parameter type '{parameter.DataType}' is invalid.");
                parameter.ReportParameterName = reportParameterName;
                if (string.IsNullOrWhiteSpace(parameter.ValueExpression)) parameter.ValueExpression = "=Parameters!" + reportParameterName + ".Value";
                if (parameters.Elements(ns + "QueryParameter").Any(x =>
                    string.Equals((string)x.Attribute("Name"), parameter.QueryParameterName, StringComparison.OrdinalIgnoreCase))) continue;
                parameters.Add(new XElement(ns + "QueryParameter",
                    new XAttribute("Name", parameter.QueryParameterName),
                    new XElement(ns + "Value", parameter.ValueExpression)));
            }
            foreach (var entity in validation.FetchEntities.Where(x => x.IsPreFiltered))
            {
                var fetch = FindFetchEntity(fetchDocument, entity.Path);
                if (fetch == null) continue;
                fetch.SetAttributeValue("enableprefiltering", "1");
                var parameterName = string.IsNullOrWhiteSpace(entity.PrefilterParameterName)
                    ? DefaultPrefilterName(entity.IsRoot ? entity.LogicalName : entity.Alias)
                    : entity.PrefilterParameterName;
                if (!parameterName.StartsWith("CRM_", StringComparison.OrdinalIgnoreCase)) throw new InvalidOperationException("Prefilter parameter names must start with CRM_.");
                if (!selectedPrefilterNames.Add(parameterName)) throw new InvalidOperationException("Prefilter parameter names must be unique.");
                fetch.SetAttributeValue("prefilterparametername", parameterName);
                if (!parameters.Elements(ns + "QueryParameter").Any(x => string.Equals((string)x.Attribute("Name"), parameterName, StringComparison.OrdinalIgnoreCase)))
                    parameters.Add(new XElement(ns + "QueryParameter",
                        new XAttribute("Name", parameterName),
                        new XElement(ns + "Value", "=Parameters!" + parameterName + ".Value")));
                var defaultFetch = BuildDefaultPrefilterFetch(entity.LogicalName);
                EnsureReportParameter(reportRoot, parameterName, "String", false, true, defaultFetch);
                EnsureReportParameterLayoutCell(reportRoot, parameterName);
                EnsureReportFilterEntity(reportRoot, parameterName, entity.LogicalName, defaultFetch);
                if (commandText != null && fetchDocument != null) commandText.Value = fetchDocument.ToString(SaveOptions.DisableFormatting);
            }
            if (fetchDocument != null)
            {
                foreach (var entity in validation.FetchEntities.Where(x => !x.IsPreFiltered))
                {
                    var fetch = FindFetchEntity(fetchDocument, entity.Path);
                    fetch?.Attribute("enableprefiltering")?.Remove();
                    fetch?.Attribute("prefilterparametername")?.Remove();
                }
                if (commandText != null) commandText.Value = fetchDocument.ToString(SaveOptions.DisableFormatting);
            }
            foreach (var parameter in validation.Parameters)
            {
                EnsureReportParameter(reportRoot, parameter.ReportParameterName, parameter.DataType, parameter.IsMultiValue, false, null);
                EnsureReportParameterLayoutCell(reportRoot, parameter.ReportParameterName);
            }
        }

        private static void EnsureReportParameter(XElement root, string name, string dataType, bool multiValue, bool hidden, string defaultValue)
        {
            var ns = root.GetDefaultNamespace();
            var container = root.Element(ns + "ReportParameters");
            if (container == null)
            {
                container = new XElement(ns + "ReportParameters");
                var before = root.Elements().FirstOrDefault(x =>
                    x.Name.LocalName == "ReportParametersLayout" ||
                    x.Name.LocalName == "CustomProperties" ||
                    x.Name.LocalName == "Code" ||
                    x.Name.LocalName == "Language");
                if (before != null) before.AddBeforeSelf(container);
                else root.Add(container);
            }
            var reportName = (name ?? string.Empty).TrimStart('@');
            var existing = container.Elements(ns + "ReportParameter")
                .FirstOrDefault(x => string.Equals((string)x.Attribute("Name"), reportName, StringComparison.OrdinalIgnoreCase));
            if (existing != null)
            {
                if (hidden)
                {
                    ReplaceOrAddValue(existing, ns + "DataType", "String");
                    ReplaceOrAddValue(existing, ns + "Hidden", "true");
                    if (!string.IsNullOrWhiteSpace(defaultValue))
                        ReplaceOrAdd(existing, ns + "DefaultValue", new XElement(ns + "DefaultValue", new XElement(ns + "Values", new XElement(ns + "Value", defaultValue))));
                }
                return;
            }
            container.Add(new XElement(ns + "ReportParameter",
                new XAttribute("Name", reportName),
                new XElement(ns + "DataType", string.IsNullOrWhiteSpace(dataType) ? "String" : dataType),
                multiValue ? new XElement(ns + "MultiValue", "true") : null,
                string.IsNullOrWhiteSpace(defaultValue) ? null : new XElement(ns + "DefaultValue", new XElement(ns + "Values", new XElement(ns + "Value", defaultValue))),
                new XElement(ns + "Prompt", reportName),
                hidden ? new XElement(ns + "Hidden", "true") : null));
        }

        private static void ReplaceOrAddValue(XElement parent, XName name, string value)
        {
            var element = parent.Element(name);
            if (element == null) parent.Add(new XElement(name, value));
            else element.Value = value;
        }

        private static string BuildDefaultPrefilterFetch(string logicalName)
        {
            return new XElement("fetch",
                new XAttribute("version", "1.0"),
                new XAttribute("output-format", "xml-platform"),
                new XAttribute("mapping", "logical"),
                new XAttribute("distinct", "false"),
                new XElement("entity", new XAttribute("name", logicalName), new XElement("all-attributes")))
                .ToString(SaveOptions.DisableFormatting);
        }

        private static void EnsureReportParameterLayoutCell(XElement reportRoot, string parameterName)
        {
            var ns = reportRoot.GetDefaultNamespace();
            var layout = reportRoot.Element(ns + "ReportParametersLayout");
            if (layout == null)
            {
                layout = new XElement(ns + "ReportParametersLayout",
                    new XElement(ns + "GridLayoutDefinition",
                        new XElement(ns + "NumberOfColumns", "1"),
                        new XElement(ns + "NumberOfRows", "1"),
                        new XElement(ns + "CellDefinitions")));
                var reportParameters = reportRoot.Element(ns + "ReportParameters");
                if (reportParameters != null) reportParameters.AddAfterSelf(layout);
                else reportRoot.Add(layout);
            }
            var grid = layout.Element(ns + "GridLayoutDefinition");
            if (grid == null)
            {
                grid = new XElement(ns + "GridLayoutDefinition");
                layout.Add(grid);
            }
            var columnsElement = grid.Element(ns + "NumberOfColumns");
            var rowsElement = grid.Element(ns + "NumberOfRows");
            var definitions = grid.Element(ns + "CellDefinitions");
            if (columnsElement == null)
            {
                columnsElement = new XElement(ns + "NumberOfColumns", "1");
                grid.AddFirst(columnsElement);
            }
            if (rowsElement == null)
            {
                rowsElement = new XElement(ns + "NumberOfRows", "1");
                columnsElement.AddAfterSelf(rowsElement);
            }
            if (definitions == null)
            {
                definitions = new XElement(ns + "CellDefinitions");
                grid.Add(definitions);
            }
            if (definitions.Elements(ns + "CellDefinition")
                .Any(x => string.Equals(x.Element(ns + "ParameterName")?.Value, parameterName, StringComparison.OrdinalIgnoreCase))) return;
            var columns = int.TryParse(columnsElement?.Value, out var parsedColumns) && parsedColumns > 0 ? parsedColumns : 1;
            var rows = int.TryParse(rowsElement?.Value, out var parsedRows) && parsedRows > 0 ? parsedRows : 1;
            var used = new HashSet<string>(definitions.Elements(ns + "CellDefinition").Select(x =>
                (x.Element(ns + "ColumnIndex")?.Value ?? "0") + ":" + (x.Element(ns + "RowIndex")?.Value ?? "0")));
            var column = 0;
            var row = 0;
            while (used.Contains(column.ToString(CultureInfo.InvariantCulture) + ":" + row.ToString(CultureInfo.InvariantCulture)))
            {
                column++;
                if (column >= columns) { column = 0; row++; }
            }
            if (row >= rows)
            {
                rowsElement.Value = (row + 1).ToString(CultureInfo.InvariantCulture);
            }
            definitions.Add(new XElement(ns + "CellDefinition",
                new XElement(ns + "ColumnIndex", column),
                new XElement(ns + "RowIndex", row),
                new XElement(ns + "ParameterName", parameterName)));
        }

        private static void EnsureReportFilterEntity(XElement reportRoot, string parameterName, string logicalName, string defaultFetch)
        {
            var ns = reportRoot.GetDefaultNamespace();
            var customProperties = reportRoot.Element(ns + "CustomProperties");
            if (customProperties == null) return;
            var custom = customProperties.Elements(ns + "CustomProperty")
                .FirstOrDefault(x => string.Equals(x.Element(ns + "Name")?.Value, "Custom", StringComparison.OrdinalIgnoreCase));
            if (custom == null)
            {
                custom = new XElement(ns + "CustomProperty",
                    new XElement(ns + "Name", "Custom"),
                    new XElement(ns + "Value"));
                customProperties.Add(custom);
            }
            var customValue = custom.Element(ns + "Value");
            var reportFilter = new XElement("ReportFilter");
            if (!string.IsNullOrWhiteSpace(customValue.Value))
            {
                try
                {
                    var mscrm = XDocument.Parse(customValue.Value);
                    var reportFilterText = mscrm.Root?.Value;
                    var existing = string.IsNullOrWhiteSpace(reportFilterText) ? null : XDocument.Parse(reportFilterText).Root;
                    if (existing != null && existing.Name.LocalName != "ReportFilter")
                        throw new InvalidOperationException("The existing MSCRM CustomProperties value does not contain a ReportFilter.");
                    if (existing != null) reportFilter.Add(existing.Elements());
                }
                catch (XmlException ex)
                {
                    throw new InvalidOperationException("The existing MSCRM ReportFilter is malformed and was not overwritten.", ex);
                }
            }
            if (!reportFilter.Elements("ReportEntity").Any(x => string.Equals((string)x.Attribute("paramname"), parameterName, StringComparison.OrdinalIgnoreCase)))
                reportFilter.Add(new XElement("ReportEntity",
                    new XAttribute("paramname", parameterName),
                    new XAttribute("displayname", logicalName),
                    new XAttribute("donotconvert", "1"),
                    new XText(defaultFetch)));
            var mscrmValue = new XElement(XNamespace.Get("mscrm") + "MSCRM", new XText(reportFilter.ToString(SaveOptions.DisableFormatting)));
            customValue.Value = mscrmValue.ToString(SaveOptions.DisableFormatting);
        }

        private static void ReplaceOrAdd(XElement parent, XName name, XElement replacement)
        {
            var current = parent.Element(name);
            if (current != null) current.ReplaceWith(new XElement(replacement)); else parent.Add(new XElement(replacement));
        }

        private static ReportDatasetValidationResult Fail(ReportDatasetValidationResult result, string error)
        {
            result.Errors.Add(error); result.IsSuccess = false; return result;
        }

        private static string BuildProbe(XDocument source)
        {
            var clone = new XDocument(source);
            foreach (var filter in clone.Descendants().Where(x => x.Name.LocalName == "filter").ToList()) filter.Remove();
            var root = clone.Root;
            foreach (var name in new[] { "page", "count", "paging-cookie", "returntotalrecordcount" }) root?.Attribute(name)?.Remove();
            if (root != null && IsTrue((string)root.Attribute("aggregate"))) root.Attribute("top")?.Remove();
            else root?.SetAttributeValue("top", "1");
            foreach (var entity in clone.Descendants().Where(x => x.Name.LocalName == "entity" || x.Name.LocalName == "link-entity"))
            { entity.Attribute("enableprefiltering")?.Remove(); entity.Attribute("prefilterparametername")?.Remove(); }
            return clone.ToString(SaveOptions.DisableFormatting);
        }

        private static string BuildExecutionCandidate(XDocument source)
        {
            var clone = new XDocument(source);
            var root = clone.Root;
            foreach (var name in new[] { "page", "count", "paging-cookie", "returntotalrecordcount" }) root?.Attribute(name)?.Remove();
            if (root != null && IsTrue((string)root.Attribute("aggregate"))) root.Attribute("top")?.Remove();
            else root?.SetAttributeValue("top", "1");
            foreach (var entity in clone.Descendants().Where(x => x.Name.LocalName == "entity" || x.Name.LocalName == "link-entity"))
            {
                entity.Attribute("enableprefiltering")?.Remove();
                entity.Attribute("prefilterparametername")?.Remove();
            }
            return clone.ToString(SaveOptions.DisableFormatting);
        }

        private void DiscoverParameters(XElement fetchRoot, ReportDatasetValidationResult result,
            IDictionary<string, EntityMetadata> cache, string existingDatasetName)
        {
            var map = new Dictionary<string, ReportDatasetParameterInfo>(StringComparer.OrdinalIgnoreCase);
            foreach (var condition in fetchRoot.Descendants().Where(x => x.Name.LocalName == "condition"))
            {
                var token = (string)condition.Attribute("value");
                if (ParameterToken.IsMatch(token ?? string.Empty)) AddParameter(map, token, condition, ResolveConditionType(condition, result, cache));
                foreach (var value in condition.Elements().Where(x => x.Name.LocalName == "value"))
                    if (ParameterToken.IsMatch(value.Value.Trim())) AddParameter(map, value.Value.Trim(), condition, ResolveConditionType(condition, result, cache));
            }
            foreach (var attribute in new[] { "page", "count", "paging-cookie" })
            {
                var token = (string)fetchRoot.Attribute(attribute);
                if (ParameterToken.IsMatch(token ?? string.Empty)) AddParameter(map, token, null, "String");
            }
            var existing = string.IsNullOrWhiteSpace(existingDatasetName) ? null : Get(existingDatasetName);
            var root = document.Root;
            var ns = root?.GetDefaultNamespace() ?? XNamespace.None;
            foreach (var item in map.Values)
            {
                var existingMapping = existing?.Parameters.FirstOrDefault(x => string.Equals(x.QueryParameterName, item.QueryParameterName, StringComparison.OrdinalIgnoreCase));
                if (existingMapping != null)
                {
                    item.ReportParameterName = existingMapping.ReportParameterName;
                    item.ValueExpression = existingMapping.ValueExpression;
                }
                item.ExistsInReport = root?.Element(ns + "ReportParameters")?.Elements(ns + "ReportParameter")
                    .Any(x => string.Equals((string)x.Attribute("Name"), item.ReportParameterName, StringComparison.OrdinalIgnoreCase)) == true;
            }
            result.Parameters.AddRange(map.Values.OrderBy(x => x.FetchToken));
        }

        private static void AddParameter(IDictionary<string, ReportDatasetParameterInfo> map, string token, XElement condition, string dataType)
        {
            if (!map.TryGetValue(token, out var item))
            {
                var name = token.TrimStart('@');
                item = new ReportDatasetParameterInfo
                {
                    FetchToken = token,
                    QueryParameterName = token,
                    ReportParameterName = name,
                    ValueExpression = "=Parameters!" + name + ".Value",
                    DataType = dataType ?? "String"
                };
                map[token] = item;
            }
            var op = (string)condition?.Attribute("operator");
            var hasMultipleValues = condition != null && condition.Elements().Count(x => x.Name.LocalName == "value") > 1;
            var hasMultiValueOperator = op != null && new[] { "in", "not-in", "between", "not-between" }
                .Contains(op, StringComparer.OrdinalIgnoreCase);
            if (condition != null && (hasMultipleValues || hasMultiValueOperator)) item.IsMultiValue = true;
        }

        private static IEnumerable<ReportDatasetParameterInfo> ReadParameters(XElement dataSet, XElement reportRoot)
        {
            var ns = reportRoot.GetDefaultNamespace();
            foreach (var parameter in dataSet.Element(ns + "Query")?.Element(ns + "QueryParameters")?.Elements(ns + "QueryParameter") ?? Enumerable.Empty<XElement>())
            {
                var queryName = (string)parameter.Attribute("Name");
                var valueExpression = parameter.Element(ns + "Value")?.Value;
                var reportName = ExtractReportParameterName(valueExpression) ?? (queryName ?? string.Empty).TrimStart('@');
                var reportParameter = reportRoot.Element(ns + "ReportParameters")?.Elements(ns + "ReportParameter")
                    .FirstOrDefault(x => string.Equals((string)x.Attribute("Name"), reportName, StringComparison.OrdinalIgnoreCase));
                yield return new ReportDatasetParameterInfo
                {
                    FetchToken = queryName?.StartsWith("@", StringComparison.Ordinal) == true ? queryName : null,
                    QueryParameterName = queryName,
                    ReportParameterName = reportName,
                    ValueExpression = valueExpression,
                    DataType = reportParameter?.Element(ns + "DataType")?.Value ?? "String",
                    IsMultiValue = IsTrue(reportParameter?.Element(ns + "MultiValue")?.Value),
                    ExistsInReport = reportParameter != null
                };
            }
        }

        private static IEnumerable<ReportFetchEntityInfo> ReadFetchEntities(string commandText)
        {
            if (string.IsNullOrWhiteSpace(commandText)) yield break;
            XDocument fetch; try { fetch = XDocument.Parse(commandText); } catch { yield break; }
            var root = fetch.Root?.Elements().FirstOrDefault(x => x.Name.LocalName == "entity");
            foreach (var entity in EnumerateFetchEntities(root, (string)root?.Attribute("name"))) yield return entity;
        }

        private static IEnumerable<ReportFetchEntityInfo> EnumerateFetchEntities(XElement entity, string path)
        {
            if (entity == null) yield break;
            var logicalName = (string)entity.Attribute("name");
            var alias = (string)entity.Attribute("alias");
            var isRoot = entity.Name.LocalName == "entity";
            yield return new ReportFetchEntityInfo
            {
                Path = path,
                LogicalName = logicalName,
                Alias = alias,
                IsRoot = isRoot,
                IsPreFiltered = IsTrue((string)entity.Attribute("enableprefiltering")),
                PrefilterParameterName = (string)entity.Attribute("prefilterparametername") ?? DefaultPrefilterName(isRoot ? logicalName : alias)
            };
            foreach (var link in GetOwnedLinks(entity))
            {
                var childAlias = (string)link.Attribute("alias");
                foreach (var child in EnumerateFetchEntities(link, path + "/" + (string)link.Attribute("name") + "[" + childAlias + "]")) yield return child;
            }
        }

        private static XDocument ParseFetch(string fetchXml)
        {
            try { return string.IsNullOrWhiteSpace(fetchXml) ? null : XDocument.Parse(fetchXml, LoadOptions.PreserveWhitespace); }
            catch { return null; }
        }

        private static XElement FindFetchEntity(XDocument fetch, string path)
        {
            if (fetch?.Root == null || string.IsNullOrWhiteSpace(path)) return null;
            var segments = path.Split('/');
            var current = fetch.Root.Elements().FirstOrDefault(x => x.Name.LocalName == "entity");
            if (current == null || !string.Equals((string)current.Attribute("name"), segments[0], StringComparison.OrdinalIgnoreCase)) return null;
            for (var i = 1; i < segments.Length; i++)
            {
                var open = segments[i].IndexOf('[');
                var close = segments[i].LastIndexOf(']');
                if (open < 0 || close <= open) return null;
                var alias = segments[i].Substring(open + 1, close - open - 1);
                current = GetOwnedLinks(current).FirstOrDefault(x =>
                    string.Equals((string)x.Attribute("alias"), alias, StringComparison.OrdinalIgnoreCase));
                if (current == null) return null;
            }
            return current;
        }

        private static bool ReadBool(IDictionary<string, bool> values, string path, string existing)
        {
            return values != null && values.TryGetValue(path, out var value) ? value : IsTrue(existing);
        }

        private static IEnumerable<XElement> GetOwnedLinks(XElement entity)
        {
            return entity.Descendants()
                .Where(x => x.Name.LocalName == "link-entity")
                .Where(x => x.Ancestors().FirstOrDefault(a => a.Name.LocalName == "entity" || a.Name.LocalName == "link-entity") == entity);
        }

        private static bool IsTrue(string value)
        {
            return string.Equals(value, "true", StringComparison.OrdinalIgnoreCase) || value == "1";
        }

        private static void EnsureValidName(string name)
        {
            if (!SafeName.IsMatch(name ?? string.Empty))
                throw new InvalidOperationException($"Dataset name '{name}' is invalid.");
        }

        private static string DefaultPrefilterName(string name)
        {
            var suffix = string.IsNullOrWhiteSpace(name)
                ? "Entity"
                : char.ToUpperInvariant(name[0]) + name.Substring(1);
            return "CRM_Filtered" + suffix;
        }

        private static string NormalizeFieldName(string name)
        {
            return Regex.Replace(name ?? string.Empty, "[^A-Za-z0-9_]", "_");
        }

        private static string ValueType(AttributeTypeCode? type)
        {
            switch (type)
            {
                case AttributeTypeCode.Boolean: return "System.Boolean";
                case AttributeTypeCode.DateTime: return "System.DateTime";
                case AttributeTypeCode.Decimal:
                case AttributeTypeCode.Money: return "System.Decimal";
                case AttributeTypeCode.Double: return "System.Double";
                case AttributeTypeCode.Integer:
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status: return "System.Int32";
                case AttributeTypeCode.BigInt: return "System.Int64";
                case AttributeTypeCode.Lookup:
                case AttributeTypeCode.Customer:
                case AttributeTypeCode.Owner: return "System.Guid";
                default: return null;
            }
        }

        private static string Hash(byte[] bytes)
        {
            using (var sha = SHA256.Create())
                return BitConverter.ToString(sha.ComputeHash(bytes)).Replace("-", string.Empty).ToLowerInvariant();
        }

        private static string GetPath(XElement element)
        {
            return string.Join("/", element.AncestorsAndSelf().Reverse().Select(x => x.Name.LocalName));
        }

        private static string GetLineSuffix(XElement element)
        {
            return element is IXmlLineInfo info && info.HasLineInfo() ? $" at line {info.LineNumber}" : string.Empty;
        }

        private static string ExtractReportParameterName(string expression)
        {
            if (string.IsNullOrWhiteSpace(expression)) return null;
            var match = Regex.Match(expression, @"Parameters!([A-Za-z_][A-Za-z0-9_]*)\.Value", RegexOptions.IgnoreCase);
            return match.Success ? match.Groups[1].Value : null;
        }

        private static void EnsureSuccessfulValidation(ReportDatasetValidationResult validation)
        {
            if (validation == null || !validation.IsSuccess)
                throw new InvalidOperationException("FetchXML must pass validation before the dataset can be changed.");
        }

        private static void ValidateParameterMappings(ReportDatasetValidationResult validation)
        {
            var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            var validTypes = new[] { "String", "Boolean", "DateTime", "Integer", "Float" };
            foreach (var parameter in validation.Parameters)
            {
                var name = (parameter.ReportParameterName ?? string.Empty).TrimStart('@');
                if (!SafeName.IsMatch(name))
                    throw new InvalidOperationException($"Report parameter name '{parameter.ReportParameterName}' is invalid.");
                if (!validTypes.Contains(parameter.DataType ?? string.Empty, StringComparer.OrdinalIgnoreCase))
                    throw new InvalidOperationException($"Report parameter type '{parameter.DataType}' is invalid.");
                names.Add(name);
                parameter.ReportParameterName = name;
                if (string.IsNullOrWhiteSpace(parameter.ValueExpression))
                    parameter.ValueExpression = "=Parameters!" + name + ".Value";
            }
            foreach (var entity in validation.FetchEntities.Where(x => x.IsPreFiltered))
            {
                var parameterName = string.IsNullOrWhiteSpace(entity.PrefilterParameterName)
                    ? DefaultPrefilterName(entity.IsRoot ? entity.LogicalName : entity.Alias)
                    : entity.PrefilterParameterName;
                if (!parameterName.StartsWith("CRM_", StringComparison.OrdinalIgnoreCase) || !SafeName.IsMatch(parameterName))
                    throw new InvalidOperationException($"Prefilter parameter name '{parameterName}' must be a valid name beginning with CRM_.");
                if (!names.Add(parameterName)) throw new InvalidOperationException($"Duplicate report parameter name '{parameterName}'.");
                entity.PrefilterParameterName = parameterName;
            }
        }

        private static void ValidateReportDataSource(XElement reportRoot, ICollection<string> warnings)
        {
            var ns = reportRoot.GetDefaultNamespace();
            var dataSource = reportRoot.Element(ns + "DataSources")?.Elements(ns + "DataSource")
                .FirstOrDefault(x => string.Equals((string)x.Attribute("Name"), "Dynamics365", StringComparison.OrdinalIgnoreCase));
            if (dataSource == null) throw new InvalidDataException("This dialog supports organization Fetch reports with the Dynamics365 data source only.");
            var provider = dataSource.Descendants().FirstOrDefault(x => x.Name.LocalName == "DataProvider")?.Value;
            if (!string.IsNullOrWhiteSpace(provider) && !string.Equals(provider, "MSCRMFETCH", StringComparison.OrdinalIgnoreCase))
                throw new InvalidDataException($"Data source 'Dynamics365' uses provider '{provider}', not MSCRMFETCH.");
            if (string.IsNullOrWhiteSpace(provider))
                warnings?.Add("The Dynamics365 data source provider could not be inspected; continuing as a shared Fetch data source.");
        }

        private static string ReadText(byte[] bytes)
        {
            DetectTextFormat(bytes, out var encoding, out var hasBom);
            var offset = hasBom ? encoding.GetPreamble().Length : 0;
            return encoding.GetString(bytes, offset, bytes.Length - offset);
        }

        private static void DetectTextFormat(byte[] bytes, out Encoding encoding, out bool hasBom)
        {
            if (bytes.Length >= 4 && bytes[0] == 0xff && bytes[1] == 0xfe && bytes[2] == 0x00 && bytes[3] == 0x00)
            {
                encoding = Encoding.UTF32;
                hasBom = true;
                return;
            }
            if (bytes.Length >= 3 && bytes[0] == 0xef && bytes[1] == 0xbb && bytes[2] == 0xbf)
            {
                encoding = new UTF8Encoding(true);
                hasBom = true;
                return;
            }
            if (bytes.Length >= 2 && bytes[0] == 0xff && bytes[1] == 0xfe)
            {
                encoding = Encoding.Unicode;
                hasBom = true;
                return;
            }
            if (bytes.Length >= 2 && bytes[0] == 0xfe && bytes[1] == 0xff)
            {
                encoding = Encoding.BigEndianUnicode;
                hasBom = true;
                return;
            }
            var header = Encoding.UTF8.GetString(bytes, 0, Math.Min(bytes.Length, 256));
            var declarationEncoding = Regex.Match(header, "encoding\\s*=\\s*['\"](?<name>[^'\"]+)['\"]", RegexOptions.IgnoreCase);
            try
            {
                encoding = declarationEncoding.Success ? Encoding.GetEncoding(declarationEncoding.Groups["name"].Value) : new UTF8Encoding(false);
            }
            catch
            {
                encoding = new UTF8Encoding(false);
            }
            hasBom = false;
        }
    }
}

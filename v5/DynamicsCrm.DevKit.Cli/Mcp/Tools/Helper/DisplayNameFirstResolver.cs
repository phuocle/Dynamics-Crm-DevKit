using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal enum ResolveStatus
    {
        Ok,
        Ambiguous,
        NotFound,
        Error
    }

    internal sealed class ResolveCandidate
    {
        public string DisplayName { get; init; }
        public string LogicalName { get; init; }
        public string UniqueName { get; init; }
        public string SchemaName { get; init; }
        public Guid? Id { get; init; }
        public string Kind { get; init; }
    }

    internal sealed class ResolveResult<T>
    {
        public ResolveStatus Status { get; init; }
        public T Value { get; init; }
        public string CanonicalName { get; init; }
        public string Error { get; init; }
        public List<ResolveCandidate> Candidates { get; init; } = [];
        public bool IsSuccess => Status == ResolveStatus.Ok;
    }

    internal sealed class DisplayNameFirstCandidate<T>
    {
        public T Value { get; init; }
        public string DisplayName { get; init; }
        public string LogicalName { get; init; }
        public string UniqueName { get; init; }
        public string SchemaName { get; init; }
        public Guid? Id { get; init; }
        public string Kind { get; init; }
        public string CanonicalName { get; init; }

        public ResolveCandidate ToResolveCandidate() => new()
        {
            DisplayName = DisplayName,
            LogicalName = LogicalName,
            UniqueName = UniqueName,
            SchemaName = SchemaName,
            Id = Id,
            Kind = Kind
        };
    }

    internal static class DisplayNameFirstResolver
    {
        internal static ResolveResult<T> Resolve<T>(
            string input,
            IEnumerable<DisplayNameFirstCandidate<T>> candidates,
            string ambiguousTag,
            string notFoundTag,
            string notFoundTip,
            string retryParameterName)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return new ResolveResult<T>
                {
                    Status = ResolveStatus.Error,
                    Error = "Input cannot be empty."
                };
            }

            var trimmed = input.Trim();
            var candidateList = candidates
                .Where(c => c != null)
                .ToList();

            var composite = ParseDisplayAndIdentifier(trimmed);
            if (composite.HasValue)
            {
                var (displayName, identifier) = composite.Value;
                var compositeMatches = candidateList
                    .Where(c =>
                        EqualsIgnoreCase(c.DisplayName, displayName) &&
                        (EqualsIgnoreCase(c.LogicalName, identifier) ||
                         EqualsIgnoreCase(c.UniqueName, identifier) ||
                         EqualsIgnoreCase(c.SchemaName, identifier)))
                    .ToList();

                if (compositeMatches.Count == 1)
                    return Ok(compositeMatches[0]);

                if (compositeMatches.Count > 1)
                    return Ambiguous<T>(ambiguousTag, trimmed, "display+identifier", compositeMatches, retryParameterName);
            }

            IReadOnlyList<string> logicalInputs = composite.HasValue ? new[] { trimmed } : GetLogicalSearchInputs(trimmed);
            var exactLogicalMatches = candidateList
                .Where(c =>
                    logicalInputs.Any(term =>
                        EqualsIgnoreCase(c.LogicalName, term) ||
                        EqualsIgnoreCase(c.UniqueName, term) ||
                        EqualsIgnoreCase(c.SchemaName, term)))
                .ToList();

            if (exactLogicalMatches.Count == 1)
                return Ok(exactLogicalMatches[0]);

            if (exactLogicalMatches.Count > 1)
                return Ambiguous<T>(ambiguousTag, trimmed, "logical", exactLogicalMatches, retryParameterName);

            IReadOnlyList<string> displayInputs = composite.HasValue ? new[] { trimmed } : GetDisplaySearchInputs(trimmed);
            var displayMatches = candidateList
                .Where(c => displayInputs.Any(term => Contains(c.DisplayName, term)))
                .ToList();

            if (displayMatches.Count == 1)
                return Ok(displayMatches[0]);

            if (displayMatches.Count > 1)
            {
                var exactDisplayMatches = displayMatches
                    .Where(c => displayInputs.Any(term => EqualsIgnoreCase(c.DisplayName, term)))
                    .ToList();

                if (exactDisplayMatches.Count == 1)
                    return Ok(exactDisplayMatches[0]);

                return Ambiguous<T>(ambiguousTag, trimmed, "display", displayMatches, retryParameterName);
            }

            var logicalMatches = candidateList
                .Where(c =>
                    logicalInputs.Any(term =>
                        Contains(c.LogicalName, term) ||
                        Contains(c.UniqueName, term) ||
                        Contains(c.SchemaName, term)))
                .ToList();

            if (logicalMatches.Count == 1)
                return Ok(logicalMatches[0]);

            if (logicalMatches.Count > 1)
            {
                return Ambiguous<T>(ambiguousTag, trimmed, "logical", logicalMatches, retryParameterName);
            }

            return new ResolveResult<T>
            {
                Status = ResolveStatus.NotFound,
                Error = FormatNotFound(notFoundTag, trimmed, notFoundTip)
            };
        }

        internal static ResolveResult<EntityMetadata> ResolveEntity(
            ServiceClient serviceClient,
            string input,
            string callerToolName)
        {
            try
            {
                var request = new RetrieveAllEntitiesRequest
                {
                    EntityFilters = EntityFilters.Entity,
                    RetrieveAsIfPublished = true
                };
                var response = (RetrieveAllEntitiesResponse)serviceClient.Execute(request);
                var candidates = response.EntityMetadata.Select(e => new DisplayNameFirstCandidate<EntityMetadata>
                {
                    Value = e,
                    DisplayName = e.DisplayName?.UserLocalizedLabel?.Label,
                    LogicalName = e.LogicalName,
                    SchemaName = e.SchemaName,
                    Id = e.MetadataId,
                    Kind = "entity",
                    CanonicalName = e.LogicalName
                });

                return Resolve(
                    input,
                    candidates,
                    "[AmbiguousEntity]",
                    "[NotFoundEntity]",
                    $"Hint: Use get_tables to list entities before calling {callerToolName}.",
                    "entity_name");
            }
            catch (Exception ex)
            {
                return Error<EntityMetadata>($"Failed to resolve entity '{input}': {ex.Message}");
            }
        }

        internal static ResolveResult<AttributeMetadata> ResolveAttribute(
            ServiceClient serviceClient,
            string entityLogicalName,
            string input,
            string callerToolName)
        {
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityLogicalName,
                    EntityFilters = EntityFilters.Attributes,
                    RetrieveAsIfPublished = true
                };
                var response = (RetrieveEntityResponse)serviceClient.Execute(request);
                var candidates = response.EntityMetadata.Attributes.Select(a => new DisplayNameFirstCandidate<AttributeMetadata>
                {
                    Value = a,
                    DisplayName = a.DisplayName?.UserLocalizedLabel?.Label,
                    LogicalName = a.LogicalName,
                    SchemaName = a.SchemaName,
                    Id = a.MetadataId,
                    Kind = "attribute",
                    CanonicalName = a.LogicalName
                });

                return Resolve(
                    input,
                    candidates,
                    "[AmbiguousField]",
                    "[NotFoundField]",
                    $"Hint: Use get_tables(entity_name='{entityLogicalName}') to list fields before calling {callerToolName}.",
                    "attribute_name");
            }
            catch (Exception ex)
            {
                return Error<AttributeMetadata>($"Failed to resolve field '{input}' on entity '{entityLogicalName}': {ex.Message}");
            }
        }

        internal static ResolveResult<OptionSetMetadataBase> ResolveGlobalOptionSet(
            ServiceClient serviceClient,
            string input,
            string callerToolName)
        {
            try
            {
                var response = (RetrieveAllOptionSetsResponse)serviceClient.Execute(new RetrieveAllOptionSetsRequest());
                var candidates = response.OptionSetMetadata.Select(os => new DisplayNameFirstCandidate<OptionSetMetadataBase>
                {
                    Value = os,
                    DisplayName = os.DisplayName?.UserLocalizedLabel?.Label,
                    LogicalName = os.Name,
                    UniqueName = os.Name,
                    Kind = "choice",
                    CanonicalName = os.Name
                });

                return Resolve(
                    input,
                    candidates,
                    "[AmbiguousChoice]",
                    "[NotFoundChoice]",
                    $"Hint: Use manage_choice(action='list') before calling {callerToolName}.",
                    "optionset_name");
            }
            catch (Exception ex)
            {
                return Error<OptionSetMetadataBase>($"Failed to resolve global option set '{input}': {ex.Message}");
            }
        }

        internal static ResolveResult<Entity> ResolveApp(
            ServiceClient serviceClient,
            string input,
            string callerToolName)
        {
            return ResolveDataverseRecord(
                serviceClient,
                input,
                entityName: "appmodule",
                idColumn: "appmoduleid",
                columns: new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename", "description", "webresourceid"),
                displayColumn: "name",
                logicalColumn: null,
                uniqueColumn: "uniquename",
                schemaColumn: null,
                kind: "app",
                ambiguousTag: "[AmbiguousApp]",
                notFoundTag: "[NotFoundApp]",
                notFoundTip: $"Hint: Use manage_app(action='list') before calling {callerToolName}.",
                retryParameterName: "app");
        }

        internal static ResolveResult<Entity> ResolveWebResource(
            ServiceClient serviceClient,
            string input,
            string callerToolName)
        {
            return ResolveDataverseRecord(
                serviceClient,
                input,
                entityName: "webresource",
                idColumn: "webresourceid",
                columns: new ColumnSet("webresourceid", "name", "displayname", "webresourcetype", "ismanaged", "modifiedon", "modifiedby"),
                displayColumn: "displayname",
                logicalColumn: null,
                uniqueColumn: "name",
                schemaColumn: null,
                kind: "webresource",
                ambiguousTag: "[AmbiguousWebResource]",
                notFoundTag: "[NotFoundWebResource]",
                notFoundTip: $"Hint: Use manage_webresource(action='list') before calling {callerToolName}.",
                retryParameterName: "web_resource_id");
        }

        internal static ResolveResult<Entity> ResolveEnvironmentVariableDefinition(
            ServiceClient serviceClient,
            string input,
            string callerToolName)
        {
            return ResolveDataverseRecord(
                serviceClient,
                input,
                entityName: "environmentvariabledefinition",
                idColumn: "environmentvariabledefinitionid",
                columns: new ColumnSet("environmentvariabledefinitionid", "schemaname", "displayname", "type", "defaultvalue", "description"),
                displayColumn: "displayname",
                logicalColumn: null,
                uniqueColumn: null,
                schemaColumn: "schemaname",
                kind: "environmentvariable",
                ambiguousTag: "[AmbiguousEnvironmentVariable]",
                notFoundTag: "[NotFoundEnvironmentVariable]",
                notFoundTip: $"Hint: Use manage_environment_variable(action='list') before calling {callerToolName}.",
                retryParameterName: "variable_name");
        }

        internal static ResolveResult<Entity> ResolveDataverseRecord(
            ServiceClient serviceClient,
            string input,
            string entityName,
            string idColumn,
            ColumnSet columns,
            string displayColumn,
            string logicalColumn,
            string uniqueColumn,
            string schemaColumn,
            string kind,
            string ambiguousTag,
            string notFoundTag,
            string notFoundTip,
            string retryParameterName)
        {
            if (serviceClient == null)
                return Error<Entity>("IOrganizationService is null.");
            if (string.IsNullOrWhiteSpace(input))
                return Error<Entity>("Input cannot be empty.");

            try
            {
                var trimmed = input.Trim();
                var query = new QueryExpression(entityName)
                {
                    ColumnSet = columns ?? new ColumnSet(true)
                };

                var filter = new FilterExpression(LogicalOperator.Or);
                foreach (var term in GetSearchInputs(trimmed))
                {
                    AddLikeCondition(filter, displayColumn, term);
                    AddLikeCondition(filter, logicalColumn, term);
                    AddLikeCondition(filter, uniqueColumn, term);
                    AddLikeCondition(filter, schemaColumn, term);
                }

                if (filter.Conditions.Count == 0)
                    return Error<Entity>("At least one display/logical column is required for Dataverse record resolution.");

                query.Criteria = filter;

                var rows = serviceClient.RetrieveMultiple(query).Entities;
                var candidates = rows.Select(e => new DisplayNameFirstCandidate<Entity>
                {
                    Value = e,
                    DisplayName = GetString(e, displayColumn),
                    LogicalName = GetString(e, logicalColumn),
                    UniqueName = GetString(e, uniqueColumn),
                    SchemaName = GetString(e, schemaColumn),
                    Id = GetId(e, idColumn),
                    Kind = kind,
                    CanonicalName = FirstNonEmpty(
                        GetString(e, logicalColumn),
                        GetString(e, uniqueColumn),
                        GetString(e, schemaColumn),
                        GetString(e, displayColumn),
                        GetId(e, idColumn)?.ToString())
                });

                return Resolve(input, candidates, ambiguousTag, notFoundTag, notFoundTip, retryParameterName);
            }
            catch (Exception ex)
            {
                return Error<Entity>($"Failed to resolve {kind} '{input}': {ex.Message}");
            }
        }

        internal static string FormatAmbiguous(
            string tag,
            string input,
            string phase,
            IEnumerable<ResolveCandidate> candidates,
            string retryParameterName)
        {
            var candidateList = candidates?.ToList() ?? [];
            var sb = new StringBuilder();
            sb.AppendLine($"Multiple candidates match '{input}' during {phase} name search.");
            sb.AppendLine($"Re-call with a more specific {retryParameterName} value.");
            sb.AppendLine();
            sb.AppendLine("DisplayName\tLogicalName\tUniqueName\tSchemaName\tId");

            foreach (var candidate in candidateList.Take(25))
            {
                sb.AppendLine(
                    $"{Clean(candidate.DisplayName)}\t{Clean(candidate.LogicalName)}\t{Clean(candidate.UniqueName)}\t{Clean(candidate.SchemaName)}\t{candidate.Id?.ToString() ?? ""}");
            }

            if (candidateList.Count > 25)
                sb.AppendLine($"... {candidateList.Count - 25} more candidates omitted.");

            return sb.ToString().TrimEnd();
        }

        private static ResolveResult<T> Ok<T>(DisplayNameFirstCandidate<T> candidate)
        {
            return new ResolveResult<T>
            {
                Status = ResolveStatus.Ok,
                Value = candidate.Value,
                CanonicalName = candidate.CanonicalName,
                Candidates = [candidate.ToResolveCandidate()]
            };
        }

        private static ResolveResult<T> Ambiguous<T>(
            string tag,
            string input,
            string phase,
            IEnumerable<DisplayNameFirstCandidate<T>> candidates,
            string retryParameterName)
        {
            var candidateList = candidates.Select(c => c.ToResolveCandidate()).ToList();
            return new ResolveResult<T>
            {
                Status = ResolveStatus.Ambiguous,
                Error = FormatAmbiguous(tag, input, phase, candidateList, retryParameterName),
                Candidates = candidateList
            };
        }

        private static ResolveResult<T> Error<T>(string error)
        {
            return new ResolveResult<T>
            {
                Status = ResolveStatus.Error,
                Error = error
            };
        }

        private static string FormatNotFound(string tag, string input, string notFoundTip)
        {
            var sb = new StringBuilder();
            sb.Append($"'{input}' was not found by Display Name or Logical/Unique/Schema Name.");
            if (!string.IsNullOrWhiteSpace(notFoundTip))
                sb.AppendLine().Append(notFoundTip);
            return sb.ToString();
        }

        private static void AddLikeCondition(FilterExpression filter, string column, string input)
        {
            if (!string.IsNullOrWhiteSpace(column))
                filter.AddCondition(column, ConditionOperator.Like, $"%{input}%");
        }

        internal static IReadOnlyList<string> GetSearchInputs(string input)
        {
            var terms = new List<string>();
            if (string.IsNullOrWhiteSpace(input))
                return terms;

            var trimmed = input.Trim();
            AddSearchInput(terms, trimmed);

            var composite = ParseDisplayAndIdentifier(trimmed);
            if (composite.HasValue)
            {
                AddSearchInput(terms, composite.Value.DisplayName);
                AddSearchInput(terms, composite.Value.Identifier);
            }

            return terms;
        }

        private static IReadOnlyList<string> GetDisplaySearchInputs(string input)
        {
            var terms = new List<string>();
            AddSearchInput(terms, input);

            var composite = ParseDisplayAndIdentifier(input);
            if (composite.HasValue)
                AddSearchInput(terms, composite.Value.DisplayName);

            return terms;
        }

        private static IReadOnlyList<string> GetLogicalSearchInputs(string input)
        {
            var terms = new List<string>();
            AddSearchInput(terms, input);

            var composite = ParseDisplayAndIdentifier(input);
            if (composite.HasValue)
                AddSearchInput(terms, composite.Value.Identifier);

            return terms;
        }

        private static (string DisplayName, string Identifier)? ParseDisplayAndIdentifier(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return null;

            var trimmed = input.Trim();
            if (!trimmed.EndsWith(")", StringComparison.Ordinal))
                return null;

            var openParen = trimmed.LastIndexOf('(');
            if (openParen <= 0 || openParen >= trimmed.Length - 2)
                return null;

            var displayName = trimmed[..openParen].Trim();
            var identifier = trimmed[(openParen + 1)..^1].Trim();
            if (string.IsNullOrWhiteSpace(displayName) || string.IsNullOrWhiteSpace(identifier))
                return null;

            return (displayName, identifier);
        }

        private static void AddSearchInput(List<string> terms, string value)
        {
            if (string.IsNullOrWhiteSpace(value))
                return;

            var trimmed = value.Trim();
            if (!terms.Any(term => EqualsIgnoreCase(term, trimmed)))
                terms.Add(trimmed);
        }

        private static bool Contains(string value, string input) =>
            !string.IsNullOrEmpty(value) &&
            value.Contains(input, StringComparison.OrdinalIgnoreCase);

        private static bool EqualsIgnoreCase(string value, string input) =>
            !string.IsNullOrEmpty(value) &&
            value.Equals(input, StringComparison.OrdinalIgnoreCase);

        private static string GetString(Entity entity, string attributeName)
        {
            if (entity == null || string.IsNullOrWhiteSpace(attributeName) || !entity.Contains(attributeName))
                return null;
            return entity.GetAttributeValue<string>(attributeName);
        }

        private static Guid? GetId(Entity entity, string idColumn)
        {
            if (entity == null)
                return null;
            if (entity.Id != Guid.Empty)
                return entity.Id;
            if (!string.IsNullOrWhiteSpace(idColumn) && entity.Contains(idColumn))
            {
                var id = entity.GetAttributeValue<Guid>(idColumn);
                return id == Guid.Empty ? null : id;
            }
            return null;
        }

        private static string FirstNonEmpty(params string[] values) =>
            values.FirstOrDefault(v => !string.IsNullOrWhiteSpace(v));

        private static string Clean(string value) =>
            string.IsNullOrWhiteSpace(value) ? "" : value.Replace('\t', ' ').Replace("\r", " ").Replace("\n", " ");
    }
}

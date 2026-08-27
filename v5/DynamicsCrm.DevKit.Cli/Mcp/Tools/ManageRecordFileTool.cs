using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography;
using System.ServiceModel;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRecordFileTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        private static readonly HttpClient _httpClient = new() { Timeout = TimeSpan.FromMinutes(5) };

        private const long MaxBase64UploadBytes = 1L * 1024 * 1024; // 1 MB
        private static readonly string[] ImageExtensions = [".gif", ".jpeg", ".jpg", ".tiff", ".tif", ".bmp", ".png"];

        public ManageRecordFileTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient ?? throw new ArgumentNullException(nameof(serviceClient));
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_record_file", Title = "Manage file and image columns",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRecordFileResult)),
        Description(
            "Manage Dataverse File and Image column data. Actions: 'info' (read-only) | 'upload', 'download', 'delete' (upload/delete are mutations).\n" +
            "- Upload always uses the SDK block protocol (4 MB blocks) — works for any size up to the column limit\n" +
            "- Image columns: only gif/jpeg/tiff/bmp/png; download returns the thumbnail by default, use full_size=true for the full-sized image (requires CanStoreFullImage)\n" +
            "- execute_webapi BLOCKS file/image endpoints (/$value, block-protocol actions, chunked PATCH) — always use this tool instead\n\n" +
            "WHEN TO USE:\n" +
            "- Inspect a file/image column value (file id, name, size, column limits)\n" +
            "- Upload a file from a local path, an http(s) URL (auto-downloaded), or base64 (< 1 MB)\n" +
            "- Download a file or image to local disk (.devkit/manage_record_file/{entity}/{record}/)\n" +
            "- Clear a file/image column value without deleting the record\n\n" +
            "RELATED TOOLS:\n" +
            "- get_tables → find File/Image columns of a table\n" +
            "- manage_record / search_records → find record_id\n" +
            "- manage_column → create file/image columns or raise MaxSizeInKB")]
        public async Task<CallToolResult> manage_record_file(
            McpServer server,
            [Description("'info', 'upload', 'download', 'delete'.")] string action = "",
            [Description("Table Display or logical name (Display Name resolved first). Required.")] string entity_name = "",
            [Description("File/Image column Display or logical name (Display Name resolved first). Required.")] string column_name = "",
            [Description("GUID of the record. Required.")] string record_id = "",
            [Description("upload: local file path or http(s) URL (auto-downloaded). Relative paths resolve against the workspace folder (auto-resolved from MCP roots or server cwd).")] string file_path = "",
            [Description("upload alternative: base64 content, files < 1 MB only. Requires file_name.")] string content_base64 = "",
            [Description("upload: override file name. Required with content_base64; default = name from path/URL.")] string file_name = "",
            [Description("download: image columns only. true = full-sized image (requires CanStoreFullImage); false = thumbnail. Default false.")] bool full_size = false)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required. Valid values: 'info', 'upload', 'download', 'delete'.");
                if (string.IsNullOrWhiteSpace(entity_name))
                    return Error("entity_name is required.");
                if (string.IsNullOrWhiteSpace(column_name))
                    return Error("column_name is required.");
                if (!Guid.TryParse(record_id?.Trim(), out var recordId))
                    return Error("record_id must be a valid GUID.", "Use search_records or parse_record_url to find the record id.");

                var entityResolved = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entity_name.Trim(), "manage_record_file");
                if (!entityResolved.IsSuccess)
                    return entityResolved.Status == ResolveStatus.NotFound
                        ? Error(entityResolved.Error.Split("\r\n")[0],
                            "Use get_tables to list entities before calling manage_record_file.")
                        : Error(entityResolved.Error);
                var entityLogical = entityResolved.Value.LogicalName;

                var attrResolved = DisplayNameFirstResolver.ResolveAttribute(_serviceClient, entityLogical, column_name.Trim(), "manage_record_file");
                if (!attrResolved.IsSuccess)
                    return attrResolved.Status == ResolveStatus.NotFound
                        ? Error(attrResolved.Error.Split("\r\n")[0],
                            $"Use get_tables(entity_name='{entityLogical}') to list fields before calling manage_record_file.")
                        : Error(attrResolved.Error);
                var attribute = attrResolved.Value;
                var fileAttr = attribute as FileAttributeMetadata;
                var imageAttr = attribute as ImageAttributeMetadata;
                if (fileAttr == null && imageAttr == null)
                    return Error(
                        $"Column '{attribute.LogicalName}' on table '{entityLogical}' is of type '{attribute.AttributeType}' — not a file/image column.",
                        "Use get_tables to list columns; file columns have type 'File', image columns have type 'Image'.");

                var workspaceFolder = action.Trim() is "upload" or "download"
                    ? await WorkspaceFolderHelper.GetAsync(server)
                    : "";

                return action.Trim().ToLowerInvariant() switch
                {
                    "info" => HandleInfo(entityLogical, recordId, fileAttr, imageAttr),
                    "upload" => HandleUpload(entityLogical, recordId, fileAttr, imageAttr, file_path, content_base64, file_name, workspaceFolder),
                    "download" => HandleDownload(entityLogical, recordId, fileAttr, imageAttr, full_size, workspaceFolder),
                    "delete" => HandleDelete(entityLogical, recordId, fileAttr, imageAttr),
                    _ => Error($"Invalid action '{action}'. Valid values: 'info', 'upload', 'download', 'delete'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        #region Actions

        private CallToolResult HandleInfo(string entityLogical, Guid recordId, FileAttributeMetadata fileAttr, ImageAttributeMetadata imageAttr)
        {
            var record = RetrieveRecord(entityLogical, recordId, out var columnLogical, out var primaryName, fileAttr, imageAttr);

            var result = BaseResult("info", entityLogical, recordId, primaryName, columnLogical, fileAttr, imageAttr);
            if (fileAttr != null)
            {
                var fileId = record.GetAttributeValue<Guid?>(columnLogical);
                result.HasValue = fileId.HasValue;
                result.FileId = fileId?.ToString();
                result.FileName = record.GetAttributeValue<string>(columnLogical + "_name");
                if (fileId.HasValue)
                {
                    var init = (InitializeFileBlocksDownloadResponse)DataverseMutationExecutor.ExecuteReadOnly(
                        _serviceClient,
                        new InitializeFileBlocksDownloadRequest
                        {
                            Target = new EntityReference(entityLogical, recordId),
                            FileAttributeName = columnLogical
                        });
                    result.FileSizeInBytes = init.FileSizeInBytes;
                    if (string.IsNullOrEmpty(result.FileName)) result.FileName = init.FileName;
                }
                return Success(
                    fileId.HasValue
                        ? $"File column '{columnLogical}' on {entityLogical}({recordId}): '{result.FileName}' ({result.FileSizeInBytes:N0} bytes), FileId {fileId}."
                        : $"File column '{columnLogical}' on {entityLogical}({recordId}) is empty.",
                    result);
            }
            else
            {
                var thumbnail = record.GetAttributeValue<byte[]>(columnLogical);
                var timestamp = record.GetAttributeValue<long?>(columnLogical + "_timestamp");
                result.HasValue = thumbnail != null || timestamp.HasValue;
                result.FileSizeInBytes = thumbnail?.LongLength;
                result.ImageUrl = record.GetAttributeValue<string>(columnLogical + "_url");
                result.ImageTimestamp = timestamp;
                return Success(
                    result.HasValue == true
                        ? $"Image column '{columnLogical}' on {entityLogical}({recordId}) has an image (thumbnail {result.FileSizeInBytes:N0} bytes)."
                        : $"Image column '{columnLogical}' on {entityLogical}({recordId}) is empty.",
                    result);
            }
        }

        private CallToolResult HandleUpload(string entityLogical, Guid recordId, FileAttributeMetadata fileAttr, ImageAttributeMetadata imageAttr,
            string filePath, string contentBase64, string fileName, string workspaceFolder)
        {
            var columnLogical = (fileAttr ?? (AttributeMetadata)imageAttr).LogicalName;

            var hasPath = !string.IsNullOrWhiteSpace(filePath);
            var hasBase64 = !string.IsNullOrWhiteSpace(contentBase64);
            if (hasPath && hasBase64)
                return Error("Provide either file_path or content_base64, not both.");
            if (!hasPath && !hasBase64)
                return Error("upload requires file_path (local path or http(s) URL) or content_base64 (< 1 MB, with file_name).");

            byte[] data;
            string resolvedFileName;
            string sourceDescription;
            if (hasBase64)
            {
                if (string.IsNullOrWhiteSpace(fileName))
                    return Error("file_name is required when uploading via content_base64.");
                data = new byte[contentBase64.Trim().Length * 3 / 4];
                if (!Convert.TryFromBase64String(contentBase64.Trim(), data, out var bytesWritten))
                    return Error("content_base64 is not valid base64.");
                Array.Resize(ref data, bytesWritten);
                if (data.LongLength >= MaxBase64UploadBytes)
                    return Error($"content_base64 supports files < 1 MB only ({data.LongLength:N0} bytes given). Use file_path for larger files.");
                resolvedFileName = fileName.Trim();
                sourceDescription = "content_base64";
            }
            else
            {
                var trimmedPath = filePath.Trim();
                if (trimmedPath.StartsWith("http://", StringComparison.OrdinalIgnoreCase) ||
                    trimmedPath.StartsWith("https://", StringComparison.OrdinalIgnoreCase))
                {
                    var (urlData, urlFileName) = DownloadFromUrl(trimmedPath);
                    data = urlData;
                    resolvedFileName = !string.IsNullOrWhiteSpace(fileName) ? fileName.Trim() : urlFileName;
                    if (string.IsNullOrWhiteSpace(resolvedFileName))
                        return Error("Could not determine a file name from the URL. Provide file_name.");
                    sourceDescription = trimmedPath;
                }
                else
                {
                    var fullPath = Path.IsPathRooted(trimmedPath)
                        ? trimmedPath
                        : Path.Combine(workspaceFolder, trimmedPath);
                    if (!File.Exists(fullPath))
                        return Error($"File not found: '{fullPath}'.", "Check the path; relative paths resolve against the workspace folder (auto-resolved).");
                    data = File.ReadAllBytes(fullPath);
                    resolvedFileName = !string.IsNullOrWhiteSpace(fileName) ? fileName.Trim() : Path.GetFileName(fullPath);
                    sourceDescription = fullPath;
                }
            }

            if (imageAttr != null)
            {
                var ext = Path.GetExtension(resolvedFileName)?.ToLowerInvariant() ?? "";
                if (!ImageExtensions.Contains(ext))
                    return Error(
                        $"'{resolvedFileName}' is not a supported image type for image column '{columnLogical}'. Allowed: gif, jpeg, tiff, bmp, png.",
                        "Rename the file to a supported extension or convert it before uploading.");
            }
            var maxSizeKb = fileAttr?.MaxSizeInKB ?? imageAttr?.MaxSizeInKB;
            if (maxSizeKb.HasValue && data.LongLength > (long)maxSizeKb.Value * 1024)
            {
                if (imageAttr != null && imageAttr.CanStoreFullImage == true)
                {
                }
                else
                {
                    return Error(
                        $"File size {data.LongLength:N0} bytes exceeds the column limit MaxSizeInKB={maxSizeKb.Value} ({(long)maxSizeKb.Value * 1024:N0} bytes) on '{columnLogical}'.",
                        "Raise MaxSizeInKB via manage_column (file columns max 131072 KB) or upload a smaller file. For image columns without CanStoreFullImage the platform rejects oversized uploads with ProcessImageFailure 0x80072553.");
                }
            }

            var record = RetrieveRecord(entityLogical, recordId, out _, out var primaryName, fileAttr, imageAttr, idOnly: true);

            var blockCount = (int)((data.LongLength + FileColumnTransferHelper.BlockSize - 1) / FileColumnTransferHelper.BlockSize);
            var result = BaseResult("upload", entityLogical, recordId, primaryName, columnLogical, fileAttr, imageAttr);
            result.FileName = resolvedFileName;
            result.FileSizeInBytes = data.LongLength;
            result.BlockCount = blockCount;
            if (_options.DryRun)
            {
                result.Status = "dry_run";
                return DryRun(
                    $"Would upload '{resolvedFileName}' ({data.LongLength:N0} bytes, {blockCount} block(s)) from {sourceDescription} to {entityLogical}.{columnLogical} on record {recordId}.",
                    result);
            }

            var (fileId, blocks) = FileColumnTransferHelper.Upload(
                _context, _serviceClient, new EntityReference(entityLogical, recordId), columnLogical, resolvedFileName, data);
            result.Status = "uploaded";
            result.FileId = fileId.ToString();
            result.BlockCount = blocks;
            return Success(
                $"Uploaded '{resolvedFileName}' ({data.LongLength:N0} bytes, {blocks} block(s)) to {entityLogical}.{columnLogical} on record {recordId}. FileId: {fileId}.",
                result);
        }

        private CallToolResult HandleDownload(string entityLogical, Guid recordId, FileAttributeMetadata fileAttr, ImageAttributeMetadata imageAttr,
            bool fullSize, string workspaceFolder)
        {
            var record = RetrieveRecord(entityLogical, recordId, out var columnLogical, out var primaryName, fileAttr, imageAttr);

            byte[] data;
            string downloadFileName;
            if (fileAttr != null)
            {
                var fileId = record.GetAttributeValue<Guid?>(columnLogical);
                if (!fileId.HasValue)
                    return Error($"File column '{columnLogical}' on {entityLogical}({recordId}) is empty — nothing to download.");
                var (bytes, serverName) = FileColumnTransferHelper.Download(_serviceClient, new EntityReference(entityLogical, recordId), columnLogical);
                data = bytes;
                downloadFileName = FirstNonEmpty(serverName, record.GetAttributeValue<string>(columnLogical + "_name"), "file.bin");
            }
            else if (fullSize)
            {
                if (imageAttr.CanStoreFullImage != true)
                    return Error(
                        $"Image column '{columnLogical}' does not store the full-sized image (CanStoreFullImage=false).",
                        "Call again with full_size=false to download the thumbnail, or enable full-size storage on the column via manage_column.");
                if (record.GetAttributeValue<byte[]>(columnLogical) == null &&
                    record.GetAttributeValue<long?>(columnLogical + "_timestamp") == null)
                    return Error($"Image column '{columnLogical}' on {entityLogical}({recordId}) is empty — nothing to download.");
                var (bytes, serverName) = FileColumnTransferHelper.Download(_serviceClient, new EntityReference(entityLogical, recordId), columnLogical);
                data = bytes;
                downloadFileName = FirstNonEmpty(serverName, columnLogical + DetectImageExtension(data));
            }
            else
            {
                data = record.GetAttributeValue<byte[]>(columnLogical);
                if (data == null)
                    return Error($"Image column '{columnLogical}' on {entityLogical}({recordId}) is empty — nothing to download.");
                downloadFileName = columnLogical + DetectImageExtension(data);
            }

            var folder = Path.Combine(workspaceFolder, ".devkit", "manage_record_file", entityLogical,
                FileColumnTransferHelper.SanitizeFolderName(primaryName ?? recordId.ToString()));
            Directory.CreateDirectory(folder);
            var savedPath = FileColumnTransferHelper.GetUniqueFilePath(folder, downloadFileName);
            File.WriteAllBytes(savedPath, data);
            var sha256 = Convert.ToHexString(SHA256.HashData(data)).ToLowerInvariant();

            var result = BaseResult("download", entityLogical, recordId, primaryName, columnLogical, fileAttr, imageAttr);
            result.HasValue = true;
            result.FileName = Path.GetFileName(savedPath);
            result.FileSizeInBytes = data.LongLength;
            result.FullSize = imageAttr != null ? (bool?)fullSize : null;
            result.SavedPath = savedPath;
            result.Sha256 = sha256;
            result.Status = "downloaded";
            return Success(
                $"Downloaded {entityLogical}.{columnLogical} of record {recordId} ({data.LongLength:N0} bytes{(imageAttr != null ? (fullSize ? ", full-sized image" : ", thumbnail") : "")}) — saved to file (see savedPath).",
                result);
        }

        private CallToolResult HandleDelete(string entityLogical, Guid recordId, FileAttributeMetadata fileAttr, ImageAttributeMetadata imageAttr)
        {
            var record = RetrieveRecord(entityLogical, recordId, out var columnLogical, out var primaryName, fileAttr, imageAttr);

            var result = BaseResult("delete", entityLogical, recordId, primaryName, columnLogical, fileAttr, imageAttr);
            if (fileAttr != null)
            {
                var fileId = record.GetAttributeValue<Guid?>(columnLogical);
                if (!fileId.HasValue)
                    return Error($"File column '{columnLogical}' on {entityLogical}({recordId}) is empty — nothing to delete.");
                result.FileId = fileId.Value.ToString();
                result.FileName = record.GetAttributeValue<string>(columnLogical + "_name");
                if (_options.DryRun)
                {
                    result.Status = "dry_run";
                    return DryRun($"Would delete file '{result.FileName}' (FileId {fileId.Value}) from {entityLogical}.{columnLogical} on record {recordId}. The record itself is kept.", result);
                }
                DataverseMutationExecutor.Execute(_context, _serviceClient, new DeleteFileRequest { FileId = fileId.Value });
            }
            else
            {
                var hasImage = record.GetAttributeValue<byte[]>(columnLogical) != null ||
                               record.GetAttributeValue<long?>(columnLogical + "_timestamp") != null;
                if (!hasImage)
                    return Error($"Image column '{columnLogical}' on {entityLogical}({recordId}) is empty — nothing to delete.");
                if (_options.DryRun)
                {
                    result.Status = "dry_run";
                    return DryRun($"Would clear image column {entityLogical}.{columnLogical} on record {recordId}. The record itself is kept.", result);
                }
                DataverseMutationExecutor.Update(_context, _serviceClient, new Entity(entityLogical, recordId) { [columnLogical] = null });
            }
            result.Status = "deleted";
            return Success(
                $"Deleted value of {(fileAttr != null ? "file" : "image")} column {entityLogical}.{columnLogical} on record {recordId}. The record itself was not deleted.",
                result);
        }

        #endregion

        #region Helpers

        private Entity RetrieveRecord(string entityLogical, Guid recordId, out string columnLogical, out string primaryName,
            FileAttributeMetadata fileAttr, ImageAttributeMetadata imageAttr, bool idOnly = false)
        {
            columnLogical = (fileAttr ?? (AttributeMetadata)imageAttr).LogicalName;
            primaryName = null;
            var metadata = (RetrieveEntityResponse)DataverseMutationExecutor.ExecuteReadOnly(
                _serviceClient,
                new RetrieveEntityRequest
                {
                    LogicalName = entityLogical,
                    EntityFilters = EntityFilters.Entity | EntityFilters.Attributes
                });
            var primaryNameAttr = metadata.EntityMetadata.PrimaryNameAttribute;

            ColumnSet columns;
            if (idOnly)
            {
                columns = new ColumnSet(false);
            }
            else
            {
                var colName = columnLogical;
                var columnPrefix = colName + "_";
                var names = metadata.EntityMetadata.Attributes
                    .Where(a => a.LogicalName == colName || a.LogicalName.StartsWith(columnPrefix, StringComparison.Ordinal))
                    .Select(a => a.LogicalName)
                    .ToList();
                if (!string.IsNullOrEmpty(primaryNameAttr) && !names.Contains(primaryNameAttr))
                    names.Add(primaryNameAttr);
                columns = new ColumnSet(names.ToArray());
            }

            var record = _serviceClient.Retrieve(entityLogical, recordId, columns);
            if (!idOnly && !string.IsNullOrEmpty(primaryNameAttr))
                primaryName = record.GetAttributeValue<string>(primaryNameAttr);
            return record;
        }

        private static ManageRecordFileResult BaseResult(string action, string entityLogical, Guid recordId, string primaryName,
            string columnLogical, FileAttributeMetadata fileAttr, ImageAttributeMetadata imageAttr)
        {
            return new ManageRecordFileResult
            {
                Action = action,
                EntityName = entityLogical,
                RecordId = recordId.ToString(),
                RecordPrimaryName = primaryName,
                ColumnName = columnLogical,
                ColumnType = fileAttr != null ? "file" : "image",
                MaxSizeInKB = fileAttr?.MaxSizeInKB ?? imageAttr?.MaxSizeInKB,
                IsPrimaryImage = imageAttr?.IsPrimaryImage,
                CanStoreFullImage = imageAttr?.CanStoreFullImage
            };
        }

        private (byte[] data, string fileName) DownloadFromUrl(string url)
        {
            var response = _httpClient.GetAsync(url).GetAwaiter().GetResult();
            if (!response.IsSuccessStatusCode)
                throw new HttpRequestException($"HTTP {(int)response.StatusCode} {response.ReasonPhrase}");
            var data = response.Content.ReadAsByteArrayAsync().GetAwaiter().GetResult();
            var segment = new Uri(url).AbsolutePath.Split('/').LastOrDefault(s => !string.IsNullOrEmpty(s));
            var fileName = segment == null ? null : Uri.UnescapeDataString(segment);
            return (data, fileName);
        }

        private static string DetectImageExtension(byte[] data)
        {
            if (data.Length >= 4)
            {
                if (data[0] == 0x89 && data[1] == 0x50) return ".png";
                if (data[0] == 0xFF && data[1] == 0xD8) return ".jpg";
                if (data[0] == 0x47 && data[1] == 0x49) return ".gif";
                if (data[0] == 0x42 && data[1] == 0x4D) return ".bmp";
                if ((data[0] == 0x49 && data[1] == 0x49) || (data[0] == 0x4D && data[1] == 0x4D)) return ".tiff";
            }
            return ".png";
        }

        private static string FirstNonEmpty(params string[] values) =>
            values.FirstOrDefault(v => !string.IsNullOrWhiteSpace(v));

        #endregion
    }
}

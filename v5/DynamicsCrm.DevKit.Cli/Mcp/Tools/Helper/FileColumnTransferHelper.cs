#nullable enable
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Block-protocol transfer for Dataverse File/Image columns.
    /// Upload always uses InitializeFileBlocksUpload → UploadBlock (4 MB) →
    /// CommitFileBlocksUpload (SDK path, works for any size). Download uses
    /// InitializeFileBlocksDownload → DownloadBlock. All mutations are routed
    /// through <see cref="DataverseMutationExecutor"/> so dry-run cannot be bypassed.
    /// </summary>
    internal static class FileColumnTransferHelper
    {
        internal const int BlockSize = 4 * 1024 * 1024;

        /// <summary>
        /// Upload <paramref name="data"/> to a file/image column. Returns the committed
        /// FileId and the number of blocks uploaded.
        /// </summary>
        internal static (Guid FileId, int BlockCount) Upload(
            McpExecutionContext context,
            IOrganizationService service,
            EntityReference target,
            string attributeLogicalName,
            string fileName,
            byte[] data)
        {
            var init = (InitializeFileBlocksUploadResponse)DataverseMutationExecutor.Execute(
                context,
                service,
                new InitializeFileBlocksUploadRequest
                {
                    Target = target,
                    FileAttributeName = attributeLogicalName,
                    FileName = fileName
                });

            var token = init.FileContinuationToken;
            var blockList = new List<string>();
            var offset = 0;
            while (offset < data.Length)
            {
                // Block ids must be unique base64 strings within one upload session.
                var blockId = Convert.ToBase64String(Encoding.UTF8.GetBytes(Guid.NewGuid().ToString()));
                var length = (int)Math.Min(BlockSize, data.Length - offset);
                var chunk = new byte[length];
                Array.Copy(data, offset, chunk, 0, length);
                DataverseMutationExecutor.Execute(
                    context,
                    service,
                    new UploadBlockRequest
                    {
                        BlockId = blockId,
                        BlockData = chunk,
                        FileContinuationToken = token
                    });
                blockList.Add(blockId);
                offset += length;
            }

            var commit = (CommitFileBlocksUploadResponse)DataverseMutationExecutor.Execute(
                context,
                service,
                new CommitFileBlocksUploadRequest
                {
                    FileContinuationToken = token,
                    BlockList = blockList.ToArray(),
                    FileName = fileName,
                    MimeType = GetMimeType(fileName)
                });
            return (commit.FileId, blockList.Count);
        }

        /// <summary>
        /// Download the full binary of a file column (or a full-sized image when the
        /// column stores it). Returns the bytes and the server-side file name, which
        /// may be null for image columns.
        /// </summary>
        internal static (byte[] Data, string? FileName) Download(
            IOrganizationService service,
            EntityReference target,
            string attributeLogicalName)
        {
            var init = (InitializeFileBlocksDownloadResponse)DataverseMutationExecutor.ExecuteReadOnly(
                service,
                new InitializeFileBlocksDownloadRequest
                {
                    Target = target,
                    FileAttributeName = attributeLogicalName
                });

            var data = new byte[init.FileSizeInBytes];
            long offset = 0;
            while (offset < init.FileSizeInBytes)
            {
                var block = (DownloadBlockResponse)DataverseMutationExecutor.ExecuteReadOnly(
                    service,
                    new DownloadBlockRequest
                    {
                        FileContinuationToken = init.FileContinuationToken,
                        BlockLength = (int)Math.Min(BlockSize, init.FileSizeInBytes - offset),
                        Offset = offset
                    });
                Array.Copy(block.Data, 0, data, offset, block.Data.Length);
                offset += block.Data.Length;
            }
            return (data, init.FileName);
        }

        /// <summary>
        /// Build a non-existing file path: "name.ext", then "name (2).ext",
        /// "name (3).ext", ... until a free slot is found.
        /// </summary>
        internal static string GetUniqueFilePath(string directory, string fileName)
        {
            var name = Path.GetFileNameWithoutExtension(fileName);
            var ext = Path.GetExtension(fileName);
            var candidate = Path.Combine(directory, fileName);
            var counter = 2;
            while (File.Exists(candidate))
            {
                candidate = Path.Combine(directory, $"{name} ({counter}){ext}");
                counter++;
            }
            return candidate;
        }

        /// <summary>
        /// Best-effort MIME type from the file extension. CommitFileBlocksUpload
        /// requires a non-empty MimeType; unknown types fall back to
        /// application/octet-stream.
        /// </summary>
        internal static string GetMimeType(string fileName)
        {
            return Path.GetExtension(fileName)?.ToLowerInvariant() switch
            {
                ".txt" or ".log" or ".csv" => "text/plain",
                ".json" => "application/json",
                ".xml" => "application/xml",
                ".html" or ".htm" => "text/html",
                ".pdf" => "application/pdf",
                ".zip" => "application/zip",
                ".png" => "image/png",
                ".jpg" or ".jpeg" => "image/jpeg",
                ".gif" => "image/gif",
                ".bmp" => "image/bmp",
                ".tif" or ".tiff" => "image/tiff",
                ".doc" => "application/msword",
                ".docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ".xls" => "application/vnd.ms-excel",
                ".xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                ".ppt" => "application/vnd.ms-powerpoint",
                ".pptx" => "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                _ => "application/octet-stream"
            };
        }

        /// <summary>
        /// Replace path-invalid characters so a record primary name can be used as
        /// a folder name.
        /// </summary>
        internal static string SanitizeFolderName(string name)
        {
            if (string.IsNullOrWhiteSpace(name)) return "_";
            var invalid = Path.GetInvalidFileNameChars();
            var sb = new StringBuilder(name.Trim().Length);
            foreach (var c in name.Trim())
                sb.Append(Array.IndexOf(invalid, c) >= 0 ? '_' : c);
            var cleaned = sb.ToString();
            return string.IsNullOrWhiteSpace(cleaned) ? "_" : cleaned;
        }
    }
}

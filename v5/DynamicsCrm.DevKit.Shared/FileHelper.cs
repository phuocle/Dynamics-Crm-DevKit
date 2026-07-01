using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    public static class FileHelper
    {
        public static async Task ForceWriteAllTextAsync(string file, string content)
        {
            if (!File.Exists(file))
            {
                var fInfo = new FileInfo(file);
                if (!fInfo.Directory.Exists) fInfo.Directory.Create();
                using var writer = new StreamWriter(file, false, System.Text.Encoding.UTF8);
                await writer.WriteAsync(content);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                using var writer = new StreamWriter(file, false, System.Text.Encoding.UTF8);
                await writer.WriteAsync(content);
            }
        }

        public static async Task ForceWriteAllTextWithoutUTF8Async(string file, string content)
        {
            if (!File.Exists(file))
            {
                var fInfo = new FileInfo(file);
                if (!fInfo.Directory.Exists) fInfo.Directory.Create();
                using var writer = new StreamWriter(file, false);
                await writer.WriteAsync(content);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                using var writer = new StreamWriter(file, false);
                await writer.WriteAsync(content);
            }
        }

        public static string GeNextFileName(string path)
        {
            var extension = Path.GetExtension(path);
            var i = 0;
            while (File.Exists(path))
            {
                if (i == 0)
                    path = path.Replace(extension, "(" + ++i + ")" + extension);
                else
                    path = path.Replace("(" + i + ")" + extension, "(" + ++i + ")" + extension);
            }
            return path;
        }

        public static async Task<string> ReadAllTextAsync(string file)
        {
            try
            {
                using var reader = new StreamReader(file);
                return await reader.ReadToEndAsync();
            }
            catch
            {
                return string.Empty;
            }
        }

        public static async Task<byte[]> ReadAllBytesAsync(string path)
        {
            try
            {
                using var fileStream = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.Read, bufferSize: 4096, useAsync: true);
                var buffer = new byte[fileStream.Length];
                var offset = 0;
                while (offset < buffer.Length)
                {
                    var read = await fileStream.ReadAsync(buffer, offset, buffer.Length - offset);
                    if (read == 0)
                        throw new EndOfStreamException();
                    offset += read;
                }
                return buffer;
            }
            catch
            {
                return [];
            }
        }

        public static async Task<string> ReadAllTextFromLine6Async(string file)
        {
            try
            {
                var lines = new System.Collections.Generic.List<string>();
                using (var reader = new StreamReader(file))
                {
                    string line;
                    while ((line = await reader.ReadLineAsync()) != null)
                    {
                        lines.Add(line);
                    }
                }
                for (int i = 0; i < 7 && lines.Count > 0; i++)
                {
                    lines.RemoveAt(0);
                }
                return string.Join("\r\n", lines);
            }
            catch
            {
                return string.Empty;
            }
        }

        public static async Task<string> WriteTempFileAsync(string filename, byte[] solutionBytes)
        {
            try
            {
                var tempFolder = Path.GetTempPath();
                var tempFile = Path.Combine(tempFolder, filename);
                if (File.Exists(tempFile))
                    File.Delete(tempFile);
                using (var stream = new FileStream(tempFile, FileMode.Create, FileAccess.Write, FileShare.None, bufferSize: 4096, useAsync: true))
                {
                    await stream.WriteAsync(solutionBytes, 0, solutionBytes.Length);
                }
                return tempFile;
            }
            catch
            {
                return null;
            }
        }
    }
}
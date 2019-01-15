using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class FileSystem
    {
        public static bool IsDirectoryEmpty(string path)
        {
            IEnumerable<string> items = Directory.EnumerateFileSystemEntries(path);
            using (IEnumerator<string> en = items.GetEnumerator())
                return !en.MoveNext();
        }

        public static DirectoryInfo GetDirectory(string input)
        {
            string path = Path.GetDirectoryName(input);
            if (path == null)
                throw new Exception("ErrorMessage_DirectoryFromString");

            DirectoryInfo directory = new DirectoryInfo(path);
            if (!directory.Exists)
                throw new Exception("ErrorMessage_DirectoryFromString");

            return directory;
        }

        public static string WriteTempFile(string name, byte[] content)
        {
            try
            {
                var tempFolder = Path.GetTempPath();
                string fileName = Path.GetFileName(name);
                if (String.IsNullOrEmpty(fileName))
                    fileName = Guid.NewGuid().ToString();

                var tempFile = Path.Combine(tempFolder, fileName);
                if (File.Exists(tempFile))
                    File.Delete(tempFile);

                File.WriteAllBytes(tempFile, content);

                return tempFile;
            }
            catch (Exception)
            {
                throw new Exception("ErrorMessage_WriteTempFile");
            }
        }

        public static void WriteFileToDisk(string path, byte[] content)
        {
            try
            {
                File.WriteAllBytes(path, content);
            }
            catch (Exception)
            {
                throw new Exception("ErrorMessage_WriteFile");
            }
        }

        public static string BoundFileToLocalPath(string boundFile, string projectPath)
        {
            if (string.IsNullOrEmpty(boundFile))
                return "";

            var path = File.Exists(projectPath)
                ? Path.GetDirectoryName(projectPath)
                : projectPath;

            if (path == null)
                return null;

            if (boundFile.StartsWith("/"))
                boundFile = boundFile.Substring(1);

            return Path.Combine(path, boundFile.Replace("/", "\\"));
        }

        public static string LocalPathToCrmPath(string projectPath, string filename)
        {
            string newName = filename.Replace(projectPath, String.Empty).Replace("\\", "/");
            if (!newName.StartsWith("/"))
                newName = "/" + newName;
            return newName;
        }

        public static bool DoesFileExist(string[] files, bool checkAll)
        {
            foreach (string file in files)
            {
                bool exists = File.Exists(file);
                if (exists && !checkAll)
                    return true;

                if (!exists && checkAll)
                    return false;
            }

            return checkAll;
        }

        public static void RenameFile(string path)
        {
            try
            {
                File.Move(path, $"{path}.{DateTime.Now:MMddyyyyHHmmss}");
            }
            catch
            {
                throw;
            }
        }

        public static byte[] GetFileBytes(string path)
        {
            try
            {
                return File.ReadAllBytes(path);
            }
            catch
            {
                return null;
            }
        }

        public static string GetFileText(string path)
        {
            try
            {
                return File.ReadAllText(path);
            }
            catch
            {
                return null;
            }
        }

        public static bool FileEquals(string path1, string path2)
        {
            FileInfo first = new FileInfo(path1);
            FileInfo second = new FileInfo(path2);

            if (first.Length != second.Length)
                return false;

            int iterations = (int)Math.Ceiling((double)first.Length / sizeof(Int64));

            using (FileStream fs1 = first.OpenRead())
            using (FileStream fs2 = second.OpenRead())
            {
                byte[] one = new byte[sizeof(Int64)];
                byte[] two = new byte[sizeof(Int64)];

                for (int i = 0; i < iterations; i++)
                {
                    fs1.Read(one, 0, sizeof(Int64));
                    fs2.Read(two, 0, sizeof(Int64));

                    if (BitConverter.ToInt64(one, 0) != BitConverter.ToInt64(two, 0))
                        return false;
                }
            }

            return true;
        }

        public static bool IsValidFilename(string fileName, string sourceFolder)
        {
            return !string.IsNullOrEmpty(fileName) &&
                          fileName.IndexOfAny(Path.GetInvalidFileNameChars()) < 0 &&
                          !File.Exists(Path.Combine(sourceFolder, fileName));
        }

        public static bool IsValidFolder(string folder)
        {
            if (string.IsNullOrEmpty(folder))
                return true;

            try
            {
                DirectoryInfo di = new DirectoryInfo(folder);
                return di.Exists;
            }
            catch
            {
                return false;
            }
        }

        public static void DeleteDirectory(string path)
        {
            foreach (string directory in Directory.GetDirectories(path))
            {
                DeleteDirectory(directory);
            }

            try
            {
                Thread.Sleep(100);
                Directory.Delete(path, true);
            }
            catch (IOException)
            {
                Directory.Delete(path, true);
            }
            catch (UnauthorizedAccessException)
            {
                Directory.Delete(path, true);
            }
        }
    }
}

using System;
using System.IO;
using System.Text;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class FileHandler
    {
        public static string FormatSolutionVersionString(string solutionName, Version version, string solutionType)
        {
            StringBuilder result = new StringBuilder();

            result.Append($"{solutionName}_");

            result.Append(version.ToString().Replace(".", "_"));

            if (solutionType.ToLower() == "managed")
                result.Append("_managed");

            result.Append(".zip");

            return result.ToString();
        }

        public static string WriteTempFile(string filename, byte[] solutionBytes)
        {
            try
            {
                var tempFolder = Path.GetTempPath();

                var tempFile = Path.Combine(tempFolder, filename);
                if (File.Exists(tempFile))
                    File.Delete(tempFile);
                File.WriteAllBytes(tempFile, solutionBytes);

                return tempFile;
            }
            catch
            {
                return null;
            }
        }

        public static DirectoryInfo CreateExtractFolder(string unmanagedPath)
        {
            try
            {
                string tempDirectory = Path.GetDirectoryName(unmanagedPath);
                if (Directory.Exists($"{tempDirectory}\\{Path.GetFileNameWithoutExtension(unmanagedPath)}"))
                    FileSystem.DeleteDirectory($"{tempDirectory}\\{Path.GetFileNameWithoutExtension(unmanagedPath)}");
                DirectoryInfo extractedFolder =
                    Directory.CreateDirectory($"{tempDirectory}\\{Path.GetFileNameWithoutExtension(unmanagedPath)}");

                return extractedFolder;
            }
            catch
            {
                return null;
            }
        }
    }
}

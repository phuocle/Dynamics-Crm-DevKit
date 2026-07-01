using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public static class ProjectEnvironment
    {
        public const string FileName = ".env";
        public const string ExampleFileName = ".env.example";
        private const string AuthTypeHelpComment = "# Supported DEVKIT_AUTH_TYPE values: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD";
        public const string AuthType = "DEVKIT_AUTH_TYPE";
        public const string Connection = "DEVKIT_CONNECTION";
        public const string Url = "DEVKIT_URL";
        public const string ClientId = "DEVKIT_CLIENT_ID";
        public const string ClientSecret = "DEVKIT_CLIENT_SECRET";
        public const string PacProfile = "DEVKIT_PAC_PROFILE";
        public const string Username = "DEVKIT_USERNAME";
        public const string Password = "DEVKIT_PASSWORD";
        public const string Domain = "DEVKIT_DOMAIN";

        public static readonly string[] ConnectionKeys =
        {
            Connection,
            AuthType,
            Url,
            ClientId,
            ClientSecret,
            PacProfile,
            Username,
            Password,
            Domain
        };

        public static string FindFile(string startDirectory)
        {
            if (string.IsNullOrWhiteSpace(startDirectory)) return null;

            try
            {
                var directory = new DirectoryInfo(startDirectory);
                while (directory != null)
                {
                    var file = Path.Combine(directory.FullName, FileName);
                    if (File.Exists(file)) return file;
                    directory = directory.Parent;
                }
            }
            catch
            {
                return null;
            }

            return null;
        }

        public static string ResolveFileFromJsonOrDirectory(string jsonFile, string currentDirectory)
        {
            var startDirectory = !string.IsNullOrWhiteSpace(jsonFile) && File.Exists(jsonFile)
                ? Path.GetDirectoryName(jsonFile)
                : currentDirectory;
            return FindFile(startDirectory);
        }

        public static Dictionary<string, string> Read(string filePath)
        {
            var values = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            if (string.IsNullOrWhiteSpace(filePath) || !File.Exists(filePath)) return values;

            foreach (var rawLine in File.ReadAllLines(filePath))
            {
                var line = rawLine.Trim();
                if (string.IsNullOrWhiteSpace(line) || line.StartsWith("#")) continue;

                var index = line.IndexOf('=');
                if (index <= 0) continue;

                var key = line.Substring(0, index).Trim();
                if (string.IsNullOrWhiteSpace(key)) continue;

                var value = line.Substring(index + 1).Trim();
                values[key] = Unquote(value);
            }

            return values;
        }

        public static string GetValue(IDictionary<string, string> values, string key)
        {
            if (values == null || string.IsNullOrWhiteSpace(key)) return null;
            return values.TryGetValue(key, out var value) ? value : null;
        }

        public static void EnsureFile(string directory)
        {
            if (string.IsNullOrWhiteSpace(directory)) return;

            var filePath = Path.Combine(directory, FileName);
            if (!File.Exists(filePath))
            {
                File.WriteAllLines(filePath, CreateLocalTemplateLines());
            }
            else
            {
                EnsureAuthTypeHelpComment(filePath);
            }

            var exampleFilePath = Path.Combine(directory, ExampleFileName);
            if (!File.Exists(exampleFilePath))
            {
                File.WriteAllLines(exampleFilePath, CreateExampleTemplateLines());
            }
            else
            {
                EnsureAuthTypeHelpComment(exampleFilePath);
            }

            AddEnvFileToNearestGitIgnore(filePath);
        }

        public static void WriteOrUpdate(string filePath, IDictionary<string, string> values)
        {
            if (string.IsNullOrWhiteSpace(filePath) || values == null) return;

            var directory = Path.GetDirectoryName(filePath);
            if (!string.IsNullOrWhiteSpace(directory) && !Directory.Exists(directory))
                Directory.CreateDirectory(directory);

            EnsureFile(directory);

            var lines = File.Exists(filePath)
                ? File.ReadAllLines(filePath).ToList()
                : CreateLocalTemplateLines().ToList();

            var written = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            for (var i = 0; i < lines.Count; i++)
            {
                var key = TryGetKey(lines[i]);
                if (key == null || !values.ContainsKey(key)) continue;

                lines[i] = $"{key}={values[key] ?? string.Empty}";
                written.Add(key);
            }

            foreach (var key in values.Keys)
            {
                if (written.Contains(key)) continue;
                lines.Add($"{key}={values[key] ?? string.Empty}");
            }

            EnsureAuthTypeHelpComment(lines);

            File.WriteAllLines(filePath, lines);
        }

        private static string[] CreateLocalTemplateLines()
        {
            return new[]
            {
                "# DynamicsCrm.DevKit project-level connection values.",
                "# CLI arguments override these values. MCP uses OS DEVKIT_* variables instead.",
                AuthTypeHelpComment,
                $"{AuthType}=",
                $"{Url}=",
                $"{ClientId}=",
                $"{ClientSecret}=",
                $"{PacProfile}=",
                $"{Username}=",
                $"{Password}=",
                $"{Domain}="
            };
        }

        private static string[] CreateExampleTemplateLines()
        {
            return new[]
            {
                "# DynamicsCrm.DevKit project-level connection example.",
                "# Copy this file to .env and fill local secret values.",
                AuthTypeHelpComment,
                $"{AuthType}=ClientSecret",
                $"{Url}=https://org.crm.dynamics.com",
                $"{ClientId}=00000000-0000-0000-0000-000000000000",
                $"{ClientSecret}=replace-with-client-secret",
                $"{PacProfile}=default",
                $"{Username}=user@contoso.com",
                $"{Password}=replace-with-password",
                $"{Domain}=CONTOSO"
            };
        }

        private static void AddEnvFileToNearestGitIgnore(string envFilePath)
        {
            var gitIgnore = FindNearestGitIgnore(Path.GetDirectoryName(envFilePath));
            if (string.IsNullOrWhiteSpace(gitIgnore)) return;

            var absoluteEnvPath = NormalizePath(new FileInfo(envFilePath).FullName);
            var lines = File.ReadAllLines(gitIgnore).ToList();
            if (lines.Any(line => string.Equals(NormalizePath(line.Trim()), absoluteEnvPath, StringComparison.OrdinalIgnoreCase)))
                return;

            if (lines.Count > 0 && !string.IsNullOrWhiteSpace(lines[lines.Count - 1]))
                lines.Add(string.Empty);
            lines.Add("# DynamicsCrm.DevKit local project environment");
            lines.Add(absoluteEnvPath);
            File.WriteAllLines(gitIgnore, lines);
        }

        private static string FindNearestGitIgnore(string startDirectory)
        {
            if (string.IsNullOrWhiteSpace(startDirectory)) return null;

            try
            {
                var directory = new DirectoryInfo(startDirectory);
                while (directory != null)
                {
                    var file = Path.Combine(directory.FullName, ".gitignore");
                    if (File.Exists(file)) return file;
                    directory = directory.Parent;
                }
            }
            catch
            {
                return null;
            }

            return null;
        }

        private static void EnsureAuthTypeHelpComment(string filePath)
        {
            if (string.IsNullOrWhiteSpace(filePath) || !File.Exists(filePath)) return;

            var lines = File.ReadAllLines(filePath).ToList();
            if (EnsureAuthTypeHelpComment(lines))
                File.WriteAllLines(filePath, lines);
        }

        private static bool EnsureAuthTypeHelpComment(IList<string> lines)
        {
            if (lines == null || lines.Any(line => string.Equals(line.Trim(), AuthTypeHelpComment, StringComparison.OrdinalIgnoreCase)))
                return false;

            for (var i = 0; i < lines.Count; i++)
            {
                var key = TryGetKey(lines[i]);
                if (!string.Equals(key, AuthType, StringComparison.OrdinalIgnoreCase)) continue;

                lines.Insert(i, AuthTypeHelpComment);
                return true;
            }

            return false;
        }

        private static string NormalizePath(string path)
        {
            return string.IsNullOrWhiteSpace(path) ? string.Empty : path.Replace('\\', '/').Trim();
        }

        private static string TryGetKey(string line)
        {
            if (string.IsNullOrWhiteSpace(line)) return null;
            var trimmed = line.TrimStart();
            if (trimmed.StartsWith("#")) return null;

            var index = trimmed.IndexOf('=');
            if (index <= 0) return null;

            var key = trimmed.Substring(0, index).Trim();
            return string.IsNullOrWhiteSpace(key) ? null : key;
        }

        private static string Unquote(string value)
        {
            if (string.IsNullOrEmpty(value) || value.Length < 2) return value;

            var first = value[0];
            var last = value[value.Length - 1];
            if ((first == '"' && last == '"') || (first == '\'' && last == '\''))
                return value.Substring(1, value.Length - 2);

            return value;
        }
    }
}

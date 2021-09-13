using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using EnvDTE;
using DynamicsCrm.DevKit.Shared.Models;
using System.Text;
using Microsoft.CSharp;
using System.Globalization;

namespace DynamicsCrm.DevKit.Shared
{
    public static class Utility
    {
        public static void TryDeleteDirectory(string directory)
        {
            if (Directory.Exists(directory))
            {
                try
                {
                    Directory.Delete(directory, true);
                }
                catch
                {
                }
            }
        }

        public static void TryDeleteFile(string file)
        {
            if (File.Exists(file))
            {
                try
                {
                    File.Delete(file);
                }
                catch
                {
                }
            }
        }

        public static string GetDevKitCliJsonFile(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var dir = Path.GetDirectoryName(solutionFullName);
            var file = $"{dir}\\DynamicsCrm.DevKit.Cli.json";
            return file;
        }

        public static string GetTestRunSettingsFile(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var dir = Path.GetDirectoryName(solutionFullName);
            var file = $"{dir}\\VisualStudioTest.runsettings";
            return file;
        }

        public static string GetSolutionName(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            return Path.GetFileNameWithoutExtension(solutionFullName);
        }

        public static string ReadEmbeddedResource(string path)
        {
            try
            {
                string data;
                var executingAssembly = Assembly.GetExecutingAssembly();
                var directoryName = Path.GetDirectoryName(executingAssembly.Location);
                var assembly = Assembly.LoadFile(Path.Combine(directoryName, Const.PLDynamicsCrmDevKitResourcesDll));
                using (var stream = assembly.GetManifestResourceStream(path))
                using (var reader = new StreamReader(stream ?? throw new InvalidOperationException()))
                {
                    data = reader.ReadToEnd();
                }
                return data;
            }
            catch
            {
            }
            return string.Empty;
        }
        public static bool ExistProject(DTE dte, string projectName)
        {
            var projects = GetProjects(dte.Solution);
            foreach (Project project in projects)
            {
                if (project.ProjectItems == null || project.FileName.Length == 0) continue;
                if (project.Name == projectName) return true;
            }
            return false;
        }

        private static List<Project> GetProjects(Solution sln)
        {
            List<Project> list = new List<Project>();
            if (sln == null) return list;
            list.AddRange(sln.Projects.Cast<Project>());

            for (int i = 0; i < list.Count; i++)
                list.AddRange(list[i].ProjectItems.Cast<ProjectItem>().Select(x => x.SubProject).OfType<Project>());

            return list;
        }

        public static Project GetProject(DTE dte, string projectName)
        {
            var projects = GetProjects(dte.Solution);
            foreach (Project project in projects)
            {
                if (project.ProjectItems == null || project.FileName.Length == 0) continue;
                if (project.Name == projectName) return project;
            }
            return null;
        }

        public static string GetCrmName(Version version)
        {
            if (version.Major == 5) return Const.DynamicsCrm2011;
            if (version.Major == 6) return Const.DynamicsCrm2013;
            if (version.Major == 7) return Const.DynamicsCrm2015;
            if (version.Major == 8) return Const.DynamicsCrm2016;
            return Const.Dynamics365;
        }

        public static void TfsUndoAdd(DTE dte, string oldProjectFolder, string newProjectFolder)
        {
            var tfs = new Tfs(dte);
            tfs.Undo(oldProjectFolder);
            tfs.Add(newProjectFolder);
        }

        public static void FixCorrectProjectFolder(DTE dte, Project Project, string oldProjectFolder, string newProjectFolder)
        {
            var projectFullName = Project.FullName;
            dte.Solution.Remove(Project);
            Directory.Move(oldProjectFolder, newProjectFolder);
            dte.Solution.AddFromFile(newProjectFolder + "\\" + Path.GetFileName(projectFullName));
            dte.Solution.SaveAs(dte?.Solution?.FullName);
        }

        public static bool SharedProjectExist(DTE dte)
        {
            var sharedProjectName = Utility.GetSharedProject(dte);
            return Utility.ExistProject(dte, sharedProjectName);
        }


        public static bool ProxyTypesProjectExist(DTE dte)
        {
            var proxyTypesProjectName = Utility.GetProxyTypesProject(dte);
            return Utility.ExistProject(dte, proxyTypesProjectName);
        }

        public static string GetSharedProject(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo.Name.Split(".".ToCharArray());
            var value = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value + $"{ProjectType.Shared.ToString()}";
        }

        public static string GetProxyTypesProject(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo.Name.Split(".".ToCharArray());
            var value = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value + $"{ProjectType.ProxyTypes.ToString()}";
        }

        public static string GetSharedNameSpace(DTE dte)
        {
            return GetSharedProject(dte);
        }

        public static string GetProxyTypesNameSpace(DTE dte)
        {
            return GetProxyTypesProject(dte);
        }

        public static void ForceWriteAllText(string file, string content)
        {
            if (!File.Exists(file))
            {
                var fInfo = new FileInfo(file);
                if (!fInfo.Directory.Exists) fInfo.Directory.Create();
                File.WriteAllText(file, content, System.Text.Encoding.UTF8);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                File.WriteAllText(file, content, System.Text.Encoding.UTF8);
            }
        }

        public static void ForceWriteAllBytes(string file, byte[] bytes)
        {
            if (!File.Exists(file))
            {
                File.WriteAllBytes(file, bytes);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                File.WriteAllBytes(file, bytes);
            }
        }

        public static void ForceWriteAllTextWithoutUTF8(string file, string content)
        {
            if (!File.Exists(file))
            {
                File.WriteAllText(file, content);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                File.WriteAllText(file, content);
            }
        }

        public static string GetProjectNetVersion(string comboboxCrmName)
        {
            //if (comboboxCrmName.Length == 0) return comboboxCrmName;
            //return comboboxCrmName.Split("-".ToCharArray())[1].Trim();
            return "4.6.2";
        }

        public static string GetCrmName(string comboboxCrmName)
        {
            return comboboxCrmName.Split("-".ToCharArray())[0].Trim();
        }

        public static string SafeNamespace(string @namespace)
        {
            var items = @namespace.Split('.');
            for (var i = 0; i < items.Length; i++)
            {
                if (int.TryParse(items[i], out _))
                {
                    items[i] = $"_{items[i]}";
                }
                else if (int.TryParse(items[i].Substring(0, 1), out _))
                {
                    items[i] = $"_{items[i]}";
                }
            }
            return string.Join(".", items);
        }

        private static bool IsAddedTestProject(List<Project> projects, string projectName)
        {
            foreach (Project project in projects)
                if (project.Name == projectName)
                    return true;
            return false;
        }

        public static List<string> GetAllProjectForTesting(DTE dte)
        {
            var lists = new List<string>();
            var projects = GetProjects(dte.Solution);
            foreach (Project project in projects)
            {
                if (project.ProjectItems == null || project.FileName.Length == 0) continue;
                //if (project.Name.Contains($".{ProjectType.Plugin.ToString()}.") ||
                //    project.Name.Contains($".{ProjectType.Plugin.ToString()}") ||
                //    project.Name.Contains($".{ProjectType.Workflow.ToString()}.") ||
                //    project.Name.EndsWith($".{ProjectType.Workflow.ToString()}") ||
                //    project.Name.Contains($".{ProjectType.CustomAction.ToString()}.") ||
                //    project.Name.EndsWith($".{ProjectType.CustomAction.ToString()}") ||
                //    project.Name.Contains($".{ProjectType.CustomApi.ToString()}.") ||
                //    project.Name.EndsWith($".{ProjectType.CustomApi.ToString()}") ||
                //    project.Name.Contains($".{ProjectType.DataProvider.ToString()}.") ||
                //    project.Name.EndsWith($".{ProjectType.DataProvider.ToString()}"))
                //{
                    if (project.Name.EndsWith(".Test")) continue;
                    if (IsAddedTestProject(projects, $"{project.Name}.Test")) continue;
                    lists.Add(project.Name);
                //}
            }
            return lists;
        }

        public static string SafeName(string name)
        {
            try
            {
                if (name == null) return string.Empty;
                if (Guid.TryParse(name, out var outputGuid) || (name.Length > 38 && Guid.TryParse(name.Substring(0, 38), out var outputGuid2)))
                {
                    name = name.ToUpper()
                        .Replace("-", "_")
                        .Replace("{", string.Empty)
                        .Replace("}", string.Empty);
                    return "_" + name;
                }
                name = name.Replace(" ", "_");
                name = name.Replace("~", string.Empty);
                name = name.Replace("`", string.Empty);
                name = name.Replace("!", string.Empty);
                name = name.Replace("@", string.Empty);
                name = name.Replace("#", string.Empty);
                name = name.Replace("$", string.Empty);
                name = name.Replace("%", string.Empty);
                name = name.Replace("^", string.Empty);
                name = name.Replace("&", string.Empty);
                name = name.Replace("＆", string.Empty);
                name = name.Replace("|", string.Empty);
                name = name.Replace("*", string.Empty);
                name = name.Replace("(", string.Empty);
                name = name.Replace(")", string.Empty);
                name = name.Replace("-", "_");
                name = name.Replace("{", string.Empty);
                name = name.Replace("}", string.Empty);
                name = name.Replace("[", string.Empty);
                name = name.Replace("]", string.Empty);
                name = name.Replace("\"", string.Empty);
                name = name.Replace("'", string.Empty);
                name = name.Replace("’", string.Empty);
                name = name.Replace(":", string.Empty);
                name = name.Replace(";", string.Empty);
                name = name.Replace("<", string.Empty);
                name = name.Replace(",", string.Empty);
                name = name.Replace(">", string.Empty);
                name = name.Replace(".", string.Empty);
                name = name.Replace("?", string.Empty);
                name = name.Replace("/", string.Empty);
                name = name.Replace("+", string.Empty);
                name = name.Replace("=", string.Empty);
                name = name.Replace("–", string.Empty);
                name = name.Replace("＆", string.Empty);
                name = name.Replace("％", string.Empty);
                name = name.Replace("\t", string.Empty);
                name = name.Replace("___", "_");
                name = name.Replace("__", "_");
                var firstchar = name[0];
                if (firstchar >= '0' && firstchar <= '9') name = "_" + name;
                name = string.Concat(name.Normalize(NormalizationForm.FormD).Where(ch => CharUnicodeInfo.GetUnicodeCategory(ch) != UnicodeCategory.NonSpacingMark)).Normalize(NormalizationForm.FormC);
                var cs = new CSharpCodeProvider();
                name = cs.CreateValidIdentifier(name);
                return name;
            }
            catch
            {
                return "_";
            }
        }

        public static CrmVersionName ConvertCrmNameToCrmVersionName(string name)
        {
            if (name.StartsWith(Const.DynamicsCrm2011)) return CrmVersionName._2011;
            if (name.StartsWith(Const.DynamicsCrm2013)) return CrmVersionName._2013;
            if (name.StartsWith(Const.DynamicsCrm2015)) return CrmVersionName._2015;
            if (name.StartsWith(Const.DynamicsCrm2016)) return CrmVersionName._2016;
            if (name.StartsWith(Const.Dynamics365)) return CrmVersionName._365;
            return CrmVersionName._365;
        }

        public static string TrimGuid(string guid)
        {
            if (guid == null) return null;
            if (Guid.TryParse(guid, out var guidType))
                return guid.Replace("{", string.Empty).Replace("}", string.Empty);
            return guid;
        }

        public static string GetCurrentProjectName(DTE dte)
        {
            try
            {
                var Projects = (object[])dte.ActiveSolutionProjects;
                var project = (Project)Projects[0];
                return project.Name;
            }
            catch
            {
                return string.Empty;
            }
        }

        public static string GetCurrentProjectDirectoryName(DTE dte)
        {
            try
            {
                var Projects = (object[])dte.ActiveSolutionProjects;
                var project = (Project)Projects[0];
                return new FileInfo(project.FullName).DirectoryName;
            }
            catch
            {
                return string.Empty;
            }
        }
        public static List<ProjectItem> GetAllTestProjectItems(DTE dte)
        {
            var Projects = (object[])dte.ActiveSolutionProjects;
            var project = (Project)Projects[0];
            Project projectWithoutTest = null;
            foreach (Project p in GetProjects(dte.Solution))
            {
                if ($"{p.Name}.Test" == project.Name)
                {
                    projectWithoutTest = p;
                    break;
                }
            }
            if (projectWithoutTest == null) return new List<ProjectItem>();
            var projectItems = new List<ProjectItem>();
            foreach (ProjectItem item in projectWithoutTest.ProjectItems)
            {
                projectItems.Add(item);
                GetAllProjectItems(projectItems, item);
            }
            return projectItems;
        }

        public static List<ProjectItem> GetAllProjectItems(DTE dte)
        {
            var Projects = (object[])dte.ActiveSolutionProjects;
            var project = (Project)Projects[0];
            var projectItems = new List<ProjectItem>();
            foreach(ProjectItem item in project.ProjectItems)
            {
                projectItems.Add(item);
                GetAllProjectItems(projectItems, item);
            }
            return projectItems;
        }

        private static void GetAllProjectItems(List<ProjectItem> projectItems, ProjectItem item)
        {
            foreach (ProjectItem item2 in item.ProjectItems)
            {
                projectItems.Add(item2);
                GetAllProjectItems(projectItems, item2);
            }
        }

        public static string GetJsGlobalNameSpace(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo?.Name?.Split(".".ToCharArray());
            var jsGlobalNameSpace = parts[1];
            if (jsGlobalNameSpace == "sln") jsGlobalNameSpace = "WebResource";
            return jsGlobalNameSpace;
        }

        public static List<NameValue> GetLanguages()
        {
            var languages = new List<NameValue>
            {
                new NameValue { Name = "Afrikaans-South Africa", Value = "1078" },
                new NameValue { Name = "Albanian-Albania", Value = "1052" },
                new NameValue { Name = "Arabic-Algeria", Value = "5121" },
                new NameValue { Name = "Arabic-Bahrain", Value = "15361" },
                new NameValue { Name = "Arabic-Egypt", Value = "3073" },
                new NameValue { Name = "Arabic-Iraq", Value = "2049" },
                new NameValue { Name = "Arabic-Jordan", Value = "11265" },
                new NameValue { Name = "Arabic-Kuwait", Value = "13313" },
                new NameValue { Name = "Arabic-Lebanon", Value = "12289" },
                new NameValue { Name = "Arabic-Libya", Value = "4097" },
                new NameValue { Name = "Arabic-Morocco", Value = "6145" },
                new NameValue { Name = "Arabic-Oman", Value = "8193" },
                new NameValue { Name = "Arabic-Qatar", Value = "16385" },
                new NameValue { Name = "Arabic-Saudi Arabia", Value = "1025" },
                new NameValue { Name = "Arabic-Syria", Value = "10241" },
                new NameValue { Name = "Arabic-Tunisia", Value = "7169" },
                new NameValue { Name = "Arabic-U.A.E.", Value = "14337" },
                new NameValue { Name = "Arabic-Yemen", Value = "9217" },
                new NameValue { Name = "Armenian-Armenia", Value = "1067" },
                new NameValue { Name = "Azeri (Cyrillic)-Azerbaijan", Value = "2092" },
                new NameValue { Name = "Azeri (Latin)-Azerbaijan", Value = "1068" },
                new NameValue { Name = "Basque-Spain", Value = "1069" },
                new NameValue { Name = "Belarusian-Belarus", Value = "1059" },
                new NameValue { Name = "Bulgarian-Bulgaria", Value = "1026" },
                new NameValue { Name = "Catalan-Spain", Value = "1027" },
                new NameValue { Name = "Chinese-Hong Kong S.A.R.", Value = "3076" },
                new NameValue { Name = "Chinese-Macau S.A.R.", Value = "5124" },
                new NameValue { Name = "Chinese-People's Republic of China", Value = "2052" },
                new NameValue { Name = "Chinese-Singapore", Value = "4100" },
                new NameValue { Name = "Chinese-Taiwan", Value = "1028" },
                new NameValue { Name = "Croatian-Croatia", Value = "1050" },
                new NameValue { Name = "Czech-Czech Republic", Value = "1029" },
                new NameValue { Name = "Danish-Denmark", Value = "1030" },
                new NameValue { Name = "Divehi-Maldives", Value = "1125" },
                new NameValue { Name = "Dutch-Belgium", Value = "2067" },
                new NameValue { Name = "Dutch-Netherlands", Value = "1043" },
                new NameValue { Name = "English-Australia", Value = "3081" },
                new NameValue { Name = "English-Belize", Value = "10249" },
                new NameValue { Name = "English-Canada", Value = "4105" },
                new NameValue { Name = "English-Caribbean", Value = "9225" },
                new NameValue { Name = "English-Ireland", Value = "6153" },
                new NameValue { Name = "English-Jamaica", Value = "8201" },
                new NameValue { Name = "English-New Zealand", Value = "5129" },
                new NameValue { Name = "English-Republic of the Philippines", Value = "13321" },
                new NameValue { Name = "English-South Africa", Value = "7177" },
                new NameValue { Name = "English-Trinidad and Tobago", Value = "11273" },
                new NameValue { Name = "English-United Kingdom", Value = "2057" },
                new NameValue { Name = "English-United States", Value = "1033" },
                new NameValue { Name = "English-Zimbabwe", Value = "12297" },
                new NameValue { Name = "Estonian-Estonia", Value = "1061" },
                new NameValue { Name = "Faroese-Faeroe Islands", Value = "1080" },
                new NameValue { Name = "Farsi-Iran", Value = "1065" },
                new NameValue { Name = "Finnish-Finland", Value = "1035" },
                new NameValue { Name = "French-Belgium", Value = "2060" },
                new NameValue { Name = "French-Canada", Value = "3084" },
                new NameValue { Name = "French-France", Value = "1036" },
                new NameValue { Name = "French-Luxembourg", Value = "5132" },
                new NameValue { Name = "French-Principality of Monaco", Value = "6156" },
                new NameValue { Name = "French-Switzerland", Value = "4108" },
                new NameValue { Name = "FYRO Macedonian-Former Yugoslav Republic of Macedonia", Value = "1071" },
                new NameValue { Name = "Galician-Spain", Value = "1110" },
                new NameValue { Name = "Georgian-Georgia", Value = "1079" },
                new NameValue { Name = "German-Austria", Value = "3079" },
                new NameValue { Name = "German-Germany", Value = "1031" },
                new NameValue { Name = "German-Liechtenstein", Value = "5127" },
                new NameValue { Name = "German-Luxembourg", Value = "4103" },
                new NameValue { Name = "German-Switzerland", Value = "2055" },
                new NameValue { Name = "Greek-Greece", Value = "1032" },
                new NameValue { Name = "Gujarati-India", Value = "1095" },
                new NameValue { Name = "Hebrew-Israel", Value = "1037" },
                new NameValue { Name = "Hindi-India", Value = "1081" },
                new NameValue { Name = "Hungarian-Hungary", Value = "1038" },
                new NameValue { Name = "Icelandic-Iceland", Value = "1039" },
                new NameValue { Name = "Indonesian-Indonesia", Value = "1057" },
                new NameValue { Name = "Italian-Italy", Value = "1040" },
                new NameValue { Name = "Italian-Switzerland", Value = "2064" },
                new NameValue { Name = "Japanese-Japan", Value = "1041" },
                new NameValue { Name = "Kannada-India", Value = "1099" },
                new NameValue { Name = "Kazakh-Kazakhstan", Value = "1087" },
                new NameValue { Name = "Konkani-India", Value = "1111" },
                new NameValue { Name = "Korean-Korea", Value = "1042" },
                new NameValue { Name = "Kyrgyz-Kyrgyzstan", Value = "1088" },
                new NameValue { Name = "Latvian-Latvia", Value = "1062" },
                new NameValue { Name = "Lithuanian-Lithuania", Value = "1063" },
                new NameValue { Name = "Malay-Brunei Darussalam", Value = "2110" },
                new NameValue { Name = "Malay-Malaysia", Value = "1086" },
                new NameValue { Name = "Marathi-India", Value = "1102" },
                new NameValue { Name = "Mongolian-Mongolia", Value = "1104" },
                new NameValue { Name = "Norwegian (Bokmål)-Norway", Value = "1044" },
                new NameValue { Name = "Norwegian (Nynorsk)-Norway", Value = "2068" },
                new NameValue { Name = "Polish-Poland", Value = "1045" },
                new NameValue { Name = "Portuguese-Brazil", Value = "1046" },
                new NameValue { Name = "Portuguese-Portugal", Value = "2070" },
                new NameValue { Name = "Punjabi-India", Value = "1094" },
                new NameValue { Name = "Romanian-Romania", Value = "1048" },
                new NameValue { Name = "Russian-Russia", Value = "1049" },
                new NameValue { Name = "Sanskrit-India", Value = "1103" },
                new NameValue { Name = "Serbian (Cyrillic)-Serbia and Montenegro", Value = "3098" },
                new NameValue { Name = "Serbian (Latin)-Serbia and Montenegro", Value = "2074" },
                new NameValue { Name = "Slovak-Slovakia", Value = "1051" },
                new NameValue { Name = "Slovenian-Slovenia", Value = "1060" },
                new NameValue { Name = "Spanish-Argentina", Value = "11274" },
                new NameValue { Name = "Spanish-Bolivia", Value = "16394" },
                new NameValue { Name = "Spanish-Chile", Value = "13322" },
                new NameValue { Name = "Spanish-Colombia", Value = "9226" },
                new NameValue { Name = "Spanish-Costa Rica", Value = "5130" },
                new NameValue { Name = "Spanish-Dominican Republic", Value = "7178" },
                new NameValue { Name = "Spanish-Ecuador", Value = "12298" },
                new NameValue { Name = "Spanish-El Salvador", Value = "17418" },
                new NameValue { Name = "Spanish-Guatemala", Value = "4106" },
                new NameValue { Name = "Spanish-Honduras", Value = "18442" },
                new NameValue { Name = "Spanish-Mexico", Value = "2058" },
                new NameValue { Name = "Spanish-Nicaragua", Value = "19466" },
                new NameValue { Name = "Spanish-Panama", Value = "6154" },
                new NameValue { Name = "Spanish-Paraguay", Value = "15370" },
                new NameValue { Name = "Spanish-Peru", Value = "10250" },
                new NameValue { Name = "Spanish-Puerto Rico", Value = "20490" },
                new NameValue { Name = "Spanish-Spain", Value = "1034" },
                new NameValue { Name = "Spanish-Uruguay", Value = "14346" },
                new NameValue { Name = "Spanish-Venezuela", Value = "8202" },
                new NameValue { Name = "Spanish - Modern Sort-Spain", Value = "3082" },
                new NameValue { Name = "Swahili-Kenya", Value = "1089" },
                new NameValue { Name = "Swedish-Finland", Value = "2077" },
                new NameValue { Name = "Swedish-Sweden", Value = "1053" },
                new NameValue { Name = "Syriac-Syria", Value = "1114" },
                new NameValue { Name = "Tamil-India", Value = "1097" },
                new NameValue { Name = "Tatar-Tatarstan", Value = "1092" },
                new NameValue { Name = "Telugu-India", Value = "1098" },
                new NameValue { Name = "Thai-Thailand", Value = "1054" },
                new NameValue { Name = "Turkish-Turkey", Value = "1055" },
                new NameValue { Name = "Ukrainian-Ukraine", Value = "1058" },
                new NameValue { Name = "Urdu-Islamic Republic of Pakistan", Value = "1056" },
                new NameValue { Name = "Uzbek (Cyrillic)-Uzbekistan", Value = "2115" },
                new NameValue { Name = "Uzbek (Latin)-Uzbekistan", Value = "1091" },
                new NameValue { Name = "Vietnamese-Viet Nam", Value = "1066" },
                new NameValue { Name = "Welsh-United Kingdom", Value = "1106" }
            };
            return languages;
        }

        public static string TryDecryptPassword(string password)
        {
            try
            {
                password = EncryptDecrypt.DecryptString(password);
            }
            catch
            {
            }
            return password;
        }

        public static string FormatSolutionVersionString(string solutionName, Version version, string solutionType)
        {
            StringBuilder result = new StringBuilder();
            result.Append($"{solutionName}_");
            //result.Append(version.ToString().Replace(".", "_"));
            var build = "00000" + version.Build.ToString();
            build = build.Substring(build.Length - 4);
            result.Append($"{version.Major}.{version.Minor}.{build}.{version.Revision}");
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
                DirectoryInfo extractedFolder = Directory.CreateDirectory($"{tempDirectory}\\{Path.GetFileNameWithoutExtension(unmanagedPath)}");
                return extractedFolder;
            }
            catch
            {
                return null;
            }
        }

        public static string GetProjectName(DTE dte, ProjectType projectType)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo?.Name?.Split(".".ToCharArray());
            var data = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                data += parts[i] + ".";
            if (data.EndsWith(".Report."))
                data = data.Replace(".Report.", ".");
            if (data.EndsWith(".Test."))
                data = data.Replace(".Test.", ".");
            if (projectType == ProjectType.Server) return data.TrimEnd(".".ToCharArray());
            return $"{data}{projectType}";
        }

        public static string[] ParseArguments(string commandLine)
        {
            char[] parmChars = commandLine.ToCharArray();
            bool inQuote = false;
            for (int index = 0; index < parmChars.Length; index++)
            {
                if (parmChars[index] == '"')
                    inQuote = !inQuote;
                if (!inQuote && parmChars[index] == ' ')
                    parmChars[index] = '\n';
            }
            return (new string(parmChars)).Split('\n');
        }

        public static string GetArgumentValue(string[] arguments, string argument)
        {
            var value = arguments.Where(x => x.StartsWith(argument)).FirstOrDefault();
            if (value == null)
                throw new Exception($"Cannot read value of: {argument}");
            value = value.Substring(argument.Length);
            if (value.StartsWith("\""))
                value = value.Substring(1, value.Length - 2);
            return value;
        }
    }
}

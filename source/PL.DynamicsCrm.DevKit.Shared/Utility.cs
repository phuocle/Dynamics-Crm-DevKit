using System;
using EnvDTE;
using System.IO;
using System.Reflection;
using System.Linq;
using System.Collections.Generic;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class Utility
    {
        public static string ReadEmbeddedResource(string path)
        {
            try
            {
                string data;
                var assembly = Assembly.GetExecutingAssembly();
                using (var stream = assembly.GetManifestResourceStream(path))
                using (var reader = new StreamReader(stream ?? throw new InvalidOperationException()))
                {
                    data = reader.ReadToEnd();
                }
                return data;
            }
            catch
            {
                switch (path)
                {
                    case "PL.DynamicsCrm.DevKit.Wizard.data.WebApi.js":
                        path = "PL.DynamicsCrm.DevKit.Cli.Data.WebApi.js";
                        return ReadEmbeddedResource(path);
                    case "PL.DynamicsCrm.DevKit.Wizard.data.DevKit.js":
                        path = "PL.DynamicsCrm.DevKit.Cli.Data.DevKit.js";
                        return ReadEmbeddedResource(path);
                    case "PL.DynamicsCrm.DevKit.Wizard.data.OptionSet.js":
                        path = "PL.DynamicsCrm.DevKit.Cli.Data.OptionSet.js";
                        return ReadEmbeddedResource(path);
                }
            }
            return string.Empty;
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
            }
            return string.Join(".", items);
        }

        public static string SafeNamespace2(string @namespace)
        {
            var lastIndex = @namespace.LastIndexOf('.');
            return @namespace.Substring(0, lastIndex) + @namespace.Substring(lastIndex + 1);
        }

        public static bool ExistProject(DTE dte, string projectName)
        {
            foreach (Project project in dte.Solution.Projects)
            {
                if (project.ProjectItems == null || project.FileName.Length == 0) continue;
                if (project.Name == projectName) return true;
            }
            return false;
        }

        public static bool SharedProjectExist(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var sharedProjectName = Utility.GetSharedProject(solutionFullName);
            return Utility.ExistProject(dte, sharedProjectName);
        }

        public static bool ProxyTypesProjectExist(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var proxyTypesProjectName = Utility.GetProxyTypesProject(solutionFullName);
            return Utility.ExistProject(dte, proxyTypesProjectName);
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
                    // ignored
                }
            }
        }

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
                    // ignored
                }
            }
        }

        public static string GetSharedProject(string solutionFullName)
        {
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo.Name.Split(".".ToCharArray());
            var value = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value + $"{FormType.Shared.ToString()}";
        }

        public static string GetProxyTypesProject(string solutionFullName)
        {
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo.Name.Split(".".ToCharArray());
            var value = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value + $"{FormType.ProxyTypes.ToString()}";
        }

        public static string GetFolderProject(string solutionFullName, string projectName)
        {
            var fInfo = new FileInfo(solutionFullName);
            return fInfo.Directory?.FullName + "\\" + projectName;
        }

        private const string IndentString = "  ";

        public static string FormatJson(string json)
        {
            var indentation = 0;
            var quoteCount = 0;
            var result =
                from ch in json
                let quotes = ch == '"' ? quoteCount++ : quoteCount
                let lineBreak = ch == ',' && quotes % 2 == 0
                    ? ch + Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, indentation))
                    : null
                let openChar = ch == '{' || ch == '['
                    ? ch + Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, ++indentation))
                    : ch.ToString()
                let closeChar = ch == '}' || ch == ']'
                    ? Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, --indentation)) + ch
                    : ch.ToString()
                select lineBreak ?? (openChar.Length > 1
                           ? openChar
                           : closeChar);

            var @return = string.Concat(result);
            @return = @return.Replace("\":[", "\": [").Replace("\":\"", "\": \"");
            return @return;
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

    }
}

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using NUglify;

namespace DynamicsCrm.DevKit.Console
{
    class Program
    {
        private class NameValue
        {
            public string Name { get; set; }
            public string Value { get; set; }
        }

        private static List<NameValue> GetLanguages()
        {
            var values = new List<string>()
            {
    "1025",
	"1026",
	"1027",
	"1028",
	"1029",
	"1030",
	"1031",
	"1032",
	"1035",
	"1036",
	"1037",
	"1038",
	"1040",
	"1041",
	"1042",
	"1043",
	"1044",
	"1045",
	"1046",
	"1048",
	"1049",
	"1050",
	"1051",
	"1053",
	"1054",
	"1055",
	"1057",
	"1058",
	"1060",
	"1061",
	"1062",
	"1063",
	"1066",
	"1069",
	"1081",
	"1086",
	"1087",
	"1110",
	"2052",
	"2070",
	"2074",
	"3076",
	"3082",
	"3098",
    "1033"
            };


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
            return languages.Where(x => values.Contains(x.Value)).OrderBy(x => x.Value).ToList();
        }

        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                DevKitJsMinOld();
                DevKitJsMinNew();
                GeneratorXrmEnum();
                UpdateBuildDate();
            }
            else
            {
                UpdateBuildDateBack();
            }
        }

        private static void UpdateBuildDateBack()
        {
            var date = DateTime.Now.ToString("yyyy.MM.dd");
            var currentDirectory = Directory.GetCurrentDirectory();
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit\source.extension.vsixmanifest", date, "xxxx.xx.xx");
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Shared\Const.cs", date, "xxxx.xx.xx");
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Package\VSPackage.resx", date, "xxxx.xx.xx");
        }

        private static void UpdateBuildDate()
        {
            var date = DateTime.Now.ToString("yyyy.MM.dd");
            var currentDirectory = Directory.GetCurrentDirectory();
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit\source.extension.vsixmanifest", "xxxx.xx.xx", date);
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Shared\Const.cs", "xxxx.xx.xx", date);
            ReplaceInFile($@"{currentDirectory}\DynamicsCrm.DevKit.Package\VSPackage.resx", "xxxx.xx.xx", date);
        }

        private static void ReplaceInFile(string file, string find, string replace)
        {
            if (!File.Exists(file)) return;
            var text = File.ReadAllText(file);
            text = text.Replace(find, replace);
            File.WriteAllText(file, text, Encoding.UTF8);
        }

        private static void DevKitJsMinNew()
        {
            var file = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Resources\devkit.365.new.js";
            var devkitCode = File.ReadAllText(file);
            //var devkitCodeMin = Uglify.Js(devkitCode).Code;
            var output = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\ProjectTemplates\CSharp\13.WebResourceProjectTemplate\devkit.js";
            File.WriteAllText(output, devkitCode);


            var file_d_ts = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Resources\devkit.365.new.d.ts";
            var output_d_ts = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\ProjectTemplates\CSharp\13.WebResourceProjectTemplate\devkit.d.ts";
            File.Copy(file_d_ts, output_d_ts, true);
        }

        private static void DevKitJsMinOld()
        {
            var file = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Resources\devkit.365.js";
            var devkitCode = File.ReadAllText(file);
            var devkitCodeMin = Uglify.Js(devkitCode).Code;
            var output = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\ProjectTemplates\CSharp\05.WebResourceProjectTemplate\devkit.js";
            File.WriteAllText(output, devkitCodeMin);
        }
        private static void GeneratorXrmEnum()
        {
            var currentDirectory = Directory.GetCurrentDirectory();
            var directory = Path.Combine(currentDirectory, $@"..\test\v.{Const.Version}\TestDevKitJs\Dev.DevKit.WebResource\node_modules\@types\xrm");
            if (!Directory.Exists(directory)) return;
            var file = Path.Combine(directory, @"index.d.ts");
            if (!File.Exists(file)) return;

            var js = string.Empty;
            js += $"//xrm: {GetVersion(directory)}\r\n";
            var flag = false;
            var lines = File.ReadAllLines(file);
            foreach (var line in lines)
            {
                if (line.StartsWith("declare namespace XrmEnum")) flag = true;
                if (!flag) continue;
                if (line.Trim().StartsWith("/**")) continue;
                if (line.Trim().StartsWith("*")) continue;
                if (line.Trim().StartsWith("*/")) continue;
                if (line.Trim().Length == 0) continue;
                if (line.StartsWith("declare namespace XrmEnum"))
                    js += $"var XrmEnum = {{\r\n";
                else if (line.Trim().StartsWith("const enum "))
                {
                    var temp = $"\t" + line.Trim().Substring("const enum".Length) + "\r\n";
                    temp = temp.Replace(" {", ": {");
                    temp = $"\t" + temp.Trim() + "\r\n";
                    js += temp;
                }
                else if (line.Trim().StartsWith("}"))
                {
                    js += $"\t}},\r\n";
                }
                else
                {
                    if (line.Trim().Length == 0) continue;
                    var temp = line.Replace(" = ", ": ");
                    js += temp + "\r\n";
                }
            }
            js = js.TrimEnd(",\r\n\t},\r\n".ToCharArray());
            js += $"\r\n\t}}\r\n}}";
            var output1 = Path.Combine(currentDirectory, @"ProjectTemplates\CSharp\05.WebResourceProjectTemplate\XrmEnum.js");
            var output2 = Path.Combine(currentDirectory, @"ProjectTemplates\CSharp\13.WebResourceProjectTemplate\XrmEnum.js");
            File.WriteAllText(output1, js, Encoding.UTF8);
            File.WriteAllText(output2, js, Encoding.UTF8);
        }

        private static string GetVersion(string directory)
        {
            var file = Path.Combine(directory, "package.json");
            if (!File.Exists(file)) return null;
            var lines = File.ReadAllLines(file);
            foreach (var line in lines)
            {
                if (line.Trim().StartsWith("\"version\"") ||
                   line.Trim().StartsWith("'version'"))
                {
                    var columns = line.Split(":".ToCharArray());
                    if (columns.Length != 2) return null;
                    return columns[1].Trim().Substring(1, columns[1].Trim().Length - 2);
                }
            }
            return null;
        }
    }
}

using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.WhoAmI;

/// <summary>
/// Data-driven coverage of the full LCID → language-name table used by the
/// whoami tool. The table mirrors the production switch so every branch is
/// exercised; if a production entry changes, this test flags the drift.
/// </summary>
[TestClass]
public sealed class WhoAmILanguageTableCoverageTests
{
    private static readonly MethodInfo GetLanguageNameMethod = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.WhoAmITool)
        .GetMethod("GetLanguageName", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string GetLanguageName(int lcid) =>
        (string)GetLanguageNameMethod.Invoke(null, new object[] { lcid })!;

    public static IEnumerable<object[]> LanguageTable()
    {
        yield return new object[] { 1078, "Afrikaans-South Africa" };
        yield return new object[] { 1052, "Albanian-Albania" };
        yield return new object[] { 5121, "Arabic-Algeria" };
        yield return new object[] { 15361, "Arabic-Bahrain" };
        yield return new object[] { 3073, "Arabic-Egypt" };
        yield return new object[] { 2049, "Arabic-Iraq" };
        yield return new object[] { 11265, "Arabic-Jordan" };
        yield return new object[] { 13313, "Arabic-Kuwait" };
        yield return new object[] { 12289, "Arabic-Lebanon" };
        yield return new object[] { 4097, "Arabic-Libya" };
        yield return new object[] { 6145, "Arabic-Morocco" };
        yield return new object[] { 8193, "Arabic-Oman" };
        yield return new object[] { 16385, "Arabic-Qatar" };
        yield return new object[] { 1025, "Arabic" };
        yield return new object[] { 10241, "Arabic-Syria" };
        yield return new object[] { 7169, "Arabic-Tunisia" };
        yield return new object[] { 14337, "Arabic-U.A.E." };
        yield return new object[] { 9217, "Arabic-Yemen" };
        yield return new object[] { 1067, "Armenian-Armenia" };
        yield return new object[] { 2092, "Azeri (Cyrillic)-Azerbaijan" };
        yield return new object[] { 1068, "Azeri (Latin)-Azerbaijan" };
        yield return new object[] { 1069, "Basque-Spain" };
        yield return new object[] { 1059, "Belarusian-Belarus" };
        yield return new object[] { 1026, "Bulgarian-Bulgaria" };
        yield return new object[] { 1027, "Catalan-Spain" };
        yield return new object[] { 3076, "Chinese-Hong Kong S.A.R." };
        yield return new object[] { 5124, "Chinese-Macau S.A.R." };
        yield return new object[] { 2052, "Chinese (Simplified)" };
        yield return new object[] { 4100, "Chinese-Singapore" };
        yield return new object[] { 1028, "Chinese (Traditional)" };
        yield return new object[] { 1050, "Croatian-Croatia" };
        yield return new object[] { 1029, "Czech-Czech Republic" };
        yield return new object[] { 1030, "Danish-Denmark" };
        yield return new object[] { 1125, "Divehi-Maldives" };
        yield return new object[] { 2067, "Dutch-Belgium" };
        yield return new object[] { 1043, "Dutch-Netherlands" };
        yield return new object[] { 3081, "English-Australia" };
        yield return new object[] { 10249, "English-Belize" };
        yield return new object[] { 4105, "English-Canada" };
        yield return new object[] { 9225, "English-Caribbean" };
        yield return new object[] { 6153, "English-Ireland" };
        yield return new object[] { 8201, "English-Jamaica" };
        yield return new object[] { 5129, "English-New Zealand" };
        yield return new object[] { 13321, "English-Republic of the Philippines" };
        yield return new object[] { 7177, "English-South Africa" };
        yield return new object[] { 11273, "English-Trinidad and Tobago" };
        yield return new object[] { 2057, "English-United Kingdom" };
        yield return new object[] { 1033, "English" };
        yield return new object[] { 12297, "English-Zimbabwe" };
        yield return new object[] { 1061, "Estonian-Estonia" };
        yield return new object[] { 1080, "Faroese-Faeroe Islands" };
        yield return new object[] { 1065, "Farsi-Iran" };
        yield return new object[] { 1035, "Finnish-Finland" };
        yield return new object[] { 2060, "French-Belgium" };
        yield return new object[] { 3084, "French-Canada" };
        yield return new object[] { 1036, "French" };
        yield return new object[] { 5132, "French-Luxembourg" };
        yield return new object[] { 6156, "French-Principality of Monaco" };
        yield return new object[] { 4108, "French-Switzerland" };
        yield return new object[] { 1071, "FYRO Macedonian-Former Yugoslav Republic of Macedonia" };
        yield return new object[] { 1110, "Galician-Spain" };
        yield return new object[] { 1079, "Georgian-Georgia" };
        yield return new object[] { 3079, "German-Austria" };
        yield return new object[] { 1031, "German" };
        yield return new object[] { 5127, "German-Liechtenstein" };
        yield return new object[] { 4103, "German-Luxembourg" };
        yield return new object[] { 2055, "German-Switzerland" };
        yield return new object[] { 1032, "Greek-Greece" };
        yield return new object[] { 1095, "Gujarati-India" };
        yield return new object[] { 1037, "Hebrew-Israel" };
        yield return new object[] { 1081, "Hindi-India" };
        yield return new object[] { 1038, "Hungarian-Hungary" };
        yield return new object[] { 1039, "Icelandic-Iceland" };
        yield return new object[] { 1057, "Indonesian-Indonesia" };
        yield return new object[] { 1040, "Italian-Italy" };
        yield return new object[] { 2064, "Italian-Switzerland" };
        yield return new object[] { 1041, "Japanese" };
        yield return new object[] { 1099, "Kannada-India" };
        yield return new object[] { 1087, "Kazakh-Kazakhstan" };
        yield return new object[] { 1111, "Konkani-India" };
        yield return new object[] { 1042, "Korean" };
        yield return new object[] { 1088, "Kyrgyz-Kyrgyzstan" };
        yield return new object[] { 1062, "Latvian-Latvia" };
        yield return new object[] { 1063, "Lithuanian-Lithuania" };
        yield return new object[] { 2110, "Malay-Brunei Darussalam" };
        yield return new object[] { 1086, "Malay-Malaysia" };
        yield return new object[] { 1102, "Marathi-India" };
        yield return new object[] { 1104, "Mongolian-Mongolia" };
        yield return new object[] { 1044, "Norwegian (Bokmål)-Norway" };
        yield return new object[] { 2068, "Norwegian (Nynorsk)-Norway" };
        yield return new object[] { 1045, "Polish-Poland" };
        yield return new object[] { 1046, "Portuguese (Brazil)" };
        yield return new object[] { 2070, "Portuguese-Portugal" };
        yield return new object[] { 1094, "Punjabi-India" };
        yield return new object[] { 1048, "Romanian-Romania" };
        yield return new object[] { 1049, "Russian" };
        yield return new object[] { 1103, "Sanskrit-India" };
        yield return new object[] { 3098, "Serbian (Cyrillic)-Serbia and Montenegro" };
        yield return new object[] { 2074, "Serbian (Latin)-Serbia and Montenegro" };
        yield return new object[] { 1051, "Slovak-Slovakia" };
        yield return new object[] { 1060, "Slovenian-Slovenia" };
        yield return new object[] { 11274, "Spanish-Argentina" };
        yield return new object[] { 16394, "Spanish-Bolivia" };
        yield return new object[] { 13322, "Spanish-Chile" };
        yield return new object[] { 9226, "Spanish-Colombia" };
        yield return new object[] { 5130, "Spanish-Costa Rica" };
        yield return new object[] { 7178, "Spanish-Dominican Republic" };
        yield return new object[] { 12298, "Spanish-Ecuador" };
        yield return new object[] { 17418, "Spanish-El Salvador" };
        yield return new object[] { 4106, "Spanish-Guatemala" };
        yield return new object[] { 18442, "Spanish-Honduras" };
        yield return new object[] { 2058, "Spanish-Mexico" };
        yield return new object[] { 19466, "Spanish-Nicaragua" };
        yield return new object[] { 6154, "Spanish-Panama" };
        yield return new object[] { 15370, "Spanish-Paraguay" };
        yield return new object[] { 10250, "Spanish-Peru" };
        yield return new object[] { 20490, "Spanish-Puerto Rico" };
        yield return new object[] { 1034, "Spanish" };
        yield return new object[] { 14346, "Spanish-Uruguay" };
        yield return new object[] { 8202, "Spanish-Venezuela" };
        yield return new object[] { 3082, "Spanish - Modern Sort-Spain" };
        yield return new object[] { 1089, "Swahili-Kenya" };
        yield return new object[] { 2077, "Swedish-Finland" };
        yield return new object[] { 1053, "Swedish-Sweden" };
        yield return new object[] { 1114, "Syriac-Syria" };
        yield return new object[] { 1097, "Tamil-India" };
        yield return new object[] { 1092, "Tatar-Tatarstan" };
        yield return new object[] { 1098, "Telugu-India" };
        yield return new object[] { 1054, "Thai-Thailand" };
        yield return new object[] { 1055, "Turkish-Turkey" };
        yield return new object[] { 1058, "Ukrainian-Ukraine" };
        yield return new object[] { 1056, "Urdu-Islamic Republic of Pakistan" };
        yield return new object[] { 2115, "Uzbek (Cyrillic)-Uzbekistan" };
        yield return new object[] { 1091, "Uzbek (Latin)-Uzbekistan" };
        yield return new object[] { 1066, "Vietnamese" };
        yield return new object[] { 1106, "Welsh-United Kingdom" };
    }

    [TestMethod]
    [DynamicData(nameof(LanguageTable))]
    public void GetLanguageName_KnownLcid_ReturnsName(int lcid, string expected)
    {
        Assert.AreEqual(expected, GetLanguageName(lcid));
    }

    [TestMethod]
    public void GetLanguageName_UnknownLcid_FallsBackToLcidText()
    {
        Assert.AreEqual("LCID 999999", GetLanguageName(999999));
    }
}

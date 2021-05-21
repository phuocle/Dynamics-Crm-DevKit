using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static class AnalyzerHelper
    {
        public static string RemoveQuote(string text)
        {
            text = text.Substring(1);
            return text.Substring(0, text.Length - 1);
        }

        public static bool TestIsEmtpy(string text)
        {
            var pattern = @"^\""(\s)*\""$";
            var options = RegexOptions.Multiline;
            foreach (Match m in Regex.Matches(text, pattern, options))
            {
                return true;
            }
            return false;
        }
    }
}

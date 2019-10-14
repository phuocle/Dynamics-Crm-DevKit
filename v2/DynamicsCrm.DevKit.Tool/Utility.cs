using System;
using System.Linq;

namespace DynamicsCrm.DevKit.Tool
{
    class Utility
    {
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

using System;
using System.Collections.Generic;
using System.Text;

namespace DynamicsCrm.DevKit.Shared
{
    public class Replacement
    {
        private static Dictionary<string, string> replacements = new Dictionary<string, string>();
        /// <summary>
        /// C:\src\github\Dynamics-Crm-DevKit\test\v.3.33.33\ProjectTemplate\01.Shared Project\vs2022\SharedProject1
        /// </summary>
        public static string DestinationDirectory => replacements["$destinationdirectory$"];

        internal static void Set(Dictionary<string, string> replacementsDictionary)
        {
            replacements = replacementsDictionary;
        }


    }
}

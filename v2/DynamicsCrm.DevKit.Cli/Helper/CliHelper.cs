using System;
using System.Activities;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Cli.Helper
{
    public static class CliHelper
    {
        public static List<string> GetFiles(string folder, List<string> includePatternFiles, List<string> excludePatternFiles)
        {
            var includefiles = new List<string>();
            foreach (var includefile in includePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList());
                }
            }
            foreach (var includefile in includePatternFiles)
            {
                var other = includefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
            }
            var excludefiles = new List<string>();
            foreach (var excludefile in excludePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList());
                }
            }
            foreach (var excludefile in excludePatternFiles)
            {
                var other = excludefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
            }
            return includefiles.Where(file => !excludefiles.Contains(file)).ToList();
        }

        public static bool IsPluginOrActivity(TypeInfo x)
        {
            //var check = x?.GetCustomAttributesData()?.FirstOrDefault(y => y?.AttributeType?.Name == typeof(CrmPluginRegistrationAttribute)?.Name);
            //return check != null ? true : false;


            return false || IsCodeActivity(x);
        }

        private static bool IsCodeActivity(Type type)
        {
            if (type.Name == typeof(CodeActivity).Name) return true;
            if (type.BaseType != null) return IsCodeActivity(type.BaseType);
            return false;
        }
    }
}

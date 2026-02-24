using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public static class XrmHelper
    {
        public static int COUNT_RetrieveMultipleAsync = 0;
        public static int COUNT_RetrieveAsync = 0;
        public static int COUNT_ExecuteAsync = 0;
        public static int COUNT_UpdateAsync = 0;
        public static int COUNT_DeleteAsync = 0;
        public static int COUNT_CreateAsync = 0;
        public static List<EntityMetadata> EntitiesMetadata { get; set; } = [];
        public static List<SystemForm> EntitiesFormXml { get; set; } = [];
        public static List<ProcessForm> EntitiesProcessForm { get; set; } = [];

        internal static bool IsWorkflowType(Type type)
        {
            if (type?.FullName == "System.Activities.CodeActivity") return true;
            if (type?.BaseType != null) return IsWorkflowType(type?.BaseType);
            return false;
        }

        internal static string GetMessagePropertyName(string message)
        {
            return message.ToLower() switch
            {
                "create" => "Id",
                "createmultiple" => "Ids",
                "updatemultiple" => "Targets",
                "setstate" => "EntityMoniker",
                "setstatedynamicentity" => "EntityMoniker",
                "deliverincoming" => "EmailId",
                "deliverpromote" => "EmailId",
                "send" => "EmailId",
                _ => "Target"
            };
        }

        internal static bool IsEqualsWorkflowType(string old, string @new)
        {
            return old == @new;
        }

        internal static bool IsEqualsContent(string oldContent, string newContent)
        {
            return oldContent == newContent;
        }

        internal static bool IsMessageUpdate(string message)
        {
            return message.ToLower() switch
            {
                "update" or
                "updatemultiple" or
                "onexternalupdated" => true,
                _ => false,
            };
        }

        internal static List<string> GetFiles(string folder, List<string> includePatternFiles, List<string> excludePatternFiles)
        {
            var includefiles = new List<string>();
            foreach (var includefile in includePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange([.. Directory.GetFiles(folder, includefile)]);
                }
            }
            foreach (var includefile in includePatternFiles)
            {
                var other = includefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange([.. Directory.GetFiles(folder, other)]);
                }
            }
            var excludefiles = new List<string>();
            foreach (var excludefile in excludePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange([.. Directory.GetFiles(folder, excludefile)]);
                }
            }
            foreach (var excludefile in excludePatternFiles)
            {
                var other = excludefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange([.. Directory.GetFiles(folder, other)]);
                }
            }
            var files = includefiles.Where(file => !excludefiles.Contains(file)).Distinct().ToList();
            files.Sort();
            return files;
        }

        internal static bool IsSupportPluginImage(string message)
        {
            return (message?.ToLower()) switch
            {
                "assign" or
                "create" or
                "delete" or
                "deliverincoming" or
                "deliverpromote" or
                "merge" or
                "route" or
                "send" or
                "setstate" or
                "setstatedynamicentity" or
                "update" or
                "createmultiple" or
                "updatemultiple" or
                "executeworkflow" => true,
                _ => false,
            };
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Cli
{
    /// <summary>
    /// Converts legacy CLI arguments (/arg:value) to Spectre.Console format (--arg value).
    /// Ensures 100% backward compatibility with existing scripts and CI/CD pipelines.
    /// </summary>
    public static class LegacyArgConverter
    {
        /// <summary>
        /// Mapping from legacy /type: values to new command names.
        /// </summary>
        private static readonly Dictionary<string, string> TypeToCommand = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            { "generators", "generator" },
            { "webresources", "webresource" },
            { "plugins", "plugin" },
            { "workflows", "workflow" },
            { "dataproviders", "dataprovider" },
            { "servers", "server" },
            { "downloadreports", "report" },
            { "uploadreports", "report" },
            { "proxytypes", "proxytype" },
            { "solutionpackagers", "solution" },
            { "downloadwebresources", "downloadwebresource" },
            { "datasources", "datasource" }
        };

        /// <summary>
        /// Mapping from legacy argument names to new option names.
        /// </summary>
        private static readonly Dictionary<string, string> ArgMapping = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            { "conn", "--conn" },
            { "json", "--json" },
            { "type", "--type" }, // We still keep --type arg if needed by command, but usually implied by command name
            { "profile", "--profile" },
            { "version", "--version" },
            { "command", "--command" },
            { "sdklogin", "--sdk-login" },
            { "url", "--url" },
            { "onlyupdateassembly", "--onlyupdateassembly" }
        };

        /// <summary>
        /// Mapping from legacy /type: values to the --type value of the grouped
        /// 'devkit report' command (the legacy type value itself — e.g.
        /// 'uploadreports' — is NOT valid for 'devkit report').
        /// </summary>
        private static readonly Dictionary<string, string> ReportTypeArg = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            { "uploadreports", "upload" },
            { "downloadreports", "download" }
        };

        /// <summary>
        /// Checks if the arguments contain legacy format (/arg:value).
        /// </summary>
        public static bool IsLegacyFormat(string[] args)
        {
            return args.Any(arg => arg.StartsWith("/") && arg.Contains(":"));
        }

        /// <summary>
        /// Converts legacy /arg:value format to Spectre.Console --arg value format.
        /// </summary>
        /// <param name="args">Original command line arguments</param>
        /// <returns>Converted arguments compatible with Spectre.Console.Cli</returns>
        public static string[] Convert(string[] args)
        {
            if (args == null || args.Length == 0)
                return args;

            // If not legacy format, return as-is
            if (!IsLegacyFormat(args))
                return args;

            var result = new List<string>();
            
            // Determine command from /type arg
            var command = "generator"; // default if not found (or should we error?)
            var reportTypeArg = (string)null;
            foreach (var arg in args)
            {
                if (arg.StartsWith("/type:", StringComparison.OrdinalIgnoreCase))
                {
                    var typeValue = arg.Substring(6).Trim('"');
                    if (TypeToCommand.TryGetValue(typeValue, out var cmd))
                    {
                        command = cmd;
                        if (command == "report")
                            ReportTypeArg.TryGetValue(typeValue, out reportTypeArg);
                    }
                    break;
                }
            }
            result.Add(command);
            if (command == "report" && reportTypeArg != null)
            {
                // 'devkit report' requires --type upload|download — the legacy
                // value (uploadreports) is not a valid ReportCommand type.
                result.Add("--type");
                result.Add(reportTypeArg);
            }

            foreach (var arg in args)
            {
                // Legacy format: /argname:"value" or /argname:value
                if (arg.StartsWith("/") && arg.Contains(":"))
                {
                    // Extract arg name and value
                    var colonIndex = arg.IndexOf(':');
                    var argName = arg.Substring(1, colonIndex - 1).Trim();
                    var argValue = arg.Substring(colonIndex + 1).Trim();

                    // Remove surrounding quotes if present
                    if (argValue.StartsWith("\"") && argValue.EndsWith("\""))
                    {
                        argValue = argValue.Substring(1, argValue.Length - 2);
                    }

                    // The injected --type above replaces the re-emitted legacy
                    // value for 'devkit report' — keep the legacy re-emit for
                    // every other command (unchanged behavior).
                    if (command == "report" && reportTypeArg != null &&
                        argName.Equals("type", StringComparison.OrdinalIgnoreCase))
                    {
                        continue;
                    }

                    // Map to new argument name
                    if (ArgMapping.TryGetValue(argName, out var newArgName))
                    {
                        // Handle boolean flags (sdklogin:yes -> --sdk-login)
                        if (newArgName == "--sdk-login")
                        {
                            if (argValue.Equals("yes", StringComparison.OrdinalIgnoreCase))
                            {
                                result.Add(newArgName);
                            }
                        }
                        else if (newArgName == "--onlyupdateassembly")
                        {
                            if (!string.IsNullOrEmpty(argValue) && !argValue.Equals("no", StringComparison.OrdinalIgnoreCase))
                            {
                                result.Add(newArgName);
                            }
                        }
                        else
                        {
                            result.Add(newArgName);
                            result.Add(argValue);
                        }
                    }
                    else
                    {
                        // Unknown argument - pass through as-is with -- prefix
                        result.Add($"--{argName}");
                        result.Add(argValue);
                    }
                }
                else
                {
                    // Non-legacy argument, pass through
                    result.Add(arg);
                }
            }

            return result.ToArray();
        }

        /// <summary>
        /// Gets a human-readable representation of the conversion for logging.
        /// </summary>
        public static string GetConversionLog(string[] originalArgs, string[] convertedArgs)
        {
            if (!IsLegacyFormat(originalArgs))
            {
                return "[grey]No conversion needed - using new argument format[/]";
            }

            return $"[yellow]Legacy format detected[/] - Converted to: [green]{string.Join(" ", convertedArgs)}[/]";
        }
    }
}

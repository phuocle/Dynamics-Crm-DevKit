using DynamicsCrm.DevKit.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli
{
    internal static class CliLog
    {
        public const int StarLength = 110;

        public static void SetupCliLog()
        {
            Console.BackgroundColor = ConsoleColor.Black;
            Console.Title = Const.WindowTitle;
            // Enable auto-flush for real-time output (supports AI command_status polling)
            // Must specify UTF-8 encoding to preserve Unicode box-drawing characters
            Console.OutputEncoding = System.Text.Encoding.UTF8;
            Console.SetOut(new System.IO.StreamWriter(Console.OpenStandardOutput(), System.Text.Encoding.UTF8) { AutoFlush = true });
        }

        public static void WriteLine(params object[] values)
        {
            WriteCore(values, true, true);
        }

        public static void WriteLineNoFormat(params object[] values)
        {
            WriteCore(values, true, false);
        }

        public static void WriteLineError(params object[] values)
        {
            WriteLine(ConsoleColor.White, "▌");
            var oldBackgroundColor = Console.BackgroundColor;
            var oldForegroundColor = Console.ForegroundColor;
            try
            {
                Console.BackgroundColor = ConsoleColor.Red;
                Write(ConsoleColor.White, "▌");
                Console.ForegroundColor = ConsoleColor.Yellow;
                foreach (var value in values)
                {
                    if (value is ConsoleColor color)
                    {
                        Console.ForegroundColor = color;
                    }
                    else
                    {
                        Console.Write(value?.ToString() ?? string.Empty);
                    }
                }
            }
            finally
            {
                Console.ForegroundColor = oldForegroundColor;
                Console.BackgroundColor = oldBackgroundColor;
            }
            WriteLine(ConsoleColor.Black, "");
        }

        private static string FormatValue(object value)
        {
            return value?.ToString()?.Replace("|", "▌") ?? string.Empty;
        }

        public static void WriteLineWarning(params object[] values)
        {
            WriteWithBackground(ConsoleColor.DarkGray, values, true, "▌", "█");
        }

        public static void WriteSuccess(params object[] values)
        {
            WriteWithBackground(ConsoleColor.DarkGreen, values, false, null, null);
        }

        private static void WriteWithBackground(ConsoleColor backgroundColor, object[] values, bool writeLine, string prefix, string suffix)
        {
            var oldBackgroundColor = Console.BackgroundColor;
            var oldForegroundColor = Console.ForegroundColor;
            try
            {
                Console.BackgroundColor = backgroundColor;
                if (!string.IsNullOrEmpty(prefix))
                {
                    Write(ConsoleColor.White, prefix);
                }
                foreach (var value in values)
                {
                    if (value == null) continue;
                    if (value is ConsoleColor color)
                    {
                        Console.ForegroundColor = color;
                    }
                    else
                    {
                        Console.Write(FormatValue(value));
                    }
                }
                Console.ForegroundColor = oldForegroundColor;
                Console.BackgroundColor = oldBackgroundColor;
                if (writeLine && !string.IsNullOrEmpty(suffix))
                {
                    WriteLine(ConsoleColor.Black, suffix);
                }
            }
            finally
            {
                Console.ForegroundColor = oldForegroundColor;
                Console.BackgroundColor = oldBackgroundColor;
            }
        }

        public static void Write(params object[] values)
        {
            WriteCore(values, false, true);
        }

        public static void WriteNoFormat(params object[] values)
        {
            WriteCore(values, false, false);
        }

        private static void WriteCore(object[] values, bool writeLine, bool formatValues)
        {
            var oldConsoleColor = Console.ForegroundColor;
            try
            {
                foreach (var value in values)
                {
                    if (value is ConsoleColor color)
                    {
                        Console.ForegroundColor = color;
                    }
                    else
                    {
                        var output = formatValues ? FormatValue(value) : value?.ToString() ?? string.Empty;
                        Console.Write(output);
                    }
                }
                if (writeLine)
                {
                    Console.WriteLine(" ");
                }
            }
            finally
            {
                Console.ForegroundColor = oldConsoleColor;
            }
        }

        public static void WaitingWithCancellation(string message = "", CancellationToken cancellationToken = default)
        {
            Write(ConsoleColor.White, "▌" + " ", message);
            int counter = 0;
            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    switch (counter % 4)
                    {
                        case 0: Console.Write("."); counter = 0; break;
                        case 1: Console.Write("."); break;
                        case 2: Console.Write("."); break;
                        case 3: Console.Write("."); break;
                    }
                    counter++;
                    cancellationToken.WaitHandle.WaitOne(1000);
                }
            }
            catch (OperationCanceledException)
            {
            }
        }

        internal static void WriteList(List<string> list, bool isWriteLine = false)
        {
            if (list == null || list.Count == 0)
            {
                Write(ConsoleColor.White, " []");
                if (isWriteLine) WriteLine();
                return;
            }

            Write(ConsoleColor.White, " [");
            for (int i = 0; i < list.Count; i++)
            {
                Write(ConsoleColor.Green, list[i]);
                if (i < list.Count - 1)
                {
                    Write(ConsoleColor.White, ", ");
                }
            }
            Write(ConsoleColor.White, "]");
            if (isWriteLine) WriteLine();
        }

        internal static void WriteList(string @string, bool isWriteLine = false)
        {
            if (string.IsNullOrEmpty(@string) || @string == "*")
            {
                @string = " * ";
            }
            var list = @string.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                              .Select(x => x.Trim())
                              .ToList();
            WriteList(list, isWriteLine);
        }

        // Helper methods to reduce repetitive logging patterns in TaskServer

        /// <summary>
        /// Writes a standard action log line with indentation
        /// Format: "|  [ACTION] description"
        /// </summary>
        public static void WriteAction(string action, string description, ConsoleColor descriptionColor = ConsoleColor.White, params object[] additionalParams)
        {
            Write(ConsoleColor.White, "|", "  ");
            WriteSuccess(ConsoleColor.White, action.Trim());
            Write(ConsoleColor.White, " ", description, " ");
            if (additionalParams != null && additionalParams.Length > 0)
            {
                foreach (var param in additionalParams)
                {
                    if (param is ConsoleColor color)
                        Write(color);
                    else
                        Write(descriptionColor, param);
                }
            }
            WriteLine();
        }

        /// <summary>
        /// Writes a standard status log line with indentation
        /// Format: "|  [STATUS] description"
        /// </summary>
        public static void WriteStatus(string status, string description, params object[] additionalParams)
        {
            Write(ConsoleColor.White, "|", "  ", ConsoleColor.Green, status, ConsoleColor.White, " ", description, " ");
            if (additionalParams != null && additionalParams.Length > 0)
            {
                foreach (var param in additionalParams)
                {
                    Write(param);
                }
            }
            WriteLine();
        }

        /// <summary>
        /// Writes a file header (bold highlighted filename)
        /// Format: "|filename"
        /// </summary>
        public static void WriteFileHeader(string fileName)
        {
            Write(ConsoleColor.White, "|");
            WriteSuccess(ConsoleColor.White, fileName);
            WriteLine();
        }

        /// <summary>
        /// Writes an indented action with assembly/package name and metadata list
        /// Format: "|  [ACTION] Assembly name.dll [metadata1, metadata2]"
        /// </summary>
        public static void WriteAssemblyAction(string action, string assemblyName, List<string> metadata, bool isPackage = false)
        {
            Write(ConsoleColor.White, "|", "  ");
            WriteSuccess(ConsoleColor.White, action.Trim());
            var itemType = isPackage ? " Package " : " Assembly ";
            Write(ConsoleColor.White, itemType, ConsoleColor.Cyan, assemblyName);
            if (!isPackage && assemblyName != null && !assemblyName.EndsWith(".dll", StringComparison.OrdinalIgnoreCase))
            {
                Write(ConsoleColor.White, ".dll");
            }
            if (metadata != null && metadata.Count > 0)
            {
                WriteList(metadata, true);
            }
            else
            {
                WriteLine();
            }
        }

        /// <summary>
        /// Writes a status message with assembly/package name and metadata list
        /// Format: "|  [STATUS] Assembly name.dll [metadata1, metadata2]"
        /// </summary>
        public static void WriteAssemblyStatus(string status, string assemblyName, List<string> metadata, bool isPackage = false)
        {
            var itemType = isPackage ? " Package " : " Assembly ";
            Write(ConsoleColor.White, "|", "  ", ConsoleColor.Green, status, ConsoleColor.White, itemType, ConsoleColor.Cyan, assemblyName);
            if (!isPackage && assemblyName != null && !assemblyName.EndsWith(".dll", StringComparison.OrdinalIgnoreCase))
            {
                Write(ConsoleColor.White, ".dll");
            }
            if (metadata != null && metadata.Count > 0)
            {
                WriteList(metadata, true);
            }
            else
            {
                WriteLine();
            }
        }

        /// <summary>
        /// Writes a binding message (for Managed Identity)
        /// Format: "|  [ACTION] Bind Assembly/Package name to Managed Identity App appId"
        /// </summary>
        public static void WriteBindAction(string action, string itemName, object applicationId, bool isPackage = false)
        {
            var itemType = isPackage ? " Package " : " Assembly ";
            Write(ConsoleColor.White, "|", "  ");
            if (action == "[SKIPPED]")
            {
                Write(ConsoleColor.Green, action.Trim());
                Write(ConsoleColor.White, " Bind" + itemType, ConsoleColor.Cyan, itemName);
                if (!isPackage && itemName != null && !itemName.EndsWith(".dll", StringComparison.OrdinalIgnoreCase))
                {
                    Write(ConsoleColor.White, ".dll");
                }
                WriteLine(ConsoleColor.White, " to Managed Identity App ", ConsoleColor.Cyan, applicationId);
            }
            else
            {
                WriteSuccess(ConsoleColor.White, action.Trim());
                Write(ConsoleColor.White, " Bind" + itemType, ConsoleColor.Cyan, itemName);
                if (!isPackage && itemName != null && !itemName.EndsWith(".dll", StringComparison.OrdinalIgnoreCase))
                {
                    Write(ConsoleColor.White, ".dll");
                }
                WriteLine(ConsoleColor.White, " to Managed Identity App ", ConsoleColor.Cyan, applicationId);
            }
        }

        /// <summary>
        /// Writes a standard info line with pipe prefix
        /// Format: "| message"
        /// </summary>
        public static void WriteInfo(string message, ConsoleColor messageColor = ConsoleColor.White)
        {
            WriteLine(ConsoleColor.White, "|", messageColor, message);
        }

        /// <summary>
        /// Writes a standard info line with custom colors
        /// </summary>
        public static void WriteInfoColored(params object[] values)
        {
            var allValues = new object[values.Length + 1];
            allValues[0] = "|";
            Array.Copy(values, 0, allValues, 1, values.Length);
            WriteLine(allValues);
        }

        /// <summary>
        /// Writes a separator line
        /// Format: "|"
        /// </summary>
        public static void WriteSeparator()
        {
            WriteLine(ConsoleColor.White, "|");
        }

        /// <summary>
        /// Writes a section header (START/END)
        /// Format: "| [TEXT] "
        /// </summary>
        public static void WriteSectionHeader(string text, ConsoleColor color = ConsoleColor.Green)
        {
            WriteLine(ConsoleColor.White, "|", color, text + " ");
        }
    }
}
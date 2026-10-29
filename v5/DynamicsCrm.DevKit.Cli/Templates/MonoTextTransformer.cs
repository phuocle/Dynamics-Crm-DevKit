using DynamicsCrm.DevKit.Shared.Templates.T4;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Templates
{
    /// <summary>
    /// ITextTransformer implementation backed by Mono.TextTemplating
    /// (already referenced by the CLI). Lives in the CLI project — not the
    /// Shared project — because the VSIX does not reference the
    /// Mono.TextTemplating package; the VSIX keeps its Visual Studio T4
    /// service behind the same ITextTransformer interface, so template
    /// content and T4Context building remain shared.
    /// </summary>
    public sealed class MonoTextTransformer : ITextTransformer
    {
        private const string ParameterDirective = "<#@ parameter type=\"DynamicsCrm.DevKit.Shared.Models.T4Context\" name=\"Context\"#>";

        public async Task<string> TransformAsync(string t4Code, T4Context context)
        {
            if (string.IsNullOrWhiteSpace(t4Code))
            {
                throw new InvalidOperationException("t4Code: required");
            }

            var generator = new Mono.TextTemplating.TemplateGenerator();
            generator.Refs.Add(typeof(T4Context).Assembly.Location);
            generator.Imports.Add("System");

            var session = generator.GetOrCreateSession();
            session["Context"] = context;

            var code = ParameterDirective + t4Code;
            // ProcessTemplateAsync(inputFile, inputContent, outputFile)
            // returns (outputFile, outputContent, success).
            var result = await generator.ProcessTemplateAsync("template.tt", code, null);

            if (generator.Errors.HasErrors)
            {
                var errors = new System.Text.StringBuilder();
                foreach (System.CodeDom.Compiler.CompilerError error in generator.Errors)
                {
                    if (error.IsWarning) continue;
                    errors.AppendLine(error.ErrorText);
                }
                throw new InvalidOperationException($"T4 transformation failed:{Environment.NewLine}{errors}");
            }

            return CollapseWhitespaceOnlyLines(SortLeadingUsings(result.Item2));
        }

        /// <summary>
        /// The Visual Studio T4 host does not keep whitespace-only output
        /// lines: a template line whose control blocks emit nothing leaves
        /// an EMPTY line in the render — the I.6 wizard compare caught the
        /// unbound CustomApi guard line (the <#if ...#> of CustomApi.tt)
        /// collapsing to a bare CRLF while Mono keeps the template's
        /// literal indentation. Mirror that so T4 renders stay
        /// byte-identical across hosts; lines with content keep their
        /// leading (and any trailing) whitespace untouched.
        /// </summary>
        private static string CollapseWhitespaceOnlyLines(string output)
        {
            if (string.IsNullOrEmpty(output)) return output;
            return WhitespaceOnlyLine().Replace(output, string.Empty);
        }

        /// <summary>
        /// The Visual Studio T4 host organizes the leading using directives
        /// of its output alphabetically (the I.4 wizard compare: the
        /// rendered plugin file opens with the Shared namespace, not the
        /// template's literal order). The CLI engine mirrors that so T4
        /// renders stay byte-identical across hosts.
        /// </summary>
        private static string SortLeadingUsings(string output)
        {
            if (string.IsNullOrEmpty(output)) return output;

            var directives = new System.Collections.Generic.List<string>();
            var position = 0;
            var match = LeadingUsing().Match(output, position);
            while (match.Success && match.Index == position)
            {
                directives.Add(match.Value);
                position = match.Index + match.Length;
                match = LeadingUsing().Match(output, position);
            }
            if (directives.Count < 2) return output;

            // The host sorts by the namespace NAME — "Microsoft.Xrm.Sdk"
            // precedes "Microsoft.Xrm.Sdk.Extensions" (prefix first; the
            // raw line's ';' would sort the other way).
            directives.Sort((left, right) => string.Compare(
                UsingName().Match(left).Groups[1].Value,
                UsingName().Match(right).Groups[1].Value,
                StringComparison.OrdinalIgnoreCase));
            return string.Concat(directives) + output.Substring(position);
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static Regex LeadingUsing()
        {
            // One leading using directive line, its line ending included
            // (Multiline anchors ^ at every line start while the block scan
            // advances through the output).
            return new Regex("^using [^;\r\n]+;[ \t]*(?:\r?\n|$)", RegexOptions.Compiled | RegexOptions.Multiline);
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static Regex WhitespaceOnlyLine()
        {
            // The indentation of a whitespace-only line, right before its
            // line ending (Multiline ^ anchors at every line start; the
            // lookahead keeps content lines — their spaces are followed by
            // a non-whitespace character — untouched).
            return new Regex("^[ \t]+(?=\r?\n)", RegexOptions.Compiled | RegexOptions.Multiline);
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static Regex UsingName()
        {
            return new Regex("^using[ \t]+([^;\r\n]+);[ \t]*(?:\r?\n)?$", RegexOptions.Compiled);
        }
    }
}

using DynamicsCrm.DevKit.Shared.Templates.T4;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.IO;
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

            return result.Item2;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;

namespace DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class PluginImageAnalyzer : BaseDiagnosticAnalyzer
    {
        private class Image
        {
            public string ImageType { get; set; }
            public string ImageAttributes { get; set; }
            public Location Location { get; set; }
        }

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get {
                return ImmutableArray.Create(
                    DiagnosticDescriptors.PluginImage_PreCreate_PreImage,
                    DiagnosticDescriptors.PluginImage_PreCreate_PostImage,
                    DiagnosticDescriptors.PluginImage_PostCreate_PreImage
                );
            }
        }

        public override void Initialize(AnalysisContext context)
        {
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
            if (context == null) throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            context.RegisterSyntaxNodeAction(AnalyzerPluginImage, SyntaxKind.Attribute);
        }

        private void AnalyzerPluginImage(SyntaxNodeAnalysisContext context)
        {
            if (context.Node is AttributeSyntax attribute &&attribute?.Name?.ToFullString() == "CrmPluginRegistration")
            {
                attribute.TryFindArgument(0, "message", out var argurment0);
                attribute.TryFindArgument(2, "stage", out var argurment2);
                var message = AnalyzerHelper.RemoveQuote(argurment0?.ToFullString()).Trim().ToLower();
                var stage = argurment2?.ToFullString();
                if (message == "create" && stage != null && (stage.EndsWith("StageEnum.PreValidation") || stage.EndsWith("StageEnum.PreOperation")))
                {
                    var images = GetImages(attribute.ArgumentList);
                    if (images.Count > 0) {
                        foreach (var image in images) {
                            if (image.ImageType.EndsWith("ImageTypeEnum.PreImage"))
                            {
                                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PreCreate_PreImage, image.Location);
                            }
                            if (image.ImageType.EndsWith("ImageTypeEnum.PostImage"))
                            {
                                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PreCreate_PostImage, image.Location);
                            }
                        }
                    }
                }
                else if (message == "create" && stage != null && stage.EndsWith("PostOperation"))
                {
                    var images = GetImages(attribute.ArgumentList);
                    if (images.Count > 0)
                    {
                        foreach (var image in images)
                        {
                            if (image.ImageType.EndsWith("ImageTypeEnum.PreImage"))
                            {
                                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PostCreate_PreImage, image.Location);
                            }
                        }
                    }
                }
                //else if (message == "update")
                //{
                //    foreach (var argument in attribute.ArgumentList.Arguments)
                //    {
                //        if (argument?.NameEquals?.Name.ToString() == "Image1Type" || argument?.NameEquals?.Name.ToString() == "Image2Type" || argument?.NameEquals?.Name.ToString() == "Image2Type" || argument?.NameEquals?.Name.ToString() == "Image2Type")
                //        {
                //            var t = string.Empty;
                //        }
                //    }
                //    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage, attribute.GetLocation());
                //}
                //else if (message == "delete")
                //{

                //}

            }
        }

        private List<Image> GetImages(AttributeArgumentListSyntax argumentList)
        {
            var list = new List<Image>();
            list.Add(GetImage(argumentList, 1));
            list.Add(GetImage(argumentList, 2));
            list.Add(GetImage(argumentList, 3));
            list.Add(GetImage(argumentList, 4));
            return list.Where(x => x.ImageAttributes != "" && x.ImageAttributes != null).ToList();
        }

        private Image GetImage(AttributeArgumentListSyntax argumentList, int index)
        {
            var argumentImageType = argumentList.Arguments.ToList().FirstOrDefault(x => x?.NameEquals?.Name?.Identifier.ValueText == $"Image{index}Type");
            var argumentImageAttributes = argumentList.Arguments.ToList().FirstOrDefault(x => x?.NameEquals?.Name?.Identifier.ValueText == $"Image{index}Attributes");
            return new Image
            {
                ImageAttributes = AnalyzerHelper.RemoveQuote(argumentImageAttributes?.Expression?.NormalizeWhitespace()?.ToFullString()),
                ImageType = argumentImageType?.Expression?.NormalizeWhitespace()?.ToFullString(),
                Location = argumentImageType?.GetLocation()
            };
        }
    }
}

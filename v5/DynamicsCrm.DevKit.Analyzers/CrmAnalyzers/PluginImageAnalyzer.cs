using System;
using System.Collections.Generic;
using System.Collections.Immutable;
#if DEBUG
using System.Diagnostics;
#endif
using System.Linq;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;

namespace DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    /// <summary>
    /// Analyzer to validate plugin image configurations based on message and stage.
    /// Detects invalid combinations like pre-images on Create or post-images on pre-stage operations.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/understand-the-data-context
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class PluginImageAnalyzer : BaseDiagnosticAnalyzer
    {
        /// <summary>
        /// Messages that support plugin images.
        /// Based on: Helper.IsSupportPluginImage() in DynamicsCrm.DevKit.Shared
        /// </summary>
        private static readonly HashSet<string> MessagesWithImageSupport = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "Assign", "Create", "CreateMultiple", "Delete", "DeliverIncoming", "DeliverPromote", 
            "Merge", "Route", "Send", "SetState", "SetStateDynamicEntity", 
            "Update", "UpdateMultiple", "ExecuteWorkflow"
        };

        private const string PreImageSuffix = "ImageTypeEnum.PreImage";
        private const string PostImageSuffix = "ImageTypeEnum.PostImage";
        private const string PreValidationSuffix = "StageEnum.PreValidation";
        private const string PreOperationSuffix = "StageEnum.PreOperation";
        private const string PostOperationSuffix = "PostOperation";

        /// <summary>
        /// Represents a plugin image configuration.
        /// </summary>
        private sealed class ImageConfig
        {
            public string ImageType { get; set; }
            public string ImageAttributes { get; set; }
            public Location Location { get; set; }

            public bool IsPreImage => ImageType?.EndsWith(PreImageSuffix) == true;
            public bool IsPostImage => ImageType?.EndsWith(PostImageSuffix) == true;
        }

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get
            {
                return ImmutableArray.Create(
                    DiagnosticDescriptors.PluginImage_PreCreate_PreImage,
                    DiagnosticDescriptors.PluginImage_PreCreate_PostImage,
                    DiagnosticDescriptors.PluginImage_PostCreate_PreImage,
                    DiagnosticDescriptors.PluginImage_PreUpdate_PostImage,
                    DiagnosticDescriptors.PluginImage_PreDelete_PostImage,
                    DiagnosticDescriptors.PluginImage_PostDelete_PostImage,
                    DiagnosticDescriptors.PluginImage_NotSupportForPostImage,
                    DiagnosticDescriptors.PluginImage_NotSupportForPreImage
                );
            }
        }

        public override void Initialize(AnalysisContext context)
        {
#if DEBUG
            //if (!Debugger.IsAttached)
            //{
            //    Debugger.Launch();
            //}
#endif
            if (context == null) throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            
            context.RegisterSyntaxNodeAction(AnalyzePluginImage, SyntaxKind.Attribute);
        }

        private void AnalyzePluginImage(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is AttributeSyntax attribute))
                return;

            // Check if this is a CrmPluginRegistration attribute
            var attributeName = attribute.Name?.ToString();
            if (attributeName == null || !attributeName.Contains("CrmPluginRegistration"))
                return;

            // Get message argument
            if (!attribute.TryFindArgument(0, "message", out var messageArg) || messageArg == null)
                return;

            var message = GetStringValue(messageArg);
            if (string.IsNullOrEmpty(message))
                return;

            // Get stage argument
            attribute.TryFindArgument(2, "stage", out var stageArg);
            var stage = stageArg?.ToFullString();

            // Get all configured images
            var images = GetConfiguredImages(attribute.ArgumentList);
            if (images.Count == 0)
                return;

            // Analyze based on message and stage combination
            AnalyzeImageConfiguration(context, message, stage, images);
        }

        private void AnalyzeImageConfiguration(SyntaxNodeAnalysisContext context, string message, string stage, List<ImageConfig> images)
        {
            var messageLower = message.ToLowerInvariant();
            var isPreStage = stage != null && (stage.EndsWith(PreValidationSuffix) || stage.EndsWith(PreOperationSuffix));
            var isPostStage = stage != null && stage.EndsWith(PostOperationSuffix);

            foreach (var image in images)
            {
                switch (messageLower)
                {
                    case "create" when isPreStage:
                        if (image.IsPreImage)
                            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PreCreate_PreImage, image.Location);
                        if (image.IsPostImage)
                            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PreCreate_PostImage, image.Location);
                        break;

                    case "create" when isPostStage:
                        if (image.IsPreImage)
                            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PostCreate_PreImage, image.Location);
                        break;

                    case "update" when isPreStage:
                        if (image.IsPostImage)
                            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PreUpdate_PostImage, image.Location);
                        break;

                    case "delete" when isPreStage:
                        if (image.IsPostImage)
                            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PreDelete_PostImage, image.Location);
                        break;

                    case "delete" when isPostStage:
                        if (image.IsPostImage)
                            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_PostDelete_PostImage, image.Location);
                        break;

                    default:
                        // Check if message doesn't support images
                        if (!MessagesWithImageSupport.Contains(message))
                        {
                            if (image.IsPreImage)
                                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_NotSupportForPreImage, image.Location, message);
                            if (image.IsPostImage)
                                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginImage_NotSupportForPostImage, image.Location, message);
                        }
                        break;
                }
            }
        }

        /// <summary>
        /// Gets all configured images from the attribute arguments.
        /// </summary>
        private static List<ImageConfig> GetConfiguredImages(AttributeArgumentListSyntax argumentList)
        {
            var images = new List<ImageConfig>(4);
            
            for (int i = 1; i <= 4; i++)
            {
                var image = GetImageConfig(argumentList, i);
                if (!string.IsNullOrEmpty(image.ImageAttributes))
                {
                    images.Add(image);
                }
            }
            
            return images;
        }

        /// <summary>
        /// Gets the image configuration for a specific image index.
        /// </summary>
        private static ImageConfig GetImageConfig(AttributeArgumentListSyntax argumentList, int index)
        {
            if (argumentList == null)
                return new ImageConfig();

            var arguments = argumentList.Arguments;
            
            var imageTypeArg = arguments.FirstOrDefault(x => 
                x?.NameEquals?.Name?.Identifier.ValueText == $"Image{index}Type");
            var imageAttributesArg = arguments.FirstOrDefault(x => 
                x?.NameEquals?.Name?.Identifier.ValueText == $"Image{index}Attributes");

            return new ImageConfig
            {
                ImageAttributes = GetExpressionStringValue(imageAttributesArg?.Expression),
                ImageType = imageTypeArg?.Expression?.NormalizeWhitespace()?.ToFullString(),
                Location = imageTypeArg?.GetLocation()
            };
        }

        /// <summary>
        /// Gets string value from an attribute argument.
        /// </summary>
        private static string GetStringValue(AttributeArgumentSyntax argument)
        {
            if (argument?.Expression == null)
                return null;

            if (argument.Expression is LiteralExpressionSyntax literal &&
                literal.IsKind(SyntaxKind.StringLiteralExpression))
            {
                return literal.Token.ValueText;
            }

            return AnalyzerHelper.RemoveQuote(argument.ToFullString()?.Trim());
        }

        /// <summary>
        /// Gets string value from an expression.
        /// </summary>
        private static string GetExpressionStringValue(ExpressionSyntax expression)
        {
            if (expression == null)
                return null;

            if (expression is LiteralExpressionSyntax literal &&
                literal.IsKind(SyntaxKind.StringLiteralExpression))
            {
                return literal.Token.ValueText;
            }

            return AnalyzerHelper.RemoveQuote(expression.NormalizeWhitespace()?.ToFullString());
        }
    }
}
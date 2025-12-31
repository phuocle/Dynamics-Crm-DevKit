using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib;
using Microsoft.Xrm.Sdk.Metadata;
using System;

namespace DynamicsCrm.DevKit.Shared.ModelBuilderExtensions
{
    public class CodeGenerationService : ICodeGenerationService
    {
        private readonly ICodeGenerationService _defaultService;

        public CodeGenerationService(ICodeGenerationService defaultService)
        {
            _defaultService = defaultService;
        }

        public CodeGenerationType GetTypeForAttribute(EntityMetadata entityMetadata, AttributeMetadata attributeMetadata, IServiceProvider services)
        {
            return _defaultService.GetTypeForAttribute(entityMetadata, attributeMetadata, services);
        }

        public CodeGenerationType GetTypeForEntity(EntityMetadata entityMetadata, IServiceProvider services)
        {
            return _defaultService.GetTypeForEntity(entityMetadata, services);
        }

        public CodeGenerationType GetTypeForMessagePair(SdkMessagePair messagePair, IServiceProvider services)
        {
            return _defaultService.GetTypeForMessagePair(messagePair, services);
        }

        public CodeGenerationType GetTypeForOption(OptionSetMetadataBase optionSetMetadata, OptionMetadata optionMetadata, IServiceProvider services)
        {
            return _defaultService.GetTypeForOption(optionSetMetadata, optionMetadata, services);
        }

        public CodeGenerationType GetTypeForOptionSet(EntityMetadata entityMetadata, OptionSetMetadataBase optionSetMetadata, IServiceProvider services)
        {
            return _defaultService.GetTypeForOptionSet(entityMetadata, optionSetMetadata, services);
        }

        public CodeGenerationType GetTypeForRequestField(SdkMessageRequest request, SdkMessageRequestField requestField, IServiceProvider services)
        {
            return _defaultService.GetTypeForRequestField(request, requestField, services);
        }

        public CodeGenerationType GetTypeForResponseField(SdkMessageResponse response, SdkMessageResponseField responseField, IServiceProvider services)
        {
            return _defaultService.GetTypeForResponseField(response, responseField, services);
        }

        public void Write(IOrganizationMetadata organizationMetadata, string language, string outputFile, string targetNamespace, IServiceProvider services)
        {
            _defaultService.Write(organizationMetadata, language, outputFile, targetNamespace, services);
        }
    }
}

using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.Shared.ModelBuilderExtensions
{
    public sealed class NamingService : INamingService
    {
        private readonly INamingService _defaultNamingService;

        public NamingService(INamingService defaultNamingService)
        {
            this._defaultNamingService = defaultNamingService;
        }

        public string GetNameForAttribute(EntityMetadata entityMetadata, AttributeMetadata attributeMetadata, IServiceProvider services)
        {
            return "AAAAA_" + this._defaultNamingService.GetNameForAttribute(entityMetadata, attributeMetadata, services);
        }

        public string GetNameForEntity(EntityMetadata entityMetadata, IServiceProvider services)
        {
            return "BBBBB_" + this._defaultNamingService.GetNameForEntity(entityMetadata, services);
        }

        public string GetNameForEntitySet(EntityMetadata entityMetadata, IServiceProvider services)
        {
            return "CCCCC_" + this._defaultNamingService.GetNameForEntitySet(entityMetadata, services);
        }

        public string GetNameForMessagePair(SdkMessagePair messagePair, IServiceProvider services)
        {
            return "DDDDD_" + this._defaultNamingService.GetNameForMessagePair(messagePair, services);
        }

        public string GetNameForOption(OptionSetMetadataBase optionSetMetadata, OptionMetadata optionMetadata, IServiceProvider services)
        {
            return "EEEEE_" + this._defaultNamingService.GetNameForOption(optionSetMetadata, optionMetadata, services);
        }

        public string GetNameForOptionSet(EntityMetadata entityMetadata, OptionSetMetadataBase optionSetMetadata, IServiceProvider services)
        {
            return "FFFFF_" + this._defaultNamingService.GetNameForOptionSet(entityMetadata, optionSetMetadata, services);
        }

        public string GetNameForRelationship(EntityMetadata entityMetadata, RelationshipMetadataBase relationshipMetadata, EntityRole? reflexiveRole, IServiceProvider services)
        {
            return "GGGGG_" + this._defaultNamingService.GetNameForRelationship(entityMetadata, relationshipMetadata, reflexiveRole, services);
        }

        public string GetNameForRequestField(SdkMessageRequest request, SdkMessageRequestField requestField, IServiceProvider services)
        {
            return "HHHHHH_" + this._defaultNamingService.GetNameForRequestField(request, requestField, services);
        }

        public string GetNameForResponseField(SdkMessageResponse response, SdkMessageResponseField responseField, IServiceProvider services)
        {
            return "IIIIII_" + this._defaultNamingService.GetNameForResponseField(response, responseField, services);
        }

        public string GetNameForServiceContext(IServiceProvider services)
        {
            return "JJJJJJ_" + this._defaultNamingService.GetNameForServiceContext(services);
        }
    }
}

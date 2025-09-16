using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Text;

namespace DynamicsCrm.DevKit.Shared.ModelBuilderExtensions
{
    public class NamingService : INamingService
    {
        public string GetNameForAttribute(EntityMetadata entityMetadata, AttributeMetadata attributeMetadata, IServiceProvider services)
        {
            return "ABC";
        }

        public string GetNameForEntity(EntityMetadata entityMetadata, IServiceProvider services)
        {
            return "ABC";
        }

        public string GetNameForEntitySet(EntityMetadata entityMetadata, IServiceProvider services)
        {
            return "ABC";
        }

        public string GetNameForMessagePair(SdkMessagePair messagePair, IServiceProvider services)
        {
            return GetNameForMessagePair(messagePair, services);
        }

        public string GetNameForOption(OptionSetMetadataBase optionSetMetadata, OptionMetadata optionMetadata, IServiceProvider services)
        {
            return GetNameForOption(optionSetMetadata, optionMetadata, services);
        }

        public string GetNameForOptionSet(EntityMetadata entityMetadata, OptionSetMetadataBase optionSetMetadata, IServiceProvider services)
        {
            return GetNameForOptionSet(entityMetadata, optionSetMetadata, services);
        }

        public string GetNameForRelationship(EntityMetadata entityMetadata, RelationshipMetadataBase relationshipMetadata, EntityRole? reflexiveRole, IServiceProvider services)
        {
            return GetNameForRelationship(entityMetadata, relationshipMetadata, reflexiveRole, services);
        }

        public string GetNameForRequestField(SdkMessageRequest request, SdkMessageRequestField requestField, IServiceProvider services)
        {
            return GetNameForRequestField(request, requestField, services);
        }

        public string GetNameForResponseField(SdkMessageResponse response, SdkMessageResponseField responseField, IServiceProvider services)
        {
            return GetNameForResponseField(response, responseField, services);
        }

        public string GetNameForServiceContext(IServiceProvider services)
        {
            return  GetNameForServiceContext(services);
        }
    }
}

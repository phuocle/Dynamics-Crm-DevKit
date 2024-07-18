using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Crm.Services.Utility;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.CrmSvcUtilExtensions
{
    public class CodeWriterFilter : ICodeWriterFilterService
    {
        private const string ENVIRONMENT_ENTITIES = "DynamicsCrm.DevKit.CrmSvcUtilExtensions.Entities";
        private ICodeWriterFilterService DefaultService { get; set; }
        private HashSet<string> entities;
        public CodeWriterFilter(ICodeWriterFilterService defaultService)
        {
            this.DefaultService = defaultService;
            entities = new HashSet<string>((Environment.GetEnvironmentVariable(ENVIRONMENT_ENTITIES) ?? "").Split(','));
        }

        public bool GenerateAttribute(AttributeMetadata attributeMetadata, IServiceProvider services)
        {
            return this.DefaultService.GenerateAttribute(attributeMetadata, services);
        }

        public bool GenerateEntity(EntityMetadata entityMetadata, IServiceProvider services)
        {
            if (entities.Contains(entityMetadata.LogicalName))
            {
                return true;
            }
            else if (entities.Any())
            {
                return false;
            }
            else
            {
                return this.DefaultService.GenerateEntity(entityMetadata, services);
            }
        }

        public bool GenerateOption(OptionMetadata optionMetadata, IServiceProvider services)
        {
            return this.DefaultService.GenerateOption(optionMetadata, services);
        }

        public bool GenerateOptionSet(OptionSetMetadataBase optionSetMetadata, IServiceProvider services)
        {
            return this.DefaultService.GenerateOptionSet(optionSetMetadata, services);
        }

        public bool GenerateRelationship(RelationshipMetadataBase relationshipMetadata, EntityMetadata otherEntityMetadata, IServiceProvider services)
        {
            return this.DefaultService.GenerateRelationship(relationshipMetadata, otherEntityMetadata, services);
        }

        public bool GenerateServiceContext(IServiceProvider services)
        {
            return this.DefaultService.GenerateServiceContext(services);
        }
    }
}

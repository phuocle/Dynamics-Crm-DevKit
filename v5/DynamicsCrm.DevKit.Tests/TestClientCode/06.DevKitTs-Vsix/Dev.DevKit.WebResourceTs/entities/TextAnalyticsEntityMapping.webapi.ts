/**
 * TextAnalyticsEntityMapping.webapi.ts - TextAnalyticsEntityMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TextAnalyticsEntityMapping
 * All fields return string representation of their values
 */
export interface ITextAnalyticsEntityMappingFormattedValue {
	readonly AdvancedSimilarityRuleId: string;
	readonly ComponentState: string;
	readonly Entity2: string;
	readonly EntityDisplayName: string;
	readonly EntityPickList: string;
	readonly Field: string;
	readonly FieldDisplayName: string;
	readonly FieldPickList: string;
	readonly IsManaged: string;
	readonly IsTextMatchMapping: string;
	readonly KnowledgeSearchModelId: string;
	readonly ModelType: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly RelationshipName: string;
	readonly SimilarityRuleId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly TextAnalyticsEntityMappingId: string;
	readonly TextAnalyticsEntityMappingIdUnique: string;
}

/**
 * TextAnalyticsEntityMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITextAnalyticsEntityMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITextAnalyticsEntityMappingFormattedValue;
	/** Advanced Similarity RuleId associated with entity mapping. */
	AdvancedSimilarityRuleId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Entity */
	Entity2: string | null;
	/** Entity Display Name */
	EntityDisplayName: string | null;
	/** Select Entity */
	EntityPickList: number | null;
	/** Field */
	Field: string | null;
	/** Field Display Name */
	FieldDisplayName: string | null;
	/** Select Field */
	FieldPickList: number | null;
	/** Is Manageed */
	readonly IsManaged: boolean | null;
	/** Specify if the mapping is for text match or exact match */
	IsTextMatchMapping: boolean | null;
	/** Knowledge Search Model associated with entity mapping. */
	KnowledgeSearchModelId: DevKit.Guid | null;
	/** Model Type. */
	ModelType: number | null;
	/** Unique identifier of the organization associated with the Text Analytics Entity Mapping. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Relationship Name */
	RelationshipName: string | null;
	/** Similarity Rule associated with entity mapping. */
	SimilarityRuleId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	TextAnalyticsEntityMappingId: DevKit.Guid | null;
	/** Unique identifier of the Text Analytics Entity Mapping */
	readonly TextAnalyticsEntityMappingIdUnique: DevKit.Guid | null;
}

const TextAnalyticsEntityMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdvancedSimilarityRuleId: { logicalName: 'advancedsimilarityruleid' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Entity2: { logicalName: 'entity' },
	EntityDisplayName: { logicalName: 'entitydisplayname' },
	EntityPickList: { logicalName: 'entitypicklist', type: 'Integer' },
	Field: { logicalName: 'field' },
	FieldDisplayName: { logicalName: 'fielddisplayname' },
	FieldPickList: { logicalName: 'fieldpicklist', type: 'Integer' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsTextMatchMapping: { logicalName: 'istextmatchmapping', type: 'Boolean' },
	KnowledgeSearchModelId: { logicalName: 'knowledgesearchmodelid' },
	ModelType: { logicalName: 'modeltype', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RelationshipName: { logicalName: 'relationshipname' },
	SimilarityRuleId: { schemaName: 'SimilarityRuleId', logicalName: '_similarityruleid_value', entityCollectionName: 'similarityrules', entityLogicalName: 'similarityrule' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TextAnalyticsEntityMappingId: { logicalName: 'textanalyticsentitymappingid' },
	TextAnalyticsEntityMappingIdUnique: { logicalName: 'textanalyticsentitymappingidunique', readOnly: true },
};

/**
 * TextAnalyticsEntityMapping WebApi class for early-bound style coding
 * Usage: const textAnalyticsEntityMapping = new TextAnalyticsEntityMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TextAnalyticsEntityMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITextAnalyticsEntityMappingApi>(entity, 'textanalyticsentitymapping', 'textanalyticsentitymapping', TextAnalyticsEntityMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TextAnalyticsEntityMappingApi extends ITextAnalyticsEntityMappingApi { }

/**
 * StagedEntityAttribute.webapi.ts - StagedEntityAttribute WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * StagedEntityAttribute WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStagedEntityAttributeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IStagedEntityAttributeApi, 'FormattedValue'>]: string };
	/** The attribute decription with properties for async metadata creation */
	AttributeDescription: string | null;
	/** The id of the parent attribute. */
	AttributeOf: DevKit.Guid | null;
	/** The AttributeTypeId for staged attribute. */
	AttributeTypeId: DevKit.Guid | null;
	/** ComponentState for staged attribute */
	ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The ID of the entity for staged attribute. */
	EntityId: DevKit.Guid | null;
	/** The external name of the staged attribute for virtual entity. */
	ExternalName: string | null;
	/** Determines if Staged Attribute has multiple labels */
	HasMultipleLabels: boolean | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Determines if Staged Attribute IsLogical */
	IsLogical: boolean | null;
	/** Determines if Staged Attribute is Primary Key */
	IsPKAttribute: boolean | null;
	/** The LogicalName of the staged attribute. */
	LogicalName: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the staged attribute. */
	Name: string | null;
	/** The localized description of the attribute. */
	OriginalLocalizedDescription: string | null;
	/** The original localized name of the staged attribute. */
	OriginalLocalizedName: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** OverwriteTime for staged attribute. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** The PhysicalName of the staged attribute. */
	PhysicalName: string | null;
	/** The SolutionId for staged attribute. */
	SolutionId: DevKit.Guid | null;
	/** Unique identifier for entity attribute instances */
	StagedEntityAttributeId: DevKit.Guid | null;
	/** A unique identifier used to tie together all objects staged within the same transaction. */
	StagingExecutionContextId: DevKit.Guid | null;
	/** Status of the Staged Entity Attribute */
	statecode: number | null;
	/** Reason for the status of the Staged Entity Attribute */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Determines if Staged Attribute is ValidForReadAPI */
	ValidForReadAPI: boolean | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const StagedEntityAttributeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeDescription: { logicalName: 'attributedescription' },
	AttributeOf: { logicalName: 'attributeof' },
	AttributeTypeId: { logicalName: 'attributetypeid' },
	ComponentState: { logicalName: 'componentstate', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityId: { logicalName: 'entityid' },
	ExternalName: { logicalName: 'externalname' },
	HasMultipleLabels: { logicalName: 'hasmultiplelabels', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsLogical: { logicalName: 'islogical', type: 'Boolean' },
	IsPKAttribute: { logicalName: 'ispkattribute', type: 'Boolean' },
	LogicalName: { logicalName: 'logicalname' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OriginalLocalizedDescription: { logicalName: 'originallocalizedescription' },
	OriginalLocalizedName: { logicalName: 'originallocalizedname' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PhysicalName: { logicalName: 'physicalname' },
	SolutionId: { logicalName: 'solutionid' },
	StagedEntityAttributeId: { logicalName: 'stagedentityattributeid' },
	StagingExecutionContextId: { logicalName: 'stagingexecutioncontextid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	ValidForReadAPI: { logicalName: 'validforreadapi', type: 'Boolean' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StagedEntityAttribute WebApi class for early-bound style coding
 * Usage: const stagedEntityAttribute = new StagedEntityAttributeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StagedEntityAttributeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStagedEntityAttributeApi>(entity, 'stagedentityattribute', 'stagedentityattributes', StagedEntityAttributeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StagedEntityAttributeApi extends IStagedEntityAttributeApi { }

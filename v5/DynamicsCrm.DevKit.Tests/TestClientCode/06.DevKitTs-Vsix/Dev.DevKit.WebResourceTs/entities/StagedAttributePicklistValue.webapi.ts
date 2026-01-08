/**
 * StagedAttributePicklistValue.webapi.ts - StagedAttributePicklistValue WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for StagedAttributePicklistValue
 * All fields return string representation of their values
 */
export interface IStagedAttributePicklistValueFormattedValue {
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly MetadataDescription: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OptionSetId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly StagedAttributePicklistValueId: string;
	readonly StagingExecutionContextId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * StagedAttributePicklistValue WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStagedAttributePicklistValueApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IStagedAttributePicklistValueFormattedValue;
	/** Solution component state of attribute picklist value. */
	ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Metadata description of attribute picklist value. */
	MetadataDescription: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the attribute picklist value. */
	Name: string | null;
	/** Identifier of the option set. */
	OptionSetId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Overwrite time of the solution component attribute picklist value. */
	OverwriteTime_UtcDateAndTime: Date | null;
	/** Identifier of the solution that contains attribute picklist value. */
	SolutionId: DevKit.Guid | null;
	/** Unique identifier for entity instances. */
	StagedAttributePicklistValueId: DevKit.Guid | null;
	/** A unique identifier used to tie together all objects staged within the same transaction. */
	StagingExecutionContextId: DevKit.Guid | null;
	/** Status of the staged attribute picklist value. */
	statecode: number | null;
	/** Reason for the status of the staged attribute picklist value. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const StagedAttributePicklistValueFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MetadataDescription: { logicalName: 'metadatadescription' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OptionSetId: { logicalName: 'optionsetid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid' },
	StagedAttributePicklistValueId: { logicalName: 'stagedattributepicklistvalueid' },
	StagingExecutionContextId: { logicalName: 'stagingexecutioncontextid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StagedAttributePicklistValue WebApi class for early-bound style coding
 * Usage: const stagedAttributePicklistValue = new StagedAttributePicklistValueApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StagedAttributePicklistValueApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStagedAttributePicklistValueApi>(entity, 'stagedattributepicklistvalue', 'stagedattributepicklistvalues', StagedAttributePicklistValueFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StagedAttributePicklistValueApi extends IStagedAttributePicklistValueApi { }

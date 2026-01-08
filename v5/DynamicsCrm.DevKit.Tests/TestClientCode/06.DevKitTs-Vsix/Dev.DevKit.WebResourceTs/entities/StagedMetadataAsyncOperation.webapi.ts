/**
 * StagedMetadataAsyncOperation.webapi.ts - StagedMetadataAsyncOperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for StagedMetadataAsyncOperation
 * All fields return string representation of their values
 */
export interface IStagedMetadataAsyncOperationFormattedValue {
	readonly AsyncJobStatus: string;
	readonly AsyncOperationId: string;
	readonly ComponentType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly ObjectId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly StagedMetadataAsyncOperationId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UnprocessedDependencies: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * StagedMetadataAsyncOperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IStagedMetadataAsyncOperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IStagedMetadataAsyncOperationFormattedValue;
	/** Status of the Async Job to process metadata operation. */
	readonly AsyncJobStatus: number | null;
	/** Async Job OperationId. */
	readonly AsyncOperationId: DevKit.Guid | null;
	/** Type of metadata component. */
	readonly ComponentType: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the staged metadata async operation. */
	readonly Name: string | null;
	/** Component (Entity/Attribute) MetadataId */
	readonly ObjectId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier for entity instances */
	readonly StagedMetadataAsyncOperationId: DevKit.Guid | null;
	/** Status of the Staged Metadata Async Operation */
	statecode: number | null;
	/** Reason for the status of the Staged Metadata Async Operation */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** List of unprocessed dependencies */
	readonly UnprocessedDependencies: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const StagedMetadataAsyncOperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AsyncJobStatus: { logicalName: 'asyncjobstatus', readOnly: true, type: 'Integer' },
	AsyncOperationId: { logicalName: 'asyncoperationid', readOnly: true },
	ComponentType: { logicalName: 'componenttype', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name', readOnly: true },
	ObjectId: { logicalName: 'objectid', readOnly: true },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	StagedMetadataAsyncOperationId: { logicalName: 'stagedmetadataasyncoperationid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UnprocessedDependencies: { logicalName: 'unprocesseddependencies', readOnly: true },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * StagedMetadataAsyncOperation WebApi class for early-bound style coding
 * Usage: const stagedMetadataAsyncOperation = new StagedMetadataAsyncOperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class StagedMetadataAsyncOperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IStagedMetadataAsyncOperationApi>(entity, 'stagedmetadataasyncoperation', 'stagedmetadataasyncoperations', StagedMetadataAsyncOperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface StagedMetadataAsyncOperationApi extends IStagedMetadataAsyncOperationApi { }

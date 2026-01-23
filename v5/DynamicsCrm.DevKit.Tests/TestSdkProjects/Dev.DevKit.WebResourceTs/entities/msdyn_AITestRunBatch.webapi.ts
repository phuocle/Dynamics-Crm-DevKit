/**
 * msdyn_AITestRunBatch.webapi.ts - msdyn_AITestRunBatch WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AITestRunBatch WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AITestRunBatchApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AITestRunBatchApi, 'FormattedValue'>]: string };
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
	/** Accuracy score */
	msdyn_AccuracyScore: number | null;
	/** Unique identifier for AIObject associated with AITestCase. */
	msdyn_AIObjectId: DevKit.Guid | null;
	/** The Object type. */
	msdyn_AIObjectType: string | null;
	/** Unique identifier for entity instances */
	msdyn_AITestRunBatchId: DevKit.Guid | null;
	/** Batch Run Status */
	msdyn_BatchRunStatus: number | null;
	/** Date and time when the batch run was completed. */
	msdyn_CompletedOn_UtcDateAndTime: Date | null;
	/** The description of the test run batch. */
	msdyn_Description: string | null;
	/** The error message of the batch run. */
	msdyn_ErrorMessage: string | null;
	/** Date and time when the batch run was last reviewed. */
	msdyn_LastReviewedOn_UtcDateAndTime: Date | null;
	/** The name of the AI test run batch. */
	msdyn_Name: string | null;
	/** Run Duration */
	msdyn_RunDuration: number | null;
	/** Date and time when the batch run was started. */
	msdyn_StartedOn_UtcDateAndTime: Date | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the AI Test Run Batch */
	statecode: number | null;
	/** Reason for the status of the AI Test Run Batch */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AITestRunBatchFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AccuracyScore: { logicalName: 'msdyn_accuracyscore', type: 'Number' },
	msdyn_AIObjectId: { logicalName: 'msdyn_aiobjectid' },
	msdyn_AIObjectType: { logicalName: 'msdyn_aiobjecttype' },
	msdyn_AITestRunBatchId: { logicalName: 'msdyn_aitestrunbatchid' },
	msdyn_BatchRunStatus: { logicalName: 'msdyn_batchrunstatus', type: 'Integer' },
	msdyn_CompletedOn_UtcDateAndTime: { logicalName: 'msdyn_completedon', type: 'DateTime' },
	msdyn_Description: { logicalName: 'msdyn_description' },
	msdyn_ErrorMessage: { logicalName: 'msdyn_errormessage' },
	msdyn_LastReviewedOn_UtcDateAndTime: { logicalName: 'msdyn_lastreviewedon', type: 'DateTime' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_RunDuration: { logicalName: 'msdyn_runduration', type: 'Integer' },
	msdyn_StartedOn_UtcDateAndTime: { logicalName: 'msdyn_startedon', type: 'DateTime' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_AITestRunBatch WebApi class for early-bound style coding
 * Usage: const msdyn_AITestRunBatch = new msdyn_AITestRunBatchApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AITestRunBatchApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AITestRunBatchApi>(entity, 'msdyn_aitestrunbatch', 'msdyn_aitestrunbatchs', msdyn_AITestRunBatchFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AITestRunBatchApi extends Imsdyn_AITestRunBatchApi { }

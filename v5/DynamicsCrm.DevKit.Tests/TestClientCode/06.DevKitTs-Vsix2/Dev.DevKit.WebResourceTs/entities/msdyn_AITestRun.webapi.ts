/**
 * msdyn_AITestRun.webapi.ts - msdyn_AITestRun WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AITestRun WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AITestRunApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AITestRunApi, 'FormattedValue'>]: string };
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
	/** Actual output */
	msdyn_ActualOutput: string | null;
	/** Addition Response Metadata. */
	msdyn_AdditionalResponseMetadata: string | null;
	/** Unique identifier for AITestCase associated with AITestRun. */
	msdyn_AITestCaseId: DevKit.Guid | null;
	/** Unique identifier for AITestRunBatch associated with AITestRun. */
	msdyn_AITestRunBatchId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_AITestRunId: DevKit.Guid | null;
	/** Comment */
	msdyn_Comment: string | null;
	/** Date and time when the test run was completed. */
	msdyn_CompletedOn_UtcDateAndTime: Date | null;
	/** Configuration id. */
	msdyn_ConfigurationId: DevKit.Guid | null;
	/** The error message of the test run. */
	msdyn_ErrorMessage: string | null;
	/** Expected output */
	msdyn_ExpectedOutput: string | null;
	/** The name of the AI test run. */
	msdyn_Name: string | null;
	/** Run Duration */
	msdyn_RunDuration: number | null;
	/** Date and time when the test run was started. */
	msdyn_StartedOn_UtcDateAndTime: Date | null;
	/** Test Run Setting. */
	msdyn_TestRunSetting: string | null;
	/** TestRun Status */
	msdyn_TestRunStatus: number | null;
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
	/** Status of the AI Test Run */
	statecode: number | null;
	/** Reason for the status of the AI Test Run */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AITestRunFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AccuracyScore: { logicalName: 'msdyn_accuracyscore', type: 'Number' },
	msdyn_ActualOutput: { logicalName: 'msdyn_actualoutput' },
	msdyn_AdditionalResponseMetadata: { logicalName: 'msdyn_additionalresponsemetadata' },
	msdyn_AITestCaseId: { schemaName: 'msdyn_AITestCaseId', logicalName: '_msdyn_aitestcaseid_value', entityCollectionName: 'msdyn_aitestcases', entityLogicalName: 'msdyn_aitestcase' },
	msdyn_AITestRunBatchId: { schemaName: 'msdyn_AITestRunBatchId', logicalName: '_msdyn_aitestrunbatchid_value', entityCollectionName: 'msdyn_aitestrunbatchs', entityLogicalName: 'msdyn_aitestrunbatch' },
	msdyn_AITestRunId: { logicalName: 'msdyn_aitestrunid' },
	msdyn_Comment: { logicalName: 'msdyn_comment' },
	msdyn_CompletedOn_UtcDateAndTime: { logicalName: 'msdyn_completedon', type: 'DateTime' },
	msdyn_ConfigurationId: { logicalName: 'msdyn_configurationid' },
	msdyn_ErrorMessage: { logicalName: 'msdyn_errormessage' },
	msdyn_ExpectedOutput: { logicalName: 'msdyn_expectedoutput' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_RunDuration: { logicalName: 'msdyn_runduration', type: 'Integer' },
	msdyn_StartedOn_UtcDateAndTime: { logicalName: 'msdyn_startedon', type: 'DateTime' },
	msdyn_TestRunSetting: { logicalName: 'msdyn_testrunsetting' },
	msdyn_TestRunStatus: { logicalName: 'msdyn_testrunstatus', type: 'Integer' },
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
 * msdyn_AITestRun WebApi class for early-bound style coding
 * Usage: const msdyn_AITestRun = new msdyn_AITestRunApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AITestRunApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AITestRunApi>(entity, 'msdyn_aitestrun', 'msdyn_aitestruns', msdyn_AITestRunFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AITestRunApi extends Imsdyn_AITestRunApi { }

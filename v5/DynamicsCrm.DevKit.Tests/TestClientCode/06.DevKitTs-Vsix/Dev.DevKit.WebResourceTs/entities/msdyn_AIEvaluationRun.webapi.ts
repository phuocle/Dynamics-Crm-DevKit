/**
 * msdyn_AIEvaluationRun.webapi.ts - msdyn_AIEvaluationRun WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AIEvaluationRun WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIEvaluationRunApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AIEvaluationRunApi, 'FormattedValue'>]: string };
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
	/** Addition Response Metadata. */
	msdyn_AdditionalResponseMetadata: string | null;
	/** Unique identifier for AIEvaluationConfiguration associated with AIEvaluationRun. */
	msdyn_AIEvaluationConfigurationId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_AIEvaluationRunId: DevKit.Guid | null;
	/** Unique identifier for AIRunObject associated with AIEvaluationRun. */
	msdyn_AIRunObjectId: DevKit.Guid | null;
	/** The Run Object type. */
	msdyn_AIRunObjectType: string | null;
	/** Comment */
	msdyn_Comment: string | null;
	/** Date and time when the evaluation run was completed. */
	msdyn_CompletedOn_UtcDateAndTime: Date | null;
	/** The error message of the evaluation run. */
	msdyn_ErrorMessage: string | null;
	/** Evaluation result */
	msdyn_EvaluationResult: string | null;
	/** The name of the AI test run. */
	msdyn_Name: string | null;
	/** Run Duration */
	msdyn_RunDuration: number | null;
	/** EvaluationRun Status */
	msdyn_RunStatus: number | null;
	/** Date and time when the evaluation run was started. */
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
	/** Status of the AI Evaluation Run */
	statecode: number | null;
	/** Reason for the status of the AI Evaluation Run */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIEvaluationRunFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AdditionalResponseMetadata: { logicalName: 'msdyn_additionalresponsemetadata' },
	msdyn_AIEvaluationConfigurationId: { schemaName: 'msdyn_AIEvaluationConfigurationId', logicalName: '_msdyn_aievaluationconfigurationid_value', entityCollectionName: 'msdyn_aievaluationconfigurations', entityLogicalName: 'msdyn_aievaluationconfiguration' },
	msdyn_AIEvaluationRunId: { logicalName: 'msdyn_aievaluationrunid' },
	msdyn_AIRunObjectId: { logicalName: 'msdyn_airunobjectid' },
	msdyn_AIRunObjectType: { logicalName: 'msdyn_airunobjecttype' },
	msdyn_Comment: { logicalName: 'msdyn_comment' },
	msdyn_CompletedOn_UtcDateAndTime: { logicalName: 'msdyn_completedon', type: 'DateTime' },
	msdyn_ErrorMessage: { logicalName: 'msdyn_errormessage' },
	msdyn_EvaluationResult: { logicalName: 'msdyn_evaluationresult' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_RunDuration: { logicalName: 'msdyn_runduration', type: 'Integer' },
	msdyn_RunStatus: { logicalName: 'msdyn_runstatus', type: 'Integer' },
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
 * msdyn_AIEvaluationRun WebApi class for early-bound style coding
 * Usage: const msdyn_AIEvaluationRun = new msdyn_AIEvaluationRunApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIEvaluationRunApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIEvaluationRunApi>(entity, 'msdyn_aievaluationrun', 'msdyn_aievaluationruns', msdyn_AIEvaluationRunFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIEvaluationRunApi extends Imsdyn_AIEvaluationRunApi { }

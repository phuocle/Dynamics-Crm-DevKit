/**
 * msdyn_AIOptimization.webapi.ts - msdyn_AIOptimization WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AIOptimization WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIOptimizationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AIOptimizationApi, 'FormattedValue'>]: string };
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
	/** AI Model Id */
	msdyn_AIModelId: DevKit.Guid | null;
	/** AIObjectId */
	msdyn_AIObjectId: string | null;
	/** Unique identifier for entity instances */
	msdyn_AIOptimizationId: DevKit.Guid | null;
	/** AI Optimization Private Data Id */
	msdyn_AIOptimizationPrivateDataId: DevKit.Guid | null;
	/** Current Iteration */
	msdyn_CurrentIteration: number | null;
	/** Current Prompt */
	msdyn_CurrentPrompt: string | null;
	/** Current Score */
	msdyn_CurrentScore: number | null;
	/** End Date */
	msdyn_EndDate_UtcDateAndTime: Date | null;
	/** Evaluation Criteria */
	msdyn_EvaluationCriteria: string | null;
	/** Explanation */
	msdyn_Explanation: string | null;
	/** Model Settings */
	msdyn_ModelSettings: string | null;
	/** Old Score */
	msdyn_OldScore: number | null;
	/** Prompt History */
	msdyn_PromptHistory: string | null;
	/** RunStatus */
	msdyn_RunStatus: number | null;
	/** Start Date */
	msdyn_StartDate_UtcDateAndTime: Date | null;
	/** Total Iterations */
	msdyn_TotalIterations: number | null;
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
	/** Status of the AI Optimization */
	statecode: number | null;
	/** Reason for the status of the AI Optimization */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIOptimizationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIModelId: { schemaName: 'msdyn_AIModelId', logicalName: '_msdyn_aimodelid_value', entityCollectionName: 'msdyn_aimodels', entityLogicalName: 'msdyn_aimodel' },
	msdyn_AIObjectId: { logicalName: 'msdyn_aiobjectid' },
	msdyn_AIOptimizationId: { logicalName: 'msdyn_aioptimizationid' },
	msdyn_AIOptimizationPrivateDataId: { schemaName: 'msdyn_AIOptimizationPrivateDataId', logicalName: '_msdyn_aioptimizationprivatedataid_value', entityCollectionName: 'msdyn_aioptimizationprivatedatas', entityLogicalName: 'msdyn_aioptimizationprivatedata' },
	msdyn_CurrentIteration: { logicalName: 'msdyn_currentiteration', type: 'Integer' },
	msdyn_CurrentPrompt: { logicalName: 'msdyn_currentprompt' },
	msdyn_CurrentScore: { logicalName: 'msdyn_currentscore', type: 'Number' },
	msdyn_EndDate_UtcDateAndTime: { logicalName: 'msdyn_enddate', type: 'DateTime' },
	msdyn_EvaluationCriteria: { logicalName: 'msdyn_evaluationcriteria' },
	msdyn_Explanation: { logicalName: 'msdyn_explanation' },
	msdyn_ModelSettings: { logicalName: 'msdyn_modelsettings' },
	msdyn_OldScore: { logicalName: 'msdyn_oldscore', type: 'Number' },
	msdyn_PromptHistory: { logicalName: 'msdyn_prompthistory' },
	msdyn_RunStatus: { logicalName: 'msdyn_runstatus', type: 'Integer' },
	msdyn_StartDate_UtcDateAndTime: { logicalName: 'msdyn_startdate', type: 'DateTime' },
	msdyn_TotalIterations: { logicalName: 'msdyn_totaliterations', type: 'Integer' },
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
 * msdyn_AIOptimization WebApi class for early-bound style coding
 * Usage: const msdyn_AIOptimization = new msdyn_AIOptimizationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIOptimizationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIOptimizationApi>(entity, 'msdyn_aioptimization', 'msdyn_aioptimizations', msdyn_AIOptimizationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIOptimizationApi extends Imsdyn_AIOptimizationApi { }

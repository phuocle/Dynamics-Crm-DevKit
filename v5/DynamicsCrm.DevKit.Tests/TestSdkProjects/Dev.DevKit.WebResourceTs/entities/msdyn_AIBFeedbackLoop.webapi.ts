/**
 * msdyn_AIBFeedbackLoop.webapi.ts - msdyn_AIBFeedbackLoop WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_AIBFeedbackLoop WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_AIBFeedbackLoopApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_AIBFeedbackLoopApi, 'FormattedValue'>]: string };
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
	/** Unique identifier for entity instances */
	msdyn_AIBFeedbackLoopId: DevKit.Guid | null;
	/** AI Model */
	msdyn_AIModelId: DevKit.Guid | null;
	/** Name field */
	msdyn_Name: string | null;
	/** Prediction Input */
	readonly msdyn_PredictionInput_name: string | null;
	/** Prediction Result */
	readonly msdyn_PredictionResult_name: string | null;
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
	/** Status of the AI Builder Feedback Loop */
	statecode: number | null;
	/** Reason for the status of the AI Builder Feedback Loop */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_AIBFeedbackLoopFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_AIBFeedbackLoopId: { logicalName: 'msdyn_aibfeedbackloopid' },
	msdyn_AIModelId: { schemaName: 'msdyn_AIModelId', logicalName: '_msdyn_aimodelid_value', entityCollectionName: 'msdyn_aimodels', entityLogicalName: 'msdyn_aimodel' },
	msdyn_Name: { logicalName: 'msdyn_name' },
	msdyn_PredictionInput_name: { logicalName: 'msdyn_predictioninput', readOnly: true },
	msdyn_PredictionResult_name: { logicalName: 'msdyn_predictionresult', readOnly: true },
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
 * msdyn_AIBFeedbackLoop WebApi class for early-bound style coding
 * Usage: const msdyn_AIBFeedbackLoop = new msdyn_AIBFeedbackLoopApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_AIBFeedbackLoopApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_AIBFeedbackLoopApi>(entity, 'msdyn_aibfeedbackloop', 'msdyn_aibfeedbackloops', msdyn_AIBFeedbackLoopFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_AIBFeedbackLoopApi extends Imsdyn_AIBFeedbackLoopApi { }

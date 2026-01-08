/**
 * approvalstageintelligent.webapi.ts - approvalstageintelligent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for approvalstageintelligent
 * All fields return string representation of their values
 */
export interface IapprovalstageintelligentFormattedValue {
	readonly AiModelId: string;
	readonly Approval: string;
	readonly approvalstageintelligentId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly Inputs_name: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly NextSteps: string;
	readonly NextStepsResult: string;
	readonly NextStepsResultValue: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PredictionRationale: string;
	readonly PredictionResponse: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * approvalstageintelligent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IapprovalstageintelligentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IapprovalstageintelligentFormattedValue;
	/** The prompt id. */
	AiModelId: string | null;
	/** Approval */
	Approval: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	approvalstageintelligentId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Inputs to intelligent approval stage. */
	readonly Inputs_name: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	Name: string | null;
	/** Next steps for the AI stage. */
	NextSteps: string | null;
	/** Next steps result. */
	NextStepsResult: number | null;
	/** Next steps result value */
	NextStepsResultValue: string | null;
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
	/** Rationale for the AI stage's decision. */
	PredictionRationale: string | null;
	/** Prediction response. */
	PredictionResponse: string | null;
	/** Status of the Approval Stage Intelligent */
	statecode: number | null;
	/** Reason for the status of the Approval Stage Intelligent */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const approvalstageintelligentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AiModelId: { logicalName: 'aimodelid' },
	Approval: { schemaName: 'Approval', logicalName: '_approval_value', entityCollectionName: 'msdyn_flow_approvals', entityLogicalName: 'msdyn_flow_approval' },
	approvalstageintelligentId: { logicalName: 'approvalstageintelligentid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	Inputs_name: { logicalName: 'inputs', readOnly: true },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NextSteps: { logicalName: 'nextsteps' },
	NextStepsResult: { logicalName: 'nextstepsresult', type: 'Integer' },
	NextStepsResultValue: { logicalName: 'nextstepsresultvalue' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PredictionRationale: { logicalName: 'predictionrationale' },
	PredictionResponse: { logicalName: 'predictionresponse' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * approvalstageintelligent WebApi class for early-bound style coding
 * Usage: const approvalstageintelligent = new approvalstageintelligentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class approvalstageintelligentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IapprovalstageintelligentApi>(entity, 'approvalstageintelligent', 'approvalstageintelligents', approvalstageintelligentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface approvalstageintelligentApi extends IapprovalstageintelligentApi { }

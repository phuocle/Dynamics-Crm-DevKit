/**
 * msdyn_flow_approvalstep.webapi.ts - msdyn_flow_approvalstep WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_flow_approvalstep WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_approvalstepApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_flow_approvalstepApi, 'FormattedValue'>]: string };
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
	/** Approval */
	msdyn_flow_approvalstep_approval: DevKit.Guid | null;
	/** Approval Id */
	msdyn_flow_approvalstep_approvalid: string | null;
	/** Step model Lookup */
	msdyn_flow_approvalstep_model: DevKit.Guid | null;
	/** Model Type */
	msdyn_flow_approvalstep_modeltype: string | null;
	/** Step Number */
	msdyn_flow_approvalstep_number: number | null;
	/** Result */
	msdyn_flow_approvalstep_result: string | null;
	/** Stage */
	msdyn_flow_approvalstep_stage: number | null;
	/** Unique identifier for entity instances */
	msdyn_flow_approvalstepId: DevKit.Guid | null;
	/** Name */
	msdyn_Name: string | null;
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
	/** Status of the Approval Step */
	statecode: number | null;
	/** Reason for the status of the Approval Step */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_flow_approvalstepFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_flow_approvalstep_approval: { schemaName: 'msdyn_flow_approvalstep_approval', logicalName: '_msdyn_flow_approvalstep_approval_value', entityCollectionName: 'msdyn_flow_approvals', entityLogicalName: 'msdyn_flow_approval' },
	msdyn_flow_approvalstep_approvalid: { logicalName: 'msdyn_flow_approvalstep_approvalid' },
	msdyn_flow_approvalstep_model: { schemaName: 'msdyn_flow_approvalstep_model', logicalName: '_msdyn_flow_approvalstep_model_value', entityCollectionName: 'msdyn_flow_actionapprovalmodels', entityLogicalName: 'msdyn_flow_actionapprovalmodel' },
	msdyn_flow_approvalstep_modeltype: { logicalName: 'msdyn_flow_approvalstep_modeltype' },
	msdyn_flow_approvalstep_number: { logicalName: 'msdyn_flow_approvalstep_number', type: 'Integer' },
	msdyn_flow_approvalstep_result: { logicalName: 'msdyn_flow_approvalstep_result' },
	msdyn_flow_approvalstep_stage: { logicalName: 'msdyn_flow_approvalstep_stage', type: 'Integer' },
	msdyn_flow_approvalstepId: { logicalName: 'msdyn_flow_approvalstepid' },
	msdyn_Name: { logicalName: 'msdyn_name' },
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
 * msdyn_flow_approvalstep WebApi class for early-bound style coding
 * Usage: const msdyn_flow_approvalstep = new msdyn_flow_approvalstepApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_approvalstepApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_approvalstepApi>(entity, 'msdyn_flow_approvalstep', 'msdyn_flow_approvalsteps', msdyn_flow_approvalstepFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_approvalstepApi extends Imsdyn_flow_approvalstepApi { }

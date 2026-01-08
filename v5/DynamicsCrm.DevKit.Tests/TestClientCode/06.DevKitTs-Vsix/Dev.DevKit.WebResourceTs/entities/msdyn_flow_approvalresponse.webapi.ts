/**
 * msdyn_flow_approvalresponse.webapi.ts - msdyn_flow_approvalresponse WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_flow_approvalresponse
 * All fields return string representation of their values
 */
export interface Imsdyn_flow_approvalresponseFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_flow_approvalresponse_additionalfields: string;
	readonly msdyn_flow_approvalresponse_approval: string;
	readonly msdyn_flow_approvalresponse_approvalstagekey: string;
	readonly msdyn_flow_approvalresponse_comments: string;
	readonly msdyn_flow_approvalresponse_name: string;
	readonly msdyn_flow_approvalresponse_response: string;
	readonly msdyn_flow_approvalresponse_stage: string;
	readonly msdyn_flow_approvalresponse_stepnumber: string;
	readonly msdyn_flow_approvalresponseId: string;
	readonly msdyn_flow_approvalresponseidx_approvalid: string;
	readonly msdyn_flow_approvalresponseidx_owninguserid: string;
	readonly msdyn_flow_approvalresponseidx_stage: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly StageNumber: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_flow_approvalresponse WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_approvalresponseApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_flow_approvalresponseFormattedValue;
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
	/** Additional Fields */
	msdyn_flow_approvalresponse_additionalfields: string | null;
	/** The linked approval. */
	msdyn_flow_approvalresponse_approval: DevKit.Guid | null;
	/** Lookup key to match approval id and stage in fetch xml. */
	msdyn_flow_approvalresponse_approvalstagekey: string | null;
	/** The owner's comments. */
	msdyn_flow_approvalresponse_comments: string | null;
	/** The name of the approval response. */
	msdyn_flow_approvalresponse_name: string | null;
	/** The owner's response. */
	msdyn_flow_approvalresponse_response: string | null;
	/** The assigned stage of the associated approval. */
	msdyn_flow_approvalresponse_stage: number | null;
	/** Step Number */
	msdyn_flow_approvalresponse_stepnumber: number | null;
	/** Unique identifier for entity instances */
	msdyn_flow_approvalresponseId: DevKit.Guid | null;
	/** Field mirroring the linked approval for the constraint index. */
	msdyn_flow_approvalresponseidx_approvalid: string | null;
	/** Field mirroring the owning user id for the constraint index. */
	msdyn_flow_approvalresponseidx_owninguserid: string | null;
	/** Field mirroring the stage for the constraint index. */
	msdyn_flow_approvalresponseidx_stage: string | null;
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
	/** The stage number to which this approval response belongs. */
	StageNumber: number | null;
	/** Status of the Approval Response */
	statecode: number | null;
	/** The reason for the status of the response. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_flow_approvalresponseFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_flow_approvalresponse_additionalfields: { logicalName: 'msdyn_flow_approvalresponse_additionalfields' },
	msdyn_flow_approvalresponse_approval: { schemaName: 'msdyn_flow_approvalresponse_approval', logicalName: '_msdyn_flow_approvalresponse_approval_value', entityCollectionName: 'msdyn_flow_approvals', entityLogicalName: 'msdyn_flow_approval' },
	msdyn_flow_approvalresponse_approvalstagekey: { logicalName: 'msdyn_flow_approvalresponse_approvalstagekey' },
	msdyn_flow_approvalresponse_comments: { logicalName: 'msdyn_flow_approvalresponse_comments' },
	msdyn_flow_approvalresponse_name: { logicalName: 'msdyn_flow_approvalresponse_name' },
	msdyn_flow_approvalresponse_response: { logicalName: 'msdyn_flow_approvalresponse_response' },
	msdyn_flow_approvalresponse_stage: { logicalName: 'msdyn_flow_approvalresponse_stage', type: 'Integer' },
	msdyn_flow_approvalresponse_stepnumber: { logicalName: 'msdyn_flow_approvalresponse_stepnumber', type: 'Integer' },
	msdyn_flow_approvalresponseId: { logicalName: 'msdyn_flow_approvalresponseid' },
	msdyn_flow_approvalresponseidx_approvalid: { logicalName: 'msdyn_flow_approvalresponseidx_approvalid' },
	msdyn_flow_approvalresponseidx_owninguserid: { logicalName: 'msdyn_flow_approvalresponseidx_owninguserid' },
	msdyn_flow_approvalresponseidx_stage: { logicalName: 'msdyn_flow_approvalresponseidx_stage' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	StageNumber: { logicalName: 'stagenumber', type: 'Integer' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_flow_approvalresponse WebApi class for early-bound style coding
 * Usage: const msdyn_flow_approvalresponse = new msdyn_flow_approvalresponseApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_approvalresponseApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_approvalresponseApi>(entity, 'msdyn_flow_approvalresponse', 'msdyn_flow_approvalresponses', msdyn_flow_approvalresponseFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_approvalresponseApi extends Imsdyn_flow_approvalresponseApi { }

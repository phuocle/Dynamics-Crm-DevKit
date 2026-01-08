/**
 * msdyn_flow_approvalrequest.webapi.ts - msdyn_flow_approvalrequest WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_flow_approvalrequest WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_approvalrequestApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_flow_approvalrequestApi, 'FormattedValue'>]: string };
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
	/** Whether the approval request may be reassigned to another user. */
	msdyn_flow_approvalrequest_allowreassignment: boolean | null;
	/** The linked approval. */
	msdyn_flow_approvalrequest_approval: DevKit.Guid | null;
	/** Lookup key to match approval id and stage in fetch xml. */
	msdyn_flow_approvalrequest_approvalstagekey: string | null;
	/** The due date. */
	msdyn_flow_approvalrequest_dueon_UtcDateAndTime: Date | null;
	/** The expiration date. */
	msdyn_flow_approvalrequest_expireson_UtcDateAndTime: Date | null;
	/** The last notification date. */
	msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: Date | null;
	/** The name of the approval request. */
	msdyn_flow_approvalrequest_name: string | null;
	/** The notification frequency in hours. */
	msdyn_flow_approvalrequest_notificationfrequency: number | null;
	/** The set of available response options. */
	msdyn_flow_approvalrequest_options: string | null;
	/** Unstructured space to store extraneous information associated with the approval request for partner services. */
	msdyn_flow_approvalrequest_partnermetadata: string | null;
	/** The approval request from which this one was reassigned. */
	msdyn_flow_approvalrequest_reassignedfrom: DevKit.Guid | null;
	/** The response options, comma-separated. */
	msdyn_flow_approvalrequest_responseoptions: string | null;
	/** Response Options Type */
	msdyn_flow_approvalrequest_responseoptionstype: number | null;
	/** The assigned stage of the associated approval. */
	msdyn_flow_approvalrequest_stage: number | null;
	/** Step Number */
	msdyn_flow_approvalrequest_stepnumber: number | null;
	/** Unique identifier for entity instances */
	msdyn_flow_approvalrequestId: DevKit.Guid | null;
	/** Field mirroring the linked approval for the constraint index. */
	msdyn_flow_approvalrequestidx_approvalid: string | null;
	/** Field mirroring the owning user id for the constraint index. */
	msdyn_flow_approvalrequestidx_owninguserid: string | null;
	/** Field mirroring the reassigned from id for the constraint index. */
	msdyn_flow_approvalrequestidx_reassignedfromid: string | null;
	/** Field mirroring the stage for the constraint index. */
	msdyn_flow_approvalrequestidx_stage: string | null;
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
	/** The stage number to which this approval request belongs. */
	StageNumber: number | null;
	/** Status of the Approval Request */
	statecode: number | null;
	/** The reason for the status of the request. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_flow_approvalrequestFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_flow_approvalrequest_allowreassignment: { logicalName: 'msdyn_flow_approvalrequest_allowreassignment', type: 'Boolean' },
	msdyn_flow_approvalrequest_approval: { schemaName: 'msdyn_flow_approvalrequest_approval', logicalName: '_msdyn_flow_approvalrequest_approval_value', entityCollectionName: 'msdyn_flow_approvals', entityLogicalName: 'msdyn_flow_approval' },
	msdyn_flow_approvalrequest_approvalstagekey: { logicalName: 'msdyn_flow_approvalrequest_approvalstagekey' },
	msdyn_flow_approvalrequest_dueon_UtcDateAndTime: { logicalName: 'msdyn_flow_approvalrequest_dueon', type: 'DateTime' },
	msdyn_flow_approvalrequest_expireson_UtcDateAndTime: { logicalName: 'msdyn_flow_approvalrequest_expireson', type: 'DateTime' },
	msdyn_flow_approvalrequest_lastnotifiedon_UtcDateAndTime: { logicalName: 'msdyn_flow_approvalrequest_lastnotifiedon', type: 'DateTime' },
	msdyn_flow_approvalrequest_name: { logicalName: 'msdyn_flow_approvalrequest_name' },
	msdyn_flow_approvalrequest_notificationfrequency: { logicalName: 'msdyn_flow_approvalrequest_notificationfrequency', type: 'Integer' },
	msdyn_flow_approvalrequest_options: { logicalName: 'msdyn_flow_approvalrequest_options' },
	msdyn_flow_approvalrequest_partnermetadata: { logicalName: 'msdyn_flow_approvalrequest_partnermetadata' },
	msdyn_flow_approvalrequest_reassignedfrom: { schemaName: 'msdyn_flow_approvalrequest_reassignedfrom', logicalName: '_msdyn_flow_approvalrequest_reassignedfrom_value', entityCollectionName: 'msdyn_flow_approvalrequests', entityLogicalName: 'msdyn_flow_approvalrequest' },
	msdyn_flow_approvalrequest_responseoptions: { logicalName: 'msdyn_flow_approvalrequest_responseoptions' },
	msdyn_flow_approvalrequest_responseoptionstype: { logicalName: 'msdyn_flow_approvalrequest_responseoptionstype', type: 'Integer' },
	msdyn_flow_approvalrequest_stage: { logicalName: 'msdyn_flow_approvalrequest_stage', type: 'Integer' },
	msdyn_flow_approvalrequest_stepnumber: { logicalName: 'msdyn_flow_approvalrequest_stepnumber', type: 'Integer' },
	msdyn_flow_approvalrequestId: { logicalName: 'msdyn_flow_approvalrequestid' },
	msdyn_flow_approvalrequestidx_approvalid: { logicalName: 'msdyn_flow_approvalrequestidx_approvalid' },
	msdyn_flow_approvalrequestidx_owninguserid: { logicalName: 'msdyn_flow_approvalrequestidx_owninguserid' },
	msdyn_flow_approvalrequestidx_reassignedfromid: { logicalName: 'msdyn_flow_approvalrequestidx_reassignedfromid' },
	msdyn_flow_approvalrequestidx_stage: { logicalName: 'msdyn_flow_approvalrequestidx_stage' },
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
 * msdyn_flow_approvalrequest WebApi class for early-bound style coding
 * Usage: const msdyn_flow_approvalrequest = new msdyn_flow_approvalrequestApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_approvalrequestApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_approvalrequestApi>(entity, 'msdyn_flow_approvalrequest', 'msdyn_flow_approvalrequests', msdyn_flow_approvalrequestFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_approvalrequestApi extends Imsdyn_flow_approvalrequestApi { }

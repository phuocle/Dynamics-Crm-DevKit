/**
 * msdyn_flow_approval.webapi.ts - msdyn_flow_approval WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_flow_approval WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_flow_approvalApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_flow_approvalApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** The link to the current stage of the multi stage approvals */
	CurrentStage: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Additional Fields */
	msdyn_flow_approval_additionalfields: string | null;
	/** Boolean field that allows the approvers to reassign approval requests. */
	msdyn_flow_approval_allowreassign: boolean | null;
	/** Lookup key to match approval id and stage in fetch xml. */
	msdyn_flow_approval_approvalstagekey: string | null;
	/** The linked basic approval model data. */
	msdyn_flow_approval_basicapprovalmodel: DevKit.Guid | null;
	/** User defined string that allows approval creators to categorize an approval. */
	msdyn_flow_approval_category: string | null;
	/** The completion date. */
	msdyn_flow_approval_completedon_UtcDateAndTime: Date | null;
	/** Current Step Number */
	msdyn_flow_approval_currentstepnumber: number | null;
	/** The description of the approval. */
	msdyn_flow_approval_details: string | null;
	/** The due date. */
	msdyn_flow_approval_dueon_UtcDateAndTime: Date | null;
	/** The expiration date. */
	msdyn_flow_approval_expireson_UtcDateAndTime: Date | null;
	/** The optional link to the item to approve. */
	msdyn_flow_approval_itemlink: string | null;
	/** The optional description for the item link. */
	msdyn_flow_approval_itemlinkdescription: string | null;
	/** Item link hash to enable queries. */
	msdyn_flow_approval_itemlinkhash: string | null;
	/** Id of the approval model. */
	msdyn_flow_approval_modelid: string | null;
	/** Table name of the approval model. */
	msdyn_flow_approval_modeltype: string | null;
	/** The name of the approval. */
	msdyn_flow_approval_name: string | null;
	/** The hash of a unique partner id associated with a document. Meant for search scenarios. */
	msdyn_flow_approval_partneridhash: string | null;
	/** Unstructured space to store extraneous information associated with the approval for partner services. */
	msdyn_flow_approval_partnermetadata: string | null;
	/** The priority of the approval. */
	msdyn_flow_approval_priority: number | null;
	/** The type of request that created the approval whether from an approval template, esignature process, etc. */
	msdyn_flow_approval_requesttype: number | null;
	/** Final outcome of the approval. */
	msdyn_flow_approval_result: string | null;
	/** Whether to send system-generated email notifications for this approval. */
	msdyn_flow_approval_sendemail: boolean | null;
	/** Source of the request that created the approval. */
	msdyn_flow_approval_source: string | null;
	/** The stage. */
	msdyn_flow_approval_stage: number | null;
	/** Semicolon delimited list of user defined strings to help filter and search approvals. */
	msdyn_flow_approval_tags: string | null;
	/** Base64 encoded string id of the template approval form. */
	msdyn_flow_approval_templateformid: string | null;
	/** Base64 encoded string id of the template used to create the approval. */
	msdyn_flow_approval_templateid: string | null;
	/** Base64 encoded string id of the unique templated approval response. */
	msdyn_flow_approval_templateresponseId: string | null;
	/** The title. */
	msdyn_flow_approval_title: string | null;
	/** Unique identifier for entity instances */
	msdyn_flow_approvalId: DevKit.Guid | null;
	/** Boolean field that allows the approval owner to cancel the approval. */
	new_msdyn_flow_approval_allowcancel: boolean | null;
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
	/** The id of the approval process from which the approval is created */
	ProcessId: string | null;
	/** Status of the Approval */
	statecode: number | null;
	/** The reason for the status of the approval. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_flow_approvalFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CurrentStage: { schemaName: 'CurrentStage', logicalName: '_currentstage_value', entityCollectionName: 'approvalstageorders', entityLogicalName: 'approvalstageorder' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_flow_approval_additionalfields: { logicalName: 'msdyn_flow_approval_additionalfields' },
	msdyn_flow_approval_allowreassign: { logicalName: 'msdyn_flow_approval_allowreassign', type: 'Boolean' },
	msdyn_flow_approval_approvalstagekey: { logicalName: 'msdyn_flow_approval_approvalstagekey' },
	msdyn_flow_approval_basicapprovalmodel: { schemaName: 'msdyn_flow_approval_basicapprovalmodel', logicalName: '_msdyn_flow_approval_basicapprovalmodel_value', entityCollectionName: 'msdyn_flow_basicapprovalmodels', entityLogicalName: 'msdyn_flow_basicapprovalmodel' },
	msdyn_flow_approval_category: { logicalName: 'msdyn_flow_approval_category' },
	msdyn_flow_approval_completedon_UtcDateAndTime: { logicalName: 'msdyn_flow_approval_completedon', type: 'DateTime' },
	msdyn_flow_approval_currentstepnumber: { logicalName: 'msdyn_flow_approval_currentstepnumber', type: 'Integer' },
	msdyn_flow_approval_details: { logicalName: 'msdyn_flow_approval_details' },
	msdyn_flow_approval_dueon_UtcDateAndTime: { logicalName: 'msdyn_flow_approval_dueon', type: 'DateTime' },
	msdyn_flow_approval_expireson_UtcDateAndTime: { logicalName: 'msdyn_flow_approval_expireson', type: 'DateTime' },
	msdyn_flow_approval_itemlink: { logicalName: 'msdyn_flow_approval_itemlink' },
	msdyn_flow_approval_itemlinkdescription: { logicalName: 'msdyn_flow_approval_itemlinkdescription' },
	msdyn_flow_approval_itemlinkhash: { logicalName: 'msdyn_flow_approval_itemlinkhash' },
	msdyn_flow_approval_modelid: { logicalName: 'msdyn_flow_approval_modelid' },
	msdyn_flow_approval_modeltype: { logicalName: 'msdyn_flow_approval_modeltype' },
	msdyn_flow_approval_name: { logicalName: 'msdyn_flow_approval_name' },
	msdyn_flow_approval_partneridhash: { logicalName: 'msdyn_flow_approval_partneridhash' },
	msdyn_flow_approval_partnermetadata: { logicalName: 'msdyn_flow_approval_partnermetadata' },
	msdyn_flow_approval_priority: { logicalName: 'msdyn_flow_approval_priority', type: 'Integer' },
	msdyn_flow_approval_requesttype: { logicalName: 'msdyn_flow_approval_requesttype', type: 'Integer' },
	msdyn_flow_approval_result: { logicalName: 'msdyn_flow_approval_result' },
	msdyn_flow_approval_sendemail: { logicalName: 'msdyn_flow_approval_sendemail', type: 'Boolean' },
	msdyn_flow_approval_source: { logicalName: 'msdyn_flow_approval_source' },
	msdyn_flow_approval_stage: { logicalName: 'msdyn_flow_approval_stage', type: 'Integer' },
	msdyn_flow_approval_tags: { logicalName: 'msdyn_flow_approval_tags' },
	msdyn_flow_approval_templateformid: { logicalName: 'msdyn_flow_approval_templateformid' },
	msdyn_flow_approval_templateid: { logicalName: 'msdyn_flow_approval_templateid' },
	msdyn_flow_approval_templateresponseId: { logicalName: 'msdyn_flow_approval_templateresponseid' },
	msdyn_flow_approval_title: { logicalName: 'msdyn_flow_approval_title' },
	msdyn_flow_approvalId: { logicalName: 'msdyn_flow_approvalid' },
	new_msdyn_flow_approval_allowcancel: { logicalName: 'msdyn_flow_approval_allowcancel', type: 'Boolean' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ProcessId: { logicalName: 'processid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_flow_approval WebApi class for early-bound style coding
 * Usage: const msdyn_flow_approval = new msdyn_flow_approvalApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_flow_approvalApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_flow_approvalApi>(entity, 'msdyn_flow_approval', 'msdyn_flow_approvals', msdyn_flow_approvalFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_flow_approvalApi extends Imsdyn_flow_approvalApi { }

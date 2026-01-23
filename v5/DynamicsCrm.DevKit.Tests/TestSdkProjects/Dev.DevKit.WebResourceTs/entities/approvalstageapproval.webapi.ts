/**
 * approvalstageapproval.webapi.ts - approvalstageapproval WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * approvalstageapproval WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IapprovalstageapprovalApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IapprovalstageapprovalApi, 'FormattedValue'>]: string };
	/** Choice to allow cancellation of approval */
	AllowCancel: boolean | null;
	/** Choice to allow approval reassignment */
	AllowReassign: boolean | null;
	/** The linked parent approval */
	Approval: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	approvalstageapprovalId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Custom fields provided by customer */
	CustomFields: string | null;
	/** Description of approval */
	Details: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Optional link to the item to approve */
	ItemLink: string | null;
	/** Optional description for the item link */
	ItemLinkDescription: string | null;
	/** The guid of the linked approval model */
	ModelId: string | null;
	/** The type of the linked approval model */
	ModelType: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name */
	Name: string | null;
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
	/** The result of the approval */
	Result: string | null;
	/** Whether to send system generated emails */
	SendEmailNotification: boolean | null;
	/** Status of the Approval Stage Approval */
	statecode: number | null;
	/** Reason for the status of the Approval Stage Approval */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Title of the approval */
	Title: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const approvalstageapprovalFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowCancel: { logicalName: 'allowcancel', type: 'Boolean' },
	AllowReassign: { logicalName: 'allowreassign', type: 'Boolean' },
	Approval: { schemaName: 'Approval', logicalName: '_approval_value', entityCollectionName: 'msdyn_flow_approvals', entityLogicalName: 'msdyn_flow_approval' },
	approvalstageapprovalId: { logicalName: 'approvalstageapprovalid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomFields: { logicalName: 'customfields' },
	Details: { logicalName: 'details' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ItemLink: { logicalName: 'itemlink' },
	ItemLinkDescription: { logicalName: 'itemlinkdescription' },
	ModelId: { logicalName: 'modelid' },
	ModelType: { logicalName: 'modeltype' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Result: { logicalName: 'result' },
	SendEmailNotification: { logicalName: 'sendemailnotification', type: 'Boolean' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * approvalstageapproval WebApi class for early-bound style coding
 * Usage: const approvalstageapproval = new approvalstageapprovalApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class approvalstageapprovalApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IapprovalstageapprovalApi>(entity, 'approvalstageapproval', 'approvalstageapprovals', approvalstageapprovalFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface approvalstageapprovalApi extends IapprovalstageapprovalApi { }

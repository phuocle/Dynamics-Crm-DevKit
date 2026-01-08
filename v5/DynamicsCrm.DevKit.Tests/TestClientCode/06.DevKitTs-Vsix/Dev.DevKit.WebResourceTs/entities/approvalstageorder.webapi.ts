/**
 * approvalstageorder.webapi.ts - approvalstageorder WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * approvalstageorder WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IapprovalstageorderApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IapprovalstageorderApi, 'FormattedValue'>]: string };
	/** The linked approval */
	Approval: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	approvalstageorderId: DevKit.Guid | null;
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
	/** Name of the stage */
	Name: string | null;
	/** The order number of the stage */
	OrderNumber: number | null;
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
	/** The linked stage approval */
	StageApproval: DevKit.Guid | null;
	/** The linked condition */
	StageCondition: DevKit.Guid | null;
	/** The linked intelligent stage */
	StageIntelligent: DevKit.Guid | null;
	/** Status of the Approval Stage Order */
	statecode: number | null;
	/** Reason for the status of the Approval Stage Order */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** The type of the stage */
	Type: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const approvalstageorderFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Approval: { schemaName: 'Approval', logicalName: '_approval_value', entityCollectionName: 'msdyn_flow_approvals', entityLogicalName: 'msdyn_flow_approval' },
	approvalstageorderId: { logicalName: 'approvalstageorderid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrderNumber: { logicalName: 'ordernumber', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	StageApproval: { schemaName: 'StageApproval', logicalName: '_stageapproval_value', entityCollectionName: 'approvalstageapprovals', entityLogicalName: 'approvalstageapproval' },
	StageCondition: { schemaName: 'StageCondition', logicalName: '_stagecondition_value', entityCollectionName: 'approvalstageconditions', entityLogicalName: 'approvalstagecondition' },
	StageIntelligent: { schemaName: 'StageIntelligent', logicalName: '_stageintelligent_value', entityCollectionName: 'approvalstageintelligents', entityLogicalName: 'approvalstageintelligent' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Type: { logicalName: 'type', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * approvalstageorder WebApi class for early-bound style coding
 * Usage: const approvalstageorder = new approvalstageorderApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class approvalstageorderApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IapprovalstageorderApi>(entity, 'approvalstageorder', 'approvalstageorders', approvalstageorderFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface approvalstageorderApi extends IapprovalstageorderApi { }

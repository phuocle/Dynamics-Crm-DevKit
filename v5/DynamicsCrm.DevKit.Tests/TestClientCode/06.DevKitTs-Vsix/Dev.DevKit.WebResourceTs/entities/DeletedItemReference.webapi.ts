/**
 * DeletedItemReference.webapi.ts - DeletedItemReference WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DeletedItemReference
 * All fields return string representation of their values
 */
export interface IDeletedItemReferenceFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DeletedItemReferenceId: string;
	readonly DeletedLogicalNames_name: string;
	readonly DeletedObject: string;
	readonly DeletedRecords_name: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ProcessedRecords: string;
	readonly RegardingObjectId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TotalRecords: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly ValidForRestore: string;
	readonly VersionNumber: string;
}

/**
 * DeletedItemReference WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDeletedItemReferenceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDeletedItemReferenceFormattedValue;
	/** Unique identifier of the user who deleted the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was deleted. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who deleted the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	DeletedItemReferenceId: DevKit.Guid | null;
	/** For internal use only. */
	readonly DeletedLogicalNames_name: string | null;
	/** Deleted Object */
	DeletedObject: DevKit.Guid | null;
	/** For internal use only. */
	readonly DeletedRecords_name: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The Display name of the deleted record. */
	name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Number of Processed Records */
	readonly ProcessedRecords: number | null;
	/** Regarding Object */
	RegardingObjectId: DevKit.Guid | null;
	/** Status of the Deleted Record Reference */
	statecode: number | null;
	/** Reason for the status of the Deleted Record Reference */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Total impacted Records */
	readonly TotalRecords: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** If true this record can be restored. */
	readonly ValidForRestore: boolean | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const DeletedItemReferenceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DeletedItemReferenceId: { logicalName: 'deleteditemreferenceid' },
	DeletedLogicalNames_name: { logicalName: 'deletedlogicalnames', readOnly: true },
	DeletedObject: { schemaName: 'DeletedObject', logicalName: '_deletedobject_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	DeletedRecords_name: { logicalName: 'deletedrecords', readOnly: true },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ProcessedRecords: { logicalName: 'processedrecords', readOnly: true, type: 'Integer' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'asyncoperations', entityLogicalName: 'asyncoperation' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TotalRecords: { logicalName: 'totalrecords', readOnly: true, type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	ValidForRestore: { logicalName: 'validforrestore', readOnly: true, type: 'Boolean' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * DeletedItemReference WebApi class for early-bound style coding
 * Usage: const deletedItemReference = new DeletedItemReferenceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DeletedItemReferenceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDeletedItemReferenceApi>(entity, 'deleteditemreference', 'deleteditemreferences', DeletedItemReferenceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DeletedItemReferenceApi extends IDeletedItemReferenceApi { }

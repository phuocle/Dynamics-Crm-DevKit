/**
 * recentlyused.webapi.ts - recentlyused WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for recentlyused
 * All fields return string representation of their values
 */
export interface IrecentlyusedFormattedValue {
	readonly AppId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImageUrl: string;
	readonly ImportSequenceNumber: string;
	readonly LastAccessed_UtcDateAndTime: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly ObjectId: string;
	readonly ObjectPartitionId: string;
	readonly ObjectType: string;
	readonly ObjectTypeDisplayName: string;
	readonly ObjectTypeId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PartitionId: string;
	readonly recentlyusedId: string;
	readonly RecordUrl: string;
	readonly SubTitle: string;
	readonly Title: string;
	readonly TTLInSeconds: string;
	readonly UserId: string;
	readonly VersionNumber: string;
}

/**
 * recentlyused WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IrecentlyusedApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IrecentlyusedFormattedValue;
	/** Source application Identifier for MRU record */
	AppId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Entity image url */
	ImageUrl: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Date and time when entity was accessed. */
	readonly LastAccessed_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Object instance Identifier */
	ObjectId: string | null;
	/** Logical object partition id to be used by an elastic table row. */
	ObjectPartitionId: string | null;
	/** Identifies the type of entity */
	ObjectType: string | null;
	/** Friendly name for the object */
	ObjectTypeDisplayName: string | null;
	/** Object Type Identifier (OTC) */
	ObjectTypeId: string | null;
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
	/** Logical partition id. A logical partition consists of a set of records with same partition id. */
	PartitionId: string | null;
	/** Unique identifier for entity instances */
	recentlyusedId: DevKit.Guid | null;
	/** Entity record external url */
	RecordUrl: string | null;
	/** Entity subtitle value */
	SubTitle: string | null;
	/** Entity title */
	Title: string | null;
	/** Time to live in seconds. */
	TTLInSeconds: number | null;
	/** AAD User Identifier */
	UserId: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const recentlyusedFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppId: { logicalName: 'appid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImageUrl: { logicalName: 'imageurl' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LastAccessed_UtcDateAndTime: { logicalName: 'lastaccessed', readOnly: true, type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	ObjectId: { logicalName: 'objectid' },
	ObjectPartitionId: { logicalName: 'objectpartitionid' },
	ObjectType: { logicalName: 'objecttype' },
	ObjectTypeDisplayName: { logicalName: 'objecttypedisplayname' },
	ObjectTypeId: { logicalName: 'objecttypeid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartitionId: { logicalName: 'partitionid' },
	recentlyusedId: { logicalName: 'recentlyusedid' },
	RecordUrl: { logicalName: 'recordurl' },
	SubTitle: { logicalName: 'subtitle' },
	Title: { logicalName: 'title' },
	TTLInSeconds: { logicalName: 'ttlinseconds', type: 'Integer' },
	UserId: { logicalName: 'userid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * recentlyused WebApi class for early-bound style coding
 * Usage: const recentlyused = new recentlyusedApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class recentlyusedApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IrecentlyusedApi>(entity, 'recentlyused', 'recentlyuseds', recentlyusedFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface recentlyusedApi extends IrecentlyusedApi { }

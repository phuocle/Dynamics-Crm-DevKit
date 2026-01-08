/**
 * powerpagesitepublished.webapi.ts - powerpagesitepublished WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for powerpagesitepublished
 * All fields return string representation of their values
 */
export interface IpowerpagesitepublishedFormattedValue {
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PowerPageSiteId: string;
	readonly powerpagesitepublishedId: string;
	readonly publishedmetadata_name: string;
	readonly publishedrecords: string;
	readonly publishedsource_name: string;
	readonly State: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly Version: string;
	readonly VersionNumber: string;
}

/**
 * powerpagesitepublished WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IpowerpagesitepublishedApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IpowerpagesitepublishedFormattedValue;
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
	/** The name of the custom entity. */
	name: string | null;
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
	/** Power Pages Site Id */
	PowerPageSiteId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	powerpagesitepublishedId: DevKit.Guid | null;
	/** Published Meta Data contains meta data of published site */
	readonly publishedmetadata_name: string | null;
	/** Published Records */
	publishedrecords: string | null;
	/** Published Source contains published data */
	readonly publishedsource_name: string | null;
	/** State */
	State: boolean | null;
	/** Status of the Power Pages Site Published */
	statecode: number | null;
	/** Reason for the status of the Power Pages Site Published */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version */
	Version: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const powerpagesitepublishedFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PowerPageSiteId: { schemaName: 'PowerPageSiteId', logicalName: '_powerpagesiteid_value', entityCollectionName: 'powerpagesites', entityLogicalName: 'powerpagesite' },
	powerpagesitepublishedId: { logicalName: 'powerpagesitepublishedid' },
	publishedmetadata_name: { logicalName: 'publishedmetadata', readOnly: true },
	publishedrecords: { logicalName: 'publishedrecords' },
	publishedsource_name: { logicalName: 'publishedsource', readOnly: true },
	State: { logicalName: 'state', type: 'Boolean' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	Version: { logicalName: 'version' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * powerpagesitepublished WebApi class for early-bound style coding
 * Usage: const powerpagesitepublished = new powerpagesitepublishedApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class powerpagesitepublishedApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IpowerpagesitepublishedApi>(entity, 'powerpagesitepublished', 'powerpagesitepublisheds', powerpagesitepublishedFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface powerpagesitepublishedApi extends IpowerpagesitepublishedApi { }

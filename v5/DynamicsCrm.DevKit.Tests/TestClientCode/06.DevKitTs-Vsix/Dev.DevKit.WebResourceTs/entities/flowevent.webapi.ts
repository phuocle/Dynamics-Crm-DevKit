/**
 * flowevent.webapi.ts - flowevent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for flowevent
 * All fields return string representation of their values
 */
export interface IfloweventFormattedValue {
	readonly CompletedOn_UtcDateAndTime: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly eventcode: string;
	readonly eventcontent: string;
	readonly EventDuration: string;
	readonly eventtype: string;
	readonly ExpiryDate_UtcDateAndTime: string;
	readonly floweventId: string;
	readonly ImportSequenceNumber: string;
	readonly level: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly parentobjectid: string;
	readonly parentobjectlogicalname: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * flowevent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IfloweventApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IfloweventFormattedValue;
	/** Date and time when the event finished. */
	readonly CompletedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** EventCode */
	eventcode: string | null;
	/** EventContent */
	eventcontent: string | null;
	/** The duration of the event in seconds. */
	EventDuration: number | null;
	/** EventType */
	eventtype: string | null;
	/** Date after which the event should no longer be displayed. */
	ExpiryDate_UtcDateAndTime: Date | null;
	/** Unique identifier for entity instances */
	floweventId: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Level */
	level: string | null;
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
	/** The parent record this event is linked to. */
	parentobjectid: DevKit.Guid | null;
	/** ParentObjectLogicalName */
	parentobjectlogicalname: string | null;
	/** Status of the Flow Event */
	statecode: number | null;
	/** Reason for the status of the Flow Event */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const floweventFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CompletedOn_UtcDateAndTime: { logicalName: 'completedon', readOnly: true, type: 'DateTime' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	eventcode: { logicalName: 'eventcode' },
	eventcontent: { logicalName: 'eventcontent' },
	EventDuration: { logicalName: 'eventduration', type: 'Integer' },
	eventtype: { logicalName: 'eventtype' },
	ExpiryDate_UtcDateAndTime: { logicalName: 'expirydate', type: 'DateTime' },
	floweventId: { logicalName: 'floweventid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	level: { logicalName: 'level' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	parentobjectid: { schemaName: 'parentobjectid', logicalName: '_parentobjectid_value', entityCollectionName: 'flowmachines', entityLogicalName: 'flowmachine' },
	parentobjectlogicalname: { logicalName: 'parentobjectlogicalname' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * flowevent WebApi class for early-bound style coding
 * Usage: const flowevent = new floweventApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class floweventApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IfloweventApi>(entity, 'flowevent', 'flowevents', floweventFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface floweventApi extends IfloweventApi { }

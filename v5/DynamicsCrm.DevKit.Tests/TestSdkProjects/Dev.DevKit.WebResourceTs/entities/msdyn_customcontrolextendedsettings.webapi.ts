/**
 * msdyn_customcontrolextendedsettings.webapi.ts - msdyn_customcontrolextendedsettings WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_customcontrolextendedsettings WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_customcontrolextendedsettingsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_customcontrolextendedsettingsApi, 'FormattedValue'>]: string };
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
	/** User data for the Copilot Hub control */
	msdyn_copilothub_settings: string | null;
	/** Unique identifier for entity instances */
	msdyn_customcontrolextendedsettingsId: DevKit.Guid | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** User configured personal settings for Rich Text Editor */
	msdyn_rte_userpersonalizationsettings: string | null;
	/** User configured display layout option for the Timeline control */
	msdyn_timeline_displaylayoutoption: string | null;
	/** User configured filter settings for TimelineWall */
	msdyn_timelineWall_bookmarks: string | null;
	/** User configured expand state for TimelineWall */
	msdyn_timelineWall_isAutoExpanded: boolean | null;
	/** Will the filter pane open by default on TimelineWall load */
	msdyn_timelineWall_isFilterPaneOpen: boolean | null;
	/** Is TimelineWall set to sort by newer to older records */
	msdyn_timelineWall_isSortOrderNewerToOlder: boolean | null;
	/** Search term to be applied on TimelineWall load */
	msdyn_timelineWall_searchTermApplied: string | null;
	/** User configured filter settings for TimelineWall */
	msdyn_timelineWall_userFilters: string | null;
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
	/** Status of the Timeline Wall Extended Setting */
	statecode: number | null;
	/** Reason for the status of the Timeline Wall Extended Setting */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_customcontrolextendedsettingsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_copilothub_settings: { logicalName: 'msdyn_copilothub_settings' },
	msdyn_customcontrolextendedsettingsId: { logicalName: 'msdyn_customcontrolextendedsettingsid' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_rte_userpersonalizationsettings: { logicalName: 'msdyn_rte_userpersonalizationsettings' },
	msdyn_timeline_displaylayoutoption: { logicalName: 'msdyn_timeline_displaylayoutoption' },
	msdyn_timelineWall_bookmarks: { logicalName: 'msdyn_timelineWall_bookmarks' },
	msdyn_timelineWall_isAutoExpanded: { logicalName: 'msdyn_timelineWall_isAutoExpanded', type: 'Boolean' },
	msdyn_timelineWall_isFilterPaneOpen: { logicalName: 'msdyn_timelineWall_isFilterPaneOpen', type: 'Boolean' },
	msdyn_timelineWall_isSortOrderNewerToOlder: { logicalName: 'msdyn_timelineWall_isSortOrderNewerToOlder', type: 'Boolean' },
	msdyn_timelineWall_searchTermApplied: { logicalName: 'msdyn_timelineWall_searchTermApplied' },
	msdyn_timelineWall_userFilters: { logicalName: 'msdyn_timelineWall_userFilters' },
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
 * msdyn_customcontrolextendedsettings WebApi class for early-bound style coding
 * Usage: const msdyn_customcontrolextendedsettings = new msdyn_customcontrolextendedsettingsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_customcontrolextendedsettingsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_customcontrolextendedsettingsApi>(entity, 'msdyn_customcontrolextendedsettings', 'msdyn_customcontrolextendedsettingses', msdyn_customcontrolextendedsettingsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_customcontrolextendedsettingsApi extends Imsdyn_customcontrolextendedsettingsApi { }

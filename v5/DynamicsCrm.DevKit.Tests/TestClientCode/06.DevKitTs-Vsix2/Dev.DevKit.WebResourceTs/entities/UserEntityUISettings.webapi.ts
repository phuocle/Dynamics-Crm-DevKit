/**
 * UserEntityUISettings.webapi.ts - UserEntityUISettings WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * UserEntityUISettings WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUserEntityUISettingsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IUserEntityUISettingsApi, 'FormattedValue'>]: string };
	/** Describes which entities are most recently inserted into email for this entity */
	InsertIntoEmailMRUXml: string | null;
	/** Describes which forms are most recently viewed for this entity. */
	LastViewedFormXml: string | null;
	/** List of most recently used lookup references for this entity */
	LookupMRUXml: string | null;
	/** Describes which tabs are most recently used for this entity */
	MRUXml: string | null;
	/** Object Type Code */
	ObjectTypeCode: number | null;
	/** Unique identifier of the user or team who owns the settings. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns this. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns this saved view. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns this saved view. */
	readonly OwningUser: DevKit.Guid | null;
	/** Describes the reading pane formatting of this entity */
	ReadingPaneXml: string | null;
	/** Describes which objects are most recently viewed for this entity */
	RecentlyViewedXml: string | null;
	/** Determines whether a record type is exposed in the Outlook Address Book */
	ShowInAddressBook: boolean | null;
	/** Describes the tab ordering for this entity */
	TabOrderXml: string | null;
	/** Unique identifier user entity */
	UserEntityUISettingsId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
	/** Data representing the view personalization settings */
	ViewPersonalizationSettings: string | null;
}

const UserEntityUISettingsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	InsertIntoEmailMRUXml: { logicalName: 'insertintoemailmruxml' },
	LastViewedFormXml: { logicalName: 'lastviewedformxml' },
	LookupMRUXml: { logicalName: 'lookupmruxml' },
	MRUXml: { logicalName: 'mruxml' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ReadingPaneXml: { logicalName: 'readingpanexml' },
	RecentlyViewedXml: { logicalName: 'recentlyviewedxml' },
	ShowInAddressBook: { logicalName: 'showinaddressbook', type: 'Boolean' },
	TabOrderXml: { logicalName: 'taborderxml' },
	UserEntityUISettingsId: { logicalName: 'userentityuisettingsid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	ViewPersonalizationSettings: { logicalName: 'viewpersonalizationsettings' },
};

/**
 * UserEntityUISettings WebApi class for early-bound style coding
 * Usage: const userEntityUISettings = new UserEntityUISettingsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UserEntityUISettingsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUserEntityUISettingsApi>(entity, 'userentityuisettings', 'userentityuisettingses', UserEntityUISettingsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UserEntityUISettingsApi extends IUserEntityUISettingsApi { }

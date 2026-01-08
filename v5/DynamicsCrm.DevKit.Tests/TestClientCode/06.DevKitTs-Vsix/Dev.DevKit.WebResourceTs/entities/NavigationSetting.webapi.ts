/**
 * NavigationSetting.webapi.ts - NavigationSetting WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for NavigationSetting
 * All fields return string representation of their values
 */
export interface INavigationSettingFormattedValue {
	readonly AdvancedSettingOrder: string;
	readonly AppConfigId: string;
	readonly AppConfigIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly GroupName: string;
	readonly IconResourceId: string;
	readonly ImportSequenceNumber: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly NavigationSettingId: string;
	readonly NavigationSettingIdUnique: string;
	readonly ObjectTypeCode: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly PageUrl: string;
	readonly ParentNavigationSettingId: string;
	readonly Privileges: string;
	readonly ProgressState: string;
	readonly QuickSettingOrder: string;
	readonly ResourceId: string;
	readonly SettingType: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
}

/**
 * NavigationSetting WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface INavigationSettingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: INavigationSettingFormattedValue;
	/** Enter the position of this NavigationSetting as it should appear within its group in the Advanced Setup menu. */
	AdvancedSettingOrder: number | null;
	/** Enter the App Config record that this Navigation Setting is associated with. */
	AppConfigId: DevKit.Guid | null;
	/** For system use only. */
	AppConfigIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type a description that describes that Navigation Setting in detail. */
	Description: string | null;
	/** Type the name of the group represented by this Navigation Setting record. */
	GroupName: string | null;
	/** The web resource identifier of the icon to be used for a navigation setting area or sub area. */
	IconResourceId: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	readonly ImportSequenceNumber: number | null;
	/** Version in which the similarity rule is introduced. */
	IntroducedVersion: string | null;
	/** For internal use only. */
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a title or name that describes the Navigation Setting so it can be identified in Dynamics CRM views. */
	Name: string | null;
	/** Identifies a single setting page or group of pages configured for use in a single app. */
	NavigationSettingId: DevKit.Guid | null;
	/** For system use only. */
	NavigationSettingIdUnique: DevKit.Guid | null;
	/** Enter the Object Type Code of the entity associated whose page this Navigation Setting record represents. */
	ObjectTypeCode: number | null;
	/** System-populated field that identifies the organization that owns this Navigation Setting record. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Type the URL which locates the page associated with this Navigation Setting record. */
	PageUrl: string | null;
	/** The Navigation Setting record that represents the group that this record belongs to. */
	ParentNavigationSettingId: DevKit.Guid | null;
	/** Enter the Privilege Mask for the entity associated with this navigation setting page that will be the minimum requirement for the page to be made available to a user. */
	Privileges: number | null;
	/** Select the setup completion level for this Navigation Setting page. */
	ProgressState: boolean | null;
	/** Enter the position of this NavigationSetting as it should appear in the Quick Setup menu. */
	QuickSettingOrder: number | null;
	/** The Web Resource that will be associated with this Navigation Setting record. */
	ResourceId: DevKit.Guid | null;
	/** Select the type of group this Navigation Setting record represents. This determines which of the three in-app customization menus will contain this group. */
	SettingType: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
}

const NavigationSettingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AdvancedSettingOrder: { logicalName: 'advancedsettingorder', type: 'Integer' },
	AppConfigId: { schemaName: 'AppConfigId', logicalName: '_appconfigid_value', entityCollectionName: 'appmodules', entityLogicalName: 'appmodule' },
	AppConfigIdUnique: { logicalName: 'appconfigidunique' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	GroupName: { logicalName: 'groupname' },
	IconResourceId: { logicalName: 'iconresourceid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NavigationSettingId: { logicalName: 'navigationsettingid' },
	NavigationSettingIdUnique: { logicalName: 'navigationsettingidunique' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', readOnly: true, type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PageUrl: { logicalName: 'pageurl' },
	ParentNavigationSettingId: { logicalName: 'parentnavigationsettingid' },
	Privileges: { logicalName: 'privileges', type: 'Integer' },
	ProgressState: { logicalName: 'progressstate', type: 'Boolean' },
	QuickSettingOrder: { logicalName: 'quicksettingorder', type: 'Integer' },
	ResourceId: { logicalName: 'resourceid' },
	SettingType: { logicalName: 'settingtype', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
};

/**
 * NavigationSetting WebApi class for early-bound style coding
 * Usage: const navigationSetting = new NavigationSettingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class NavigationSettingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<INavigationSettingApi>(entity, 'navigationsetting', 'navigationsettings', NavigationSettingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface NavigationSettingApi extends INavigationSettingApi { }

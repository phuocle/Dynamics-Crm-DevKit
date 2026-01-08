/**
 * ActionCardUserSettings.webapi.ts - ActionCardUserSettings WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ActionCardUserSettings
 * All fields return string representation of their values
 */
export interface IActionCardUserSettingsFormattedValue {
	readonly ActionCardUserSettingsId: string;
	readonly BoolCardOption: string;
	readonly CardType: string;
	readonly CardTypeId: string;
	readonly IntCardOption: string;
	readonly IsEnabled: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly StringCardOption: string;
	readonly VersionNumber: string;
}

/**
 * ActionCardUserSettings WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IActionCardUserSettingsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IActionCardUserSettingsFormattedValue;
	/** Unique identifier user entity */
	ActionCardUserSettingsId: DevKit.Guid | null;
	/** Bolean option for a cardtype. */
	BoolCardOption: boolean | null;
	/** The CardType ENUM value. */
	CardType: number | null;
	/** card type attribute */
	CardTypeId: DevKit.Guid | null;
	/** Any int option for a cardtype. */
	IntCardOption: number | null;
	/** Select whether the card is enabled for user or not. */
	IsEnabled: boolean | null;
	/** Unique identifier of the user or team who owns the settings. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns this. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns this saved view. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns this saved view. */
	readonly OwningUser: DevKit.Guid | null;
	/** Any string option for a cardtype. */
	StringCardOption: string | null;
	readonly VersionNumber: number | null;
}

const ActionCardUserSettingsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActionCardUserSettingsId: { logicalName: 'actioncardusersettingsid' },
	BoolCardOption: { logicalName: 'boolcardoption', type: 'Boolean' },
	CardType: { logicalName: 'cardtype', type: 'Integer' },
	CardTypeId: { schemaName: 'CardTypeId', logicalName: '_cardtypeid_value', entityCollectionName: 'cardtypes', entityLogicalName: 'cardtype' },
	IntCardOption: { logicalName: 'intcardoption', type: 'Integer' },
	IsEnabled: { logicalName: 'isenabled', type: 'Boolean' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	StringCardOption: { logicalName: 'stringcardoption' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ActionCardUserSettings WebApi class for early-bound style coding
 * Usage: const actionCardUserSettings = new ActionCardUserSettingsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ActionCardUserSettingsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IActionCardUserSettingsApi>(entity, 'actioncardusersettings', 'actioncardusersettingses', ActionCardUserSettingsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ActionCardUserSettingsApi extends IActionCardUserSettingsApi { }

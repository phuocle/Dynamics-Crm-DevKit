/**
 * AppUserSetting.webapi.ts - AppUserSetting WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AppUserSetting WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppUserSettingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAppUserSettingApi, 'FormattedValue'>]: string };
	/** Unique identifier for entity instances */
	AppUserSettingId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Display name of the App User Setting. */
	DisplayName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier for AppModule associated with AppUserSetting. If not specified, the setting applies to all AppModules for the user. */
	ParentAppModuleId: DevKit.Guid | null;
	/** Unique identifier for SettingDefinition associated with AppUserSetting. */
	SettingDefinitionId: DevKit.Guid | null;
	/** Status of the model-driven app user setting */
	statecode: number | null;
	/** Reason for the status of the model-driven app user setting */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** User */
	UserId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Contains the actual value of app user settings. */
	Value: string | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const AppUserSettingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppUserSettingId: { logicalName: 'appusersettingid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DisplayName: { logicalName: 'displayname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ParentAppModuleId: { schemaName: 'ParentAppModuleId', logicalName: '_parentappmoduleid_value', entityCollectionName: 'appmodules', entityLogicalName: 'appmodule' },
	SettingDefinitionId: { schemaName: 'SettingDefinitionId', logicalName: '_settingdefinitionid_value', entityCollectionName: 'settingdefinitions', entityLogicalName: 'settingdefinition' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UserId: { schemaName: 'UserId', logicalName: '_userid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	Value: { logicalName: 'value' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AppUserSetting WebApi class for early-bound style coding
 * Usage: const appUserSetting = new AppUserSettingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppUserSettingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppUserSettingApi>(entity, 'appusersetting', 'appusersettings', AppUserSettingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppUserSettingApi extends IAppUserSettingApi { }

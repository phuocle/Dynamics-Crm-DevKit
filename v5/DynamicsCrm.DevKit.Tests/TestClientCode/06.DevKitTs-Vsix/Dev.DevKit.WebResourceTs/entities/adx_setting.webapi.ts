/**
 * adx_setting.webapi.ts - adx_setting WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * adx_setting WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_settingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Iadx_settingApi, 'FormattedValue'>]: string };
	/** Description */
	adx_description: string | null;
	/** Encrypted Content */
	adx_encryptedcontent: string | null;
	/** The name of the custom entity. */
	adx_name: string | null;
	/** Shows the entity instances. */
	adx_settingId: DevKit.Guid | null;
	/** Value */
	adx_value: string | null;
	/** Shows the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows when the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that owns the record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the Setting */
	statecode: number | null;
	/** Select the Setting's status. */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const adx_settingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_description: { logicalName: 'adx_description' },
	adx_encryptedcontent: { logicalName: 'adx_encryptedcontent' },
	adx_name: { logicalName: 'adx_name' },
	adx_settingId: { logicalName: 'adx_settingid' },
	adx_value: { logicalName: 'adx_value' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
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
 * adx_setting WebApi class for early-bound style coding
 * Usage: const adx_setting = new adx_settingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_settingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_settingApi>(entity, 'adx_setting', 'adx_settings', adx_settingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_settingApi extends Iadx_settingApi { }

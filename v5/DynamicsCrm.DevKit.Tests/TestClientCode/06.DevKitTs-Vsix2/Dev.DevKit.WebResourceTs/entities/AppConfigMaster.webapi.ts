/**
 * AppConfigMaster.webapi.ts - AppConfigMaster WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AppConfigMaster WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppConfigMasterApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAppConfigMasterApi, 'FormattedValue'>]: string };
	/** System-Populated App Configuration instance identifier. */
	readonly AppConfigMasterId: DevKit.Guid | null;
	/** Enter the App Configuration and Setting property data type. */
	readonly ConfigType: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalfÂ of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter the default value of the App Configuration and Setting property. */
	readonly DefaultValue: string | null;
	/** For internal use only. */
	readonly ImportSequenceNumber: number | null;
	/** Enter whether this App Configuration and Setting is Navigation Setting. */
	readonly IsNavigationSetting: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Enter the name of the App Configuration and Setting property with which this customization will be identified. */
	Name: string | null;
	/** System-calculated field for Organization identifier. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** ParentAppConfigMasterId */
	readonly ParentAppConfigMasterId: string | null;
	/** Validator */
	readonly Validator: string | null;
	readonly VersionNumber: number | null;
}

const AppConfigMasterFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppConfigMasterId: { logicalName: 'appconfigmasterid', readOnly: true },
	ConfigType: { logicalName: 'configtype', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultValue: { logicalName: 'defaultvalue', readOnly: true },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', readOnly: true, type: 'Integer' },
	IsNavigationSetting: { logicalName: 'isnavigationsetting', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', readOnly: true, type: 'DateTime' },
	ParentAppConfigMasterId: { logicalName: 'parentappconfigmasterid', readOnly: true },
	Validator: { logicalName: 'validator', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AppConfigMaster WebApi class for early-bound style coding
 * Usage: const appConfigMaster = new AppConfigMasterApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppConfigMasterApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppConfigMasterApi>(entity, 'appconfigmaster', 'appconfigmasters', AppConfigMasterFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppConfigMasterApi extends IAppConfigMasterApi { }

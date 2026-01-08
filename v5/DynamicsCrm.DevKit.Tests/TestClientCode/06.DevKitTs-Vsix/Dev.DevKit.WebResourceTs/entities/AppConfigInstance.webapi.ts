/**
 * AppConfigInstance.webapi.ts - AppConfigInstance WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AppConfigInstance WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppConfigInstanceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAppConfigInstanceApi, 'FormattedValue'>]: string };
	/** System-calculated App Configuration unique identifier. */
	AppConfigId: DevKit.Guid | null;
	/** Enter the App Configuration unique identifier of AppConfig entity for which this customization belongs. */
	AppConfigIdUnique: DevKit.Guid | null;
	/** System-Populated App Configuration instance identifier. */
	readonly AppConfigInstanceId: DevKit.Guid | null;
	/** System-populated App Configuration Instance unique identifier. */
	AppConfigInstanceIdUnique: DevKit.Guid | null;
	/** System-calculated App Configuration Master identifier. */
	AppConfigMasterId: DevKit.Guid | null;
	/** System-Populated Published or UnPublished state of App Configuration Instance. */
	readonly ComponentState: number | null;
	/** ComponentType */
	ComponentType: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalfÂ of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly ImportSequenceNumber: number | null;
	/** Shows the version in which the App Configuration Instance is introduced. */
	IntroducedVersion: string | null;
	/** Is Managed */
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** ObjectId */
	ObjectId: DevKit.Guid | null;
	/** System-calculated field for Organization identifier. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Shows the last overwrite time for the App Configuration Instance. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Set the solution idenfitier for associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Set the supporting solution idenfitier for associated solution. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Enter a value for the customization property that is valid as per the validator XML specified in the app configuration master record. */
	Value: string | null;
	readonly VersionNumber: number | null;
}

const AppConfigInstanceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppConfigId: { schemaName: 'AppConfigId', logicalName: '_appconfigid_value', entityCollectionName: 'appconfigs', entityLogicalName: 'appconfig' },
	AppConfigIdUnique: { logicalName: 'appconfigidunique' },
	AppConfigInstanceId: { logicalName: 'appconfiginstanceid', readOnly: true },
	AppConfigInstanceIdUnique: { logicalName: 'appconfiginstanceidunique' },
	AppConfigMasterId: { schemaName: 'AppConfigMasterId', logicalName: '_appconfigmasterid_value', entityCollectionName: 'appconfigmasters', entityLogicalName: 'appconfigmaster' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ComponentType: { logicalName: 'componenttype' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ObjectId: { logicalName: 'objectid' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', readOnly: true, type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Value: { logicalName: 'value' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AppConfigInstance WebApi class for early-bound style coding
 * Usage: const appConfigInstance = new AppConfigInstanceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppConfigInstanceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppConfigInstanceApi>(entity, 'appconfiginstance', 'appconfiginstances', AppConfigInstanceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppConfigInstanceApi extends IAppConfigInstanceApi { }

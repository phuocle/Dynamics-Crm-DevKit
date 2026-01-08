/**
 * AppConfig.webapi.ts - AppConfig WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for AppConfig
 * All fields return string representation of their values
 */
export interface IAppConfigFormattedValue {
	readonly AppConfigId: string;
	readonly AppConfigIdUnique: string;
	readonly AppConfigImportXml: string;
	readonly AppModuleId: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * AppConfig WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppConfigApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAppConfigFormattedValue;
	/** System-populated app configuration ID. */
	readonly AppConfigId: DevKit.Guid | null;
	/** System-populated app configuration unique ID. */
	AppConfigIdUnique: DevKit.Guid | null;
	/** The App Config diff computed for managed solutions containing the AppConfig entity. For internal use only. */
	AppConfigImportXml: string | null;
	/** Choose the app module to associate with the app configuration. */
	AppModuleId: DevKit.Guid | null;
	/** For internal use only */
	readonly ComponentState: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalfÂ of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly ImportSequenceNumber: number | null;
	/** Version in which the similarity rule is introduced. */
	IntroducedVersion: string | null;
	/** Is Managed */
	readonly IsManaged: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
	readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Internal use only */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Shows whether the app configuration is Active or Inactive. Inactive records are read-only and can't be edited unless they are reactivated. */
	StateCode: number | null;
	/** Select the status. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const AppConfigFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppConfigId: { logicalName: 'appconfigid', readOnly: true },
	AppConfigIdUnique: { logicalName: 'appconfigidunique' },
	AppConfigImportXml: { logicalName: 'appconfigimportxml' },
	AppModuleId: { schemaName: 'AppModuleId', logicalName: '_appmoduleid_value', entityCollectionName: 'appmodules', entityLogicalName: 'appmodule' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', readOnly: true, type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AppConfig WebApi class for early-bound style coding
 * Usage: const appConfig = new AppConfigApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppConfigApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppConfigApi>(entity, 'appconfig', 'appconfigs', AppConfigFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppConfigApi extends IAppConfigApi { }

/**
 * AppModuleRoles.webapi.ts - AppModuleRoles WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for AppModuleRoles
 * All fields return string representation of their values
 */
export interface IAppModuleRolesFormattedValue {
	readonly AppModuleId: string;
	readonly AppModuleRoleId: string;
	readonly AppModuleRoleIdUnique: string;
	readonly ComponentState: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly RoleId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * AppModuleRoles WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppModuleRolesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAppModuleRolesFormattedValue;
	/** Unique identifier of the app module. */
	readonly AppModuleId: DevKit.Guid | null;
	/** For internal use only. */
	AppModuleRoleId: DevKit.Guid | null;
	/** Unique identifier of the App Module Roles used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	AppModuleRoleIdUnique: DevKit.Guid | null;
	/** For internal use only */
	readonly ComponentState: number | null;
	/** Version in which the similarity rule is introduced. */
	IntroducedVersion: string | null;
	/** Is Managed */
	readonly IsManaged: boolean | null;
	/** Internal use only */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Role */
	readonly RoleId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const AppModuleRolesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppModuleId: { schemaName: 'AppModuleId', logicalName: '_appmoduleid_value', readOnly: true, entityCollectionName: 'appmodules', entityLogicalName: 'appmodule' },
	AppModuleRoleId: { logicalName: 'appmoduleroleid' },
	AppModuleRoleIdUnique: { logicalName: 'appmoduleroleidunique' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RoleId: { schemaName: 'RoleId', logicalName: '_roleid_value', readOnly: true, entityCollectionName: 'roles', entityLogicalName: 'role' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AppModuleRoles WebApi class for early-bound style coding
 * Usage: const appModuleRoles = new AppModuleRolesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppModuleRolesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppModuleRolesApi>(entity, 'appmoduleroles', '', AppModuleRolesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppModuleRolesApi extends IAppModuleRolesApi { }

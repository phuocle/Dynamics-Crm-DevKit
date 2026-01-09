/**
 * Privilege.webapi.ts - Privilege WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Privilege WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrivilegeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPrivilegeApi, 'FormattedValue'>]: string };
	/** Rights a user has to an instance of an entity. */
	AccessRight: number | null;
	/** Information that specifies whether the privilege applies to the user, the user's team, or objects shared by the user. */
	CanBeBasic: boolean | null;
	/** Information that specifies whether the privilege applies to child business units of the business unit associated with the user. */
	CanBeDeep: boolean | null;
	/** Information that specifies whether the privilege applies to the local reference of an external party. */
	CanBeEntityReference: boolean | null;
	/** Information that specifies whether the privilege applies to the entire organization. */
	CanBeGlobal: boolean | null;
	/** Information that specifies whether the privilege applies to the user's business unit. */
	CanBeLocal: boolean | null;
	/** Information that specifies whether the privilege applies to parent reference of the external party. */
	CanBeParentEntityReference: boolean | null;
	/** Information that specifies whether the privilege applies to the record filters. */
	CanBeRecordFilter: boolean | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Specifies whether the privilege is disabled. */
	readonly IsDisabledWhenIntegrated: boolean | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Name of the privilege. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the privilege. */
	PrivilegeId: DevKit.Guid | null;
	/** Unique identifier of the Privilege used when synchronizing customizations for the Microsoft Dynamics CRM client for Outlook */
	PrivilegeRowId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const PrivilegeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccessRight: { logicalName: 'accessright', type: 'Integer' },
	CanBeBasic: { logicalName: 'canbebasic', type: 'Boolean' },
	CanBeDeep: { logicalName: 'canbedeep', type: 'Boolean' },
	CanBeEntityReference: { logicalName: 'canbeentityreference', type: 'Boolean' },
	CanBeGlobal: { logicalName: 'canbeglobal', type: 'Boolean' },
	CanBeLocal: { logicalName: 'canbelocal', type: 'Boolean' },
	CanBeParentEntityReference: { logicalName: 'canbeparententityreference', type: 'Boolean' },
	CanBeRecordFilter: { logicalName: 'canberecordfilter', type: 'Boolean' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsDisabledWhenIntegrated: { logicalName: 'isdisabledwhenintegrated', readOnly: true, type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PrivilegeId: { logicalName: 'privilegeid' },
	PrivilegeRowId: { logicalName: 'privilegerowid' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Privilege WebApi class for early-bound style coding
 * Usage: const privilege = new PrivilegeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrivilegeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrivilegeApi>(entity, 'privilege', 'privileges', PrivilegeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrivilegeApi extends IPrivilegeApi { }

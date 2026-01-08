/**
 * appactionrule_webresource_scripts.webapi.ts - appactionrule_webresource_scripts WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for appactionrule_webresource_scripts
 * All fields return string representation of their values
 */
export interface Iappactionrule_webresource_scriptsFormattedValue {
	readonly appactionrule_webresource_scriptsId: string;
	readonly appactionruleid: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
	readonly webresourceid: string;
}

/**
 * appactionrule_webresource_scripts WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iappactionrule_webresource_scriptsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Iappactionrule_webresource_scriptsFormattedValue;
	readonly appactionrule_webresource_scriptsId: DevKit.Guid | null;
	readonly appactionruleid: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
	readonly webresourceid: DevKit.Guid | null;
}

const appactionrule_webresource_scriptsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	appactionrule_webresource_scriptsId: { logicalName: 'appactionrule_webresource_scriptsid', readOnly: true },
	appactionruleid: { logicalName: 'appactionruleid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	webresourceid: { logicalName: 'webresourceid', readOnly: true },
};

/**
 * appactionrule_webresource_scripts WebApi class for early-bound style coding
 * Usage: const appactionrule_webresource_scripts = new appactionrule_webresource_scriptsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class appactionrule_webresource_scriptsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iappactionrule_webresource_scriptsApi>(entity, 'appactionrule_webresource_scripts', '', appactionrule_webresource_scriptsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface appactionrule_webresource_scriptsApi extends Iappactionrule_webresource_scriptsApi { }

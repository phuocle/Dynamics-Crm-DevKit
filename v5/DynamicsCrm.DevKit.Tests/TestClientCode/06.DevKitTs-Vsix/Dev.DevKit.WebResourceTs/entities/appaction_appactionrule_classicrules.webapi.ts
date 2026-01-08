/**
 * appaction_appactionrule_classicrules.webapi.ts - appaction_appactionrule_classicrules WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for appaction_appactionrule_classicrules
 * All fields return string representation of their values
 */
export interface Iappaction_appactionrule_classicrulesFormattedValue {
	readonly appaction_appactionrule_classicrulesId: string;
	readonly appactionid: string;
	readonly appactionruleid: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * appaction_appactionrule_classicrules WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iappaction_appactionrule_classicrulesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Iappaction_appactionrule_classicrulesFormattedValue;
	readonly appaction_appactionrule_classicrulesId: DevKit.Guid | null;
	readonly appactionid: DevKit.Guid | null;
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
}

const appaction_appactionrule_classicrulesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	appaction_appactionrule_classicrulesId: { logicalName: 'appaction_appactionrule_classicrulesid', readOnly: true },
	appactionid: { logicalName: 'appactionid', readOnly: true },
	appactionruleid: { logicalName: 'appactionruleid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * appaction_appactionrule_classicrules WebApi class for early-bound style coding
 * Usage: const appaction_appactionrule_classicrules = new appaction_appactionrule_classicrulesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class appaction_appactionrule_classicrulesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iappaction_appactionrule_classicrulesApi>(entity, 'appaction_appactionrule_classicrules', '', appaction_appactionrule_classicrulesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface appaction_appactionrule_classicrulesApi extends Iappaction_appactionrule_classicrulesApi { }

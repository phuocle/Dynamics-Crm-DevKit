/**
 * powerpagesite_dvtablesearch.webapi.ts - powerpagesite_dvtablesearch WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * powerpagesite_dvtablesearch WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ipowerpagesite_dvtablesearchApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Ipowerpagesite_dvtablesearchApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	readonly dvtablesearchid: DevKit.Guid | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	readonly powerpagesite_dvtablesearchId: DevKit.Guid | null;
	readonly powerpagesiteid: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const powerpagesite_dvtablesearchFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	dvtablesearchid: { logicalName: 'dvtablesearchid', readOnly: true },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	powerpagesite_dvtablesearchId: { logicalName: 'powerpagesite_dvtablesearchid', readOnly: true },
	powerpagesiteid: { logicalName: 'powerpagesiteid', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * powerpagesite_dvtablesearch WebApi class for early-bound style coding
 * Usage: const powerpagesite_dvtablesearch = new powerpagesite_dvtablesearchApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class powerpagesite_dvtablesearchApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ipowerpagesite_dvtablesearchApi>(entity, 'powerpagesite_dvtablesearch', '', powerpagesite_dvtablesearchFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface powerpagesite_dvtablesearchApi extends Ipowerpagesite_dvtablesearchApi { }

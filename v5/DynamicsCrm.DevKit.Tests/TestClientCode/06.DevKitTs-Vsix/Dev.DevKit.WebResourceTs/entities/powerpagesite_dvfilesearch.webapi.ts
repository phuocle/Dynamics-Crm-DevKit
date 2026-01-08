/**
 * powerpagesite_dvfilesearch.webapi.ts - powerpagesite_dvfilesearch WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for powerpagesite_dvfilesearch
 * All fields return string representation of their values
 */
export interface Ipowerpagesite_dvfilesearchFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly dvfilesearchid: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly powerpagesite_dvfilesearchId: string;
	readonly powerpagesiteid: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * powerpagesite_dvfilesearch WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ipowerpagesite_dvfilesearchApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Ipowerpagesite_dvfilesearchFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	readonly dvfilesearchid: DevKit.Guid | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	readonly powerpagesite_dvfilesearchId: DevKit.Guid | null;
	readonly powerpagesiteid: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const powerpagesite_dvfilesearchFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	dvfilesearchid: { logicalName: 'dvfilesearchid', readOnly: true },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	powerpagesite_dvfilesearchId: { logicalName: 'powerpagesite_dvfilesearchid', readOnly: true },
	powerpagesiteid: { logicalName: 'powerpagesiteid', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * powerpagesite_dvfilesearch WebApi class for early-bound style coding
 * Usage: const powerpagesite_dvfilesearch = new powerpagesite_dvfilesearchApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class powerpagesite_dvfilesearchApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ipowerpagesite_dvfilesearchApi>(entity, 'powerpagesite_dvfilesearch', '', powerpagesite_dvfilesearchFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface powerpagesite_dvfilesearchApi extends Ipowerpagesite_dvfilesearchApi { }

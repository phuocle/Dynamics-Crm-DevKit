/**
 * DisplayStringMap.webapi.ts - DisplayStringMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DisplayStringMap
 * All fields return string representation of their values
 */
export interface IDisplayStringMapFormattedValue {
	readonly ComponentState: string;
	readonly DisplayStringId: string;
	readonly DisplayStringMapId: string;
	readonly DisplayStringMapIdUnique: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
}

/**
 * DisplayStringMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDisplayStringMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDisplayStringMapFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the display string. */
	DisplayStringId: DevKit.Guid | null;
	/** Unique identifier of the display string map. */
	DisplayStringMapId: DevKit.Guid | null;
	/** For internal use only. */
	readonly DisplayStringMapIdUnique: DevKit.Guid | null;
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
}

const DisplayStringMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	DisplayStringId: { logicalName: 'displaystringid' },
	DisplayStringMapId: { logicalName: 'displaystringmapid' },
	DisplayStringMapIdUnique: { logicalName: 'displaystringmapidunique', readOnly: true },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
};

/**
 * DisplayStringMap WebApi class for early-bound style coding
 * Usage: const displayStringMap = new DisplayStringMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DisplayStringMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDisplayStringMapApi>(entity, 'displaystringmap', 'displaystringmaps', DisplayStringMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DisplayStringMapApi extends IDisplayStringMapApi { }

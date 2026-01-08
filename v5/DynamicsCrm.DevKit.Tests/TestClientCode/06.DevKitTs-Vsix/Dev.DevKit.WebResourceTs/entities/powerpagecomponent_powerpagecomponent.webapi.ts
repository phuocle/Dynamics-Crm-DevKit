/**
 * powerpagecomponent_powerpagecomponent.webapi.ts - powerpagecomponent_powerpagecomponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for powerpagecomponent_powerpagecomponent
 * All fields return string representation of their values
 */
export interface Ipowerpagecomponent_powerpagecomponentFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly powerpagecomponent_powerpagecomponentId: string;
	readonly powerpagecomponentidOne: string;
	readonly powerpagecomponentidTwo: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * powerpagecomponent_powerpagecomponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ipowerpagecomponent_powerpagecomponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Ipowerpagecomponent_powerpagecomponentFormattedValue;
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
	readonly powerpagecomponent_powerpagecomponentId: DevKit.Guid | null;
	readonly powerpagecomponentidOne: DevKit.Guid | null;
	readonly powerpagecomponentidTwo: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const powerpagecomponent_powerpagecomponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	powerpagecomponent_powerpagecomponentId: { logicalName: 'powerpagecomponent_powerpagecomponentid', readOnly: true },
	powerpagecomponentidOne: { logicalName: 'powerpagecomponentidone', readOnly: true },
	powerpagecomponentidTwo: { logicalName: 'powerpagecomponentidtwo', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * powerpagecomponent_powerpagecomponent WebApi class for early-bound style coding
 * Usage: const powerpagecomponent_powerpagecomponent = new powerpagecomponent_powerpagecomponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class powerpagecomponent_powerpagecomponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ipowerpagecomponent_powerpagecomponentApi>(entity, 'powerpagecomponent_powerpagecomponent', '', powerpagecomponent_powerpagecomponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface powerpagecomponent_powerpagecomponentApi extends Ipowerpagecomponent_powerpagecomponentApi { }

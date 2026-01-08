/**
 * botcomponent_botcomponent.webapi.ts - botcomponent_botcomponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for botcomponent_botcomponent
 * All fields return string representation of their values
 */
export interface Ibotcomponent_botcomponentFormattedValue {
	readonly botcomponent_botcomponentId: string;
	readonly botcomponentidOne: string;
	readonly botcomponentidTwo: string;
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
 * botcomponent_botcomponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ibotcomponent_botcomponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Ibotcomponent_botcomponentFormattedValue;
	readonly botcomponent_botcomponentId: DevKit.Guid | null;
	readonly botcomponentidOne: DevKit.Guid | null;
	readonly botcomponentidTwo: DevKit.Guid | null;
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

const botcomponent_botcomponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	botcomponent_botcomponentId: { logicalName: 'botcomponent_botcomponentid', readOnly: true },
	botcomponentidOne: { logicalName: 'botcomponentidone', readOnly: true },
	botcomponentidTwo: { logicalName: 'botcomponentidtwo', readOnly: true },
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
 * botcomponent_botcomponent WebApi class for early-bound style coding
 * Usage: const botcomponent_botcomponent = new botcomponent_botcomponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class botcomponent_botcomponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ibotcomponent_botcomponentApi>(entity, 'botcomponent_botcomponent', '', botcomponent_botcomponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface botcomponent_botcomponentApi extends Ibotcomponent_botcomponentApi { }

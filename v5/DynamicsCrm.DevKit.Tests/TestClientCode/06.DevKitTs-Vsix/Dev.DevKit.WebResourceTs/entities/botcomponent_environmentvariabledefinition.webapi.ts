/**
 * botcomponent_environmentvariabledefinition.webapi.ts - botcomponent_environmentvariabledefinition WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for botcomponent_environmentvariabledefinition
 * All fields return string representation of their values
 */
export interface Ibotcomponent_environmentvariabledefinitionFormattedValue {
	readonly botcomponent_environmentvariabledefinitionId: string;
	readonly botcomponentid: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly environmentvariabledefinitionid: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * botcomponent_environmentvariabledefinition WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ibotcomponent_environmentvariabledefinitionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Ibotcomponent_environmentvariabledefinitionFormattedValue;
	readonly botcomponent_environmentvariabledefinitionId: DevKit.Guid | null;
	readonly botcomponentid: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	readonly environmentvariabledefinitionid: DevKit.Guid | null;
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

const botcomponent_environmentvariabledefinitionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	botcomponent_environmentvariabledefinitionId: { logicalName: 'botcomponent_environmentvariabledefinitionid', readOnly: true },
	botcomponentid: { logicalName: 'botcomponentid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	environmentvariabledefinitionid: { logicalName: 'environmentvariabledefinitionid', readOnly: true },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * botcomponent_environmentvariabledefinition WebApi class for early-bound style coding
 * Usage: const botcomponent_environmentvariabledefinition = new botcomponent_environmentvariabledefinitionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class botcomponent_environmentvariabledefinitionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ibotcomponent_environmentvariabledefinitionApi>(entity, 'botcomponent_environmentvariabledefinition', '', botcomponent_environmentvariabledefinitionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface botcomponent_environmentvariabledefinitionApi extends Ibotcomponent_environmentvariabledefinitionApi { }

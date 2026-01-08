/**
 * botcomponent_msdyn_aimodel.webapi.ts - botcomponent_msdyn_aimodel WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * botcomponent_msdyn_aimodel WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ibotcomponent_msdyn_aimodelApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Ibotcomponent_msdyn_aimodelApi, 'FormattedValue'>]: string };
	readonly botcomponent_msdyn_aimodelId: DevKit.Guid | null;
	readonly botcomponentid: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	readonly msdyn_aimodelid: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const botcomponent_msdyn_aimodelFieldConfig: DevKit.IWebApiFieldConfigMap = {
	botcomponent_msdyn_aimodelId: { logicalName: 'botcomponent_msdyn_aimodelid', readOnly: true },
	botcomponentid: { logicalName: 'botcomponentid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	msdyn_aimodelid: { logicalName: 'msdyn_aimodelid', readOnly: true },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * botcomponent_msdyn_aimodel WebApi class for early-bound style coding
 * Usage: const botcomponent_msdyn_aimodel = new botcomponent_msdyn_aimodelApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class botcomponent_msdyn_aimodelApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ibotcomponent_msdyn_aimodelApi>(entity, 'botcomponent_msdyn_aimodel', '', botcomponent_msdyn_aimodelFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface botcomponent_msdyn_aimodelApi extends Ibotcomponent_msdyn_aimodelApi { }

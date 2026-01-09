/**
 * botcomponent_connectionreference.webapi.ts - botcomponent_connectionreference WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * botcomponent_connectionreference WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ibotcomponent_connectionreferenceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Ibotcomponent_connectionreferenceApi, 'FormattedValue'>]: string };
	readonly botcomponent_connectionreferenceId: DevKit.Guid | null;
	readonly botcomponentid: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	readonly connectionreferenceid: DevKit.Guid | null;
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

const botcomponent_connectionreferenceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	botcomponent_connectionreferenceId: { logicalName: 'botcomponent_connectionreferenceid', readOnly: true },
	botcomponentid: { logicalName: 'botcomponentid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	connectionreferenceid: { logicalName: 'connectionreferenceid', readOnly: true },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * botcomponent_connectionreference WebApi class for early-bound style coding
 * Usage: const botcomponent_connectionreference = new botcomponent_connectionreferenceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class botcomponent_connectionreferenceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ibotcomponent_connectionreferenceApi>(entity, 'botcomponent_connectionreference', '', botcomponent_connectionreferenceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface botcomponent_connectionreferenceApi extends Ibotcomponent_connectionreferenceApi { }

/**
 * botcomponent_aipluginoperation.webapi.ts - botcomponent_aipluginoperation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * botcomponent_aipluginoperation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ibotcomponent_aipluginoperationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Ibotcomponent_aipluginoperationApi, 'FormattedValue'>]: string };
	readonly aipluginoperationid: DevKit.Guid | null;
	readonly botcomponent_aipluginoperationId: DevKit.Guid | null;
	readonly botcomponentid: DevKit.Guid | null;
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

const botcomponent_aipluginoperationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	aipluginoperationid: { logicalName: 'aipluginoperationid', readOnly: true },
	botcomponent_aipluginoperationId: { logicalName: 'botcomponent_aipluginoperationid', readOnly: true },
	botcomponentid: { logicalName: 'botcomponentid', readOnly: true },
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
 * botcomponent_aipluginoperation WebApi class for early-bound style coding
 * Usage: const botcomponent_aipluginoperation = new botcomponent_aipluginoperationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class botcomponent_aipluginoperationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ibotcomponent_aipluginoperationApi>(entity, 'botcomponent_aipluginoperation', '', botcomponent_aipluginoperationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface botcomponent_aipluginoperationApi extends Ibotcomponent_aipluginoperationApi { }

/**
 * bot_botcomponent.webapi.ts - bot_botcomponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * bot_botcomponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ibot_botcomponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Ibot_botcomponentApi, 'FormattedValue'>]: string };
	readonly bot_botcomponentId: DevKit.Guid | null;
	readonly botcomponentid: DevKit.Guid | null;
	readonly botid: DevKit.Guid | null;
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

const bot_botcomponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	bot_botcomponentId: { logicalName: 'bot_botcomponentid', readOnly: true },
	botcomponentid: { logicalName: 'botcomponentid', readOnly: true },
	botid: { logicalName: 'botid', readOnly: true },
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
 * bot_botcomponent WebApi class for early-bound style coding
 * Usage: const bot_botcomponent = new bot_botcomponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class bot_botcomponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ibot_botcomponentApi>(entity, 'bot_botcomponent', '', bot_botcomponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface bot_botcomponentApi extends Ibot_botcomponentApi { }

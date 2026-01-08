/**
 * bot_botcomponentcollection.webapi.ts - bot_botcomponentcollection WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * bot_botcomponentcollection WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ibot_botcomponentcollectionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Ibot_botcomponentcollectionApi, 'FormattedValue'>]: string };
	readonly bot_botcomponentcollectionId: DevKit.Guid | null;
	readonly botcomponentcollectionid: DevKit.Guid | null;
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

const bot_botcomponentcollectionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	bot_botcomponentcollectionId: { logicalName: 'bot_botcomponentcollectionid', readOnly: true },
	botcomponentcollectionid: { logicalName: 'botcomponentcollectionid', readOnly: true },
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
 * bot_botcomponentcollection WebApi class for early-bound style coding
 * Usage: const bot_botcomponentcollection = new bot_botcomponentcollectionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class bot_botcomponentcollectionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ibot_botcomponentcollectionApi>(entity, 'bot_botcomponentcollection', '', bot_botcomponentcollectionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface bot_botcomponentcollectionApi extends Ibot_botcomponentcollectionApi { }

/**
 * AICopilot_AIPlugin.webapi.ts - AICopilot_AIPlugin WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AICopilot_AIPlugin WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAICopilot_AIPluginApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAICopilot_AIPluginApi, 'FormattedValue'>]: string };
	readonly AICopilot_AIPluginId: DevKit.Guid | null;
	readonly aicopilotid: DevKit.Guid | null;
	readonly aipluginid: DevKit.Guid | null;
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

const AICopilot_AIPluginFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AICopilot_AIPluginId: { logicalName: 'aicopilot_aipluginid', readOnly: true },
	aicopilotid: { logicalName: 'aicopilotid', readOnly: true },
	aipluginid: { logicalName: 'aipluginid', readOnly: true },
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
 * AICopilot_AIPlugin WebApi class for early-bound style coding
 * Usage: const aICopilot_AIPlugin = new AICopilot_AIPluginApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AICopilot_AIPluginApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAICopilot_AIPluginApi>(entity, 'aicopilot_aiplugin', '', AICopilot_AIPluginFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AICopilot_AIPluginApi extends IAICopilot_AIPluginApi { }

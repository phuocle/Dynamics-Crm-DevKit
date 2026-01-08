/**
 * botcomponent_workflow.webapi.ts - botcomponent_workflow WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for botcomponent_workflow
 * All fields return string representation of their values
 */
export interface Ibotcomponent_workflowFormattedValue {
	readonly botcomponent_workflowId: string;
	readonly botcomponentid: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
	readonly workflowid: string;
}

/**
 * botcomponent_workflow WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Ibotcomponent_workflowApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Ibotcomponent_workflowFormattedValue;
	readonly botcomponent_workflowId: DevKit.Guid | null;
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
	readonly workflowid: DevKit.Guid | null;
}

const botcomponent_workflowFieldConfig: DevKit.IWebApiFieldConfigMap = {
	botcomponent_workflowId: { logicalName: 'botcomponent_workflowid', readOnly: true },
	botcomponentid: { logicalName: 'botcomponentid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	workflowid: { logicalName: 'workflowid', readOnly: true },
};

/**
 * botcomponent_workflow WebApi class for early-bound style coding
 * Usage: const botcomponent_workflow = new botcomponent_workflowApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class botcomponent_workflowApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Ibotcomponent_workflowApi>(entity, 'botcomponent_workflow', '', botcomponent_workflowFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface botcomponent_workflowApi extends Ibotcomponent_workflowApi { }

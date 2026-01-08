/**
 * workflowcardconnections.webapi.ts - workflowcardconnections WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * workflowcardconnections WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IworkflowcardconnectionsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IworkflowcardconnectionsApi, 'FormattedValue'>]: string };
	readonly cardid: DevKit.Guid | null;
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
	readonly workflowcardconnectionsId: DevKit.Guid | null;
	readonly workflowid: DevKit.Guid | null;
}

const workflowcardconnectionsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	cardid: { logicalName: 'cardid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	workflowcardconnectionsId: { logicalName: 'workflowcardconnectionsid', readOnly: true },
	workflowid: { logicalName: 'workflowid', readOnly: true },
};

/**
 * workflowcardconnections WebApi class for early-bound style coding
 * Usage: const workflowcardconnections = new workflowcardconnectionsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class workflowcardconnectionsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IworkflowcardconnectionsApi>(entity, 'workflowcardconnections', '', workflowcardconnectionsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface workflowcardconnectionsApi extends IworkflowcardconnectionsApi { }

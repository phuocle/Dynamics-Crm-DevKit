/**
 * RuntimeDependency.webapi.ts - RuntimeDependency WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RuntimeDependency WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRuntimeDependencyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRuntimeDependencyApi, 'FormattedValue'>]: string };
	/** Date and time when the record was created. */
	readonly CreatedTime_UtcDateAndTime: Date | null;
	/** Unique identifier of a dependency. */
	readonly DependencyId: DevKit.Guid | null;
	/** Unique identifier of the dependent component's node. */
	DependentComponentNodeId: DevKit.Guid | null;
	/** Dependent Component Node Type */
	DependentComponentType: number | null;
	/** Determines whether required component is published */
	IsPublished: string | null;
	/** Date and time when the required component was modified. */
	readonly RequiredComponentModifiedTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the required component's node */
	RequiredComponentNodeId: string | null;
	/** Required Component Node Type */
	RequiredComponentType: number | null;
}

const RuntimeDependencyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedTime_UtcDateAndTime: { logicalName: 'createdtime', readOnly: true, type: 'DateTime' },
	DependencyId: { logicalName: 'dependencyid', readOnly: true },
	DependentComponentNodeId: { logicalName: 'dependentcomponentnodeid' },
	DependentComponentType: { logicalName: 'dependentcomponenttype', type: 'Integer' },
	IsPublished: { logicalName: 'ispublished' },
	RequiredComponentModifiedTime_UtcDateAndTime: { logicalName: 'requiredcomponentmodifiedtime', readOnly: true, type: 'DateTime' },
	RequiredComponentNodeId: { logicalName: 'requiredcomponentnodeid' },
	RequiredComponentType: { logicalName: 'requiredcomponenttype', type: 'Integer' },
};

/**
 * RuntimeDependency WebApi class for early-bound style coding
 * Usage: const runtimeDependency = new RuntimeDependencyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RuntimeDependencyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRuntimeDependencyApi>(entity, 'runtimedependency', 'runtimedependencies', RuntimeDependencyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RuntimeDependencyApi extends IRuntimeDependencyApi { }

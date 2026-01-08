/**
 * Dependency.webapi.ts - Dependency WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Dependency WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDependencyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IDependencyApi, 'FormattedValue'>]: string };
	/** Unique identifier of a dependency. */
	readonly DependencyId: DevKit.Guid | null;
	/** The dependency type of the dependency. */
	readonly DependencyType: number | null;
	readonly DependentComponentBaseSolutionId: DevKit.Guid | null;
	/** Unique identifier of the dependent component's node. */
	readonly DependentComponentNodeId: DevKit.Guid | null;
	readonly DependentComponentObjectId: DevKit.Guid | null;
	readonly DependentComponentParentId: DevKit.Guid | null;
	readonly DependentComponentType: number | null;
	readonly RequiredComponentBaseSolutionId: DevKit.Guid | null;
	readonly RequiredComponentIntroducedVersion: number | null;
	/** Unique identifier of the required component's node */
	readonly RequiredComponentNodeId: DevKit.Guid | null;
	readonly RequiredComponentObjectId: DevKit.Guid | null;
	readonly RequiredComponentParentId: DevKit.Guid | null;
	readonly RequiredComponentType: number | null;
	readonly VersionNumber: number | null;
}

const DependencyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	DependencyId: { logicalName: 'dependencyid', readOnly: true },
	DependencyType: { logicalName: 'dependencytype', readOnly: true, type: 'Integer' },
	DependentComponentBaseSolutionId: { logicalName: 'dependentcomponentbasesolutionid', readOnly: true },
	DependentComponentNodeId: { schemaName: 'DependentComponentNodeId', logicalName: '_dependentcomponentnodeid_value', readOnly: true, entityCollectionName: 'dependencynodes', entityLogicalName: 'dependencynode' },
	DependentComponentObjectId: { logicalName: 'dependentcomponentobjectid', readOnly: true },
	DependentComponentParentId: { logicalName: 'dependentcomponentparentid', readOnly: true },
	DependentComponentType: { logicalName: 'dependentcomponenttype', readOnly: true, type: 'Integer' },
	RequiredComponentBaseSolutionId: { logicalName: 'requiredcomponentbasesolutionid', readOnly: true },
	RequiredComponentIntroducedVersion: { logicalName: 'requiredcomponentintroducedversion', readOnly: true, type: 'Number' },
	RequiredComponentNodeId: { schemaName: 'RequiredComponentNodeId', logicalName: '_requiredcomponentnodeid_value', readOnly: true, entityCollectionName: 'dependencynodes', entityLogicalName: 'dependencynode' },
	RequiredComponentObjectId: { logicalName: 'requiredcomponentobjectid', readOnly: true },
	RequiredComponentParentId: { logicalName: 'requiredcomponentparentid', readOnly: true },
	RequiredComponentType: { logicalName: 'requiredcomponenttype', readOnly: true, type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Dependency WebApi class for early-bound style coding
 * Usage: const dependency = new DependencyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DependencyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDependencyApi>(entity, 'dependency', 'dependencies', DependencyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DependencyApi extends IDependencyApi { }

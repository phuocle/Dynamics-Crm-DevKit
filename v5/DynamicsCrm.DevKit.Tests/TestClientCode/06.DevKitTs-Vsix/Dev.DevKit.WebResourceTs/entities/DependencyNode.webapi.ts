/**
 * DependencyNode.webapi.ts - DependencyNode WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DependencyNode
 * All fields return string representation of their values
 */
export interface IDependencyNodeFormattedValue {
	readonly BaseSolutionId: string;
	readonly ComponentType: string;
	readonly DependencyNodeId: string;
	readonly IntroducedVersion: string;
	readonly IsSharedComponent: string;
	readonly ObjectId: string;
	readonly ParentId: string;
	readonly TopSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * DependencyNode WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDependencyNodeApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDependencyNodeFormattedValue;
	/** Unique identifier of the user who created the solution */
	readonly BaseSolutionId: DevKit.Guid | null;
	/** The type code of the component. */
	readonly ComponentType: number | null;
	/** Unique identifier of the dependency node. */
	readonly DependencyNodeId: DevKit.Guid | null;
	/** Introduced version for the component */
	IntroducedVersion: number | null;
	/** Whether this component is shared by two solutions with the same publisher. */
	readonly IsSharedComponent: boolean | null;
	/** Unique identifier of the object with which the node is associated. */
	ObjectId: DevKit.Guid | null;
	/** Unique identifier of the parent entity. */
	readonly ParentId: DevKit.Guid | null;
	/** Unique identifier of the top solution. */
	readonly TopSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const DependencyNodeFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BaseSolutionId: { schemaName: 'BaseSolutionId', logicalName: '_basesolutionid_value', readOnly: true, entityCollectionName: 'solutions', entityLogicalName: 'solution' },
	ComponentType: { logicalName: 'componenttype', readOnly: true, type: 'Integer' },
	DependencyNodeId: { logicalName: 'dependencynodeid', readOnly: true },
	IntroducedVersion: { logicalName: 'introducedversion', type: 'Number' },
	IsSharedComponent: { logicalName: 'issharedcomponent', readOnly: true, type: 'Boolean' },
	ObjectId: { logicalName: 'objectid' },
	ParentId: { logicalName: 'parentid', readOnly: true },
	TopSolutionId: { schemaName: 'TopSolutionId', logicalName: '_topsolutionid_value', readOnly: true, entityCollectionName: 'solutions', entityLogicalName: 'solution' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * DependencyNode WebApi class for early-bound style coding
 * Usage: const dependencyNode = new DependencyNodeApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DependencyNodeApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDependencyNodeApi>(entity, 'dependencynode', 'dependencynodes', DependencyNodeFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DependencyNodeApi extends IDependencyNodeApi { }

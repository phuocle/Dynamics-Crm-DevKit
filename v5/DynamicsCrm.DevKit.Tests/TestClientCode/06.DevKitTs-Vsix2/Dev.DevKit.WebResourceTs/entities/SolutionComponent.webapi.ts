/**
 * SolutionComponent.webapi.ts - SolutionComponent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SolutionComponent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISolutionComponentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISolutionComponentApi, 'FormattedValue'>]: string };
	/** The object type code of the component. */
	readonly ComponentType: number | null;
	/** Unique identifier of the user who created the solution */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the solution was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the solution. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Indicates whether this component is metadata or data. */
	readonly IsMetadata: boolean | null;
	/** Unique identifier of the user who last modified the solution. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the solution was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the solution. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the object with which the component is associated. */
	readonly ObjectId: DevKit.Guid | null;
	/** Indicates the include behavior of the root component. */
	readonly RootComponentBehavior: number | null;
	/** The parent ID of the subcomponent, which will be a root */
	readonly RootSolutionComponentId: DevKit.Guid | null;
	/** Unique identifier of the solution component. */
	readonly SolutionComponentId: DevKit.Guid | null;
	/** Unique identifier of the solution. */
	readonly SolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const SolutionComponentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentType: { logicalName: 'componenttype', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	IsMetadata: { logicalName: 'ismetadata', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ObjectId: { logicalName: 'objectid', readOnly: true },
	RootComponentBehavior: { logicalName: 'rootcomponentbehavior', readOnly: true, type: 'Integer' },
	RootSolutionComponentId: { logicalName: 'rootsolutioncomponentid', readOnly: true },
	SolutionComponentId: { logicalName: 'solutioncomponentid', readOnly: true },
	SolutionId: { schemaName: 'SolutionId', logicalName: '_solutionid_value', readOnly: true, entityCollectionName: 'solutions', entityLogicalName: 'solution' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SolutionComponent WebApi class for early-bound style coding
 * Usage: const solutionComponent = new SolutionComponentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SolutionComponentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISolutionComponentApi>(entity, 'solutioncomponent', 'solutioncomponentss', SolutionComponentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SolutionComponentApi extends ISolutionComponentApi { }

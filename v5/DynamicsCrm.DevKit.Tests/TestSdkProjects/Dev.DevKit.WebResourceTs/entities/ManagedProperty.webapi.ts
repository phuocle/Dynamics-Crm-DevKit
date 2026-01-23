/**
 * ManagedProperty.webapi.ts - ManagedProperty WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ManagedProperty WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IManagedPropertyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IManagedPropertyApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Enables Attribute Name of this Managed Property. */
	EnablesAttributeName: string | null;
	/** Enables Entity Name of this Managed Property. */
	EnablesEntityName: string | null;
	/** The logical name of this Managed Property. */
	LogicalName: string | null;
	/** Unique identifier of the managed property key. */
	ManagedPropertyId: DevKit.Guid | null;
	/** Unique identifier of the Managed Property */
	ManagedPropertyRowId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
}

const ManagedPropertyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	EnablesAttributeName: { logicalName: 'enablesattributename' },
	EnablesEntityName: { logicalName: 'enablesentityname' },
	LogicalName: { logicalName: 'logicalname' },
	ManagedPropertyId: { logicalName: 'managedpropertyid' },
	ManagedPropertyRowId: { logicalName: 'managedpropertyrowid' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
};

/**
 * ManagedProperty WebApi class for early-bound style coding
 * Usage: const managedProperty = new ManagedPropertyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ManagedPropertyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IManagedPropertyApi>(entity, 'managedproperty', 'managedproperties', ManagedPropertyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ManagedPropertyApi extends IManagedPropertyApi { }

/**
 * EntityImageConfig.webapi.ts - EntityImageConfig WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EntityImageConfig
 * All fields return string representation of their values
 */
export interface IEntityImageConfigFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly EntityImageConfigId: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly ParentEntityLogicalName: string;
	readonly PrimaryImageAttribute: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * EntityImageConfig WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityImageConfigApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEntityImageConfigFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier for entity instances */
	EntityImageConfigId: DevKit.Guid | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Parent Entity Logical Name */
	ParentEntityLogicalName: string | null;
	/** Logical Name of the Primary Image Attribute */
	PrimaryImageAttribute: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of Entity Image Configuration. */
	readonly VersionNumber: number | null;
}

const EntityImageConfigFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	EntityImageConfigId: { logicalName: 'entityimageconfigid' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParentEntityLogicalName: { logicalName: 'parententitylogicalname' },
	PrimaryImageAttribute: { logicalName: 'primaryimageattribute' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * EntityImageConfig WebApi class for early-bound style coding
 * Usage: const entityImageConfig = new EntityImageConfigApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityImageConfigApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityImageConfigApi>(entity, 'entityimageconfig', 'entityimageconfigs', EntityImageConfigFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityImageConfigApi extends IEntityImageConfigApi { }

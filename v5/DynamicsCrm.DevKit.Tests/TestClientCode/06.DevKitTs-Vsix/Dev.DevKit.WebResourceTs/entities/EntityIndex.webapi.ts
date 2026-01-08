/**
 * EntityIndex.webapi.ts - EntityIndex WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EntityIndex
 * All fields return string representation of their values
 */
export interface IEntityIndexFormattedValue {
	readonly ComponentState: string;
	readonly IndexId: string;
	readonly Name: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly RecordId: string;
	readonly SequentialKeyStatus: string;
	readonly SolutionId: string;
	readonly VersionNumber: string;
}

/**
 * EntityIndex WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityIndexApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEntityIndexFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the index id */
	IndexId: DevKit.Guid | null;
	/** Display Name */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** The record id of this entity index. */
	readonly RecordId: number | null;
	/** For internal use only. */
	SequentialKeyStatus: number | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** The version number of this entity index. */
	readonly VersionNumber: number | null;
}

const EntityIndexFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IndexId: { logicalName: 'indexid' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RecordId: { logicalName: 'recordid', readOnly: true, type: 'Integer' },
	SequentialKeyStatus: { logicalName: 'sequentialkeystatus', type: 'Integer' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * EntityIndex WebApi class for early-bound style coding
 * Usage: const entityIndex = new EntityIndexApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityIndexApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityIndexApi>(entity, 'entityindex', 'entityindexes', EntityIndexFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityIndexApi extends IEntityIndexApi { }

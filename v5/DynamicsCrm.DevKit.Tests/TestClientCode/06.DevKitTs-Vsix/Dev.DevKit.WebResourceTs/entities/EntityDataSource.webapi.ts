/**
 * EntityDataSource.webapi.ts - EntityDataSource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EntityDataSource
 * All fields return string representation of their values
 */
export interface IEntityDataSourceFormattedValue {
	readonly ComponentState: string;
	readonly ConnectionDefinition: string;
	readonly ConnectionDefinitionSecrets: string;
	readonly Description: string;
	readonly EntityDataProviderId: string;
	readonly EntityDataSourceId: string;
	readonly EntityDataSourceIdUnique: string;
	readonly EntityName2: string;
	readonly IntroducedVersion: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
}

/**
 * EntityDataSource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityDataSourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEntityDataSourceFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** JSON data representing values from a data source entity as individual fields. */
	ConnectionDefinition: string | null;
	/** JSON data representing secrets in a data source entity as individual fields. */
	ConnectionDefinitionSecrets: string | null;
	/** Enter additional information to describe the environment this data source targets and the purpose of this system. */
	Description: string | null;
	/** Choose the entity dataprovider for the entity datasource. */
	EntityDataProviderId: DevKit.Guid | null;
	/** Unique identifier of the Data Source Id */
	EntityDataSourceId: DevKit.Guid | null;
	/** For internal use only. */
	readonly EntityDataSourceIdUnique: DevKit.Guid | null;
	/** Entity Logical Name */
	EntityName2: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Name of this data source. This name appears in the data source drop-down when creating a new entity. */
	Name: string | null;
	/** Unique identifier for the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
}

const EntityDataSourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionDefinition: { logicalName: 'connectiondefinition' },
	ConnectionDefinitionSecrets: { logicalName: 'connectiondefinitionsecrets' },
	Description: { logicalName: 'description' },
	EntityDataProviderId: { schemaName: 'EntityDataProviderId', logicalName: '_entitydataproviderid_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	EntityDataSourceId: { logicalName: 'entitydatasourceid' },
	EntityDataSourceIdUnique: { logicalName: 'entitydatasourceidunique', readOnly: true },
	EntityName2: { logicalName: 'entityname' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Name: { logicalName: 'name' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
};

/**
 * EntityDataSource WebApi class for early-bound style coding
 * Usage: const entityDataSource = new EntityDataSourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityDataSourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityDataSourceApi>(entity, 'entitydatasource', 'entitydatasources', EntityDataSourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityDataSourceApi extends IEntityDataSourceApi { }

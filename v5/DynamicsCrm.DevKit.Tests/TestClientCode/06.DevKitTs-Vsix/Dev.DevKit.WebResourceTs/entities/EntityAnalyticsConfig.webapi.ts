/**
 * EntityAnalyticsConfig.webapi.ts - EntityAnalyticsConfig WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for EntityAnalyticsConfig
 * All fields return string representation of their values
 */
export interface IEntityAnalyticsConfigFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly EntityAnalyticsConfigId: string;
	readonly EntityDataSource: string;
	readonly IsEnabledForADLS: string;
	readonly IsEnabledForTimeSeries: string;
	readonly IsManaged: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly ParentEntityId: string;
	readonly ParentEntityLogicalName: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * EntityAnalyticsConfig WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IEntityAnalyticsConfigApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IEntityAnalyticsConfigFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier for entity instances */
	EntityAnalyticsConfigId: DevKit.Guid | null;
	/** For internal use only. */
	EntityDataSource: number | null;
	/** Azure Data Lake Storage is enabled for the selected entity */
	IsEnabledForADLS: boolean | null;
	/** Time series is enabled for the selected entity */
	IsEnabledForTimeSeries: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier for Entity associated with Entity Analytics Config. */
	ParentEntityId: DevKit.Guid | null;
	/** Entity Logical Name For Analytics */
	ParentEntityLogicalName: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of Entity Analytics Config. */
	readonly VersionNumber: number | null;
}

const EntityAnalyticsConfigFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	EntityAnalyticsConfigId: { logicalName: 'entityanalyticsconfigid' },
	EntityDataSource: { logicalName: 'entitydatasource', type: 'Integer' },
	IsEnabledForADLS: { logicalName: 'isenabledforadls', type: 'Boolean' },
	IsEnabledForTimeSeries: { logicalName: 'isenabledfortimeseries', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ParentEntityId: { schemaName: 'ParentEntityId', logicalName: '_parententityid_value', entityCollectionName: 'entities', entityLogicalName: 'entity' },
	ParentEntityLogicalName: { logicalName: 'parententitylogicalname' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * EntityAnalyticsConfig WebApi class for early-bound style coding
 * Usage: const entityAnalyticsConfig = new EntityAnalyticsConfigApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class EntityAnalyticsConfigApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IEntityAnalyticsConfigApi>(entity, 'entityanalyticsconfig', 'entityanalyticsconfigs', EntityAnalyticsConfigFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface EntityAnalyticsConfigApi extends IEntityAnalyticsConfigApi { }

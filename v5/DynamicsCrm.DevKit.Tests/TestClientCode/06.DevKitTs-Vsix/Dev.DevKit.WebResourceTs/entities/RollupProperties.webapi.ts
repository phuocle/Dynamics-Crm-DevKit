/**
 * RollupProperties.webapi.ts - RollupProperties WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RollupProperties
 * All fields return string representation of their values
 */
export interface IRollupPropertiesFormattedValue {
	readonly AggregateAttributeLogicalName: string;
	readonly AggregateEntityLogicalName: string;
	readonly AggregateEntityTypeCode: string;
	readonly AggregateFilterAttributes: string;
	readonly AggregateRelationshipName: string;
	readonly AggregateType: string;
	readonly AllowHierarchyOnSource: string;
	readonly BootstrapCurrentDepth: string;
	readonly BootstrapRetryCount: string;
	readonly BootstrapRollupAsyncJobId: string;
	readonly BootstrapStepNumber: string;
	readonly BootstrapTargetPointer: string;
	readonly DataType: string;
	readonly IncrementalRollupAsyncJobId: string;
	readonly InitialValueCalculationStatus: string;
	readonly IsActivityPartyIncluded: string;
	readonly LastCalculationTime_UtcDateAndTime: string;
	readonly RollupAttributeLogicalName: string;
	readonly RollupEntityBaseTableName: string;
	readonly RollupEntityLogicalName: string;
	readonly RollupEntityPrimaryKeyPhysicalName: string;
	readonly RollupEntityTypeCode: string;
	readonly RollupFilterAttributes: string;
	readonly RollupPropertiesId: string;
	readonly RollupStateAttributePhysicalName: string;
	readonly SourceHierarchicalRelationshipName: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly VersionNumber: string;
}

/**
 * RollupProperties WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRollupPropertiesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRollupPropertiesFormattedValue;
	/** Logical name of target attribute */
	readonly AggregateAttributeLogicalName: string | null;
	/** Logical name of target entity */
	readonly AggregateEntityLogicalName: string | null;
	/** Type code of aggregate entity */
	readonly AggregateEntityTypeCode: number | null;
	/** Filter criteria for target */
	readonly AggregateFilterAttributes: string | null;
	/** Relationship name of the source-target relationship. */
	readonly AggregateRelationshipName: string | null;
	/** Type of aggregation to perform */
	readonly AggregateType: number | null;
	/** Allow source entity to be hierarchical */
	readonly AllowHierarchyOnSource: boolean | null;
	/** Depth used for bootstrap calculations */
	readonly BootstrapCurrentDepth: number | null;
	/** Retry count for bootstrap */
	readonly BootstrapRetryCount: number | null;
	/** Unique identifier representing the mass calculate async job id. */
	readonly BootstrapRollupAsyncJobId: DevKit.Guid | null;
	/** Step number to start bootstrap execution */
	readonly BootstrapStepNumber: number | null;
	/** Target pointer used for bootstrap calculations */
	readonly BootstrapTargetPointer: number | null;
	/** Rollup field data type */
	readonly DataType: string | null;
	/** Unique identifier representing the calculate entity async job id. */
	readonly IncrementalRollupAsyncJobId: DevKit.Guid | null;
	/** Status of initial value calculation. */
	readonly InitialValueCalculationStatus: number | null;
	/** Flag indicating whether Activity Party is included */
	readonly IsActivityPartyIncluded: number | null;
	/** Last time when calculations were performed for this rollup field. */
	readonly LastCalculationTime_UtcDateAndTime: Date | null;
	/** Logical name of source attribute */
	readonly RollupAttributeLogicalName: string | null;
	/** Base Table Name Of Rollup Entity */
	readonly RollupEntityBaseTableName: string | null;
	/** Logical name of source entity */
	readonly RollupEntityLogicalName: string | null;
	/** Physical Name of Primary Key Of Rollup Entity */
	readonly RollupEntityPrimaryKeyPhysicalName: string | null;
	/** Type code of rollup entity */
	readonly RollupEntityTypeCode: number | null;
	/** Filter criteria for source */
	readonly RollupFilterAttributes: string | null;
	/** Unique identifier of the current record. */
	readonly RollupPropertiesId: DevKit.Guid | null;
	/** Physical Name of Rollup State Attribute */
	readonly RollupStateAttributePhysicalName: string | null;
	/** Relationship name of the source hierarchical relationship */
	readonly SourceHierarchicalRelationshipName: string | null;
	/** Status of the Rollup. */
	readonly StateCode: number | null;
	/** Additional information about status of the rollup properties. */
	readonly StatusCode: number | null;
	/** Version number of rollup. */
	readonly VersionNumber: number | null;
}

const RollupPropertiesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AggregateAttributeLogicalName: { logicalName: 'aggregateattributelogicalname', readOnly: true },
	AggregateEntityLogicalName: { logicalName: 'aggregateentitylogicalname', readOnly: true },
	AggregateEntityTypeCode: { logicalName: 'aggregateentitytypecode', readOnly: true, type: 'Integer' },
	AggregateFilterAttributes: { logicalName: 'aggregatefilterattributes', readOnly: true },
	AggregateRelationshipName: { logicalName: 'aggregaterelationshipname', readOnly: true },
	AggregateType: { logicalName: 'aggregatetype', readOnly: true, type: 'Integer' },
	AllowHierarchyOnSource: { logicalName: 'allowhierarchyonsource', readOnly: true, type: 'Boolean' },
	BootstrapCurrentDepth: { logicalName: 'bootstrapcurrentdepth', readOnly: true, type: 'Integer' },
	BootstrapRetryCount: { logicalName: 'bootstrapretrycount', readOnly: true, type: 'Integer' },
	BootstrapRollupAsyncJobId: { logicalName: 'bootstraprollupasyncjobid', readOnly: true },
	BootstrapStepNumber: { logicalName: 'bootstrapstepnumber', readOnly: true, type: 'Integer' },
	BootstrapTargetPointer: { logicalName: 'bootstraptargetpointer', readOnly: true, type: 'Integer' },
	DataType: { logicalName: 'datatype', readOnly: true },
	IncrementalRollupAsyncJobId: { logicalName: 'incrementalrollupasyncjobid', readOnly: true },
	InitialValueCalculationStatus: { logicalName: 'initialvaluecalculationstatus', readOnly: true, type: 'Integer' },
	IsActivityPartyIncluded: { logicalName: 'isactivitypartyincluded', readOnly: true, type: 'Integer' },
	LastCalculationTime_UtcDateAndTime: { logicalName: 'lastcalculationtime', readOnly: true, type: 'DateTime' },
	RollupAttributeLogicalName: { logicalName: 'rollupattributelogicalname', readOnly: true },
	RollupEntityBaseTableName: { logicalName: 'rollupentitybasetablename', readOnly: true },
	RollupEntityLogicalName: { logicalName: 'rollupentitylogicalname', readOnly: true },
	RollupEntityPrimaryKeyPhysicalName: { logicalName: 'rollupentityprimarykeyphysicalname', readOnly: true },
	RollupEntityTypeCode: { logicalName: 'rollupentitytypecode', readOnly: true, type: 'Integer' },
	RollupFilterAttributes: { logicalName: 'rollupfilterattributes', readOnly: true },
	RollupPropertiesId: { logicalName: 'rolluppropertiesid', readOnly: true },
	RollupStateAttributePhysicalName: { logicalName: 'rollupstateattributephysicalname', readOnly: true },
	SourceHierarchicalRelationshipName: { logicalName: 'sourcehierarchicalrelationshipname', readOnly: true },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', readOnly: true, type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RollupProperties WebApi class for early-bound style coding
 * Usage: const rollupProperties = new RollupPropertiesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RollupPropertiesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRollupPropertiesApi>(entity, 'rollupproperties', 'rolluppropertiescollection', RollupPropertiesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RollupPropertiesApi extends IRollupPropertiesApi { }

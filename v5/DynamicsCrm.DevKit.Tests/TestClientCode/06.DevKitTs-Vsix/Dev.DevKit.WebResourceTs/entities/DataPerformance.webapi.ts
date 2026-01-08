/**
 * DataPerformance.webapi.ts - DataPerformance WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DataPerformance
 * All fields return string representation of their values
 */
export interface IDataPerformanceFormattedValue {
	readonly AnyOptimizationApplied: string;
	readonly AnyOptimizationAvailable: string;
	readonly Component: string;
	readonly Count: string;
	readonly DataPerformanceId: string;
	readonly Entity2: string;
	readonly EstimatedOptimizationImpact: string;
	readonly ExecutionPeriod: string;
	readonly LastActionResult: string;
	readonly LastOptimizationDate_UtcDateAndTime: string;
	readonly MaxTime: string;
	readonly MedianTime: string;
	readonly MinTime: string;
	readonly Operation: string;
	readonly OptimizationStatus: string;
	readonly OptimizationStorage: string;
	readonly OrganizationId: string;
	readonly RealizedOptimizationImpact: string;
	readonly Solution: string;
	readonly Weight: string;
}

/**
 * DataPerformance WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDataPerformanceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDataPerformanceFormattedValue;
	/** An internal state which indicates whether at least one optimization is applied. */
	readonly AnyOptimizationApplied: boolean | null;
	/** An internal state which indicates whether at least one optimization is available for this record. */
	readonly AnyOptimizationAvailable: boolean | null;
	/** Name of the component */
	readonly Component: string | null;
	/** Number of times a queries were executed (Aggregated) */
	readonly Count: number | null;
	/** Unique identifier of the performance suggestion. */
	DataPerformanceId: DevKit.Guid | null;
	/** Primary entity */
	readonly Entity2: string | null;
	/** The expected average cost benefit of an optimization. */
	readonly EstimatedOptimizationImpact: number | null;
	/** The execution period for which the performance metrics are calculated. */
	readonly ExecutionPeriod: string | null;
	/** An internal state which shows the result of the last action that was taken on this record. */
	readonly LastActionResult: string | null;
	/** Last time an optimization was applied. */
	readonly LastOptimizationDate_UtcDateAndTime: Date | null;
	/** Maximum execution time in seconds. (Aggregated) */
	readonly MaxTime: number | null;
	/** Average execution time in seconds. (Aggregated) */
	readonly MedianTime: number | null;
	/** Minimum execution time in seconds. (Aggregated) */
	readonly MinTime: number | null;
	/** Data operation that triggered the query (Retrieve Multiple, etc.) */
	readonly Operation: string | null;
	/** Current optimization status of the record, showed to the customer. */
	readonly OptimizationStatus: string | null;
	/** Storage consumed by the optimization. (MB) */
	readonly OptimizationStorage: number | null;
	/** Unique identifier of the organization associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Actual performance change after taking an optimization action on the record. */
	readonly RealizedOptimizationImpact: string | null;
	/** Name of the solution that owns the component */
	readonly Solution: string | null;
	/** Query Weight of the component. Factored with the Optimization Impact to determine the overall importance of applying an optimization. (P2) */
	readonly Weight: number | null;
}

const DataPerformanceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AnyOptimizationApplied: { logicalName: 'anyoptimizationapplied', readOnly: true, type: 'Boolean' },
	AnyOptimizationAvailable: { logicalName: 'anyoptimizationavailable', readOnly: true, type: 'Boolean' },
	Component: { logicalName: 'component', readOnly: true },
	Count: { logicalName: 'count', readOnly: true, type: 'Integer' },
	DataPerformanceId: { logicalName: 'dataperformanceid' },
	Entity2: { logicalName: 'entity', readOnly: true },
	EstimatedOptimizationImpact: { logicalName: 'estimatedoptimizationimpact', readOnly: true, type: 'Number' },
	ExecutionPeriod: { logicalName: 'executionperiod', readOnly: true },
	LastActionResult: { logicalName: 'lastactionresult', readOnly: true },
	LastOptimizationDate_UtcDateAndTime: { logicalName: 'lastoptimizationdate', readOnly: true, type: 'DateTime' },
	MaxTime: { logicalName: 'maxtime', readOnly: true, type: 'Number' },
	MedianTime: { logicalName: 'mediantime', readOnly: true, type: 'Number' },
	MinTime: { logicalName: 'mintime', readOnly: true, type: 'Number' },
	Operation: { logicalName: 'operation', readOnly: true },
	OptimizationStatus: { logicalName: 'optimizationstatus', readOnly: true },
	OptimizationStorage: { logicalName: 'optimizationstorage', readOnly: true, type: 'Number' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	RealizedOptimizationImpact: { logicalName: 'realizedoptimizationimpact', readOnly: true },
	Solution: { logicalName: 'solution', readOnly: true },
	Weight: { logicalName: 'weight', readOnly: true, type: 'Number' },
};

/**
 * DataPerformance WebApi class for early-bound style coding
 * Usage: const dataPerformance = new DataPerformanceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DataPerformanceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDataPerformanceApi>(entity, 'dataperformance', 'dataperformances', DataPerformanceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DataPerformanceApi extends IDataPerformanceApi { }

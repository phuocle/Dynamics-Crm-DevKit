/**
 * RollupJob.webapi.ts - RollupJob WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for RollupJob
 * All fields return string representation of their values
 */
export interface IRollupJobFormattedValue {
	readonly DepthProcessed: string;
	readonly PostponeUntil_UtcDateAndTime: string;
	readonly RecordCreatedOn_UtcDateAndTime: string;
	readonly RegardingObjectId: string;
	readonly RetryCount: string;
	readonly RollupJobId2: string;
	readonly RollupPropertiesId: string;
	readonly SourceEntityTypeCode: string;
	readonly StateCode: string;
	readonly StatusCode: string;
}

/**
 * RollupJob WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRollupJobApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IRollupJobFormattedValue;
	readonly DepthProcessed: number | null;
	readonly PostponeUntil_UtcDateAndTime: Date | null;
	readonly RecordCreatedOn_UtcDateAndTime: Date | null;
	readonly RegardingObjectId: DevKit.Guid | null;
	readonly RetryCount: number | null;
	readonly RollupJobId2: number | null;
	readonly RollupPropertiesId: DevKit.Guid | null;
	readonly SourceEntityTypeCode: number | null;
	readonly StateCode: number | null;
	readonly StatusCode: number | null;
}

const RollupJobFieldConfig: DevKit.IWebApiFieldConfigMap = {
	DepthProcessed: { logicalName: 'depthprocessed', readOnly: true, type: 'Integer' },
	PostponeUntil_UtcDateAndTime: { logicalName: 'postponeuntil', readOnly: true, type: 'DateTime' },
	RecordCreatedOn_UtcDateAndTime: { logicalName: 'recordcreatedon', readOnly: true, type: 'DateTime' },
	RegardingObjectId: { logicalName: 'regardingobjectid', readOnly: true },
	RetryCount: { logicalName: 'retrycount', readOnly: true, type: 'Integer' },
	RollupJobId2: { logicalName: 'rollupjobid', readOnly: true, type: 'Integer' },
	RollupPropertiesId: { schemaName: 'RollupPropertiesId', logicalName: '_rolluppropertiesid_value', readOnly: true, entityCollectionName: 'rolluppropertiescollection', entityLogicalName: 'rollupproperties' },
	SourceEntityTypeCode: { logicalName: 'sourceentitytypecode', readOnly: true, type: 'Integer' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', readOnly: true, type: 'Integer' },
};

/**
 * RollupJob WebApi class for early-bound style coding
 * Usage: const rollupJob = new RollupJobApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RollupJobApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRollupJobApi>(entity, 'rollupjob', 'rollupjobs', RollupJobFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RollupJobApi extends IRollupJobApi { }

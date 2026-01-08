/**
 * TraceRegarding.webapi.ts - TraceRegarding WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TraceRegarding
 * All fields return string representation of their values
 */
export interface ITraceRegardingFormattedValue {
	readonly RegardingObjectId: string;
	readonly RegardingObjectOwnerId: string;
	readonly RegardingObjectOwningBusinessUnit: string;
	readonly TraceRegardingId: string;
}

/**
 * TraceRegarding WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITraceRegardingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITraceRegardingFormattedValue;
	/** Unique identifier of the regarding object. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the user or team who owns the regarding object. */
	RegardingObjectOwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the regarding object. */
	readonly RegardingObjectOwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the trace-regarding record. */
	TraceRegardingId: DevKit.Guid | null;
}

const TraceRegardingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'emailserverprofiles', entityLogicalName: 'emailserverprofile' },
	RegardingObjectOwnerId: { schemaName: 'RegardingObjectOwnerId', logicalName: '_regardingobjectownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RegardingObjectOwningBusinessUnit: { schemaName: 'RegardingObjectOwningBusinessUnit', logicalName: '_regardingobjectowningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	TraceRegardingId: { logicalName: 'traceregardingid' },
};

/**
 * TraceRegarding WebApi class for early-bound style coding
 * Usage: const traceRegarding = new TraceRegardingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TraceRegardingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITraceRegardingApi>(entity, 'traceregarding', 'traceregardings', TraceRegardingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TraceRegardingApi extends ITraceRegardingApi { }

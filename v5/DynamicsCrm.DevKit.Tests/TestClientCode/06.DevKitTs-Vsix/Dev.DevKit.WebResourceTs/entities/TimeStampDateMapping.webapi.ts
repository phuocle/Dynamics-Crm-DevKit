/**
 * TimeStampDateMapping.webapi.ts - TimeStampDateMapping WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TimeStampDateMapping
 * All fields return string representation of their values
 */
export interface ITimeStampDateMappingFormattedValue {
	readonly Date_UtcDateOnly: string;
	readonly TimeStamp: string;
	readonly TimeStampDateMappingId: string;
}

/**
 * TimeStampDateMapping WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITimeStampDateMappingApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITimeStampDateMappingFormattedValue;
	readonly Date_UtcDateOnly: Date | null;
	readonly TimeStamp: number | null;
	TimeStampDateMappingId: DevKit.Guid | null;
}

const TimeStampDateMappingFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Date_UtcDateOnly: { logicalName: 'date', readOnly: true, type: 'DateTime' },
	TimeStamp: { logicalName: 'timestamp', readOnly: true, type: 'Integer' },
	TimeStampDateMappingId: { logicalName: 'timestampdatemappingid' },
};

/**
 * TimeStampDateMapping WebApi class for early-bound style coding
 * Usage: const timeStampDateMapping = new TimeStampDateMappingApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TimeStampDateMappingApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITimeStampDateMappingApi>(entity, 'timestampdatemapping', 'timestampdatemappings', TimeStampDateMappingFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TimeStampDateMappingApi extends ITimeStampDateMappingApi { }

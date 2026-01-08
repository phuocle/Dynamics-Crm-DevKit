/**
 * RecordCountSnapshot.webapi.ts - RecordCountSnapshot WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RecordCountSnapshot WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRecordCountSnapshotApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRecordCountSnapshotApi, 'FormattedValue'>]: string };
	readonly Count: number | null;
	readonly LastUpdated_UtcDateOnly: Date | null;
	readonly ObjectTypeCode: number | null;
	readonly RecordCountSnapshotId: DevKit.Guid | null;
	readonly VersionNumberConverted: number | null;
}

const RecordCountSnapshotFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Count: { logicalName: 'count', readOnly: true, type: 'Integer' },
	LastUpdated_UtcDateOnly: { logicalName: 'lastupdated', readOnly: true, type: 'DateTime' },
	ObjectTypeCode: { logicalName: 'objecttypecode', readOnly: true, type: 'Integer' },
	RecordCountSnapshotId: { logicalName: 'recordcountsnapshotid', readOnly: true },
	VersionNumberConverted: { logicalName: 'versionnumberconverted', readOnly: true, type: 'Integer' },
};

/**
 * RecordCountSnapshot WebApi class for early-bound style coding
 * Usage: const recordCountSnapshot = new RecordCountSnapshotApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RecordCountSnapshotApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRecordCountSnapshotApi>(entity, 'recordcountsnapshot', 'recordcountsnapshots', RecordCountSnapshotFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RecordCountSnapshotApi extends IRecordCountSnapshotApi { }

/**
 * QueueItemCount.webapi.ts - QueueItemCount WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * QueueItemCount WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IQueueItemCountApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IQueueItemCountApi, 'FormattedValue'>]: string };
	readonly QueueId: DevKit.Guid | null;
	readonly QueueItemCountId: DevKit.Guid | null;
}

const QueueItemCountFieldConfig: DevKit.IWebApiFieldConfigMap = {
	QueueId: { logicalName: 'queueid', readOnly: true },
	QueueItemCountId: { logicalName: 'queueitemcountid', readOnly: true },
};

/**
 * QueueItemCount WebApi class for early-bound style coding
 * Usage: const queueItemCount = new QueueItemCountApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class QueueItemCountApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IQueueItemCountApi>(entity, 'queueitemcount', 'queueitemcounts', QueueItemCountFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface QueueItemCountApi extends IQueueItemCountApi { }

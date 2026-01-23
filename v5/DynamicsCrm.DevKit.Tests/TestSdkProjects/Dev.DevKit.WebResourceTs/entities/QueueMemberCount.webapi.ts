/**
 * QueueMemberCount.webapi.ts - QueueMemberCount WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * QueueMemberCount WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IQueueMemberCountApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IQueueMemberCountApi, 'FormattedValue'>]: string };
	readonly QueueId: DevKit.Guid | null;
	readonly QueueMemberCountId: DevKit.Guid | null;
}

const QueueMemberCountFieldConfig: DevKit.IWebApiFieldConfigMap = {
	QueueId: { logicalName: 'queueid', readOnly: true },
	QueueMemberCountId: { logicalName: 'queuemembercountid', readOnly: true },
};

/**
 * QueueMemberCount WebApi class for early-bound style coding
 * Usage: const queueMemberCount = new QueueMemberCountApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class QueueMemberCountApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IQueueMemberCountApi>(entity, 'queuemembercount', 'queuemembercounts', QueueMemberCountFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface QueueMemberCountApi extends IQueueMemberCountApi { }

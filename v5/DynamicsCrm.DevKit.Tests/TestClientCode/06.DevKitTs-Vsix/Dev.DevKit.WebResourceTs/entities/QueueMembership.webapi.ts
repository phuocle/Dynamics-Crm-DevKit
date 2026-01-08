/**
 * QueueMembership.webapi.ts - QueueMembership WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for QueueMembership
 * All fields return string representation of their values
 */
export interface IQueueMembershipFormattedValue {
	readonly QueueId: string;
	readonly QueueMembershipId: string;
	readonly SystemUserId: string;
	readonly VersionNumber: string;
}

/**
 * QueueMembership WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IQueueMembershipApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IQueueMembershipFormattedValue;
	readonly QueueId: DevKit.Guid | null;
	/** Unique identifier of the queue membership. */
	QueueMembershipId: DevKit.Guid | null;
	readonly SystemUserId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const QueueMembershipFieldConfig: DevKit.IWebApiFieldConfigMap = {
	QueueId: { logicalName: 'queueid', readOnly: true },
	QueueMembershipId: { logicalName: 'queuemembershipid' },
	SystemUserId: { logicalName: 'systemuserid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * QueueMembership WebApi class for early-bound style coding
 * Usage: const queueMembership = new QueueMembershipApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class QueueMembershipApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IQueueMembershipApi>(entity, 'queuemembership', '', QueueMembershipFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface QueueMembershipApi extends IQueueMembershipApi { }

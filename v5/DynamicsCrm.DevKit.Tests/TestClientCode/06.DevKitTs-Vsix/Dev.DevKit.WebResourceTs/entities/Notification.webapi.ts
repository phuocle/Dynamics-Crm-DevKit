/**
 * Notification.webapi.ts - Notification WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Notification
 * All fields return string representation of their values
 */
export interface INotificationFormattedValue {
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnString: string;
	readonly EventData: string;
	readonly EventId: string;
	readonly NotificationId: string;
	readonly NotificationNumber: string;
	readonly OrganizationId: string;
}

/**
 * Notification WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface INotificationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: INotificationFormattedValue;
	/** For internal use only. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	readonly CreatedOnString: string | null;
	/** For internal use only. */
	EventData: string | null;
	/** For internal use only. */
	EventId: number | null;
	/** For internal use only. */
	NotificationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly NotificationNumber: number | null;
	/** For internal use only. */
	OrganizationId: DevKit.Guid | null;
}

const NotificationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnString: { logicalName: 'createdonstring', readOnly: true },
	EventData: { logicalName: 'eventdata' },
	EventId: { logicalName: 'eventid', type: 'Integer' },
	NotificationId: { logicalName: 'notificationid' },
	NotificationNumber: { logicalName: 'notificationnumber', readOnly: true, type: 'Integer' },
	OrganizationId: { logicalName: 'organizationid' },
};

/**
 * Notification WebApi class for early-bound style coding
 * Usage: const notification = new NotificationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class NotificationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<INotificationApi>(entity, 'notification', 'notifications', NotificationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface NotificationApi extends INotificationApi { }

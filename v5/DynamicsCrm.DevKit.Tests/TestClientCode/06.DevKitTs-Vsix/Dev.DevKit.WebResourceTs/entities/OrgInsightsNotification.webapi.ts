/**
 * OrgInsightsNotification.webapi.ts - OrgInsightsNotification WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for OrgInsightsNotification
 * All fields return string representation of their values
 */
export interface IOrgInsightsNotificationFormattedValue {
	readonly CreatedOn_UtcDateAndTime: string;
	readonly InternalName: string;
	readonly JsonData: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OrgInsightsNotificationId: string;
}

/**
 * OrgInsightsNotification WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOrgInsightsNotificationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IOrgInsightsNotificationFormattedValue;
	/** Date and time when the organization insights notification was created */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Name of the notification which is used for retrieving the data */
	InternalName: string | null;
	/** Notification Data in Json format */
	readonly JsonData: string | null;
	/** Legend Name used while displaying the notification */
	Name: string | null;
	/** Unique identifier of the organization associated with the record */
	readonly OrganizationId: DevKit.Guid | null;
	OrgInsightsNotificationId: DevKit.Guid | null;
}

const OrgInsightsNotificationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	InternalName: { logicalName: 'internalname' },
	JsonData: { logicalName: 'jsondata', readOnly: true },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OrgInsightsNotificationId: { logicalName: 'orginsightsnotificationid' },
};

/**
 * OrgInsightsNotification WebApi class for early-bound style coding
 * Usage: const orgInsightsNotification = new OrgInsightsNotificationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OrgInsightsNotificationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOrgInsightsNotificationApi>(entity, 'orginsightsnotification', 'orginsightsnotifications', OrgInsightsNotificationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OrgInsightsNotificationApi extends IOrgInsightsNotificationApi { }

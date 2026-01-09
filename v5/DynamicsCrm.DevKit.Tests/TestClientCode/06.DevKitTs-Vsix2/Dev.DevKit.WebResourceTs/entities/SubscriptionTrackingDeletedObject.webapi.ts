/**
 * SubscriptionTrackingDeletedObject.webapi.ts - SubscriptionTrackingDeletedObject WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SubscriptionTrackingDeletedObject WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionTrackingDeletedObjectApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISubscriptionTrackingDeletedObjectApi, 'FormattedValue'>]: string };
	/** Shows the date and time when the record was created in CRM. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	CrmCreatedOn_UtcDateAndTime: Date | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	DeleteTime_UtcDateAndTime: Date | null;
	/** Indicates that the record is deleted by Archival or not */
	IsArchivalDelete: boolean | null;
	/** Indicates whether solution aware entity record is logical delete or not */
	IsLogicalDelete: boolean | null;
	readonly ObjectId: DevKit.Guid | null;
	readonly TimeStamp: number | null;
}

const SubscriptionTrackingDeletedObjectFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CrmCreatedOn_UtcDateAndTime: { logicalName: 'crmcreatedon', type: 'DateTime' },
	DeleteTime_UtcDateAndTime: { logicalName: 'deletetime', type: 'DateTime' },
	IsArchivalDelete: { logicalName: 'isarchivaldelete', type: 'Boolean' },
	IsLogicalDelete: { logicalName: 'islogicaldelete', type: 'Boolean' },
	ObjectId: { logicalName: 'objectid', readOnly: true },
	TimeStamp: { logicalName: 'timestamp', readOnly: true, type: 'Integer' },
};

/**
 * SubscriptionTrackingDeletedObject WebApi class for early-bound style coding
 * Usage: const subscriptionTrackingDeletedObject = new SubscriptionTrackingDeletedObjectApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionTrackingDeletedObjectApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionTrackingDeletedObjectApi>(entity, 'subscriptiontrackingdeletedobject', 'subscriptiontrackingdeletedobjects', SubscriptionTrackingDeletedObjectFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionTrackingDeletedObjectApi extends ISubscriptionTrackingDeletedObjectApi { }

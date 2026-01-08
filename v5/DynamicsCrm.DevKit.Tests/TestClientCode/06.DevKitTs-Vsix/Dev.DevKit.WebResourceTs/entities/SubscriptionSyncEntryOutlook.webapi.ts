/**
 * SubscriptionSyncEntryOutlook.webapi.ts - SubscriptionSyncEntryOutlook WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SubscriptionSyncEntryOutlook
 * All fields return string representation of their values
 */
export interface ISubscriptionSyncEntryOutlookFormattedValue {
	readonly ObjectId: string;
	readonly ObjectTypeCode: string;
	readonly SubscriptionId: string;
	readonly SyncState: string;
	readonly VersionNumber: string;
}

/**
 * SubscriptionSyncEntryOutlook WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionSyncEntryOutlookApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISubscriptionSyncEntryOutlookFormattedValue;
	/** Object Id */
	ObjectId: DevKit.Guid | null;
	/** Entity object type code */
	ObjectTypeCode: number | null;
	/** Subscription Id */
	SubscriptionId: DevKit.Guid | null;
	/** Sync state */
	SyncState: number | null;
	/** Version number */
	VersionNumber: number | null;
}

const SubscriptionSyncEntryOutlookFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ObjectId: { logicalName: 'objectid' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	SubscriptionId: { logicalName: 'subscriptionid' },
	SyncState: { logicalName: 'syncstate', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', type: 'Integer' },
};

/**
 * SubscriptionSyncEntryOutlook WebApi class for early-bound style coding
 * Usage: const subscriptionSyncEntryOutlook = new SubscriptionSyncEntryOutlookApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionSyncEntryOutlookApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionSyncEntryOutlookApi>(entity, 'subscriptionsyncentryoutlook', 'subscriptionsyncentriesoutlook', SubscriptionSyncEntryOutlookFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionSyncEntryOutlookApi extends ISubscriptionSyncEntryOutlookApi { }

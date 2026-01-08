/**
 * SubscriptionSyncEntryOffline.webapi.ts - SubscriptionSyncEntryOffline WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SubscriptionSyncEntryOffline WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionSyncEntryOfflineApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISubscriptionSyncEntryOfflineApi, 'FormattedValue'>]: string };
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

const SubscriptionSyncEntryOfflineFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ObjectId: { logicalName: 'objectid' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	SubscriptionId: { logicalName: 'subscriptionid' },
	SyncState: { logicalName: 'syncstate', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', type: 'Integer' },
};

/**
 * SubscriptionSyncEntryOffline WebApi class for early-bound style coding
 * Usage: const subscriptionSyncEntryOffline = new SubscriptionSyncEntryOfflineApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionSyncEntryOfflineApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionSyncEntryOfflineApi>(entity, 'subscriptionsyncentryoffline', 'subscriptionsyncentriesoffline', SubscriptionSyncEntryOfflineFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionSyncEntryOfflineApi extends ISubscriptionSyncEntryOfflineApi { }

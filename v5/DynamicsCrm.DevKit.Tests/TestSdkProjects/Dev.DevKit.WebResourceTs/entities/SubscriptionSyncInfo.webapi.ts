/**
 * SubscriptionSyncInfo.webapi.ts - SubscriptionSyncInfo WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SubscriptionSyncInfo WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionSyncInfoApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISubscriptionSyncInfoApi, 'FormattedValue'>]: string };
	/** Client (subscriber) version number. */
	ClientVersion: string | null;
	/** For internal use only. */
	DataSize: number | null;
	/** For internal use only. */
	DeleteObjectCount: number | null;
	/** For internal use only. */
	readonly EndTime_UtcDateOnly: Date | null;
	/** For internal use only. */
	InsertObjectCount: number | null;
	/** For internal use only. */
	readonly StartTime_UtcDateOnly: Date | null;
	/** For internal use only. */
	SubscriptionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SubscriptionSyncInfoId2: number | null;
	/** For internal use only. */
	SyncResult: boolean | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const SubscriptionSyncInfoFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClientVersion: { logicalName: 'clientversion' },
	DataSize: { logicalName: 'datasize', type: 'Integer' },
	DeleteObjectCount: { logicalName: 'deleteobjectcount', type: 'Integer' },
	EndTime_UtcDateOnly: { logicalName: 'endtime', readOnly: true, type: 'DateTime' },
	InsertObjectCount: { logicalName: 'insertobjectcount', type: 'Integer' },
	StartTime_UtcDateOnly: { logicalName: 'starttime', readOnly: true, type: 'DateTime' },
	SubscriptionId: { schemaName: 'SubscriptionId', logicalName: '_subscriptionid_value', entityCollectionName: 'subscriptions', entityLogicalName: 'subscription' },
	SubscriptionSyncInfoId2: { logicalName: 'subscriptionsyncinfoid', readOnly: true, type: 'Integer' },
	SyncResult: { logicalName: 'syncresult', type: 'Boolean' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * SubscriptionSyncInfo WebApi class for early-bound style coding
 * Usage: const subscriptionSyncInfo = new SubscriptionSyncInfoApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionSyncInfoApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionSyncInfoApi>(entity, 'subscriptionsyncinfo', 'subscriptionsyncinfos', SubscriptionSyncInfoFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionSyncInfoApi extends ISubscriptionSyncInfoApi { }

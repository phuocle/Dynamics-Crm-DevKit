/**
 * SubscriptionStatisticsOffline.webapi.ts - SubscriptionStatisticsOffline WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SubscriptionStatisticsOffline
 * All fields return string representation of their values
 */
export interface ISubscriptionStatisticsOfflineFormattedValue {
	readonly FullSyncRequired: string;
	readonly ObjectTypeCode: string;
	readonly SubscriptionId: string;
}

/**
 * SubscriptionStatisticsOffline WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionStatisticsOfflineApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISubscriptionStatisticsOfflineFormattedValue;
	/** Is full sync required or not */
	FullSyncRequired: boolean | null;
	/** Entity object type code */
	ObjectTypeCode: number | null;
	/** Subscription Id */
	SubscriptionId: DevKit.Guid | null;
}

const SubscriptionStatisticsOfflineFieldConfig: DevKit.IWebApiFieldConfigMap = {
	FullSyncRequired: { logicalName: 'fullsyncrequired', type: 'Boolean' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	SubscriptionId: { logicalName: 'subscriptionid' },
};

/**
 * SubscriptionStatisticsOffline WebApi class for early-bound style coding
 * Usage: const subscriptionStatisticsOffline = new SubscriptionStatisticsOfflineApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionStatisticsOfflineApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionStatisticsOfflineApi>(entity, 'subscriptionstatisticsoffline', 'subscriptionstatisticsoffline', SubscriptionStatisticsOfflineFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionStatisticsOfflineApi extends ISubscriptionStatisticsOfflineApi { }

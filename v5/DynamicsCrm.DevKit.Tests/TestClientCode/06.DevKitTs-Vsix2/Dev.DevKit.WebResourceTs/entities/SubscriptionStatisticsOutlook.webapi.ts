/**
 * SubscriptionStatisticsOutlook.webapi.ts - SubscriptionStatisticsOutlook WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SubscriptionStatisticsOutlook WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionStatisticsOutlookApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISubscriptionStatisticsOutlookApi, 'FormattedValue'>]: string };
	/** Is full sync required or not */
	FullSyncRequired: boolean | null;
	/** Entity object type code */
	ObjectTypeCode: number | null;
	/** Subscription Id */
	SubscriptionId: DevKit.Guid | null;
}

const SubscriptionStatisticsOutlookFieldConfig: DevKit.IWebApiFieldConfigMap = {
	FullSyncRequired: { logicalName: 'fullsyncrequired', type: 'Boolean' },
	ObjectTypeCode: { logicalName: 'objecttypecode', type: 'Integer' },
	SubscriptionId: { logicalName: 'subscriptionid' },
};

/**
 * SubscriptionStatisticsOutlook WebApi class for early-bound style coding
 * Usage: const subscriptionStatisticsOutlook = new SubscriptionStatisticsOutlookApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionStatisticsOutlookApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionStatisticsOutlookApi>(entity, 'subscriptionstatisticsoutlook', 'subscriptionstatisticsoutlook', SubscriptionStatisticsOutlookFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionStatisticsOutlookApi extends ISubscriptionStatisticsOutlookApi { }

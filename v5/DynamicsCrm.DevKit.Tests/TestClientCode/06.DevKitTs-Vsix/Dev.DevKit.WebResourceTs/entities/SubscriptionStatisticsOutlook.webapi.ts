/**
 * SubscriptionStatisticsOutlook.webapi.ts - SubscriptionStatisticsOutlook WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SubscriptionStatisticsOutlook
 * All fields return string representation of their values
 */
export interface ISubscriptionStatisticsOutlookFormattedValue {
	readonly FullSyncRequired: string;
	readonly ObjectTypeCode: string;
	readonly SubscriptionId: string;
}

/**
 * SubscriptionStatisticsOutlook WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionStatisticsOutlookApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISubscriptionStatisticsOutlookFormattedValue;
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

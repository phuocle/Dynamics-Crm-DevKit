/**
 * SubscriptionManuallyTrackedObject.webapi.ts - SubscriptionManuallyTrackedObject WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SubscriptionManuallyTrackedObject WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionManuallyTrackedObjectApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISubscriptionManuallyTrackedObjectApi, 'FormattedValue'>]: string };
	/** Unique identifier of the object with which the subscription is associated. */
	ObjectId: DevKit.Guid | null;
	/** Unique identifier of the subscription. */
	SubscriptionId: DevKit.Guid | null;
	/** For internal use only. */
	SubscriptionManuallyTrackedObjectId: DevKit.Guid | null;
	/** Information that specifies if the object is tracked. */
	Track: boolean | null;
	/** Version number of the subscription manually tracked object. */
	readonly VersionNumber: number | null;
}

const SubscriptionManuallyTrackedObjectFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ObjectId: { logicalName: 'objectid' },
	SubscriptionId: { logicalName: 'subscriptionid' },
	SubscriptionManuallyTrackedObjectId: { logicalName: 'subscriptionmanuallytrackedobjectid' },
	Track: { logicalName: 'track', type: 'Boolean' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SubscriptionManuallyTrackedObject WebApi class for early-bound style coding
 * Usage: const subscriptionManuallyTrackedObject = new SubscriptionManuallyTrackedObjectApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionManuallyTrackedObjectApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionManuallyTrackedObjectApi>(entity, 'subscriptionmanuallytrackedobject', 'subscriptionmanuallytrackedobjects', SubscriptionManuallyTrackedObjectFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionManuallyTrackedObjectApi extends ISubscriptionManuallyTrackedObjectApi { }

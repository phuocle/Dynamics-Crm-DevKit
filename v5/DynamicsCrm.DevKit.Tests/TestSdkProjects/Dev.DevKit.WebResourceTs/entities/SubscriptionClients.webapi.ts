/**
 * SubscriptionClients.webapi.ts - SubscriptionClients WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SubscriptionClients WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionClientsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISubscriptionClientsApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ClientId: DevKit.Guid | null;
	/** For internal use only. */
	readonly IsPrimaryClient: boolean | null;
	/** For internal use only. */
	MachineName: string | null;
	/** For internal use only. */
	readonly SubscriptionClientId: DevKit.Guid | null;
	/** For internal use only. */
	SubscriptionId: DevKit.Guid | null;
}

const SubscriptionClientsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClientId: { logicalName: 'clientid', readOnly: true },
	IsPrimaryClient: { logicalName: 'isprimaryclient', readOnly: true, type: 'Boolean' },
	MachineName: { logicalName: 'machinename' },
	SubscriptionClientId: { logicalName: 'subscriptionclientid', readOnly: true },
	SubscriptionId: { logicalName: 'subscriptionid' },
};

/**
 * SubscriptionClients WebApi class for early-bound style coding
 * Usage: const subscriptionClients = new SubscriptionClientsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionClientsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionClientsApi>(entity, 'subscriptionclients', 'subscriptionclientses', SubscriptionClientsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionClientsApi extends ISubscriptionClientsApi { }

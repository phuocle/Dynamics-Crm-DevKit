/**
 * Subscription.webapi.ts - Subscription WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Subscription
 * All fields return string representation of their values
 */
export interface ISubscriptionFormattedValue {
	readonly ClientVersion: string;
	readonly CompletedSyncStartedOn_UtcDateOnly: string;
	readonly CompletedSyncVersionNumber: string;
	readonly LastSyncStartedOn_UtcDateOnly: string;
	readonly MachineName: string;
	readonly ReInitialize: string;
	readonly ResetForCreate: string;
	readonly SubscriptionId: string;
	readonly SubscriptionType: string;
	readonly SyncEntryTableName: string;
	readonly SystemUserId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
}

/**
 * Subscription WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISubscriptionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISubscriptionFormattedValue;
	/** Client Version. */
	readonly ClientVersion: string | null;
	/** UTC time when the last successfully completed synchronization was started. This is the difference between local time and standard Coordinated Universal Time. */
	readonly CompletedSyncStartedOn_UtcDateOnly: Date | null;
	/** Database time stamp at the start time of the last successfully completed synchronization. */
	readonly CompletedSyncVersionNumber: number | null;
	/** For internal use only. */
	readonly LastSyncStartedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	MachineName: string | null;
	/** Database time stamp at the start time of the last successfully completed synchronization. */
	ReInitialize: boolean | null;
	/** For internal use only. */
	ResetForCreate: boolean | null;
	/** For internal use only. */
	readonly SubscriptionId: DevKit.Guid | null;
	/** For internal use only. */
	SubscriptionType: number | null;
	/** For internal use only. */
	readonly SyncEntryTableName: string | null;
	/** For internal use only. */
	readonly SystemUserId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const SubscriptionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClientVersion: { logicalName: 'clientversion', readOnly: true },
	CompletedSyncStartedOn_UtcDateOnly: { logicalName: 'completedsyncstartedon', readOnly: true, type: 'DateTime' },
	CompletedSyncVersionNumber: { logicalName: 'completedsyncversionnumber', readOnly: true, type: 'Integer' },
	LastSyncStartedOn_UtcDateOnly: { logicalName: 'lastsyncstartedon', readOnly: true, type: 'DateTime' },
	MachineName: { logicalName: 'machinename' },
	ReInitialize: { logicalName: 'reinitialize', type: 'Boolean' },
	ResetForCreate: { logicalName: 'resetforcreate', type: 'Boolean' },
	SubscriptionId: { logicalName: 'subscriptionid', readOnly: true },
	SubscriptionType: { logicalName: 'subscriptiontype', type: 'Integer' },
	SyncEntryTableName: { logicalName: 'syncentrytablename', readOnly: true },
	SystemUserId: { logicalName: 'systemuserid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * Subscription WebApi class for early-bound style coding
 * Usage: const subscription = new SubscriptionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SubscriptionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISubscriptionApi>(entity, 'subscription', 'subscriptions', SubscriptionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SubscriptionApi extends ISubscriptionApi { }

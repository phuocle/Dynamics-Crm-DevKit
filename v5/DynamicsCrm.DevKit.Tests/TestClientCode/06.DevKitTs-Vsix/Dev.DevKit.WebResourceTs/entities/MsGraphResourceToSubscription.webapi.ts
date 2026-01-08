/**
 * MsGraphResourceToSubscription.webapi.ts - MsGraphResourceToSubscription WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for MsGraphResourceToSubscription
 * All fields return string representation of their values
 */
export interface IMsGraphResourceToSubscriptionFormattedValue {
	readonly CreatedInGraphOn_TimezoneDateAndTime: string;
	readonly ImportSequenceNumber: string;
	readonly MsGraphResourceToSubscriptionId: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly ResourceId: string;
	readonly ResourceType: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SubscriptionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * MsGraphResourceToSubscription WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMsGraphResourceToSubscriptionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IMsGraphResourceToSubscriptionFormattedValue;
	/** For internal use only. Date and time when the record was created in Graph. */
	CreatedInGraphOn_TimezoneDateAndTime: Date | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier for entity instances */
	MsGraphResourceToSubscriptionId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Resource Id */
	ResourceId: string | null;
	/** For internal use only. Shows the different options for resource type. */
	ResourceType: number | null;
	/** Status of the Ms Graph Resource To Subscription */
	statecode: number | null;
	/** Reason for the status of the Ms Graph Resource To Subscription */
	statuscode: number | null;
	/** Subscription Id */
	SubscriptionId: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const MsGraphResourceToSubscriptionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedInGraphOn_TimezoneDateAndTime: { logicalName: 'createdingraphon', type: 'DateTime' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MsGraphResourceToSubscriptionId: { logicalName: 'msgraphresourcetosubscriptionid' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	ResourceId: { logicalName: 'resourceid' },
	ResourceType: { logicalName: 'resourcetype', type: 'Integer' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SubscriptionId: { logicalName: 'subscriptionid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * MsGraphResourceToSubscription WebApi class for early-bound style coding
 * Usage: const msGraphResourceToSubscription = new MsGraphResourceToSubscriptionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MsGraphResourceToSubscriptionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMsGraphResourceToSubscriptionApi>(entity, 'msgraphresourcetosubscription', 'msgraphresourcetosubscriptions', MsGraphResourceToSubscriptionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MsGraphResourceToSubscriptionApi extends IMsGraphResourceToSubscriptionApi { }

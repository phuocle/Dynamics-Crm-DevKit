/**
 * ActivityParty.webapi.ts - ActivityParty WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ActivityParty
 * All fields return string representation of their values
 */
export interface IActivityPartyFormattedValue {
	readonly ActivityId: string;
	readonly ActivityPartyId: string;
	readonly AddressUsed: string;
	readonly AddressUsedEmailColumnNumber: string;
	readonly DoNotEmail: string;
	readonly DoNotFax: string;
	readonly DoNotPhone: string;
	readonly DoNotPostalMail: string;
	readonly Effort: string;
	readonly ExchangeEntryId: string;
	readonly ExternalId: string;
	readonly ExternalIdType: string;
	readonly InstanceTypeCode: string;
	readonly IsPartyDeleted: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningUser: string;
	readonly ParticipationTypeMask: string;
	readonly PartyId: string;
	readonly ScheduledEnd_UtcDateOnly: string;
	readonly ScheduledStart_UtcDateOnly: string;
	readonly UnresolvedPartyName: string;
	readonly VersionNumber: string;
}

/**
 * ActivityParty WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IActivityPartyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IActivityPartyFormattedValue;
	/** Unique identifier of the activity associated with the activity party. (A "party" is any person who is associated with an activity.) */
	ActivityId: DevKit.Guid | null;
	/** Unique identifier of the activity party. */
	ActivityPartyId: DevKit.Guid | null;
	/** Email address to which an email is delivered, and which is associated with the target entity. */
	AddressUsed: string | null;
	/** Email address column number from associated party. */
	readonly AddressUsedEmailColumnNumber: number | null;
	/** Information about whether to allow sending email to the activity party. */
	readonly DoNotEmail: boolean | null;
	/** Information about whether to allow sending faxes to the activity party. */
	readonly DoNotFax: boolean | null;
	/** Information about whether to allow phone calls to the lead. */
	readonly DoNotPhone: boolean | null;
	/** Information about whether to allow sending postal mail to the lead. */
	readonly DoNotPostalMail: boolean | null;
	/** Amount of effort used by the resource in a service appointment activity. */
	Effort: number | null;
	/** For internal use only. */
	ExchangeEntryId: string | null;
	/** The external id used when the party does not have an email address. */
	ExternalId: string | null;
	/** The external id type used when the party does not have an email address. */
	ExternalIdType: string | null;
	/** Type of instance of a recurring series. */
	readonly InstanceTypeCode: number | null;
	/** Information about whether the underlying entity record is deleted. */
	readonly IsPartyDeleted: boolean | null;
	/** Unique identifier of the user or team who owns the activity_party. */
	readonly OwnerId: DevKit.Guid | null;
	readonly OwningBusinessUnit: DevKit.Guid | null;
	readonly OwningUser: DevKit.Guid | null;
	/** Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner. */
	ParticipationTypeMask: number | null;
	/** Unique identifier of the party associated with the activity. */
	PartyId: DevKit.Guid | null;
	/** Scheduled end time of the activity. */
	readonly ScheduledEnd_UtcDateOnly: Date | null;
	/** Scheduled start time of the activity. */
	readonly ScheduledStart_UtcDateOnly: Date | null;
	/** The name of the party to be used when the party is not resolved to an entity. */
	UnresolvedPartyName: string | null;
	readonly VersionNumber: number | null;
}

const ActivityPartyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityId: { schemaName: 'ActivityId', logicalName: '_activityid_value', entityCollectionName: 'activitypointers', entityLogicalName: 'activitypointer' },
	ActivityPartyId: { logicalName: 'activitypartyid' },
	AddressUsed: { logicalName: 'addressused' },
	AddressUsedEmailColumnNumber: { logicalName: 'addressusedemailcolumnnumber', readOnly: true, type: 'Integer' },
	DoNotEmail: { logicalName: 'donotemail', readOnly: true, type: 'Boolean' },
	DoNotFax: { logicalName: 'donotfax', readOnly: true, type: 'Boolean' },
	DoNotPhone: { logicalName: 'donotphone', readOnly: true, type: 'Boolean' },
	DoNotPostalMail: { logicalName: 'donotpostalmail', readOnly: true, type: 'Boolean' },
	Effort: { logicalName: 'effort', type: 'Number' },
	ExchangeEntryId: { logicalName: 'exchangeentryid' },
	ExternalId: { logicalName: 'externalid' },
	ExternalIdType: { logicalName: 'externalidtype' },
	InstanceTypeCode: { logicalName: 'instancetypecode', readOnly: true, type: 'Integer' },
	IsPartyDeleted: { logicalName: 'ispartydeleted', readOnly: true, type: 'Boolean' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	ParticipationTypeMask: { logicalName: 'participationtypemask', type: 'Integer' },
	PartyId: { schemaName: 'PartyId', logicalName: '_partyid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ScheduledEnd_UtcDateOnly: { logicalName: 'scheduledend', readOnly: true, type: 'DateTime' },
	ScheduledStart_UtcDateOnly: { logicalName: 'scheduledstart', readOnly: true, type: 'DateTime' },
	UnresolvedPartyName: { logicalName: 'unresolvedpartyname' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ActivityParty WebApi class for early-bound style coding
 * Usage: const activityParty = new ActivityPartyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ActivityPartyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IActivityPartyApi>(entity, 'activityparty', 'activityparties', ActivityPartyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ActivityPartyApi extends IActivityPartyApi { }

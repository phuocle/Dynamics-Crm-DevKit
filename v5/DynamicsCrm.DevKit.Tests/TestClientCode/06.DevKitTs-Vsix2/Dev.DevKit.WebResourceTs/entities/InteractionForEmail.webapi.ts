/**
 * InteractionForEmail.webapi.ts - InteractionForEmail WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * InteractionForEmail WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IInteractionForEmailApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IInteractionForEmailApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Email Activity Id. */
	readonly EmailActivityId: DevKit.Guid | null;
	/** For internal use only. */
	EmailAddress: string | null;
	/** Email Activity Id. */
	readonly EmailInteractionReplyId: DevKit.Guid | null;
	/** Shows the Interaction date and time of the an email. */
	readonly EmailInteractionTime_UtcDateAndTime: Date | null;
	/** Exchange rate for the currency associated with the InteractionForEmail with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	InteractedComponentText: string | null;
	/** Unique identifier for entity instances */
	InteractionForEmailId: DevKit.Guid | null;
	/** Shows the location for an Interaction */
	InteractionLocation: string | null;
	/** For internal use only. */
	readonly InteractionPartyId: DevKit.Guid | null;
	/** For internal use only */
	readonly InteractionPartyTypecode: number | null;
	/** Shows the Name who replied to email if interaction is reply */
	InteractionRepliedBy: string | null;
	/** InteractionReplyId */
	InteractionReplyId: string | null;
	/** Shows the type of Interaction. */
	readonly InteractionType: number | null;
	/** Shows the User Agent for an Interaction if available */
	InteractionUserAgent: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the record. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the Interaction for Email */
	statecode: number | null;
	/** Reason for the status of the Interaction for Email */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Exchange rate for the currency associated with the InteractionForEmail with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const InteractionForEmailFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EmailActivityId: { logicalName: 'emailactivityid', readOnly: true },
	EmailAddress: { logicalName: 'emailaddress' },
	EmailInteractionReplyId: { logicalName: 'emailinteractionreplyid', readOnly: true },
	EmailInteractionTime_UtcDateAndTime: { logicalName: 'emailinteractiontime', readOnly: true, type: 'DateTime' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InteractedComponentText: { logicalName: 'interactedcomponenttext' },
	InteractionForEmailId: { logicalName: 'interactionforemailid' },
	InteractionLocation: { logicalName: 'interactionlocation' },
	InteractionPartyId: { logicalName: 'interactionpartyid', readOnly: true },
	InteractionPartyTypecode: { logicalName: 'interactionpartytypecode', readOnly: true, type: 'Integer' },
	InteractionRepliedBy: { logicalName: 'interactionrepliedby' },
	InteractionReplyId: { logicalName: 'interactionreplyid' },
	InteractionType: { logicalName: 'interactiontype', readOnly: true, type: 'Integer' },
	InteractionUserAgent: { logicalName: 'interactionuseragent' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * InteractionForEmail WebApi class for early-bound style coding
 * Usage: const interactionForEmail = new InteractionForEmailApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class InteractionForEmailApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IInteractionForEmailApi>(entity, 'interactionforemail', 'interactionforemails', InteractionForEmailFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface InteractionForEmailApi extends IInteractionForEmailApi { }

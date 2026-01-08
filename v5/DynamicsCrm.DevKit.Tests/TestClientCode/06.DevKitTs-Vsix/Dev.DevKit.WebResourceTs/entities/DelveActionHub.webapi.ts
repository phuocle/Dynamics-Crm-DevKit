/**
 * DelveActionHub.webapi.ts - DelveActionHub WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DelveActionHub
 * All fields return string representation of their values
 */
export interface IDelveActionHubFormattedValue {
	readonly CardType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CreatedTime_UtcDateAndTime: string;
	readonly DelveActionHubId: string;
	readonly Description: string;
	readonly ExchangeRate: string;
	readonly IconClassName: string;
	readonly MailWebLink: string;
	readonly MessageId: string;
	readonly MessageTime_UtcDateAndTime: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly ModifiedTime_UtcDateAndTime: string;
	readonly OrganizationId: string;
	readonly RecordId: string;
	readonly RegardingObjectId: string;
	readonly RelatedMailIds: string;
	readonly Sender: string;
	readonly SenderEntityId: string;
	readonly SenderEntityObjectTypeCode: string;
	readonly SenderImageUrl: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly Subject: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * DelveActionHub WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDelveActionHubApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDelveActionHubFormattedValue;
	/** Shows the type of the message. */
	readonly CardType: number | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedTime_UtcDateAndTime: Date | null;
	/** Shows the entity instances. */
	DelveActionHubId: DevKit.Guid | null;
	/** For internal use only. */
	Description: string | null;
	/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Stores the Icon Class name of the Delve ActionHub Card. */
	readonly IconClassName: string | null;
	/** Shows the mail web link. */
	MailWebLink: string | null;
	/** Shows the email message. This information is used only for email that is received. */
	MessageId: string | null;
	/** Shows the date and time when the email message is received. */
	readonly MessageTime_UtcDateAndTime: Date | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedTime_UtcDateAndTime: Date | null;
	/** Shows the organization that the record belongs to. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the record ID. */
	RecordId: DevKit.Guid | null;
	/** Choose the record that the email relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** For internal use only. */
	RelatedMailIds: string | null;
	/** Enter the sender of the email. */
	Sender: string | null;
	/** Record ID of the sender entity. */
	SenderEntityId: DevKit.Guid | null;
	/** Object Type code of the sender entity. */
	readonly SenderEntityObjectTypeCode: number | null;
	/** Image of the sender. */
	SenderImageUrl: string | null;
	/** Shows whether the Delve action record is pending, completed, or tracking. */
	StateCode: number | null;
	/** Select the delve action record status. */
	StatusCode: number | null;
	/** Type a short description about the objective or primary topic of the email. */
	Subject: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the exchange rate for the currency associated with the Delve action hub with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Shows the time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const DelveActionHubFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CardType: { logicalName: 'cardtype', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedTime_UtcDateAndTime: { logicalName: 'createdtime', readOnly: true, type: 'DateTime' },
	DelveActionHubId: { logicalName: 'delveactionhubid' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	IconClassName: { logicalName: 'iconclassname', readOnly: true },
	MailWebLink: { logicalName: 'mailweblink' },
	MessageId: { logicalName: 'messageid' },
	MessageTime_UtcDateAndTime: { logicalName: 'messagetime', readOnly: true, type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedTime_UtcDateAndTime: { logicalName: 'modifiedtime', readOnly: true, type: 'DateTime' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	RecordId: { logicalName: 'recordid' },
	RegardingObjectId: { logicalName: 'regardingobjectid' },
	RelatedMailIds: { logicalName: 'relatedmailids' },
	Sender: { logicalName: 'sender' },
	SenderEntityId: { logicalName: 'senderentityid' },
	SenderEntityObjectTypeCode: { logicalName: 'senderentityobjecttypecode', readOnly: true, type: 'Integer' },
	SenderImageUrl: { logicalName: 'senderimageurl' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Subject: { logicalName: 'subject' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * DelveActionHub WebApi class for early-bound style coding
 * Usage: const delveActionHub = new DelveActionHubApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DelveActionHubApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDelveActionHubApi>(entity, 'delveactionhub', 'delveactionhub', DelveActionHubFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DelveActionHubApi extends IDelveActionHubApi { }

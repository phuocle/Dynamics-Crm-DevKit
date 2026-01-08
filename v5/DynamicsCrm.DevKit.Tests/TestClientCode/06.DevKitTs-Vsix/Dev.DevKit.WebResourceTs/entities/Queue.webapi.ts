/**
 * Queue.webapi.ts - Queue WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Queue WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IQueueApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IQueueApi, 'FormattedValue'>]: string };
	/** This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute. */
	readonly AllowEmailCredentials: boolean | null;
	/** Unique identifier of the business unit with which the queue is associated. */
	BusinessUnitId: DevKit.Guid | null;
	/** Unique identifier of the user who created the queue record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the queue was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the queue. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Select the mailbox associated with this queue. */
	readonly DefaultMailbox: DevKit.Guid | null;
	/** Description of the queue. */
	Description: string | null;
	/** Email address that is associated with the queue. */
	EMailAddress: string | null;
	/** This attribute is no longer used. The data is now in the Mailbox.Password attribute. */
	readonly EmailPassword: string | null;
	/** Shows the status of the primary email address. */
	EmailRouterAccessApproval: number | null;
	/** This attribute is no longer used. The data is now in the Mailbox.UserName attribute. */
	readonly EmailUsername: string | null;
	/** The default image for the entity. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Exchange rate for the currency associated with the queue with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Information that specifies whether a queue is to ignore unsolicited email (deprecated). */
	IgnoreUnsolicitedEmail: boolean | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Incoming email delivery method for the queue. */
	IncomingEmailDeliveryMethod: number | null;
	/** Convert Incoming Email To Activities */
	IncomingEmailFilteringMethod: number | null;
	/** Shows the status of approval of the email address by O365 Admin. */
	readonly IsEmailAddressApprovedByO365Admin: boolean | null;
	/** Indication of whether a queue is the fax delivery queue. */
	readonly IsFaxQueue: boolean | null;
	/** Unique identifier of the user who last modified the queue. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the queue was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the queue. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the queue. */
	Name: string | null;
	/** Number of Queue items associated with the queue. */
	readonly NumberOfItems: number | null;
	/** Number of Members associated with the queue. */
	readonly NumberOfMembers: number | null;
	/** Unique identifier of the organization associated with the queue. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Outgoing email delivery method for the queue. */
	OutgoingEmailDeliveryMethod: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the queue. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the queue. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the queue. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the queue. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the owner of the queue. */
	PrimaryUserId: DevKit.Guid | null;
	/** Unique identifier of the queue. */
	QueueId: DevKit.Guid | null;
	/** Type of queue that is automatically assigned when a user or queue is created. The type can be public, private, or work in process. */
	readonly QueueTypeCode: number | null;
	/** Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue. */
	QueueViewType: number | null;
	/** Status of the queue. */
	StateCode: number | null;
	/** Reason for the status of the queue. */
	StatusCode: number | null;
	/** Unique identifier of the currency associated with the queue. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the queue. */
	readonly VersionNumber: number | null;
}

const QueueFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowEmailCredentials: { logicalName: 'allowemailcredentials', readOnly: true, type: 'Boolean' },
	BusinessUnitId: { schemaName: 'BusinessUnitId', logicalName: '_businessunitid_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultMailbox: { schemaName: 'DefaultMailbox', logicalName: '_defaultmailbox_value', readOnly: true, entityCollectionName: 'mailboxes', entityLogicalName: 'mailbox' },
	Description: { logicalName: 'description' },
	EMailAddress: { logicalName: 'emailaddress' },
	EmailPassword: { logicalName: 'emailpassword', readOnly: true },
	EmailRouterAccessApproval: { logicalName: 'emailrouteraccessapproval', type: 'Integer' },
	EmailUsername: { logicalName: 'emailusername', readOnly: true },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	IgnoreUnsolicitedEmail: { logicalName: 'ignoreunsolicitedemail', type: 'Boolean' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IncomingEmailDeliveryMethod: { logicalName: 'incomingemaildeliverymethod', type: 'Integer' },
	IncomingEmailFilteringMethod: { logicalName: 'incomingemailfilteringmethod', type: 'Integer' },
	IsEmailAddressApprovedByO365Admin: { logicalName: 'isemailaddressapprovedbyo365admin', readOnly: true, type: 'Boolean' },
	IsFaxQueue: { logicalName: 'isfaxqueue', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NumberOfItems: { logicalName: 'numberofitems', readOnly: true, type: 'Integer' },
	NumberOfMembers: { logicalName: 'numberofmembers', readOnly: true, type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OutgoingEmailDeliveryMethod: { logicalName: 'outgoingemaildeliverymethod', type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PrimaryUserId: { schemaName: 'PrimaryUserId', logicalName: '_primaryuserid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	QueueId: { logicalName: 'queueid' },
	QueueTypeCode: { logicalName: 'queuetypecode', readOnly: true, type: 'Integer' },
	QueueViewType: { logicalName: 'queueviewtype', type: 'Integer' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Queue WebApi class for early-bound style coding
 * Usage: const queue = new QueueApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class QueueApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IQueueApi>(entity, 'queue', 'queues', QueueFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface QueueApi extends IQueueApi { }

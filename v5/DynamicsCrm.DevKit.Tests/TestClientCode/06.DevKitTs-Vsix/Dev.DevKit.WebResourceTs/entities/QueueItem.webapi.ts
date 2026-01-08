/**
 * QueueItem.webapi.ts - QueueItem WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * QueueItem WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IQueueItemApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IQueueItemApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the date the record was assigned to the queue. */
	readonly EnteredOn_UtcDateAndTime: Date | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the queueitem. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Choose the activity, case, or article assigned to the queue. */
	ObjectId: DevKit.Guid | null;
	/** Select the type of the queue item, such as activity, case, or appointment. */
	readonly ObjectTypeCode: number | null;
	/** Unique identifier of the organization with which the queue item is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the queue item. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the queue item. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the queue item. */
	readonly OwningUser: DevKit.Guid | null;
	/** Priority of the queue item. */
	Priority: number | null;
	/** Choose the queue that the item is assigned to. */
	QueueId: DevKit.Guid | null;
	/** Unique identifier of the queue item. */
	QueueItemId: DevKit.Guid | null;
	/** Sender who created the queue item. */
	Sender: string | null;
	/** Status of the queue item. */
	State: number | null;
	/** Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated. */
	StateCode: number | null;
	/** Reason for the status of the queue item. */
	Status: number | null;
	/** Select the item's status. */
	StatusCode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue. */
	Title: string | null;
	/** Recipients listed on the To line of the message for email queue items. */
	ToRecipients: string | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the queue item. */
	readonly VersionNumber: number | null;
	/** Shows who is working on the queue item. */
	WorkerId: DevKit.Guid | null;
	/** Shows the date and time when the queue item was last assigned to a user. */
	readonly WorkerIdModifiedOn_UtcDateOnly: Date | null;
}

const QueueItemFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EnteredOn_UtcDateAndTime: { logicalName: 'enteredon', readOnly: true, type: 'DateTime' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ObjectId: { schemaName: 'ObjectId', logicalName: '_objectid_value', entityCollectionName: 'activitypointers', entityLogicalName: 'activitypointer' },
	ObjectTypeCode: { logicalName: 'objecttypecode', readOnly: true, type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Priority: { logicalName: 'priority', type: 'Integer' },
	QueueId: { schemaName: 'QueueId', logicalName: '_queueid_value', entityCollectionName: 'queues', entityLogicalName: 'queue' },
	QueueItemId: { logicalName: 'queueitemid' },
	Sender: { logicalName: 'sender' },
	State: { logicalName: 'state', type: 'Integer' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	Status: { logicalName: 'status', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	ToRecipients: { logicalName: 'torecipients' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WorkerId: { schemaName: 'WorkerId', logicalName: '_workerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	WorkerIdModifiedOn_UtcDateOnly: { logicalName: 'workeridmodifiedon', readOnly: true, type: 'DateTime' },
};

/**
 * QueueItem WebApi class for early-bound style coding
 * Usage: const queueItem = new QueueItemApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class QueueItemApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IQueueItemApi>(entity, 'queueitem', 'queueitems', QueueItemFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface QueueItemApi extends IQueueItemApi { }

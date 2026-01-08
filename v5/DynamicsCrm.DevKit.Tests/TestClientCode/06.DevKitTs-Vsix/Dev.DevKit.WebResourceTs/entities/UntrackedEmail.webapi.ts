/**
 * UntrackedEmail.webapi.ts - UntrackedEmail WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for UntrackedEmail
 * All fields return string representation of their values
 */
export interface IUntrackedEmailFormattedValue {
	readonly ActivityId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly ExchangeItemId: string;
	readonly ExchangeRate: string;
	readonly ExchangeWebLink: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly RegardingObjectId: string;
	readonly Subject: string;
	readonly TransactionCurrencyId: string;
	readonly VersionNumber: string;
}

/**
 * UntrackedEmail WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IUntrackedEmailApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IUntrackedEmailFormattedValue;
	/** Unique identifier of untracked the email activity. */
	ActivityId: DevKit.Guid | null;
	/** Unique identifier of the user who created the activity. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the activity was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the activitypointer. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows information about the untracked email. This field is read-only. */
	Description: string | null;
	/** The message id of untracked email which is returned from Exchange Server. */
	ExchangeItemId: string | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Shows the web link of untracked email. */
	ExchangeWebLink: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the untracked email activity. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the untracked email activity. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the untracked email activity. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose the record that the untracked email relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Type a short description about the objective or primary topic of the UntrackedEmail. */
	Subject: string | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the untracked email message. */
	readonly VersionNumber: number | null;
}

const UntrackedEmailFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityId: { logicalName: 'activityid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeItemId: { logicalName: 'exchangeitemid' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExchangeWebLink: { logicalName: 'exchangeweblink' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RegardingObjectId: { logicalName: 'regardingobjectid' },
	Subject: { logicalName: 'subject' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * UntrackedEmail WebApi class for early-bound style coding
 * Usage: const untrackedEmail = new UntrackedEmailApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class UntrackedEmailApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IUntrackedEmailApi>(entity, 'untrackedemail', 'untrackedemails', UntrackedEmailFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface UntrackedEmailApi extends IUntrackedEmailApi { }

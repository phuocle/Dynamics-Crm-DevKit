/**
 * Fax.webapi.ts - Fax WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Fax WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IFaxApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IFaxApi, 'FormattedValue'>]: string };
	/** Unique identifier of the fax activity. */
	ActivityId: DevKit.Guid | null;
	/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
	ActualDurationMinutes: number | null;
	/** Enter the actual end date and time of the fax. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the fax. */
	ActualEnd_UtcDateOnly: Date | null;
	/** Enter the actual start date and time for the fax. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the fax. */
	ActualStart_UtcDateOnly: Date | null;
	/** Type the billing code for the fax to make sure the fax is charged to the correct sender or customer account. */
	BillingCode: string | null;
	/** Type a category to identify the fax type, such as sales offer or press release, to tie the fax to a business group or function. */
	Category: string | null;
	/** Type the name of the cover page to use when sending the fax. */
	CoverPageName: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
	Description: string | null;
	/** Select the direction of the fax as incoming or outbound. */
	DirectionCode: boolean | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Type the recipient's fax number. */
	FaxNumber: string | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Information regarding whether the fax activity was billed as part of resolving a case. */
	IsBilled: boolean | null;
	/** Information regarding whether the activity is a regular activity type or event type. */
	readonly IsRegularActivity: boolean | null;
	/** Indication of whether the fax activity was created by a workflow rule. */
	IsWorkflowCreated: boolean | null;
	/** Contains the date and time stamp of the last on hold time. */
	LastOnHoldTime_UtcDateAndTime: Date | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type the number of pages included in the fax. */
	NumberOfPages: number | null;
	/** Shows how long, in minutes, that the record was on hold. */
	readonly OnHoldTime: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the fax activity. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team that owns the fax activity. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user that owns the fax activity. */
	readonly OwningUser: DevKit.Guid | null;
	/** Select the priority so that preferred customers or critical issues are handled quickly. */
	PriorityCode: number | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Choose the record that the fax relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Shows the expected duration of the fax activity, in minutes. */
	readonly ScheduledDurationMinutes: number | null;
	/** Enter the expected due date and time. */
	ScheduledEnd_UtcDateAndTime: Date | null;
	/** Enter the expected due date and time. */
	ScheduledStart_UtcDateAndTime: Date | null;
	/** Choose the service level agreement (SLA) that you want to apply to the fax record. */
	SLAId: DevKit.Guid | null;
	/** Last SLA that was applied to this fax. This field is for internal use only. */
	readonly SLAInvokedId: DevKit.Guid | null;
	/** Shows the date and time by which the activities are sorted. */
	SortDate_UtcDateAndTime: Date | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
	StateCode: number | null;
	/** Select the fax's status. */
	StatusCode: number | null;
	/** Type a subcategory to identify the fax type to relate the activity to a specific product, sales region, business group, or other function. */
	Subcategory: string | null;
	/** Type a short description about the objective or primary topic of the fax. */
	Subject: string | null;
	/** For internal use only. */
	SubscriptionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Type the Transmitting Subscriber ID (TSID) associated with a send action. This is typically a combination of the recipient's fax or phone number and company name. */
	Tsid: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the fax. */
	readonly VersionNumber: number | null;
}

const FaxFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActivityId: { logicalName: 'activityid' },
	ActualDurationMinutes: { logicalName: 'actualdurationminutes', type: 'Integer' },
	ActualEnd_UtcDateOnly: { logicalName: 'actualend', type: 'DateTime' },
	ActualStart_UtcDateOnly: { logicalName: 'actualstart', type: 'DateTime' },
	BillingCode: { logicalName: 'billingcode' },
	Category: { logicalName: 'category' },
	CoverPageName: { logicalName: 'coverpagename' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	DirectionCode: { logicalName: 'directioncode', type: 'Boolean' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FaxNumber: { logicalName: 'faxnumber' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsBilled: { logicalName: 'isbilled', type: 'Boolean' },
	IsRegularActivity: { logicalName: 'isregularactivity', readOnly: true, type: 'Boolean' },
	IsWorkflowCreated: { logicalName: 'isworkflowcreated', type: 'Boolean' },
	LastOnHoldTime_UtcDateAndTime: { logicalName: 'lastonholdtime', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	NumberOfPages: { logicalName: 'numberofpages', type: 'Integer' },
	OnHoldTime: { logicalName: 'onholdtime', readOnly: true, type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PriorityCode: { logicalName: 'prioritycode', type: 'Integer' },
	ProcessId: { logicalName: 'processid' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ScheduledDurationMinutes: { logicalName: 'scheduleddurationminutes', readOnly: true, type: 'Integer' },
	ScheduledEnd_UtcDateAndTime: { logicalName: 'scheduledend', type: 'DateTime' },
	ScheduledStart_UtcDateAndTime: { logicalName: 'scheduledstart', type: 'DateTime' },
	SLAId: { schemaName: 'SLAId', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SLAInvokedId: { schemaName: 'SLAInvokedId', logicalName: '_slainvokedid_value', readOnly: true, entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SortDate_UtcDateAndTime: { logicalName: 'sortdate', type: 'DateTime' },
	StageId: { logicalName: 'stageid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Subcategory: { logicalName: 'subcategory' },
	Subject: { logicalName: 'subject' },
	SubscriptionId: { logicalName: 'subscriptionid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	Tsid: { logicalName: 'tsid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Fax WebApi class for early-bound style coding
 * Usage: const fax = new FaxApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class FaxApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IFaxApi>(entity, 'fax', 'faxes', FaxFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface FaxApi extends IFaxApi { }

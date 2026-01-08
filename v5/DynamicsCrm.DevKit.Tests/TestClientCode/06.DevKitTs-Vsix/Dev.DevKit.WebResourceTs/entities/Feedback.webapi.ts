/**
 * Feedback.webapi.ts - Feedback WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Feedback WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IFeedbackApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IFeedbackApi, 'FormattedValue'>]: string };
	/** Shows whether the feedback is approved for display. */
	adx_approved: boolean | null;
	/** The URL of the author’s home page/blog. */
	adx_authorurl: string | null;
	/** Email of the contact who created the record. */
	Adx_ContactEmail: string | null;
	/** Username of the contact who created the record. */
	Adx_ContactUsername: string | null;
	/** Name of the contact who created the record. */
	Adx_CreatedByContact: string | null;
	/** Shows who closed the record. */
	readonly ClosedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ClosedOn_UtcDateAndTime: Date | null;
	/** Type the feedback comments. */
	Comments: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the contact who created the record. */
	CreatedByContact: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the contact who created the record on behalf of another user. */
	CreatedOnBehalfByContact: DevKit.Guid | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** FeedbackId */
	FeedbackId: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Enter the maximum rating value. */
	MaxRating: number | null;
	/** Enter the minimum rating value. */
	MinRating: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows the record in context of which feedback rating is being provided. */
	msdyn_ContextObjectId: DevKit.Guid | null;
	/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
	readonly NormalizedRating: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the knowledge article views. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the knowledge article views. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team that owns the feedback. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns this feedback. */
	readonly OwningUser: DevKit.Guid | null;
	/** Specifies how helpful the related record was. */
	Rating: number | null;
	/** Shows the record that the feedback is associated with. */
	RegardingObjectId: DevKit.Guid | null;
	/** Shows where the feedback was submitted from. */
	Source: number | null;
	/** Shows whether the feedback is open, rejected or closed. */
	StateCode: number | null;
	/** Select the feedback's status. */
	StatusCode: number | null;
	/** Type a title for the feedback. */
	Title: string | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the feedback. */
	readonly VersionNumber: number | null;
}

const FeedbackFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_approved: { logicalName: 'adx_approved', type: 'Boolean' },
	adx_authorurl: { logicalName: 'adx_authorurl' },
	Adx_ContactEmail: { logicalName: 'adx_contactemail' },
	Adx_ContactUsername: { logicalName: 'adx_contactusername' },
	Adx_CreatedByContact: { logicalName: 'adx_createdbycontact' },
	ClosedBy: { schemaName: 'ClosedBy', logicalName: '_closedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ClosedOn_UtcDateAndTime: { logicalName: 'closedon', readOnly: true, type: 'DateTime' },
	Comments: { logicalName: 'comments' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedByContact: { schemaName: 'CreatedByContact', logicalName: '_createdbycontact_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOnBehalfByContact: { schemaName: 'CreatedOnBehalfByContact', logicalName: '_createdonbehalfbycontact_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FeedbackId: { logicalName: 'feedbackid' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	MaxRating: { logicalName: 'maxrating', type: 'Integer' },
	MinRating: { logicalName: 'minrating', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_ContextObjectId: { schemaName: 'msdyn_ContextObjectId', logicalName: '_msdyn_contextobjectid_value', entityCollectionName: 'knowledgearticles', entityLogicalName: 'knowledgearticle' },
	NormalizedRating: { logicalName: 'normalizedrating', readOnly: true, type: 'Number' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Rating: { logicalName: 'rating', type: 'Integer' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	Source: { logicalName: 'source', type: 'Integer' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	Title: { logicalName: 'title' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Feedback WebApi class for early-bound style coding
 * Usage: const feedback = new FeedbackApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class FeedbackApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IFeedbackApi>(entity, 'feedback', 'feedback', FeedbackFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface FeedbackApi extends IFeedbackApi { }

/**
 * MailboxTrackingCategory.webapi.ts - MailboxTrackingCategory WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for MailboxTrackingCategory
 * All fields return string representation of their values
 */
export interface IMailboxTrackingCategoryFormattedValue {
	readonly CategoryOnboardingStatus: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly ExchangeCategoryColor: string;
	readonly ExchangeCategoryId: string;
	readonly ExchangeCategoryName: string;
	readonly MailboxId: string;
	readonly MailboxTrackingCategoryId: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
}

/**
 * MailboxTrackingCategory WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMailboxTrackingCategoryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IMailboxTrackingCategoryFormattedValue;
	/** Information to indicate whether the category has been created in Exchange or not. */
	CategoryOnboardingStatus: number | null;
	/** Date and time when the entry was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Color for category in Exchange. */
	ExchangeCategoryColor: number | null;
	/** Category Id for a category in Exchange */
	ExchangeCategoryId: DevKit.Guid | null;
	/** Exchange Category Name */
	ExchangeCategoryName: string | null;
	/** Mailbox id associated with this record. */
	MailboxId: DevKit.Guid | null;
	readonly MailboxTrackingCategoryId: DevKit.Guid | null;
	/** Date and time when the entry was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the category. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the category. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
}

const MailboxTrackingCategoryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CategoryOnboardingStatus: { logicalName: 'categoryonboardingstatus', type: 'Integer' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	ExchangeCategoryColor: { logicalName: 'exchangecategorycolor', type: 'Integer' },
	ExchangeCategoryId: { logicalName: 'exchangecategoryid' },
	ExchangeCategoryName: { logicalName: 'exchangecategoryname' },
	MailboxId: { schemaName: 'MailboxId', logicalName: '_mailboxid_value', entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	MailboxTrackingCategoryId: { logicalName: 'mailboxtrackingcategoryid', readOnly: true },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'owners', entityLogicalName: 'owner' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
};

/**
 * MailboxTrackingCategory WebApi class for early-bound style coding
 * Usage: const mailboxTrackingCategory = new MailboxTrackingCategoryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MailboxTrackingCategoryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMailboxTrackingCategoryApi>(entity, 'mailboxtrackingcategory', 'mailboxtrackingcategories', MailboxTrackingCategoryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MailboxTrackingCategoryApi extends IMailboxTrackingCategoryApi { }

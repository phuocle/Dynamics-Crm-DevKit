/**
 * MailboxTrackingFolder.webapi.ts - MailboxTrackingFolder WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * MailboxTrackingFolder WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMailboxTrackingFolderApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMailboxTrackingFolderApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the entry was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Folder Id for a folder in Exchange */
	ExchangeFolderId: string | null;
	/** Exchange Folder Name */
	ExchangeFolderName: string | null;
	/** Information to indicate whether the folder has been on boarded for auto tracking */
	FolderOnboardingStatus: number | null;
	/** Mailbox id associated with this record. */
	MailboxId: DevKit.Guid | null;
	readonly MailboxTrackingFolderId: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the entry was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the record. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the folder mapping. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the folder mapping. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Version number of the mailbox tracking folder. */
	readonly VersionNumber: number | null;
}

const MailboxTrackingFolderFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExchangeFolderId: { logicalName: 'exchangefolderid' },
	ExchangeFolderName: { logicalName: 'exchangefoldername' },
	FolderOnboardingStatus: { logicalName: 'folderonboardingstatus', type: 'Integer' },
	MailboxId: { schemaName: 'MailboxId', logicalName: '_mailboxid_value', entityCollectionName: 'mailboxes', entityLogicalName: 'mailbox' },
	MailboxTrackingFolderId: { logicalName: 'mailboxtrackingfolderid', readOnly: true },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * MailboxTrackingFolder WebApi class for early-bound style coding
 * Usage: const mailboxTrackingFolder = new MailboxTrackingFolderApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MailboxTrackingFolderApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMailboxTrackingFolderApi>(entity, 'mailboxtrackingfolder', 'mailboxtrackingfolders', MailboxTrackingFolderFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MailboxTrackingFolderApi extends IMailboxTrackingFolderApi { }

/**
 * SharePointDocument.webapi.ts - SharePointDocument WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SharePointDocument
 * All fields return string representation of their values
 */
export interface ISharePointDocumentFormattedValue {
	readonly AbsoluteUrl: string;
	readonly AppCreatedBy: string;
	readonly AppModifiedBy: string;
	readonly Author: string;
	readonly BusinessUnitId: string;
	readonly CheckedOutTo: string;
	readonly CheckInComment: string;
	readonly ChildFolderCount: string;
	readonly ChildItemCount: string;
	readonly ContentType: string;
	readonly ContentTypeId: string;
	readonly CopySource: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly DocumentId: string;
	readonly DocumentLocationType: string;
	readonly Edit: string;
	readonly EditUrl: string;
	readonly ExchangeRate: string;
	readonly FileSize: string;
	readonly FileType: string;
	readonly FullName: string;
	readonly IconClassName: string;
	readonly IsCheckedOut: string;
	readonly IsFolder: string;
	readonly IsRecursiveFetch: string;
	readonly LocationId: string;
	readonly LocationName: string;
	readonly Modified_UtcDateAndTime: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ReadUrl: string;
	readonly RegardingObjectId: string;
	readonly RelativeLocation: string;
	readonly ServiceType: string;
	readonly SharePointCreatedOn_UtcDateAndTime: string;
	readonly SharePointDocumentId: string;
	readonly SharePointModifiedBy: string;
	readonly Title: string;
	readonly TransactionCurrencyId: string;
	readonly Version: string;
}

/**
 * SharePointDocument WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISharePointDocumentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISharePointDocumentFormattedValue;
	/** Type the URL where the SharePoint document is located. */
	readonly AbsoluteUrl: string | null;
	/** Name of the person who created the application. */
	readonly AppCreatedBy: string | null;
	/** Name of the person who last modified the application. */
	readonly AppModifiedBy: string | null;
	/** Name of the author of the SharePoint document. */
	Author: string | null;
	/** Shows the business unit that the record is associated with. */
	BusinessUnitId: DevKit.Guid | null;
	/** Shows who the SharePoint document is checked out to. */
	readonly CheckedOutTo: string | null;
	/** Type a comment about the document that is being checked in. */
	readonly CheckInComment: string | null;
	/** Shows the number of child folders. */
	readonly ChildFolderCount: number | null;
	/** Shows how many child items there are. */
	readonly ChildItemCount: number | null;
	/** The content type of the document. */
	readonly ContentType: string | null;
	/** Shows the unique identifier of the content type. */
	readonly ContentTypeId: number | null;
	/** SharePoint source item URL */
	readonly CopySource: string | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of a SharePoint document in document library. */
	readonly DocumentId: number | null;
	/** Location type of the SharePoint document location. */
	readonly DocumentLocationType: number | null;
	/** Edit Url of the Sharepoint Form */
	readonly Edit: string | null;
	/** Shows the edit URL of the SharePoint document. */
	readonly EditUrl: string | null;
	/** Shows the exchange rate between the currency associated with the SharePoint document record and the base currency. */
	readonly ExchangeRate: number | null;
	/** Shows the file size. */
	readonly FileSize: number | null;
	/** Shows the file type. */
	readonly FileType: string | null;
	/** Shows the full name of the SharePoint document. */
	readonly FullName: string | null;
	/** Stores the Icon Class name of the SharePoint document. */
	readonly IconClassName: string | null;
	/** Shows whether the file is checked out. */
	readonly IsCheckedOut: boolean | null;
	/** Shows whether the file is a folder. */
	readonly IsFolder: boolean | null;
	/** Shows whether to fetch data recursively from the given folder location. */
	readonly IsRecursiveFetch: boolean | null;
	/** Unique identifier of the associated document location. */
	readonly LocationId: string | null;
	/** Name of the associated document location. */
	readonly LocationName: string | null;
	/** Shows the date and time when the SharePoint document was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly Modified_UtcDateAndTime: Date | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who modified the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the SharePoint document. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Shows the team that owns the SharePoint document record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Shows the user who owns the SharePoint document record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Shows the Read URL of the SharePoint document. */
	readonly ReadUrl: string | null;
	/** Choose the parent record that the SharePoint document record is associated with. */
	RegardingObjectId: DevKit.Guid | null;
	/** Relative location of Sharepoint Document */
	readonly RelativeLocation: string | null;
	/** Shows the service type of the SharePoint site. */
	ServiceType: number | null;
	/** Shows the date and time when the SharePoint document record was created. */
	readonly SharePointCreatedOn_UtcDateAndTime: Date | null;
	/** Shows the unique identifier of the SharePoint document record. */
	SharePointDocumentId: DevKit.Guid | null;
	/** Shows who last updated the document record. */
	readonly SharePointModifiedBy: string | null;
	/** Shows the title or name that describes the SharePoint document. */
	readonly Title: string | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	readonly TransactionCurrencyId: DevKit.Guid | null;
	/** Shows the SharePoint document version */
	readonly Version: string | null;
}

const SharePointDocumentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AbsoluteUrl: { logicalName: 'absoluteurl', readOnly: true },
	AppCreatedBy: { logicalName: 'appcreatedby', readOnly: true },
	AppModifiedBy: { logicalName: 'appmodifiedby', readOnly: true },
	Author: { logicalName: 'author' },
	BusinessUnitId: { schemaName: 'BusinessUnitId', logicalName: '_businessunitid_value', entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	CheckedOutTo: { logicalName: 'checkedoutto', readOnly: true },
	CheckInComment: { logicalName: 'checkincomment', readOnly: true },
	ChildFolderCount: { logicalName: 'childfoldercount', readOnly: true, type: 'Integer' },
	ChildItemCount: { logicalName: 'childitemcount', readOnly: true, type: 'Integer' },
	ContentType: { logicalName: 'contenttype', readOnly: true },
	ContentTypeId: { logicalName: 'contenttypeid', readOnly: true, type: 'Integer' },
	CopySource: { logicalName: 'copysource', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DocumentId: { logicalName: 'documentid', readOnly: true, type: 'Integer' },
	DocumentLocationType: { logicalName: 'documentlocationtype', readOnly: true, type: 'Integer' },
	Edit: { logicalName: 'edit', readOnly: true },
	EditUrl: { logicalName: 'editurl', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FileSize: { logicalName: 'filesize', readOnly: true, type: 'Integer' },
	FileType: { logicalName: 'filetype', readOnly: true },
	FullName: { logicalName: 'fullname', readOnly: true },
	IconClassName: { logicalName: 'iconclassname', readOnly: true },
	IsCheckedOut: { logicalName: 'ischeckedout', readOnly: true, type: 'Boolean' },
	IsFolder: { logicalName: 'isfolder', readOnly: true, type: 'Boolean' },
	IsRecursiveFetch: { logicalName: 'isrecursivefetch', readOnly: true, type: 'Boolean' },
	LocationId: { logicalName: 'locationid', readOnly: true },
	LocationName: { logicalName: 'locationname', readOnly: true },
	Modified_UtcDateAndTime: { logicalName: 'modified', readOnly: true, type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { logicalName: 'owningteam', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	ReadUrl: { logicalName: 'readurl', readOnly: true },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	RelativeLocation: { logicalName: 'relativelocation', readOnly: true },
	ServiceType: { logicalName: 'servicetype', type: 'Integer' },
	SharePointCreatedOn_UtcDateAndTime: { logicalName: 'sharepointcreatedon', readOnly: true, type: 'DateTime' },
	SharePointDocumentId: { logicalName: 'sharepointdocumentid' },
	SharePointModifiedBy: { logicalName: 'sharepointmodifiedby', readOnly: true },
	Title: { logicalName: 'title', readOnly: true },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', readOnly: true, entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	Version: { logicalName: 'version', readOnly: true },
};

/**
 * SharePointDocument WebApi class for early-bound style coding
 * Usage: const sharePointDocument = new SharePointDocumentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SharePointDocumentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISharePointDocumentApi>(entity, 'sharepointdocument', 'sharepointdocuments', SharePointDocumentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SharePointDocumentApi extends ISharePointDocumentApi { }

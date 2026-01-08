/**
 * SharePointDocumentLocation.webapi.ts - SharePointDocumentLocation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for SharePointDocumentLocation
 * All fields return string representation of their values
 */
export interface ISharePointDocumentLocationFormattedValue {
	readonly AbsoluteURL: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly ExchangeRate: string;
	readonly ImportSequenceNumber: string;
	readonly LocationType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ParentSiteOrLocation: string;
	readonly RegardingObjectId: string;
	readonly RelativeUrl: string;
	readonly ServiceType: string;
	readonly SharePointDocumentLocationId: string;
	readonly SiteCollectionId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly UserId: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * SharePointDocumentLocation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISharePointDocumentLocationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ISharePointDocumentLocationFormattedValue;
	/** Absolute URL of the SharePoint document location. */
	AbsoluteURL: string | null;
	/** Unique identifier of the user who created the SharePoint document location record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SharePoint document location record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the SharePoint document location record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the SharePoint document location record. */
	Description: string | null;
	/** Exchange rate between the currency associated with the SharePoint document location record and the base currency. */
	readonly ExchangeRate: number | null;
	/** Sequence number of the import that created the SharePoint document location record. */
	ImportSequenceNumber: number | null;
	/** Location type of the SharePoint document location. */
	LocationType: number | null;
	/** Unique identifier of the user who last modified the SharePoint document location record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SharePoint document location record was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the SharePoint document location record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the SharePoint document location record. */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the SharePoint document location record. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the SharePoint document location record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the SharePoint document location record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the SharePoint document location record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the parent site or location. */
	ParentSiteOrLocation: DevKit.Guid | null;
	/** Unique identifier of the object with which the SharePoint document location record is associated. */
	RegardingObjectId: DevKit.Guid | null;
	/** Relative URL of the SharePoint document location. */
	RelativeUrl: string | null;
	/** Shows the service type of the SharePoint site. */
	ServiceType: number | null;
	/** Unique identifier of the SharePoint document location record. */
	SharePointDocumentLocationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SiteCollectionId: DevKit.Guid | null;
	/** Status of the SharePoint document location record. */
	StateCode: number | null;
	/** Reason for the status of the SharePoint document location record. */
	StatusCode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the SharePoint document location record. */
	readonly TransactionCurrencyId: DevKit.Guid | null;
	/** Choose the user who owns the SharePoint document location. */
	UserId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
}

const SharePointDocumentLocationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AbsoluteURL: { logicalName: 'absoluteurl' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LocationType: { logicalName: 'locationtype', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentSiteOrLocation: { schemaName: 'ParentSiteOrLocation', logicalName: '_parentsiteorlocation_value', entityCollectionName: 'sharePointdocumentlocations', entityLogicalName: 'sharepointdocumentlocation' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	RelativeUrl: { logicalName: 'relativeurl' },
	ServiceType: { logicalName: 'servicetype', type: 'Integer' },
	SharePointDocumentLocationId: { logicalName: 'sharepointdocumentlocationid' },
	SiteCollectionId: { logicalName: 'sitecollectionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', readOnly: true, entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserId: { logicalName: 'userid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SharePointDocumentLocation WebApi class for early-bound style coding
 * Usage: const sharePointDocumentLocation = new SharePointDocumentLocationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SharePointDocumentLocationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISharePointDocumentLocationApi>(entity, 'sharepointdocumentlocation', 'sharePointdocumentlocations', SharePointDocumentLocationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SharePointDocumentLocationApi extends ISharePointDocumentLocationApi { }

/**
 * SharePointSite.webapi.ts - SharePointSite WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SharePointSite WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISharePointSiteApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISharePointSiteApi, 'FormattedValue'>]: string };
	/** Absolute URL of the SharePoint site. */
	AbsoluteURL: string | null;
	/** Unique identifier of the user who created the SharePoint site record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the SharePoint site record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the SharePoint site record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the SharePoint site record. */
	Description: string | null;
	/** Exchange rate between the currency associated with the SharePoint site record and the base currency. */
	readonly ExchangeRate: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Indicates whether the SharePoint site is the default site or not. */
	IsDefault: boolean | null;
	/** Indicates if SharePoint Grid is present or not. */
	IsGridPresent: boolean | null;
	/** Allows embedding of Power BI Reports available in this SharePoint site. */
	IsPowerBISite: boolean | null;
	/** Date and time when the SharePoint site URL was last validated. */
	LastValidated_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who last modified the SharePoint site record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the SharePoint site record was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the SharePoint site record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the SharePoint site record. */
	Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the SharePoint site. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the document location record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team that owns the SharePoint site record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the SharePoint site record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the parent SharePoint site. */
	ParentSite: DevKit.Guid | null;
	/** Relative URL of the SharePoint site. */
	RelativeUrl: string | null;
	/** Shows the service type of location of the SharePoint site. */
	ServiceType: number | null;
	/** Unique identifier of the SharePoint site in Dynamics 365 */
	SharePointSiteId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SiteCollectionId: DevKit.Guid | null;
	/** Status of the SharePoint site record. */
	StateCode: number | null;
	/** Reason for the status of the SharePoint site record. */
	StatusCode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the SharePoint site record. */
	readonly TransactionCurrencyId: DevKit.Guid | null;
	/** Choose the user who owns the SharePoint site. */
	UserId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Validation status of the SharePoint site URL. */
	ValidationStatus: number | null;
	/** Reason for validation status of the URL */
	ValidationStatusErrorCode: number | null;
	readonly VersionNumber: number | null;
}

const SharePointSiteFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AbsoluteURL: { logicalName: 'absoluteurl' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsGridPresent: { logicalName: 'isgridpresent', type: 'Boolean' },
	IsPowerBISite: { logicalName: 'ispowerbisite', type: 'Boolean' },
	LastValidated_UtcDateAndTime: { logicalName: 'lastvalidated', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentSite: { schemaName: 'ParentSite', logicalName: '_parentsite_value', entityCollectionName: 'sharepointsites', entityLogicalName: 'sharepointsite' },
	RelativeUrl: { logicalName: 'relativeurl' },
	ServiceType: { logicalName: 'servicetype', type: 'Integer' },
	SharePointSiteId: { logicalName: 'sharepointsiteid' },
	SiteCollectionId: { logicalName: 'sitecollectionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', readOnly: true, entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UserId: { logicalName: 'userid' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	ValidationStatus: { logicalName: 'validationstatus', type: 'Integer' },
	ValidationStatusErrorCode: { logicalName: 'validationstatuserrorcode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SharePointSite WebApi class for early-bound style coding
 * Usage: const sharePointSite = new SharePointSiteApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SharePointSiteApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISharePointSiteApi>(entity, 'sharepointsite', 'sharepointsites', SharePointSiteFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SharePointSiteApi extends ISharePointSiteApi { }

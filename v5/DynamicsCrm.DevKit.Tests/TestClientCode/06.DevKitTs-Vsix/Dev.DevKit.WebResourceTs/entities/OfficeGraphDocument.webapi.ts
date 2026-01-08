/**
 * OfficeGraphDocument.webapi.ts - OfficeGraphDocument WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for OfficeGraphDocument
 * All fields return string representation of their values
 */
export interface IOfficeGraphDocumentFormattedValue {
	readonly AuthorNames: string;
	readonly CreatedBy: string;
	readonly CreatedOnBehalfBy: string;
	readonly CreatedTime_UtcDateAndTime: string;
	readonly DocumentId: string;
	readonly DocumentLastModifiedBy: string;
	readonly DocumentLastModifiedOn_UtcDateAndTime: string;
	readonly DocumentPreviewMetadata: string;
	readonly ExchangeRate: string;
	readonly FileExtension: string;
	readonly FileType: string;
	readonly ModifiedBy: string;
	readonly ModifiedOnBehalfBy: string;
	readonly ModifiedTime_UtcDateAndTime: string;
	readonly OfficeGraphDocumentId: string;
	readonly OrganizationId: string;
	readonly PreviewImageUrl: string;
	readonly QueryType: string;
	readonly Rank: string;
	readonly ReadUrl: string;
	readonly SecondaryFileExtension: string;
	readonly SiteTitle: string;
	readonly SiteUrl: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly Title: string;
	readonly TransactionCurrencyId: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly ViewCount: string;
	readonly WebLocationUrl: string;
}

/**
 * OfficeGraphDocument WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOfficeGraphDocumentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IOfficeGraphDocumentFormattedValue;
	/** Shows Author Names of Office Graph Document. */
	readonly AuthorNames: string | null;
	/** Shows Created By of Office Graph Document. */
	readonly CreatedBy: string | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedTime_UtcDateAndTime: Date | null;
	/** Document Id. */
	DocumentId: string | null;
	/** Document Last Modified By */
	readonly DocumentLastModifiedBy: string | null;
	/** Document Last Modified On */
	readonly DocumentLastModifiedOn_UtcDateAndTime: Date | null;
	/** document preview metadata */
	readonly DocumentPreviewMetadata: string | null;
	/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** File Extension of Office Graph Document. */
	readonly FileExtension: string | null;
	/** Shows the File Type of Office Graph Document. */
	readonly FileType: string | null;
	/** Shows modified by of Office Graph Document. */
	readonly ModifiedBy: string | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedTime_UtcDateAndTime: Date | null;
	/** Unique identifier for entity instances */
	OfficeGraphDocumentId: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the Preview Image Url Office Graph Document. */
	readonly PreviewImageUrl: string | null;
	/** Shows Query Type of child folders */
	readonly QueryType: number | null;
	/** The relevancy rank of the document retrieved */
	readonly Rank: number | null;
	/** The online read url */
	readonly ReadUrl: string | null;
	/** Secondary File Extension of Office Graph Document. */
	readonly SecondaryFileExtension: string | null;
	/** The title of the parent document site */
	readonly SiteTitle: string | null;
	/** The site url for the parent document site */
	readonly SiteUrl: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** The title of the entity. */
	Title: string | null;
	/** Exchange rate for the currency associated with the Office Graph Document with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	readonly VersionNumber: number | null;
	/** Shows View Count of child folders. */
	readonly ViewCount: number | null;
	/** Shows the Web Location Url of Office Graph Document. */
	readonly WebLocationUrl: string | null;
}

const OfficeGraphDocumentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AuthorNames: { logicalName: 'authornames', readOnly: true },
	CreatedBy: { logicalName: 'createdby', readOnly: true },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedTime_UtcDateAndTime: { logicalName: 'createdtime', readOnly: true, type: 'DateTime' },
	DocumentId: { logicalName: 'documentid' },
	DocumentLastModifiedBy: { logicalName: 'documentlastmodifiedby', readOnly: true },
	DocumentLastModifiedOn_UtcDateAndTime: { logicalName: 'documentlastmodifiedon', readOnly: true, type: 'DateTime' },
	DocumentPreviewMetadata: { logicalName: 'documentpreviewmetadata', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FileExtension: { logicalName: 'fileextension', readOnly: true },
	FileType: { logicalName: 'filetype', readOnly: true },
	ModifiedBy: { logicalName: 'modifiedby', readOnly: true },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedTime_UtcDateAndTime: { logicalName: 'modifiedtime', readOnly: true, type: 'DateTime' },
	OfficeGraphDocumentId: { logicalName: 'officegraphdocumentid' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PreviewImageUrl: { logicalName: 'previewimageurl', readOnly: true },
	QueryType: { logicalName: 'querytype', readOnly: true, type: 'Integer' },
	Rank: { logicalName: 'rank', readOnly: true, type: 'Integer' },
	ReadUrl: { logicalName: 'readurl', readOnly: true },
	SecondaryFileExtension: { logicalName: 'secondaryfileextension', readOnly: true },
	SiteTitle: { logicalName: 'sitetitle', readOnly: true },
	SiteUrl: { logicalName: 'siteurl', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	ViewCount: { logicalName: 'viewcount', readOnly: true, type: 'Integer' },
	WebLocationUrl: { logicalName: 'weblocationurl', readOnly: true },
};

/**
 * OfficeGraphDocument WebApi class for early-bound style coding
 * Usage: const officeGraphDocument = new OfficeGraphDocumentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OfficeGraphDocumentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOfficeGraphDocumentApi>(entity, 'officegraphdocument', 'officegraphdocuments', OfficeGraphDocumentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OfficeGraphDocumentApi extends IOfficeGraphDocumentApi { }

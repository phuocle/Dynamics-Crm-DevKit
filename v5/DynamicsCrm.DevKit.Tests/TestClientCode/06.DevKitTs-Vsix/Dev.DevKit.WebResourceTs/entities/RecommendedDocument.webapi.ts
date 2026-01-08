/**
 * RecommendedDocument.webapi.ts - RecommendedDocument WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * RecommendedDocument WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IRecommendedDocumentApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IRecommendedDocumentApi, 'FormattedValue'>]: string };
	/** Type the URL where the recommended document is located. */
	readonly AbsoluteUrl: string | null;
	/** Shows the associated record name of the recommended document. */
	AssociatedRecordName: string | null;
	/** Shows the name of the author of the recommended document. */
	Author: string | null;
	/** Select the document content type. */
	readonly ContentType: string | null;
	/** Shows the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the Edit URL of the recommended document. */
	readonly EditUrl: string | null;
	/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** Shows the external document. */
	ExternalDocumentId: string | null;
	/** Shows who last updated the document record. */
	ExternalModifiedBy: string | null;
	/** Shows the file size. */
	readonly FileSize: number | null;
	/** Shows the file type. */
	readonly FileType: string | null;
	/** Shows the full name of the recommended document. */
	readonly FullName: string | null;
	/** Stores the Icon Class name of the recommended document. */
	readonly IconClassName: string | null;
	/** Shows the location of the recommended document. */
	readonly Location: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Shows the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the Read URL of the recommended document. */
	readonly ReadUrl: string | null;
	/** Shows the recommended document record. */
	RecommendedDocumentId: DevKit.Guid | null;
	/** Choose the parent record that the recommended document record is associated with. */
	RegardingObjectId: DevKit.Guid | null;
	/** Shows the source storage of the recommended document. */
	Source: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Type a title for the entity. */
	Title: string | null;
	/** Shows the exchange rate for the currency associated with the recommended document with respect to the base currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Shows the time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Shows the recommended document version. */
	readonly Version: string | null;
	readonly VersionNumber: number | null;
}

const RecommendedDocumentFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AbsoluteUrl: { logicalName: 'absoluteurl', readOnly: true },
	AssociatedRecordName: { logicalName: 'associatedrecordname' },
	Author: { logicalName: 'author' },
	ContentType: { logicalName: 'contenttype', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EditUrl: { logicalName: 'editurl', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExternalDocumentId: { logicalName: 'externaldocumentid' },
	ExternalModifiedBy: { logicalName: 'externalmodifiedby' },
	FileSize: { logicalName: 'filesize', readOnly: true, type: 'Integer' },
	FileType: { logicalName: 'filetype', readOnly: true },
	FullName: { logicalName: 'fullname', readOnly: true },
	IconClassName: { logicalName: 'iconclassname', readOnly: true },
	Location: { logicalName: 'location', readOnly: true },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	ReadUrl: { logicalName: 'readurl', readOnly: true },
	RecommendedDocumentId: { logicalName: 'recommendeddocumentid' },
	RegardingObjectId: { logicalName: 'regardingobjectid' },
	Source: { logicalName: 'source' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	Version: { logicalName: 'version', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * RecommendedDocument WebApi class for early-bound style coding
 * Usage: const recommendedDocument = new RecommendedDocumentApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class RecommendedDocumentApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IRecommendedDocumentApi>(entity, 'recommendeddocument', 'recommendeddocuments', RecommendedDocumentFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface RecommendedDocumentApi extends IRecommendedDocumentApi { }

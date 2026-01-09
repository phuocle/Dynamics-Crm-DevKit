/**
 * MailMergeTemplate.webapi.ts - MailMergeTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * MailMergeTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMailMergeTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMailMergeTemplateApi, 'FormattedValue'>]: string };
	/** Body text of the mail merge template. */
	Body: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the mail merge template. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the mail merge template was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the mailmergetemplate. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Default data fields associated with the mail merge template. */
	DefaultFilter: string | null;
	/** Description of the mail merge template. */
	Description: string | null;
	/** Version of the Microsoft Office Word XML format used by the template. */
	DocumentFormat: number | null;
	/** Exchange rate for the currency associated with the mailmergetemplate with respect to the base currency. */
	readonly ExchangeRate: number | null;
	/** File name of the mail merge template. */
	FileName: string | null;
	/** File size of the mail merge template. */
	readonly FileSize: number | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Information about whether the mail merge template is personal or is available to all users. */
	IsPersonal: boolean | null;
	/** Language of the mail merge template. */
	LanguageCode: number | null;
	/** Unique identifier of the mail merge template. */
	MailMergeTemplateId: DevKit.Guid | null;
	/** For internal use only. */
	readonly MailMergeTemplateIdUnique: DevKit.Guid | null;
	/** Drop-down list for selecting the type of the mail merge. */
	MailMergeType: number | null;
	/** MIME type of the mail merge template. */
	MimeType: string | null;
	/** Unique identifier of the user who last modified the mail merge template. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the mail merge template was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the mailmergetemplate. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the mail merge template. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the mail merge template. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the mail merge template. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the mail merge template. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the mail merge template. */
	readonly OwningUser: DevKit.Guid | null;
	/** Parameter Xml. */
	readonly ParameterXml: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the mail merge template. */
	StateCode: number | null;
	/** Reason for the status of the mail merge template. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Unique identifier of the currency associated with the mailmergetemplate. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the mail merge template. */
	readonly VersionNumber: number | null;
}

const MailMergeTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Body: { logicalName: 'body' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DefaultFilter: { logicalName: 'defaultfilter' },
	Description: { logicalName: 'description' },
	DocumentFormat: { logicalName: 'documentformat', type: 'Integer' },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FileName: { logicalName: 'filename' },
	FileSize: { logicalName: 'filesize', readOnly: true, type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsPersonal: { logicalName: 'ispersonal', type: 'Boolean' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	MailMergeTemplateId: { logicalName: 'mailmergetemplateid' },
	MailMergeTemplateIdUnique: { logicalName: 'mailmergetemplateidunique', readOnly: true },
	MailMergeType: { logicalName: 'mailmergetype', type: 'Integer' },
	MimeType: { logicalName: 'mimetype' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParameterXml: { logicalName: 'parameterxml', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * MailMergeTemplate WebApi class for early-bound style coding
 * Usage: const mailMergeTemplate = new MailMergeTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MailMergeTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMailMergeTemplateApi>(entity, 'mailmergetemplate', 'mailmergetemplates', MailMergeTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MailMergeTemplateApi extends IMailMergeTemplateApi { }

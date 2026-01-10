//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMailMergeTemplate_Information {
		interface tab_general_Sections {
			/** Categorization */
			Categorization: DevKit.Controls.Section;
			/** Details */
			Details: DevKit.Controls.Section;
			/** Language */
			Language: DevKit.Controls.Section;
			/** Ownership */
			Ownership: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the mail merge template. */
			Description: DevKit.Controls.String;
			/** Information about whether the mail merge template is personal or is available to all users. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Language of the mail merge template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Name of the mail merge template. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the mail merge template. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type of mail merge template. */
			TemplateTypeCode: DevKit.Controls.String;
		}
	}
	export class FormMailMergeTemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form MailMergeTemplate_Information */
		Body: DevKit.FormMailMergeTemplate_Information.Body;
	}
	export class MailMergeTemplateApi {
		/**
		* DynamicsCrm.DevKit MailMergeTemplateApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Body text of the mail merge template. */
		Body: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.MailMergeTemplate.ComponentState | null;
		/** Unique identifier of the user who created the mail merge template. */
		readonly CreatedBy: string | null;
		/** Date and time when the mail merge template was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the mailmergetemplate. */
		readonly CreatedOnBehalfBy: string | null;
		/** Default data fields associated with the mail merge template. */
		DefaultFilter: string | null;
		/** Description of the mail merge template. */
		Description: string | null;
		/** Version of the Microsoft Office Word XML format used by the template. */
		DocumentFormat: OptionSet.MailMergeTemplate.DocumentFormat | null;
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
		MailMergeTemplateId: string | null;
		/** For internal use only. */
		readonly MailMergeTemplateIdUnique: string | null;
		/** Drop-down list for selecting the type of the mail merge. */
		MailMergeType: OptionSet.MailMergeTemplate.MailMergeType | null;
		/** MIME type of the mail merge template. */
		MimeType: string | null;
		/** Unique identifier of the user who last modified the mail merge template. */
		readonly ModifiedBy: string | null;
		/** Date and time when the mail merge template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the mailmergetemplate. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the mail merge template. */
		Name: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the mail merge template. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the mail merge template. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the mail merge template. */
		readonly OwningUser: string | null;
		/** Parameter Xml. */
		readonly ParameterXml: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the mail merge template. */
		StateCode: OptionSet.MailMergeTemplate.StateCode | null;
		/** Reason for the status of the mail merge template. */
		StatusCode: OptionSet.MailMergeTemplate.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Unique identifier of the currency associated with the mailmergetemplate. */
		TransactionCurrencyId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the mail merge template. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Body text of the mail merge template. */
			readonly Body: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the mail merge template. */
			readonly CreatedBy: string;
			/** Date and time when the mail merge template was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the mailmergetemplate. */
			readonly CreatedOnBehalfBy: string;
			/** Default data fields associated with the mail merge template. */
			readonly DefaultFilter: string;
			/** Description of the mail merge template. */
			readonly Description: string;
			/** Version of the Microsoft Office Word XML format used by the template. */
			readonly DocumentFormat: string;
			/** Exchange rate for the currency associated with the mailmergetemplate with respect to the base currency. */
			readonly ExchangeRate: string;
			/** File name of the mail merge template. */
			readonly FileName: string;
			/** File size of the mail merge template. */
			readonly FileSize: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Information about whether the mail merge template is personal or is available to all users. */
			readonly IsPersonal: string;
			/** Language of the mail merge template. */
			readonly LanguageCode: string;
			/** Unique identifier of the mail merge template. */
			readonly MailMergeTemplateId: string;
			/** For internal use only. */
			readonly MailMergeTemplateIdUnique: string;
			/** Drop-down list for selecting the type of the mail merge. */
			readonly MailMergeType: string;
			/** MIME type of the mail merge template. */
			readonly MimeType: string;
			/** Unique identifier of the user who last modified the mail merge template. */
			readonly ModifiedBy: string;
			/** Date and time when the mail merge template was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the mailmergetemplate. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the mail merge template. */
			readonly Name: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the mail merge template. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the mail merge template. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the mail merge template. */
			readonly OwningUser: string;
			/** Parameter Xml. */
			readonly ParameterXml: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the mail merge template. */
			readonly StateCode: string;
			/** Reason for the status of the mail merge template. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the mailmergetemplate. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the mail merge template. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailMergeTemplate {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum DocumentFormat {
			/** _2003 = 1*/
			_2003 = 1,
			/** _2007 = 2*/
			_2007 = 2
		}
		enum MailMergeType {
			/** Email_Message = 2*/
			Email_Message = 2,
			/** Envelope = 3*/
			Envelope = 3,
			/** Fax = 6*/
			Fax = 6,
			/** Labels = 4*/
			Labels = 4,
			/** Letter = 1*/
			Letter = 1,
			/** Quotes = 5*/
			Quotes = 5
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum TemplateTypeCode {
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
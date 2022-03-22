//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMailMergeTemplate_Information {
		interface tab_general_Sections {
			Categorization: DevKit.Controls.Section;
			Details: DevKit.Controls.Section;
			Language: DevKit.Controls.Section;
			Ownership: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormMailMergeTemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form MailMergeTemplate_Information */
		Body: DevKit.FormMailMergeTemplate_Information.Body;
		/** The Process of form MailMergeTemplate_Information */
		Process: DevKit.FormMailMergeTemplate_Information.Process;
		/** The SidePanes of form MailMergeTemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class MailMergeTemplateApi {
		/**
		* DynamicsCrm.DevKit MailMergeTemplateApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Body text of the mail merge template. */
		Body: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.MailMergeTemplate.ComponentState;
		/** Unique identifier of the user who created the mail merge template. */
		readonly CreatedBy: string;
		/** Date and time when the mail merge template was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the mailmergetemplate. */
		readonly CreatedOnBehalfBy: string;
		/** Default data fields associated with the mail merge template. */
		DefaultFilter: string;
		/** Description of the mail merge template. */
		Description: string;
		/** Version of the Microsoft Office Word XML format used by the template. */
		DocumentFormat: OptionSet.MailMergeTemplate.DocumentFormat;
		/** Exchange rate for the currency associated with the mailmergetemplate with respect to the base currency. */
		readonly ExchangeRate: number;
		/** File name of the mail merge template. */
		FileName: string;
		/** File size of the mail merge template. */
		readonly FileSize: number;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Information about whether the mail merge template is personal or is available to all users. */
		IsPersonal: boolean;
		/** Language of the mail merge template. */
		LanguageCode: number;
		/** Unique identifier of the mail merge template. */
		MailMergeTemplateId: string;
		/** For internal use only. */
		readonly MailMergeTemplateIdUnique: string;
		/** Drop-down list for selecting the type of the mail merge. */
		MailMergeType: OptionSet.MailMergeTemplate.MailMergeType;
		/** MIME type of the mail merge template. */
		MimeType: string;
		/** Unique identifier of the user who last modified the mail merge template. */
		readonly ModifiedBy: string;
		/** Date and time when the mail merge template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the mailmergetemplate. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the mail merge template. */
		Name: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
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
		StateCode: OptionSet.MailMergeTemplate.StateCode;
		/** Reason for the status of the mail merge template. */
		StatusCode: OptionSet.MailMergeTemplate.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the mailmergetemplate. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the mail merge template. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace MailMergeTemplate {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum DocumentFormat {
			/** 1 */
			_2003,
			/** 2 */
			_2007
		}
		enum MailMergeType {
			/** 2 */
			Email_Message,
			/** 3 */
			Envelope,
			/** 6 */
			Fax,
			/** 4 */
			Labels,
			/** 1 */
			Letter,
			/** 5 */
			Quotes
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum TemplateTypeCode {
			/** 1084 */
			Quote
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
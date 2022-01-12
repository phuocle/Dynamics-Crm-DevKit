//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quotelineinvoiceschedule_Project_Information {
		interface tab_GeneralTab_Sections {
			GeneralSection: DevKit.Controls.Section;
			InvoiceSection: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date for the invoice creation job to use as invoice date on the invoice generated */
			msdyn_InvoiceRunDate: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the date used by the invoice creation job to filter transactions that happened on or before this date for invoice creation */
			msdyn_transactioncutoffdate: DevKit.Controls.Date;
			/** Status of the Quote Line Invoice Schedule */
			statecode: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyn_quotelineinvoiceschedule_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotelineinvoiceschedule_Project_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelineinvoiceschedule_Project_Information */
		Body: DevKit.Formmsdyn_quotelineinvoiceschedule_Project_Information.Body;
		/** The SidePanes of form msdyn_quotelineinvoiceschedule_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotelineinvoiceschedule_Project_Quick_Create {
		interface tab_tab_1_Sections {
			GeneralSection: DevKit.Controls.Section;
			InvoiceSection: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the date for the invoice creation job to use as invoice date on the invoice generated */
			msdyn_InvoiceRunDate: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Enter the date used by the invoice creation job to filter transactions that happened on or before this date for invoice creation */
			msdyn_transactioncutoffdate: DevKit.Controls.Date;
		}
	}
	class Formmsdyn_quotelineinvoiceschedule_Project_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotelineinvoiceschedule_Project_Quick_Create Quick Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelineinvoiceschedule_Project_Quick_Create */
		Body: DevKit.Formmsdyn_quotelineinvoiceschedule_Project_Quick_Create.Body;
	}
	class msdyn_quotelineinvoicescheduleApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotelineinvoicescheduleApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the date for the invoice creation job to use as invoice date on the invoice generated */
		msdyn_InvoiceRunDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** (Deprecated) Type the reference to the quote line that this invoice schedule is for. */
		msdyn_QuoteLine: DevKit.WebApi.StringValue;
		/** Unique identifier for Quote Line associated with this invoice schedule. */
		msdyn_quotelineid: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_quotelineinvoicescheduleId: DevKit.WebApi.GuidValue;
		/** Billing milestone for the quote line */
		msdyn_QuoteLineScheduleOfValue: DevKit.WebApi.LookupValue;
		/** Enter the date used by the invoice creation job to filter transactions that happened on or before this date for invoice creation */
		msdyn_transactioncutoffdate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Quote Line Invoice Schedule */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Quote Line Invoice Schedule */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotelineinvoiceschedule {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
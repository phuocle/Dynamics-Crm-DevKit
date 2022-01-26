//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_quotelinescheduleofvalue_Project_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
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
			/** Enter the value of the amount on the billing milestone. */
			msdyn_amount: DevKit.Controls.Money;
			msdyn_amount_after_tax: DevKit.Controls.Money;
			/** Enter the date on which the milestone is to be invoiced. This, in conjunction with the Invoice status, will be used by the invoice creation job. */
			msdyn_invoicedate: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Select the project task that is tracking the work for this billing milestone. */
			msdyn_projecttask: DevKit.Controls.Lookup;
			/** Shows a reference to the quote line that this milestone schedule belongs to. */
			msdyn_quotelineid: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
			/** Status of the Quote Line Schedule Of Value */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_quotelinescheduleofvalue_Project_Information extends DevKit.IForm {
		/**
		* Project Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelinescheduleofvalue_Project_Information */
		Body: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Information.Body;
		/** The Header section of form msdyn_quotelinescheduleofvalue_Project_Information */
		Header: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Information.Header;
		/** The Process of form msdyn_quotelinescheduleofvalue_Project_Information */
		Process: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Information.Process;
		/** The SidePanes of form msdyn_quotelinescheduleofvalue_Project_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_quotelinescheduleofvalue_Project_Quick_Create {
		interface tab_tab_1_Sections {
			AmountSection: DevKit.Controls.Section;
			GeneralSection: DevKit.Controls.Section;
			InvoiceSection: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the value of the amount on the billing milestone. */
			msdyn_amount: DevKit.Controls.Money;
			/** Enter the date on which the milestone is to be invoiced. This, in conjunction with the Invoice status, will be used by the invoice creation job. */
			msdyn_invoicedate: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Select the project task that is tracking the work for this billing milestone. */
			msdyn_projecttask: DevKit.Controls.Lookup;
			/** Shows a reference to the quote line that this milestone schedule belongs to. */
			msdyn_quotelineid: DevKit.Controls.Lookup;
			msdyn_tax: DevKit.Controls.Money;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_quotelinescheduleofvalue_Project_Quick_Create extends DevKit.IForm {
		/**
		* Project Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelinescheduleofvalue_Project_Quick_Create */
		Body: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Quick_Create.Body;
	}
	class msdyn_quotelinescheduleofvalueApi {
		/**
		* DynamicsCrm.DevKit msdyn_quotelinescheduleofvalueApi
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
		/** Exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the value of the amount on the billing milestone. */
		msdyn_amount: DevKit.WebApi.MoneyValue;
		msdyn_amount_after_tax: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the amount_after_tax in base currency. */
		msdyn_amount_after_tax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the date on which the milestone is to be invoiced. This, in conjunction with the Invoice status, will be used by the invoice creation job. */
		msdyn_invoicedate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Select whether this milestone was invoiced. Valid values are Not ready for invoicing, Ready for Invoicing, On an invoice, and Invoiced. */
		msdyn_invoicestatus: DevKit.WebApi.OptionSetValue;
		/** Indicates if this record was created via import. It's purpose is to support data import. */
		msdyn_isdataimport: DevKit.WebApi.BooleanValue;
		/** Type the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Select the project task that is tracking the work for this billing milestone. */
		msdyn_projecttask: DevKit.WebApi.LookupValue;
		/** (Deprecated) Shows a reference to the quote line that this milestone schedule belongs to. */
		msdyn_quoteline: DevKit.WebApi.StringValue;
		/** Shows a reference to the quote line that this milestone schedule belongs to. */
		msdyn_quotelineid: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_quotelinescheduleofvalueId: DevKit.WebApi.GuidValue;
		msdyn_tax: DevKit.WebApi.MoneyValue;
		/** Value of the tax in base currency. */
		msdyn_tax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Quote Line Schedule Of Value */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Quote Line Schedule Of Value */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_quotelinescheduleofvalue {
		enum msdyn_invoicestatus {
			/** 192350002 */
			Customer_invoice_created,
			/** 192350003 */
			Customer_invoice_posted,
			/** 192350000 */
			Not_Ready_for_invoicing,
			/** 192350001 */
			Ready_for_invoicing
		}
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
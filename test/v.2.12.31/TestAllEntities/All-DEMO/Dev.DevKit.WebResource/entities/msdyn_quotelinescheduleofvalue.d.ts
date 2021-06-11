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
	}
	class Formmsdyn_quotelinescheduleofvalue_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quotelinescheduleofvalue_Project_Information
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
		* DynamicsCrm.DevKit form msdyn_quotelinescheduleofvalue_Project_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_quotelinescheduleofvalue_Project_Quick_Create */
		Body: DevKit.Formmsdyn_quotelinescheduleofvalue_Project_Quick_Create.Body;
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
//{'JsForm':['Project Information','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
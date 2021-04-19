//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_orderinvoicingproduct_Information {
		interface tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F_Sections {
			_78C13C72_F7FB_4F7D_BEBF_B068717AB74F_SECTION_2: DevKit.Controls.Section;
		}
		interface tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F extends DevKit.Controls.ITab {
			Section: tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F_Sections;
		}
		interface Tabs {
			_78C13C72_F7FB_4F7D_BEBF_B068717AB74F: tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F;
		}
		interface Body {
			Tab: Tabs;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Total sales amount for the product line. */
			msdyn_Amount: DevKit.Controls.Money;
			/** Shows the order of this product within the order invoicing setup. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The invoicing setup this product belongs to. */
			msdyn_OrderInvoicingSetup: DevKit.Controls.Lookup;
			/** The product associated with the transaction. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitPrice: DevKit.Controls.Money;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_orderinvoicingproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_orderinvoicingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderinvoicingproduct_Information */
		Body: MyDog.Formmsdyn_orderinvoicingproduct_Information.Body;
		/** The Navigation of form msdyn_orderinvoicingproduct_Information */
		Navigation: MyDog.Formmsdyn_orderinvoicingproduct_Information.Navigation;
	}
	namespace Formmsdyn_orderinvoicingproduct_New_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
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
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The product associated with the transaction. */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Controls.Decimal;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitPrice: DevKit.Controls.Money;
		}
	}
	class Formmsdyn_orderinvoicingproduct_New_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_orderinvoicingproduct_New_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form msdyn_orderinvoicingproduct_New_Form */
		Body: MyDog.Formmsdyn_orderinvoicingproduct_New_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_orderinvoicingproduct {
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
//{'JsForm':['Information','msdyn_orderinvoicingproduct New_Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
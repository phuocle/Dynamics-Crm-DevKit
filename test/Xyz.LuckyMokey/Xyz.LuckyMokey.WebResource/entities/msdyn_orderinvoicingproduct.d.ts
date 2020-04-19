//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_orderinvoicingproduct_Information {
		interface tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F_Sections {
			_78C13C72_F7FB_4F7D_BEBF_B068717AB74F_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F extends DevKit.Form.Controls.IControlTab {
			Section: tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F_Sections;
		}
		interface Tabs {
			_78C13C72_F7FB_4F7D_BEBF_B068717AB74F: tab__78C13C72_F7FB_4F7D_BEBF_B068717AB74F;
		}
		interface Body {
			Tab: Tabs;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Form.Controls.ControlDecimal;
			/** Total sales amount for the product line. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Shows the order of this product within the order invoicing setup. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** The invoicing setup this product belongs to. */
			msdyn_OrderInvoicingSetup: DevKit.Form.Controls.ControlLookup;
			/** The product associated with the transaction. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitPrice: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_orderinvoicingproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_orderinvoicingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_orderinvoicingproduct_Information */
		Body: LuckyMokey.Formmsdyn_orderinvoicingproduct_Information.Body;
		/** The Navigation of form msdyn_orderinvoicingproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_orderinvoicingproduct_Information.Navigation;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
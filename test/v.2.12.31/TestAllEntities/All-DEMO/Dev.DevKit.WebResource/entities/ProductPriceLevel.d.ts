//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormProductPriceLevel_Information {
		interface tab_general_Sections {
			price_list_item_information: DevKit.Controls.Section;
			pricing: DevKit.Controls.Section;
			rounding: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Monetary amount for the price list. */
			Amount: DevKit.Controls.Money;
			/** Unique identifier of the discount list associated with the price list. */
			DiscountTypeId: DevKit.Controls.Lookup;
			/** Percentage for the price list. */
			Percentage: DevKit.Controls.Decimal;
			/** Unique identifier of the price level associated with this price list. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Pricing method applied to the price list. */
			PricingMethodCode: DevKit.Controls.OptionSet;
			/** Product associated with the price list. */
			ProductId: DevKit.Controls.Lookup;
			/** Quantity of the product that must be sold for a given price level. */
			QuantitySellingCode: DevKit.Controls.OptionSet;
			/** Rounding option amount for the price list. */
			RoundingOptionAmount: DevKit.Controls.Money;
			/** Option for rounding the price list. */
			RoundingOptionCode: DevKit.Controls.OptionSet;
			/** Policy for rounding the price list. */
			RoundingPolicyCode: DevKit.Controls.OptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Unique identifier of the unit for the price list. */
			UoMId: DevKit.Controls.Lookup;
		}
	}
	class FormProductPriceLevel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form ProductPriceLevel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ProductPriceLevel_Information */
		Body: DevKit.FormProductPriceLevel_Information.Body;
	}
	namespace FormProduct_Price_List {
		interface tab_general_Sections {
			Currency: DevKit.Controls.Section;
			price_list_item_information: DevKit.Controls.Section;
		}
		interface tab_Pricing_information_Sections {
			pricing: DevKit.Controls.Section;
			rounding: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_Pricing_information extends DevKit.Controls.ITab {
			Section: tab_Pricing_information_Sections;
		}
		interface Tabs {
			general: tab_general;
			Pricing_information: tab_Pricing_information;
		}
		interface Body {
			Tab: Tabs;
			/** Monetary amount for the price list. */
			Amount: DevKit.Controls.Money;
			/** Unique identifier of the discount list associated with the price list. */
			DiscountTypeId: DevKit.Controls.Lookup;
			/** Percentage for the price list. */
			Percentage: DevKit.Controls.Decimal;
			/** Unique identifier of the price level associated with this price list. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** Pricing method applied to the price list. */
			PricingMethodCode: DevKit.Controls.OptionSet;
			/** Product associated with the price list. */
			ProductId: DevKit.Controls.Lookup;
			/** Quantity of the product that must be sold for a given price level. */
			QuantitySellingCode: DevKit.Controls.OptionSet;
			/** Rounding option amount for the price list. */
			RoundingOptionAmount: DevKit.Controls.Money;
			/** Option for rounding the price list. */
			RoundingOptionCode: DevKit.Controls.OptionSet;
			/** Policy for rounding the price list. */
			RoundingPolicyCode: DevKit.Controls.OptionSet;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Unique identifier of the unit for the price list. */
			UoMId: DevKit.Controls.Lookup;
		}
	}
	class FormProduct_Price_List extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Product_Price_List
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product_Price_List */
		Body: DevKit.FormProduct_Price_List.Body;
	}
}
declare namespace OptionSet {
	namespace ProductPriceLevel {
		enum PricingMethodCode {
			/** 1 */
			Currency_Amount,
			/** 4 */
			Percent_Margin_Current_Cost,
			/** 6 */
			Percent_Margin_Standard_Cost,
			/** 3 */
			Percent_Markup_Current_Cost,
			/** 5 */
			Percent_Markup_Standard_Cost,
			/** 2 */
			Percent_of_List
		}
		enum QuantitySellingCode {
			/** 1 */
			No_Control,
			/** 2 */
			Whole,
			/** 3 */
			Whole_and_Fractional
		}
		enum RoundingOptionCode {
			/** 1 */
			Ends_in,
			/** 2 */
			Multiple_of
		}
		enum RoundingPolicyCode {
			/** 3 */
			Down,
			/** 1 */
			None,
			/** 4 */
			To_Nearest,
			/** 2 */
			Up
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
//{'JsForm':['Information','Product Price List'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
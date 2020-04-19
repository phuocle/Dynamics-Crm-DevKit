//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormTransactionCurrency_Information {
		interface tab_general_Sections {
			Select_Base_Currency: DevKit.Form.Controls.ControlSection;
			Transaction_currency_information: DevKit.Form.Controls.ControlSection;
			Currency_conversion: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			systemcurrency: DevKit.Form.Controls.ControlActionCards;
			/** Name of the transaction currency. */
			CurrencyName: DevKit.Form.Controls.ControlString;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision: DevKit.Form.Controls.ControlInteger;
			/** Symbol for the transaction currency. */
			CurrencySymbol: DevKit.Form.Controls.ControlString;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate: DevKit.Form.Controls.ControlDecimal;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTransactionCurrency_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form TransactionCurrency_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form TransactionCurrency_Information */
		Body: LuckyMokey.FormTransactionCurrency_Information.Body;
	}
}
declare namespace OptionSet {
	namespace TransactionCurrency {
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
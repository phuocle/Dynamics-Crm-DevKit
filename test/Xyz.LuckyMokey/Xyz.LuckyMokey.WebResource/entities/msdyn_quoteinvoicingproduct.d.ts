//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_quoteinvoicingproduct_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quoteinvoicingproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quoteinvoicingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quoteinvoicingproduct_Information */
		Body: LuckyMokey.Formmsdyn_quoteinvoicingproduct_Information.Body;
	}
	namespace Formmsdyn_quoteinvoicingproduct_Information {
		interface tab_General_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			/** Exchange rate for the currency associated with the entity with respect to the base currency. */
			ExchangeRate: DevKit.Form.Controls.ControlDecimal;
			/** Total sales amount for the product line. */
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			/** Shows the order of this product within the quote invoicing setup. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** The product associated with the transaction. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** The invoicing setup this product belongs to. */
			msdyn_QuoteInvoicingSetup: DevKit.Form.Controls.ControlLookup;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitPrice: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_quoteinvoicingproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quoteinvoicingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quoteinvoicingproduct_Information */
		Body: LuckyMokey.Formmsdyn_quoteinvoicingproduct_Information.Body;
	}
	namespace Formmsdyn_quoteinvoicingproduct_Information {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** The product associated with the transaction. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity to bill. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDecimal;
			/** The unit that determines the pricing for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the amount you want to charge the customer per unit. */
			msdyn_UnitPrice: DevKit.Form.Controls.ControlMoney;
		}
	}
	class Formmsdyn_quoteinvoicingproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_quoteinvoicingproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_quoteinvoicingproduct_Information */
		Body: LuckyMokey.Formmsdyn_quoteinvoicingproduct_Information.Body;
	}
	class msdyn_quoteinvoicingproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_quoteinvoicingproductApi
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
		/** Total sales amount for the product line. */
		msdyn_Amount: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Amount in base currency. */
		msdyn_amount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** Shows the order of this product within the quote invoicing setup. */
		msdyn_LineOrder: DevKit.WebApi.IntegerValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** The product associated with the transaction. */
		msdyn_Product: DevKit.WebApi.LookupValue;
		/** Enter the quantity to bill. */
		msdyn_Quantity: DevKit.WebApi.DecimalValue;
		/** Unique identifier for entity instances */
		msdyn_quoteinvoicingproductId: DevKit.WebApi.GuidValue;
		/** The invoicing setup this product belongs to. */
		msdyn_QuoteInvoicingSetup: DevKit.WebApi.LookupValue;
		/** The unit that determines the pricing for this product */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Enter the amount you want to charge the customer per unit. */
		msdyn_UnitPrice: DevKit.WebApi.MoneyValue;
		/** Value of the Unit Price in base currency. */
		msdyn_unitprice_Base: DevKit.WebApi.MoneyValueReadonly;
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
		/** Status of the Quote Invoicing Produc */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Quote Invoicing Produc */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_quoteinvoicingproduct {
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
//{'JsForm':['Information','Information','Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
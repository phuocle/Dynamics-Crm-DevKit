//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_transactioncategorypricelevel_Information {
		interface tab__31418574_0439_4AAC_9B66_828C997660DC_Sections {
			_44CB3D24_2528_4D5E_B5C1_87B87831EED6: DevKit.Form.Controls.ControlSection;
			PricingSection: DevKit.Form.Controls.ControlSection;
			_31418574_0439_4AAC_9B66_828C997660DC_SECTION_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab__31418574_0439_4AAC_9B66_828C997660DC extends DevKit.Form.Controls.IControlTab {
			Section: tab__31418574_0439_4AAC_9B66_828C997660DC_Sections;
		}
		interface Tabs {
			_31418574_0439_4AAC_9B66_828C997660DC: tab__31418574_0439_4AAC_9B66_828C997660DC;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Enter the mark up on cost when creating billable transactions from cost transactions. This field is relevant only when the price calculation is "Markup over cost."  */
			msdyn_percent: DevKit.Form.Controls.ControlDecimal;
			/** Enter the price of the transaction category. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Select the method used to determine the sales or bill rate of expenses in this category. Valid values are Price per unit, At cost or Markup over cost. */
			msdyn_pricecalculation: DevKit.Form.Controls.ControlOptionSet;
			/** Select the price list that this price list line belongs to. */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Select the transaction category whose price is being setup */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Select the units that transactions of this category can be expressed in. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Select the unit schedule that determines in which units the category can be priced. */
			msdyn_UnitSchedule: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_transactioncategorypricelevel_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_transactioncategorypricelevel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_transactioncategorypricelevel_Information */
		Body: LuckyMokey.Formmsdyn_transactioncategorypricelevel_Information.Body;
	}
	namespace Formmsdyn_transactioncategorypricelevel_Quick_Create {
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
			/** Enter the mark up on cost when creating billable transactions from cost transactions. This field is relevant only when the price calculation is "Markup over cost."  */
			msdyn_percent: DevKit.Form.Controls.ControlDecimal;
			/** Enter the price of the transaction category. */
			msdyn_Price: DevKit.Form.Controls.ControlMoney;
			/** Select the method used to determine the sales or bill rate of expenses in this category. Valid values are Price per unit, At cost or Markup over cost. */
			msdyn_pricecalculation: DevKit.Form.Controls.ControlOptionSet;
			/** Select the transaction category whose price is being setup */
			msdyn_TransactionCategory: DevKit.Form.Controls.ControlLookup;
			/** Select the units that transactions of this category can be expressed in. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Select the unit schedule that determines in which units the category can be priced. */
			msdyn_UnitSchedule: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_transactioncategorypricelevel_Quick_Create extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_transactioncategorypricelevel_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_transactioncategorypricelevel_Quick_Create */
		Body: LuckyMokey.Formmsdyn_transactioncategorypricelevel_Quick_Create.Body;
	}
	class msdyn_transactioncategorypricelevelApi {
		/**
		* DynamicsCrm.DevKit msdyn_transactioncategorypricelevelApi
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
		/** Type the name of the custom entity. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Enter the mark up on cost when creating billable transactions from cost transactions. This field is relevant only when the price calculation is "Markup over cost."  */
		msdyn_percent: DevKit.WebApi.DecimalValue;
		/** Enter the price of the transaction category. */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Value of the Price in base currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the method used to determine the sales or bill rate of expenses in this category. Valid values are Price per unit, At cost or Markup over cost. */
		msdyn_pricecalculation: DevKit.WebApi.OptionSetValue;
		/** Select the price list that this price list line belongs to. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Select the transaction category whose price is being setup */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_transactioncategorypricelevelId: DevKit.WebApi.GuidValue;
		/** Select the units that transactions of this category can be expressed in. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Select the unit schedule that determines in which units the category can be priced. */
		msdyn_UnitSchedule: DevKit.WebApi.LookupValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Transaction Category Price */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Transaction Category Price */
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
	namespace msdyn_transactioncategorypricelevel {
		enum msdyn_pricecalculation {
			/** 192350000 */
			Price_per_unit,
			/** 192350001 */
			At_cost,
			/** 192350002 */
			Markup_percentage
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
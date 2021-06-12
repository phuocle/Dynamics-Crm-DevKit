//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_resourcecategorypricelevel_Information {
		interface tab__49F07652_2E6F_43FA_ADF5_909BEA7A9D89_Sections {
			_49F07652_2E6F_43FA_ADF5_909BEA7A9D89_SECTION_2: DevKit.Controls.Section;
			PricingSection: DevKit.Controls.Section;
		}
		interface tab__49F07652_2E6F_43FA_ADF5_909BEA7A9D89 extends DevKit.Controls.ITab {
			Section: tab__49F07652_2E6F_43FA_ADF5_909BEA7A9D89_Sections;
		}
		interface Tabs {
			_49F07652_2E6F_43FA_ADF5_909BEA7A9D89: tab__49F07652_2E6F_43FA_ADF5_909BEA7A9D89;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the custom entity. */
			msdyn_description: DevKit.Controls.String;
			/** Select the organizational unit of the resource performing the work. */
			msdyn_organizationalunit: DevKit.Controls.Lookup;
			/** Enter the price in time units of the role. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the price list to which this price list item is being added. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the role that the price is being set for. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Select the units of time in which role is being priced. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit schedule of the time unit selected. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_resourcecategorypricelevel_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_resourcecategorypricelevel_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcecategorypricelevel_Information */
		Body: DevKit.Formmsdyn_resourcecategorypricelevel_Information.Body;
	}
	namespace Formmsdyn_resourcecategorypricelevel_Quick_Create {
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
			/** Select the organizational unit of the resource performing the work. */
			msdyn_organizationalunit: DevKit.Controls.Lookup;
			/** Enter the price in time units of the role. */
			msdyn_Price: DevKit.Controls.Money;
			/** Select the price list to which this price list item is being added. */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Select the role that the price is being set for. */
			msdyn_ResourceCategory: DevKit.Controls.Lookup;
			/** Select the units of time in which role is being priced. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Select the unit schedule of the time unit selected. */
			msdyn_UnitSchedule: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_resourcecategorypricelevel_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_resourcecategorypricelevel_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_resourcecategorypricelevel_Quick_Create */
		Body: DevKit.Formmsdyn_resourcecategorypricelevel_Quick_Create.Body;
	}
	class msdyn_resourcecategorypricelevelApi {
		/**
		* DynamicsCrm.DevKit msdyn_resourcecategorypricelevelApi
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
		/** Select the bookable resource that the price is being set for. */
		msdyn_bookableresource: DevKit.WebApi.LookupValue;
		/** Type the name of the custom entity. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Select the organizational unit of the resource performing the work. */
		msdyn_organizationalunit: DevKit.WebApi.LookupValue;
		/** Enter the markup percent over cost. This field is relevant only when the price calculation method selected is "Markup over cost." */
		msdyn_percent: DevKit.WebApi.DecimalValue;
		/** Enter the price in time units of the role. */
		msdyn_Price: DevKit.WebApi.MoneyValue;
		/** Value of the Price in base currency. */
		msdyn_price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the price calculation method to determine the price as a function of cost. This field is only relevant for expense categories. */
		msdyn_pricecalculation: DevKit.WebApi.OptionSetValueReadonly;
		/** Value of the price in primary unit of the unit group */
		msdyn_PriceInPrimaryUnit: DevKit.WebApi.MoneyValue;
		/** Value of the Price In Primary Unit in base currency. */
		msdyn_priceinprimaryunit_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the price list to which this price list item is being added. */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Select the primary unit of the unit schedule selected. */
		msdyn_PrimaryUnit: DevKit.WebApi.LookupValue;
		/** Select the role that the price is being set for. */
		msdyn_ResourceCategory: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_resourcecategorypricelevelId: DevKit.WebApi.GuidValue;
		/** Select the transaction category that the price is being set for. */
		msdyn_transactioncategory: DevKit.WebApi.LookupValue;
		/** Select the units of time in which role is being priced. */
		msdyn_Unit: DevKit.WebApi.LookupValue;
		/** Select the unit schedule of the time unit selected. */
		msdyn_UnitSchedule: DevKit.WebApi.LookupValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Resource Category Price */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Resource Category Price */
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
	namespace msdyn_resourcecategorypricelevel {
		enum msdyn_pricecalculation {
			/** 192350001 */
			At_cost,
			/** 192350002 */
			Markup_percentage,
			/** 192350000 */
			Price_per_unit
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
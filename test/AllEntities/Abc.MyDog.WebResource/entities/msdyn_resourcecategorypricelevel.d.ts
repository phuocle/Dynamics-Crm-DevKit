//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_resourcecategorypricelevel_Information {
		interface tab__49F07652_2E6F_43FA_ADF5_909BEA7A9D89_Sections {
			PricingSection: DevKit.Controls.Section;
			_49F07652_2E6F_43FA_ADF5_909BEA7A9D89_SECTION_2: DevKit.Controls.Section;
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
		Body: MyDog.Formmsdyn_resourcecategorypricelevel_Information.Body;
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
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form msdyn_resourcecategorypricelevel_Quick_Create */
		Body: MyDog.Formmsdyn_resourcecategorypricelevel_Quick_Create.Body;
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
//{'JsForm':['Information','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormPrice_Level {
		interface Header {
			/** Reason for the status of the price list. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_General_Sections {
			price_level_information: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ResourceCategoryTab_Sections {
			ResourceCategorySection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ResourceCategoryMarkupTab_Sections {
			ResourceCategoryMarkupSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_CategoryTab_Sections {
			CategorySection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Price_List_Items_Sections {
			pricelistbyproduct: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TERRITORYRELATIONSHIP_TAB_Sections {
			Territories: DevKit.Form.Controls.ControlSection;
			service_settings: DevKit.Form.Controls.ControlSection;
		}
		interface tab_General extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Sections;
		}
		interface tab_ResourceCategoryTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ResourceCategoryTab_Sections;
		}
		interface tab_ResourceCategoryMarkupTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_ResourceCategoryMarkupTab_Sections;
		}
		interface tab_CategoryTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_CategoryTab_Sections;
		}
		interface tab_Price_List_Items extends DevKit.Form.Controls.IControlTab {
			Section: tab_Price_List_Items_Sections;
		}
		interface tab_TERRITORYRELATIONSHIP_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_TERRITORYRELATIONSHIP_TAB_Sections;
		}
		interface Tabs {
			General: tab_General;
			ResourceCategoryTab: tab_ResourceCategoryTab;
			ResourceCategoryMarkupTab: tab_ResourceCategoryMarkupTab;
			CategoryTab: tab_CategoryTab;
			Price_List_Items: tab_Price_List_Items;
			TERRITORYRELATIONSHIP_TAB: tab_TERRITORYRELATIONSHIP_TAB;
		}
		interface Body {
			Tab: Tabs;
			ResourceCategoryGrid: DevKit.Form.Controls.ControlGrid;
			ResourceCategoryMarkupGrid: DevKit.Form.Controls.ControlGrid;
			CategoryGrid: DevKit.Form.Controls.ControlGrid;
			pricelistitemsgrid: DevKit.Form.Controls.ControlGrid;
			RelatedTerritoriesGrid: DevKit.Form.Controls.ControlGrid;
			/** Date on which the price list becomes effective. */
			BeginDate: DevKit.Form.Controls.ControlDate;
			/** Description of the price list. */
			Description: DevKit.Form.Controls.ControlString;
			/** Date that is the last day the price list is valid. */
			EndDate: DevKit.Form.Controls.ControlDate;
			msdyn_BreakHoursBillable: DevKit.Form.Controls.ControlBoolean;
			/** Shows the price level that this price level was copied from. */
			msdyn_CopiedFromPriceLevel: DevKit.Form.Controls.ControlLookup;
			/** Select the context for this price level i.e whether it is sales prices, cost prices or purchase prices */
			msdyn_Module: DevKit.Form.Controls.ControlOptionSet;
			/** Select the default unit of role based time on this price list */
			msdyn_TimeUnit: DevKit.Form.Controls.ControlLookup;
			/** Name of the price list. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the currency associated with the price level. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_pricelevel_msdyn_resourcecategorypricelevel_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_resourcecategorymarkuppricelevel_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_transactioncategorypricelevel_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			navItems: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_pricelevel_CopiedFromPriceLevel: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_agreement_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_agreementbookingproduct_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_agreementbookingservice_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_agreementinvoiceproduct_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_rma_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_rmaproduct_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_workorder_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_workorderproduct_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_workorderservice_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_workordertype_PriceList: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_pricelevel_msdyn_fieldservicepricelistitem_PriceList: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormPrice_Level extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Price_Level
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Price_Level */
		Body: LuckyMokey.FormPrice_Level.Body;
		/** The Header section of form Price_Level */
		Header: LuckyMokey.FormPrice_Level.Header;
		/** The Navigation of form Price_Level */
		Navigation: LuckyMokey.FormPrice_Level.Navigation;
	}
}
declare namespace OptionSet {
	namespace PriceLevel {
		enum FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum msdyn_Entity {
			/** 192350000 */
			Organization,
			/** 192350001 */
			Customer,
			/** 192350002 */
			Sales_document,
			/** 192350003 */
			Project
		}
		enum msdyn_Module {
			/** 192350000 */
			Cost,
			/** 192350001 */
			Purchase,
			/** 192350002 */
			Sales
		}
		enum PaymentMethodCode {
			/** 1 */
			Default_Value
		}
		enum ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 100001 */
			Active,
			/** 100002 */
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
//{'JsForm':['Price Level'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
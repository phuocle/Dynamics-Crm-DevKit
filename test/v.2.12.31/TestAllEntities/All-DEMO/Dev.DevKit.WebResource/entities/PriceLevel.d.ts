//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPrice_Level {
		interface Header extends DevKit.Controls.IHeader {
			/** Reason for the status of the price list. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_CategoryTab_Sections {
			CategorySection: DevKit.Controls.Section;
		}
		interface tab_General_Sections {
			Description: DevKit.Controls.Section;
			price_level_information: DevKit.Controls.Section;
		}
		interface tab_Price_List_Items_Sections {
			pricelistbyproduct: DevKit.Controls.Section;
		}
		interface tab_ResourceCategoryMarkupTab_Sections {
			ResourceCategoryMarkupSection: DevKit.Controls.Section;
		}
		interface tab_ResourceCategoryTab_Sections {
			ResourceCategorySection: DevKit.Controls.Section;
		}
		interface tab_TERRITORYRELATIONSHIP_TAB_Sections {
			service_settings: DevKit.Controls.Section;
			Territories: DevKit.Controls.Section;
		}
		interface tab_CategoryTab extends DevKit.Controls.ITab {
			Section: tab_CategoryTab_Sections;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface tab_Price_List_Items extends DevKit.Controls.ITab {
			Section: tab_Price_List_Items_Sections;
		}
		interface tab_ResourceCategoryMarkupTab extends DevKit.Controls.ITab {
			Section: tab_ResourceCategoryMarkupTab_Sections;
		}
		interface tab_ResourceCategoryTab extends DevKit.Controls.ITab {
			Section: tab_ResourceCategoryTab_Sections;
		}
		interface tab_TERRITORYRELATIONSHIP_TAB extends DevKit.Controls.ITab {
			Section: tab_TERRITORYRELATIONSHIP_TAB_Sections;
		}
		interface Tabs {
			CategoryTab: tab_CategoryTab;
			General: tab_General;
			Price_List_Items: tab_Price_List_Items;
			ResourceCategoryMarkupTab: tab_ResourceCategoryMarkupTab;
			ResourceCategoryTab: tab_ResourceCategoryTab;
			TERRITORYRELATIONSHIP_TAB: tab_TERRITORYRELATIONSHIP_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Date on which the price list becomes effective. */
			BeginDate: DevKit.Controls.Date;
			/** Description of the price list. */
			Description: DevKit.Controls.String;
			/** Date that is the last day the price list is valid. */
			EndDate: DevKit.Controls.Date;
			msdyn_BreakHoursBillable: DevKit.Controls.Boolean;
			/** Shows the price level that this price level was copied from. */
			msdyn_CopiedFromPriceLevel: DevKit.Controls.Lookup;
			/** Select the context for this price level i.e whether it is sales prices, cost prices or purchase prices */
			msdyn_Module: DevKit.Controls.OptionSet;
			/** Select the default unit of role based time on this price list */
			msdyn_TimeUnit: DevKit.Controls.Lookup;
			/** Name of the price list. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the currency associated with the price level. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_pricelevel_msdyn_agreement_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_agreementbookingproduct_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_agreementbookingservice_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_agreementinvoiceproduct_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_fieldservicepricelistitem_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_resourcecategorymarkuppricelevel_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_resourcecategorypricelevel_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_rma_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_rmaproduct_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_transactioncategorypricelevel_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_workorder_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_workorderproduct_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_workorderservice_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_msdyn_workordertype_PriceList: DevKit.Controls.NavigationItem,
			nav_msdyn_pricelevel_pricelevel_CopiedFromPriceLevel: DevKit.Controls.NavigationItem,
			navItems: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ResourceCategoryGrid: DevKit.Controls.Grid;
			ResourceCategoryMarkupGrid: DevKit.Controls.Grid;
			CategoryGrid: DevKit.Controls.Grid;
			pricelistitemsgrid: DevKit.Controls.Grid;
			RelatedTerritoriesGrid: DevKit.Controls.Grid;
		}
	}
	class FormPrice_Level extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Price_Level
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Price_Level */
		Body: DevKit.FormPrice_Level.Body;
		/** The Header section of form Price_Level */
		Header: DevKit.FormPrice_Level.Header;
		/** The Navigation of form Price_Level */
		Navigation: DevKit.FormPrice_Level.Navigation;
		/** The Grid of form Price_Level */
		Grid: DevKit.FormPrice_Level.Grid;
	}
	namespace FormPrice_List_Quick_Create_5x5 {
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
			/** Date on which the price list becomes effective. */
			BeginDate: DevKit.Controls.Date;
			/** Description of the price list. */
			Description: DevKit.Controls.String;
			/** Date that is the last day the price list is valid. */
			EndDate: DevKit.Controls.Date;
			/** Name of the price list. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the currency associated with the price level. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormPrice_List_Quick_Create_5x5 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Price_List_Quick_Create_5x5
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Price_List_Quick_Create_5x5 */
		Body: DevKit.FormPrice_List_Quick_Create_5x5.Body;
	}
}
declare namespace OptionSet {
	namespace PriceLevel {
		enum FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum msdyn_Entity {
			/** 192350001 */
			Customer,
			/** 192350000 */
			Organization,
			/** 192350003 */
			Project,
			/** 192350002 */
			Sales_document
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
//{'JsForm':['Price Level','Price List Quick Create 5x5'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
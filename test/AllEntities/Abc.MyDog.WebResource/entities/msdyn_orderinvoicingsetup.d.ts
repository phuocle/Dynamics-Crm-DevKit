//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_orderinvoicingsetup_Information {
		interface tab__14599880_992D_4F94_A7F0_76721D4D0D8B_Sections {
			_14599880_992D_4F94_A7F0_76721D4D0D8B_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_TabProducts_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__14599880_992D_4F94_A7F0_76721D4D0D8B extends DevKit.Controls.ITab {
			Section: tab__14599880_992D_4F94_A7F0_76721D4D0D8B_Sections;
		}
		interface tab_TabProducts extends DevKit.Controls.ITab {
			Section: tab_TabProducts_Sections;
		}
		interface Tabs {
			_14599880_992D_4F94_A7F0_76721D4D0D8B: tab__14599880_992D_4F94_A7F0_76721D4D0D8B;
			TabProducts: tab_TabProducts;
		}
		interface Body {
			Tab: Tabs;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Order this invoice setup relates to */
			msdyn_Order: DevKit.Controls.Lookup;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingproduct_OrderInvoicingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingsetupdate_InvoiceSetup: DevKit.Controls.NavigationItem
		}
		interface Grid {
			GridProducts: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_orderinvoicingsetup_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_orderinvoicingsetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderinvoicingsetup_Information */
		Body: MyDog.Formmsdyn_orderinvoicingsetup_Information.Body;
		/** The Navigation of form msdyn_orderinvoicingsetup_Information */
		Navigation: MyDog.Formmsdyn_orderinvoicingsetup_Information.Navigation;
		/** The Grid of form msdyn_orderinvoicingsetup_Information */
		Grid: MyDog.Formmsdyn_orderinvoicingsetup_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_orderinvoicingsetup {
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
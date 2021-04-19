//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_inventoryadjustmentproduct_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier for Inventory Adjustment associated with Inventory Adjustment Product. */
			msdyn_InventoryAdjustment: DevKit.Controls.Lookup;
			/** Unique identifier for Inventory Transfer associated with Inventory Adjustment Product. */
			msdyn_InventoryTransfer: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Product/Service associated with Inventory Adjustment Product. */
			msdyn_Product: DevKit.Controls.Lookup;
			msdyn_Quantity: DevKit.Controls.Double;
			/** Unique identifier for Unit associated with Inventory Adjustment Product. */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Inventory Adjustment Product */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_inventoryadjustmentproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inventoryadjustmentproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inventoryadjustmentproduct_Information */
		Body: MyDog.Formmsdyn_inventoryadjustmentproduct_Information.Body;
		/** The Footer section of form msdyn_inventoryadjustmentproduct_Information */
		Footer: MyDog.Formmsdyn_inventoryadjustmentproduct_Information.Footer;
		/** The Navigation of form msdyn_inventoryadjustmentproduct_Information */
		Navigation: MyDog.Formmsdyn_inventoryadjustmentproduct_Information.Navigation;
	}
	namespace FormQuick_Create_Inventory_Adjustment_Product {
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
			/** Unique identifier for Inventory Adjustment associated with Inventory Adjustment Product. */
			msdyn_InventoryAdjustment: DevKit.Controls.Lookup;
			/** Unique identifier for Inventory Transfer associated with Inventory Adjustment Product. */
			msdyn_InventoryTransfer: DevKit.Controls.Lookup;
			/** Unique identifier for Product/Service associated with Inventory Adjustment Product. */
			msdyn_Product: DevKit.Controls.Lookup;
			msdyn_Quantity: DevKit.Controls.Double;
			/** Unique identifier for Unit associated with Inventory Adjustment Product. */
			msdyn_Unit: DevKit.Controls.Lookup;
		}
	}
	class FormQuick_Create_Inventory_Adjustment_Product extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Inventory_Adjustment_Product
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Quick_Create_Inventory_Adjustment_Product */
		Body: MyDog.FormQuick_Create_Inventory_Adjustment_Product.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_inventoryadjustmentproduct {
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
//{'JsForm':['Information','Quick Create Inventory Adjustment Product'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_inventoryadjustmentproduct_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Inventory Adjustment associated with Inventory Adjustment Product. */
			msdyn_InventoryAdjustment: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Inventory Transfer associated with Inventory Adjustment Product. */
			msdyn_InventoryTransfer: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Product/Service associated with Inventory Adjustment Product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier for Unit associated with Inventory Adjustment Product. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Inventory Adjustment Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_inventoryadjustmentproduct_msdyn_inventoryjournal_InventoryAdjstProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_inventoryadjustmentproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inventoryadjustmentproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_inventoryadjustmentproduct_Information */
		Body: LuckyMokey.Formmsdyn_inventoryadjustmentproduct_Information.Body;
		/** The Footer section of form msdyn_inventoryadjustmentproduct_Information */
		Footer: LuckyMokey.Formmsdyn_inventoryadjustmentproduct_Information.Footer;
		/** The Navigation of form msdyn_inventoryadjustmentproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_inventoryadjustmentproduct_Information.Navigation;
	}
	namespace FormQuick_Create_Inventory_Adjustment_Product {
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
			/** Unique identifier for Inventory Adjustment associated with Inventory Adjustment Product. */
			msdyn_InventoryAdjustment: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Inventory Transfer associated with Inventory Adjustment Product. */
			msdyn_InventoryTransfer: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Product/Service associated with Inventory Adjustment Product. */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Unique identifier for Unit associated with Inventory Adjustment Product. */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQuick_Create_Inventory_Adjustment_Product extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Inventory_Adjustment_Product
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_Create_Inventory_Adjustment_Product */
		Body: LuckyMokey.FormQuick_Create_Inventory_Adjustment_Product.Body;
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
//{'JsForm':['Information','Quick Create Inventory Adjustment Product'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
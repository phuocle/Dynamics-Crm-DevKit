﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_warehouse_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Description: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Warehouse */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_warehouse_bookableresource_Warehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_businessunit_Warehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_warehouse_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_warehouse_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_warehouse_Information */
		Body: DevKit.Formmsdyn_warehouse_Information.Body;
		/** The Footer section of form msdyn_warehouse_Information */
		Footer: DevKit.Formmsdyn_warehouse_Information.Footer;
		/** The Navigation of form msdyn_warehouse_Information */
		Navigation: DevKit.Formmsdyn_warehouse_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_warehouse {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_inventoryjournal_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Work Order this product is allocated to */
			msdyn_AllocatedToWorkOrder: DevKit.Controls.Lookup;
			/** The Inventory Adjustment Product record related to this journal */
			msdyn_InventoryAdjustmentProduct: DevKit.Controls.Lookup;
			/** Shows the transaction type of this journal. */
			msdyn_JournalType: DevKit.Controls.OptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Indicates the Journal reversed by this journal record */
			msdyn_OriginatingJournal: DevKit.Controls.Lookup;
			/** Product this journal relates to */
			msdyn_Product: DevKit.Controls.Lookup;
			/** The Purchase Order Product record related to this journal */
			msdyn_PurchaseOrderProduct: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Receipt Product associated with Inventory Journal. */
			msdyn_PurchaseOrderReceiptProduct: DevKit.Controls.Lookup;
			/** Enter the quantity affected. A positive quantity indicates the receipt of this product into the specified warehouse, whereas a negative indicates a withdrawal. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** Indicates if this Journal reverses a previous journal record */
			msdyn_Reversal: DevKit.Controls.Boolean;
			/** The RMA Receipt Product record related to this journal */
			msdyn_RMAReceiptProduct: DevKit.Controls.Lookup;
			/** Shows the transaction type of this journal. */
			msdyn_TransactionType: DevKit.Controls.OptionSet;
			/** Unit of product used */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Warehouse affected by this transaction */
			msdyn_Warehouse: DevKit.Controls.Lookup;
			/** The Work Order Product record related to this journal */
			msdyn_WorkOrderProduct: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Inventory Journal */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_inventoryjournal_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inventoryjournal_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_inventoryjournal_Information */
		Body: MyDog.Formmsdyn_inventoryjournal_Information.Body;
		/** The Footer section of form msdyn_inventoryjournal_Information */
		Footer: MyDog.Formmsdyn_inventoryjournal_Information.Footer;
		/** The Navigation of form msdyn_inventoryjournal_Information */
		Navigation: MyDog.Formmsdyn_inventoryjournal_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_inventoryjournal {
		enum msdyn_JournalType {
			/** 690970002 */
			Allocated,
			/** 690970000 */
			On_Hand,
			/** 690970001 */
			On_Order
		}
		enum msdyn_TransactionType {
			/** 690970003 */
			Inventory_Adjustment,
			/** 690970004 */
			Inventory_Transfer,
			/** 690970006 */
			Manual,
			/** 690970000 */
			Purchase_Order_Product,
			/** 690970001 */
			Purchase_Order_Receipt,
			/** 690970005 */
			RMA_Product,
			/** 690970002 */
			WO_Product
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
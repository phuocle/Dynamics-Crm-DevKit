//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_inventoryjournal_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Work Order this product is allocated to */
			msdyn_AllocatedToWorkOrder: DevKit.Form.Controls.ControlLookup;
			/** The Inventory Adjustment Product record related to this journal */
			msdyn_InventoryAdjustmentProduct: DevKit.Form.Controls.ControlLookup;
			/** Shows the transaction type of this journal. */
			msdyn_JournalType: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Indicates the Journal reversed by this journal record */
			msdyn_OriginatingJournal: DevKit.Form.Controls.ControlLookup;
			/** Product this journal relates to */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** The Purchase Order Product record related to this journal */
			msdyn_PurchaseOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Receipt Product associated with Inventory Journal. */
			msdyn_PurchaseOrderReceiptProduct: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity affected. A positive quantity indicates the receipt of this product into the specified warehouse, whereas a negative indicates a withdrawal. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Indicates if this Journal reverses a previous journal record */
			msdyn_Reversal: DevKit.Form.Controls.ControlBoolean;
			/** The RMA Receipt Product record related to this journal */
			msdyn_RMAReceiptProduct: DevKit.Form.Controls.ControlLookup;
			/** Shows the transaction type of this journal. */
			msdyn_TransactionType: DevKit.Form.Controls.ControlOptionSet;
			/** Unit of product used */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Warehouse affected by this transaction */
			msdyn_Warehouse: DevKit.Form.Controls.ControlLookup;
			/** The Work Order Product record related to this journal */
			msdyn_WorkOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Inventory Journal */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_inventoryjournal_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_inventoryjournal_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_inventoryjournal_Information */
		Body: LuckyMokey.Formmsdyn_inventoryjournal_Information.Body;
		/** The Footer section of form msdyn_inventoryjournal_Information */
		Footer: LuckyMokey.Formmsdyn_inventoryjournal_Information.Footer;
		/** The Navigation of form msdyn_inventoryjournal_Information */
		Navigation: LuckyMokey.Formmsdyn_inventoryjournal_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_inventoryjournal {
		enum msdyn_JournalType {
			/** 690970000 */
			On_Hand,
			/** 690970001 */
			On_Order,
			/** 690970002 */
			Allocated
		}
		enum msdyn_TransactionType {
			/** 690970000 */
			Purchase_Order_Product,
			/** 690970001 */
			Purchase_Order_Receipt,
			/** 690970002 */
			WO_Product,
			/** 690970003 */
			Inventory_Adjustment,
			/** 690970004 */
			Inventory_Transfer,
			/** 690970005 */
			RMA_Product,
			/** 690970006 */
			Manual
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
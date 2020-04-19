//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormPurchase_Order_Receipt {
		interface tab_fstab_receipt_products_Sections {
			fstab_products_section_related: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_receipt_products extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_receipt_products_Sections;
		}
		interface Tabs {
			fstab_receipt_products: tab_fstab_receipt_products;
		}
		interface Body {
			Tab: Tabs;
			RECEIPT_PRODUCTS: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_DateReceived: DevKit.Form.Controls.ControlDate;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_Note: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt. */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			msdyn_ReceivedBy: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			msdyn_ShipVia: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Purchase Order Receipt */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormPurchase_Order_Receipt extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Receipt
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Purchase_Order_Receipt */
		Body: LuckyMokey.FormPurchase_Order_Receipt.Body;
		/** The Footer section of form Purchase_Order_Receipt */
		Footer: LuckyMokey.FormPurchase_Order_Receipt.Footer;
		/** The Navigation of form Purchase_Order_Receipt */
		Navigation: LuckyMokey.FormPurchase_Order_Receipt.Navigation;
	}
	namespace FormPurchase_Order_Receipt_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_2: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			RECEIPT_PRODUCTS: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_DateReceived: DevKit.Form.Controls.ControlDate;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_Note: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt. */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			msdyn_ReceivedBy: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			msdyn_ShipVia: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormPurchase_Order_Receipt_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Receipt_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Purchase_Order_Receipt_Mobile */
		Body: LuckyMokey.FormPurchase_Order_Receipt_Mobile.Body;
		/** The Navigation of form Purchase_Order_Receipt_Mobile */
		Navigation: LuckyMokey.FormPurchase_Order_Receipt_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorderreceipt {
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
//{'JsForm':['Purchase Order Receipt','Purchase Order Receipt - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
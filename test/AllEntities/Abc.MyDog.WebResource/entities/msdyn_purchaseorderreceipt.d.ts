//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormPurchase_Order_Receipt {
		interface tab_fstab_receipt_products_Sections {
			fstab_products_section_related: DevKit.Controls.Section;
		}
		interface tab_fstab_receipt_products extends DevKit.Controls.ITab {
			Section: tab_fstab_receipt_products_Sections;
		}
		interface Tabs {
			fstab_receipt_products: tab_fstab_receipt_products;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			msdyn_DateReceived: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Note: DevKit.Controls.String;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			msdyn_ReceivedBy: DevKit.Controls.Lookup;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Purchase Order Receipt */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			RECEIPT_PRODUCTS: DevKit.Controls.Grid;
		}
	}
	class FormPurchase_Order_Receipt extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Receipt
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Receipt */
		Body: MyDog.FormPurchase_Order_Receipt.Body;
		/** The Footer section of form Purchase_Order_Receipt */
		Footer: MyDog.FormPurchase_Order_Receipt.Footer;
		/** The Navigation of form Purchase_Order_Receipt */
		Navigation: MyDog.FormPurchase_Order_Receipt.Navigation;
		/** The Grid of form Purchase_Order_Receipt */
		Grid: MyDog.FormPurchase_Order_Receipt.Grid;
	}
	namespace FormPurchase_Order_Receipt_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			msdyn_DateReceived: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Note: DevKit.Controls.String;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for User associated with Purchase Order Receipt. */
			msdyn_ReceivedBy: DevKit.Controls.Lookup;
			/** Unique identifier for Ship Via associated with Purchase Order Receipt. */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			RECEIPT_PRODUCTS: DevKit.Controls.Grid;
		}
	}
	class FormPurchase_Order_Receipt_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Receipt_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Receipt_Mobile */
		Body: MyDog.FormPurchase_Order_Receipt_Mobile.Body;
		/** The Navigation of form Purchase_Order_Receipt_Mobile */
		Navigation: MyDog.FormPurchase_Order_Receipt_Mobile.Navigation;
		/** The Grid of form Purchase_Order_Receipt_Mobile */
		Grid: MyDog.FormPurchase_Order_Receipt_Mobile.Grid;
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
//{'JsForm':['Purchase Order Receipt','Purchase Order Receipt - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
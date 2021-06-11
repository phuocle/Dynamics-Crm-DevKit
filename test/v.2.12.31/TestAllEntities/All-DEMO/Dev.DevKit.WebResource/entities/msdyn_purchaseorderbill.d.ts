//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_purchaseorderbill_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_BillDate: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Note: DevKit.Controls.String;
			/** Unique identifier for Payment Term associated with Purchase Order Bill. */
			msdyn_PaymentTerm: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			msdyn_ShippingAmount: DevKit.Controls.Money;
			msdyn_Subtotal: DevKit.Controls.Money;
			msdyn_TaxAmount: DevKit.Controls.Money;
			/** Unique identifier for Tax Code associated with Purchase Order Bill. */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			msdyn_TotalAmount: DevKit.Controls.Money;
			msdyn_VendorInvoiceNumber: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Purchase Order Bill */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_purchaseorderbill_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_purchaseorderbill_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_purchaseorderbill_Information */
		Body: DevKit.Formmsdyn_purchaseorderbill_Information.Body;
		/** The Footer section of form msdyn_purchaseorderbill_Information */
		Footer: DevKit.Formmsdyn_purchaseorderbill_Information.Footer;
		/** The Navigation of form msdyn_purchaseorderbill_Information */
		Navigation: DevKit.Formmsdyn_purchaseorderbill_Information.Navigation;
	}
	namespace FormPurchase_Order_Bill_Mobile {
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
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			msdyn_BillDate: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Note: DevKit.Controls.String;
			/** Unique identifier for Payment Term associated with Purchase Order Bill. */
			msdyn_PaymentTerm: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			msdyn_ShippingAmount: DevKit.Controls.Money;
			msdyn_Subtotal: DevKit.Controls.Money;
			msdyn_TaxAmount: DevKit.Controls.Money;
			/** Unique identifier for Tax Code associated with Purchase Order Bill. */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			msdyn_TotalAmount: DevKit.Controls.Money;
			msdyn_VendorInvoiceNumber: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class FormPurchase_Order_Bill_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Bill_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Bill_Mobile */
		Body: DevKit.FormPurchase_Order_Bill_Mobile.Body;
		/** The Navigation of form Purchase_Order_Bill_Mobile */
		Navigation: DevKit.FormPurchase_Order_Bill_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorderbill {
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
//{'JsForm':['Information','Purchase Order Bill - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
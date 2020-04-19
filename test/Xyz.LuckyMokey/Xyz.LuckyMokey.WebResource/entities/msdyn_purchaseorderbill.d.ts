//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_purchaseorderbill_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_BillDate: DevKit.Form.Controls.ControlDate;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_Note: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Payment Term associated with Purchase Order Bill. */
			msdyn_PaymentTerm: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			msdyn_ShippingAmount: DevKit.Form.Controls.ControlMoney;
			msdyn_Subtotal: DevKit.Form.Controls.ControlMoney;
			msdyn_TaxAmount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Tax Code associated with Purchase Order Bill. */
			msdyn_TaxCode: DevKit.Form.Controls.ControlLookup;
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			msdyn_VendorInvoiceNumber: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Purchase Order Bill */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_purchaseorderbill_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_purchaseorderbill_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_purchaseorderbill_Information */
		Body: LuckyMokey.Formmsdyn_purchaseorderbill_Information.Body;
		/** The Footer section of form msdyn_purchaseorderbill_Information */
		Footer: LuckyMokey.Formmsdyn_purchaseorderbill_Information.Footer;
		/** The Navigation of form msdyn_purchaseorderbill_Information */
		Navigation: LuckyMokey.Formmsdyn_purchaseorderbill_Information.Navigation;
	}
	namespace FormPurchase_Order_Bill_Mobile {
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
		interface tab_fstab_other extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_BillDate: DevKit.Form.Controls.ControlDate;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_Note: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Payment Term associated with Purchase Order Bill. */
			msdyn_PaymentTerm: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Bill. */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			msdyn_ShippingAmount: DevKit.Form.Controls.ControlMoney;
			msdyn_Subtotal: DevKit.Form.Controls.ControlMoney;
			msdyn_TaxAmount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Tax Code associated with Purchase Order Bill. */
			msdyn_TaxCode: DevKit.Form.Controls.ControlLookup;
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			msdyn_VendorInvoiceNumber: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormPurchase_Order_Bill_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Bill_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Purchase_Order_Bill_Mobile */
		Body: LuckyMokey.FormPurchase_Order_Bill_Mobile.Body;
		/** The Navigation of form Purchase_Order_Bill_Mobile */
		Navigation: LuckyMokey.FormPurchase_Order_Bill_Mobile.Navigation;
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
//{'JsForm':['Information','Purchase Order Bill - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
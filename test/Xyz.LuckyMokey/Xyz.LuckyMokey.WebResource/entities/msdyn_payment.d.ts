//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_payment_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Account associated with Payment. */
			msdyn_Account: DevKit.Form.Controls.ControlLookup;
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			msdyn_CheckNumber: DevKit.Form.Controls.ControlString;
			msdyn_Date: DevKit.Form.Controls.ControlDate;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Payment Method associated with Payment. */
			msdyn_PaymentMethod: DevKit.Form.Controls.ControlLookup;
			msdyn_PaymentType: DevKit.Form.Controls.ControlOptionSet;
			msdyn_UnappliedAmount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Work Order associated with Payment. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Payment */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_payment_msdyn_paymentdetail_Payment: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_payment_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_payment_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_payment_Information */
		Body: LuckyMokey.Formmsdyn_payment_Information.Body;
		/** The Footer section of form msdyn_payment_Information */
		Footer: LuckyMokey.Formmsdyn_payment_Information.Footer;
		/** The Navigation of form msdyn_payment_Information */
		Navigation: LuckyMokey.Formmsdyn_payment_Information.Navigation;
	}
	namespace FormPayment_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			fstab_general_section_2: DevKit.Form.Controls.ControlSection;
			fstab_general_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
			fstab_related_entities_section_2: DevKit.Form.Controls.ControlSection;
			fstab_related_entities_section_3: DevKit.Form.Controls.ControlSection;
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
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Account associated with Payment. */
			msdyn_Account: DevKit.Form.Controls.ControlLookup;
			msdyn_Amount: DevKit.Form.Controls.ControlMoney;
			msdyn_CheckNumber: DevKit.Form.Controls.ControlString;
			msdyn_Date: DevKit.Form.Controls.ControlDate;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Payment Method associated with Payment. */
			msdyn_PaymentMethod: DevKit.Form.Controls.ControlLookup;
			msdyn_PaymentType: DevKit.Form.Controls.ControlOptionSet;
			msdyn_UnappliedAmount: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier for Work Order associated with Payment. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_payment_msdyn_paymentdetail_Payment: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormPayment_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Payment_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Payment_Mobile */
		Body: LuckyMokey.FormPayment_Mobile.Body;
		/** The Navigation of form Payment_Mobile */
		Navigation: LuckyMokey.FormPayment_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_payment {
		enum msdyn_PaymentType {
			/** 690970000 */
			Cash,
			/** 690970001 */
			Check,
			/** 690970002 */
			Credit_Card,
			/** 690970003 */
			Other
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
//{'JsForm':['Information','Payment - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
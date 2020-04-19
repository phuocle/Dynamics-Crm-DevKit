//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAgreement_Invoice_Setup_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_gemeral: DevKit.Form.Controls.ControlSection;
			_C90EDE9C_D381_4377_8978_2CA09270310C_SECTION_2: DevKit.Form.Controls.ControlSection;
			_C90EDE9C_D381_4377_8978_2CA09270310C_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_4: DevKit.Form.Controls.ControlSection;
			tab_3_section_5: DevKit.Form.Controls.ControlSection;
			tab_3_section_6: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
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
			AgreementInvoiceProductsGrid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Agreement this Invoice Setup relates to */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormAgreement_Invoice_Setup_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Agreement_Invoice_Setup_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Agreement_Invoice_Setup_Mobile */
		Body: LuckyMokey.FormAgreement_Invoice_Setup_Mobile.Body;
		/** The Navigation of form Agreement_Invoice_Setup_Mobile */
		Navigation: LuckyMokey.FormAgreement_Invoice_Setup_Mobile.Navigation;
	}
	namespace Formmsdyn_agreementinvoicesetup_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			AgreementInvoiceProductsGrid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Agreement this Invoice Setup relates to */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Type a description of this invoice setup. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Stores the invoice recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Agreement Invoice Setup */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_agreementinvoicesetup_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_agreementinvoicesetup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_agreementinvoicesetup_Information */
		Body: LuckyMokey.Formmsdyn_agreementinvoicesetup_Information.Body;
		/** The Footer section of form msdyn_agreementinvoicesetup_Information */
		Footer: LuckyMokey.Formmsdyn_agreementinvoicesetup_Information.Footer;
		/** The Navigation of form msdyn_agreementinvoicesetup_Information */
		Navigation: LuckyMokey.Formmsdyn_agreementinvoicesetup_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_agreementinvoicesetup {
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
//{'JsForm':['Agreement Invoice Setup - Mobile','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
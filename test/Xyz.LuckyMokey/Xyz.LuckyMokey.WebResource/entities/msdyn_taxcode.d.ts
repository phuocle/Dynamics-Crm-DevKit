//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_taxcode_Information {
		interface tab_f1tab_taxinfo_Sections {
		}
		interface tab_taxcodedetailstab_Sections {
			taxcodedetailssection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_taxinfo extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_taxinfo_Sections;
		}
		interface tab_taxcodedetailstab extends DevKit.Form.Controls.IControlTab {
			Section: tab_taxcodedetailstab_Sections;
		}
		interface Tabs {
			f1tab_taxinfo: tab_f1tab_taxinfo;
			taxcodedetailstab: tab_taxcodedetailstab;
		}
		interface Body {
			Tab: Tabs;
			taxcodedetailsgrid: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** If set as a Tax Group the tax rate will be the total of all the Tax Code details combined */
			msdyn_ActasTaxGroup: DevKit.Form.Controls.ControlBoolean;
			/** Select whether this tax code applies to service agreements. */
			msdyn_AgreementTaxable: DevKit.Form.Controls.ControlBoolean;
			/** Type the sales tax code name. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Select whether this tax code applies to products. */
			msdyn_ProductsTaxable: DevKit.Form.Controls.ControlBoolean;
			/** Select whether this tax code applies to services. */
			msdyn_ServicesTaxable: DevKit.Form.Controls.ControlBoolean;
			/** Enter the rate of this sales tax code. */
			msdyn_TaxRate: DevKit.Form.Controls.ControlDouble;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Tax Code */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_account_SalesTaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_workorder_TaxCode: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_rma_TaxCode: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_taxcode_msdyn_rtv_TaxCode: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_taxcode_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_taxcode_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_taxcode_Information */
		Body: LuckyMokey.Formmsdyn_taxcode_Information.Body;
		/** The Footer section of form msdyn_taxcode_Information */
		Footer: LuckyMokey.Formmsdyn_taxcode_Information.Footer;
		/** The Navigation of form msdyn_taxcode_Information */
		Navigation: LuckyMokey.Formmsdyn_taxcode_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_taxcode {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_taxcode_Information {
		interface tab_f1tab_taxinfo_Sections {
		}
		interface tab_taxcodedetailstab_Sections {
			taxcodedetailssection: DevKit.Controls.Section;
		}
		interface tab_f1tab_taxinfo extends DevKit.Controls.ITab {
			Section: tab_f1tab_taxinfo_Sections;
		}
		interface tab_taxcodedetailstab extends DevKit.Controls.ITab {
			Section: tab_taxcodedetailstab_Sections;
		}
		interface Tabs {
			f1tab_taxinfo: tab_f1tab_taxinfo;
			taxcodedetailstab: tab_taxcodedetailstab;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** If set as a Tax Group the tax rate will be the total of all the Tax Code details combined */
			msdyn_ActasTaxGroup: DevKit.Controls.Boolean;
			/** Select whether this tax code applies to service agreements. */
			msdyn_AgreementTaxable: DevKit.Controls.Boolean;
			/** Type the sales tax code name. */
			msdyn_name: DevKit.Controls.String;
			/** Select whether this tax code applies to products. */
			msdyn_ProductsTaxable: DevKit.Controls.Boolean;
			/** Select whether this tax code applies to services. */
			msdyn_ServicesTaxable: DevKit.Controls.Boolean;
			/** Enter the rate of this sales tax code. */
			msdyn_TaxRate: DevKit.Controls.Double;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Tax Code */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			taxcodedetailsgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_taxcode_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_taxcode_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_taxcode_Information */
		Body: MyDog.Formmsdyn_taxcode_Information.Body;
		/** The Footer section of form msdyn_taxcode_Information */
		Footer: MyDog.Formmsdyn_taxcode_Information.Footer;
		/** The Navigation of form msdyn_taxcode_Information */
		Navigation: MyDog.Formmsdyn_taxcode_Information.Navigation;
		/** The Grid of form msdyn_taxcode_Information */
		Grid: MyDog.Formmsdyn_taxcode_Information.Grid;
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
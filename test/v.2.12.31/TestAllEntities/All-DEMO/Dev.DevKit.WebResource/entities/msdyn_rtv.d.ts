//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormRTV {
		interface tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116_Sections {
			_7E0518DA_7EF7_44EE_922D_7BB9472EB9EF: DevKit.Controls.Section;
			_8B74A7E7_5EDB_4A59_9B52_77FBD784E116_SECTION_2: DevKit.Controls.Section;
		}
		interface tab_rtvproductstab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116 extends DevKit.Controls.ITab {
			Section: tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116_Sections;
		}
		interface tab_rtvproductstab extends DevKit.Controls.ITab {
			Section: tab_rtvproductstab_Sections;
		}
		interface Tabs {
			_8B74A7E7_5EDB_4A59_9B52_77FBD784E116: tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116;
			rtvproductstab: tab_rtvproductstab;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the unique number for identifying this RTV record. */
			msdyn_name: DevKit.Controls.String;
			/** Originating RMA if items were returned from customer */
			msdyn_OriginatingRMA: DevKit.Controls.Lookup;
			/** RTV Substatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the current status of the RTV. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Shows the total Amount to be credited on this RTV. */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Vendor where items will be returned */
			msdyn_Vendor: DevKit.Controls.Lookup;
			/** Contact person at Vendor */
			msdyn_VendorContact: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the RTV */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_rtv_msdyn_rtvproduct_RTV: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			rtvproductsgrid: DevKit.Controls.Grid;
		}
	}
	class FormRTV extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RTV
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RTV */
		Body: DevKit.FormRTV.Body;
		/** The Footer section of form RTV */
		Footer: DevKit.FormRTV.Footer;
		/** The Navigation of form RTV */
		Navigation: DevKit.FormRTV.Navigation;
		/** The Grid of form RTV */
		Grid: DevKit.FormRTV.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyn_rtv {
		enum msdyn_SystemStatus {
			/** 690970001 */
			Approved,
			/** 690970004 */
			Canceled,
			/** 690970000 */
			Draft,
			/** 690970003 */
			Received,
			/** 690970002 */
			Shipped
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
//{'JsForm':['RTV'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRTV {
		interface tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116_Sections {
			_7E0518DA_7EF7_44EE_922D_7BB9472EB9EF: DevKit.Form.Controls.ControlSection;
			_8B74A7E7_5EDB_4A59_9B52_77FBD784E116_SECTION_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_rtvproductstab_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116 extends DevKit.Form.Controls.IControlTab {
			Section: tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116_Sections;
		}
		interface tab_rtvproductstab extends DevKit.Form.Controls.IControlTab {
			Section: tab_rtvproductstab_Sections;
		}
		interface Tabs {
			_8B74A7E7_5EDB_4A59_9B52_77FBD784E116: tab__8B74A7E7_5EDB_4A59_9B52_77FBD784E116;
			rtvproductstab: tab_rtvproductstab;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			rtvproductsgrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the unique number for identifying this RTV record. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Originating RMA if items were returned from customer */
			msdyn_OriginatingRMA: DevKit.Form.Controls.ControlLookup;
			/** RTV Substatus */
			msdyn_SubStatus: DevKit.Form.Controls.ControlLookup;
			/** Enter the current status of the RTV. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the total Amount to be credited on this RTV. */
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Vendor where items will be returned */
			msdyn_Vendor: DevKit.Form.Controls.ControlLookup;
			/** Contact person at Vendor */
			msdyn_VendorContact: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the RTV */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rtv_msdyn_rtvproduct_RTV: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormRTV extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form RTV
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form RTV */
		Body: LuckyMokey.FormRTV.Body;
		/** The Footer section of form RTV */
		Footer: LuckyMokey.FormRTV.Footer;
		/** The Navigation of form RTV */
		Navigation: LuckyMokey.FormRTV.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_rtv {
		enum msdyn_SystemStatus {
			/** 690970000 */
			Draft,
			/** 690970001 */
			Approved,
			/** 690970002 */
			Shipped,
			/** 690970003 */
			Received,
			/** 690970004 */
			Canceled
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
//{'JsForm':['RTV'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
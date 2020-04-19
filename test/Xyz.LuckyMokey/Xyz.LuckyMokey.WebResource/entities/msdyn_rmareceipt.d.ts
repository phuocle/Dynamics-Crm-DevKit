//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormRMA_Receipt {
		interface tab__C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_Sections {
			_07D47361_9E6E_4D81_87EA_CFC744F763D1: DevKit.Form.Controls.ControlSection;
			_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_SECTION_2: DevKit.Form.Controls.ControlSection;
			_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab__C15E55F0_BE0B_45F4_9350_EE4A2F6578FA extends DevKit.Form.Controls.IControlTab {
			Section: tab__C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_Sections;
		}
		interface Tabs {
			_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA: tab__C15E55F0_BE0B_45F4_9350_EE4A2F6578FA;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			productgrid: DevKit.Form.Controls.ControlGrid;
			msdyn_DateReceived: DevKit.Form.Controls.ControlDate;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for RMA associated with RMA Receipt. */
			msdyn_RMA: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Ship Via associated with RMA Receipt. */
			msdyn_ShipVia: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the RMA Receipt */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rmareceipt_msdyn_rmareceiptproduct_RMAReceipt: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormRMA_Receipt extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form RMA_Receipt
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form RMA_Receipt */
		Body: LuckyMokey.FormRMA_Receipt.Body;
		/** The Footer section of form RMA_Receipt */
		Footer: LuckyMokey.FormRMA_Receipt.Footer;
		/** The Navigation of form RMA_Receipt */
		Navigation: LuckyMokey.FormRMA_Receipt.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_rmareceipt {
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
//{'JsForm':['RMA Receipt'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormRMA_Receipt {
		interface tab__C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_Sections {
			_07D47361_9E6E_4D81_87EA_CFC744F763D1: DevKit.Controls.Section;
			_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_SECTION_2: DevKit.Controls.Section;
			_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_SECTION_3: DevKit.Controls.Section;
		}
		interface tab__C15E55F0_BE0B_45F4_9350_EE4A2F6578FA extends DevKit.Controls.ITab {
			Section: tab__C15E55F0_BE0B_45F4_9350_EE4A2F6578FA_Sections;
		}
		interface Tabs {
			_C15E55F0_BE0B_45F4_9350_EE4A2F6578FA: tab__C15E55F0_BE0B_45F4_9350_EE4A2F6578FA;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			msdyn_DateReceived: DevKit.Controls.Date;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for RMA associated with RMA Receipt. */
			msdyn_RMA: DevKit.Controls.Lookup;
			/** Unique identifier for Ship Via associated with RMA Receipt. */
			msdyn_ShipVia: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the RMA Receipt */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_rmareceipt_msdyn_rmareceiptproduct_RMAReceipt: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			productgrid: DevKit.Controls.Grid;
		}
	}
	class FormRMA_Receipt extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form RMA_Receipt
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form RMA_Receipt */
		Body: MyDog.FormRMA_Receipt.Body;
		/** The Footer section of form RMA_Receipt */
		Footer: MyDog.FormRMA_Receipt.Footer;
		/** The Navigation of form RMA_Receipt */
		Navigation: MyDog.FormRMA_Receipt.Navigation;
		/** The Grid of form RMA_Receipt */
		Grid: MyDog.FormRMA_Receipt.Grid;
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
//{'JsForm':['RMA Receipt'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
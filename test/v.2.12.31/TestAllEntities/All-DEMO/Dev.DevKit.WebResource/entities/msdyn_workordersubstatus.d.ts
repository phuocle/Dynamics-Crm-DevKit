﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workordersubstatus_Information {
		interface tab__85C2E2AD_7C04_4944_9297_1AD79F174419_Sections {
			_CCF61533_4615_4169_A113_B47BAF392D8B: DevKit.Controls.Section;
		}
		interface tab_Notes_Sections {
		}
		interface tab__85C2E2AD_7C04_4944_9297_1AD79F174419 extends DevKit.Controls.ITab {
			Section: tab__85C2E2AD_7C04_4944_9297_1AD79F174419_Sections;
		}
		interface tab_Notes extends DevKit.Controls.ITab {
			Section: tab_Notes_Sections;
		}
		interface Tabs {
			_85C2E2AD_7C04_4944_9297_1AD79F174419: tab__85C2E2AD_7C04_4944_9297_1AD79F174419;
			Notes: tab_Notes;
		}
		interface Body {
			Tab: Tabs;
			/** Specify whether this substatus should be the default substatus for this status type. */
			msdyn_DefaultSubStatus: DevKit.Controls.Boolean;
			/** Shows the work order status name. */
			msdyn_name: DevKit.Controls.String;
			/** Specify the system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workordersubstatus_msdyn_workorder_Status: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_workordersubstatus_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workordersubstatus_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workordersubstatus_Information */
		Body: DevKit.Formmsdyn_workordersubstatus_Information.Body;
		/** The Navigation of form msdyn_workordersubstatus_Information */
		Navigation: DevKit.Formmsdyn_workordersubstatus_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_workordersubstatus {
		enum msdyn_SystemStatus {
			/** 690970005 */
			Closed_Canceled,
			/** 690970004 */
			Closed_Posted,
			/** 690970003 */
			Open_Completed,
			/** 690970002 */
			Open_In_Progress,
			/** 690970001 */
			Open_Scheduled,
			/** 690970000 */
			Open_Unscheduled
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
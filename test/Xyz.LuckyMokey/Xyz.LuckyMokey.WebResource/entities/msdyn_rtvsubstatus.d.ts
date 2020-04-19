//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_rtvsubstatus_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_DefaultSubStatus: DevKit.Form.Controls.ControlBoolean;
			/** RTV Substatus name */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Specify the system status. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the RTV Substatus */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_rtvsubstatus_msdyn_rtv_SubStatus: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_rtvsubstatus_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_rtvsubstatus_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_rtvsubstatus_Information */
		Body: LuckyMokey.Formmsdyn_rtvsubstatus_Information.Body;
		/** The Footer section of form msdyn_rtvsubstatus_Information */
		Footer: LuckyMokey.Formmsdyn_rtvsubstatus_Information.Footer;
		/** The Navigation of form msdyn_rtvsubstatus_Information */
		Navigation: LuckyMokey.Formmsdyn_rtvsubstatus_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_rtvsubstatus {
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
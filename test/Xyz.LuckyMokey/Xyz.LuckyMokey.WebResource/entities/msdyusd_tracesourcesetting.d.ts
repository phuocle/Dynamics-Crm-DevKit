//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyusd_tracesourcesetting_Information {
		interface Tabs {
		}
		interface Body {
			ListenerHostedControls: DevKit.Form.Controls.ControlGrid;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Form.Controls.ControlString;
			/** Specifies the levels of trace messages filtered by the source switch and event type filter. */
			msdyusd_switchlevel: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyusd_tracesourcesetting_hostedcontrol: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyusd_tracesourcesetting_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_tracesourcesetting_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyusd_tracesourcesetting_Information */
		Body: LuckyMokey.Formmsdyusd_tracesourcesetting_Information.Body;
		/** The Navigation of form msdyusd_tracesourcesetting_Information */
		Navigation: LuckyMokey.Formmsdyusd_tracesourcesetting_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyusd_tracesourcesetting {
		enum msdyusd_switchlevel {
			/** 0 */
			Off,
			/** 1 */
			Critical,
			/** 3 */
			Error,
			/** 7 */
			Warning,
			/** 15 */
			Information,
			/** 31 */
			Verbose
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
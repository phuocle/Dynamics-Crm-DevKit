//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyusd_tracesourcesetting_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			/** Specifies the levels of trace messages filtered by the source switch and event type filter. */
			msdyusd_switchlevel: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyusd_tracesourcesetting_hostedcontrol: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ListenerHostedControls: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_tracesourcesetting_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyusd_tracesourcesetting_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_tracesourcesetting_Information */
		Body: MyDog.Formmsdyusd_tracesourcesetting_Information.Body;
		/** The Navigation of form msdyusd_tracesourcesetting_Information */
		Navigation: MyDog.Formmsdyusd_tracesourcesetting_Information.Navigation;
		/** The Grid of form msdyusd_tracesourcesetting_Information */
		Grid: MyDog.Formmsdyusd_tracesourcesetting_Information.Grid;
	}
}
declare namespace OptionSet {
	namespace msdyusd_tracesourcesetting {
		enum msdyusd_switchlevel {
			/** 1 */
			Critical,
			/** 3 */
			Error,
			/** 15 */
			Information,
			/** 0 */
			Off,
			/** 31 */
			Verbose,
			/** 7 */
			Warning
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
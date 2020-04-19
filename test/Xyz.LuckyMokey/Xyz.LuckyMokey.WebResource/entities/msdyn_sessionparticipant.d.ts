//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSession_participant_Form {
		interface Tabs {
		}
		interface Body {
			msdyn_agentid: DevKit.Form.Controls.ControlLookup;
			msdyn_joinedon: DevKit.Form.Controls.ControlDateTime;
			msdyn_mode: DevKit.Form.Controls.ControlOptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_omnichannelsession: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormSession_participant_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Session_participant_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Session_participant_Form */
		Body: LuckyMokey.FormSession_participant_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_sessionparticipant {
		enum msdyn_mode {
			/** 192350002 */
			Primary,
			/** 192350003 */
			Consult,
			/** 192350004 */
			Monitor
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
//{'JsForm':['Session participant Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
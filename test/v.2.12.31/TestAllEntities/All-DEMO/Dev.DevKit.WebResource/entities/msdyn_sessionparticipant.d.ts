//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSession_participant_Form {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of System User participating in session. */
			msdyn_agentid: DevKit.Controls.Lookup;
			/** Date and time when agent accepted the session. */
			msdyn_joinedon: DevKit.Controls.DateTime;
			/** Mode of Agent participation i.e. primary, consult, monitor etc. */
			msdyn_mode: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier of the session associated to the participant. */
			msdyn_omnichannelsession: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class FormSession_participant_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Session_participant_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Session_participant_Form */
		Body: DevKit.FormSession_participant_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_sessionparticipant {
		enum msdyn_mode {
			/** 192350003 */
			Consult,
			/** 192350004 */
			Monitor,
			/** 192350002 */
			Primary
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
//{'JsForm':['Session participant Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_fieldservicesystemjob_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_ConditionCode: DevKit.Form.Controls.ControlInteger;
			msdyn_ExceptionMessage: DevKit.Form.Controls.ControlString;
			msdyn_ExceptionTrace: DevKit.Form.Controls.ControlString;
			msdyn_InputParameter: DevKit.Form.Controls.ControlString;
			msdyn_InputParameterType: DevKit.Form.Controls.ControlOptionSet;
			/** Type a name for the job. */
			msdyn_jobname: DevKit.Form.Controls.ControlString;
			msdyn_JobType: DevKit.Form.Controls.ControlInteger;
			msdyn_OutputParameter: DevKit.Form.Controls.ControlString;
			msdyn_OutputParameterType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the user associated with the field service system job. */
			msdyn_OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Field Service System Job */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_fieldservicesystemjob_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_fieldservicesystemjob_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_fieldservicesystemjob_Information */
		Body: LuckyMokey.Formmsdyn_fieldservicesystemjob_Information.Body;
		/** The Footer section of form msdyn_fieldservicesystemjob_Information */
		Footer: LuckyMokey.Formmsdyn_fieldservicesystemjob_Information.Footer;
		/** The Navigation of form msdyn_fieldservicesystemjob_Information */
		Navigation: LuckyMokey.Formmsdyn_fieldservicesystemjob_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_fieldservicesystemjob {
		enum msdyn_InputParameterType {
			/** 690970000 */
			String_List,
			/** 690970001 */
			Json,
			/** 690970002 */
			Xml
		}
		enum msdyn_JobStatus {
			/** 690970000 */
			Pending,
			/** 690970001 */
			In_Progress,
			/** 690970002 */
			Completed,
			/** 690970003 */
			Failed
		}
		enum msdyn_OutputParameterType {
			/** 690970000 */
			String_List,
			/** 690970001 */
			Json,
			/** 690970002 */
			Xml
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
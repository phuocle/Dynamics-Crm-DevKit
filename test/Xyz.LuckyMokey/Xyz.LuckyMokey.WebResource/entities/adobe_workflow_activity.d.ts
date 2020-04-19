//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formadobe_workflow_activity_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			adobe_name: DevKit.Form.Controls.ControlString;
		}
	}
	class Formadobe_workflow_activity_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form adobe_workflow_activity_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form adobe_workflow_activity_Information */
		Body: LuckyMokey.Formadobe_workflow_activity_Information.Body;
	}
}
declare namespace OptionSet {
	namespace adobe_workflow_activity {
		enum adobe_identityverification {
			/** 648770003 */
			EMAIL,
			/** 648770000 */
			PASSWORD,
			/** 648770001 */
			KNOWLEDGE_BASE,
			/** 648770002 */
			WEB_IDENTITY
		}
		enum adobe_notes_type {
			/** 648770000 */
			PRIMARY_ENTITY_NOTES,
			/** 648770001 */
			PROCESS_NOTES
		}
		enum adobe_recipient_lookup_type {
			/** 648770000 */
			Lead,
			/** 648770001 */
			Contact,
			/** 648770002 */
			User
		}
		enum adobe_sender_signing_options {
			/** 648770003 */
			I_do_not_sign,
			/** 648770000 */
			I_sign_first,
			/** 648770001 */
			I_sign_last,
			/** 648770002 */
			Only_I_sign
		}
		enum adobe_signature_type {
			/** 648770000 */
			ESIGN,
			/** 648770001 */
			WRITTEN
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
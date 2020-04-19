//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormPartner_Application_Main_Form {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Indicates the application role. */
			ApplicationRole: DevKit.Form.Controls.ControlOptionSet;
			/** Name of Partner Application. */
			Name: DevKit.Form.Controls.ControlString;
			/** Principal ID of the partner application. */
			PrincipalId: DevKit.Form.Controls.ControlString;
			/** Select whether the partner application uses an authorization server. */
			UseAuthorizationServer: DevKit.Form.Controls.ControlBoolean;
		}
		interface Footer {
			/** Shows the status of the partner application. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormPartner_Application_Main_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Partner_Application_Main_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Partner_Application_Main_Form */
		Body: LuckyMokey.FormPartner_Application_Main_Form.Body;
		/** The Footer section of form Partner_Application_Main_Form */
		Footer: LuckyMokey.FormPartner_Application_Main_Form.Footer;
	}
}
declare namespace OptionSet {
	namespace PartnerApplication {
		enum ApplicationRole {
			/** 0 */
			Client,
			/** 1 */
			Server
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Enabled,
			/** 2 */
			Disabled
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
//{'JsForm':['Main Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
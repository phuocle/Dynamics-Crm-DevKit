//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_PostRuleConfig_Information {
		interface Tabs {
		}
		interface Body {
			/** Name of the rule. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Entity that is enabled for Activity feeds. */
			msdyn_PostConfigId: DevKit.Form.Controls.ControlLookup;
			/** Determine whether to post this message to the Yammer Activity Stream. Please do not check this box if this message contains sensitive information requiring Microsoft Dynamics 365 access. */
			msdyn_PostToYammer: DevKit.Form.Controls.ControlBoolean;
		}
		interface Footer {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Status of the Post Rule Configuration */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_PostRuleConfig_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_PostRuleConfig_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_PostRuleConfig_Information */
		Body: LuckyMokey.Formmsdyn_PostRuleConfig_Information.Body;
		/** The Footer section of form msdyn_PostRuleConfig_Information */
		Footer: LuckyMokey.Formmsdyn_PostRuleConfig_Information.Footer;
		/** The Navigation of form msdyn_PostRuleConfig_Information */
		Navigation: LuckyMokey.Formmsdyn_PostRuleConfig_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_PostRuleConfig {
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
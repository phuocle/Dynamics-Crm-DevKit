//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormEntitlement_Channel {
		interface tab_general_Sections {
			entitlementchannelinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select a channel for which you are defining the entitlement terms. */
			Channel: DevKit.Form.Controls.ControlOptionSet;
			/** Type the total number of entitlement terms. */
			TotalTerms: DevKit.Form.Controls.ControlDecimal;
		}
	}
	class FormEntitlement_Channel extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Entitlement_Channel
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Entitlement_Channel */
		Body: LuckyMokey.FormEntitlement_Channel.Body;
	}
}
declare namespace OptionSet {
	namespace EntitlementChannel {
		enum Channel {
			/** 1 */
			Phone,
			/** 2 */
			Email,
			/** 3 */
			Web,
			/** 2483 */
			Facebook,
			/** 3986 */
			Twitter,
			/** 700610000 */
			IoT
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
//{'JsForm':['Entitlement Channel'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
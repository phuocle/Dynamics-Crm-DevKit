//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_sentimentanalysis_Information {
		interface tab_GeneralTab_Sections {
			AgentNotificationsSection: DevKit.Controls.Section;
			GeneralSection: DevKit.Controls.Section;
			SupervisorNotificationsSection: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Whether multi-language support is enabled */
			msdyn_additionallanguagesenabled: DevKit.Controls.Boolean;
			msdyn_agentsettingssubheading: DevKit.Controls.ActionCards;
			/** The agent threshold for sentiment threshold alerts */
			msdyn_agentthreshold: DevKit.Controls.OptionSet;
			/** Whether real-time customer sentiment monitoring is enabled */
			msdyn_enabled: DevKit.Controls.Boolean;
			msdyn_generalsubheading: DevKit.Controls.ActionCards;
			msdyn_supervisorsettingssubheading: DevKit.Controls.ActionCards;
			/** The supervisor threshold for sentiment threshold alerts */
			msdyn_supervisorthreshold: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyn_sentimentanalysis_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_sentimentanalysis_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sentimentanalysis_Information */
		Body: DevKit.Formmsdyn_sentimentanalysis_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_sentimentanalysis {
		enum msdyn_agentthreshold {
			/** 0 */
			Dont_show_alerts,
			/** 8 */
			Negative,
			/** 9 */
			Slightly_negative,
			/** 7 */
			Very_negative
		}
		enum msdyn_supervisorthreshold {
			/** 0 */
			Dont_send_notifications,
			/** 8 */
			Negative,
			/** 9 */
			Slightly_negative,
			/** 7 */
			Very_negative
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
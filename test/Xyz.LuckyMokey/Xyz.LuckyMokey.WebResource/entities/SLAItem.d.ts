//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSLAItem_Information {
		interface Header {
			/** Unique identifier for SLA associated with SLA Item. */
			SLAId: DevKit.Form.Controls.ControlLookup;
		}
		interface tab_tabUC_Sections {
			ApplicableWhen: DevKit.Form.Controls.ControlSection;
			SuccessConditions: DevKit.Form.Controls.ControlSection;
			Warn_and_Fail_Duration: DevKit.Form.Controls.ControlSection;
			Actions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tabUC extends DevKit.Form.Controls.IControlTab {
			Section: tab_tabUC_Sections;
		}
		interface Tabs {
			tabUC: tab_tabUC;
		}
		interface Body {
			Tab: Tabs;
			applicablewhencontrol: DevKit.Form.Controls.ControlActionCards;
			successconditioncontrol: DevKit.Form.Controls.ControlActionCards;
			WebResource_preview: DevKit.Form.Controls.ControlWebResource;
			/** Action URL */
			ActionURL: DevKit.Form.Controls.ControlString;
			/** Select whether this SLA will allow pausing and resuming during the time calculation. */
			AllowPauseResume: DevKit.Form.Controls.ControlBoolean;
			ApplicableEntity: DevKit.Form.Controls.ControlString;
			/** Choose the business hours for calculating SLA item timelines. */
			BusinessHoursId: DevKit.Form.Controls.ControlLookup;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			FailureAfter: DevKit.Form.Controls.ControlInteger;
			/** Select how soon the success criteria must be met until the SLA item is considered failed and failure actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			FailureAfter_1: DevKit.Form.Controls.ControlInteger;
			/** Unique identifier for SLAKPI associated with SLA Item. */
			msdyn_slakpiid: DevKit.Form.Controls.ControlLookup;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name: DevKit.Form.Controls.ControlString;
			/** Type a descriptive name of the service level agreement (SLA) item. */
			Name_1: DevKit.Form.Controls.ControlString;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter: DevKit.Form.Controls.ControlInteger;
			/** Select how soon the success criteria must be met before warning actions are initiated. The actual duration is based on the business hours as specified in the associated SLA record. */
			WarnAfter_1: DevKit.Form.Controls.ControlInteger;
		}
	}
	class FormSLAItem_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form SLAItem_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form SLAItem_Information */
		Body: LuckyMokey.FormSLAItem_Information.Body;
		/** The Header section of form SLAItem_Information */
		Header: LuckyMokey.FormSLAItem_Information.Header;
	}
}
declare namespace OptionSet {
	namespace SLAItem {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_knowledgearticletemplate_Main_Form {
		interface tab__92E59EE7_820A_42FC_907F_F86D2C4677C2_Sections {
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_1: DevKit.Form.Controls.ControlSection;
			_92E59EE7_820A_42FC_907F_F86D2C4677C2_SECTION_2: DevKit.Form.Controls.ControlSection;
			Content: DevKit.Form.Controls.ControlSection;
		}
		interface tab__92E59EE7_820A_42FC_907F_F86D2C4677C2 extends DevKit.Form.Controls.IControlTab {
			Section: tab__92E59EE7_820A_42FC_907F_F86D2C4677C2_Sections;
		}
		interface Tabs {
			_92E59EE7_820A_42FC_907F_F86D2C4677C2: tab__92E59EE7_820A_42FC_907F_F86D2C4677C2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_content: DevKit.Form.Controls.ControlActionCards;
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Shows whether this article is only visible internally. */
			msdyn_isinternal: DevKit.Form.Controls.ControlBoolean;
			msdyn_keywords: DevKit.Form.Controls.ControlString;
			msdyn_languagelocaleid: DevKit.Form.Controls.ControlString;
			msdyn_LanguageLocaleIdName: DevKit.Form.Controls.ControlString;
			/** Type a name for the Knowledge Article Template */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
			msdyn_subjectid: DevKit.Form.Controls.ControlLookup;
			/** Type a title for the Knowledge Article Template */
			msdyn_title: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_knowledgearticletemplate_Main_Form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_knowledgearticletemplate_Main_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_knowledgearticletemplate_Main_Form */
		Body: LuckyMokey.Formmsdyn_knowledgearticletemplate_Main_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_knowledgearticletemplate {
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
//{'JsForm':['Main Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
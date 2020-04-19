//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormKnowledgeArticleViews {
		interface Tabs {
		}
		interface Body {
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Form.Controls.ControlInteger;
			/** Shows where the knowledge was used */
			Location: DevKit.Form.Controls.ControlOptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Form.Controls.ControlDate;
		}
	}
	class FormKnowledgeArticleViews extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form KnowledgeArticleViews
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KnowledgeArticleViews */
		Body: LuckyMokey.FormKnowledgeArticleViews.Body;
	}
	namespace FormKnowledgeArticleViews_MainInteractionCentric {
		interface Tabs {
		}
		interface Body {
			/** Number of Knowledge Article Views visited per day */
			KnowledgeArticleView: DevKit.Form.Controls.ControlInteger;
			/** Shows where the knowledge was used */
			Location: DevKit.Form.Controls.ControlOptionSet;
			/** Information about the Day */
			ViewDate: DevKit.Form.Controls.ControlDate;
		}
	}
	class FormKnowledgeArticleViews_MainInteractionCentric extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form KnowledgeArticleViews_MainInteractionCentric
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form KnowledgeArticleViews_MainInteractionCentric */
		Body: LuckyMokey.FormKnowledgeArticleViews_MainInteractionCentric.Body;
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticleViews {
		enum Location {
			/** 1 */
			Internal,
			/** 2 */
			Web
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
//{'JsForm':['KnowledgeArticleViews','KnowledgeArticleViews MainInteractionCentric'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
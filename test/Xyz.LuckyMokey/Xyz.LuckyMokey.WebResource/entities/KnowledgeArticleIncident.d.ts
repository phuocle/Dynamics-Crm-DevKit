//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormKnowledge_Article_Incident {
		interface Tabs {
		}
		interface Body {
			/** Choose the Incident id for the knowledge article. */
			IncidentId: DevKit.Form.Controls.ControlLookup;
			/** This should be set to Yes when the user emails the article link to a customer.  */
			IsSentToCustomer: DevKit.Form.Controls.ControlBoolean;
			/** Knowledge Usage. */
			KnowledgeUsage: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormKnowledge_Article_Incident extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Knowledge_Article_Incident
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Knowledge_Article_Incident */
		Body: LuckyMokey.FormKnowledge_Article_Incident.Body;
	}
	namespace FormKnowledge_Article_Incident_for_Interactive_experience {
		interface Tabs {
		}
		interface Body {
			/** Choose the Incident id for the knowledge article. */
			IncidentId: DevKit.Form.Controls.ControlLookup;
			/** This should be set to Yes when the user emails the article link to a customer.  */
			IsSentToCustomer: DevKit.Form.Controls.ControlBoolean;
			/** Knowledge Usage. */
			KnowledgeUsage: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormKnowledge_Article_Incident_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Knowledge_Article_Incident_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Knowledge_Article_Incident_for_Interactive_experience */
		Body: LuckyMokey.FormKnowledge_Article_Incident_for_Interactive_experience.Body;
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticleIncident {
		enum KnowledgeUsage {
			/** 1 */
			Reference,
			/** 2 */
			Solution,
			/** 3 */
			Source
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
//{'JsForm':['Knowledge Article Incident','Knowledge Article Incident for Interactive experience'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
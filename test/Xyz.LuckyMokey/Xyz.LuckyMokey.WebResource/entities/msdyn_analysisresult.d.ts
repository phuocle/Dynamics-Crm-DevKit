//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_analysisresult_Information {
		interface Header {
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Tabs {
		}
		interface Body {
			AnalysisResultDetails: DevKit.Form.Controls.ControlGrid;
			msdyn_AnalysisComponentType: DevKit.Form.Controls.ControlOptionSet;
			/** The parent Analysis Job that produced the Analysis Result */
			msdyn_AnalysisJobId: DevKit.Form.Controls.ControlLookup;
			msdyn_Category: DevKit.Form.Controls.ControlOptionSet;
			msdyn_EntityName: DevKit.Form.Controls.ControlString;
			msdyn_FileUri: DevKit.Form.Controls.ControlString;
			msdyn_helplink: DevKit.Form.Controls.ControlString;
			msdyn_Level: DevKit.Form.Controls.ControlOptionSet;
			msdyn_Line: DevKit.Form.Controls.ControlInteger;
			msdyn_Member: DevKit.Form.Controls.ControlString;
			msdyn_Message: DevKit.Form.Controls.ControlString;
			msdyn_Module: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** The return status of a rule run: pass, fail, or configuration error */
			msdyn_ReturnStatus: DevKit.Form.Controls.ControlOptionSet;
			msdyn_RuleId: DevKit.Form.Controls.ControlString;
			msdyn_RuleReferenceUri: DevKit.Form.Controls.ControlString;
			msdyn_Severity: DevKit.Form.Controls.ControlOptionSet;
			msdyn_Snippet: DevKit.Form.Controls.ControlString;
			msdyn_SolutionHealthMessage: DevKit.Form.Controls.ControlString;
			msdyn_Type: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_analysisresult_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_analysisresult_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_analysisresult_Information */
		Body: LuckyMokey.Formmsdyn_analysisresult_Information.Body;
		/** The Header section of form msdyn_analysisresult_Information */
		Header: LuckyMokey.Formmsdyn_analysisresult_Information.Header;
	}
}
declare namespace OptionSet {
	namespace msdyn_analysisresult {
		enum msdyn_AnalysisComponentType {
			/** 192350000 */
			Organization_Health,
			/** 192350001 */
			Component_Health
		}
		enum msdyn_Category {
			/** 192350008 */
			Accessibility,
			/** 192350004 */
			Design,
			/** 192350006 */
			Maintainability,
			/** 192350005 */
			Online_Migration,
			/** 192350000 */
			Performance,
			/** 192350003 */
			Security,
			/** 192350007 */
			Supportability,
			/** 192350001 */
			Upgrade_Readiness,
			/** 192350002 */
			Usage
		}
		enum msdyn_ComponentType {
			/** 192350000 */
			Web_Resources,
			/** 192350001 */
			Plug_In,
			/** 192350002 */
			Configuration
		}
		enum msdyn_Level {
			/** 192350000 */
			Error,
			/** 192350001 */
			Warning
		}
		enum msdyn_ReturnStatus {
			/** 192350003 */
			Resolved,
			/** 192350000 */
			Pass,
			/** 192350001 */
			Fail,
			/** 192350002 */
			Config_Error,
			/** 192350004 */
			Warning
		}
		enum msdyn_Severity {
			/** 192350000 */
			Low,
			/** 192350001 */
			Medium,
			/** 192350002 */
			High,
			/** 192350003 */
			Critical
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
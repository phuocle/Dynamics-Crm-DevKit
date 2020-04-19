//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormService_Information {
		interface tab_Resource_Requirements_Sections {
			ResourceRequirement: DevKit.Form.Controls.ControlSection;
		}
		interface tab_required_resources_Sections {
			resources: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Resource_Requirements extends DevKit.Form.Controls.IControlTab {
			Section: tab_Resource_Requirements_Sections;
		}
		interface tab_required_resources extends DevKit.Form.Controls.IControlTab {
			Section: tab_required_resources_Sections;
		}
		interface Tabs {
			Resource_Requirements: tab_Resource_Requirements;
			required_resources: tab_required_resources;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_Scheduling: DevKit.Form.Controls.ControlIFrame;
			IFRAME_RuleTree: DevKit.Form.Controls.ControlIFrame;
			/** Used in conjunction with granularity to describes when services can be performed in relation to midnight on a given day. */
			AnchorOffset: DevKit.Form.Controls.ControlInteger;
			/** Description of activity that represents work done to satisfy a customer's need. */
			Description: DevKit.Form.Controls.ControlString;
			/** Duration of the service. */
			Duration: DevKit.Form.Controls.ControlInteger;
			/** Describes how often the service is performed. */
			Granularity: DevKit.Form.Controls.ControlString;
			/** Initial status reason for the service activity. */
			InitialStatusCode: DevKit.Form.Controls.ControlOptionSet;
			/** Information about whether the service can be scheduled. */
			IsSchedulable: DevKit.Form.Controls.ControlBoolean;
			ResourceRequirements: DevKit.Form.Controls.ControlGrid;
			msdyn_SchedulingEngine: DevKit.Form.Controls.ControlOptionSet;
			/** Name of the service. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the resource specification with which the service is associated. */
			ResourceSpecId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormService_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Service_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Service_Information */
		Body: LuckyMokey.FormService_Information.Body;
	}
}
declare namespace OptionSet {
	namespace Service {
		enum InitialStatusCode {
			/** 1 */
			Requested,
			/** 2 */
			Tentative,
			/** 3 */
			Pending,
			/** 4 */
			Reserved,
			/** 6 */
			In_Progress,
			/** 7 */
			Arrived,
			/** 8 */
			Completed,
			/** 9 */
			Canceled,
			/** 10 */
			No_Show
		}
		enum msdyn_SchedulingEngine {
			/** 0 */
			Legacy_Scheduling,
			/** 1 */
			Universal_Resource_Scheduling
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
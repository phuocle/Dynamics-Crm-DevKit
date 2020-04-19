//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormTask {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_TASK_TAB_Sections {
			TASK: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
			task_details: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TASK_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_TASK_TAB_Sections;
		}
		interface Tabs {
			TASK_TAB: tab_TASK_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the task. */
			Description: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the object with which the task is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTask extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Task
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Task */
		Body: LuckyMokey.FormTask.Body;
		/** The Header section of form Task */
		Header: LuckyMokey.FormTask.Header;
	}
	namespace FormTask_for_Interactive_experience {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_4_Sections {
			tab_4_section_4: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the task. */
			Description: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the object with which the task is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the task is associated. */
			RegardingObjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTask_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Task_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Task_for_Interactive_experience */
		Body: LuckyMokey.FormTask_for_Interactive_experience.Body;
		/** The Header section of form Task_for_Interactive_experience */
		Header: LuckyMokey.FormTask_for_Interactive_experience.Header;
	}
	namespace FormTask_quick_create_form {
		interface tab_createtask_Sections {
			task: DevKit.Form.Controls.ControlSection;
			task_2: DevKit.Form.Controls.ControlSection;
			task_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_createtask extends DevKit.Form.Controls.IControlTab {
			Section: tab_createtask_Sections;
		}
		interface Tabs {
			createtask: tab_createtask;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the task. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the object with which the task is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTask_quick_create_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Task_quick_create_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Task_quick_create_form */
		Body: LuckyMokey.FormTask_quick_create_form.Body;
	}
}
declare namespace OptionSet {
	namespace Task {
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 2 */
			Not_Started,
			/** 3 */
			In_Progress,
			/** 4 */
			Waiting_on_someone_else,
			/** 5 */
			Completed,
			/** 6 */
			Canceled,
			/** 7 */
			Deferred
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
//{'JsForm':['Task','Task for Interactive experience','Task quick create form.'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTask {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_TASK_TAB_Sections {
			TASK: DevKit.Controls.Section;
			Description: DevKit.Controls.Section;
			task_details: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_TASK_TAB extends DevKit.Controls.ITab {
			Section: tab_TASK_TAB_Sections;
		}
		interface Tabs {
			TASK_TAB: tab_TASK_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.String;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormTask extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Task
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task */
		Body: DevKit.FormTask.Body;
		/** The Header section of form Task */
		Header: DevKit.FormTask.Header;
	}
	namespace FormTask_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_4_Sections {
			tab_4_section_4: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.String;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Choose the record that the task relates to. */
			RegardingObjectId_1: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormTask_for_Interactive_experience extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Task_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task_for_Interactive_experience */
		Body: DevKit.FormTask_for_Interactive_experience.Body;
		/** The Header section of form Task_for_Interactive_experience */
		Header: DevKit.FormTask_for_Interactive_experience.Header;
	}
	namespace FormTask_quick_create_form {
		interface tab_createtask_Sections {
			task: DevKit.Controls.Section;
			task_2: DevKit.Controls.Section;
			task_3: DevKit.Controls.Section;
		}
		interface tab_createtask extends DevKit.Controls.ITab {
			Section: tab_createtask_Sections;
		}
		interface Tabs {
			createtask: tab_createtask;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormTask_quick_create_form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Task_quick_create_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task_quick_create_form */
		Body: DevKit.FormTask_quick_create_form.Body;
	}
	class TaskApi {
		/**
		* DynamicsCrm.DevKit TaskApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the task. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent on the task. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the task. By default, it displays when the activity was completed or canceled. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the task. By default, it displays when the task was created. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type a category to identify the task type, such as lead gathering or customer follow up, to tie the task to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Assigned Task Unique Id */
		CrmTaskAssignedUniqueId: DevKit.WebApi.GuidValue;
		/** Type additional information to describe the task. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information which specifies whether the task was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Information which specifies if the task was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the record owner's business unit. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the task. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the task. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Type the percentage complete value for the task to track tasks to completion. */
		PercentComplete: DevKit.WebApi.IntegerValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the record that the task relates to. */
		regardingobjectid_account_task: DevKit.WebApi.LookupValue;
		/** Choose the record that the task relates to. */
		regardingobjectid_contact_task: DevKit.WebApi.LookupValue;
		/** Choose the record that the task relates to. */
		regardingobjectid_devkit_azureaccount_task: DevKit.WebApi.LookupValue;
		/** Choose the record that the task relates to. */
		regardingobjectid_devkit_webapi_task: DevKit.WebApi.LookupValue;
		/** Choose the record that the task relates to. */
		regardingobjectid_knowledgearticle_task: DevKit.WebApi.LookupValue;
		/** Choose the record that the task relates to. */
		regardingobjectid_knowledgebaserecord_task: DevKit.WebApi.LookupValue;
		/** Scheduled duration of the task, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Task record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this Task. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the task's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the task type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the task. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the task. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Task {
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum StateCode {
			/** 2 */
			Canceled,
			/** 1 */
			Completed,
			/** 0 */
			Open
		}
		enum StatusCode {
			/** 6 */
			Canceled,
			/** 5 */
			Completed,
			/** 7 */
			Deferred,
			/** 3 */
			In_Progress,
			/** 2 */
			Not_Started,
			/** 4 */
			Waiting_on_someone_else
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
//{'JsForm':['Task','Task for Interactive experience','Task quick create form.'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
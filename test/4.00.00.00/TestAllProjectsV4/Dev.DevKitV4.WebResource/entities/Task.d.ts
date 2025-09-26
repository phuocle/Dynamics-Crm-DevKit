//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKitV4 {
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
			Description: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			TASK: DevKit.Controls.Section;
			task_details: DevKit.Controls.Section;
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
		interface Navigation {
			Task_QueueItem: DevKit.Controls.NavigationItem;
		}
	}
	class FormTask extends DevKit.IForm {
		/**
		* Task [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task */
		Body: DevKitV4.FormTask.Body;
		/** The Header section of form Task */
		Header: DevKitV4.FormTask.Header;
		/** The Navigation of form Task */
		Navigation: DevKitV4.FormTask.Navigation;
		/** The SidePanes of form Task */
		SidePanes: DevKit.SidePanes;
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
			tab_3_section_3: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_4: DevKit.Controls.Section;
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
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			Task_QueueItem: DevKit.Controls.NavigationItem;
		}
	}
	class FormTask_for_Interactive_experience extends DevKit.IForm {
		/**
		* Task for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task_for_Interactive_experience */
		Body: DevKitV4.FormTask_for_Interactive_experience.Body;
		/** The Header section of form Task_for_Interactive_experience */
		Header: DevKitV4.FormTask_for_Interactive_experience.Header;
		/** The Navigation of form Task_for_Interactive_experience */
		Navigation: DevKitV4.FormTask_for_Interactive_experience.Navigation;
		/** The SidePanes of form Task_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
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
		* Task quick create form. [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task_quick_create_form */
		Body: DevKitV4.FormTask_quick_create_form.Body;
	}
	class TaskApi {
		/**
		* DynamicsCrm.DevKit TaskApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>) : DevKitV4.TaskApi;
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** For internal use only. */
		ActivityAdditionalParams: string | null;
		/** Unique identifier of the task. */
		ActivityId: string | null;
		/** Type the number of minutes spent on the task. The duration is used in reporting. */
		ActualDurationMinutes: number | null;
		/** Enter the actual end date and time of the task. By default, it displays when the activity was completed or canceled. */
		ActualEnd_UtcDateOnly: Date | null;
		/** Enter the actual start date and time for the task. By default, it displays when the task was created. */
		ActualStart_UtcDateOnly: Date | null;
		/** Type a category to identify the task type, such as lead gathering or customer follow up, to tie the task to a business group or function. */
		Category: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Assigned Task Unique Id */
		CrmTaskAssignedUniqueId: string | null;
		/** Type additional information to describe the task. */
		Description: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Information which specifies whether the task was billed as part of resolving a case. */
		IsBilled: boolean | null;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean | null;
		/** Information which specifies if the task was created from a workflow rule. */
		IsWorkflowCreated: boolean | null;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Shows the record owner's business unit. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team that owns the task. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user that owns the task. */
		readonly OwningUser: string | null;
		/** Type the percentage complete value for the task to track tasks to completion. */
		PercentComplete: number | null;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Task.PriorityCode | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_account_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_adx_invitation_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_contact_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_knowledgearticle_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_knowledgebaserecord_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_adplacement_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_pollplacement_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_publishingstatetransitionrule_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_redirect_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_shortcut_task: string | null;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_website_task: string | null;
		/** Scheduled duration of the task, specified in minutes. */
		readonly ScheduledDurationMinutes: number | null;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: Date | null;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: Date | null;
		/** Choose the service level agreement (SLA) that you want to apply to the Task record. */
		SLAId: string | null;
		/** Last SLA that was applied to this Task. This field is for internal use only. */
		readonly SLAInvokedId: string | null;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date | null;
		/** Shows the ID of the stage. */
		StageId: string | null;
		/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
		StateCode: OptionSet.Task.StateCode | null;
		/** Select the task's status. */
		StatusCode: OptionSet.Task.StatusCode | null;
		/** Type a subcategory to identify the task type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string | null;
		/** Type a short description about the objective or primary topic of the task. */
		Subject: string | null;
		/** For internal use only. */
		SubscriptionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		TraversedPath: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the task. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the task. */
			readonly ActivityId: string;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end date and time of the task. By default, it displays when the activity was completed or canceled. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the task. By default, it displays when the task was created. */
			readonly ActualStart_UtcDateOnly: string;
			/** Type a category to identify the task type, such as lead gathering or customer follow up, to tie the task to a business group or function. */
			readonly Category: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Assigned Task Unique Id */
			readonly CrmTaskAssignedUniqueId: string;
			/** Type additional information to describe the task. */
			readonly Description: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information which specifies whether the task was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information which specifies if the task was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the record owner's business unit. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the task. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the task. */
			readonly OwningUser: string;
			/** Type the percentage complete value for the task to track tasks to completion. */
			readonly PercentComplete: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_account_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_adx_invitation_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_contact_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_knowledgearticle_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_knowledgebaserecord_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_adplacement_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_pollplacement_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_redirect_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_shortcut_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_website_task: string;
			/** Scheduled duration of the task, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected due date and time. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Task record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this Task. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the task's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the task type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the task. */
			readonly Subject: string;
			/** For internal use only. */
			readonly SubscriptionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the task. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Task {
		enum ActivityTypeCode {
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Customer_Voice_alert = 10611*/
			Customer_Voice_alert = 10611,
			/** Customer_Voice_survey_invite = 10612*/
			Customer_Voice_survey_invite = 10612,
			/** Customer_Voice_survey_response = 10613*/
			Customer_Voice_survey_response = 10613,
			/** Email = 4202*/
			Email = 4202,
			/** Fax = 4204*/
			Fax = 4204,
			/** Invite_Redemption = 10315*/
			Invite_Redemption = 10315,
			/** Letter = 4207*/
			Letter = 4207,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Portal_Comment = 10316*/
			Portal_Comment = 10316,
			/** Recurring_Appointment = 4251*/
			Recurring_Appointment = 4251,
			/** Task = 4212*/
			Task = 4212,
			/** Teams_chat = 10187*/
			Teams_chat = 10187
		}
		enum PriorityCode {
			/** High = 2*/
			High = 2,
			/** Low = 0*/
			Low = 0,
			/** Normal = 1*/
			Normal = 1
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Canceled = 2*/
			Canceled = 2,
			/** Completed = 1*/
			Completed = 1,
			/** Open = 0*/
			Open = 0
		}
		enum StatusCode {
			/** Canceled = 6*/
			Canceled = 6,
			/** Completed = 5*/
			Completed = 5,
			/** Deferred = 7*/
			Deferred = 7,
			/** In_Progress = 3*/
			In_Progress = 3,
			/** Not_Started = 2*/
			Not_Started = 2,
			/** Waiting_on_someone_else = 4*/
			Waiting_on_someone_else = 4
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
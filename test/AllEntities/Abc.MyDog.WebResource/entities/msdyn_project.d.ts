//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_project_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the actual cost divided by the estimated cost at completion. System Field - For PSA Use Only. */
			msdyn_CostConsumption: DevKit.Controls.Decimal;
			/** Shows the aggregate of the planned labor cost of all the associated tasks. */
			msdyn_plannedlaborcost: DevKit.Controls.Money;
			/** Shows the actual hours divided by effort at estimate. */
			msdyn_Progress: DevKit.Controls.Decimal;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Controls.Date;
		}
		interface tab_Summary_Sections {
			_31843965_2614_4DEC_B525_872D76E16B92: DevKit.Controls.Section;
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_4: DevKit.Controls.Section;
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_5: DevKit.Controls.Section;
		}
		interface tab_Schedule_Tab_Sections {
			Schedule_Section: DevKit.Controls.Section;
		}
		interface tab_Team_Sections {
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_Assignments_Tab_Sections {
			Assignments_Section: DevKit.Controls.Section;
		}
		interface tab_Reconciliation_Tab_Sections {
			Reconciliation_Section: DevKit.Controls.Section;
		}
		interface tab_Estimates_Tab_Sections {
			Estimates_Section: DevKit.Controls.Section;
		}
		interface tab_Tracking_Tab_Sections {
			Tracking_Section: DevKit.Controls.Section;
		}
		interface tab_Status_Sections {
			Status_section_1: DevKit.Controls.Section;
			Status_section_2: DevKit.Controls.Section;
		}
		interface tab_Sales_Sections {
			Sales: DevKit.Controls.Section;
		}
		interface tab_Expense_Estimates_Tab_Sections {
			Expense_Estimates_Section: DevKit.Controls.Section;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface tab_Schedule_Tab extends DevKit.Controls.ITab {
			Section: tab_Schedule_Tab_Sections;
		}
		interface tab_Team extends DevKit.Controls.ITab {
			Section: tab_Team_Sections;
		}
		interface tab_Assignments_Tab extends DevKit.Controls.ITab {
			Section: tab_Assignments_Tab_Sections;
		}
		interface tab_Reconciliation_Tab extends DevKit.Controls.ITab {
			Section: tab_Reconciliation_Tab_Sections;
		}
		interface tab_Estimates_Tab extends DevKit.Controls.ITab {
			Section: tab_Estimates_Tab_Sections;
		}
		interface tab_Tracking_Tab extends DevKit.Controls.ITab {
			Section: tab_Tracking_Tab_Sections;
		}
		interface tab_Status extends DevKit.Controls.ITab {
			Section: tab_Status_Sections;
		}
		interface tab_Sales extends DevKit.Controls.ITab {
			Section: tab_Sales_Sections;
		}
		interface tab_Expense_Estimates_Tab extends DevKit.Controls.ITab {
			Section: tab_Expense_Estimates_Tab_Sections;
		}
		interface Tabs {
			Summary: tab_Summary;
			Schedule_Tab: tab_Schedule_Tab;
			Team: tab_Team;
			Assignments_Tab: tab_Assignments_Tab;
			Reconciliation_Tab: tab_Reconciliation_Tab;
			Estimates_Tab: tab_Estimates_Tab;
			Tracking_Tab: tab_Tracking_Tab;
			Status: tab_Status;
			Sales: tab_Sales;
			Expense_Estimates_Tab: tab_Expense_Estimates_Tab;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the actual end time of the project. */
			msdyn_actualend: DevKit.Controls.Date;
			/** Shows the aggregate of actual expense cost on the project. System Field - For PSA Use Only. */
			msdyn_actualexpensecost: DevKit.Controls.Money;
			/** Shows the total actual hours of the project. System Field - For PSA Use Only. */
			msdyn_actualhours: DevKit.Controls.Decimal;
			/** Shows the aggregate of actual labor cost on the project. System Field - For PSA Use Only. */
			msdyn_actuallaborcost: DevKit.Controls.Money;
			/** Enter the actual start time of the project. */
			msdyn_actualstart: DevKit.Controls.Date;
			/** Enter the comments that are used to describe the current project status. */
			msdyn_comments: DevKit.Controls.String;
			/** Select the organizational unit sponsoring the project. */
			msdyn_ContractOrganizationalUnitId: DevKit.Controls.Lookup;
			/** System Field - For PSA Use Only. */
			msdyn_CostPerformence: DevKit.Controls.OptionSet;
			/** Enter the customer who the project is associated with. */
			msdyn_customer: DevKit.Controls.Lookup;
			/** Enter a description of the project. */
			msdyn_description: DevKit.Controls.String;
			/** Shows if the project is a project template. System Field - For PSA Use Only. */
			msdyn_istemplate: DevKit.Controls.Boolean;
			/** Describes the project status. */
			msdyn_overallprojectstatus: DevKit.Controls.OptionSet;
			/** Shows the aggregate of the planned expense cost of all the associated tasks. */
			msdyn_plannedexpensecost: DevKit.Controls.Money;
			/** Shows the total estimate hours of the project. */
			msdyn_plannedhours: DevKit.Controls.Decimal;
			/** Shows the aggregate of the planned labor cost of all the associated tasks. */
			msdyn_plannedlaborcost: DevKit.Controls.Money;
			/** Shows the project manager assigned to the project. */
			msdyn_projectmanager: DevKit.Controls.Lookup;
			/** Select the project template behind the project. */
			msdyn_ProjectTemplate: DevKit.Controls.Lookup;
			/** Select the project template behind the project. */
			msdyn_ProjectTemplate_1: DevKit.Controls.Lookup;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Controls.Date;
			/** Enter the scheduled start time of the project. */
			msdyn_scheduledstart: DevKit.Controls.Date;
			/** Describes the schedule performance of the project. */
			msdyn_scheduleperformance: DevKit.Controls.OptionSet;
			/** Shows the most recent update on a status field(comments or overall project status). */
			msdyn_statusupdatedon: DevKit.Controls.DateTime;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Controls.String;
			/** Shows the aggregated cost from actuals on the project. */
			msdyn_TotalActualCost: DevKit.Controls.Money;
			/** Shows the aggregate of the total planned cost of all the associated tasks. */
			msdyn_TotalPlannedCost: DevKit.Controls.Money;
			/** Select the work hour template used to create the project calendar. */
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_project_msdyn_projectteam_project: DevKit.Controls.NavigationItem,
			nav_msdyn_project_resourcerequirement: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_actual_Project: DevKit.Controls.NavigationItem
		}
		interface ProcessProject_Service_Project_Stages {
			/** Enter the actual end time of the project. */
			msdyn_actualend: DevKit.Controls.Date;
			/** Enter the actual end time of the project. */
			msdyn_actualend_1: DevKit.Controls.Date;
			/** Enter the actual start time of the project. */
			msdyn_actualstart: DevKit.Controls.Date;
			/** Enter a description of the project. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the contract for this project. */
			msdyn_salesorderid: DevKit.Controls.Lookup;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Controls.Date;
			/** Enter the scheduled start time of the project. */
			msdyn_scheduledstart: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
			Project_Service_Project_Stages: ProcessProject_Service_Project_Stages;
		}
		interface Grid {
			Schedule: DevKit.Controls.Grid;
			SubGrid_TeamMember: DevKit.Controls.Grid;
			Assignments: DevKit.Controls.Grid;
			Reconciliation: DevKit.Controls.Grid;
			Estimates: DevKit.Controls.Grid;
			Tracking: DevKit.Controls.Grid;
			SchedulePerformanceEffort: DevKit.Controls.Grid;
			SchedulePerformanceCost: DevKit.Controls.Grid;
			ProjectContract: DevKit.Controls.Grid;
			ProjectQuote: DevKit.Controls.Grid;
			ExpenseEstimates: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_project_Information */
		Body: MyDog.Formmsdyn_project_Information.Body;
		/** The Header section of form msdyn_project_Information */
		Header: MyDog.Formmsdyn_project_Information.Header;
		/** The Navigation of form msdyn_project_Information */
		Navigation: MyDog.Formmsdyn_project_Information.Navigation;
		/** The Process of form msdyn_project_Information */
		Process: MyDog.Formmsdyn_project_Information.Process;
		/** The Grid of form msdyn_project_Information */
		Grid: MyDog.Formmsdyn_project_Information.Grid;
	}
	namespace FormCreate_Project {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select the organizational unit sponsoring the project. */
			msdyn_ContractOrganizationalUnitId: DevKit.Controls.Lookup;
			/** Enter a description of the project. */
			msdyn_description: DevKit.Controls.String;
			/** Shows if the project is a project template. System Field - For PSA Use Only. */
			msdyn_istemplate: DevKit.Controls.Boolean;
			/** Shows the aggregate of the planned expense cost of all the associated tasks. */
			msdyn_plannedexpensecost: DevKit.Controls.Money;
			/** Shows the total estimate hours of the project. */
			msdyn_plannedhours: DevKit.Controls.Decimal;
			/** Shows the aggregate of the planned labor cost of all the associated tasks. */
			msdyn_plannedlaborcost: DevKit.Controls.Money;
			/** Shows the project manager assigned to the project. */
			msdyn_projectmanager: DevKit.Controls.Lookup;
			/** Select the project template behind the project. */
			msdyn_ProjectTemplate: DevKit.Controls.Lookup;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Controls.Date;
			/** Enter the scheduled start time of the project. */
			msdyn_scheduledstart: DevKit.Controls.Date;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Controls.String;
			/** Shows the aggregate of the total planned cost of all the associated tasks. */
			msdyn_TotalPlannedCost: DevKit.Controls.Money;
			/** Select the work hour template used to create the project calendar. */
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormCreate_Project extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Create_Project
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Create_Project */
		Body: MyDog.FormCreate_Project.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_project {
		enum msdyn_BulkGenerationStatus {
			/** 192350001 */
			Failed,
			/** 192350000 */
			Processing
		}
		enum msdyn_CostPerformence {
			/** 192350000 */
			On_Budget,
			/** 192350001 */
			Over_Budget,
			/** 192350002 */
			Under_Budget
		}
		enum msdyn_overallprojectstatus {
			/** 1 */
			Green,
			/** 3 */
			Red,
			/** 2 */
			Yellow
		}
		enum msdyn_scheduleperformance {
			/** 192350001 */
			Ahead,
			/** 192350002 */
			Behind,
			/** 192350000 */
			On_Time
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
			/** 192350000 */
			Closed_Sets_project_to_read_only_and_cancels_future_bookings,
			/** 2 */
			Inactive_Sets_project_to_read_only
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
//{'JsForm':['Create Project','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
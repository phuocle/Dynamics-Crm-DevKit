//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_project_Information {
		interface Header {
			/** Shows the actual cost divided by the estimated cost at completion. System Field - For PSA Use Only. */
			msdyn_CostConsumption: DevKit.Form.Controls.ControlDecimal;
			/** Shows the aggregate of the planned labor cost of all the associated tasks. */
			msdyn_plannedlaborcost: DevKit.Form.Controls.ControlMoney;
			/** Shows the actual hours divided by effort at estimate. */
			msdyn_Progress: DevKit.Form.Controls.ControlDecimal;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Form.Controls.ControlDate;
		}
		interface tab_Summary_Sections {
			_31843965_2614_4DEC_B525_872D76E16B92: DevKit.Form.Controls.ControlSection;
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_4: DevKit.Form.Controls.ControlSection;
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_5: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Schedule_Tab_Sections {
			Schedule_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Team_Sections {
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Assignments_Tab_Sections {
			Assignments_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Reconciliation_Tab_Sections {
			Reconciliation_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Estimates_Tab_Sections {
			Estimates_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Tracking_Tab_Sections {
			Tracking_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Status_Sections {
			Status_section_1: DevKit.Form.Controls.ControlSection;
			Status_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Sales_Sections {
			Sales: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Expense_Estimates_Tab_Sections {
			Expense_Estimates_Section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_Schedule_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_Schedule_Tab_Sections;
		}
		interface tab_Team extends DevKit.Form.Controls.IControlTab {
			Section: tab_Team_Sections;
		}
		interface tab_Assignments_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_Assignments_Tab_Sections;
		}
		interface tab_Reconciliation_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_Reconciliation_Tab_Sections;
		}
		interface tab_Estimates_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_Estimates_Tab_Sections;
		}
		interface tab_Tracking_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_Tracking_Tab_Sections;
		}
		interface tab_Status extends DevKit.Form.Controls.IControlTab {
			Section: tab_Status_Sections;
		}
		interface tab_Sales extends DevKit.Form.Controls.IControlTab {
			Section: tab_Sales_Sections;
		}
		interface tab_Expense_Estimates_Tab extends DevKit.Form.Controls.IControlTab {
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
			Schedule: DevKit.Form.Controls.ControlGrid;
			SubGrid_TeamMember: DevKit.Form.Controls.ControlGrid;
			Assignments: DevKit.Form.Controls.ControlGrid;
			Reconciliation: DevKit.Form.Controls.ControlGrid;
			Estimates: DevKit.Form.Controls.ControlGrid;
			Tracking: DevKit.Form.Controls.ControlGrid;
			SchedulePerformanceEffort: DevKit.Form.Controls.ControlGrid;
			SchedulePerformanceCost: DevKit.Form.Controls.ControlGrid;
			ProjectContract: DevKit.Form.Controls.ControlGrid;
			ProjectQuote: DevKit.Form.Controls.ControlGrid;
			ExpenseEstimates: DevKit.Form.Controls.ControlGrid;
			/** Enter the actual end time of the project. */
			msdyn_actualend: DevKit.Form.Controls.ControlDate;
			/** Shows the aggregate of actual expense cost on the project. System Field - For PSA Use Only. */
			msdyn_actualexpensecost: DevKit.Form.Controls.ControlMoney;
			/** Shows the total actual hours of the project. System Field - For PSA Use Only. */
			msdyn_actualhours: DevKit.Form.Controls.ControlDecimal;
			/** Shows the aggregate of actual labor cost on the project. System Field - For PSA Use Only. */
			msdyn_actuallaborcost: DevKit.Form.Controls.ControlMoney;
			/** Enter the actual start time of the project. */
			msdyn_actualstart: DevKit.Form.Controls.ControlDate;
			/** Enter the comments that are used to describe the current project status. */
			msdyn_comments: DevKit.Form.Controls.ControlString;
			/** Select the organizational unit sponsoring the project. */
			msdyn_ContractOrganizationalUnitId: DevKit.Form.Controls.ControlLookup;
			/** System Field - For PSA Use Only. */
			msdyn_CostPerformence: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the customer who the project is associated with. */
			msdyn_customer: DevKit.Form.Controls.ControlLookup;
			/** Enter a description of the project. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows if the project is a project template. System Field - For PSA Use Only. */
			msdyn_istemplate: DevKit.Form.Controls.ControlBoolean;
			/** Describes the project status. */
			msdyn_overallprojectstatus: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the aggregate of the planned expense cost of all the associated tasks. */
			msdyn_plannedexpensecost: DevKit.Form.Controls.ControlMoney;
			/** Shows the total estimate hours of the project. */
			msdyn_plannedhours: DevKit.Form.Controls.ControlDecimal;
			/** Shows the aggregate of the planned labor cost of all the associated tasks. */
			msdyn_plannedlaborcost: DevKit.Form.Controls.ControlMoney;
			/** Shows the project manager assigned to the project. */
			msdyn_projectmanager: DevKit.Form.Controls.ControlLookup;
			/** Select the project template behind the project. */
			msdyn_ProjectTemplate: DevKit.Form.Controls.ControlLookup;
			/** Select the project template behind the project. */
			msdyn_ProjectTemplate_1: DevKit.Form.Controls.ControlLookup;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Form.Controls.ControlDate;
			/** Enter the scheduled start time of the project. */
			msdyn_scheduledstart: DevKit.Form.Controls.ControlDate;
			/** Describes the schedule performance of the project. */
			msdyn_scheduleperformance: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the most recent update on a status field(comments or overall project status). */
			msdyn_statusupdatedon: DevKit.Form.Controls.ControlDateTime;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Form.Controls.ControlString;
			/** Shows the aggregated cost from actuals on the project. */
			msdyn_TotalActualCost: DevKit.Form.Controls.ControlMoney;
			/** Shows the aggregate of the total planned cost of all the associated tasks. */
			msdyn_TotalPlannedCost: DevKit.Form.Controls.ControlMoney;
			/** Select the work hour template used to create the project calendar. */
			msdyn_workhourtemplate: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_project_msdyn_projecttask_project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_projectpricelist_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_projectteam_project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_project_resourcerequirement: DevKit.Form.Controls.ControlNavigationItem,
			navDocument: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_actual_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_journal_DefaultProject: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_timeentry_project: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_bookableresourcebooking_projectid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_bookableresourcebookingheader_projectid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_projectapproval_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_contractlinescheduleofvalue_project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_estimate_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_project_ProjectTemplate: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_resourceassignment_projectid: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_opportunityproduct_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_quotedetail_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_expense_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_projecttransactioncategory_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_journalline_Project: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_project_msdyn_estimateline_Project: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessProject_Service_Project_Stages {
			/** Enter the actual end time of the project. */
			msdyn_actualend: DevKit.Form.Controls.ControlDate;
			/** Enter the actual end time of the project. */
			msdyn_actualend_1: DevKit.Form.Controls.ControlDate;
			/** Enter the actual start time of the project. */
			msdyn_actualstart: DevKit.Form.Controls.ControlDate;
			/** Enter a description of the project. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows the contract for this project. */
			msdyn_salesorderid: DevKit.Form.Controls.ControlLookup;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Form.Controls.ControlDate;
			/** Enter the scheduled start time of the project. */
			msdyn_scheduledstart: DevKit.Form.Controls.ControlDate;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Form.Controls.ControlString;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Project_Service_Project_Stages: ProcessProject_Service_Project_Stages;
		}
	}
	class Formmsdyn_project_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_project_Information */
		Body: LuckyMokey.Formmsdyn_project_Information.Body;
		/** The Header section of form msdyn_project_Information */
		Header: LuckyMokey.Formmsdyn_project_Information.Header;
		/** The Navigation of form msdyn_project_Information */
		Navigation: LuckyMokey.Formmsdyn_project_Information.Navigation;
		/** The Process of form msdyn_project_Information */
		Process: LuckyMokey.Formmsdyn_project_Information.Process;
	}
	namespace FormCreate_Project {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Select the organizational unit sponsoring the project. */
			msdyn_ContractOrganizationalUnitId: DevKit.Form.Controls.ControlLookup;
			/** Enter a description of the project. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows if the project is a project template. System Field - For PSA Use Only. */
			msdyn_istemplate: DevKit.Form.Controls.ControlBoolean;
			/** Shows the aggregate of the planned expense cost of all the associated tasks. */
			msdyn_plannedexpensecost: DevKit.Form.Controls.ControlMoney;
			/** Shows the total estimate hours of the project. */
			msdyn_plannedhours: DevKit.Form.Controls.ControlDecimal;
			/** Shows the aggregate of the planned labor cost of all the associated tasks. */
			msdyn_plannedlaborcost: DevKit.Form.Controls.ControlMoney;
			/** Shows the project manager assigned to the project. */
			msdyn_projectmanager: DevKit.Form.Controls.ControlLookup;
			/** Select the project template behind the project. */
			msdyn_ProjectTemplate: DevKit.Form.Controls.ControlLookup;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Form.Controls.ControlDate;
			/** Enter the scheduled start time of the project. */
			msdyn_scheduledstart: DevKit.Form.Controls.ControlDate;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Form.Controls.ControlString;
			/** Shows the aggregate of the total planned cost of all the associated tasks. */
			msdyn_TotalPlannedCost: DevKit.Form.Controls.ControlMoney;
			/** Select the work hour template used to create the project calendar. */
			msdyn_workhourtemplate: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Shows the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormCreate_Project extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Create_Project
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Create_Project */
		Body: LuckyMokey.FormCreate_Project.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_project {
		enum msdyn_BulkGenerationStatus {
			/** 192350000 */
			Processing,
			/** 192350001 */
			Failed
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
			/** 2 */
			Yellow,
			/** 3 */
			Red
		}
		enum msdyn_scheduleperformance {
			/** 192350000 */
			On_Time,
			/** 192350001 */
			Ahead,
			/** 192350002 */
			Behind
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
			Inactive_Sets_project_to_read_only,
			/** 192350000 */
			Closed_Sets_project_to_read_only_and_cancels_future_bookings
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
//{'JsForm':['Create Project','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
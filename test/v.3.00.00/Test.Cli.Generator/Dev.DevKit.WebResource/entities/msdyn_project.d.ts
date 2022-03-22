//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		interface tab_Assignments_Tab_Sections {
			Assignments_Section: DevKit.Controls.Section;
		}
		interface tab_Estimates_Tab_Sections {
			Estimates_Section: DevKit.Controls.Section;
		}
		interface tab_Expense_Estimates_Tab_Sections {
			Expense_Estimates_Section: DevKit.Controls.Section;
		}
		interface tab_Reconciliation_Tab_Sections {
			Reconciliation_Section: DevKit.Controls.Section;
		}
		interface tab_Sales_Sections {
			Sales: DevKit.Controls.Section;
		}
		interface tab_Schedule_Tab_Sections {
			Schedule_Section: DevKit.Controls.Section;
		}
		interface tab_Status_Sections {
			Status_section_1: DevKit.Controls.Section;
			Status_section_2: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			_31843965_2614_4DEC_B525_872D76E16B92: DevKit.Controls.Section;
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_4: DevKit.Controls.Section;
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_5: DevKit.Controls.Section;
		}
		interface tab_Team_Sections {
			_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_Tracking_Tab_Sections {
			Tracking_Section: DevKit.Controls.Section;
		}
		interface tab_Assignments_Tab extends DevKit.Controls.ITab {
			Section: tab_Assignments_Tab_Sections;
		}
		interface tab_Estimates_Tab extends DevKit.Controls.ITab {
			Section: tab_Estimates_Tab_Sections;
		}
		interface tab_Expense_Estimates_Tab extends DevKit.Controls.ITab {
			Section: tab_Expense_Estimates_Tab_Sections;
		}
		interface tab_Reconciliation_Tab extends DevKit.Controls.ITab {
			Section: tab_Reconciliation_Tab_Sections;
		}
		interface tab_Sales extends DevKit.Controls.ITab {
			Section: tab_Sales_Sections;
		}
		interface tab_Schedule_Tab extends DevKit.Controls.ITab {
			Section: tab_Schedule_Tab_Sections;
		}
		interface tab_Status extends DevKit.Controls.ITab {
			Section: tab_Status_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface tab_Team extends DevKit.Controls.ITab {
			Section: tab_Team_Sections;
		}
		interface tab_Tracking_Tab extends DevKit.Controls.ITab {
			Section: tab_Tracking_Tab_Sections;
		}
		interface Tabs {
			Assignments_Tab: tab_Assignments_Tab;
			Estimates_Tab: tab_Estimates_Tab;
			Expense_Estimates_Tab: tab_Expense_Estimates_Tab;
			Reconciliation_Tab: tab_Reconciliation_Tab;
			Sales: tab_Sales;
			Schedule_Tab: tab_Schedule_Tab;
			Status: tab_Status;
			Summary: tab_Summary;
			Team: tab_Team;
			Tracking_Tab: tab_Tracking_Tab;
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
			msdyn_ProjectTemplate1: DevKit.Controls.Lookup;
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
			nav_msdyn_msdyn_project_bookableresourcebooking_projectid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_bookableresourcebookingheader_projectid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_actual_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_contractlinescheduleofvalue_project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_estimate_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_estimateline_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_expense_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_journal_DefaultProject: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_journalline_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_project_ProjectTemplate: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_projectapproval_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_projectpricelist_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_projecttask_project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_projectteam_project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_projecttransactioncategory_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_resourceassignment_projectid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_msdyn_timeentry_project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_opportunityproduct_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_project_quotedetail_Project: DevKit.Controls.NavigationItem,
			nav_msdyn_project_resourcerequirement: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
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
			Assignments: DevKit.Controls.Grid;
			Estimates: DevKit.Controls.Grid;
			ExpenseEstimates: DevKit.Controls.Grid;
			ProjectContract: DevKit.Controls.Grid;
			ProjectQuote: DevKit.Controls.Grid;
			Reconciliation: DevKit.Controls.Grid;
			Schedule: DevKit.Controls.Grid;
			SchedulePerformanceCost: DevKit.Controls.Grid;
			SchedulePerformanceEffort: DevKit.Controls.Grid;
			SubGrid_TeamMember: DevKit.Controls.Grid;
			Tracking: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_project_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_project_Information */
		Body: DevKit.Formmsdyn_project_Information.Body;
		/** The Header section of form msdyn_project_Information */
		Header: DevKit.Formmsdyn_project_Information.Header;
		/** The Navigation of form msdyn_project_Information */
		Navigation: DevKit.Formmsdyn_project_Information.Navigation;
		/** The Process of form msdyn_project_Information */
		Process: DevKit.Formmsdyn_project_Information.Process;
		/** The Grid of form msdyn_project_Information */
		Grid: DevKit.Formmsdyn_project_Information.Grid;
		/** The SidePanes of form msdyn_project_Information */
		SidePanes: DevKit.SidePanes;
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
			/** Shows the contract for this project. */
			msdyn_salesorderid: DevKit.Controls.Lookup;
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
		* Create Project [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Create_Project */
		Body: DevKit.FormCreate_Project.Body;
	}
	class msdyn_projectApi {
		/**
		* DynamicsCrm.DevKit msdyn_projectApi
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the actual duration of the project in minutes. */
		msdyn_actualdurationminutes: number;
		/** Enter the actual end time of the project. */
		msdyn_actualend_UtcDateOnly: Date;
		/** Shows the aggregate of actual expense cost on the project. System Field - For PSA Use Only. */
		msdyn_actualexpensecost: number;
		/** Value of the Actual Expense Cost in base currency. System Field - For PSA Use Only. */
		readonly msdyn_actualexpensecost_Base: number;
		/** Shows the aggregate of actual expense sales on the project - For PSA use only */
		msdyn_ActualExpenseSales: number;
		/** Shows the value of the actual expense sales in the base currency. System Field - For PSA Use Only. */
		readonly msdyn_actualexpensesales_Base: number;
		/** Shows the total actual hours of the project. System Field - For PSA Use Only. */
		msdyn_actualhours: number;
		/** Shows the aggregate of actual labor cost on the project. System Field - For PSA Use Only. */
		msdyn_actuallaborcost: number;
		/** Value of the Actual Labor Cost in base currency. System Field - For PSA Use Only. */
		readonly msdyn_actuallaborcost_Base: number;
		/** Shows the aggregate of actual labor sales on the project - For PSA use only */
		msdyn_ActualSales: number;
		/** Shows the value of the actual labor sales in the base currency. System Field - For PSA Use Only. */
		readonly msdyn_actualsales_Base: number;
		/** Enter the actual start time of the project. */
		msdyn_actualstart_UtcDateOnly: Date;
		/** The status of the bulk generation operations running on the project entity. If no operation is running, the value is null. System Field - For PSA Use Only. */
		msdyn_BulkGenerationStatus: OptionSet.msdyn_project.msdyn_BulkGenerationStatus;
		/** Id of the calendar for the project. */
		msdyn_calendarid: string;
		/** Enter the comments that are used to describe the current project status. */
		msdyn_comments: string;
		/** Select the organizational unit sponsoring the project. */
		msdyn_ContractOrganizationalUnitId: string;
		/** Shows the actual cost divided by the estimated cost at completion. System Field - For PSA Use Only. */
		msdyn_CostConsumption: number;
		/** Sum of Actual Cost and Remaining cost. System Field - For PSA Use Only. */
		readonly msdyn_CostEstimateAtComplete: number;
		/** Value of the Cost estimate at completion (EAC) in base currency. System Field - For PSA Use Only. */
		readonly msdyn_costestimateatcomplete_Base: number;
		/** System Field - For PSA Use Only. */
		readonly msdyn_CostPerformence: OptionSet.msdyn_project.msdyn_CostPerformence;
		/** Variance between the estimated cost and the forecasted cost based on the estimate at completion (EAC). System Field - For PSA Use Only. */
		readonly msdyn_CostVariance: number;
		/** Shows the value of the cost variance in the base currency. System Field - For PSA Use Only. */
		readonly msdyn_costvariance_Base: number;
		/** Enter the customer who the project is associated with. */
		msdyn_customer: string;
		/** Enter a description of the project. */
		msdyn_description: string;
		/** This is an internal field, mainly used during import so that we don't create a team member record for the project manager. System Field - For PSA Use Only. */
		msdyn_disablecreateofteammemberformanager: boolean;
		/** Shows the total of actual hours and the remaining hours. */
		msdyn_EffortestimateatcompleteEAC: number;
		/** Exchange rate for the currency associated with the project with respect to the base currency. */
		msdyn_exchangerate: number;
		/** Specifies if the project is linked to a project in MS Project. System Field - For PSA Use Only. */
		msdyn_IsLinkedToMSProjectClient: boolean;
		/** Shows if the project is a project template. System Field - For PSA Use Only. */
		msdyn_istemplate: boolean;
		/** The URL for the linked document. System Field - For PSA Use Only. */
		msdyn_linkeddocumenturl: string;
		/** Describes the project status. */
		msdyn_overallprojectstatus: OptionSet.msdyn_project.msdyn_overallprojectstatus;
		/** Shows the aggregate of the planned expense cost of all the associated tasks. */
		msdyn_plannedexpensecost: number;
		/** Value of the Estimated Expense Cost in base currency. System Field - For PSA Use Only. */
		readonly msdyn_plannedexpensecost_Base: number;
		/** Shows the aggregate of estimated expense sales on the project - For PSA use only */
		msdyn_PlannedExpenseSales: number;
		/** Shows the value of the estimated expense sales in the base currency. System Field - For PSA Use Only. */
		readonly msdyn_plannedexpensesales_Base: number;
		/** Shows the total estimate hours of the project. */
		msdyn_plannedhours: number;
		/** Shows the aggregate of the planned labor cost of all the associated tasks. */
		msdyn_plannedlaborcost: number;
		/** Value of the Estimated Labor Cost in base currency. System Field - For PSA Use Only. */
		readonly msdyn_plannedlaborcost_Base: number;
		/** Shows the aggregate of estimated labor sales on the project - For PSA use only */
		msdyn_PlannedSales: number;
		/** Shows the value of the estimated labor sales in the base currency. System Field - For PSA Use Only. */
		readonly msdyn_plannedsales_Base: number;
		/** Shows the actual hours divided by effort at estimate. */
		msdyn_Progress: number;
		/** Shows the entity instances. */
		msdyn_projectId: string;
		/** Shows the project manager assigned to the project. */
		msdyn_projectmanager: string;
		/** Indicates if the project resource requirements are visible to the resources assigned to the project. */
		msdyn_projectresourcerequirementsvisibletore: boolean;
		/** Select the Team associated with Project. */
		msdyn_projectteamid: string;
		/** Select the project template behind the project. */
		msdyn_ProjectTemplate: string;
		/** Shows the difference between the estimated labor cost and the actual labor cost. */
		msdyn_RemainingCost: number;
		/** Shows the value of the remaining labor cost in the  base currency. */
		readonly msdyn_remainingcost_Base: number;
		/** Shows the difference between the estimate at completion (EAC) and the actual hours. */
		msdyn_RemainingHours: number;
		/** Shows the difference between the estimated labor sales and the actual labor sales. */
		msdyn_RemainingSales: number;
		/** Shows the value of the remaining labor sales in the base currency. */
		readonly msdyn_remainingsales_Base: number;
		/** Shows the actual sales divided by the estimated sales. */
		readonly msdyn_SalesConsumption: number;
		/** Shows the total of actual and remaining sales. */
		readonly msdyn_SalesEstimateAtCompleteEAC: number;
		/** Value of the Sales Estimate At Complete (EAC) in base currency. */
		readonly msdyn_salesestimateatcompleteeac_Base: number;
		/** Shows the contract for this project. */
		msdyn_salesorderid: string;
		/** Shows the difference between the planned sales and the sales estimate at completion (EAC). */
		readonly msdyn_SalesVariance: number;
		/** Shows the value of the sales variance in the base currency. */
		readonly msdyn_salesvariance_Base: number;
		/** Shows the scheduled duration of the project, specified in minutes. */
		msdyn_scheduleddurationminutes: number;
		/** Enter the scheduled end time of the project. */
		msdyn_scheduledend_UtcDateOnly: Date;
		/** Enter the scheduled start time of the project. */
		msdyn_scheduledstart_UtcDateOnly: Date;
		/** Describes the schedule performance of the project. */
		msdyn_scheduleperformance: OptionSet.msdyn_project.msdyn_scheduleperformance;
		/** Shows the difference between the planned effort and the estimate at completion (EAC). */
		msdyn_ScheduleVariance: number;
		/** Shows the stage of the project (Deprecated in v3.0). */
		msdyn_StageName: string;
		/** Shows the most recent update on a status field(comments or overall project status). */
		msdyn_statusupdatedon_UtcDateAndTime: Date;
		/** Type the name of the custom entity. */
		msdyn_subject: string;
		/** Shows the total number of team members assigned to this project */
		readonly msdyn_teamsize: number;
		/** Last Updated time of rollup field Team Size. */
		readonly msdyn_teamsize_Date_UtcDateAndTime: Date;
		/** State of rollup field Team Size. */
		readonly msdyn_teamsize_State: number;
		/** Shows the aggregated cost from actuals on the project. */
		msdyn_TotalActualCost: number;
		/** Shows the value of the total actual cost in the base currency. */
		readonly msdyn_totalactualcost_Base: number;
		/** Shows aggregated sales values from all project actuals - For PSA use only */
		msdyn_TotalActualSales: number;
		/** Shows the value of the actual total sales in the base currency. System Field - For PSA Use Only. */
		readonly msdyn_totalactualsales_Base: number;
		/** Shows the aggregate of the total planned cost of all the associated tasks. */
		msdyn_TotalPlannedCost: number;
		/** Shows the value of the total planned cost in the base currency. */
		readonly msdyn_totalplannedcost_Base: number;
		/** Shows aggregate of estimated sales values on the project - For PSA use only */
		msdyn_TotalPlannedSales: number;
		/** Shows the value of the estimated total sales in the base currency. System Field - For PSA Use Only. */
		readonly msdyn_totalplannedsales_Base: number;
		/** Shows the work breakdown structure (WBS) duration in days. */
		msdyn_wbsduration: number;
		/** Select the work hour template used to create the project calendar. */
		msdyn_workhourtemplate: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Contains the id of the process associated with the entity. */
		processid: string;
		/** Contains the id of the stage where the entity is located. */
		stageid: string;
		/** Status of the Project */
		statecode: OptionSet.msdyn_project.statecode;
		/** Reason for the status of the Project */
		statuscode: OptionSet.msdyn_project.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
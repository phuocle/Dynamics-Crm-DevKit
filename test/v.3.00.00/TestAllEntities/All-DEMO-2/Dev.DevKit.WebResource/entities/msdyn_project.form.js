'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_project_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Assignments: {},
			Estimates: {},
			ExpenseEstimates: {},
			msdyn_actualend: {},
			msdyn_actualexpensecost: {},
			msdyn_actualhours: {},
			msdyn_actuallaborcost: {},
			msdyn_actualstart: {},
			msdyn_comments: {},
			msdyn_ContractOrganizationalUnitId: {},
			msdyn_CostPerformence: {},
			msdyn_customer: {},
			msdyn_description: {},
			msdyn_istemplate: {},
			msdyn_overallprojectstatus: {},
			msdyn_plannedexpensecost: {},
			msdyn_plannedhours: {},
			msdyn_plannedlaborcost: {},
			msdyn_projectmanager: {},
			msdyn_ProjectTemplate: {},
			msdyn_ProjectTemplate1: {},
			msdyn_scheduledend: {},
			msdyn_scheduledstart: {},
			msdyn_scheduleperformance: {},
			msdyn_statusupdatedon: {},
			msdyn_subject: {},
			msdyn_TotalActualCost: {},
			msdyn_TotalPlannedCost: {},
			msdyn_workhourtemplate: {},
			OwnerId: {},
			ProjectContract: {},
			ProjectQuote: {},
			Reconciliation: {},
			Schedule: {},
			SchedulePerformanceCost: {},
			SchedulePerformanceEffort: {},
			SubGrid_TeamMember: {},
			Tracking: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Assignments_Tab: {
				Section: {
					Assignments_Section: {}
				}
			},
			Estimates_Tab: {
				Section: {
					Estimates_Section: {}
				}
			},
			Expense_Estimates_Tab: {
				Section: {
					Expense_Estimates_Section: {}
				}
			},
			Reconciliation_Tab: {
				Section: {
					Reconciliation_Section: {}
				}
			},
			Sales: {
				Section: {
					Sales: {}
				}
			},
			Schedule_Tab: {
				Section: {
					Schedule_Section: {}
				}
			},
			Status: {
				Section: {
					Status_section_1: {},
					Status_section_2: {}
				}
			},
			Summary: {
				Section: {
					_31843965_2614_4DEC_B525_872D76E16B92: {},
					_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_4: {},
					_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_5: {}
				}
			},
			Team: {
				Section: {
					_AC4158D2_008D_4B6D_8E11_58C9AB47B14B_SECTION_3: {}
				}
			},
			Tracking_Tab: {
				Section: {
					Tracking_Section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_CostConsumption: {},
			msdyn_plannedlaborcost: {},
			msdyn_Progress: {},
			msdyn_scheduledend: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Project_Service_Project_Stages = {
			msdyn_actualend: {},
			msdyn_actualend_1: {},
			msdyn_actualstart: {},
			msdyn_description: {},
			msdyn_salesorderid: {},
			msdyn_scheduledend: {},
			msdyn_scheduledstart: {},
			msdyn_subject: {}
		}
		devKit.LoadFields(formContext, _Project_Service_Project_Stages, "header_process_");
		process.Project_Service_Project_Stages = _Project_Service_Project_Stages;
		form.Process = process;
		var grid = {
			Assignments: {},
			Estimates: {},
			ExpenseEstimates: {},
			ProjectContract: {},
			ProjectQuote: {},
			Reconciliation: {},
			Schedule: {},
			SchedulePerformanceCost: {},
			SchedulePerformanceEffort: {},
			SubGrid_TeamMember: {},
			Tracking: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_project_bookableresourcebooking_projectid: {},
			nav_msdyn_msdyn_project_bookableresourcebookingheader_projectid: {},
			nav_msdyn_msdyn_project_msdyn_actual_Project: {},
			nav_msdyn_msdyn_project_msdyn_contractlinescheduleofvalue_project: {},
			nav_msdyn_msdyn_project_msdyn_estimate_Project: {},
			nav_msdyn_msdyn_project_msdyn_estimateline_Project: {},
			nav_msdyn_msdyn_project_msdyn_expense_Project: {},
			nav_msdyn_msdyn_project_msdyn_journal_DefaultProject: {},
			nav_msdyn_msdyn_project_msdyn_journalline_Project: {},
			nav_msdyn_msdyn_project_msdyn_project_ProjectTemplate: {},
			nav_msdyn_msdyn_project_msdyn_projectapproval_Project: {},
			nav_msdyn_msdyn_project_msdyn_projectpricelist_Project: {},
			nav_msdyn_msdyn_project_msdyn_projecttask_project: {},
			nav_msdyn_msdyn_project_msdyn_projectteam_project: {},
			nav_msdyn_msdyn_project_msdyn_projecttransactioncategory_Project: {},
			nav_msdyn_msdyn_project_msdyn_resourceassignment_projectid: {},
			nav_msdyn_msdyn_project_msdyn_timeentry_project: {},
			nav_msdyn_msdyn_project_opportunityproduct_Project: {},
			nav_msdyn_msdyn_project_quotedetail_Project: {},
			nav_msdyn_project_resourcerequirement: {},
			navAsyncOperations: {},
			navAudit: {},
			navConnections: {},
			navDocument: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCreate_Project = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_ContractOrganizationalUnitId: {},
			msdyn_description: {},
			msdyn_istemplate: {},
			msdyn_plannedexpensecost: {},
			msdyn_plannedhours: {},
			msdyn_plannedlaborcost: {},
			msdyn_projectmanager: {},
			msdyn_ProjectTemplate: {},
			msdyn_salesorderid: {},
			msdyn_scheduledend: {},
			msdyn_scheduledstart: {},
			msdyn_subject: {},
			msdyn_TotalPlannedCost: {},
			msdyn_workhourtemplate: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_project = {
		msdyn_BulkGenerationStatus : {
			Failed: 192350001,
			Processing: 192350000
		},
		msdyn_CostPerformence : {
			On_Budget: 192350000,
			Over_Budget: 192350001,
			Under_Budget: 192350002
		},
		msdyn_overallprojectstatus : {
			Green: 1,
			Red: 3,
			Yellow: 2
		},
		msdyn_scheduleperformance : {
			Ahead: 192350001,
			Behind: 192350002,
			On_Time: 192350000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Closed_Sets_project_to_read_only_and_cancels_future_bookings: 192350000,
			Inactive_Sets_project_to_read_only: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));
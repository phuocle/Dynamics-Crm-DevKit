'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_projectteam_Information = function(executionContext, defaultWebResourceName) {
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
			IFRAME_ProposalScheduleBoard: {},
			msdyn_BillingType: {},
			msdyn_bookableresourceid: {},
			msdyn_From: {},
			msdyn_name: {},
			msdyn_organizationalunit: {},
			msdyn_project: {},
			msdyn_ProjectApprover: {},
			msdyn_resourcecategory: {},
			msdyn_resourcerequirementid: {},
			msdyn_resourcerequirementid1: {},
			msdyn_resourcerequirementid2: {},
			msdyn_resourcerequirementid3: {},
			msdyn_RoleDescription: {},
			msdyn_To: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			General: {
				Section: {
					_DC58EBA6_D467_4B9A_AAD8_0C471EBDE29F: {},
					General_section_2: {}
				}
			},
			Proposed_Resources: {
				Section: {
					tab_4_section_2: {}
				}
			},
			Resource_Requirement: {
				Section: {
					RequirementSection: {},
					tab_2_section_2: {},
					tab_2_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {
			ProjectTeam_Requirement_Competencies: {

			},
			ProjectTeam_Requirement_Others: {

			},
			Requirement_General: {
				msdyn_allocationmethod: {},
				msdyn_city: {},
				msdyn_costprice: {},
				msdyn_country: {},
				msdyn_duration: {},
				msdyn_fromdate: {},
				msdyn_percentage: {},
				msdyn_requeststatus: {},
				msdyn_stateorprovince: {},
				msdyn_todate: {},
				msdyn_type: {},
				msdyn_workhourtemplate: {},
				TransactionCurrencyId: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid: {},
			nav_msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_projectteam_New_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_allocationmethod: {},
			msdyn_bookableresourceid: {},
			msdyn_From: {},
			msdyn_hours: {},
			msdyn_name: {},
			msdyn_organizationalunit: {},
			msdyn_percentage: {},
			msdyn_project: {},
			msdyn_ProjectApprover: {},
			msdyn_resourcecategory: {},
			msdyn_resourcerequirementid: {},
			msdyn_To: {}
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
	OptionSet.msdyn_projectteam = {
		msdyn_allocationmethod : {
			By_Hours_Distribute_evenly: 192350003,
			By_Hours_Front_load: 192350005,
			Full_Capacity: 192350001,
			None: 192350000,
			Percentage_Capacity: 192350004
		},
		msdyn_BillingType : {
			Chargeable: 192350001,
			Complimentary: 192350002,
			Non_Chargeable: 192350000,
			Not_Available: 192350003
		},
		msdyn_MembershipStatus : {
			Assigned: 2,
			Declined: 3,
			Requested: 1
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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
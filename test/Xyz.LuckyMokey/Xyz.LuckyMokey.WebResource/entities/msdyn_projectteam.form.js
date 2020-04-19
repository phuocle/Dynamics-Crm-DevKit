'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_projectteam_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_resourcerequirementid_1: {},
			msdyn_resourcerequirementid_2: {},
			msdyn_resourcerequirementid_3: {},
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
			Resource_Requirement: {
				Section: {
					RequirementSection: {},
					tab_2_section_2: {},
					tab_2_section_3: {}
				}
			},
			Proposed_Resources: {
				Section: {
					tab_4_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {
			Requirement_General: {},
			ProjectTeam_Requirement_Competencies: {},
			ProjectTeam_Requirement_Others: {}
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
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_projectteam = {
		msdyn_allocationmethod : {
			None: 192350000,
			Full_Capacity: 192350001,
			Percentage_Capacity: 192350004,
			By_Hours_Distribute_evenly: 192350003,
			By_Hours_Front_load: 192350005
		},
		msdyn_BillingType : {
			Non_Chargeable: 192350000,
			Chargeable: 192350001,
			Complimentary: 192350002,
			Not_Available: 192350003
		},
		msdyn_MembershipStatus : {
			Requested: 1,
			Assigned: 2,
			Declined: 3
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
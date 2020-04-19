'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_resourcerequest_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			msdyn_positiondescription: {},
			msdyn_requestedby: {},
			msdyn_resourcerequirementid: {},
			msdyn_resourcerequirementid_1: {},
			msdyn_resourcerequirementid_2: {},
			notescontrol: {},
			OwnerId: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_F42C3DC0_B481_45B5_A0B1_754BC4FA39B6: {
				Section: {
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {},
					tab_2_section_2: {},
					tab_2_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {
			Requirement_General: {},
			Requirement_Competencies: {},
			Requirement_Others: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.Formmsdyn_resourcerequest_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_requestedby: {},
			msdyn_resourcerequirementid: {},
			statuscode: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_resourcerequest = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Submitted: 192350000,
			In_Progress: 192350009,
			Needs_Review: 192350003,
			Fulfilled: 192350008,
			Inactive: 192350011
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
'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_timeentry_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_date: {},
			msdyn_description: {},
			msdyn_duration: {},
			msdyn_entryStatus: {},
			msdyn_externalDescription: {},
			msdyn_project: {},
			msdyn_projectTask: {},
			msdyn_resourceCategory: {},
			msdyn_type: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: {
				Section: {
					_AE8B7CDD_484B_49A8_A00D_C201927D5729: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormCreate_Time_Entry = function(executionContext, defaultWebResourceName) {
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
			msdyn_date: {},
			msdyn_description: {},
			msdyn_duration: {},
			msdyn_externalDescription: {},
			msdyn_project: {},
			msdyn_projectTask: {},
			msdyn_resourceCategory: {},
			msdyn_type: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			Time_Entry_Quick_Create_Form: {
				Section: {
					tab_1_column_1_section_1: {}
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
	OptionSet.msdyn_timeentry = {
		msdyn_entryStatus : {
			Draft: 192350000,
			Returned: 192350001,
			Approved: 192350002,
			Submitted: 192350003,
			Recall_Requested: 192350004
		},
		msdyn_relatedItemType : {
			None: 192350000,
			Resource_Booking: 192350001,
			Resource_Assignment: 192350002,
			Exchange_Appointments: 192350100
		},
		msdyn_targetEntryStatus : {
			Draft: 192350000,
			Returned: 192350001,
			Approved: 192350002,
			Submitted: 192350003,
			Recall_Requested: 192350004
		},
		msdyn_type : {
			Work: 192350000,
			Absence: 192350001,
			Vacation: 192350002
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
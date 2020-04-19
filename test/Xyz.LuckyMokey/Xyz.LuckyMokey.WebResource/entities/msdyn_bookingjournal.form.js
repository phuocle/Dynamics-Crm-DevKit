'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormBooking_Journal_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_AdditionalCost: {},
			msdyn_Billable: {},
			msdyn_Booking: {},
			msdyn_Duration: {},
			msdyn_EndTime: {},
			msdyn_JournalType: {},
			msdyn_name: {},
			msdyn_PayType: {},
			msdyn_StartTime: {},
			msdyn_TotalCost: {},
			msdyn_UnitCost: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					fstab_general_section_general: {},
					fstab_general_section_2: {},
					fstab_general_section_3: {}
				}
			},
			f1tab_journalDetails: {
				Section: {
					f1tab_journalDetails_section_journal_details: {},
					f1tab_journalDetails_section_journal_cost: {},
					f1tab_journalDetails_section_3: {},
					f1tab_journalDetails_section_4: {}
				}
			},
			fstab_other: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {},
					tab_4_section_3: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section: {},
					fstab_sub_grids_section_2: {},
					fstab_sub_grids_section_3: {}
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
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.Formmsdyn_bookingjournal_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AdditionalCost: {},
			msdyn_Billable: {},
			msdyn_Booking: {},
			msdyn_Duration: {},
			msdyn_EndTime: {},
			msdyn_JournalType: {},
			msdyn_name: {},
			msdyn_PayType: {},
			msdyn_StartTime: {},
			msdyn_TotalCost: {},
			msdyn_UnitCost: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			f1tab_journalDetails: {
				Section: {
					tab_3_section_1: {},
					f1tab_journalDetails_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navProcessSessions: {}
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
	OptionSet.msdyn_bookingjournal = {
		msdyn_JournalType : {
			Working_Hours: 690970000,
			Break: 690970001,
			Travel: 690970002,
			Overtime: 690970003,
			Business_Closure: 690970004
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
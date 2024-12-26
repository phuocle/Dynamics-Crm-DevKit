﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBooking_Journal_Mobile = function(executionContext, defaultWebResourceName) {
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
					f1tab_journalDetails_section_3: {},
					f1tab_journalDetails_section_4: {},
					f1tab_journalDetails_section_journal_cost: {},
					f1tab_journalDetails_section_journal_details: {}
				}
			},
			fstab_general: {
				Section: {
					fstab_general_section_2: {},
					fstab_general_section_3: {},
					fstab_general_section_general: {}
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
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_bookingjournal_Information = function(executionContext, defaultWebResourceName) {
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
					f1tab_journalDetails_section_2: {},
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_bookingjournal = {
		msdyn_JournalType : {
			Break: 690970001,
			Business_Closure: 690970004,
			Overtime: 690970003,
			Travel: 690970002,
			Working_Hours: 690970000
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
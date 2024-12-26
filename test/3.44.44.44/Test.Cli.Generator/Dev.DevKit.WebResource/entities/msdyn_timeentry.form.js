'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_timeentry_Field_Service_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_bookableresource: {},
			msdyn_BookableResourceBooking: {},
			msdyn_BookingStatus: {},
			msdyn_description: {},
			msdyn_duration: {},
			msdyn_end: {},
			msdyn_entryStatus: {},
			msdyn_externalDescription: {},
			msdyn_start: {},
			msdyn_timeentrysettingId: {},
			msdyn_timeoffrequest: {},
			msdyn_type: {},
			msdyn_WorkOrder: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			General: {
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
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTESA_Time_Entry_Main_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_description: {},
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
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormField_Service_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_bookableresource: {},
			msdyn_BookableResourceBooking: {},
			msdyn_BookingStatus: {},
			msdyn_description: {},
			msdyn_duration: {},
			msdyn_end: {},
			msdyn_entryStatus: {},
			msdyn_externalDescription: {},
			msdyn_start: {},
			msdyn_timeentrysettingId: {},
			msdyn_timeoffrequest: {},
			msdyn_type: {},
			msdyn_WorkOrder: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Time_Entry_Quick_Create_Form: {
				Section: {
					tab_1_column_1_section_1: {}
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
	DevKit.FormTESA_Time_Entry_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
	OptionSet.msdyn_timeentry = {
		msdyn_entryStatus : {
			Approved: 192350002,
			Cancelled: 192354320,
			Draft: 192350000,
			Returned: 192350001,
			Submitted: 192350003
		},
		msdyn_type : {
			Absence: 192350001,
			On_Break: 192355000,
			Overtime: 192354320,
			Travel: 192355001,
			Vacation: 192350002,
			Work: 192350000
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
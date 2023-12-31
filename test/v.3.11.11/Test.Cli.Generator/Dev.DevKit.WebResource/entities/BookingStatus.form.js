'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormBookingStatus_Information = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			msdyn_committype: {},
			msdyn_FieldServiceStatus: {},
			msdyn_ImageUrl: {},
			msdyn_StatusColor: {},
			Name: {},
			notescontrol: {},
			Status: {},
			WebResource_StatusColor: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			FieldService: {
				Section: {
					FieldService_section_1: {},
					FieldService_section_2: {}
				}
			},
			ProjectService: {
				Section: {
					ProjectService_section_1: {}
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var navigation = {
			nav_msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus: {},
			nav_msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus: {}
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
	OptionSet.BookingStatus = {
		msdyn_committype : {
			Canceled: 192350004,
			Hard_Book: 192350001,
			None: 192350000,
			Proposed: 192350003,
			Soft_Book: 192350002
		},
		msdyn_FieldServiceStatus : {
			Canceled: 690970005,
			Completed: 690970004,
			In_Progress: 690970003,
			On_Break: 690970002,
			Scheduled: 690970000,
			Traveling: 690970001
		},
		msdyn_ServiceAppointmentStatus : {
			Arrived: 7,
			Canceled: 9,
			Completed: 8,
			In_Progress: 6,
			No_Show: 10,
			Pending: 3,
			Reserved: 4
		},
		OwnerIdType : {
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		Status : {
			Canceled: 3,
			Committed: 2,
			Proposed: 1
		},
		StatusCode : {
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
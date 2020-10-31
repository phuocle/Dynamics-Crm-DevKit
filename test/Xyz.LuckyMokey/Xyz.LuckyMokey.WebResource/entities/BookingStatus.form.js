'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormBookingStatus_Information = function(executionContext, defaultWebResourceName) {
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
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			},
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
			nav_msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus: {},
			nav_msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus: {}
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
	OptionSet.BookingStatus = {
		msdyn_committype : {
			Canceled: 192350004,
			None: 192350000,
			Hard_Book: 192350001,
			Soft_Book: 192350002,
			Proposed: 192350003
		},
		msdyn_FieldServiceStatus : {
			Scheduled: 690970000,
			Traveling: 690970001,
			In_Progress: 690970003,
			On_Break: 690970002,
			Completed: 690970004,
			Canceled: 690970005
		},
		msdyn_ServiceAppointmentStatus : {
			Pending: 3,
			Reserved: 4,
			In_Progress: 6,
			Arrived: 7,
			Completed: 8,
			Canceled: 9,
			No_Show: 10
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		Status : {
			Proposed: 1,
			Committed: 2,
			Canceled: 3
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
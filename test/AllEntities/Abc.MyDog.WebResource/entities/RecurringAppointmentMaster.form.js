'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormRecurring_Appointment = function(executionContext, defaultWebResourceName) {
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
			Location: {},
			OptionalAttendees: {},
			RegardingObjectId: {},
			RequiredAttendees: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					general_information: {},
					appointment_description: {},
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurringAppointmentMaster = {
		ExpansionStateCode : {
			Unexpanded: 0,
			Partial: 1,
			Full: 2
		},
		Instance : {
			First: 1,
			Second: 2,
			Third: 3,
			Fourth: 4,
			Last: 5
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		MonthOfYear : {
			Invalid_Month_Of_Year: 0,
			January: 1,
			February: 2,
			March: 3,
			April: 4,
			May: 5,
			June: 6,
			July: 7,
			August: 8,
			September: 9,
			October: 10,
			November: 11,
			December: 12
		},
		PatternEndType : {
			No_End_Date: 1,
			Occurrences: 2,
			Pattern_End_Date: 3
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		RecurrencePatternType : {
			Daily: 0,
			Weekly: 1,
			Monthly: 2,
			Yearly: 3
		},
		StateCode : {
			Open: 0,
			Completed: 1,
			Canceled: 2,
			Scheduled: 3
		},
		StatusCode : {
			Free: 1,
			Tentative: 2,
			Completed: 3,
			Canceled: 4,
			Busy: 5,
			Out_of_Office: 6
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
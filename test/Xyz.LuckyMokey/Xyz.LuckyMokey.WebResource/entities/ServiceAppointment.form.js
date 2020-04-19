'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormServiceAppointment_Information = function(executionContext, defaultWebResourceName) {
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
			bookableresourcebookings: {},
			Category: {},
			Customers: {},
			IsAllDayEvent: {},
			Location: {},
			msdyn_OrganizationalUnitId: {},
			notescontrol: {},
			OwnerId: {},
			PriorityCode: {},
			RegardingObjectId: {},
			Resources: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			ServiceId: {},
			SiteId: {},
			StatusCode: {},
			Subcategory: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			service: {
				Section: {
					general_information: {},
					scheduling_information: {},
					notes: {}
				}
			},
			details: {
				Section: {
					appointment_details: {}
				}
			},
			bookableResourceBooking: {
				Section: {
					Bookable_Resource_Bookings_Section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
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
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ServiceAppointment = {
		Community : {
			Facebook: 1,
			Twitter: 2,
			Other: 0
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Closed: 1,
			Canceled: 2,
			Scheduled: 3
		},
		StatusCode : {
			Requested: 1,
			Tentative: 2,
			Pending: 3,
			Reserved: 4,
			In_Progress: 6,
			Arrived: 7,
			Completed: 8,
			Canceled: 9,
			No_Show: 10
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
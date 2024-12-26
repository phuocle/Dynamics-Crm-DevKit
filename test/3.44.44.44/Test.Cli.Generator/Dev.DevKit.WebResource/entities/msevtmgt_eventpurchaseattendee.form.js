'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_eventpurchaseattendee_Information = function(executionContext, defaultWebResourceName) {
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
			EventPurchasePasses: {},
			msevtmgt_AttendeeContactId: {},
			msevtmgt_name: {},
			msevtmgt_PurchaseId: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_ED6DF3CC_7ACE_4ABA_9410_126159C255A9: {
				Section: {
					_ED6DF3CC_7ACE_4ABA_9410_126159C255A9_SECTION_3: {},
					_ED6DF3CC_7ACE_4ABA_9410_126159C255A9_SECTION_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {
			AttendeeContact: {
				EMailAddress1: {},
				FirstName: {},
				LastName: {},
				MobilePhone: {},
				ParentCustomerId: {}
			},
			EventPurchase: {
				msevtmgt_name: {},
				OwnerId: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			EventPurchasePasses: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_eventpurchaseattendee_adx_inviteredemptions: {},
			msevtmgt_eventpurchaseattendee_adx_portalcomments: {},
			msevtmgt_eventpurchaseattendee_Appointments: {},
			msevtmgt_eventpurchaseattendee_Emails: {},
			msevtmgt_eventpurchaseattendee_msdyn_bookingalerts: {},
			msevtmgt_eventpurchaseattendee_msdyn_copilottranscripts: {},
			msevtmgt_eventpurchaseattendee_msdyn_ocliveworkitems: {},
			msevtmgt_eventpurchaseattendee_msdyn_ocoutboundmessages: {},
			msevtmgt_eventpurchaseattendee_msdyn_ocsessions: {},
			msevtmgt_eventpurchaseattendee_msdyn_ocvoicemails: {},
			msevtmgt_eventpurchaseattendee_msfp_alerts: {},
			msevtmgt_eventpurchaseattendee_msfp_surveyinvites: {},
			msevtmgt_eventpurchaseattendee_msfp_surveyresponses: {},
			msevtmgt_eventpurchaseattendee_PhoneCalls: {},
			msevtmgt_eventpurchaseattendee_ServiceAppointments: {},
			msevtmgt_eventpurchaseattendee_Tasks: {},
			msevtmgt_msevtmgt_eventpurchaseattendee_msevtmgt_e: {},
			msevtmgt_msevtmgt_eventpurchaseattendee_msevtmgt_registrationresponse_eventpurchaseattendee: {}
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
	OptionSet.msevtmgt_eventpurchaseattendee = {
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
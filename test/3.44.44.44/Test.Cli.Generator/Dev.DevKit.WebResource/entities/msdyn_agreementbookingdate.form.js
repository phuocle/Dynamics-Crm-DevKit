'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_agreementbookingdate_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Agreement: {},
			msdyn_BookingDate: {},
			msdyn_BookingSetup: {},
			msdyn_EarliestDate: {},
			msdyn_LatestDate: {},
			msdyn_name: {},
			msdyn_Resource: {},
			msdyn_Status: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_agreementbookingdate_adx_inviteredemptions: {},
			msdyn_agreementbookingdate_adx_portalcomments: {},
			msdyn_agreementbookingdate_Appointments: {},
			msdyn_agreementbookingdate_Emails: {},
			msdyn_agreementbookingdate_msdyn_bookingalerts: {},
			msdyn_agreementbookingdate_msdyn_copilottranscripts: {},
			msdyn_agreementbookingdate_msdyn_ocliveworkitems: {},
			msdyn_agreementbookingdate_msdyn_ocoutboundmessages: {},
			msdyn_agreementbookingdate_msdyn_ocsessions: {},
			msdyn_agreementbookingdate_msdyn_ocvoicemails: {},
			msdyn_agreementbookingdate_msfp_alerts: {},
			msdyn_agreementbookingdate_msfp_surveyinvites: {},
			msdyn_agreementbookingdate_msfp_surveyresponses: {},
			msdyn_agreementbookingdate_PhoneCalls: {},
			msdyn_agreementbookingdate_QueueItems: {},
			msdyn_agreementbookingdate_ServiceAppointments: {},
			msdyn_agreementbookingdate_Tasks: {},
			msdyn_msdyn_agreementbookingdate_bookableresourcebooking_AgreementBookingDate: {},
			msdyn_msdyn_agreementbookingdate_msdyn_workorderdetailsgenerationqueue_AgreementBookingDate: {}
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
	OptionSet.msdyn_agreementbookingdate = {
		msdyn_Status : {
			Active: 690970000,
			Canceled: 690970002,
			Processed: 690970001
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
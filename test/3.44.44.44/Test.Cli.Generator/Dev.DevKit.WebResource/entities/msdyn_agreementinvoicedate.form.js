'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_agreementinvoicedate_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_InvoiceDate: {},
			msdyn_InvoiceSetup: {},
			msdyn_InvoiceStatus: {},
			msdyn_name: {},
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
			msdyn_agreementinvoicedate_adx_inviteredemptions: {},
			msdyn_agreementinvoicedate_adx_portalcomments: {},
			msdyn_agreementinvoicedate_Appointments: {},
			msdyn_agreementinvoicedate_Emails: {},
			msdyn_agreementinvoicedate_msdyn_bookingalerts: {},
			msdyn_agreementinvoicedate_msdyn_copilottranscripts: {},
			msdyn_agreementinvoicedate_msdyn_ocliveworkitems: {},
			msdyn_agreementinvoicedate_msdyn_ocoutboundmessages: {},
			msdyn_agreementinvoicedate_msdyn_ocsessions: {},
			msdyn_agreementinvoicedate_msdyn_ocvoicemails: {},
			msdyn_agreementinvoicedate_msfp_alerts: {},
			msdyn_agreementinvoicedate_msfp_surveyinvites: {},
			msdyn_agreementinvoicedate_msfp_surveyresponses: {},
			msdyn_agreementinvoicedate_PhoneCalls: {},
			msdyn_agreementinvoicedate_QueueItems: {},
			msdyn_agreementinvoicedate_ServiceAppointments: {},
			msdyn_agreementinvoicedate_Tasks: {}
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
	OptionSet.msdyn_agreementinvoicedate = {
		msdyn_InvoiceStatus : {
			Canceled: 690970002,
			Processed: 690970001,
			Scheduled: 690970000
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
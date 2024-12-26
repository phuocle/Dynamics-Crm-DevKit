'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_PostAlbum_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_postalbum_adx_inviteredemptions: {},
			msdyn_postalbum_adx_portalcomments: {},
			msdyn_postalbum_Appointments: {},
			msdyn_postalbum_Emails: {},
			msdyn_postalbum_msdyn_bookingalerts: {},
			msdyn_postalbum_msdyn_copilottranscripts: {},
			msdyn_postalbum_msdyn_ocliveworkitems: {},
			msdyn_postalbum_msdyn_ocoutboundmessages: {},
			msdyn_postalbum_msdyn_ocsessions: {},
			msdyn_postalbum_msdyn_ocvoicemails: {},
			msdyn_postalbum_msfp_alerts: {},
			msdyn_postalbum_msfp_surveyinvites: {},
			msdyn_postalbum_msfp_surveyresponses: {},
			msdyn_postalbum_PhoneCalls: {},
			msdyn_postalbum_ServiceAppointments: {},
			msdyn_postalbum_Tasks: {}
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
	OptionSet.msdyn_PostAlbum = {
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
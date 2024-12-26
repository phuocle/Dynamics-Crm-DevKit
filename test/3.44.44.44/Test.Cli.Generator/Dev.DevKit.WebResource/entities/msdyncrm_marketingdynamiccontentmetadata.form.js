'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingdynamiccontentmetadata_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_value: {},
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
			msdyncrm_marketingdynamiccontentmetadata_adx_inviteredemptions: {},
			msdyncrm_marketingdynamiccontentmetadata_adx_portalcomments: {},
			msdyncrm_marketingdynamiccontentmetadata_Appointments: {},
			msdyncrm_marketingdynamiccontentmetadata_Emails: {},
			msdyncrm_marketingdynamiccontentmetadata_Feedback: {},
			msdyncrm_marketingdynamiccontentmetadata_msdyn_bookingalerts: {},
			msdyncrm_marketingdynamiccontentmetadata_msdyn_copilottranscripts: {},
			msdyncrm_marketingdynamiccontentmetadata_msdyn_ocliveworkitems: {},
			msdyncrm_marketingdynamiccontentmetadata_msdyn_ocoutboundmessages: {},
			msdyncrm_marketingdynamiccontentmetadata_msdyn_ocsessions: {},
			msdyncrm_marketingdynamiccontentmetadata_msdyn_ocvoicemails: {},
			msdyncrm_marketingdynamiccontentmetadata_msfp_alerts: {},
			msdyncrm_marketingdynamiccontentmetadata_msfp_surveyinvites: {},
			msdyncrm_marketingdynamiccontentmetadata_msfp_surveyresponses: {},
			msdyncrm_marketingdynamiccontentmetadata_PhoneCalls: {},
			msdyncrm_marketingdynamiccontentmetadata_ServiceAppointments: {},
			msdyncrm_marketingdynamiccontentmetadata_Tasks: {}
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
	OptionSet.msdyncrm_marketingdynamiccontentmetadata = {
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_workorderresourcerestriction_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Account: {},
			msdyn_Cascade: {},
			msdyn_ExpirationDate: {},
			msdyn_name: {},
			msdyn_Resource: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_00990EA9_CE48_4646_845F_F357D0AED008: {
				Section: {
					_C9D3260D_058C_4565_9C02_CD6B45E47CB2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_workorderresourcerestriction_adx_inviteredemptions: {},
			msdyn_workorderresourcerestriction_adx_portalcomments: {},
			msdyn_workorderresourcerestriction_Appointments: {},
			msdyn_workorderresourcerestriction_Emails: {},
			msdyn_workorderresourcerestriction_msdyn_bookingalerts: {},
			msdyn_workorderresourcerestriction_msdyn_copilottranscripts: {},
			msdyn_workorderresourcerestriction_msdyn_ocliveworkitems: {},
			msdyn_workorderresourcerestriction_msdyn_ocoutboundmessages: {},
			msdyn_workorderresourcerestriction_msdyn_ocsessions: {},
			msdyn_workorderresourcerestriction_msdyn_ocvoicemails: {},
			msdyn_workorderresourcerestriction_msfp_alerts: {},
			msdyn_workorderresourcerestriction_msfp_surveyinvites: {},
			msdyn_workorderresourcerestriction_msfp_surveyresponses: {},
			msdyn_workorderresourcerestriction_PhoneCalls: {},
			msdyn_workorderresourcerestriction_ServiceAppointments: {},
			msdyn_workorderresourcerestriction_Tasks: {}
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
	OptionSet.msdyn_workorderresourcerestriction = {
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_timegroupdetail_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_EndTime: {},
			msdyn_name: {},
			msdyn_StartTime: {},
			msdyn_TimeGroupId: {},
			notescontrol: {},
			OwnerId: {},
			WebResource_msdyn_endtime: {},
			WebResource_msdyn_starttime: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B9C0A537_7A90_4140_9D0A_0FC166DDE719: {
				Section: {
					_983FEC4F_2163_4EA9_B2D8_EF05698EF6D8: {}
				}
			},
			NotesTab: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_timegroupdetail_bookableresourcebooking_TimeGroupDetailSelected: {},
			msdyn_msdyn_timegroupdetail_msdyn_workorder_TimeGroupDetailSelected: {},
			msdyn_timegroupdetail_adx_inviteredemptions: {},
			msdyn_timegroupdetail_adx_portalcomments: {},
			msdyn_timegroupdetail_Appointments: {},
			msdyn_timegroupdetail_Emails: {},
			msdyn_timegroupdetail_msdyn_bookingalerts: {},
			msdyn_timegroupdetail_msdyn_copilottranscripts: {},
			msdyn_timegroupdetail_msdyn_ocliveworkitems: {},
			msdyn_timegroupdetail_msdyn_ocoutboundmessages: {},
			msdyn_timegroupdetail_msdyn_ocsessions: {},
			msdyn_timegroupdetail_msdyn_ocvoicemails: {},
			msdyn_timegroupdetail_msfp_alerts: {},
			msdyn_timegroupdetail_msfp_surveyinvites: {},
			msdyn_timegroupdetail_msfp_surveyresponses: {},
			msdyn_timegroupdetail_PhoneCalls: {},
			msdyn_timegroupdetail_QueueItems: {},
			msdyn_timegroupdetail_ServiceAppointments: {},
			msdyn_timegroupdetail_Tasks: {}
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
	OptionSet.msdyn_timegroupdetail = {
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
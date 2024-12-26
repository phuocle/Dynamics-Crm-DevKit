'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinformsubmission_Information = function(executionContext, defaultWebResourceName) {
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
			LinkedinFormAnswers: {},
			msdyncr2_customerjourney: {},
			msdyncrm_Lead: {},
			msdyncrm_LinkedInAccountID: {},
			msdyncrm_LinkedInCampaignID: {},
			msdyncrm_LinkedInCreativeID: {},
			msdyncrm_LinkedInFormID: {},
			msdyncrm_matchingstatus: {},
			msdyncrm_SubmissionDate: {},
			msdyncrm_Type: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_8AC6EFFF_3D25_4A9E_93EA_ABC07EF1EAC0: {
				Section: {
					_8AC6EFFF_3D25_4A9E_93EA_ABC07EF1EAC0_SECTION_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			LinkedinFormAnswers: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_linkedinformsubmission_adx_inviteredemptions: {},
			msdyncrm_linkedinformsubmission_adx_portalcomments: {},
			msdyncrm_linkedinformsubmission_answer: {},
			msdyncrm_linkedinformsubmission_Appointments: {},
			msdyncrm_linkedinformsubmission_Emails: {},
			msdyncrm_linkedinformsubmission_Feedback: {},
			msdyncrm_linkedinformsubmission_msdyn_bookingalerts: {},
			msdyncrm_linkedinformsubmission_msdyn_copilottranscripts: {},
			msdyncrm_linkedinformsubmission_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinformsubmission_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinformsubmission_msdyn_ocsessions: {},
			msdyncrm_linkedinformsubmission_msdyn_ocvoicemails: {},
			msdyncrm_linkedinformsubmission_msfp_alerts: {},
			msdyncrm_linkedinformsubmission_msfp_surveyinvites: {},
			msdyncrm_linkedinformsubmission_msfp_surveyresponses: {},
			msdyncrm_linkedinformsubmission_PhoneCalls: {},
			msdyncrm_linkedinformsubmission_ServiceAppointments: {},
			msdyncrm_linkedinformsubmission_Tasks: {}
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
	OptionSet.msdyncrm_linkedinformsubmission = {
		msdyncrm_matchingstatus : {
			Lead_creation_failed: 192350004,
			Lead_matched_but_not_updated: 192350006,
			Lead_update_failed: 192350005,
			Match_failed: 192350003,
			New_lead_created: 192350001,
			Pending_lead_matching: 192350000,
			Updated_existing_lead: 192350002
		},
		msdyncrm_processingstate : {
			Processing_Failed: 192350002,
			Processing_Succeeded: 192350001,
			Unprocessed: 192350000
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinform_Information = function(executionContext, defaultWebResourceName) {
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
			LinkedInFormQuestions: {},
			LinkedinFormSubmission: {},
			msdyncrm_Description: {},
			msdyncrm_Headline: {},
			msdyncrm_LandingpageURL: {},
			msdyncrm_LinkedInID: {},
			msdyncrm_LinkedInParentAccount: {},
			msdyncrm_LocaleCountry: {},
			msdyncrm_LocaleLanguage: {},
			msdyncrm_name: {},
			msdyncrm_PrivacyPolicyURL: {},
			msdyncrm_Thankyoumessage: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C4A74156_F3D2_49BC_B3E1_3353DEF95FD1: {
				Section: {
					_C4A74156_F3D2_49BC_B3E1_3353DEF95FD1_SECTION_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_totalsubmissions: {},
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			LinkedInFormQuestions: {},
			LinkedinFormSubmission: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_linkedinform_adx_inviteredemptions: {},
			msdyncrm_linkedinform_adx_portalcomments: {},
			msdyncrm_linkedinform_Appointments: {},
			msdyncrm_linkedinform_Emails: {},
			msdyncrm_linkedinform_Feedback: {},
			msdyncrm_linkedinform_msdyn_bookingalerts: {},
			msdyncrm_linkedinform_msdyn_copilottranscripts: {},
			msdyncrm_linkedinform_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinform_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinform_msdyn_ocsessions: {},
			msdyncrm_linkedinform_msdyn_ocvoicemails: {},
			msdyncrm_linkedinform_msfp_alerts: {},
			msdyncrm_linkedinform_msfp_surveyinvites: {},
			msdyncrm_linkedinform_msfp_surveyresponses: {},
			msdyncrm_linkedinform_PhoneCalls: {},
			msdyncrm_linkedinform_ServiceAppointments: {},
			msdyncrm_linkedinform_Tasks: {},
			msdyncrm_msdyncrm_linkedinform_lead_sourceform: {},
			msdyncrm_msdyncrm_linkedinform_msdyncrm_linkedinformquestion_LinkedinForm: {},
			msdyncrm_msdyncrm_linkedinform_msdyncrm_linkedinformsubmission_LinkedInFormID: {}
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
	OptionSet.msdyncrm_linkedinform = {
		msdyncrm_syncstatus : {
			Active: 192350001,
			Forbidden: 192350003,
			No_Form_Submissions: 192350002,
			Pending_Synchronization: 192350000
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
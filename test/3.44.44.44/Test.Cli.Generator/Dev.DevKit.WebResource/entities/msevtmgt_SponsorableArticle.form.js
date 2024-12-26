'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSponsorable_article = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_CostPerUnit: {},
			msevtmgt_Description: {},
			msevtmgt_EventSponsorship: {},
			msevtmgt_EventSponsorship1: {},
			msevtmgt_Name: {},
			msevtmgt_NumberOfUnits: {},
			msevtmgt_totalcost: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_E8CC58CC_FE8A_406F_985B_904AC5209D2D: {
				Section: {
					_17D3E62D_CA42_4161_BA41_8A7BD276B48F: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_CostPerUnit: {},
			msevtmgt_EventSponsorship: {},
			msevtmgt_NumberOfUnits: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			SponsorableArticleEvent: {
				msevtmgt_Event: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			msevtmgt_sponsorablearticle_adx_inviteredemptions: {},
			msevtmgt_sponsorablearticle_adx_portalcomments: {},
			msevtmgt_sponsorablearticle_Appointments: {},
			msevtmgt_sponsorablearticle_Emails: {},
			msevtmgt_sponsorablearticle_msdyn_bookingalerts: {},
			msevtmgt_sponsorablearticle_msdyn_copilottranscripts: {},
			msevtmgt_sponsorablearticle_msdyn_ocliveworkitems: {},
			msevtmgt_sponsorablearticle_msdyn_ocoutboundmessages: {},
			msevtmgt_sponsorablearticle_msdyn_ocsessions: {},
			msevtmgt_sponsorablearticle_msdyn_ocvoicemails: {},
			msevtmgt_sponsorablearticle_msfp_alerts: {},
			msevtmgt_sponsorablearticle_msfp_surveyinvites: {},
			msevtmgt_sponsorablearticle_msfp_surveyresponses: {},
			msevtmgt_sponsorablearticle_PhoneCalls: {},
			msevtmgt_sponsorablearticle_ServiceAppointments: {},
			msevtmgt_sponsorablearticle_Tasks: {}
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
	OptionSet.msevtmgt_SponsorableArticle = {
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
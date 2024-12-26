'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingpageconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
			adx_parentwebpageid: {},
			adx_websiteid: {},
			adx_websitelanguageid: {},
			msdyncrm_allowsubmissiononlyforms: {},
			msdyncrm_contactcampaignattribute: {},
			msdyncrm_contactemailattribute: {},
			msdyncrm_contactmarketingformattribute: {},
			msdyncrm_contactmarketingpageattribute: {},
			msdyncrm_contactmatchingstrategy: {},
			msdyncrm_default: {},
			msdyncrm_entityupdatebehavioronsubmit: {},
			msdyncrm_insertprivacybanner: {},
			msdyncrm_keepsuccessfulsubmissions: {},
			msdyncrm_leadcampaignattribute: {},
			msdyncrm_leadcontactattribute: {},
			msdyncrm_leademailattribute: {},
			msdyncrm_leadmarketingformattribute: {},
			msdyncrm_leadmarketingpageattribute: {},
			msdyncrm_leadmatchingstrategy: {},
			msdyncrm_name: {},
			msdyncrm_privacybannertext: {},
			msdyncrm_privacypolicylinktext: {},
			msdyncrm_privacypolicylinkurl: {},
			msdyncrm_websitefilter_placeholder: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_3B262475_4C2D_4125_854A_ABF68D9FD3C4: {
				Section: {
					_3B262475_4C2D_4125_854A_ABF68D9FD3C4_SECTION_3: {},
					_3B262475_4C2D_4125_854A_ABF68D9FD3C4_SECTION_4: {},
					_3B262475_4C2D_4125_854A_ABF68D9FD3C4_SECTION_6: {},
					_CB6764CE_81ED_406D_BB3F_FF4CB035E061: {},
					_F5B1E97F_CFA2_4C94_AD3A_59E2C7B9705D: {}
				}
			},
			MarketingPageConfigurationMain_PortalIntegrationTabV2: {
				Section: {
					_BDF0AB82_1080_4490_918F_E2CD4AACCD96_PORTAL_DEFAULTS_SECTIONV2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

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
	OptionSet.msdyncrm_marketingpageconfiguration = {
		msdyncrm_entityupdatebehavioronsubmit : {
			Contacts_and_leads: 0,
			No_update: 3,
			Only_contacts: 1,
			Only_leads: 2
		},
		msdyncrm_portalinstallationstatus : {
			Failed: 3,
			Not_started: 1,
			Started: 2
		},
		msdyncrm_portalintegrationtype : {
			Force_local_hosting: 1,
			Force_portal_hosting: 2
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
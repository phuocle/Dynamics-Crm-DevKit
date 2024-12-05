'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingform_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			grid_submissions: {},
			ModifiedOn: {},
			msdyncrm_allowPrefill: {},
			msdyncrm_alwaysgenerateleads: {},
			msdyncrm_capturing: {},
			msdyncrm_capturing1: {},
			msdyncrm_capturing_configured: {},
			msdyncrm_capturing_data: {},
			msdyncrm_capturing_scantime: {},
			msdyncrm_ConfirmationMessage: {},
			msdyncrm_contactmatchingstrategy: {},
			msdyncrm_doubleoptincontentsettings: {},
			msdyncrm_doubleoptinmessage: {},
			msdyncrm_doubleoptinthankyouformat: {},
			msdyncrm_doubleoptinthankyoupage: {},
			msdyncrm_doubleoptinthankyouurl: {},
			msdyncrm_enabledoubleoptin: {},
			msdyncrm_errorImageUrl: {},
			msdyncrm_ErrorMessage: {},
			msdyncrm_eventmatchingstrategy: {},
			msdyncrm_eventmatchingstrategyinfo: {},
			msdyncrm_externalhostedforminstructions: {},
			msdyncrm_formcontrolmapping: {},
			msdyncrm_FormDefinition: {},
			msdyncrm_formfieldmapping: {},
			msdyncrm_formtosave: {},
			msdyncrm_info: {},
			msdyncrm_insights_placeholder: {},
			msdyncrm_keepsuccessfulsubmissions: {},
			msdyncrm_leadmatchingstrategy: {},
			msdyncrm_LimitExceededMessage: {},
			msdyncrm_marketingformtemplate: {},
			msdyncrm_name: {},
			msdyncrm_organizationwhitelistdomain: {},
			msdyncrm_purpose: {},
			msdyncrm_RedirectURL: {},
			msdyncrm_successImageUrl: {},
			msdyncrm_visualstyle: {},
			notescontrol: {},
			OwnerId: {},
			Related_Fields: {},
			related_formpages: {},
			Related_MarketingPages: {},
			statecode: {},
			updatedon: {},
			WhiteListControl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C0537846_8E64_48CA_AF92_2219CF84E4AF: {
				Section: {
					_2330E860_97DA_4BF4_A5DA_DE4B82DA15F5: {},
					_C0537846_8E64_48CA_AF92_2219CF84E4AF_SECTION_2: {},
					_C0537846_8E64_48CA_AF92_2219CF84E4AF_SECTION_3: {},
					_C0537846_8E64_48CA_AF92_2219CF84E4AF_SECTION_4: {},
					DoubleOptIn: {},
					SubmissionBehavior: {}
				}
			},
			CapturingDefinition: {
				Section: {
					tab_4_section_1: {}
				}
			},
			Form_hosting: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {}
				}
			},
			FormDefinition: {
				Section: {
					tab_2_section_1: {}
				}
			},
			insights: {
				Section: {
					insights_section: {}
				}
			},
			tab_submissions: {
				Section: {
					tab_submissions_left: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_entityupdatebehavioronsubmit: {},
			msdyncrm_name: {},
			msdyncrm_validForPageType: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			grid_submissions: {},
			Related_Fields: {},
			related_formpages: {},
			Related_MarketingPages: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_marketingform_marketingformsubmission: {},
			msdyncrm_marketingform_msdyncrm_formpagetemplate: {},
			msdyncrm_msdyncrm_marketingform_contact_marketingformid: {},
			msdyncrm_msdyncrm_marketingform_lead_marketingformid: {},
			msdyncrm_msdyncrm_marketingform_msdyncrm_formpage: {},
			msdyncrm_msdyncrm_marketingform_msdyncrm_geopin: {},
			msdyncrm_msdyncrm_marketingform_msdyncrm_listform: {},
			msdyncrm_msdyncrm_marketingform_msdyncrm_marketingformactivity_marketingformid: {},
			msdyncrm_msdyncrm_marketingform_msdyncrm_marketingformw: {},
			msdyncrm_msdyncrm_marketingform_msevtmgt_event: {},
			msgdpr_msdyncrm_marketingform_contact_consentchangesourceformId: {},
			msgdpr_msdyncrm_marketingform_msgdpr_gdprconsentchangerecord: {}
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
	OptionSet.msdyncrm_marketingform = {
		msdyncrm_doubleoptinthankyouformat : {
			Open_the_marketing_page_after_confirmation: 192350000,
			Open_the_web_page_after_confirmation: 192350001
		},
		msdyncrm_entityupdatebehavioronsubmit : {
			Contacts_and_leads: 0,
			No_update: 3,
			Only_contacts: 1,
			Only_leads: 2
		},
		msdyncrm_purpose : {
			Collateral_download: 3,
			Contact_capture: 0,
			Double_Opt_In_Email_based_confirmation: 7,
			Event_feedback: 5,
			Event_registration: 4,
			Lead_generation: 2,
			Newsletter_subscription: 1,
			Structural: 6
		},
		msdyncrm_validForPageType : {
			Event_registration: 3,
			Forward_to_a_friend: 2,
			Landing_page: 0,
			Subscription_center: 1
		},
		msdyncrm_visualstyle : {
			_1_column: 0,
			_2_column: 1,
			Mixed: 2
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350005,
			Expired: 192350004,
			Live: 1,
			Live_editable: 192350003,
			Stopped: 2
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
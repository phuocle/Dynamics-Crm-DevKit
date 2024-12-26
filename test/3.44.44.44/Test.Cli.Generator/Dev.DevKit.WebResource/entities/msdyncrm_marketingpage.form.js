'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSetup = function(executionContext, defaultWebResourceName) {
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
			adx_pagetemplateid: {},
			adx_parentwebpageid: {},
			adx_webpageid: {},
			adx_websiteid: {},
			adx_websitelanguageid: {},
			adx_webtemplateid: {},
			CreatedOn: {},
			ModifiedOn: {},
			msdyncrm_Content: {},
			msdyncrm_contenttype: {},
			msdyncrm_formpagemapping: {},
			msdyncrm_formtosave: {},
			msdyncrm_full_page_url: {},
			msdyncrm_insights_placeholder: {},
			msdyncrm_lastgoinglivedate: {},
			msdyncrm_lastpublisheddate: {},
			msdyncrm_lastpublishstate: {},
			msdyncrm_lastunpublisheddate: {},
			msdyncrm_marketingpagetemplate: {},
			msdyncrm_marketingwebsite: {},
			msdyncrm_markettype: {},
			msdyncrm_name: {},
			msdyncrm_optimizedfor: {},
			msdyncrm_purpose: {},
			msdyncrm_visualstyle: {},
			msdyncrm_websitefilter_placeholder: {},
			notescontrol: {},
			OwnerId: {},
			statecode: {},
			SubGrid_Contacts: {},
			SubGrid_CustomerJourneys: {},
			SubGrid_EmailMessages: {},
			SubGrid_Forms: {},
			SubGrid_Leads: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DesignerTab: {
				Section: {
					DesignerSection: {}
				}
			},
			insights: {
				Section: {
					insights_section: {}
				}
			},
			PortalIntegrationTabV2: {
				Section: {
				}
			},
			SetupTab: {
				Section: {
					ContentSection: {},
					EntitiesSection: {},
					GeneralInformationSection: {},
					NotesSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_name: {},
			msdyncrm_partialurl: {},
			msdyncrm_type: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			SubGrid_Contacts: {},
			SubGrid_CustomerJourneys: {},
			SubGrid_EmailMessages: {},
			SubGrid_Forms: {},
			SubGrid_Leads: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_marketingpage_marketingformsubmission: {},
			msdyncrm_msdyncrm_marketingpage_contact_marketingpageid: {},
			msdyncrm_msdyncrm_marketingpage_lead_marketingpageid: {},
			msdyncrm_msdyncrm_marketingpage_msdyncrm_defaultmarketingsetting_defaultmarketingthankyoupage: {},
			msdyncrm_msdyncrm_marketingpage_msdyncrm_defaultmarketingsetting_defaultmarketingthankyoupagedoi: {},
			msdyncrm_msdyncrm_marketingpage_msdyncrm_deprecatedpageactivity_marketingpageid: {},
			msdyncrm_msdyncrm_marketingpage_msdyncrm_formpage: {},
			msdyncrm_msdyncrm_marketingpage_msdyncrm_geopin: {},
			msdyncrm_msdyncrm_marketingpage_msdyncrm_marketingform_doubleoptinthankyoupage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQuick_create_marketing_page = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
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
			msdyncrm_marketingwebsite: {},
			msdyncrm_name: {},
			msdyncrm_partialurl: {},
			msdyncrm_type: {},
			msdyncrm_websitefilter_placeholder: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {},
					tab_1_column_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingpage = {
		msdyncrm_contenttype : {
			Company_background: 3,
			Confirmation_request: 6,
			Event_information: 4,
			Offers_and_discounts: 5,
			Product_information: 2,
			Product_launch: 1,
			Structural: 0
		},
		msdyncrm_lastpublishstate : {
			Error: 0,
			Success: 1
		},
		msdyncrm_markettype : {
			All: 2,
			Consumer: 1,
			Enterprise: 0
		},
		msdyncrm_optimizedfor : {
			Desktop: 0,
			Mobile: 2,
			Tablet: 1
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
		msdyncrm_type : {
			Event_registration: 3,
			Forward_to_a_friend: 2,
			Landing_page: 0,
			Subscription_center: 1
		},
		msdyncrm_visualstyle : {
			Colorful: 2,
			Dark: 1,
			Light: 0,
			Other: 3
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350005,
			Expired: 192350004,
			Going_live: 192350006,
			Live: 192350001,
			Live_editable: 192350003,
			Stopped: 192350002,
			Stopping: 192350007
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
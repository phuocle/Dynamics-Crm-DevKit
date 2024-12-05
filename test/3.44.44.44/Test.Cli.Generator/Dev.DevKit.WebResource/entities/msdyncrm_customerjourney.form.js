'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_customerjourney_Information = function(executionContext, defaultWebResourceName) {
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
			Leads: {},
			msdyncr2_LinkedInCampaign: {},
			msdyncrm_ContentSettingsId: {},
			msdyncrm_CustomerJourneyDesignerState: {},
			msdyncrm_CustomerJourneyTemplate: {},
			msdyncrm_CustomerJourneyTimeZone: {},
			msdyncrm_description: {},
			msdyncrm_EndDateTime: {},
			msdyncrm_entitytarget: {},
			msdyncrm_formtosave: {},
			msdyncrm_insights_placeholder: {},
			msdyncrm_IsRecurring: {},
			msdyncrm_lockdowndateinmilliseconds: {},
			msdyncrm_name: {},
			msdyncrm_publishedby: {},
			msdyncrm_purpose: {},
			msdyncrm_recoveryitems: {},
			msdyncrm_RecurrenceCount: {},
			msdyncrm_RecurrenceIntervalDays: {},
			msdyncrm_scope: {},
			msdyncrm_StartDateTime: {},
			msdyncrm_SuppressionSegmentId: {},
			msdyncrm_Type: {},
			msdyncrm_ValidationResults: {},
			msdyncrm_WorkflowDefinition: {},
			msgdpr_requiredconsent: {},
			notescontrol: {},
			OwnerId: {},
			RelatedMarketingEmails: {},
			RelatedSegments: {},
			RuntimeState: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			designer_tab: {
				Section: {
					tab_2_section_1: {}
				}
			},
			general_tab: {
				Section: {
					general_tab_section_2: {},
					general_tab_section_3: {},
					general_tab_section_4: {},
					general_tab_section_5: {},
					general_tab_section_6: {},
					general_tab_section_7: {},
					general_tab_section_marketingemailsused: {},
					general_tab_section_segmentsused: {}
				}
			},
			insights: {
				Section: {
					insights_section: {}
				}
			},
			LinkedInCampaignTab: {
				Section: {
					tab_3_section_1: {}
				}
			},
			RecoveryItemsTab: {
				Section: {
					RecoveryItemsSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_IsRecurring: {},
			msdyncrm_name: {},
			msdyncrm_StartDateTime: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			Campaign: {
				msdyncrm_CampaignType: {},
				msdyncrm_LinkedInAccount: {},
				msdyncrm_linkedinid: {},
				msdyncrm_LinkedInStatus: {},
				msdyncrm_name: {},
				msdyncrm_totalleads: {},
				msdyncrm_totalsubmissions: {},
				OwnerId: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Leads: {},
			RuntimeState: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncr2_linkedinformsubmission_customerjourney: {},
			msdyncrm_customerjourney_adx_inviteredemptions: {},
			msdyncrm_customerjourney_adx_portalcomments: {},
			msdyncrm_customerjourney_Appointments: {},
			msdyncrm_customerjourney_Emails: {},
			msdyncrm_customerjourney_Feedback: {},
			msdyncrm_customerjourney_marketingformsubmission: {},
			msdyncrm_customerjourney_msdyn_bookingalerts: {},
			msdyncrm_customerjourney_msdyn_copilottranscripts: {},
			msdyncrm_customerjourney_msdyn_ocliveworkitems: {},
			msdyncrm_customerjourney_msdyn_ocoutboundmessages: {},
			msdyncrm_customerjourney_msdyn_ocsessions: {},
			msdyncrm_customerjourney_msdyn_ocvoicemails: {},
			msdyncrm_customerjourney_msfp_alerts: {},
			msdyncrm_customerjourney_msfp_surveyinvites: {},
			msdyncrm_customerjourney_msfp_surveyresponses: {},
			msdyncrm_customerjourney_PhoneCalls: {},
			msdyncrm_customerjourney_ServiceAppointments: {},
			msdyncrm_customerjourney_Tasks: {},
			msdyncrm_msdyncrm_customerjourney_contact_customerjourneyid: {},
			msdyncrm_msdyncrm_customerjourney_lead_customerjourneyid: {},
			msdyncrm_msdyncrm_customerjourney_msdyncrm_custome: {},
			msdyncrm_msdyncrm_customerjourney_msdyncrm_customerjourneycustomchannelactivity_customerjourney: {},
			msdyncrm_msdyncrm_customerjourney_msdyncrm_customerjourneyiteration_customerjourneyid: {},
			msdyncrm_msdyncrm_customerjourney_msdyncrm_customerjourneytemplate_Origin: {},
			msdyncrm_msdyncrm_customerjourney_msdyncrm_geopin_customerJourney: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCustomer_Journey_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_CustomerJourneyDesignerState: {},
			msdyncrm_CustomerJourneyTimeZone: {},
			msdyncrm_description: {},
			msdyncrm_EndDateTime: {},
			msdyncrm_entitytarget: {},
			msdyncrm_IsRecurring: {},
			msdyncrm_name: {},
			msdyncrm_purpose: {},
			msdyncrm_RecurrenceCount: {},
			msdyncrm_RecurrenceIntervalDays: {},
			msdyncrm_scope: {},
			msdyncrm_StartDateTime: {},
			msdyncrm_SuppressionSegmentId: {},
			msdyncrm_Type: {},
			msdyncrm_WorkflowDefinition: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Quick_create_options: {
				Section: {
					quickcreate_tab: {}
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
	OptionSet.msdyncrm_customerjourney = {
		msdyncrm_entitytarget : {
			Account: 1,
			Contact: 0
		},
		msdyncrm_scope : {
			Business_unit: 270100001,
			Organization: 270100000
		},
		msdyncrm_Type : {
			Automated: 192350000,
			LinkedIn: 192350001
		},
		msgdpr_requiredconsent : {
			_1_Consent: 587030001,
			_2_Transactional: 587030002,
			_3_Subscriptions: 587030003,
			_4_Marketing: 587030004,
			_5_Profiling: 587030005
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
﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCampaign = function(executionContext, defaultWebResourceName) {
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
			Activities: {},
			ActualEnd: {},
			ActualStart: {},
			BudgetedCost: {},
			CodeName: {},
			CreatedOn: {},
			Description: {},
			ExpectedResponse: {},
			Leads: {},
			Lists: {},
			ModifiedBy: {},
			ModifiedOn: {},
			Name: {},
			notescontrol: {},
			Objective: {},
			OtherCost: {},
			OwnerId: {},
			ProposedEnd: {},
			ProposedStart: {},
			Responses: {},
			TmpRegardingObjectId: {},
			TotalActualCost: {},
			TotalCampaignActivityActualCost: {},
			TransactionCurrencyId: {},
			TypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			DETAILS: {
				Section: {
					ADMINISTRATION: {},
					DESCRIPTION: {},
					FINANCIALS: {},
					RESPONSES: {}
				}
			},
			SUMMARY: {
				Section: {
					CAMPAIGN: {},
					CAMPAIGN_ACTIVITIES: {},
					LEADS: {},
					LISTS: {},
					OFFER: {},
					RELATED_PANE: {},
					SCHEDULES: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			ExpectedRevenue: {},
			IsTemplate: {},
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			Activities: {},
			Leads: {},
			Lists: {},
			Responses: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			campaign_adx_inviteredemptions: {},
			campaign_adx_portalcomments: {},
			Campaign_Appointments: {},
			Campaign_CampaignActivities: {},
			Campaign_CampaignResponses: {},
			Campaign_Emails: {},
			campaign_IncidentResolutions: {},
			campaign_leads: {},
			campaign_msdyn_bookingalerts: {},
			campaign_msdyn_copilottranscripts: {},
			campaign_msdyn_ocliveworkitems: {},
			campaign_msdyn_ocoutboundmessages: {},
			campaign_msdyn_ocsessions: {},
			campaign_msdyn_ocvoicemails: {},
			campaign_msfp_alerts: {},
			campaign_msfp_surveyinvites: {},
			campaign_msfp_surveyresponses: {},
			campaign_opportunities: {},
			campaign_OpportunityCloses: {},
			campaign_OrderCloses: {},
			campaign_orders: {},
			Campaign_Phonecalls: {},
			campaign_QuoteCloses: {},
			campaign_quotes: {},
			Campaign_ServiceAppointments: {},
			Campaign_Tasks: {}
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
	OptionSet.Campaign = {
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Canceled: 4,
			Completed: 3,
			Inactive: 6,
			Launched: 2,
			Proposed: 0,
			Ready_To_Launch: 1,
			Suspended: 5
		},
		TypeCode : {
			Advertisement: 1,
			Co_branding: 4,
			Direct_Marketing: 2,
			Event: 3,
			Other: 5
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
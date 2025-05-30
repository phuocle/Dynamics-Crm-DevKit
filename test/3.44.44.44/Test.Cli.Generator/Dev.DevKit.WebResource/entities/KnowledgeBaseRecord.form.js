﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormKnowledge_Base_Articles = function(executionContext, defaultWebResourceName) {
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
			notescontrol: {},
			PrivateUrl: {},
			PublicUrl: {},
			Title: {},
			UniqueId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			UniqueId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			knowledgebaserecord_adx_inviteredemptions: {},
			knowledgebaserecord_adx_portalcomments: {},
			KnowledgeBaseRecord_Appointments: {},
			knowledgebaserecord_BulkOperations: {},
			knowledgebaserecord_CampaignResponses: {},
			KnowledgeBaseRecord_Emails: {},
			knowledgebaserecord_IncidentResolutions: {},
			knowledgebaserecord_msdyn_bookingalerts: {},
			knowledgebaserecord_msdyn_copilottranscripts: {},
			knowledgebaserecord_msdyn_ocliveworkitems: {},
			knowledgebaserecord_msdyn_ocoutboundmessages: {},
			knowledgebaserecord_msdyn_ocsessions: {},
			knowledgebaserecord_msdyn_ocvoicemails: {},
			knowledgebaserecord_msfp_alerts: {},
			knowledgebaserecord_msfp_surveyinvites: {},
			knowledgebaserecord_msfp_surveyresponses: {},
			knowledgebaserecord_OpportunityCloses: {},
			knowledgebaserecord_OrderCloses: {},
			KnowledgeBaseRecord_PhoneCalls: {},
			knowledgebaserecord_QuoteCloses: {},
			KnowledgeBaseRecord_ServiceAppointments: {},
			KnowledgeBaseRecord_Tasks: {}
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
	OptionSet.KnowledgeBaseRecord = {
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
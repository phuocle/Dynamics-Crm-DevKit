﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRecord_Creation_and_Update_Rule_UCI = function(executionContext, defaultWebResourceName) {
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
			ActivityMonitorsGrid: {},
			AllowUnknownSender: {},
			CheckActiveEntitlement: {},
			CheckIfResolved: {},
			ConvertRuleItemsGrid: {},
			ConvertRuleType: {},
			ConvertRuleType1: {},
			ConvertRuleType2: {},
			ConvertRuleType3: {},
			Name: {},
			OwnerId: {},
			QueueId: {},
			ResolvedSince: {},
			ResponseTemplateId: {},
			SendAutomaticResponse: {},
			SenderResolutionOption: {},
			SourceChannelTypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			ActivityMonitor: {
				Section: {
					Activity_Monitor: {}
				}
			},
			Advanced: {
				Section: {
					Advanced_empty_section: {},
					Advanced_Settings: {},
					Before_Evaluating_Conditions: {}
				}
			},
			Basic: {
				Section: {
					Basic_empty_section: {},
					Conditions_To_Evaluate: {},
					Details: {},
					Frequently_Used_Configurations: {}
				}
			},
			tabUCMigrationDetail: {
				Section: {
					Migration: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			ActivityMonitorsGrid: {},
			ConvertRuleItemsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			convertrule_activitymonitor: {},
			convertrule_convertruleitem: {},
			msdyn_migrationtracker_LegacyConvertRule_convertrule: {},
			msdyn_migrationtracker_ModernConvertRule_convertrule: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormRecord_Creation_and_Update_Rule_Web_Client = function(executionContext, defaultWebResourceName) {
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
			AllowUnknownSender: {},
			ChannelPropertyGroupId: {},
			CheckActiveEntitlement: {},
			CheckBlockedSocialProfile: {},
			CheckDirectMessages: {},
			CheckIfResolved: {},
			ConvertRuleItemsGrid: {},
			Name: {},
			OwnerId: {},
			QueueId: {},
			ResolvedSince: {},
			ResponseTemplateId: {},
			SendAutomaticResponse: {},
			SourceChannelTypeCode: {},
			SourceTypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					AutoResponseSettings: {},
					CaseDetails: {},
					ChannelProperties: {},
					ConvertToCaseSettings: {},
					EmailCaseConditions: {},
					SocialMonitoringCaseConditions: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			ConvertRuleItemsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			convertrule_activitymonitor: {},
			convertrule_convertruleitem: {},
			msdyn_migrationtracker_LegacyConvertRule_convertrule: {},
			msdyn_migrationtracker_ModernConvertRule_convertrule: {}
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
	OptionSet.ConvertRule = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		SenderResolutionOption : {
			Creating_a_new_contact_automatically: 0,
			Mapping_in_Power_Automate_manually: 1
		},
		SourceChannelTypeCode : {
			Appointment: 4201,
			Booking_Alert: 11000,
			Conversation: 10691,
			Copilot_Transcript: 10877,
			Customer_Voice_alert: 10600,
			Customer_Voice_survey_invite: 10610,
			Customer_Voice_survey_response: 10612,
			Email: 4202,
			Invite_Redemption: 10310,
			Outbound_message: 11063,
			Phone_Call: 4210,
			Portal_Comment: 10311,
			Service_Activity: 4214,
			Session: 10708,
			Social_Activity: 4216,
			Task: 4212,
			Teams_chat: 10185,
			Voicemail: 11070
		},
		SourceTypeCode : {
			Email: 2,
			Social_Monitoring: 1
		},
		StateCode : {
			Active: 1,
			Draft: 0
		},
		StatusCode : {
			Active: 2,
			Draft: 1
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
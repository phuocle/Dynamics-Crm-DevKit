﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_omnichannelconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_IsSkillBasedRoutingEnabled: {},
			msdyn_IsUpdateSkillsEnabled: {},
			msdyn_name: {},
			RatingModelDetails: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_skillbasedrouting_new: {
				Section: {
					tab_2_section_1_2: {},
					tab_skillbasedrouting_section_2_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			RatingModelDetails: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormMarkdown_Settings = function(executionContext, defaultWebResourceName) {
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
			msdyn_enablemarkdown: {},
			WebResource_ocpreviewterms: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: {
				Section: {
					_360DEA1C_38CE_48A4_9E94_CCF1A7E7C18E: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormMasking_settings = function(executionContext, defaultWebResourceName) {
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
			MaskingRulesInSettings: {},
			msdyn_enable_supervisor_assign: {},
			msdyn_enable_supervisor_monitor: {},
			msdyn_enable_supervisor_transfer: {},
			msdyn_enable_visitorjourney: {},
			msdyn_maskforagent: {},
			msdyn_maskforcustomer: {},
			msdyn_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_DCC1EB86_7EF2_4FF4_8D56_2A0F28FD1B5E: {
				Section: {
					_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: {},
					_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_3: {}
				}
			},
			Self_service_settings: {
				Section: {
					_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			MaskingRulesInSettings: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormNotifications = function(executionContext, defaultWebResourceName) {
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
			msdyn_agentrejectnotificationssubheading: {},
			msdyn_dnd_presence_lookup: {},
			msdyn_dnd_presence_lookup1: {},
			msdyn_enable_agent_reject_notifications: {},
			msdyn_enable_missed_notifications: {},
			msdyn_enablesoundnotifications: {},
			msdyn_inactive_presence_lookup: {},
			msdyn_inactive_presence_lookup1: {},
			msdyn_missednotificationssubheading: {},
			msdyn_SoundFormControl: {},
			templates_grid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			agent_reject_notification_settings: {
				Section: {
					agent_reject_notification_settings_section: {}
				}
			},
			missed_notification_settings: {
				Section: {
					missed_notifications_settings_section: {}
				}
			},
			notification_templates: {
				Section: {
					notification_templates_section: {}
				}
			},
			tab_sound_notification_settings: {
				Section: {
					tab_sound_notification_settings_section_3: {},
					tab_sound_notification_settings_section_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {
			agent_reject_notification_presence_update_quick_view_form: {
				msdyn_description: {},
				msdyn_presencestatustext: {}
			},
			missed_notification_presence_update_quick_view_form: {
				msdyn_description: {},
				msdyn_presencestatustext: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			templates_grid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPersonal_quick_replies = function(executionContext, defaultWebResourceName) {
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
			msdyn_isPersonalMessagesEnabled: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			personal_message_settings: {
				Section: {
					personal_messaages_settings_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormReal_Time_Translation_Settings = function(executionContext, defaultWebResourceName) {
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
			msdyn_defaultAgentInputLanguage: {},
			msdyn_EnableRealTimeTranslation: {},
			msdyn_translationwebresourceurl: {},
			WebResource_featureEnableTerms: {},
			WebResource_ocpreviewterms: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Real_Time_Translation: {
				Section: {
					RealTimeTranslation_section_2: {},
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSelf_service_settings = function(executionContext, defaultWebResourceName) {
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
			msdyn_enable_supervisor_assign: {},
			msdyn_enable_supervisor_monitor: {},
			msdyn_enable_supervisor_transfer: {},
			msdyn_enable_visitorjourney: {},
			msdyn_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: {
				Section: {
					_311AD6D5_5179_4AC3_BE91_EF746DE66813: {}
				}
			},
			Self_service_settings: {
				Section: {
					_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSkill_based_routing_settings = function(executionContext, defaultWebResourceName) {
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
			msdyn_IsUpdateSkillsEnabled: {},
			RatingModelDetails: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_section_1: {},
					tab_1_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			RatingModelDetails: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSupervisor_settings = function(executionContext, defaultWebResourceName) {
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
			msdyn_enable_supervisor_assign: {},
			msdyn_enable_supervisor_monitor: {},
			msdyn_enable_supervisor_transfer: {},
			msdyn_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: {
				Section: {
					_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: {}
				}
			},
			Supervisor_settings: {
				Section: {
					_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTranscript_settings = function(executionContext, defaultWebResourceName) {
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
			msdyn_enablenewconversationform: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			transcript_settings: {
				Section: {
					transcript_settings_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_omnichannelconfiguration = {
		msdyn_defaultAgentInputLanguage : {
			Arabic_Saudi_Arabia: 1025,
			Basque_Spain: 1069,
			Bulgarian_Bulgaria: 1026,
			Catalan_Spain: 1027,
			Chinese_China: 2052,
			Chinese_Hong_Kong: 3076,
			Croatian_Croatia: 1050,
			Czech_Czech_Republic: 1029,
			Danish_Denmark: 1030,
			Dutch_Netherlands: 1043,
			English_United_States: 1033,
			Estonian_Estonia: 1061,
			Finnish_Finland: 1035,
			French_France: 1036,
			Galician_Spain: 1110,
			German_Germany: 1031,
			Greek_Greece: 1032,
			Hebrew_Israel: 1037,
			Hindi_India: 1081,
			Hungarian_Hungary: 1038,
			Indonesian_Indonesia: 1057,
			Italian_Italy: 1040,
			Japanese_Japan: 1041,
			Kazakh_Kazakhstan: 1087,
			Korean_Korea: 1042,
			Latvian_Latvia: 1062,
			Lithuanian_Lithuania: 1063,
			Malay_Malaysia: 1086,
			Norwegian_Bokmal_Norway: 1044,
			Polish_Poland: 1045,
			Portuguese_Brazil: 1046,
			Portuguese_Portugal: 2070,
			Romanian_Romania: 1048,
			Russian_Russia: 1049,
			Serbian_Cyrillic_Serbia: 3098,
			Serbian_Latin_Serbia: 2074,
			Slovak_Slovakia: 1051,
			Slovenian_Slovenia: 1060,
			Spanish_Spain: 3082,
			Swedish_Sweden: 1053,
			Thai_Thailand: 1054,
			Turkish_Turkey: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
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
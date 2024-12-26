'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEmail_Properties = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_automaticallygeneratetextpart: {},
			msdyncrm_description: {},
			msdyncrm_email_contenttype: {},
			msdyncrm_email_template_market_type_optionset: {},
			msdyncrm_email_template_optimizedfor_optionset: {},
			msdyncrm_email_template_purpose_optionset: {},
			msdyncrm_email_template_visual_style_optionset: {},
			msdyncrm_FromEmail: {},
			msdyncrm_FromName: {},
			msdyncrm_Label: {},
			msdyncrm_Language: {},
			msdyncrm_messagedesignation: {},
			msdyncrm_name: {},
			msdyncrm_ReplyToEmail: {},
			msdyncrm_subcategory: {},
			msdyncrm_subject: {},
			msdyncrm_textpart: {},
			msdyncrm_thumbnailimage: {},
			msdyncrm_To: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Settings: {
				Section: {
					EmailSettings: {},
					PlainText: {},
					SendSettings_expanded: {},
					tab_1_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_msdyncrm_marketingemailtemplate_msdyncrm_: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_template_header_form = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_FromEmail: {},
			msdyncrm_FromName: {},
			msdyncrm_fromuser: {},
			msdyncrm_Language: {},
			msdyncrm_name: {},
			msdyncrm_subject: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			email_template_header: {
				Section: {
					header_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_msdyncrm_marketingemailtemplate_msdyncrm_: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormNew_editing_experience = function(executionContext, defaultWebResourceName) {
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
			EntityImage: {},
			msdyncrm_automaticallygeneratetextpart: {},
			msdyncrm_description: {},
			msdyncrm_designerhtml: {},
			msdyncrm_email_contenttype: {},
			msdyncrm_email_template_market_type_optionset: {},
			msdyncrm_email_template_optimizedfor_optionset: {},
			msdyncrm_email_template_purpose_optionset: {},
			msdyncrm_email_template_visual_style_optionset: {},
			msdyncrm_emailbody: {},
			msdyncrm_formtosave: {},
			msdyncrm_FromEmail: {},
			msdyncrm_FromName: {},
			msdyncrm_Label: {},
			msdyncrm_Language: {},
			msdyncrm_messagedesignation: {},
			msdyncrm_name: {},
			msdyncrm_previewhtml: {},
			msdyncrm_ReplyToEmail: {},
			msdyncrm_subcategory: {},
			msdyncrm_subject: {},
			msdyncrm_textpart: {},
			msdyncrm_thumbnailimage: {},
			msdyncrm_To: {},
			OwnerId: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			designTab: {
				Section: {
					DesignSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_name: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyncrm_msdyncrm_marketingemailtemplate_msdyncrm_: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyncrm_marketingemailtemplate_Information = function(executionContext, defaultWebResourceName) {
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
			EntityImage: {},
			msdyncrm_automaticallygeneratetextpart: {},
			msdyncrm_description: {},
			msdyncrm_designerhtml: {},
			msdyncrm_email_contenttype: {},
			msdyncrm_emailbody: {},
			msdyncrm_FromEmail: {},
			msdyncrm_FromName: {},
			msdyncrm_Language: {},
			msdyncrm_messagedesignation: {},
			msdyncrm_name: {},
			msdyncrm_ReplyToEmail: {},
			msdyncrm_sourceemailid: {},
			msdyncrm_subcategory: {},
			msdyncrm_subject: {},
			msdyncrm_textpart: {},
			msdyncrm_thumbnailimage: {},
			msdyncrm_To: {},
			OwnerId: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_1A45C0E7_83FE_42B7_9D84_8D1CDFA08916: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
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
	OptionSet.msdyncrm_marketingemailtemplate = {
		msdyncrm_category : {
			Custom_templates: 1,
			Gallery: 0
		},
		msdyncrm_email_contenttype : {
			Confirmation_request: 1,
			Default: 0
		},
		msdyncrm_email_template_market_type_optionset : {
			B2B: 0,
			B2B_B2C: 2,
			B2C: 1
		},
		msdyncrm_email_template_optimizedfor_optionset : {
			Desktop: 2,
			Mobile: 1,
			Wide_reach: 0
		},
		msdyncrm_email_template_purpose_optionset : {
			Abandoned_shopping_cart: 15,
			Anniversary: 21,
			Announcement: 2,
			Birthday: 3,
			Blog_promotion: 4,
			Content_promotion: 5,
			Double_opt_in_email_based_confirmation: 23,
			Event_countdown: 6,
			Event_or_webinar_invitation: 7,
			Feedback_request: 20,
			Follow_up: 8,
			Holiday_greetings: 9,
			Hospitality: 11,
			Information: 10,
			Lead_nurturing: 22,
			Newsletter: 12,
			Post_purchase: 13,
			Promotional_up_sellcross_sell: 14,
			Structural: 0,
			Thank_you: 16,
			Upcoming_event: 17,
			Welcome: 18,
			Win_backre_engage: 19
		},
		msdyncrm_email_template_visual_style_optionset : {
			Colorful: 2,
			Dark: 3,
			Light: 1,
			Other: 0
		},
		msdyncrm_Label : {
			Layout_enabled: 192350001,
			New: 192350000
		},
		msdyncrm_Language : {
			Arabic_Saudi_Arabia: 1025,
			Basque_Basque: 1069,
			Bulgarian_Bulgaria: 1026,
			Catalan_Catalan: 1027,
			Chinese_Hong_Kong_SAR: 3076,
			Chinese_PRC: 2052,
			Chinese_Taiwan: 1028,
			Croatian_Croatia: 1050,
			Czech_Czech_Republic: 1029,
			Danish: 1030,
			Dutch: 1043,
			English: 1033,
			English_Australia: 3081,
			English_Canada: 4105,
			English_Great_Britain: 2057,
			Estonian_Estonia: 1061,
			Finnish_Finland: 1035,
			French: 1036,
			French_Canada: 3084,
			Galician_Galician: 1110,
			German: 1031,
			Greek_Greece: 1032,
			Hebrew_Israel: 1037,
			Hungarian_Hungary: 1038,
			Indonesian_Indonesia: 1057,
			Italian: 1040,
			Japanese: 1041,
			Korean_Korea: 1042,
			Latvian_Latvia: 1062,
			Lithuanian_Lithuania: 1063,
			Norwegian_Bokmal_Norway: 1044,
			Polish_Poland: 1045,
			Portuguese_Brazil: 1046,
			Portuguese_Portugal: 2070,
			Romanian_Romania: 1048,
			Russian_Russia: 1049,
			Serbian_Cyrillic_Serbia_and_Montenegro: 3098,
			Serbian_Latin_Serbia_and_Montenegro: 2074,
			Slovak_Slovakia: 1051,
			Slovenian_Slovenia: 1060,
			Spanish: 3082,
			Swedish_Sweden: 1053,
			Thai_Thailand: 1054,
			Turkish_Turkey: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
		},
		msdyncrm_messagedesignation : {
			Commercial: 0,
			Transactional: 1
		},
		msdyncrm_subcategory : {
			Deals: 1,
			EventsWebinars: 3,
			Follow_up: 2,
			Informational: 4,
			Layouts: 6,
			New_product: 0,
			Transactional: 5
		},
		msdyncrm_Tag : {
			Layout_enabled: 192350001,
			New: 192350000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Inactive: 2,
			Live: 192350001
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
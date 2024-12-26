'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEmail_header_form = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_email_contentlanguage: {},
			msdyncrm_FromEmail: {},
			msdyncrm_FromName: {},
			msdyncrm_FromUser: {},
			msdyncrm_previewtext: {},
			msdyncrm_subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			email_header: {
				Section: {
					header_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_marketingemail_marketingemailtest: {},
			msdyncrm_marketingemail_marketingformsubmission: {},
			msdyncrm_msdyncrm_marketingemail_contact_emailid: {},
			msdyncrm_msdyncrm_marketingemail_lead_emailid: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_consentconfirmationmessage: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_subscriptionoptinmessage: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_geopin: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_marketingform_doubleoptinmessage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
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
			msdyncrm_contentsettingscompanyaddress: {},
			msdyncrm_email_contentlanguage: {},
			msdyncrm_email_contenttype: {},
			msdyncrm_FromEmail: {},
			msdyncrm_FromName: {},
			msdyncrm_messagedesignation: {},
			msdyncrm_previewtext: {},
			msdyncrm_ReplyToEmail: {},
			msdyncrm_subject: {},
			msdyncrm_TemplateId: {},
			msdyncrm_testconfiguration: {},
			msdyncrm_textpart: {},
			msdyncrm_To: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Settings: {
				Section: {
					Email_settings: {},
					Plain_text: {},
					SendSettings_expanded: {},
					tab_1_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_marketingemail_marketingemailtest: {},
			msdyncrm_marketingemail_marketingformsubmission: {},
			msdyncrm_msdyncrm_marketingemail_contact_emailid: {},
			msdyncrm_msdyncrm_marketingemail_lead_emailid: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_consentconfirmationmessage: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_subscriptionoptinmessage: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_geopin: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_marketingform_doubleoptinmessage: {}
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
			msdyncrm_contentsettingscompanyaddress: {},
			msdyncrm_Description: {},
			msdyncrm_designerhtml: {},
			msdyncrm_email_contentlanguage: {},
			msdyncrm_email_contenttype: {},
			msdyncrm_email_contenttype1: {},
			msdyncrm_emailbody: {},
			msdyncrm_formtosave: {},
			msdyncrm_FromEmail: {},
			msdyncrm_FromName: {},
			msdyncrm_messagedesignation: {},
			msdyncrm_messagedesignation1: {},
			msdyncrm_previewhtml: {},
			msdyncrm_previewtext: {},
			msdyncrm_ReplyToEmail: {},
			msdyncrm_subject: {},
			msdyncrm_TemplateId: {},
			msdyncrm_testconfiguration: {},
			msdyncrm_textpart: {},
			msdyncrm_To: {},
			statecode: {}
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
			msdyncrm_FromUser: {},
			msdyncrm_Name: {},
			msdyncrm_subject: {},
			msdyncrm_subject1: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyncrm_marketingemail_marketingemailtest: {},
			msdyncrm_marketingemail_marketingformsubmission: {},
			msdyncrm_msdyncrm_marketingemail_contact_emailid: {},
			msdyncrm_msdyncrm_marketingemail_lead_emailid: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_consentconfirmationmessage: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_subscriptionoptinmessage: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_geopin: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_marketingform_doubleoptinmessage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormOrchestration_pane_view = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_email_contentlanguage: {},
			msdyncrm_emailbody: {},
			msdyncrm_Name: {},
			msdyncrm_subject: {},
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			email_details: {
				Section: {
					DesignSection: {},
					email_details_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_marketingemail_marketingemailtest: {},
			msdyncrm_marketingemail_marketingformsubmission: {},
			msdyncrm_msdyncrm_marketingemail_contact_emailid: {},
			msdyncrm_msdyncrm_marketingemail_lead_emailid: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_consentconfirmationmessage: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_defaultmarketingsetting_subscriptionoptinmessage: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_geopin: {},
			msdyncrm_msdyncrm_marketingemail_msdyncrm_marketingform_doubleoptinmessage: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyncrm_marketingemail_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_Description: {},
			msdyncrm_FromEmail: {},
			msdyncrm_FromEmail1: {},
			msdyncrm_FromName: {},
			msdyncrm_FromName1: {},
			msdyncrm_FromUser: {},
			msdyncrm_messagedesignation: {},
			msdyncrm_Name: {},
			msdyncrm_subject: {},
			msdyncrm_To: {},
			msdyncrm_To1: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
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
	OptionSet.msdyncrm_marketingemail = {
		msdyncrm_email_contentlanguage : {
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
		msdyncrm_email_contenttype : {
			Confirmation_request: 1,
			Default: 0
		},
		msdyncrm_messagedesignation : {
			Commercial: 0,
			Transactional: 1
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEmail_Bulk_Edit_Form = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_compliancesettings: {},
			msdynmkt_compliancesettings3: {},
			msdynmkt_compliancesettings4: {},
			msdynmkt_compliancesettingscompanyaddress: {},
			msdynmkt_emailcontentlanguage: {},
			msdynmkt_emailcontenttype: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_placeholders: {},
			msdynmkt_replytoemail: {},
			msdynmkt_to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_email: {},
			msdynmkt_marketingformsubmission_emailid: {},
			msdynmkt_msdynmkt_email_contact_emailid: {},
			msdynmkt_msdynmkt_email_lead_emailid: {},
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: {},
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_fields_control = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_subject: {},
			msdynmkt_to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_email: {},
			msdynmkt_marketingformsubmission_emailid: {},
			msdynmkt_msdynmkt_email_contact_emailid: {},
			msdynmkt_msdynmkt_email_lead_emailid: {},
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: {},
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_fields_control_collapsed = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_fromemail: {},
			msdynmkt_subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_email: {},
			msdynmkt_marketingformsubmission_emailid: {},
			msdynmkt_msdynmkt_email_contact_emailid: {},
			msdynmkt_msdynmkt_email_lead_emailid: {},
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: {},
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_header = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_automaticallygeneratetextpart: {},
			msdynmkt_brandprofileid: {},
			msdynmkt_compliancesettings: {},
			msdynmkt_compliancesettings3: {},
			msdynmkt_compliancesettingscompanyaddress: {},
			msdynmkt_consentcompliancegroupcontrol: {},
			msdynmkt_emailcontentlanguage: {},
			msdynmkt_emailcontenttype: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_previewtext: {},
			msdynmkt_replytoemail: {},
			msdynmkt_senderid: {},
			msdynmkt_subject: {},
			msdynmkt_templateid: {},
			msdynmkt_templateid1: {},
			msdynmkt_textpart: {},
			OwningBusinessUnit: {},
			OwningBusinessUnit1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			email_header: {
				Section: {
					email_header_section_5: {},
					section_email_settings: {},
					section_send_settings_expanded: {},
					section_subject: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_email: {},
			msdynmkt_marketingformsubmission_emailid: {},
			msdynmkt_msdynmkt_email_contact_emailid: {},
			msdynmkt_msdynmkt_email_lead_emailid: {},
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: {},
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
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
			msdynmkt_brandprofileid: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_previewtext: {},
			msdynmkt_senderid: {},
			msdynmkt_subject: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_email: {},
			msdynmkt_marketingformsubmission_emailid: {},
			msdynmkt_msdynmkt_email_contact_emailid: {},
			msdynmkt_msdynmkt_email_lead_emailid: {},
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: {},
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_settings_control = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_automaticallygeneratetextpart: {},
			msdynmkt_emailcontenttype: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_replytoemail: {},
			msdynmkt_textpart: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_email: {},
			msdynmkt_marketingformsubmission_emailid: {},
			msdynmkt_msdynmkt_email_contact_emailid: {},
			msdynmkt_msdynmkt_email_lead_emailid: {},
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: {},
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_email_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_designerhtml: {},
			msdynmkt_emailbody: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_placeholders: {},
			msdynmkt_subject: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_email: {},
			msdynmkt_marketingformsubmission_emailid: {},
			msdynmkt_msdynmkt_email_contact_emailid: {},
			msdynmkt_msdynmkt_email_lead_emailid: {},
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: {},
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_email_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_automaticallygeneratetextpart: {},
			msdynmkt_brandprofiledata: {},
			msdynmkt_brandprofileid: {},
			msdynmkt_compliancesettings: {},
			msdynmkt_compliancesettings3: {},
			msdynmkt_compliancesettings4: {},
			msdynmkt_compliancesettingscompanyaddress: {},
			msdynmkt_conditionalcontent: {},
			msdynmkt_conditionalcontent1: {},
			msdynmkt_consentcompliancegroupcontrol: {},
			msdynmkt_designerhtml: {},
			msdynmkt_emailbody: {},
			msdynmkt_emailcontentlanguage: {},
			msdynmkt_emailcontenttype: {},
			msdynmkt_emailId: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_placeholders: {},
			msdynmkt_previewhtml: {},
			msdynmkt_previewtext: {},
			msdynmkt_previewtext1: {},
			msdynmkt_purpose: {},
			msdynmkt_replytoemail: {},
			msdynmkt_senderid: {},
			msdynmkt_subject: {},
			msdynmkt_templateid: {},
			msdynmkt_textpart: {},
			msdynmkt_to: {},
			msdynmkt_topic: {},
			OwningBusinessUnit: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_journeydependency_dependency_msdynmkt_email: {},
			msdynmkt_marketingformsubmission_emailid: {},
			msdynmkt_msdynmkt_email_contact_emailid: {},
			msdynmkt_msdynmkt_email_lead_emailid: {},
			msdynmkt_msdynmkt_email_msdynmkt_teamsengagement_Email: {},
			msdynmkt_msdynmkt_email_msdynmkt_webinaremailjourney_webinaremail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_automaticallygeneratetextpart: {},
			msdynmkt_description: {},
			msdynmkt_designerhtml: {},
			msdynmkt_emailbody: {},
			msdynmkt_emailcontenttype: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_name: {},
			msdynmkt_placeholders: {},
			msdynmkt_previewtext: {},
			msdynmkt_replytoemail: {},
			msdynmkt_subject: {},
			msdynmkt_templateid: {},
			msdynmkt_textpart: {},
			msdynmkt_to: {},
			OwnerId: {},
			statuscode: {}
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
	OptionSet.msdynmkt_email = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_emailcontentlanguage : {
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
			English_United_Kingdom: 2057,
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
			Italian_Italy: 1040,
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
			Turkish_Turkiye: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
		},
		msdynmkt_emailcontenttype : {
			Default: 534120000,
			Double_opt_in_confirmation: 534120001
		},
		msdynmkt_intendeduse : {
			Confirmation_Request: 534120001,
			Default: 534120000
		},
		msdynmkt_messagedesignation : {
			Commercial: 534120000,
			Transactional: 534120001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 1,
			Inactive: 100,
			Ready_to_send: 2,
			Ready_to_send_editing: 3
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
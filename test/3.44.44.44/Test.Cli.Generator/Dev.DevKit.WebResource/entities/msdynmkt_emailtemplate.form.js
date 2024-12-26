'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormDesigner = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_compliancesettings: {},
			msdynmkt_compliancesettings3: {},
			msdynmkt_compliancesettings4: {},
			msdynmkt_compliancesettingscompanyaddress: {},
			msdynmkt_conditionalcontent: {},
			msdynmkt_consentcompliancegroupcontrol: {},
			msdynmkt_contenttype: {},
			msdynmkt_description: {},
			msdynmkt_designerhtml: {},
			msdynmkt_emailbody: {},
			msdynmkt_emailtemplateId: {},
			msdynmkt_formtosave: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_label: {},
			msdynmkt_language: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_name: {},
			msdynmkt_placeholders: {},
			msdynmkt_previewhtml: {},
			msdynmkt_previewtext: {},
			msdynmkt_purpose: {},
			msdynmkt_replytoemail: {},
			msdynmkt_subcategory: {},
			msdynmkt_subject: {},
			msdynmkt_textpart: {},
			msdynmkt_thumbnailimage: {},
			msdynmkt_topic: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			design_tab: {
				Section: {
					general_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: {}
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
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_previewtext: {},
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
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_Template_properties = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_compliancesettings: {},
			msdynmkt_compliancesettings3: {},
			msdynmkt_compliancesettingscompanyaddress: {},
			msdynmkt_consentcompliancegroupcontrol: {},
			msdynmkt_contenttype: {},
			msdynmkt_description: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_label: {},
			msdynmkt_language: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_name: {},
			msdynmkt_previewtext: {},
			msdynmkt_replytoemail: {},
			msdynmkt_subcategory: {},
			msdynmkt_subject: {},
			msdynmkt_textpart: {},
			msdynmkt_thumbnailimage: {},
			OwnerId: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			properties_tab: {
				Section: {
					email_header_section_5: {},
					EmailSettings: {},
					general_section: {},
					PlainText: {},
					SendSettings_expanded: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormFilter_form_for_template_gallery = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_label: {},
			msdynmkt_language: {},
			msdynmkt_marketingprovided: {},
			msdynmkt_messagedesignation: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_6A416E40_2D00_43BD_9527_A1DDF491C805: {
				Section: {
					_B0184AF9_4CDA_43A8_A2D1_9016C6271D37: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormGallery_Properties = function(executionContext, defaultWebResourceName) {
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
			ModifiedOn: {},
			msdynmkt_compliancesettings4: {},
			msdynmkt_description: {},
			msdynmkt_fromemail: {},
			msdynmkt_label: {},
			msdynmkt_language: {},
			msdynmkt_marketingprovided: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_name: {},
			msdynmkt_purpose: {},
			msdynmkt_replytoemail: {},
			OwnerId: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_7D8DDB65_13CC_445C_B9C6_6ED536C3C8E4: {
				Section: {
					_1AD9A7A3_544A_4F2B_BBA7_224CEF4889A5: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_msdynmkt_emailtemplate_msdynmkt_email: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_Template_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_automaticallygeneratetextpart: {},
			msdynmkt_compliancesettings: {},
			msdynmkt_compliancesettings3: {},
			msdynmkt_compliancesettings4: {},
			msdynmkt_compliancesettingscompanyaddress: {},
			msdynmkt_conditionalcontent: {},
			msdynmkt_designerhtml: {},
			msdynmkt_emailbody: {},
			msdynmkt_fromemail: {},
			msdynmkt_fromname: {},
			msdynmkt_language: {},
			msdynmkt_messagedesignation: {},
			msdynmkt_name: {},
			msdynmkt_placeholders: {},
			msdynmkt_previewtext: {},
			msdynmkt_replytoemail: {},
			msdynmkt_sourceemailid: {},
			msdynmkt_subject: {},
			msdynmkt_textpart: {},
			msdynmkt_thumbnailimage: {},
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
	OptionSet.msdynmkt_emailtemplate = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_category : {
			Custom_templates: 1,
			Gallery: 0
		},
		msdynmkt_contenttype : {
			Default: 534120000,
			Double_opt_in_confirmation: 534120001
		},
		msdynmkt_label : {
			Layout_enabled: 731570001,
			New: 731570000
		},
		msdynmkt_language : {
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
		msdynmkt_messagedesignation : {
			Commercial: 534120000,
			Transactional: 534120001
		},
		msdynmkt_subcategory : {
			Deals: 1,
			EventsWebinars: 3,
			Follow_up: 2,
			Informational: 4,
			Layouts: 6,
			New_product: 0,
			Transactional: 5
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 1,
			Inactive: 100,
			Ready_to_send: 2
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormExternal_subscription_center_main_edit_form = function(executionContext, defaultWebResourceName) {
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
			ConsentModelControl: {},
			msdynmkt_consentlink: {},
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_50411B10_BFF8_4C52_8A7A_A7CB432B6031: {
				Section: {
					_2CAF6558_3E1F_4818_B169_3B899E22C7FA: {},
					_3A6BBDDA_F370_44C4_B755_D77166E52602: {},
					_CC81843B_222B_483E_84E8_2F5269D683E6: {}
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
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: {},
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_compliancesettings3_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_ssc_allowemaildescription: {},
			msdynmkt_ssc_allowsmsdescription: {},
			msdynmkt_ssc_allowtrackingdescription: {},
			msdynmkt_ssc_consentchangereason: {},
			msdynmkt_ssc_description: {},
			msdynmkt_ssc_errorpagetext: {},
			msdynmkt_ssc_legaltext: {},
			msdynmkt_ssc_thankyoupagetext: {},
			msdynmkt_ssc_title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_26ADB7C3_FE93_4288_8256_E7D687A7AD8A: {
				Section: {
					_1BAC8B3A_3A6D_451C_B12E_BA6F1F245B23: {},
					_42968D14_2228_48B7_B4ED_DEC33F802892: {}
				}
			},
			_45A044D4_A4C4_46D7_A2E1_86958F9E5AA4: {
				Section: {
					tab_4_section_1: {}
				}
			},
			_A8AC080A_1C22_42B1_B511_FC1396A71A0D: {
				Section: {
					_2DDE596A_1081_4900_A78C_F2E69F3B03BA: {},
					_32EE62DB_5035_4ABA_982C_04EF14844F79: {},
					_D6912772_B4CD_4785_8363_1C90E96BCA87: {}
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
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: {},
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormMain_generic_form_for_Compliance_settings = function(executionContext, defaultWebResourceName) {
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
			ConsentModelControl: {},
			msdynmkt_consentlink: {},
			msdynmkt_consentlinktype: {},
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_ssc_allowemaildescription: {},
			msdynmkt_ssc_allowsmsdescription: {},
			msdynmkt_ssc_allowtrackingdescription: {},
			msdynmkt_ssc_consentchangereason: {},
			msdynmkt_ssc_description: {},
			msdynmkt_ssc_errorpagetext: {},
			msdynmkt_ssc_legaltext: {},
			msdynmkt_ssc_thankyoupagetext: {},
			msdynmkt_ssc_title: {},
			msdynmkt_subscriptioncenter: {},
			preview: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_FB129374_75DF_43FB_8716_95411810BEFB: {
				Section: {
					_1BEAF5C7_812E_41AF_87B4_D9457E20C75E: {},
					_2CAF6558_3E1F_4818_B169_3B899E22C7FA: {},
					_60868DBB_8724_4F64_99D4_74EC720B9E22: {},
					_90A5A858_9021_449B_A731_79BEC3C0A4B9: {},
					_AA95AA9D_8D9F_469C_9ED1_056DEEF62061: {},
					_CC81843B_222B_483E_84E8_2F5269D683E6: {}
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
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: {},
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPreference_center_main_edit_form = function(executionContext, defaultWebResourceName) {
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
			ConsentModelControl: {},
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_ssc_allowemaildescription: {},
			msdynmkt_ssc_allowsmsdescription: {},
			msdynmkt_ssc_allowtrackingdescription: {},
			msdynmkt_ssc_consentchangereason: {},
			msdynmkt_ssc_description: {},
			msdynmkt_ssc_errorpagetext: {},
			msdynmkt_ssc_legaltext: {},
			msdynmkt_ssc_thankyoupagetext: {},
			msdynmkt_ssc_title: {},
			preview: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_025423E2_0753_42B4_BFDB_6F912551BBCB: {
				Section: {
					_2CAF6558_3E1F_4818_B169_3B899E22C7FA: {},
					_4CCA2A95_E79B_46E6_ADB1_6701697236E9: {},
					_CC81843B_222B_483E_84E8_2F5269D683E6: {}
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
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: {},
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSubscription_center_main_edit_form = function(executionContext, defaultWebResourceName) {
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
			ConsentModelControl: {},
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_subscriptioncenter: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_D51AC0C0_FD59_46D3_B41B_C61DDBA2782F: {
				Section: {
					_2CAF6558_3E1F_4818_B169_3B899E22C7FA: {},
					_B1F81D59_C8CE_4C7D_9663_D7B9368FE64C: {},
					_CC81843B_222B_483E_84E8_2F5269D683E6: {}
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
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_email_compliancesettings3: {},
			msdynmkt_msdynmkt_compliancesettings3_msdynmkt_emailtemplate_compliancesettings3: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormExternal_subscription_center_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_consentlink: {},
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {}
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
	DevKit.FormPreference_center_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_ssc_allowsmsdescription: {},
			msdynmkt_ssc_allowtrackingdescription: {},
			msdynmkt_ssc_consentchangereason: {},
			msdynmkt_ssc_description: {},
			msdynmkt_ssc_emaildescription: {},
			msdynmkt_ssc_errorpagetext: {},
			msdynmkt_ssc_legaltext: {},
			msdynmkt_ssc_thankyoupagetext: {},
			msdynmkt_ssc_title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					preferencepagesection: {},
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {}
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
	DevKit.FormSubscription_center_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_consentlinktype: {},
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_subscriptioncenter: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					selectscsection: {},
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {}
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
	OptionSet.msdynmkt_compliancesettings3 = {
		msdynmkt_consentlinktype : {
			External_link: 534120002,
			Preference_center: 534120003,
			Preference_page: 534120000,
			Subscription_center: 534120001
		},
		msdynmkt_consentmodel : {
			Non_Restrictive: 534120001,
			Restrictive: 534120000
		},
		msdynmkt_jurisdiction : {
			GDPRCCPA: 534120000,
			Other: 534120001
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
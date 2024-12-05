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
			_8065E1ED_0362_49F0_BC28_BAEDB906E32B: {
				Section: {
					_3FEB1E85_024C_443C_9A03_2A85608AC1D8: {},
					_45AD733F_6D4E_4003_8D64_3E05F9ECCF89: {},
					_A485AA03_A4E8_4850_B764_9F9394A106FD: {}
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: {},
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_compliancesettings_Information = function(executionContext, defaultWebResourceName) {
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
			AddressControl: {},
			ConsentDocLinkControl: {},
			ConsentModelControl: {},
			DisclaimerControl: {},
			msdynmkt_consentmodel: {},
			msdynmkt_defaulttracking: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_marketinglogconsentchangesswitch: {},
			msdynmkt_marketingrespectconsentswitch: {},
			msdynmkt_name: {},
			msdynmkt_name1: {},
			msdynmkt_ssc_allowemaildescription: {},
			msdynmkt_ssc_allowsmsdescription: {},
			msdynmkt_ssc_allowtrackingdescription: {},
			msdynmkt_ssc_consentchangereason: {},
			msdynmkt_ssc_description: {},
			msdynmkt_ssc_errorpagetext: {},
			msdynmkt_ssc_legaltext: {},
			msdynmkt_ssc_thankyoupagetext: {},
			msdynmkt_ssc_title: {},
			OutboundDocLinkControl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_16565665_EE75_49A8_BCDA_F59FE127D2F7: {
				Section: {
					_6DEF07DB_64D5_4926_BB52_59170A475A4F: {}
				}
			},
			_E485AA03_A4E8_4850_B764_9F9394A106F1: {
				Section: {
					_0CD87215_07D5_4CF8_8BB6_6A47112A8947: {},
					_12128F3F_14C1_4A9A_A7D4_F7F43523285D: {},
					_3EA25173_750B_467B_8FD3_A7093550849D: {}
				}
			},
			_E485AA03_A4E8_4850_B764_9F9394A106FD: {
				Section: {
					_A485AA03_A4E8_4850_B764_9F9394A106FD: {},
					_B8E98F3F_14C1_4A9A_A7D4_F7F43523285D: {}
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: {},
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: {}
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
			_1CAF13BE_48D5_40AD_89AE_EB06E9DEC220: {
				Section: {
					_306DF968_3ADF_4B5E_BA99_901FAEB1142F: {},
					_505DF5EC_FFF0_4BB4_A457_6E0992187CED: {},
					_521A7D00_3D64_4AA4_851A_B8138CB710E8: {},
					_A78A820C_3D44_4518_B1DB_95AD101ED6D0: {},
					_C3F1017A_12DC_4EB6_BF3D_E4CF58C7D5ED: {},
					_DC5B6086_07A8_4239_A53A_FE6CCED8618D: {}
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: {},
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: {}
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
			_8065E1ED_0362_49F0_BC28_BAEDB906E32B: {
				Section: {
					_1D61EEAC_01DC_4EE1_A8EA_A163D020BD07: {},
					_3FEB1E85_024C_443C_9A03_2A85608AC1D8: {},
					_A485AA03_A4E8_4850_B764_9F9394A106FD: {}
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: {},
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: {}
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
			_8065E1ED_0362_49F0_BC28_BAEDB906E32B: {
				Section: {
					_3FEB1E85_024C_443C_9A03_2A85608AC1D8: {},
					_A485AA03_A4E8_4850_B764_9F9394A106FD: {},
					_E485AA03_A4E8_4850_B764_9F9394A106FC: {}
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
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_email_compliancesettings: {},
			msdynmkt_msdynmkt_compliancesettings_msdynmkt_emailtemplate_compliancesettings: {}
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
					basicinfosection: {},
					externallinksection: {},
					trackingconsentsection: {}
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
			tab_1: {
				Section: {
					basicinfosection: {},
					preferencepagesection: {},
					trackingconsentsection: {}
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
					basicinfosection: {},
					selectscsection: {},
					trackingconsentsection: {}
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
	OptionSet.msdynmkt_compliancesettings = {
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
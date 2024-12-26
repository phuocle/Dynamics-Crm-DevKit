'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormExternal_link_edit_form = function(executionContext, defaultWebResourceName) {
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
			defaulttrackingpurpose: {},
			description: {},
			DoubleOptInControl: {},
			msdynmkt_consentlink: {},
			msdynmkt_consentlinktype: {},
			msdynmkt_DOIStatus: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_quiettimesetting: {},
			MultienforcementPurposegrid: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			Purposegrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Consent_purposes: {
				Section: {
					Communication_purposes: {},
					Multienforcement_Communication_purposes: {},
					Tracking_purpose: {}
				}
			},
			Double_opt_in: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			MultienforcementPurposegrid: {},
			Purposegrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_compliancesettings4_formsubmission: {},
			msdynmkt_compliancesettings4_marketingform: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: {},
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: {},
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormMain_generic_form_for_Compliance_profiles = function(executionContext, defaultWebResourceName) {
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
			defaultpreferenceprofile: {},
			defaulttrackingpurpose: {},
			description: {},
			DoubleOptInControl: {},
			msdynmkt_consentlink: {},
			msdynmkt_consentlinktype: {},
			msdynmkt_DOIStatus: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_quiettimesetting: {},
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
			MultienforcementPurposegrid: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			preview: {},
			Purposegrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Consent_purposes: {
				Section: {
					Communication_purposes: {},
					Multienforcement_Communication_purposes: {},
					Tracking_purpose: {}
				}
			},
			Double_opt_in: {
				Section: {
				}
			},
			General: {
				Section: {
					Default_preference_center: {},
					External_link: {},
					General: {},
					Preference_page: {},
					quiet_time_setting: {},
					Subscription_center: {},
					Tracking_Consent: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			MultienforcementPurposegrid: {},
			Purposegrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_compliancesettings4_formsubmission: {},
			msdynmkt_compliancesettings4_marketingform: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: {},
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: {},
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPreference_center_edit_form = function(executionContext, defaultWebResourceName) {
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
			defaultpreferenceprofile: {},
			defaulttrackingpurpose: {},
			description: {},
			DoubleOptInControl: {},
			extended_form: {},
			msdynmkt_consentlinktype: {},
			msdynmkt_ConsentProviderId: {},
			msdynmkt_DOIStatus: {},
			msdynmkt_extendedentityId: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_quiettimesetting: {},
			MultienforcementPurposegrid: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			Purposegrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Consent_purposes: {
				Section: {
					Communication_purposes: {},
					Multienforcement_Communication_purposes: {},
					Tracking_purpose: {}
				}
			},
			Double_opt_in: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			MultienforcementPurposegrid: {},
			Purposegrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_compliancesettings4_formsubmission: {},
			msdynmkt_compliancesettings4_marketingform: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: {},
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: {},
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: {}
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
			_0081EC07_1089_4BC1_8037_9FDBDC01B5DF: {
				Section: {
					_248B0653_6483_42D6_AE03_B641DECBE974: {},
					_760AD881_733A_49D0_9009_C4156D48D4BF: {},
					_D933764E_3B6A_4FC8_AE79_592D49B40D40: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_compliancesettings4_formsubmission: {},
			msdynmkt_compliancesettings4_marketingform: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: {},
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: {},
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormPreference_page_edit_form = function(executionContext, defaultWebResourceName) {
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
			defaultpreferenceprofile: {},
			defaulttrackingpurpose: {},
			description: {},
			DoubleOptInControl: {},
			msdynmkt_consentlinktype: {},
			msdynmkt_DOIStatus: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_quiettimesetting: {},
			MultienforcementPurposegrid: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			Purposegrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Consent_purposes: {
				Section: {
					Communication_purposes: {},
					Multienforcement_Communication_purposes: {},
					Tracking_purpose: {}
				}
			},
			Double_opt_in: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			MultienforcementPurposegrid: {},
			Purposegrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_compliancesettings4_formsubmission: {},
			msdynmkt_compliancesettings4_marketingform: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: {},
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: {},
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSubscriptionCenterEditForm = function(executionContext, defaultWebResourceName) {
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
			defaulttrackingpurpose: {},
			description: {},
			DoubleOptInControl: {},
			msdynmkt_consentlinktype: {},
			msdynmkt_DOIStatus: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_quiettimesetting: {},
			msdynmkt_subscriptioncenter: {},
			MultienforcementPurposegrid: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			Purposegrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Consent_purposes: {
				Section: {
					Communication_purposes: {},
					Multienforcement_Communication_purposes: {},
					Tracking_purpose: {}
				}
			},
			Double_opt_in: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			MultienforcementPurposegrid: {},
			Purposegrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_compliancesettings4_formsubmission: {},
			msdynmkt_compliancesettings4_marketingform: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_email_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_emailtemplate_compliancesettings4: {},
			msdynmkt_msdynmkt_compliancesettings4_msdynmkt_pre: {},
			msdynmkt_msdynmkt_customchannelmessage_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_journey_DoubleOptInCompliance_ms: {},
			msdynmkt_msdynmkt_pushnotification_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_sms_compliance_msdynmkt_complian: {},
			msdynmkt_msdynmkt_uionly_compliancesettings4_lookup: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormDefault_preference_center_quick_create = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_uionly_link_existing_profile: {},
			msdynmkt_uionly_linked_profile: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					Existing_Consent: {},
					tab_1_column_1_section_1: {},
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
	DevKit.FormExternal_link_subscription_center_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_consentlinktype: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_ssc_emailtitle: {},
			msdynmkt_uionly_link_existing_profile: {},
			msdynmkt_uionly_linked_profile: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					Existing_consent: {},
					External_link: {},
					tab_1_column_1_section_1: {}
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
	DevKit.FormPreference_page_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_emaildescription: {},
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_ssc_allowsmsdescription: {},
			msdynmkt_ssc_consentchangereason: {},
			msdynmkt_ssc_errorpagetext: {},
			msdynmkt_ssc_legaltext: {},
			msdynmkt_ssc_thankyoupagetext: {},
			msdynmkt_ssc_title: {},
			msdynmkt_ssc_trackingdescription: {}
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
			msdynmkt_gettrackingconsents: {},
			msdynmkt_legaladdress: {},
			msdynmkt_name: {},
			msdynmkt_subscriptioncenter: {},
			msdynmkt_uionly_link_existing_profile: {},
			msdynmkt_uionly_linked_profile: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					Select_a_subscription_center: {},
					tab_1_column_1_section_1: {},
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
	OptionSet.msdynmkt_compliancesettings4 = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_consentlinktype : {
			External_link: 534120002,
			Preference_center: 534120003,
			Preference_page: 534120000,
			Subscription_center: 534120001
		},
		msdynmkt_DOIConfirmationType : {
			Text: 534120000,
			Url: 534120001
		},
		msdynmkt_doijobstatus : {
			Email_Create_Failed: 8,
			Email_Created: 1,
			Email_Publish_Failed: 9,
			Email_Published: 2,
			Failed: 7,
			Journey_Create_Failed: 10,
			Journey_Created: 3,
			Journey_Publish_Failed: 11,
			Journey_Published: 5,
			Journey_Publishing_Started: 4,
			Processing_Completed: 6,
			Request_Accepted: 0
		},
		msdynmkt_DOIStatus : {
			DeprecatedEnabled: 534120002,
			Enabled: 534120001,
			Not_enabled: 534120000
		},
		msdynmkt_extendedentityIdType : {
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
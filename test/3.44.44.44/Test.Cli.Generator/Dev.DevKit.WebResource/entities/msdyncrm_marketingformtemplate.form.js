'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingformtemplate_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_entityupdatebehavioronsubmit: {},
			msdyncrm_Label: {},
			msdyncrm_Language: {},
			msdyncrm_marketingprovided: {},
			msdyncrm_name: {},
			msdyncrm_purpose: {},
			msdyncrm_validforpagetype: {},
			msdyncrm_visualstyle: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_msdyncrm_marketingformtemplate_msdyncrm_marketingform_marketingformtemplate: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyncrm_marketingformtemplate_Information2 = function(executionContext, defaultWebResourceName) {
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
			FieldsUsedIntemplate: {},
			FormsUsingTemplate: {},
			ModifiedOn: {},
			msdyncrm_formcontrolmapping: {},
			msdyncrm_formdefinition: {},
			msdyncrm_formfieldmapping: {},
			msdyncrm_formtosave: {},
			msdyncrm_Label: {},
			msdyncrm_Language: {},
			msdyncrm_name: {},
			msdyncrm_purpose: {},
			msdyncrm_visualstyle: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_8387D531_3CF1_41C3_B97F_B2C9E794D8DA: {
				Section: {
					_8387D531_3CF1_41C3_B97F_B2C9E794D8DA_SECTION_2: {},
					_8387D531_3CF1_41C3_B97F_B2C9E794D8DA_SECTION_3: {},
					_8387D531_3CF1_41C3_B97F_B2C9E794D8DA_SECTION_4: {},
					_A79D205A_8AA9_4A35_AC5A_0B928B3560AD: {}
				}
			},
			Form_Definition: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_entityupdatebehavioronsubmit: {},
			msdyncrm_name: {},
			msdyncrm_validforpagetype: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			FieldsUsedIntemplate: {},
			FormsUsingTemplate: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_msdyncrm_marketingformtemplate_msdyncrm_marketingform_marketingformtemplate: {}
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
	OptionSet.msdyncrm_marketingformtemplate = {
		msdyncrm_entityupdatebehavioronsubmit : {
			Contacts_and_leads: 0,
			No_update: 3,
			Only_contacts: 1,
			Only_leads: 2
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
		msdyncrm_purpose : {
			Collateral_download: 3,
			Contact_capture: 0,
			Double_Opt_In_Email_based_confirmation: 7,
			Event_feedback: 5,
			Event_registration: 4,
			Lead_generation: 2,
			Newsletter_subscription: 1,
			Structural: 6
		},
		msdyncrm_Tag : {
			Layout_enabled: 192350001,
			New: 192350000
		},
		msdyncrm_validforpagetype : {
			Event_registration: 3,
			Forward_to_a_friend: 2,
			Landing_page: 0,
			Subscription_center: 1
		},
		msdyncrm_visualstyle : {
			_1_column: 0,
			_2_column: 1,
			Mixed: 2
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
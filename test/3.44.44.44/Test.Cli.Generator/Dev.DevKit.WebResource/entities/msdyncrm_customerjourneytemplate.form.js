'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_customerjourneytemplate_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_description: {},
			msdyncrm_entitytarget: {},
			msdyncrm_formtosave: {},
			msdyncrm_isrecurring: {},
			msdyncrm_Label: {},
			msdyncrm_Language: {},
			msdyncrm_name: {},
			msdyncrm_purposeoption: {},
			msdyncrm_recurrencecount: {},
			msdyncrm_recurrenceintervaldays: {},
			msdyncrm_workflowdefinition: {},
			OwnerId: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_45900481_9215_4C68_8EE2_71984CCB70FA: {
				Section: {
					_45900481_9215_4C68_8EE2_71984CCB70FA_SECTION_2: {},
					_45900481_9215_4C68_8EE2_71984CCB70FA_SECTION_3: {}
				}
			},
			designer: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_msdyncrm_customerjourneytemplate_msdyncrm_customerjourney_CustomerJourneyTemplate: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyncrm_customerjourneytemplate_New_Form = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_description: {},
			msdyncrm_entitytarget: {},
			msdyncrm_isrecurring: {},
			msdyncrm_Language: {},
			msdyncrm_name: {},
			msdyncrm_Origin: {},
			msdyncrm_purposeoption: {},
			msdyncrm_recurrencecount: {},
			msdyncrm_recurrenceintervaldays: {},
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
	OptionSet.msdyncrm_customerjourneytemplate = {
		msdyncrm_entitytarget : {
			Account: 1,
			Contact: 0
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
		msdyncrm_purposeoption : {
			Announcement: 0,
			Email_marketing: 6,
			Event_marketing: 3,
			Large_deals: 4,
			Multipurpose: 1,
			Newsletters: 5,
			Onboarding: 2
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
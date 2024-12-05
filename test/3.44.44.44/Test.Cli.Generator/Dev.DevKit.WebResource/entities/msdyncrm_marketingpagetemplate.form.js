'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingpagetemplate_Information = function(executionContext, defaultWebResourceName) {
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
			MarketingPagesUsingTemplate: {},
			ModifiedOn: {},
			msdyncrm_content: {},
			msdyncrm_contenttype: {},
			msdyncrm_formpagemapping: {},
			msdyncrm_formtosave: {},
			msdyncrm_Label: {},
			msdyncrm_Language: {},
			msdyncrm_markettype: {},
			msdyncrm_name: {},
			msdyncrm_optimizedfor: {},
			msdyncrm_purpose: {},
			msdyncrm_visualstyle: {},
			notescontrol: {},
			OwnerId: {},
			Related_Forms: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_section_2: {},
					tab_1_section_3: {},
					tab_1_section_4: {},
					tab_2_section_1: {}
				}
			},
			tab_2: {
				Section: {
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_name: {},
			msdyncrm_type: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			MarketingPagesUsingTemplate: {},
			Related_Forms: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_marketingpage_marketingpagetemplate: {},
			msdyncrm_marketingpagetemplate_formpagetemplate: {}
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
	OptionSet.msdyncrm_marketingpagetemplate = {
		msdyncrm_contenttype : {
			Company_background: 3,
			Confirmation_request: 6,
			Event_information: 4,
			Offers_and_discounts: 5,
			Product_information: 2,
			Product_launch: 1,
			Structural: 0
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
		msdyncrm_markettype : {
			All: 2,
			Consumer: 1,
			Enterprise: 0
		},
		msdyncrm_optimizedfor : {
			Desktop: 0,
			Mobile: 2,
			Tablet: 1
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
		msdyncrm_type : {
			Event_registration: 3,
			Forward_to_a_friend: 2,
			Landing_page: 0,
			Subscription_center: 1
		},
		msdyncrm_visualstyle : {
			Colorful: 2,
			Dark: 1,
			Light: 0,
			Other: 3
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
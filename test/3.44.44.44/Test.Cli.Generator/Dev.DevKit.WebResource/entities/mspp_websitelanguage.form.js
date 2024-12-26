'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_websitelanguage_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_description: {},
			mspp_displayname: {},
			mspp_languagecode: {},
			mspp_lcid: {},
			mspp_name: {},
			mspp_publishingstate: {},
			mspp_systemlanguage: {},
			mspp_websiteid: {},
			mspp_websitelcid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_6FA2C0DC_1585_4CA4_86A7_285DB3B27222: {
				Section: {
					_8F9F4F14_3F39_499E_AAD1_E161FABE27C6: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			mspp_mspp_websitelanguage_mspp_website_DefaultLanguage: {},
			mspp_websitelanguage_contentsnippet_contentsnippetlanguageid: {},
			mspp_websitelanguage_weblinkset: {},
			mspp_websitelanguage_webpage_webpagelanguageid: {}
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
	OptionSet.mspp_websitelanguage = {
		mspp_websitelcid : {
			Arabic: 1025,
			Basque_Basque: 1069,
			Bulgarian_Bulgaria: 1026,
			Catalan_Catalan: 1027,
			Chinese_China: 2052,
			Chinese_Hong_Kong_SAR: 3076,
			Chinese_Traditional: 1028,
			Croatian_Croatia: 1050,
			Czech_Czech_Republic: 1029,
			Danish_Denmark: 1030,
			Dutch_Netherlands: 1043,
			English: 1033,
			Estonian_Estonia: 1061,
			Finnish_Finland: 1035,
			French_France: 1036,
			Galician_Spain: 1110,
			German_Germany: 1031,
			Greek_Greece: 1032,
			Hebrew: 1037,
			Hindi_India: 1081,
			Hungarian_Hungary: 1038,
			Indonesian_Indonesia: 1057,
			Italian_Italy: 1040,
			Japanese_Japan: 1041,
			Kazakh_Kazakhstan: 1087,
			Korean_Korea: 1042,
			Latvian_Latvia: 1062,
			Lithuanian_Lithuania: 1063,
			Malay_Malaysia: 1086,
			Norwegian_Bokmal_Norway: 1044,
			Polish_Poland: 1045,
			Portuguese_Brazil: 1046,
			Portuguese_Portugal: 2070,
			Romanian_Romania: 1048,
			Russian_Russia: 1049,
			Serbian_Cyrillic_Serbia: 3098,
			Serbian_Latin_Serbia: 2074,
			Slovak_Slovakia: 1051,
			Slovenian_Slovenia: 1060,
			Spanish_Traditional_Sort_Spain: 3082,
			Swedish_Sweden: 1053,
			Thai_Thailand: 1054,
			Turkish_Turkiye: 1055,
			Ukrainian_Ukraine: 1058,
			Vietnamese_Vietnam: 1066
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
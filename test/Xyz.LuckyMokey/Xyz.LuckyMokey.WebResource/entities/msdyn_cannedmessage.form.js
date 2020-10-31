'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_cannedmessage_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Locale_Field: {},
			msdyn_message: {},
			msdyn_title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_cannedmessage = {
		msdyn_Locale_Field : {
			da_DK: 1030,
			de_DE: 1031,
			es_ES: 3082,
			en_US: 1033,
			fr_FR: 1036,
			it_IT: 1040,
			nl_NL: 1043,
			ja_JP: 1041,
			nb_NO: 1044,
			pt_BR: 1046,
			pt_PT: 2070,
			sv_SE: 1053,
			ar_SA: 1025,
			zh_CN: 2052,
			id_ID: 1057,
			pl_PL: 1045,
			ro_RO: 1048,
			ru_RU: 1049,
			th_TH: 1054,
			tr_TR: 1055,
			fi_FI: 1035,
			ko_KR: 1042,
			cs_CZ: 1029,
			he_IL: 1037,
			zh_HK: 3076,
			el_GR: 1032,
			hi_IN: 1081,
			hr_HR: 1050,
			et_EE: 1061,
			bg_BG: 1026,
			ca_ES: 1027,
			gl_ES: 1110,
			hu_HU: 1038
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
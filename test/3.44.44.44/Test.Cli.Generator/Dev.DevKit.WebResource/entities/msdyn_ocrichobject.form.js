'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_ocrichobject_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_ocrichobject_msdyn_ocrichobjectmap: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_ocrichobject_Information2 = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_ocrichobject_msdyn_ocrichobjectmap: {}
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
	OptionSet.msdyn_ocrichobject = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_locale : {
			ar_SA: 1025,
			bg_BG: 1026,
			ca_ES: 1027,
			cs_CZ: 1029,
			da_DK: 1030,
			de_DE: 1031,
			el_GR: 1032,
			en_US: 1033,
			es_ES: 3082,
			et_EE: 1061,
			eu_ES: 1069,
			fi_FI: 1035,
			fr_FR: 1036,
			gl_ES: 1110,
			he_IL: 1037,
			hi_IN: 1081,
			hr_HR: 1050,
			hu_HU: 1038,
			id_ID: 1057,
			it_IT: 1040,
			ja_JP: 1041,
			kk_KZ: 1087,
			ko_KR: 1042,
			lt_LT: 1063,
			lv_LV: 1062,
			ms_MY: 1086,
			nb_NO: 1044,
			nl_NL: 1043,
			pl_PL: 1045,
			pt_BR: 1046,
			pt_PT: 2070,
			ro_RO: 1048,
			ru_RU: 1049,
			sk_SK: 1051,
			sl_SI: 1060,
			sr_Cyrl_CS: 3098,
			sr_Latn_CS: 2074,
			sv_SE: 1053,
			th_TH: 1054,
			tr_TR: 1055,
			uk_UA: 1058,
			vi_VN: 1066,
			zh_CN: 2052,
			zh_HK: 3076,
			zh_TW: 1028
		},
		msdyn_ocrichobjecttype : {
			Apple_Pay: 192350006,
			Authentication: 192350007,
			Custom_JSON: 192350004,
			Forms: 192350009,
			List_Picker: 192350002,
			Suggested_Reply: 192350005,
			Time_Picker: 192350003,
			Video_Rich_Link: 192350001,
			Website_Rich_Link: 192350000
		},
		msdyn_streamsource : {
			Apple_Messages_for_Business: 192450000,
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			Googles_Business_Messages: 192450001,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			Voice_call: 192440000,
			WeChat: 192320000,
			WhatsApp: 192300000
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
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
			Tieng_A_Rap: 1025,
			Tieng_Anh: 1033,
			Tieng_Ba_Lan_Ba_Lan: 1045,
			Tieng_Basque_Basque: 1069,
			Tieng_Bo_Dao_Nha_Bo_Dao_Nha: 2070,
			Tieng_Bo_Dao_Nha_Brazil: 1046,
			Tieng_Bulgaria_Bulgaria: 1026,
			Tieng_Catalan_Catalan: 1027,
			Tieng_Croatia_Croatia: 1050,
			Tieng_Dan_Mach_Dan_Mach: 1030,
			Tieng_Do_Thai: 1037,
			Tieng_Duc_Duc: 1031,
			Tieng_Estonia_Estonia: 1061,
			Tieng_Galician_Tay_Ban_Nha: 1110,
			Tieng_Ha_Lan_Ha_Lan: 1043,
			Tieng_Han_Han_Quoc: 1042,
			Tieng_Hindi_An_Do: 1081,
			Tieng_Hungary_Hungary: 1038,
			Tieng_Hy_Lap_Hy_Lap: 1032,
			Tieng_Indonesia_Indonesia: 1057,
			Tieng_Italy_Italy: 1040,
			Tieng_Kazakh_Kazakhstan: 1087,
			Tieng_Latvia_Latvia: 1062,
			Tieng_Litva_Litva: 1063,
			Tieng_Ma_Lai_Malaysia: 1086,
			Tieng_Na_Uy_Bokmal_Na_Uy: 1044,
			Tieng_Nga_Nga: 1049,
			Tieng_Nhat_Nhat_Ban: 1041,
			Tieng_Phan_Lan_Phan_Lan: 1035,
			Tieng_Phap_Phap: 1036,
			Tieng_Romania_Romania: 1048,
			Tieng_Sec_Cong_hoa_Sec: 1029,
			Tieng_Serbia_Cyrillic_Serbia: 3098,
			Tieng_Serbia_Latinh_Serbia: 2074,
			Tieng_Slovak_Slovakia: 1051,
			Tieng_Slovenia_Slovenia: 1060,
			Tieng_Tay_Ban_Nha_Cach_sap_xep_Truyen_thong_Tay_Ban_Nha: 3082,
			Tieng_Thai_Thai_Lan: 1054,
			Tieng_Tho_Nhi_Ky_Tho_Nhi_Ky: 1055,
			Tieng_Thuy_Dien_Thuy_Dien: 1053,
			Tieng_Trung_Dac_khu_Hanh_chinh_Hong_Kong: 3076,
			Tieng_Trung_Phon_the: 1028,
			Tieng_Trung_Trung_Quoc: 2052,
			Tieng_Ukraina_Ukraina: 1058,
			Tieng_Viet_Viet_Nam: 1066
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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
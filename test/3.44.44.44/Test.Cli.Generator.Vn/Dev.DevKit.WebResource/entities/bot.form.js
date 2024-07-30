'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
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
			accesscontrolpolicy: {},
			applicationmanifestinformation: {},
			authenticationconfiguration: {},
			authenticationmode: {},
			authenticationtrigger: {},
			authorizedsecuritygroupids: {},
			BotComponents: {},
			ComponentCollections: {},
			Configuration: {},
			ConversationTranscripts: {},
			CreatedBy: {},
			CreatedOn: {},
			iconbase64: {},
			Language: {},
			ModifiedBy: {},
			ModifiedOn: {},
			name: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			ProviderConnectionReferenceId: {},
			publishedby: {},
			publishedon: {},
			RuntimeProvider: {},
			SchemaName: {},
			statecode: {},
			statuscode: {},
			SupportedLanguages: {},
			SynchronizationStatus: {},
			Template: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			BotComponents: {},
			ComponentCollections: {},
			ConversationTranscripts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bot_conversationtranscript: {},
			botcomponent_parent_bot: {},
			Comment_Artifact_Bot: {}
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
	OptionSet.bot = {
		accesscontrolpolicy : {
			Bat_ky: 0,
			Thanh_vien_nhom: 2,
			Trinh_doc_Copilot: 1
		},
		authenticationmode : {
			Azure_Active_Directory_tuy_chinh: 3,
			Chua_duoc_chi_dinh: 0,
			Duoc_tich_hop: 2,
			Khong_co: 1,
			OAuth2_chung: 4
		},
		authenticationtrigger : {
			Khi_can_thiet: 0,
			Luon_luon: 1
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		Language : {
			Tieng_A_Rap: 1025,
			Tieng_Anh: 1033,
			Tieng_Anh_Australia: 3081,
			Tieng_Anh_Vuong_quoc_Anh: 2057,
			Tieng_Ba_Lan: 1045,
			Tieng_Bo_Dao_Nha_Brazil: 1046,
			Tieng_Dan_Mach: 1030,
			Tieng_Duc: 1031,
			Tieng_Ha_Lan: 1043,
			Tieng_Han: 1042,
			Tieng_Hindi: 1081,
			Tieng_Hy_Lap: 1032,
			Tieng_Indonesia: 1057,
			Tieng_Italy: 1040,
			Tieng_Na_Uy: 1044,
			Tieng_Nga: 1049,
			Tieng_Nhat: 1041,
			Tieng_Phan_Lan: 1035,
			Tieng_Phap: 1036,
			Tieng_Phap_Canada: 3084,
			Tieng_Sec: 1029,
			Tieng_Tay_Ban_Nha: 1034,
			Tieng_Tay_Ban_Nha_Hoa_Ky: 21514,
			Tieng_Thai: 1054,
			Tieng_Tho_Nhi_Ky: 1055,
			Tieng_Thuy_Dien: 1053,
			Tieng_Trung_Gian_the: 2052,
			Tieng_Trung_Phon_the: 1028
		},
		RuntimeProvider : {
			Power_Virtual_Agents: 0,
			Vo_Nuance_Mix: 1
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Cung_cap: 3,
			Da_cung_cap: 1,
			Da_huy_cung_ung: 2,
			Khong_cung_cap_duoc: 4,
			Thieu_giay_phep: 5
		},
		SupportedLanguages : {
			Tieng_A_Rap: 1025,
			Tieng_Anh: 1033,
			Tieng_Anh_Australia: 3081,
			Tieng_Anh_Vuong_quoc_Anh: 2057,
			Tieng_Ba_Lan: 1045,
			Tieng_Bo_Dao_Nha_Brazil: 1046,
			Tieng_Dan_Mach: 1030,
			Tieng_Duc: 1031,
			Tieng_Ha_Lan: 1043,
			Tieng_Han: 1042,
			Tieng_Hindi: 1081,
			Tieng_Hy_Lap: 1032,
			Tieng_Indonesia: 1057,
			Tieng_Italy: 1040,
			Tieng_Na_Uy: 1044,
			Tieng_Nga: 1049,
			Tieng_Nhat: 1041,
			Tieng_Phan_Lan: 1035,
			Tieng_Phap: 1036,
			Tieng_Phap_Canada: 3084,
			Tieng_Sec: 1029,
			Tieng_Tay_Ban_Nha: 1034,
			Tieng_Tay_Ban_Nha_Hoa_Ky: 21514,
			Tieng_Thai: 1054,
			Tieng_Tho_Nhi_Ky: 1055,
			Tieng_Thuy_Dien: 1053,
			Tieng_Trung_Gian_the: 2052,
			Tieng_Trung_Phon_the: 1028
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
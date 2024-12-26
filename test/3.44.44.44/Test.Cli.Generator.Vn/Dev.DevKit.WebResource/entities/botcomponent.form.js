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
			AccentColor: {},
			Category: {},
			ChildComponents: {},
			ComponentType: {},
			Content: {},
			CreatedBy: {},
			CreatedOn: {},
			Data: {},
			Description: {},
			HelpLink: {},
			IconUrl: {},
			Language: {},
			ModifiedBy: {},
			ModifiedOn: {},
			name: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			ParentBotComponentCollectionId: {},
			ParentBotComponentId: {},
			ParentBotId: {},
			RelatedBotComponents: {},
			RelatedBots: {},
			RelatedProcesses: {},
			ReusePolicy: {},
			SchemaName: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			ChildComponents: {},
			RelatedBotComponents: {},
			RelatedBots: {},
			RelatedProcesses: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			botcomponent_parent_botcomponent: {},
			Comment_Artifact_BotComponent: {}
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
	OptionSet.botcomponent = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		ComponentType : {
			Ban_dich_bot_V2: 10,
			Bien_bot_V2: 12,
			Bien_so_bot: 2,
			Chu_de: 0,
			Chu_de_V2: 9,
			Dinh_kem_tep_bot: 14,
			GPT_tuy_chinh: 15,
			Hieu_ngon_ngu: 6,
			Hop_thoai: 4,
			Ky_nang: 1,
			Ky_nang_V2: 13,
			Luoc_do_hop_thoai: 8,
			Nguon_kien_thuc: 16,
			Tao_ngon_ngu: 7,
			Thuc_the_bot: 3,
			Thuc_the_bot_V2: 11,
			Trinh_kich_hoat: 5
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
		ReusePolicy : {
			Cong_khai: 2,
			Khong_co: 0,
			Rieng_tu: 1
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
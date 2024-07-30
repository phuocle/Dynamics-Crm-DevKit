'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormQuy_tac_tao_va_cap_nhat_ban_ghi = function(executionContext, defaultWebResourceName) {
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
			AllowUnknownSender: {},
			ChannelPropertyGroupId: {},
			CheckActiveEntitlement: {},
			CheckBlockedSocialProfile: {},
			CheckDirectMessages: {},
			CheckIfResolved: {},
			ConvertRuleItemsGrid: {},
			Name: {},
			OwnerId: {},
			QueueId: {},
			ResolvedSince: {},
			ResponseTemplateId: {},
			SendAutomaticResponse: {},
			SourceChannelTypeCode: {},
			SourceTypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					AutoResponseSettings: {},
					CaseDetails: {},
					ChannelProperties: {},
					ConvertToCaseSettings: {},
					EmailCaseConditions: {},
					SocialMonitoringCaseConditions: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			ConvertRuleItemsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			convertrule_convertruleitem: {}
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
	OptionSet.ConvertRule = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		SourceChannelTypeCode : {
			Cuoc_goi_Dien_thoai: 4210,
			Cuoc_hen: 4201,
			Email: 4202,
			Hoat_dong_mang_xa_hoi: 4216,
			Nhan_xet_Cong_thong_tin: 10311,
			Nhiem_vu: 4212,
			Quy_doi_Loi_moi: 10310,
			Tro_chuyen_qua_Teams: 10185
		},
		SourceTypeCode : {
			Email: 2,
			Giam_sat_mang_xa_hoi: 1
		},
		StateCode : {
			Ban_nhap: 0,
			Hien_hoat: 1
		},
		StatusCode : {
			Ban_nhap: 1,
			Hien_hoat: 2
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
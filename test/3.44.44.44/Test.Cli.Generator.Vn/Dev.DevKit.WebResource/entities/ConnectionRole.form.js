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
			Category: {},
			connectionroleobjecttypecodelist: {},
			Description: {},
			Name: {},
			reciprocalRoleGrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					_B0A70B0D_568C_10D3_1A3D_01C997A061C1: {},
					step1: {},
					step2: {}
				}
			},
			reciprocalroles: {
				Section: {
					roleGrid: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			reciprocalRoleGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

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
	OptionSet.ConnectionRole = {
		Category : {
			Ban_hang: 4,
			Ben_lien_quan: 1000,
			Dich_vu: 1002,
			Doanh_nghiep: 1,
			Gia_dinh: 2,
			Khac: 5,
			Nhom_Ban_hang: 1001,
			Xa_hoi: 3
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
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
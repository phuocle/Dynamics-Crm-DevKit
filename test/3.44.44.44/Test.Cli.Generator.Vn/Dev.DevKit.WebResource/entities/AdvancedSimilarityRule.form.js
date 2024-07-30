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
			Description: {},
			FilterResultByStatus: {},
			IsAzureMLRequired: {},
			MaxNumberKeyphrases: {},
			name: {},
			SourceEntity: {},
			textanalyticsentitymappings: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0: {
				Section: {
					_0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1: {}
				}
			},
			_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D: {
				Section: {
					_29B6CE18_08E1_4B87_B532_B18A6987BBB2: {},
					_89397326_037F_4A43_B362_6B9B04E7917B: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			textanalyticsentitymappings: {},
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
	OptionSet.AdvancedSimilarityRule = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		FilterResultByStatus : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		SourceEntity : {
			Truong_hop: 112
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormGoi = function(executionContext, defaultWebResourceName) {
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
			ModifiedBy: {},
			ModifiedOn: {},
			ModifiedOnBehalfBy: {},
			mspcat_AsyncOperationId: {},
			mspcat_IntendedDeploymentType: {},
			mspcat_Name: {},
			mspcat_Operation: {},
			mspcat_PackageFile: {},
			mspcat_ProcessingMessage: {},
			mspcat_SolutionUniqueName: {},
			OwnerId: {},
			statecode: {},
			statuscode: {},
			Subgrid_new_1: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Subgrid_new_1: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			mspcat_mspcat_catalogsubmissionfiles_PackageStor: {}
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
	OptionSet.mspcat_PackageStore = {
		mspcat_IntendedDeploymentType : {
			Mau: 526430001,
			Tieu_chuan: 526430000
		},
		mspcat_Operation : {
			Gui_den_danh_muc: 958090000,
			Tai_goi_len: 526430001,
			Tao_goi: 958090001
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Ban_nhap: 958090003,
			Da_gui: 958090004,
			Da_hoan_tat: 958090001,
			Dang_chay: 958090000,
			Dang_cho: 1,
			Khong_hoat_dong: 2,
			Khong_thanh_cong: 958090002
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
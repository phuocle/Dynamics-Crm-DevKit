'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormNhiem_vu = function(executionContext, defaultWebResourceName) {
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
			ActualDurationMinutes: {},
			Description: {},
			RegardingObjectId: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			TASK_TAB: {
				Section: {
					Description: {},
					tab_2_section_2: {},
					TASK: {},
					task_details: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			Task_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormNhiem_vu_Trai_nghiem_tuong_tac = function(executionContext, defaultWebResourceName) {
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
			ActualDurationMinutes: {},
			Description: {},
			RegardingObjectId: {},
			RegardingObjectId1: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_4: {
				Section: {
					tab_3_section_3: {},
					tab_4_section_2: {},
					tab_4_section_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			Task_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormBieu_mau_tao_nhanh_nhiem_vu = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			ActualDurationMinutes: {},
			Description: {},
			OwnerId: {},
			PriorityCode: {},
			RegardingObjectId: {},
			ScheduledEnd: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			createtask: {
				Section: {
					task: {},
					task_2: {},
					task_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Task = {
		ActivityTypeCode : {
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Cuoc_hen_lap_lai: 4251,
			Email: 4202,
			Fax: 4204,
			Nhan_xet_Cong_thong_tin: 10311,
			Nhiem_vu: 4212,
			Quy_doi_Loi_moi: 10310,
			Thu_tin: 4207,
			Tro_chuyen_qua_Teams: 10185
		},
		PriorityCode : {
			Binh_thuong: 1,
			Cao: 2,
			Thap: 0
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Da_hoan_thanh: 1,
			Da_huy: 2,
			Mo: 0
		},
		StatusCode : {
			Chua_bat_dau: 2,
			Da_hoan_thanh: 5,
			Da_huy: 6,
			Dang_doi_ai_do: 4,
			Dang_tien_hanh: 3,
			Tra_sau: 7
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
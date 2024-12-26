'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPortal_Comment = function(executionContext, defaultWebResourceName) {
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
			From: {},
			notescontrol: {},
			RegardingObjectId: {},
			Subject: {},
			To: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_54373510_FFDA_4801_B39B_1D305942D8D6: {
				Section: {
					_54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_2: {},
					_54373510_FFDA_4801_B39B_1D305942D8D6_SECTION_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			adx_PortalCommentDirectionCode: {},
			OwnerId: {},
			PriorityCode: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			adx_portalcomment_QueueItems: {}
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
	OptionSet.adx_portalcomment = {
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
		adx_PortalCommentDirectionCode : {
			Den: 1,
			Di: 2
		},
		Community : {
			Facebook: 1,
			Khac: 0,
			Twitter: 2
		},
		DeliveryPriorityCode : {
			Binh_thuong: 1,
			Cao: 2,
			Thap: 0
		},
		InstanceTypeCode : {
			Ban_ghi_chu_Lap_lai: 1,
			Khong_Lap_lai: 0,
			Ngoai_le_Lap_lai: 3,
			Ngoai_le_Tuong_lai_Lap_lai: 4,
			Phien_ban_Lap_lai: 2
		},
		PriorityCode : {
			Binh_thuong: 1,
			Cao: 2,
			Thap: 0
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Da_hoan_tat: 1,
			Da_huy: 2,
			Da_len_lich: 3,
			Mo: 0
		},
		StatusCode : {
			Da_gui: 2,
			Da_huy: 4,
			Da_len_lich: 5,
			Da_nhan: 3,
			Mo: 1
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
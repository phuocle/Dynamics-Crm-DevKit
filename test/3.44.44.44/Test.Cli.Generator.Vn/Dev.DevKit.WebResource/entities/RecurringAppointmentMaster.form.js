'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCuoc_hen_Lap_lai = function(executionContext, defaultWebResourceName) {
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
			IsOnlineMeeting: {},
			Location: {},
			OnlineMeetingJoinUrl: {},
			OptionalAttendees: {},
			RegardingObjectId: {},
			RequiredAttendees: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					appointment_description: {},
					general_information: {},
					tab_2_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	OptionSet.RecurringAppointmentMaster = {
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
		ExpansionStateCode : {
			Day_du: 2,
			Khong_mo_rong: 0,
			Mot_phan: 1
		},
		Instance : {
			Cuoi_cung: 5,
			Dau_tien: 1,
			Thu_ba: 3,
			Thu_hai: 2,
			Thu_tu: 4
		},
		InstanceTypeCode : {
			Ban_ghi_chu_Lap_lai: 1,
			Khong_Lap_lai: 0,
			Ngoai_le_Lap_lai: 3,
			Ngoai_le_Tuong_lai_Lap_lai: 4,
			Phien_ban_Lap_lai: 2
		},
		MonthOfYear : {
			Thang_1: 1,
			Thang_10: 10,
			Thang_11: 11,
			Thang_12: 12,
			Thang_2: 2,
			Thang_3: 3,
			Thang_4: 4,
			Thang_5: 5,
			Thang_6: 6,
			Thang_7: 7,
			Thang_8: 8,
			Thang_9: 9,
			Thang_trong_Nam_khong_hop_le: 0
		},
		OnlineMeetingType : {
			Cuoc_hop_trong_Teams: 1
		},
		PatternEndType : {
			Khong_co_Ngay_Ket_thuc: 1,
			Lan_xay_ra: 2,
			Ngay_Ket_thuc_Kieu: 3
		},
		PriorityCode : {
			Binh_thuong: 1,
			Cao: 2,
			Thap: 0
		},
		RecurrencePatternType : {
			Hang_nam: 3,
			Hang_ngay: 0,
			Hang_thang: 2,
			Hang_tuan: 1
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Da_hoan_thanh: 1,
			Da_huy: 2,
			Da_lap_lich: 3,
			Mo: 0
		},
		StatusCode : {
			Ban: 5,
			Chua_dut_khoat: 2,
			Da_hoan_thanh: 3,
			Da_huy: 4,
			Khong_co_mat_o_van_phong: 6,
			Ranh: 1
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
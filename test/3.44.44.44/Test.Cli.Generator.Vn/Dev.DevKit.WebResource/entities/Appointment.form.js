'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCuoc_hen = function(executionContext, defaultWebResourceName) {
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
			attachmentsGrid: {},
			Description: {},
			IsAllDayEvent: {},
			IsOnlineMeeting: {},
			Location: {},
			OnlineMeetingJoinUrl: {},
			OptionalAttendees: {},
			RegardingObjectId: {},
			requiredattendees: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			appointment: {
				Section: {
					appointment_description: {},
					attachments: {},
					general_information: {},
					scheduling_information: {},
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
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			appointment_activity_mime_attachment: {},
			Appointment_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCuoc_hen_Trai_nghiem_Tuong_tac = function(executionContext, defaultWebResourceName) {
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
			attachmentsGrid: {},
			Description: {},
			IsAllDayEvent: {},
			IsOnlineMeeting: {},
			Location: {},
			OnlineMeetingJoinUrl: {},
			OptionalAttendees: {},
			RegardingObjectId: {},
			RegardingObjectId1: {},
			requiredattendees: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_5: {
				Section: {
					appointment_description: {},
					tab_5_section_2: {},
					tab_5_section_3: {},
					tab_5_section_5: {}
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
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			appointment_activity_mime_attachment: {},
			Appointment_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTrinh_huong_dan = function(executionContext, defaultWebResourceName) {
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
			attachmentsGrid: {},
			Description: {},
			IsAllDayEvent: {},
			IsOnlineMeeting: {},
			Location: {},
			OnlineMeetingJoinUrl: {},
			OptionalAttendees: {},
			RegardingObjectId: {},
			requiredattendees: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			StatusCode: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			appointment: {
				Section: {
					appointment_description: {},
					attachments: {},
					general_information: {},
					Hidden_Section: {},
					scheduling_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			appointment_activity_mime_attachment: {},
			Appointment_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAppointment_quick_create_form = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			IsAllDayEvent: {},
			IsOnlineMeeting: {},
			Location: {},
			OptionalAttendees: {},
			OwnerId: {},
			PriorityCode: {},
			RegardingObjectId: {},
			requiredattendees: {},
			ScheduledDurationMinutes: {},
			ScheduledEnd: {},
			ScheduledStart: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
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
	OptionSet.Appointment = {
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
		AttachmentErrors : {
			Cuoc_hen_da_duoc_luu_thanh_ban_ghi_cuoc_hen_Microsoft_Dynamics_365_nhung_khong_the_luu_tat_ca_cac_tep_dinh_kem_voi_cuoc_hen_Khong_the_luu_mot_tep_dinh_kem_neu_tep_do_da_bi_chan_hoac_loai_tep_khong_hop_le: 1,
			Khong: 0
		},
		InstanceTypeCode : {
			Ban_ghi_chu_Lap_lai: 1,
			Khong_Lap_lai: 0,
			Ngoai_le_Lap_lai: 3,
			Ngoai_le_Tuong_lai_Lap_lai: 4,
			Phien_ban_Lap_lai: 2
		},
		OnlineMeetingType : {
			Cuoc_hop_trong_Teams: 1
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
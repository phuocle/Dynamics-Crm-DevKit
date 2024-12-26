'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEmail = function(executionContext, defaultWebResourceName) {
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
			attachmentsGrid: {},
			bcc: {},
			cc: {},
			Description: {},
			emailengagementactionscontrol: {},
			emailrecipientactivitycontrol: {},
			from: {},
			RegardingObjectId: {},
			Subject: {},
			to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Email: {
				Section: {
					attachments: {},
					email_description: {},
					emailengagementactions: {},
					Emailrecipient_section_6: {},
					recipient_information: {},
					Regarding_information: {},
					tab_4_section_2: {}
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
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			email_activity_mime_attachment: {},
			email_email_CorrelatedActivityId: {},
			Email_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_nang_cao = function(executionContext, defaultWebResourceName) {
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
			bcc: {},
			cc: {},
			Description: {},
			from: {},
			RegardingObjectId: {},
			Subject: {},
			to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Email: {
				Section: {
					recipient_information: {},
					Regarding_information: {}
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
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			email_activity_mime_attachment: {},
			email_email_CorrelatedActivityId: {},
			Email_QueueItem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEmail_Trai_nghiem_tuong_tac = function(executionContext, defaultWebResourceName) {
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
			bcc: {},
			cc: {},
			Description: {},
			from: {},
			RegardingObjectId: {},
			Subject: {},
			to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_2: {
				Section: {
					tab_2_section_2: {},
					tab_2_section_3: {},
					tab_2_section_5: {}
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
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			email_activity_mime_attachment: {},
			email_email_CorrelatedActivityId: {},
			Email_QueueItem: {}
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
			ActualDurationMinutes: {},
			attachmentsGrid: {},
			bcc: {},
			cc: {},
			Description: {},
			from: {},
			OwnerId: {},
			RegardingObjectId: {},
			StatusCode: {},
			Subject: {},
			to: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Email: {
				Section: {
					attachments: {},
					email_description: {},
					Hidden_Section: {},
					recipient_information: {},
					Regarding_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			PriorityCode: {},
			ScheduledEnd: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			attachmentsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			email_activity_mime_attachment: {},
			email_email_CorrelatedActivityId: {},
			Email_QueueItem: {}
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
	OptionSet.Email = {
		AcceptingEntityTypeCode : {
		},
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
		CorrelationMethod : {
			ConversationIndex: 5,
			CustomCorrelation: 7,
			Da_bo_qua: 1,
			InReplyTo: 3,
			Khong_co: 0,
			SmartMatching: 6,
			TrackingToken: 4,
			XHeader: 2
		},
		DeliveryPriorityCode : {
			Binh_thuong: 1,
			Cao: 2,
			Thap: 0
		},
		EmailReminderStatus : {
			NotSet: 0,
			ReminderExpired: 2,
			ReminderInvalid: 3,
			ReminderSet: 1
		},
		EmailReminderType : {
			Neu_email_khong_duoc_mo_vao: 1,
			Neu_toi_khong_nhan_duoc_thu_tra_loi_vao: 0,
			Van_cu_nhac_toi_vao: 2
		},
		EmailSenderObjectTypeCode : {
		},
		Notifications : {
			Khong: 0,
			Noi_dung_bi_cat_bot: 2,
			Thu_da_duoc_luu_thanh_ban_ghi_email_Microsoft_Dynamics_365_nhung_khong_the_luu_tat_ca_cac_tep_dinh_kem_voi_thu_Khong_the_luu_mot_tep_dinh_kem_neu_tep_do_da_bi_chan_hoac_loai_tep_khong_hop_le: 1
		},
		PriorityCode : {
			Binh_thuong: 1,
			Cao: 2,
			Thap: 0
		},
		RegardingObjectTypeCode : {
		},
		SendersAccountObjectTypeCode : {
		},
		StateCode : {
			Da_hoan_thanh: 1,
			Da_huy: 2,
			Mo: 0
		},
		StatusCode : {
			Ban_nhap: 1,
			Da_gui: 3,
			Da_hoan_thanh: 2,
			Da_huy: 5,
			Da_nhan: 4,
			Dang_cho_Gui: 6,
			Dang_gui: 7,
			Khong_thanh_cong: 8
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
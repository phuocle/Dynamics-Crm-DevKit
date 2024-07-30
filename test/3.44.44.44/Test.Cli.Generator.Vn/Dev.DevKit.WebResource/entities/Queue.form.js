'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormHang_doi = function(executionContext, defaultWebResourceName) {
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
			DefaultMailbox: {},
			Description: {},
			EMailAddress: {},
			IncomingEmailFilteringMethod: {},
			Name: {},
			OwnerId: {},
			QueueItemsGrid: {},
			queuemembersgrid: {},
			QueueViewType: {},
			RecordCreationAndUpdateRuleGrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					incoming_email: {},
					queue_information: {},
					QueueItems: {},
					QueueMembers: {},
					QueueMembersNoRecord: {},
					RecordCreationAndUpdateRule: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			QueueItemsGrid: {},
			queuemembersgrid: {},
			RecordCreationAndUpdateRuleGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			convertrule_queue: {},
			email_acceptingentity_queue: {},
			mailbox_regarding_queue: {},
			queue_convertruleitem: {},
			Queue_Email_EmailSender: {},
			queue_entries: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
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
			DefaultMailbox: {},
			Description: {},
			EMailAddress: {},
			IncomingEmailFilteringMethod: {},
			Name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					email_configuration: {},
					incoming_email: {},
					queue_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			convertrule_queue: {},
			email_acceptingentity_queue: {},
			mailbox_regarding_queue: {},
			queue_convertruleitem: {},
			Queue_Email_EmailSender: {},
			queue_entries: {}
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
	OptionSet.Queue = {
		EmailRouterAccessApproval : {
			Bi_tu_choi: 3,
			Da_phe_chuan: 1,
			Dang_cho_Phe_duyet: 2,
			Trong: 0
		},
		IncomingEmailDeliveryMethod : {
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email: 2,
			Hop_thu_chuyen_tiep: 3,
			Khong: 0
		},
		IncomingEmailFilteringMethod : {
			Email_khi_tra_loi_email_Dynamics_365: 1,
			Email_tu_ban_ghi_Dynamics_365_co_bat_email: 3,
			Email_tu_Khach_hang_tiem_nang_Nguoi_lien_he_va_Khach_hang_Dynamics_365: 2,
			Khong_co_email: 4,
			Tat_ca_thu_email: 0
		},
		OutgoingEmailDeliveryMethod : {
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email: 2,
			Khong: 0
		},
		QueueTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		QueueViewType : {
			Cong_khai: 0,
			Rieng_tu: 1
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
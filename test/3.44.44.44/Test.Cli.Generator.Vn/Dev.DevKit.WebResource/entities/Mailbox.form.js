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
			ACTDeliveryMethod: {},
			ACTStatus: {},
			AllowEmailConnectorToUseCredentials: {},
			EmailAddress: {},
			EmailServerProfile: {},
			IncomingEmailDeliveryMethod: {},
			IncomingEmailStatus: {},
			IsEmailAddressApprovedByO365Admin: {},
			IsForwardMailbox: {},
			Name: {},
			notescontrol: {},
			OauthAccessToken: {},
			OutgoingEmailDeliveryMethod: {},
			OutgoingEmailStatus: {},
			OwnerId: {},
			Password: {},
			ProcessAndDeleteEmails: {},
			RegardingObjectId: {},
			TestMailboxAccessCompletedOn: {},
			Username: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			MailboxStatusTab: {
				Section: {
					MailboxStatusTab_section_1: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			mailbox_email_ReceivingMailboxId: {},
			queue_defaultmailbox_mailbox: {},
			systemuser_defaultmailbox_mailbox: {},
			tracelog_Mailbox: {}
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
	OptionSet.Mailbox = {
		ACTDeliveryMethod : {
			Dong_bo_phia_May_chu: 1,
			Khong: 2,
			Microsoft_Dynamics_365_danh_cho_Outlook: 0
		},
		ACTStatus : {
			Khong_Chay: 0,
			Loi: 2,
			Thanh_cong: 1
		},
		EmailRouterAccessApproval : {
			Bi_tu_choi: 3,
			Da_phe_chuan: 1,
			Dang_cho_Phe_duyet: 2,
			Trong: 0
		},
		ExchangeContactsImportStatus : {
			Imported: 1,
			ImportFailed: 2,
			NotImported: 0
		},
		IncomingEmailDeliveryMethod : {
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email: 2,
			Hop_thu_chuyen_tiep: 3,
			Khong: 0,
			Microsoft_Dynamics_365_danh_cho_Outlook: 1
		},
		IncomingEmailStatus : {
			Khong_Chay: 0,
			Loi: 2,
			Thanh_cong: 1
		},
		MailboxStatus : {
			Khong_Chay: 0,
			Loi: 2,
			Thanh_cong: 1
		},
		OfficeAppsDeploymentStatus : {
			Da_cai_dat: 1,
			InstallFailed: 2,
			NotInstalled: 0,
			UninstallFailed: 3,
			UpgradeRequired: 4
		},
		OutgoingEmailDeliveryMethod : {
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email: 2,
			Khong: 0,
			Microsoft_Dynamics_365_danh_cho_Outlook: 1
		},
		OutgoingEmailStatus : {
			Khong_Chay: 0,
			Loi: 2,
			Thanh_cong: 1
		},
		RegardingObjectTypeCode : {
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
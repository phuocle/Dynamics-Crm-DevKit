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
			Name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			notes: {
				Section: {
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			adx_invitation_redemptionworkflow: {},
			AIPluginOperation_Workflow_Workflow: {},
			catalogassignment_workflow: {},
			Comment_Artifact_Workflow: {},
			convertruleitembase_workflowid: {},
			flowcapacityassignment_workflow: {},
			flowevent_workflow: {},
			lk_expiredprocess_processid: {},
			lk_newprocess_processid: {},
			lk_translationprocess_processid: {},
			msdyn_retrainworkflow_msdyn_toaimodel: {},
			msdyn_scheduleinferenceworkflow_msdyn_toaimodel: {},
			msdyn_workflow_msdyn_pmrecording: {},
			msdyn_workflow_msdyn_solutionhealthrule_resolutionaction: {},
			msdyn_workflow_msdyn_solutionhealthrule_Workflow: {},
			msdyn_workflow_slaitem_customtimecalculationworkflowid: {},
			process_processstage: {},
			process_processtrigger: {},
			regardingobjectid_process: {},
			slabase_workflowid: {},
			slaitembase_workflowid: {},
			workflow_active_workflow: {},
			workflow_dependencies: {},
			workflow_desktopflowbinary_Process: {},
			workflow_flowlog_cloudflowid: {},
			workflow_flowlog_desktopflowid: {},
			workflow_flowrun_Workflow: {},
			Workflow_licenseentitledby: {},
			workflow_parent_workflow: {},
			Workflow_routingrule: {},
			workflow_workflowbinary_Process: {},
			workflowid_convertrule: {},
			workflowid_profilerule: {}
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
	OptionSet.Workflow = {
		BusinessProcessType : {
			Dong_Cong_viec: 0,
			Dong_Tac_vu: 1
		},
		Category : {
			Dong_AI: 7,
			Dong_hien_dai: 5,
			Dong_man_hinh_nen: 6,
			Dong_quy_trinh_cong_viec: 4,
			Hanh_dong: 3,
			Hop_thoai: 1,
			Quy_tac_cong_viec: 2,
			Quy_trinh_lam_viec: 0
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		CreateStage : {
			Sau_khi_thao_tac: 40,
			Truoc_khi_thao_tac: 20
		},
		DeleteStage : {
			Sau_khi_thao_tac: 40,
			Truoc_khi_thao_tac: 20
		},
		Mode : {
			Chay_an: 0,
			Thoi_gian_thuc: 1
		},
		PrimaryEntity : {
		},
		ProcessTriggerScope : {
			Bieu_mau: 1,
			Thuc_the: 2
		},
		RendererObjectTypeCode : {
		},
		RunAs : {
			Chu_so_huu: 0,
			Nguoi_dung_Goi: 1
		},
		Scope : {
			Cap_tren_Don_vi_kinh_doanh_cap_duoi: 3,
			Don_vi_Kinh_doanh: 2,
			Nguoi_dung: 1,
			To_chuc: 4
		},
		StateCode : {
			Ban_nhap: 0,
			Da_kich_hoat: 1,
			Da_tam_ngung: 2
		},
		StatusCode : {
			Ban_nhap: 1,
			CompanyDLPViolation: 3,
			Da_kich_hoat: 2
		},
		ThrottlingBehavior : {
			Khong_co: 0,
			Nhom_doi_tuong_thue: 1
		},
		Type : {
			Dinh_nghia: 1,
			Kich_hoat: 2,
			Mau: 3
		},
		UIFlowType : {
			Dang_ghi: 101,
			Power_Automate_Desktop: 2,
			Selenium_IDE: 1,
			Trinh_ghi_Windows_V1: 0
		},
		UpdateStage : {
			Sau_khi_thao_tac: 40,
			Truoc_khi_thao_tac: 20
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
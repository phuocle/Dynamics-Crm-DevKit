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
			CreatedBy: {},
			CreatedOn: {},
			filenameattachment: {},
			FileSize: {},
			IsDocument: {},
			ModifiedBy: {},
			ModifiedOn: {},
			NoteText: {},
			OwnerId: {},
			regardingobject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					account_information: {},
					attachment_information: {},
					content_information: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormBieu_mau_tao_nhanh_ghi_chu = function(executionContext, defaultWebResourceName) {
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
			NoteText: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					notes_information: {}
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
	OptionSet.Annotation = {
		ObjectIdTypeCode : {
		},
		ObjectTypeCode : {
			Bao_gia: 1084,
			Cam_ket: 4215,
			Chi_dinh_Nguon_luc: 4006,
			Chien_dich: 4400,
			Co_hoi: 3,
			Co_soThiet_bi: 4000,
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Danh_sach_Khach_hang_Tiep_thi: 4300,
			Dich_vu: 4001,
			Doi_thu_canh_tranh: 123,
			Don_hang: 1088,
			Dong_bao_gia: 4211,
			Dong_Co_hoi: 4208,
			Dong_don_hang: 4209,
			Email: 4202,
			Fax: 4204,
			Giai_quyet_Truong_hop: 4206,
			Hoa_don: 1090,
			Hoat_dong_Chien_dich: 4402,
			Hoat_dong_dich_vu: 4214,
			Hop_dong: 1010,
			Khach_hang_tiem_nang: 4,
			Lich: 4003,
			Mo_ta_Hop_dong: 1011,
			Muc_quy_tac_dinh_tuyen: 8199,
			Nguoi_lien_he: 2,
			Nhap_Hang_loat: 4407,
			Nhiem_vu: 4212,
			Phan_hoi_ve_Chien_dich: 4401,
			Quy_tac_Dinh_tuyen: 8181,
			San_pham: 1024,
			Tai_khoan: 1,
			Thu_tin: 4207,
			Truong_hop: 112
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
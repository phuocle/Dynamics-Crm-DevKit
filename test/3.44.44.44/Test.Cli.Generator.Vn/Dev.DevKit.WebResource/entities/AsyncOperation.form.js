'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAsyncOperation_Information = function(executionContext, defaultWebResourceName) {
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
			CompletedOn: {},
			CreatedOn: {},
			FriendlyMessage: {},
			Message: {},
			Name: {},
			OperationType: {},
			OwnerId: {},
			RegardingObjectId: {},
			RetryCount: {},
			WebResource_systemjob: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			generaltab: {
				Section: {
					custom: {},
					general: {},
					systemlinksection: {}
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AsyncOperation = {
		OperationType : {
			AI_Builder_Prediction_Events: 190690092,
			AI_Builder_Training_Events: 190690091,
			Async_Restore_Job: 187,
			Bien_co_He_thong: 1,
			Cap_nhat_Co_so_du_lieu_cua_To_chuc: 44,
			Cap_nhat_Giai_phap: 45,
			Cap_nhat_Khoang_thoi_gian_Thong_ke: 24,
			Cap_nhat_Ma_phu_hop: 12,
			Cap_nhat_Trang_thai_Bai_viet_trong_Co_so_kien_thuc: 65,
			Cap_nhat_Trang_thai_Hop_dong: 27,
			Cap_nhat_Trang_thai_Quyen_duoc_huong: 56,
			Cap_phep_Goi_Ngon_ngu: 43,
			Cascade_Assign_All_Async_Operation: 105,
			Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation: 12801,
			CascadeAssign: 90,
			CascadeDelete: 91,
			Catalog_service_asyc_operation_to_poll_for_a_solution_checker_request: 335,
			Catalog_service_asyc_operation_to_submit_a_solution_checker_request: 336,
			Chi_muc_Danh_muc_Noi_dung_Day_du_cua_To_chuc: 25,
			Chien_dich_Nhanh_gon: 11,
			Chuyen_doi_Hanh_vi_Ngay_Va_Gio: 62,
			Cong_viec_bao_tri_DBCC_SHRINKDATABASE: 28,
			Cong_viec_bao_tri_DBCC_SHRINKFILE: 29,
			Cong_viec_bao_tri_lap_chi_muc_lai_tat_ca_chi_muc: 30,
			Cong_viec_Bat_che_do_vo_hieu_hoa_noi_dung_cap_nhat_cho_truong_hop_da_giai_quyet: 87,
			Cong_viec_di_chuyen_ghi_chu_sang_tep_dinh_kem: 85,
			Dang_len_Yammer: 49,
			Di_chuyen_noi_dung_bai_viet_sang_bo_luu_tru_tep: 86,
			Dich_vu_Xoa: 14,
			Dieu_chinh_Co_so_du_lieu: 21,
			Don_dep_Thanh_phan_Giai_phap: 71,
			Don_sach_cac_cau_phan_quy_trinh_lam_viec_khong_hoat_dong: 32,
			Dong_bo_Dang_ky_Nguon_luc: 68,
			Dong_bo_hoa_so_do_bang_Synapse: 307,
			Du_lieu_Phan_tich_Chuyen_doi: 4,
			Email_Hang_loat: 2,
			Hoat_dong_Dang_dien_ra: 50,
			Hoat_dong_khong_dong_thoi_Cap_nhat_dong_hien_dai: 101,
			Hoat_dong_khong_dong_thoi_Chia_giai_doan_va_nang_cap: 211,
			Hoat_dong_khong_dong_thoi_Cung_cap_ngon_ngu: 209,
			Hoat_dong_khong_dong_thoi_Dang_ky_san_phamdich_vu: 305,
			Hoat_dong_khong_dong_thoi_diem_cuoi_TDS_cung_cap_chuc_nang_TVF_moi_va_cap_quyen: 330,
			Hoat_dong_khong_dong_thoi_Do_cai_dat_giai_phap: 208,
			Hoat_dong_khong_dong_thoi_doi_voi_goi_tuy_chinh_trien_khai_FinOps: 332,
			Hoat_dong_khong_dong_thoi_Dong_bo_hoa_co_so_du_lieu_FinOps: 308,
			Hoat_dong_khong_dong_thoi_Goi_tao_dich_vu_danh_muc: 320,
			Hoat_dong_khong_dong_thoi_Gui_yeu_cau_phe_duyet_cua_dich_vu_danh_muc: 321,
			Hoat_dong_khong_dong_thoi_Huy_He_thong: 103,
			Hoat_dong_khong_dong_thoi_Khong_dong_bo_luu_tru: 102,
			Hoat_dong_khong_dong_thoi_Kiem_tra_don_vi_FinOps: 309,
			Hoat_dong_khong_dong_thoi_Nhap_ban_dich: 210,
			Hoat_dong_khong_dong_thoi_Phat_hanh_tat_ca: 204,
			Hoat_dong_khong_dong_thoi_Phi_chuan_hoa: 239,
			Hoat_dong_khong_dong_thoi_Sap_nhap_xep_tang: 89,
			Hoat_dong_khong_dong_thoi_Thuc_thi_luu_tru: 301,
			Hoat_dong_khong_dong_thoi_Trien_khai_FinOps: 302,
			Hoat_dong_khong_dong_thoi_Xoa_va_tang_cap: 207,
			Hoat_dong_khong_dong_thoi_Yeu_cau_cai_dat_cua_dich_vu_danh_muc: 322,
			Hoat_dong_luu_tru_hang_loat: 300,
			Hoat_dong_Sieu_du_lieu_cua_Mo_dun_Ung_dung: 72,
			Hoat_dong_Trinh_mo_rong_Su_kien: 92,
			Hoat_dong_xoa_noi_dung_da_luu_tru: 304,
			Kiem_tra_cac_Ban_cap_nhat_Goi_Ngon_ngu: 42,
			Kiem_tra_Tinh_trang_Ma_hoa: 53,
			Lam_moi_Don_vi_Kinh_doanh_cho_cac_Ho_so_thuoc_So_huu_cua_chu_the_Chinh: 95,
			Mo_rong_Chuoi_Lap_lai: 35,
			Nhap: 5,
			Nhap_Chuyen_tiep: 59,
			Nhap_Du_lieu_Mau: 38,
			Nhap_Sieu_du_lieu_Giai_phap: 93,
			Phan_phoi_Hoat_dong: 6,
			Phan_tich_Tep_Nhap: 3,
			Phat_hanh_Quy_tac_Phat_hien_Su_trung_lap: 7,
			Phat_hien_Trung_lap_Hang_loat: 8,
			Process_Table_For_RecycleBin: 104,
			Provision_language_for_user: 201,
			Quan_ly_Chi_muc: 15,
			Quy_trinh_con_Nhap: 17,
			Quy_trinh_con_Xoa_Hang_loat: 23,
			Quy_trinh_lam_viec: 10,
			Sao_luu_nhat_ky_co_so_du_lieu: 26,
			Tao_Chi_muc_EntityKey: 63,
			Tao_hoac_lam_moi_thuc_the_ao: 98,
			Tao_lai_Du_lieu_Bao_cao_hien_trang_DocChia_se: 47,
			Tao_lai_Du_lieu_Bao_cao_hien_trang_So_luong_Hang_Thuc_the: 46,
			Tao_Phan_vung_Kiem_tra: 41,
			Thao_tac_lam_moi_cac_thanh_phan_tich_hop_thoi_gian_chay_khong_dong_bo: 250,
			Thao_tac_nhap_giai_phap_khong_dong_bo: 203,
			Thao_tac_Phat_hien_Bat_thuong_ALM: 73,
			Thao_tac_Sieu_du_lieu_May_khach_trong_Ruy_bang: 76,
			Thao_tac_Trinh_mo_rong_CallbackRegistration: 79,
			Thao_tac_xep_tang_cac_quyen_FlowSession_khong_dong_bo: 100,
			Thao_tac_xuat_giai_phap_khong_dong_bo: 202,
			The_Ho_tro_Moi_quan_he: 69,
			Thong_bao_cua_Dong: 75,
			Thong_bao_Gioi_han_Bo_nho: 31,
			Thu_hoi_Quyen_truy_cap_ke_thua: 96,
			Thu_thap_Du_lieu_SQM: 9,
			Thu_thap_Thong_ke_Co_so_du_lieu_cua_To_chuc: 19,
			Thu_thap_Thong_ke_Quy_mo_cua_To_chuc: 20,
			Thu_thap_Thong_ke_ve_To_chuc: 16,
			Thuc_thi_cau_hinh_xu_ly_du_lieu: 306,
			Thuc_thi_Yeu_cau_Khong_dong_bo: 54,
			Tinh_toan_Hang_loat_Truong_Tong_so: 58,
			Tinh_toan_Kich_thuoc_Bo_nho_cua_To_chuc: 18,
			Tinh_toan_Kich_thuoc_Bo_nho_Toi_da_cua_To_chuc: 22,
			Tinh_toan_Truong_Tong_so: 57,
			Tong_so_Muc_tieu: 40,
			Truy_cap_Kiem_tra_Hop_thu: 52,
			Xep_tang_di_chuyen_goc_hoat_dong_khong_dong_bo_DB: 88,
			Xoa_ban_ghi_Bang_dan_hoi_hoac_Bang_SQL_lien_quan_khi_ban_ghi_Bang_dan_hoi_bi_xoa: 334,
			Xoa_ban_ghi_Bang_dan_hoi_lien_quan_khi_ban_ghi_SQL_bi_xoa: 333,
			Xoa_Hang_loat: 13,
			Xoa_hang_loat_Tep_dinh_kem: 94,
			Xu_ly_Email_Den: 51
		},
		OwningExtensionTypeCode : {
		},
		PrimaryEntityType : {
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Da_hoan_thanh: 3,
			Da_khoa: 2,
			Da_treo: 1,
			San_sang: 0
		},
		StatusCode : {
			Da_huy: 32,
			Da_thanh_cong: 30,
			Dang_cho: 10,
			Dang_cho_nguon_luc: 0,
			Dang_huy: 22,
			Dang_tam_dung: 21,
			Dang_tien_hanh: 20,
			Khong_thanh_cong: 31
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
'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ServiceEndpoint = {
		AuthType : {
			ACS: 1,
			Chuoi_Truy_van_Http: 6,
			Connection_String: 7,
			Khoa_SAS: 2,
			Khoa_Webhook: 4,
			Ma_thong_bao_SAS: 3,
			Phim_truy_nhap: 8,
			Tieu_de_Http: 5
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		ConnectionMode : {
			Binh_thuong: 1,
			Da_hop_nhat: 2
		},
		Contract : {
			Chu_de: 5,
			Data_Lake_duoc_quan_ly: 10,
			Hang_doi: 2,
			Hang_doi_On_dinh: 6,
			Luoi_su_kien: 9,
			OneWay: 1,
			Phan_con_lai: 3,
			Trung_tam_Su_kien: 7,
			TwoWay: 4,
			Webhook: 8
		},
		MessageCharset : {
			Mac_dinh: 0,
			UTF8: 1
		},
		MessageFormat : {
			Json: 2,
			Van_ban_XML: 3,
			XML_nhi_phan: 1
		},
		NamespaceFormat : {
			Dia_chi_Vung_ten: 2,
			Ten_cua_Vung_ten: 1
		},
		SchemaType : {
			Luoi_su_kien: 1,
			Su_kien_dam_may: 2
		},
		UserClaim : {
			Khong: 1,
			UserId: 2,
			UserInfo: 3
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
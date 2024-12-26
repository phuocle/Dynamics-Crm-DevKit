//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AuditApi {
		/**
		* DynamicsCrm.DevKit AuditApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Thao tác người dùng có thể thực hiện để tạo ra thay đổi */
		readonly Action: OptionSet.Audit.Action;
		/** Additional Info for Audit */
		AdditionalInfo: string;
		/** Chứa CSV của thuộc tính siêu dữ liệu ColumnNumber */
		readonly AttributeMask: string;
		/** Mã định danh duy nhất của phiên bản kiểm tra. */
		readonly AuditId: string;
		/** Mã định danh duy nhất của người dùng gọi trong trường hợp cuộc gọi được cá nhân hóa */
		readonly CallingUserId: string;
		/** Chứa CSV gồm những giá trị cũ của tất cả các thuộc tính có thuộc tính IsAuditEnabled ở trạng thái Đúng và đang được thay đổi */
		readonly ChangeData: string;
		/** Ngày và giờ tạo bản ghi kiểm tra lần cuối. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Thao tác dẫn đến kiểm tra--thao tác này bao gồm tạo, xóa hoặc cập nhật */
		readonly Operation: OptionSet.Audit.Operation;
		/** Mã định danh duy nhất cho nhiều thay đổi là một phần trong một thao tác; trường này chứa cùng một GUID cho tất cả các hàng kiểm tra được tạo trong một giao dịch */
		readonly TransactionId: string;
		/** Thông tin bổ sung liên quan tới người dùng đã gây ra sự thay đổi. */
		UserAdditionalInfo: string;
		/** Mã định danh duy nhất của người dùng tạo ra thay đổi */
		readonly userid: string;
		/** Version number of the audit. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Thao tác người dùng có thể thực hiện để tạo ra thay đổi */
			readonly Action: string;
			/** Additional Info for Audit */
			readonly AdditionalInfo: string;
			/** Chứa CSV của thuộc tính siêu dữ liệu ColumnNumber */
			readonly AttributeMask: string;
			/** Mã định danh duy nhất của phiên bản kiểm tra. */
			readonly AuditId: string;
			/** Mã định danh duy nhất của người dùng gọi trong trường hợp cuộc gọi được cá nhân hóa */
			readonly CallingUserId: string;
			/** Chứa CSV gồm những giá trị cũ của tất cả các thuộc tính có thuộc tính IsAuditEnabled ở trạng thái Đúng và đang được thay đổi */
			readonly ChangeData: string;
			/** Ngày và giờ tạo bản ghi kiểm tra lần cuối. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Thao tác dẫn đến kiểm tra--thao tác này bao gồm tạo, xóa hoặc cập nhật */
			readonly Operation: string;
			/** Mã định danh duy nhất cho nhiều thay đổi là một phần trong một thao tác; trường này chứa cùng một GUID cho tất cả các hàng kiểm tra được tạo trong một giao dịch */
			readonly TransactionId: string;
			/** Thông tin bổ sung liên quan tới người dùng đã gây ra sự thay đổi. */
			readonly UserAdditionalInfo: string;
			/** Mã định danh duy nhất của người dùng tạo ra thay đổi */
			readonly userid: string;
			/** Version number of the audit. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Audit {
		enum Action {
			/** 60 */
			Anh_xa_Nhap,
			/** 122 */
			ApplicationBasedAccessAllowed,
			/** 121 */
			ApplicationBasedAccessDenied,
			/** 115 */
			Archive,
			/** 2 */
			Cap_nhat,
			/** 14 */
			Chia_se,
			/** 63 */
			Da_bat_cho_to_chuc,
			/** 105 */
			Da_bat_dau_Kiem_tra_Thuc_the,
			/** 106 */
			Da_bat_dau_Kiem_tra_Thuoc_tinh,
			/** 112 */
			Da_bat_dau_Kiem_tra_Truy_cap_Nguoi_dung,
			/** 107 */
			Da_bat_Kiem_tra,
			/** 108 */
			Da_dung_Kiem_tra_Thuc_the,
			/** 109 */
			Da_dung_Kiem_tra_Thuoc_tinh,
			/** 113 */
			Da_dung_Kiem_tra_Truy_cap_Nguoi_dung,
			/** 110 */
			Da_tat_Kiem_tra,
			/** 23 */
			Da_tra,
			/** 50 */
			Dang_ky,
			/** 46 */
			Dang_xu_ly_Noi_bo,
			/** 41 */
			Dat_Trang_thai,
			/** 24 */
			Dinh_tinh,
			/** 16 */
			Dong,
			/** 5 */
			Dung_kich_hoat,
			/** 34 */
			Dung_lien_ket_Thuc_the,
			/** 13 */
			Gan,
			/** 55 */
			Gan_Vai_tro_cho_Nguoi_dung,
			/** 53 */
			Gan_Vai_tro_cho_Nhom,
			/** 42 */
			Gia_han,
			/** 20 */
			Giai_quyet,
			/** 26 */
			Gui,
			/** 62 */
			Gui_Email_Truc_tiep,
			/** 29 */
			Hoa_don,
			/** 18 */
			Hoan_thanh,
			/** 12 */
			Hop_nhat,
			/** 17 */
			Huy,
			/** 25 */
			Huy_tu_cach,
			/** 119 */
			IPFirewallAcccesAllowed,
			/** 118 */
			IPFirewallAcccesDenied,
			/** 49 */
			Khong_chia_se,
			/** 0 */
			Khong_xac_dinh,
			/** 4 */
			Kich_hoat,
			/** 47 */
			Len_lich_lai,
			/** 33 */
			Lien_ket_Thuc_the,
			/** 58 */
			Loai_bo_Dac_quyen_khoi_Vai_tro,
			/** 40 */
			Loai_bo_Hang_thay_the,
			/** 38 */
			Loai_bo_Muc,
			/** 32 */
			Loai_bo_Thanh_vien_32,
			/** 36 */
			Loai_bo_Thanh_vien_36,
			/** 56 */
			Loai_bo_Vai_tro_khoi_Nguoi_dung,
			/** 54 */
			Loai_bo_Vai_tro_khoi_Nhom,
			/** 21 */
			Mo_lai,
			/** 11 */
			Phan_tang,
			/** 28 */
			Phe_duyet,
			/** 120 */
			Restore,
			/** 116 */
			Retain,
			/** 117 */
			RollbackRetain,
			/** 61 */
			Sao_y,
			/** 48 */
			Sua_doi_Chia_se,
			/** 43 */
			Sua_lai,
			/** 1 */
			Tao,
			/** 51 */
			Tao_Bao_gia_tu_Co_hoi,
			/** 44 */
			Thang,
			/** 102 */
			Thay_doi_Kiem_tra_o_Cap_do_Thuc_the,
			/** 103 */
			Thay_doi_Kiem_tra_o_Cap_do_Thuoc_tinh,
			/** 104 */
			Thay_doi_Kiem_tra_o_Cap_do_To_chuc,
			/** 59 */
			Thay_the_Dac_quyen_trong_Vai_tro,
			/** 57 */
			Them_Dac_quyen_vao_Vai_tro,
			/** 39 */
			Them_Hang_thay_the,
			/** 37 */
			Them_Muc,
			/** 31 */
			Them_Thanh_vien_31,
			/** 35 */
			Them_Thanh_vien_35,
			/** 52 */
			Them_vao_Hang_doi,
			/** 45 */
			Thua,
			/** 22 */
			Thuc_hien,
			/** 30 */
			Treo,
			/** 65 */
			Truy_cap_Nguoi_dung_qua_Dich_vu_Web,
			/** 64 */
			Truy_cap_Nguoi_dung_qua_Web,
			/** 15 */
			Truy_xuat,
			/** 27 */
			Tu_choi,
			/** 6 */
			Upsert,
			/** 3 */
			Xoa,
			/** 111 */
			Xoa_Nhat_ky_Kiem_tra,
			/** 100 */
			Xoa_Thuc_the,
			/** 101 */
			Xoa_Thuoc_tinh
		}
		enum ObjectTypeCode {
		}
		enum Operation {
			/** 115 */
			Archive,
			/** 2 */
			Cap_nhat,
			/** 200 */
			CustomOperation,
			/** 118 */
			Restore,
			/** 116 */
			Retain,
			/** 117 */
			RollbackRetain,
			/** 1 */
			Tao,
			/** 4 */
			Truy_cap,
			/** 5 */
			Upsert,
			/** 3 */
			Xoa
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}
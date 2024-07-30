//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SolutionComponentApi {
		/**
		* DynamicsCrm.DevKit SolutionComponentApi
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
		/** Mã loại đối tượng của thành phần. */
		readonly ComponentType: OptionSet.SolutionComponent.ComponentType;
		/** Mã định danh duy nhất của người dùng đã tạo giải pháp */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo giải pháp. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo giải pháp. */
		readonly CreatedOnBehalfBy: string;
		/** Cho biết thành phần này là dữ liệu hay siêu dữ liệu. */
		readonly IsMetadata: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi giải pháp lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi giải pháp lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi giải pháp. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của đối tượng có thành phần được liên kết. */
		readonly ObjectId: string;
		/** Cho biết hành vi bao gồm của thành phần gốc. */
		readonly RootComponentBehavior: OptionSet.SolutionComponent.RootComponentBehavior;
		/** ID chính của thành phần phụ, không phải là thành phần gốc */
		readonly RootSolutionComponentId: string;
		/** Mã định danh duy nhất của thành phần giải pháp. */
		readonly SolutionComponentId: string;
		/** Mã định danh duy nhất của giải pháp. */
		readonly SolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã loại đối tượng của thành phần. */
			readonly ComponentType: string;
			/** Mã định danh duy nhất của người dùng đã tạo giải pháp */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo giải pháp. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo giải pháp. */
			readonly CreatedOnBehalfBy: string;
			/** Cho biết thành phần này là dữ liệu hay siêu dữ liệu. */
			readonly IsMetadata: string;
			/** Mã định danh duy nhất của người dùng sửa đổi giải pháp lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi giải pháp lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi giải pháp. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của đối tượng có thành phần được liên kết. */
			readonly ObjectId: string;
			/** Cho biết hành vi bao gồm của thành phần gốc. */
			readonly RootComponentBehavior: string;
			/** ID chính của thành phần phụ, không phải là thành phần gốc */
			readonly RootSolutionComponentId: string;
			/** Mã định danh duy nhất của thành phần giải pháp. */
			readonly SolutionComponentId: string;
			/** Mã định danh duy nhất của giải pháp. */
			readonly SolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SolutionComponent {
		enum ComponentType {
			/** 166 */
			Anh_xa_Nguon_Du_lieu,
			/** 23 */
			Ban_do_Chuoi_Hien_thi,
			/** 53 */
			Ban_do_the_ruy_bang_den_lenh,
			/** 47 */
			Ban_do_Thuoc_tinh,
			/** 31 */
			Bao_cao,
			/** 24 */
			Bieu_mau,
			/** 60 */
			Bieu_mau_he_thong,
			/** 371 */
			Bo_ket_noi_371,
			/** 372 */
			Bo_ket_noi_372,
			/** 9 */
			Bo_tuy_chon,
			/** 92 */
			Buoc_xu_ly_thong_bao_SDK,
			/** 402 */
			Cau_hinh_AI,
			/** 70 */
			Cau_hinh_Bao_mat_Truong,
			/** 432 */
			Cau_hinh_Hinh_anh_Thuc_the,
			/** 431 */
			Cau_hinh_Hinh_anh_Thuoc_tinh,
			/** 68 */
			Cau_hinh_mac_dinh_cua_dieu_khien_tuy_chinh,
			/** 161 */
			Cau_hinh_Mobile_Offline,
			/** 430 */
			Cau_hinh_phan_tich_thuc_the,
			/** 55 */
			Chenh_lech_ruy_bang,
			/** 18 */
			Chi_muc,
			/** 22 */
			Chuoi_Hien_thi,
			/** 91 */
			Cum_to_hop_bo_tro,
			/** 16 */
			Dac_quyen,
			/** 95 */
			Diem_cuoi_dich_vu,
			/** 66 */
			Dieu_khien_tuy_chinh,
			/** 45 */
			Dieu_kien_Quy_tac_Trung_lap,
			/** 8 */
			Dieu_kien_them_cua_moi_quan_he,
			/** 380 */
			Dinh_nghia_Bien_Moi_truong,
			/** 401 */
			Du_an_AI,
			/** 381 */
			Gia_tri_Bien_Moi_truong,
			/** 4 */
			Gia_tri_danh_sach_chon_thuoc_tinh,
			/** 5 */
			Gia_tri_tra_cuu_thuoc_tinh,
			/** 34 */
			Hien_thi_truc_quan_bao_cao,
			/** 59 */
			Hien_thi_truc_quan_ve_truy_van_da_luu,
			/** 93 */
			Hinh_anh_buoc_xu_ly_thong_bao_SDK,
			/** 14 */
			Khoa_Thuc_the,
			/** 64 */
			Kiem_soat_phuc,
			/** 48 */
			Lenh_tren_ruy_bang,
			/** 90 */
			Loai_bo_tro,
			/** 400 */
			Loai_Du_an_AI,
			/** 38 */
			Mau_bai_viet_KB,
			/** 36 */
			Mau_email,
			/** 37 */
			Mau_Hop_dong,
			/** 39 */
			Mau_Tron_Thu,
			/** 3 */
			Moi_quan_he,
			/** 12 */
			Moi_quan_he_cua_moi_quan_he_cua_thuc_the,
			/** 10 */
			Moi_quan_he_cua_thuc_the,
			/** 162 */
			Muc_cau_hinh_Mobile_Offline,
			/** 155 */
			Muc_quy_tac_chuyen_doi,
			/** 151 */
			Muc_quy_tac_dinh_tuyen,
			/** 153 */
			Muc_SLA,
			/** 7 */
			Nhan_da_ban_dia_hoa,
			/** 208 */
			Nhap_Ban_do,
			/** 49 */
			Nhom_boi_canh_ruy_bang,
			/** 17 */
			PrivilegeObjectTypeCode,
			/** 154 */
			Quy_tac_Chuyen_doi,
			/** 150 */
			Quy_tac_Dinh_tuyen,
			/** 65 */
			Quy_tac_He_thong_cap_bac,
			/** 52 */
			Quy_tac_ruy_bang,
			/** 44 */
			Quy_tac_trung_lap,
			/** 165 */
			Quy_tac_Tuong_tu,
			/** 29 */
			Quy_trinh_lam_viec,
			/** 71 */
			Quyen_cua_Truong,
			/** 21 */
			Quyen_vai_tro,
			/** 201 */
			SDKMessage,
			/** 202 */
			SDKMessageFilter,
			/** 203 */
			SdkMessagePair,
			/** 204 */
			SdkMessageRequest,
			/** 205 */
			SdkMessageRequestField,
			/** 206 */
			SdkMessageResponse,
			/** 207 */
			SdkMessageResponseField,
			/** 46 */
			So_do_Thuc_the,
			/** 62 */
			So_do_trang_web,
			/** 61 */
			Tai_nguyen_web,
			/** 35 */
			Tep_dinh_kem,
			/** 33 */
			The_loai_bao_cao,
			/** 152 */
			Thoa_thuan_Cap_do_Dich_vu,
			/** 1 */
			Thuc_the,
			/** 32 */
			Thuc_the_bao_cao,
			/** 2 */
			Thuoc_tinh,
			/** 13 */
			Thuoc_tinh_duoc_quan_ly,
			/** 25 */
			To_chuc,
			/** 26 */
			Truy_van_da_luu,
			/** 50 */
			Tuy_chinh_ruy_bang,
			/** 300 */
			Ung_dung_Bang_tuy_bien,
			/** 20 */
			Vai_tro,
			/** 11 */
			Vai_tro_cua_moi_quan_he_cua_thuc_the,
			/** 63 */
			Vai_tro_Ket_noi,
			/** 210 */
			WebWizard,
			/** 6 */
			Xem_thuoc_tinh
		}
		enum RootComponentBehavior {
			/** 0 */
			Bao_gom_cac_thanh_phan_phu,
			/** 2 */
			Chi_bao_gom_duoi_dang_vo,
			/** 1 */
			Khong_bao_gom_cac_thanh_phan_phu
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
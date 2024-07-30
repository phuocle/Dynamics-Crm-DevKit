//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSLA {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm sở hữu SLA. Trường này sẽ cập nhật mỗi lần gán mục cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của thỏa thuận cấp độ dịch vụ (SLA). */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_tabUC_Sections {
			sladetails: DevKit.Controls.Section;
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tabUC extends DevKit.Controls.ITab {
			Section: tab_tabUC_Sections;
		}
		interface Tabs {
			tabUC: tab_tabUC;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn khả năng SLA sẽ chấp nhận tạm dừng và làm tiếp khi tính toán thời gian. */
			AllowPauseResume: DevKit.Controls.Boolean;
			/** Chọn trường xác định ngày giờ sẽ tính mục SLA. Ví dụ: nếu bạn chọn trường Ngày tạo Trường hợp, phép tính SLA sẽ bắt đầu từ lúc tạo trường hợp. */
			ApplicableFromPickList: DevKit.Controls.OptionSet;
			/** Chọn giờ hoạt động để tính lịch trình mục SLA. */
			BusinessHoursId: DevKit.Controls.Lookup;
			/** Nhập thông tin thêm để mô tả SLA */
			Description: DevKit.Controls.String;
			/** Nhập thông tin thêm để mô tả SLA */
			Description1: DevKit.Controls.String;
			/** Nhập tên mô tả của thỏa thuận cấp độ dịch vụ (SLA). */
			Name: DevKit.Controls.String;
			/** Nhập tên mô tả của thỏa thuận cấp độ dịch vụ (SLA). */
			Name1: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Chọn loại thực thể mà SLA đã xác định. */
			ObjectTypeCode: DevKit.Controls.OptionSet;
			/** Hiển thị thực thể chính đã tạo SLA. */
			PrimaryEntityOTC: DevKit.Controls.Integer;
			/** Chọn loại của thỏa thuận cấp độ dịch vụ (SLA). */
			SLAType: DevKit.Controls.OptionSet;
			slaversion: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			adx_inviteredemption_sla_slaid: DevKit.Controls.NavigationItem,
			adx_inviteredemption_sla_slainvokedid: DevKit.Controls.NavigationItem,
			adx_portalcomment_sla_slaid: DevKit.Controls.NavigationItem,
			adx_portalcomment_sla_slainvokedid: DevKit.Controls.NavigationItem,
			manualsla_account: DevKit.Controls.NavigationItem,
			manualsla_appointment: DevKit.Controls.NavigationItem,
			manualsla_contact: DevKit.Controls.NavigationItem,
			manualsla_email: DevKit.Controls.NavigationItem,
			manualsla_phonecall: DevKit.Controls.NavigationItem,
			manualsla_task: DevKit.Controls.NavigationItem,
			sla_account: DevKit.Controls.NavigationItem,
			sla_appointment: DevKit.Controls.NavigationItem,
			sla_contact: DevKit.Controls.NavigationItem,
			sla_email: DevKit.Controls.NavigationItem,
			sla_phonecall: DevKit.Controls.NavigationItem,
			sla_slaitem_slaId: DevKit.Controls.NavigationItem,
			sla_task: DevKit.Controls.NavigationItem
		}
		interface Grid {
			SLADetails: DevKit.Controls.Grid;
			SLAItemsUCI: DevKit.Controls.Grid;
		}
	}
	class FormSLA extends DevKit.IForm {
		/**
		* SLA [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SLA */
		Body: DevKit.FormSLA.Body;
		/** The Header section of form SLA */
		Header: DevKit.FormSLA.Header;
		/** The Navigation of form SLA */
		Navigation: DevKit.FormSLA.Navigation;
		/** The Grid of form SLA */
		Grid: DevKit.FormSLA.Grid;
		/** The SidePanes of form SLA */
		SidePanes: DevKit.SidePanes;
	}
	class SLAApi {
		/**
		* DynamicsCrm.DevKit SLAApi
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
		/** Chọn khả năng SLA sẽ chấp nhận tạm dừng và làm tiếp khi tính toán thời gian. */
		AllowPauseResume: boolean;
		/** Chọn trường xác định ngày giờ sẽ tính mục SLA cho bản ghi trường hợp. Ví dụ: nếu bạn chọn trường Ngày tạo Trường hợp, phép tính SLA sẽ bắt đầu từ lúc tạo trường hợp.  */
		ApplicableFrom: string;
		/** Chọn trường xác định ngày giờ sẽ tính mục SLA. Ví dụ: nếu bạn chọn trường Ngày tạo Trường hợp, phép tính SLA sẽ bắt đầu từ lúc tạo trường hợp. */
		ApplicableFromPickList: OptionSet.SLA.ApplicableFromPickList;
		/** Chọn giờ hoạt động để tính lịch trình mục SLA. */
		BusinessHoursId: string;
		/** Nhập thông tin thêm để mô tả SLA */
		ChangedAttributeList: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SLA.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin thêm để mô tả SLA */
		Description: string;
		/** Tỷ giá giữa loại tiền đã liên kết với bản ghi SLA và loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Cho biết SLA có phải là mặc định hay không. */
		IsDefault: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả của thỏa thuận cấp độ dịch vụ (SLA). */
		Name: string;
		/** Chọn loại thực thể mà SLA đã xác định. */
		readonly ObjectTypeCode: OptionSet.SLA.ObjectTypeCode;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
		OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		OwningUser: string;
		/** Hiển thị thực thể chính đã tạo SLA. */
		PrimaryEntityOTC: number;
		/** Mã định danh duy nhất của SLA. */
		SLAId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SLAIdUnique: string;
		/** Chọn loại của thỏa thuận cấp độ dịch vụ (SLA). */
		SLAType: OptionSet.SLA.SLAType;
		slaversion: OptionSet.SLA.slaversion;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Cho biết Thỏa thuận cấp độ dịch vụ (SLA) là đang hiện hoạt hay không hoạt động. */
		StateCode: OptionSet.SLA.StateCode;
		/** Chọn trạng thái của thỏa thuận cấp độ dịch vụ (SLA). */
		StatusCode: OptionSet.SLA.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của loại tiền đã liên kết với bản ghi SLA. */
		readonly TransactionCurrencyId: string;
		/** Số phiên bản của tổ SLA. */
		readonly VersionNumber: number;
		/** Quy trình làm việc đã liên kết với SLA. */
		WorkflowId: string;
		readonly FormattedValue: {
			/** Chọn khả năng SLA sẽ chấp nhận tạm dừng và làm tiếp khi tính toán thời gian. */
			readonly AllowPauseResume: string;
			/** Chọn trường xác định ngày giờ sẽ tính mục SLA cho bản ghi trường hợp. Ví dụ: nếu bạn chọn trường Ngày tạo Trường hợp, phép tính SLA sẽ bắt đầu từ lúc tạo trường hợp.  */
			readonly ApplicableFrom: string;
			/** Chọn trường xác định ngày giờ sẽ tính mục SLA. Ví dụ: nếu bạn chọn trường Ngày tạo Trường hợp, phép tính SLA sẽ bắt đầu từ lúc tạo trường hợp. */
			readonly ApplicableFromPickList: string;
			/** Chọn giờ hoạt động để tính lịch trình mục SLA. */
			readonly BusinessHoursId: string;
			/** Nhập thông tin thêm để mô tả SLA */
			readonly ChangedAttributeList: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin thêm để mô tả SLA */
			readonly Description: string;
			/** Tỷ giá giữa loại tiền đã liên kết với bản ghi SLA và loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Cho biết SLA có phải là mặc định hay không. */
			readonly IsDefault: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả của thỏa thuận cấp độ dịch vụ (SLA). */
			readonly Name: string;
			/** Chọn loại thực thể mà SLA đã xác định. */
			readonly ObjectTypeCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Hiển thị thực thể chính đã tạo SLA. */
			readonly PrimaryEntityOTC: string;
			/** Mã định danh duy nhất của SLA. */
			readonly SLAId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SLAIdUnique: string;
			/** Chọn loại của thỏa thuận cấp độ dịch vụ (SLA). */
			readonly SLAType: string;
			readonly slaversion: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Cho biết Thỏa thuận cấp độ dịch vụ (SLA) là đang hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của thỏa thuận cấp độ dịch vụ (SLA). */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của loại tiền đã liên kết với bản ghi SLA. */
			readonly TransactionCurrencyId: string;
			/** Số phiên bản của tổ SLA. */
			readonly VersionNumber: string;
			/** Quy trình làm việc đã liên kết với SLA. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SLA {
		enum ApplicableFromPickList {
			/** 2 */
			Co,
			/** 1 */
			Khong
		}
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
		}
		enum ObjectTypeCode {
			/** 8040 */
			ACIViewMapper,
			/** 9968 */
			ActionCardUserState,
			/** 10142 */
			AI_Builder_Dataset,
			/** 10143 */
			AI_Builder_Dataset_File,
			/** 10144 */
			AI_Builder_Dataset_Record,
			/** 10145 */
			AI_Builder_Datasets_Container,
			/** 10135 */
			AI_Builder_Feedback_Loop,
			/** 10146 */
			AI_Builder_File,
			/** 10147 */
			AI_Builder_File_Attached_Data,
			/** 402 */
			AI_Configuration,
			/** 10134 */
			AI_Event,
			/** 10136 */
			AI_Form_Processing_Document,
			/** 401 */
			AI_Model,
			/** 10139 */
			AI_Object_Detection_Bounding_Box,
			/** 10137 */
			AI_Object_Detection_Image,
			/** 10140 */
			AI_Object_Detection_Image_Mapping,
			/** 10138 */
			AI_Object_Detection_Label,
			/** 10119 */
			AI_Plugin_Conversation_Starter,
			/** 10120 */
			AI_Plugin_Conversation_Starter_Mapping,
			/** 10121 */
			AI_Plugin_Governance,
			/** 10122 */
			AI_Plugin_Governance_Extended,
			/** 400 */
			AI_Template,
			/** 10117 */
			AICopilot,
			/** 10126 */
			AIPlugin,
			/** 10118 */
			AIPluginAuth,
			/** 10127 */
			AIPluginExternalSchema,
			/** 10128 */
			AIPluginExternalSchemaProperty,
			/** 10129 */
			AIPluginInstance,
			/** 10130 */
			AIPluginOperation,
			/** 10131 */
			AIPluginOperationParameter,
			/** 10123 */
			AIPluginOperationResponseTemplate,
			/** 10124 */
			AIPluginTitle,
			/** 10132 */
			AIPluginUserSetting,
			/** 4426 */
			Anh_xa_bien_doi,
			/** 4420 */
			Anh_xa_chu_so_huu,
			/** 1043 */
			Anh_xa_chuoi,
			/** 4417 */
			Anh_xa_Cot,
			/** 4418 */
			Anh_xa_gia_tri_danh_sach,
			/** 4120 */
			Anh_xa_Id_Dong_bo_Exchange,
			/** 9932 */
			Anh_xa_ngay_dau_thoi_gian,
			/** 2016 */
			Anh_xa_nguoi_dung,
			/** 4427 */
			Anh_xa_tham_so_bien_doi,
			/** 1113 */
			Anh_xa_the_ruy_bang_den_lenh,
			/** 4428 */
			Anh_xa_Thuc_the_Nhap,
			/** 9945 */
			Anh_xa_thuc_the_phan_tich_van_ban,
			/** 1401 */
			Anh_xa_Thuoc_tinh_Dong_bo,
			/** 4419 */
			Anh_xa_Tra_cuu,
			/** 1075 */
			Anh_xa_trang_thai,
			/** 10027 */
			API_tuy_chinh,
			/** 10167 */
			App_Insights_Metadata,
			/** 1204 */
			Application,
			/** 10072 */
			ApplicationUser,
			/** 10223 */
			ArchiveCleanupInfo,
			/** 10224 */
			ArchiveCleanupOperation,
			/** 10212 */
			Background_Operation,
			/** 8000 */
			Bai_dang,
			/** 127 */
			Bai_viet,
			/** 126 */
			Bai_viet_duoc_Lap_chi_muc,
			/** 9953 */
			Bai_viet_trong_co_so_kien_thuc,
			/** 4101 */
			Ban_do_Chuoi_Hien_thi,
			/** 6 */
			Ban_do_Don_vi_Kinh_doanh,
			/** 4411 */
			Ban_do_Du_lieu,
			/** 42 */
			Ban_do_thuc_the_SystemUser_BusinessUnit,
			/** 4601 */
			Ban_do_Thuoc_tinh,
			/** 1404 */
			Ban_do_Thuoc_tinh_Dong_bo_Chinh,
			/** 51 */
			Ban_do_trinh_quan_ly_nguoi_dung_he_thong,
			/** 4501 */
			Ban_do_vai_tro_cua_moi_quan_he,
			/** 9930 */
			Ban_ghi_co_so_kien_thuc,
			/** 10273 */
			Ban_ghi_PM,
			/** 4415 */
			Ban_ghi_Trung_lap,
			/** 8002 */
			Ban_luu_y_bai_dang,
			/** 4450 */
			Bang_thong_tin_Hieu_suat_Du_lieu,
			/** 1031 */
			Bang_thong_tin_nguoi_dung,
			/** 9100 */
			Bao_cao,
			/** 10288 */
			Bao_cao_Power_BI,
			/** 10353 */
			Bao_cao_quet_Power_Pages,
			/** 135 */
			Ben_Hoat_dong,
			/** 3008 */
			Ben_ngoai,
			/** 1111 */
			Bieu_do_he_thong,
			/** 1112 */
			Bieu_do_nguoi_dung,
			/** 10321 */
			Bieu_mau_co_ban,
			/** 1030 */
			Bieu_mau_he_thong,
			/** 10335 */
			Bieu_mau_nhieu_buoc,
			/** 4712 */
			Bo_kich_hoat_quy_trinh,
			/** 10339 */
			Bo_lien_ket_web,
			/** 4607 */
			Bo_loc_thong_bao_sdk,
			/** 8181 */
			Bo_quy_tac_dinh_tuyen,
			/** 10284 */
			Bo_Quy_tac_Tinh_trang_Giai_phap,
			/** 10150 */
			BotContent,
			/** 10225 */
			BulkArchiveConfig,
			/** 10226 */
			BulkArchiveFailureDetail,
			/** 10227 */
			BulkArchiveOperation,
			/** 10228 */
			BulkArchiveOperationDetail,
			/** 10337 */
			Buoc_bieu_mau,
			/** 10097 */
			Buoc_phe_duyet,
			/** 4608 */
			Buoc_xu_ly_thong_bao_sdk,
			/** 10062 */
			Canh_cua_Nut_thanh_phan_ung_dung_dua_tren_mo_hinh,
			/** 10068 */
			CanvasApp_Extended_Metadata,
			/** 36 */
			Cap_nhat_ung_dung_khach,
			/** 4613 */
			Cap_thong_bao_sdk,
			/** 10057 */
			CascadeGrantRevokeAccessRecordsTracker,
			/** 10058 */
			CascadeGrantRevokeAccessVersionTracker,
			/** 1400 */
			Cau_hinh_Anh_xa_Thuoc_tinh_Dong_bo,
			/** 4616 */
			Cau_hinh_bao_mat_buoc_xu_ly_thong_bao_sdk,
			/** 9919 */
			Cau_hinh_Bao_mat_He_thong_cap_bac,
			/** 1200 */
			Cau_hinh_Bao_mat_Truong,
			/** 1403 */
			Cau_hinh_cua_anh_xa_thuoc_tinh_dong_bo_nhom,
			/** 10257 */
			Cau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the,
			/** 432 */
			Cau_hinh_Hinh_anh_Thuc_the,
			/** 4705 */
			Cau_hinh_ISV,
			/** 10001 */
			Cau_hinh_lo_thanh_phan_giai_phap,
			/** 9755 */
			Cau_hinh_mac_dinh_cua_dieu_khien_tuy_chinh,
			/** 9605 */
			Cau_hinh_May_chu_Email,
			/** 9866 */
			Cau_hinh_Mobile_Offline,
			/** 10003 */
			Cau_hinh_moi_quan_he_thanh_phan_giai_phap,
			/** 1203 */
			Cau_hinh_nhom,
			/** 430 */
			Cau_hinh_phan_tich_thuc_the,
			/** 9650 */
			Cau_hinh_Quy_trinh,
			/** 10002 */
			Cau_hinh_thanh_phan_giai_phap,
			/** 431 */
			Cau_hinh_Thuoc_tinh_Hinh_anh,
			/** 10000 */
			Cau_hinh_thuoc_tinh_thanh_phan_giai_phap,
			/** 54 */
			Cau_hinh_Tim_kiem_Chung,
			/** 3005 */
			Cau_hinh_truy_cap_kenh,
			/** 10265 */
			Cau_hinh_tu_dong_hoa_quy_tac_cong_viec_PM,
			/** 9012 */
			Cau_hinh_Ung_dung,
			/** 10040 */
			Cau_hinh_Xu_ly_du_lieu,
			/** 1130 */
			Chenh_lech_ruy_bang,
			/** 9815 */
			Chi_muc_thuc_the,
			/** 10281 */
			Chi_tiet_Ket_qua_Phan_tich,
			/** 44 */
			Chia_se_truong,
			/** 10099 */
			Cho_Tat_ca_Mo_hinh_Phe_duyet,
			/** 10098 */
			Cho_Tat_ca_Mo_hinh_Phe_duyet_Hanh_dong,
			/** 129 */
			Chu_de_129,
			/** 2015 */
			Chu_de_2015,
			/** 9997 */
			Chu_ky_Email,
			/** 7 */
			Chu_so_huu,
			/** 14 */
			Chu_the_nguoi_dung_he_thong,
			/** 4102 */
			Chuoi_Hien_thi,
			/** 10330 */
			Chuyen_huong,
			/** 10149 */
			Chuyen_tham_quan,
			/** 10043 */
			Co_so_du_lieu_Synapse,
			/** 10332 */
			Cong_cu_danh_dau_trang,
			/** 4700 */
			Cong_viec_He_thong,
			/** 9107 */
			Cong_viec_Nhap,
			/** 4410 */
			Cong_viec_Nhap_Du_lieu,
			/** 10278 */
			Cong_viec_Phan_tich,
			/** 9511 */
			Cong_viec_tong_so,
			/** 373 */
			Connection_Instance,
			/** 10151 */
			ConversationTranscript,
			/** 10152 */
			Copilot,
			/** 10299 */
			CopilotExampleQuestion,
			/** 10300 */
			CopilotGlossaryTerm,
			/** 10301 */
			CopilotSynonyms,
			/** 4605 */
			Cum_to_hop_bo_tro,
			/** 4210 */
			Cuoc_goi_dien_thoai,
			/** 4201 */
			Cuoc_hen,
			/** 4251 */
			Cuoc_hen_lap_lai,
			/** 1309 */
			Da_luu_Cau_hinh_Hieu_biet_To_chuc,
			/** 4803 */
			Dac_quyen_truy_cap_trinh_huong_dan_web,
			/** 7108 */
			Dac_tinh_Quan_he_phu_thuoc,
			/** 29 */
			Dang_ky,
			/** 4702 */
			Dang_ky_cho_quy_trinh_lam_viec,
			/** 301 */
			Dang_ky_Cuoc_goi_lai,
			/** 37 */
			Dang_ky_theo_doi_thu_cong_doi_tuong,
			/** 1039 */
			Dang_xem,
			/** 9955 */
			Dang_xem_Bai_viet_trong_Co_so_kien_thuc,
			/** 4230 */
			Dang_xem_da_luu,
			/** 10276 */
			Dang_xem_PM,
			/** 10024 */
			Danh_muc,
			/** 10323 */
			Danh_sach,
			/** 10308 */
			Danh_tinh_Ben_ngoai,
			/** 10172 */
			Data_Movement_Service_Request,
			/** 10173 */
			Data_Movement_Service_Request_Status,
			/** 418 */
			Dataflow,
			/** 10168 */
			Dataflow_Connection_Reference,
			/** 10171 */
			Dataflow_DatalakeFolder,
			/** 10170 */
			Dataflow_Template,
			/** 10052 */
			DataflowRefreshHistory,
			/** 8050 */
			Dau_vet,
			/** 10055 */
			DelegatedAuthorization,
			/** 10246 */
			Deleted_Record_Reference,
			/** 9961 */
			DelveActionHub,
			/** 10249 */
			Di_chuyen_hanh_dong_ung_dung,
			/** 1071 */
			Dia_chi,
			/** 2012 */
			Dia_chi_khong_phan_giai,
			/** 7102 */
			Dia_chi_nha_phat_hanh,
			/** 1003 */
			Dia_chi_Noi_bo,
			/** 4618 */
			Diem_cuoi_dich_vu,
			/** 9753 */
			Dieu_khien_tuy_chinh,
			/** 4416 */
			Dieu_kien_Quy_tac_Trung_lap,
			/** 9870 */
			Dinh_nghia_Lenh_Ngoai_tuyen,
			/** 4810 */
			Dinh_nghia_mui_gio,
			/** 7104 */
			Dinh_nghia_Thanh_phan_Giai_phap,
			/** 10067 */
			Dinh_nghia_thiet_dat,
			/** 10174 */
			DMS_Sync_Request,
			/** 10175 */
			DMS_Sync_Status,
			/** 10320 */
			Doan_noi_dung,
			/** 10283 */
			Doi_so_Quy_tac_Tinh_trang_Giai_phap,
			/** 10 */
			Don_vi_Kinh_doanh,
			/** 10327 */
			DS_thuc_the_loi_Power_Pages,
			/** 10100 */
			Du_lieu_Mau_Phe_duyet_Co_ban,
			/** 10090 */
			Du_lieu_nhi_phan_dong_man_hinh_nen,
			/** 10076 */
			Du_lieu_nhi_phan_quy_trinh_lam_viec,
			/** 2501 */
			Du_lieu_phien_ban_thuc_the_nguoi_dung,
			/** 9509 */
			Du_lieu_SharePoint,
			/** 18085 */
			Duong_dan_trinh_mo_rong_su_kien,
			/** 10111 */
			DVFileSearch,
			/** 10112 */
			DVFileSearchAttribute,
			/** 10113 */
			DVFileSearchEntity,
			/** 10114 */
			DVTableSearch,
			/** 10115 */
			DVTableSearchAttribute,
			/** 10116 */
			DVTableSearchEntity,
			/** 7755 */
			ElasticFileAttachment,
			/** 4202 */
			Email,
			/** 10229 */
			EnableArchivalRequest,
			/** 73 */
			EntityRecordFilter,
			/** 10053 */
			EntityRefreshHistory,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 10012 */
			ExportSolutionUpload,
			/** 10166 */
			Fabric_AISkill,
			/** 10197 */
			Favorite_knowledge_article,
			/** 4204 */
			Fax,
			/** 10013 */
			FeatureControlSetting,
			/** 10181 */
			FederatedKnowledgeConfiguration,
			/** 10182 */
			FederatedKnowledgeEntityConfiguration,
			/** 10290 */
			File_Upload,
			/** 55 */
			FileAttachment,
			/** 10091 */
			Flow_Log,
			/** 10092 */
			Flow_Run,
			/** 10206 */
			FxExpression,
			/** 10025 */
			Gan_danh_muc,
			/** 10026 */
			Gan_danh_muc_noi_bo,
			/** 5 */
			Ghi_chu,
			/** 10260 */
			Ghim_tren_dong_thoi_gian,
			/** 9912 */
			Gia_tri_Tuy_chon_Da_lua_chon,
			/** 4724 */
			Giai_doan_cua_Quy_trinh,
			/** 7100 */
			Giai_phap,
			/** 4710 */
			Giao_dich_quy_trinh,
			/** 9996 */
			Giay_goi_cho_ngay_le,
			/** 2027 */
			Giay_phep,
			/** 10030 */
			Goi_phan_bo_tro,
			/** 1189 */
			Goi_y_Tai_lieu,
			/** 4023 */
			Ham_bam_Email,
			/** 2020 */
			Hang_doi,
			/** 10088 */
			Hang_doi_cong_viec,
			/** 10248 */
			Hanh_dong_ung_dung,
			/** 9103 */
			Hien_thi_truc_quan_bao_cao,
			/** 4615 */
			Hinh_anh_buoc_xu_ly_thong_bao_sdk,
			/** 10084 */
			Hinh_anh_may_trong_dong_quy_trinh,
			/** 99 */
			Ho_so_Mang_xa_hoi,
			/** 10319 */
			Ho_so_quyen_doi_voi_cot,
			/** 4200 */
			Hoat_dong,
			/** 8702 */
			Hoat_dong_Khong_dong_bo_Sieu_du_lieu_cua_Mo_dun_Ung_dung,
			/** 10021 */
			Hoat_dong_khong_dong_bo_sieu_du_lieu_theo_giai_doan,
			/** 4216 */
			Hoat_dong_mang_xa_hoi,
			/** 9606 */
			Hop_thu,
			/** 10243 */
			Insights_Store_Data_Source,
			/** 10244 */
			Insights_Store_Virtual_Entity,
			/** 10188 */
			Integrated_search_provider,
			/** 3234 */
			Ket_noi,
			/** 9936 */
			Ket_noi_Dich_vu_Azure,
			/** 10280 */
			Ket_qua_Phan_tich,
			/** 10022 */
			Key_Vault_Reference,
			/** 4231 */
			Khac_biet_Sieu_du_lieu,
			/** 10360 */
			Kho_noi_dung_gui_toi_goi,
			/** 9810 */
			Khoa_Thuc_the,
			/** 4011 */
			Khoa_Xu_ly_Lien_dong,
			/** 10038 */
			Khong_gian_lam_viec_Data_Lake,
			/** 4567 */
			Kiem_tra,
			/** 10199 */
			Knowledge_Article_Attachment,
			/** 10193 */
			Knowledge_Article_Image,
			/** 10198 */
			Knowledge_article_language_setting,
			/** 10201 */
			Knowledge_Article_Template,
			/** 10176 */
			Knowledge_Asset_Configuration,
			/** 10194 */
			Knowledge_Configuration,
			/** 10190 */
			Knowledge_Federated_Article,
			/** 10191 */
			Knowledge_Federated_Article_Incident,
			/** 10195 */
			Knowledge_Interaction_Insight,
			/** 10189 */
			Knowledge_Management_Setting,
			/** 10200 */
			Knowledge_personalization,
			/** 10203 */
			Knowledge_search_filter,
			/** 10196 */
			Knowledge_Search_Insight,
			/** 10202 */
			Knowledge_search_personal_filter_config,
			/** 1007 */
			Ky_hieu_mo_ta_Hinh_anh,
			/** 1116 */
			Lenh_tren_ruy_bang,
			/** 4003 */
			Lich,
			/** 10266 */
			Lich_PM,
			/** 10004 */
			Lich_su_Giai_phap,
			/** 10264 */
			Lich_su_phan_tich_PM,
			/** 2003 */
			Lich_Tai_chinh_Hang_thang,
			/** 2004 */
			Lich_Tai_chinh_Hang_thang_Co_dinh,
			/** 1086 */
			Lich_tai_chinh_nguoi_dung,
			/** 2002 */
			Lich_tai_khoa_hang_quy,
			/** 2001 */
			Lich_tai_khoa_sau_thang,
			/** 2000 */
			Lich_Tai_khoa_Thuong_nien,
			/** 9104 */
			Lien_ket_bao_cao,
			/** 8051 */
			Lien_ket_dau_vet,
			/** 9868 */
			Lien_ket_Muc_Cau_hinh_Mobile_Offline,
			/** 10338 */
			Lien_ket_web,
			/** 4602 */
			Loai_bo_tro,
			/** 9983 */
			Loai_The_Hanh_dong,
			/** 9105 */
			Loai_tien,
			/** 9201 */
			LocalConfigStore,
			/** 9869 */
			Loi_dong_bo,
			/** 10309 */
			Loi_moi,
			/** 10331 */
			Loi_tat,
			/** 4425 */
			Loi_Xoa_Hang_loat,
			/** 10006 */
			Lop_Thanh_phan,
			/** 31 */
			Ma_loai_doi_tuong_quyen,
			/** 3233 */
			Ma_Loai_Doi_tuong_Vai_tro_Ket_noi,
			/** 10291 */
			MainFewShot,
			/** 10292 */
			MakerFewShot,
			/** 10023 */
			Managed_Identity,
			/** 10086 */
			Mang_may_trong_dong_quy_trinh,
			/** 1016 */
			Mau_Bai_viet,
			/** 30 */
			Mau_Bo_loc,
			/** 2010 */
			Mau_email,
			/** 92 */
			Mau_nhom,
			/** 10275 */
			Mau_PM,
			/** 10270 */
			Mau_quy_trinh_PM,
			/** 9940 */
			Mau_Tai_lieu,
			/** 9941 */
			Mau_Tai_lieu_Ca_nhan,
			/** 10325 */
			Mau_trang,
			/** 9106 */
			Mau_Tron_Thu,
			/** 1037 */
			Mau_vai_tro,
			/** 10346 */
			Mau_web,
			/** 1094 */
			May_chu_Uy_quyen,
			/** 1072 */
			May_khach_dang_ky,
			/** 10082 */
			May_trong_dong_quy_trinh,
			/** 10230 */
			MetadataForArchival,
			/** 10018 */
			Microsoft_Entra_ID,
			/** 10078 */
			Mo_dun_dong_man_hinh_nen,
			/** 10093 */
			Mo_hinh_Phe_duyet_Hanh_dong,
			/** 9947 */
			Mo_hinh_Tim_kiem_trong_Co_so_kien_thuc,
			/** 10274 */
			Mo_phong_PM,
			/** 10242 */
			Mobile_App,
			/** 10214 */
			MobileOfflineProfileExtension,
			/** 10215 */
			MobileOfflineProfileItemFilter,
			/** 10177 */
			Module_Run_Detail,
			/** 9811 */
			Moi_quan_he_cua_Thuc_the,
			/** 4502 */
			Moi_quan_he_Khach_hang,
			/** 9987 */
			Muc_ben_ngoai,
			/** 9867 */
			Muc_Cau_hinh_Mobile_Offline,
			/** 47 */
			Muc_nhap_Dong_bo_hoa_Dang_ky_Ngoai_tuyen,
			/** 48 */
			Muc_nhap_Dong_bo_hoa_Dang_ky_Outlook,
			/** 8199 */
			Muc_quy_tac,
			/** 9401 */
			Muc_quy_tac_cau_hinh_truy_cap_kenh,
			/** 9301 */
			Muc_quy_tac_tao_va_cap_nhat_ban_ghi,
			/** 9751 */
			Muc_SLA,
			/** 9600 */
			Muc_tieu,
			/** 10254 */
			Muc_trang_thai_the,
			/** 2029 */
			Muc_trong_hang_doi,
			/** 10089 */
			Muc_trong_hang_doi_cong_viec,
			/** 9910 */
			MultiEntitySearch,
			/** 9957 */
			Ngon_ngu,
			/** 10345 */
			Ngon_ngu_cua_website,
			/** 10304 */
			Ngon_ngu_trang_web,
			/** 8 */
			Nguoi_dung,
			/** 2 */
			Nguoi_lien_he,
			/** 10005 */
			Nguon_Du_lieu_Lich_su_Giai_phap,
			/** 10007 */
			Nguon_Du_lieu_Lop_Thanh_phan,
			/** 10075 */
			Nguon_du_lieu_OData_v4,
			/** 10050 */
			Nguon_du_lieu_phien_ban_thanh_phan,
			/** 85 */
			Nguon_Du_lieu_Thuc_the_Ao,
			/** 10261 */
			Nguon_du_lieu_trinh_ket_noi_ao,
			/** 10210 */
			Nguon_luc_MS_Graph_voi_goi_dang_ky,
			/** 78 */
			Nha_cung_cap_Du_lieu_Thuc_the_Ao,
			/** 7101 */
			Nha_phat_hanh,
			/** 4232 */
			Nhan_Ban_dia_hoa_Du_lieu_Doanh_nghiep,
			/** 10165 */
			Nhan_xet_10165,
			/** 8005 */
			Nhan_xet_8005,
			/** 10311 */
			Nhan_xet_Cong_thong_tin,
			/** 1082 */
			Nhan_xet_ve_Bai_viet,
			/** 4413 */
			Nhap_Du_lieu,
			/** 4423 */
			Nhat_ky_Nhap,
			/** 10354 */
			Nhat_ky_Power_Pages,
			/** 4706 */
			Nhat_ky_quy_trinh,
			/** 4619 */
			Nhat_ky_Truy_vet_Phan_bo_tro,
			/** 4212 */
			Nhiem_vu,
			/** 9 */
			Nhom,
			/** 1115 */
			Nhom_boi_canh_ruy_bang,
			/** 10083 */
			Nhom_may_trong_dong_quy_trinh,
			/** 1234 */
			Nhom_Thuoc_tinh_Kenh,
			/** 5004 */
			NL2SQ_Registration_Information,
			/** 10031 */
			NonRelational_Data_Source,
			/** 7106 */
			Nut_Quan_he_phu_thuoc,
			/** 10063 */
			Nut_thanh_phan_ung_dung_dua_tren_mo_hinh,
			/** 9809 */
			OptionSet,
			/** 10221 */
			OrganizationDataSyncFnoState,
			/** 10222 */
			OrganizationDataSyncState,
			/** 10218 */
			OrganizationDataSyncSubscription,
			/** 10219 */
			OrganizationDataSyncSubscriptionEntity,
			/** 10220 */
			OrganizationDataSyncSubscriptionFnoTable,
			/** 10008 */
			Package,
			/** 10009 */
			Package_History,
			/** 10079 */
			Phan_cong_nguon_luc_cho_dong_quy_trinh,
			/** 10184 */
			Phan_dinh_kem_tep_hoat_dong,
			/** 9958 */
			Phan_hoi,
			/** 10096 */
			Phan_hoi_Phe_duyet,
			/** 4610 */
			Phan_hoi_thong_bao_sdk,
			/** 10094 */
			Phe_duyet,
			/** 10101 */
			Phe_duyet_Flow,
			/** 9013 */
			Phien_ban_Cau_hinh_Ung_dung,
			/** 4725 */
			Phien_ban_Dong_Quy_trinh_Cong_viec,
			/** 10085 */
			Phien_ban_hinh_anh_may_trong_dong_quy_trinh,
			/** 10267 */
			Phien_ban_lich_PM,
			/** 10272 */
			Phien_ban_quy_trinh_PM,
			/** 10269 */
			Phien_ban_sieu_du_lieu_mo_rong_cho_quy_trinh_PM,
			/** 9752 */
			Phien_ban_SLA_KPI,
			/** 10049 */
			Phien_ban_thanh_phan,
			/** 10051 */
			Phien_ban_thanh_phan_Noi_bo,
			/** 10313 */
			Phien_bieu_mau_nhieu_buoc,
			/** 4720 */
			Phien_dong,
			/** 10208 */
			Planner_Business_Scenario,
			/** 10209 */
			Planner_Sync_Action,
			/** 10286 */
			powerbidatasetapdx,
			/** 10289 */
			powerbireportapdx,
			/** 10207 */
			PowerfxRule,
			/** 61 */
			PrincipalEntityBusinessUnitMap,
			/** 76 */
			Privilege_Checker_Log,
			/** 75 */
			Privilege_Checker_Run,
			/** 103 */
			Privileges_Removal_Setting,
			/** 10032 */
			ProvisionLanguageForUser,
			/** 7105 */
			Quan_he_phu_thuoc,
			/** 7107 */
			Quan_he_phu_thuoc_khong_hop_le,
			/** 4704 */
			Quan_he_phu_thuoc_quy_trinh,
			/** 8701 */
			Quan_he_phu_thuoc_Sieu_du_lieu_AppModule,
			/** 2023 */
			QueueItemCount,
			/** 2024 */
			QueueMemberCount,
			/** 10310 */
			Quy_doi_Loi_moi,
			/** 9400 */
			Quy_tac_Cau_hinh_Truy_cap_Kenh,
			/** 10329 */
			Quy_tac_chuyen_tiep_trang_thai_phat_hanh,
			/** 10250 */
			Quy_tac_hanh_dong_ung_dung,
			/** 8840 */
			Quy_tac_He_thong_cap_bac,
			/** 10341 */
			Quy_tac_kiem_soat_quyen_truy_cap_trang_web,
			/** 4250 */
			Quy_tac_lap_lai,
			/** 4004 */
			Quy_tac_Lich,
			/** 4811 */
			Quy_tac_mui_gio,
			/** 4414 */
			Quy_tac_Phat_hien_Su_trung_lap,
			/** 1117 */
			Quy_tac_ruy_bang,
			/** 9300 */
			Quy_tac_tao_va_cap_nhat_ban_ghi,
			/** 10282 */
			Quy_tac_Tinh_trang_Giai_phap,
			/** 9951 */
			Quy_tac_Tuong_tu,
			/** 9949 */
			Quy_tac_Tuong_tu_Nang_cao,
			/** 4703 */
			Quy_trinh,
			/** 955 */
			Quy_trinh_da_het_han,
			/** 951 */
			Quy_trinh_Dich_thuat,
			/** 950 */
			Quy_trinh_moi,
			/** 1023 */
			Quyen,
			/** 1201 */
			Quyen_cua_Truong,
			/** 10324 */
			Quyen_doi_voi_bang,
			/** 10318 */
			Quyen_doi_voi_cot,
			/** 10039 */
			Quyen_trong_Khong_gian_lam_viec_Data_Lake,
			/** 10037 */
			Quyen_trong_Thu_muc_Data_Lake,
			/** 5000 */
			Recently_Used,
			/** 10231 */
			ReconciliationEntityInfo,
			/** 10232 */
			ReconciliationEntityStepInfo,
			/** 10233 */
			ReconciliationInfo,
			/** 72 */
			Record_Filter,
			/** 10213 */
			Report_Parameter,
			/** 10247 */
			Restore_Deleted_Records_Configuration,
			/** 10042 */
			RetainedData_Excel,
			/** 10234 */
			RetentionCleanupInfo,
			/** 10235 */
			RetentionCleanupOperation,
			/** 10236 */
			RetentionConfig,
			/** 10237 */
			RetentionFailureDetail,
			/** 10238 */
			RetentionOperation,
			/** 10239 */
			RetentionOperationDetail,
			/** 10059 */
			RevokeInheritedAccessRecordsTracker,
			/** 10245 */
			RoleEditorLayout,
			/** 7200 */
			RuntimeDependency,
			/** 1120 */
			Ruy_bang_ung_dung,
			/** 10178 */
			Salesforce_Structured_Object,
			/** 10179 */
			Salesforce_Structured_QnA_Config,
			/** 10169 */
			Schedule,
			/** 10192 */
			Search_provider,
			/** 10297 */
			Search_Telemetry,
			/** 10293 */
			SearchAttributeSettings,
			/** 10294 */
			SearchCustomAnalyzer,
			/** 10295 */
			SearchRelationshipSettings,
			/** 10296 */
			SearchResultsCache,
			/** 9820 */
			Secured_Masking_Column,
			/** 74 */
			Secured_Masking_Rule,
			/** 10186 */
			Service_Configuration,
			/** 101 */
			Service_Plan,
			/** 10070 */
			Service_Plan_Custom_Control,
			/** 10069 */
			Service_Plan_Mapping,
			/** 10054 */
			Shared_Link_Setting,
			/** 10033 */
			Shared_Object,
			/** 10034 */
			Shared_Workspace,
			/** 10035 */
			Shared_Workspace_Pool,
			/** 10125 */
			SideloadedAIPlugin,
			/** 8700 */
			Sieu_du_lieu_AppModule,
			/** 10322 */
			Sieu_du_lieu_bieu_mau_co_ban,
			/** 10336 */
			Sieu_du_lieu_bieu_mau_nhieu_buoc,
			/** 4579 */
			Sieu_du_lieu_May_khach_trong_Ruy_bang,
			/** 9880 */
			Sieu_du_lieu_Ruy_bang_de_Xu_ly,
			/** 10211 */
			Sieu_du_lieu_thuc_the_ao,
			/** 7000 */
			Sieu_du_lieu_ung_dung_he_thong,
			/** 7001 */
			Sieu_du_lieu_ung_dung_nguoi_dung,
			/** 10305 */
			Site_Power_Pages_da_xuat_ban,
			/** 10187 */
			SLA_KPI,
			/** 4600 */
			So_do_Thuc_the,
			/** 4709 */
			So_do_trang_web,
			/** 9699 */
			So_lieu_Hieu_biet_To_chuc,
			/** 9603 */
			So_lieu_Muc_tieu,
			/** 1300 */
			SocialInsightsConfiguration,
			/** 10017 */
			Solution_Component_Count_Data_Source,
			/** 10015 */
			Solution_Component_Count_Summary,
			/** 10016 */
			Solution_Component_Data_Source,
			/** 10014 */
			Solution_Component_Summary,
			/** 9890 */
			SolutionHistoryData,
			/** 10011 */
			StageSolutionUpload,
			/** 10081 */
			Su_kien_trong_quy_trinh,
			/** 4711 */
			Su_kien_trong_Trinh_mo_rong,
			/** 1190 */
			SuggestionCardTemplate,
			/** 10205 */
			SupportUserTable,
			/** 10044 */
			Synapse_Link_External_Table_State,
			/** 10045 */
			Synapse_Link_Profile,
			/** 10046 */
			Synapse_Link_Profile_Entity,
			/** 10047 */
			Synapse_Link_Profile_Entity_State,
			/** 10048 */
			Synapse_Link_Schedule,
			/** 60 */
			SystemUserAuthorizationChangeTracker,
			/** 10268 */
			Tac_vu_duoc_suy_luan_PM,
			/** 1 */
			Tai_khoan,
			/** 4490 */
			Tai_lieu_Office,
			/** 9950 */
			Tai_lieu_Office_Graph,
			/** 9507 */
			Tai_lieu_SharePoint,
			/** 9754 */
			Tai_nguyen_dieu_khien_tuy_chinh,
			/** 9333 */
			Tai_nguyen_web,
			/** 10285 */
			Tap_du_lieu_Power_BI,
			/** 10060 */
			TdsMetadata,
			/** 10216 */
			TeamMobileOfflineProfileMembership,
			/** 4812 */
			Ten_da_ban_dia_hoa_mui_gio,
			/** 1001 */
			Tep_dinh_kem_1001,
			/** 1002 */
			Tep_dinh_kem_1002,
			/** 10258 */
			Tep_dinh_kem_van_ban_nhieu_dinh_dang,
			/** 10041 */
			Tep_Excel_da_xuat,
			/** 10359 */
			Tep_gui_toi_danh_muc,
			/** 4412 */
			Tep_Nguon_Nhap,
			/** 4707 */
			Tep_Ung_dung,
			/** 10334 */
			Tep_web,
			/** 10110 */
			Tham_chieu_ket_noi,
			/** 10087 */
			Tham_so_giai_doan_quy_trinh,
			/** 10287 */
			Tham_so_phan_mem_ghep_Power_BI,
			/** 10028 */
			Tham_so_yeu_cau_API_tuy_chinh,
			/** 10153 */
			Thanh_phan_Copilot,
			/** 7103 */
			Thanh_phan_giai_phap,
			/** 9007 */
			Thanh_phan_Mo_dun_Ung_dung,
			/** 10277 */
			Thanh_phan_Phan_tich,
			/** 10302 */
			Thanh_phan_trang_web,
			/** 10061 */
			Thanh_phan_Ung_dung_dua_tren_Mo_hinh,
			/** 4424 */
			Thao_tac_Xoa_Hang_loat,
			/** 10279 */
			Thay_the_phan_tich,
			/** 10253 */
			The,
			/** 9962 */
			The_Hanh_dong,
			/** 9959 */
			The_loai,
			/** 9960 */
			The_loai_bai_viet_trong_co_so_kien_thuc,
			/** 9102 */
			The_loai_lien_quan_cua_bao_cao,
			/** 9609 */
			The_loai_Theo_doi_Hop_thu,
			/** 8003 */
			Theo_doi,
			/** 8006 */
			Thich,
			/** 10312 */
			Thiet_dat,
			/** 9900 */
			Thiet_dat_Dieu_huong,
			/** 10259 */
			Thiet_dat_mo_rong_cho_doi_tuong_dieu_khien_tuy_chinh,
			/** 150 */
			Thiet_dat_nguoi_dung,
			/** 10271 */
			Thiet_dat_nguoi_dung_cho_quy_trinh_PM,
			/** 9973 */
			Thiet_dat_Nguoi_dung_The_Hanh_dong,
			/** 10065 */
			Thiet_dat_nguoi_dung_ung_dung_dua_tren_mo_hinh,
			/** 10183 */
			Thiet_dat_PDF,
			/** 10066 */
			Thiet_dat_to_chuc,
			/** 10333 */
			Thiet_dat_trang,
			/** 2500 */
			Thiet_dat_UI_thuc_the_nguoi_dung,
			/** 10064 */
			Thiet_dat_ung_dung_dua_tren_mo_hinh,
			/** 9750 */
			Thoa_thuan_Cap_do_Dich_vu,
			/** 10240 */
			Thong_bao_10240,
			/** 132 */
			Thong_bao_132,
			/** 4110 */
			Thong_bao_4110,
			/** 9690 */
			Thong_bao_Hieu_biet_To_chuc,
			/** 4606 */
			Thong_bao_sdk,
			/** 45 */
			Thong_ke_Dang_ky_Ngoai_tuyen,
			/** 46 */
			Thong_ke_Dang_ky_Outlook,
			/** 9607 */
			Thong_ke_Hop_thu,
			/** 4603 */
			Thong_ke_loai_bo_tro,
			/** 4708 */
			Thong_ke_ve_to_chuc,
			/** 33 */
			Thong_tin_dong_bo_dang_ky,
			/** 35 */
			Thong_tin_theo_doi_thuc_the_da_xoa,
			/** 10077 */
			Thong_tin_xac_thuc,
			/** 10036 */
			Thu_muc_Data_Lake,
			/** 9608 */
			Thu_muc_Tu_dong_Theo_doi_Hop_thu,
			/** 4207 */
			Thu_tin,
			/** 9800 */
			Thuc_the,
			/** 9101 */
			Thuc_the_lien_quan_cua_bao_cao,
			/** 9813 */
			Thuc_the_moi_quan_he,
			/** 10019 */
			Thuc_the_theo_giai_doan,
			/** 9808 */
			Thuoc_tinh,
			/** 9816 */
			Thuoc_tinh_chi_muc,
			/** 9812 */
			Thuoc_tinh_Duoc_quan_ly,
			/** 1236 */
			Thuoc_tinh_Kenh,
			/** 9814 */
			Thuoc_tinh_moi_quan_he,
			/** 10029 */
			Thuoc_tinh_phan_hoi_API_tuy_chinh,
			/** 10020 */
			Thuoc_tinh_thuc_the_theo_giai_doan,
			/** 52 */
			Thuoc_tinh_Tim_kiem_Nguoi_dung,
			/** 9510 */
			Thuoc_tinh_tong_so,
			/** 4299 */
			Tim_kiem_Email,
			/** 1019 */
			To_chuc,
			/** 1140 */
			Ton_dong_sao_chep,
			/** 9011 */
			Tong_the_Cau_hinh_Ung_dung,
			/** 9502 */
			Trang_SharePoint,
			/** 9875 */
			Trang_thai_Cap_ngon_ngu,
			/** 10328 */
			Trang_thai_phat_hanh,
			/** 3000 */
			Trang_thai_Tich_hop,
			/** 4802 */
			Trang_trinh_huong_dan,
			/** 10148 */
			Trang_Tro_giup,
			/** 10303 */
			Trang_web_10303,
			/** 10340 */
			Trang_web_10340,
			/** 4800 */
			Trinh_huong_dan_web,
			/** 372 */
			Trinh_ket_noi,
			/** 10185 */
			Tro_chuyen_qua_Teams,
			/** 4611 */
			Truong_phan_hoi_thong_bao_sdk,
			/** 9604 */
			Truong_tong_so,
			/** 4614 */
			Truong_yeu_cau_thong_bao_sdk,
			/** 10344 */
			Truy_cap_website,
			/** 9602 */
			Truy_van_Tinh_tong_so,
			/** 8052 */
			Truy_vet_co_lien_quan,
			/** 9986 */
			Tuong_tac_doi_voi_Email,
			/** 10154 */
			Tuyen_tap_thanh_phan_copilot,
			/** 1021 */
			UI_to_chuc,
			/** 300 */
			Ung_dung_Bang_tuy_bien,
			/** 9006 */
			Ung_dung_dinh_huong_mo_hinh,
			/** 1095 */
			Ung_dung_doi_tac,
			/** 10080 */
			Ung_dung_thong_tin_xac_thuc_dong_quy_trinh,
			/** 10262 */
			Ung_vien_cot_bang_ao,
			/** 4220 */
			UntrackedEmail,
			/** 10217 */
			UserMobileOfflineProfileMembership,
			/** 8001 */
			Vai_tro_bai_dang,
			/** 1036 */
			Vai_tro_bao_mat,
			/** 4500 */
			Vai_tro_cua_moi_quan_he,
			/** 3231 */
			Vai_tro_Ket_noi,
			/** 9009 */
			Vai_tro_Mo_dun_Ung_dung,
			/** 10342 */
			Vai_tro_web,
			/** 50 */
			Vi_tri,
			/** 10317 */
			Vi_tri_quang_cao,
			/** 9508 */
			Vi_tri_tai_lieu,
			/** 10326 */
			Vi_tri_tham_do_y_kien,
			/** 10298 */
			ViewAsExampleQuestion,
			/** 2013 */
			Vung_lanh_tho,
			/** 10343 */
			Website,
			/** 10180 */
			Workflow_Action_Status,
			/** 10241 */
			Xep_hang_nguoi_dung,
			/** 10095 */
			Yeu_cau_Phe_duyet,
			/** 4609 */
			Yeu_cau_thong_bao_sdk
		}
		enum SLAType {
			/** 0 */
			Chuan,
			/** 1 */
			Nang_cao
		}
		enum slaversion {
			/** 100000001 */
			Version_UC,
			/** 100000000 */
			Version_WC
		}
		enum StateCode {
			/** 0 */
			Ban_nhap,
			/** 1 */
			Hien_hoat
		}
		enum StatusCode {
			/** 1 */
			Ban_nhap,
			/** 2 */
			Hien_hoat
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMuc_Cau_hinh_Mobile_Offline {
		interface tab_GENERALINFORMATION_TAB_Sections {
			Entity_Selection: DevKit.Controls.Section;
			MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS: DevKit.Controls.Section;
		}
		interface tab_GENERALINFORMATION_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			GENERALINFORMATION_TAB: tab_GENERALINFORMATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Nhập tên của mục cấu hình Mobile Offline. */
			Name: DevKit.Controls.String;
			/** Chỉ định bộ lọc tải xuống dữ liệu cho thực thể đã chọn */
			RecordDistributionCriteria: DevKit.Controls.OptionSet;
			/** Tải xuống bản ghi của tôi */
			RecordsOwnedByMe: DevKit.Controls.Boolean;
			/** Tải xuống bản ghi cho đơn vị kinh doanh của tôi */
			RecordsOwnedByMyBusinessUnit: DevKit.Controls.Boolean;
			/** Tải xuống bản ghi cho nhóm của tôi */
			RecordsOwnedByMyTeam: DevKit.Controls.Boolean;
			/** Thực thể đã bật Mobile Offline */
			SelectedEntityTypeCode: DevKit.Controls.String;
		}
		interface Navigation {
			MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: DevKit.Controls.NavigationItem
		}
		interface Grid {
			profileassociationgrid: DevKit.Controls.Grid;
		}
	}
	class FormMuc_Cau_hinh_Mobile_Offline extends DevKit.IForm {
		/**
		* Mục Cấu hình Mobile Offline [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Muc_Cau_hinh_Mobile_Offline */
		Body: DevKit.FormMuc_Cau_hinh_Mobile_Offline.Body;
		/** The Navigation of form Muc_Cau_hinh_Mobile_Offline */
		Navigation: DevKit.FormMuc_Cau_hinh_Mobile_Offline.Navigation;
		/** The Grid of form Muc_Cau_hinh_Mobile_Offline */
		Grid: DevKit.FormMuc_Cau_hinh_Mobile_Offline.Grid;
		/** The SidePanes of form Muc_Cau_hinh_Mobile_Offline */
		SidePanes: DevKit.SidePanes;
	}
	class MobileOfflineProfileItemApi {
		/**
		* DynamicsCrm.DevKit MobileOfflineProfileItemApi
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
		/** Chỉ định xem có thể theo dõi các bản ghi của thực thể này không. */
		CanBeFollowed: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.MobileOfflineProfileItem.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Chỉ Sử dụng Nội bộ */
		readonly EntityObjectTypeCode: number;
		/** Chỉ định xem các bản ghi liên quan đến thực thể này có được cung cấp để truy cập ngoại tuyến không. */
		GetRelatedEntityRecords: boolean;
		/** Phiên bản trong đó Mục Cấu hình Mobile Offline được giới thiệu. */
		IntroducedVersion: string;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Thông tin về việc mục cấu hình đã được xác thực hay chưa */
		readonly IsValidated: boolean;
		/** Thông tin về khả năng mục cấu hình mobile offline hiển thị trong lưới con Mục Cấu hình. */
		IsVisibleInGrid: boolean;
		/** Mã định danh duy nhất của mục cấu hình Mobile Offline. */
		MobileOfflineProfileItemId: string;
		/** Chỉ Sử dụng Nội bộ */
		readonly MobileOfflineProfileItemIdUnique: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người đã cập nhật bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên của mục cấu hình Mobile Offline. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với Mục Cấu hình Mobile Offline. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Tiêu chí bộ lọc thực thể mục cấu hình */
		ProfileItemEntityFilter: string;
		/** Đã lưu Truy vấn được liên kết với quy tắc mục cấu hình Mobile offline. */
		ProfileItemRule: string;
		/** Hiển thị ngày xuất bản lần cuối. */
		readonly PublishedOn_UtcDateAndTime: Date;
		/** Chỉ định bộ lọc tải xuống dữ liệu cho thực thể đã chọn */
		RecordDistributionCriteria: OptionSet.MobileOfflineProfileItem.RecordDistributionCriteria;
		/** Tải xuống bản ghi của tôi */
		RecordsOwnedByMe: boolean;
		/** Tải xuống bản ghi cho đơn vị kinh doanh của tôi */
		RecordsOwnedByMyBusinessUnit: boolean;
		/** Tải xuống bản ghi cho nhóm của tôi */
		RecordsOwnedByMyTeam: boolean;
		/** Các mục chứa Cấu hình cụ thể. */
		RegardingObjectId: string;
		/** Chỉ Sử dụng Nội bộ */
		RelationshipData: string;
		/** Selected attributes of an entity to enable for offline sync */
		SelectedColumns: string;
		/** Chỉ Sử dụng Nội bộ */
		readonly SelectedEntityMetadata: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** How often to sync data offline. */
		SyncIntervalInMinutes: number;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Số phiên bản của Mục Cấu hình Mobile Offline. */
		readonly VersionNumber: number;
		/** Chứa sql đã chuyển đổi của dạng xem được tham chiếu. */
		ViewQuery: string;
		readonly FormattedValue: {
			/** Chỉ định xem có thể theo dõi các bản ghi của thực thể này không. */
			readonly CanBeFollowed: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly EntityObjectTypeCode: string;
			/** Chỉ định xem các bản ghi liên quan đến thực thể này có được cung cấp để truy cập ngoại tuyến không. */
			readonly GetRelatedEntityRecords: string;
			/** Phiên bản trong đó Mục Cấu hình Mobile Offline được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Thông tin về việc mục cấu hình đã được xác thực hay chưa */
			readonly IsValidated: string;
			/** Thông tin về khả năng mục cấu hình mobile offline hiển thị trong lưới con Mục Cấu hình. */
			readonly IsVisibleInGrid: string;
			/** Mã định danh duy nhất của mục cấu hình Mobile Offline. */
			readonly MobileOfflineProfileItemId: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly MobileOfflineProfileItemIdUnique: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người đã cập nhật bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên của mục cấu hình Mobile Offline. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với Mục Cấu hình Mobile Offline. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Tiêu chí bộ lọc thực thể mục cấu hình */
			readonly ProfileItemEntityFilter: string;
			/** Đã lưu Truy vấn được liên kết với quy tắc mục cấu hình Mobile offline. */
			readonly ProfileItemRule: string;
			/** Hiển thị ngày xuất bản lần cuối. */
			readonly PublishedOn_UtcDateAndTime: string;
			/** Chỉ định bộ lọc tải xuống dữ liệu cho thực thể đã chọn */
			readonly RecordDistributionCriteria: string;
			/** Tải xuống bản ghi của tôi */
			readonly RecordsOwnedByMe: string;
			/** Tải xuống bản ghi cho đơn vị kinh doanh của tôi */
			readonly RecordsOwnedByMyBusinessUnit: string;
			/** Tải xuống bản ghi cho nhóm của tôi */
			readonly RecordsOwnedByMyTeam: string;
			/** Các mục chứa Cấu hình cụ thể. */
			readonly RegardingObjectId: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly RelationshipData: string;
			/** Selected attributes of an entity to enable for offline sync */
			readonly SelectedColumns: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly SelectedEntityMetadata: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** How often to sync data offline. */
			readonly SyncIntervalInMinutes: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Số phiên bản của Mục Cấu hình Mobile Offline. */
			readonly VersionNumber: string;
			/** Chứa sql đã chuyển đổi của dạng xem được tham chiếu. */
			readonly ViewQuery: string;
		}
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfileItem {
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
		enum RecordDistributionCriteria {
			/** 2 */
			Bo_loc_du_lieu_khac,
			/** 3 */
			Bo_loc_du_lieu_tuy_chinh,
			/** 0 */
			Chi_tai_xuong_du_lieu_co_lien_quan,
			/** 1 */
			Tat_ca_ban_ghi
		}
		enum SelectedEntityTypeCode {
			/** 4201 */
			Cuoc_hen,
			/** 4202 */
			Email,
			/** 2020 */
			Hang_doi,
			/** 1 */
			Khach_hang,
			/** 10199 */
			Knowledge_Article_Attachment,
			/** 10193 */
			Knowledge_Article_Image,
			/** 1007 */
			Ky_hieu_mo_ta_Hinh_anh,
			/** 5 */
			Luu_y,
			/** 2029 */
			Muc_trong_hang_doi,
			/** 8 */
			Nguoi_dung,
			/** 2 */
			Nguoi_lien_he,
			/** 4212 */
			Nhiem_vu,
			/** 9 */
			Nhom,
			/** 10221 */
			OrganizationDataSyncFnoState,
			/** 10222 */
			OrganizationDataSyncState,
			/** 10184 */
			Phan_dinh_kem_tep_hoat_dong,
			/** 9752 */
			Phien_ban_SLA_KPI,
			/** 1001 */
			Tep_dinh_kem
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormLien_ket_Muc_Cau_hinh_Mobile_Offline {
		interface tab_GENERALINFORMATION_TAB_Sections {
			General: DevKit.Controls.Section;
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
			/** Nhập tên của liên kết mục cấu hình Mobile Offline. */
			Name: DevKit.Controls.String;
			/** Tên hiển thị của mối quan hệ của thực thể */
			RelationshipName: DevKit.Controls.String;
			/** Danh sách các mối quan hệ của thực thể đã chọn trong mục cấu hình mẹ */
			SelectedRelationShipsSchema: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormLien_ket_Muc_Cau_hinh_Mobile_Offline extends DevKit.IForm {
		/**
		* Liên kết Mục Cấu hình Mobile Offline [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Lien_ket_Muc_Cau_hinh_Mobile_Offline */
		Body: DevKit.FormLien_ket_Muc_Cau_hinh_Mobile_Offline.Body;
		/** The Navigation of form Lien_ket_Muc_Cau_hinh_Mobile_Offline */
		Navigation: DevKit.FormLien_ket_Muc_Cau_hinh_Mobile_Offline.Navigation;
		/** The SidePanes of form Lien_ket_Muc_Cau_hinh_Mobile_Offline */
		SidePanes: DevKit.SidePanes;
	}
	class MobileOfflineProfileItemAssociationApi {
		/**
		* DynamicsCrm.DevKit MobileOfflineProfileItemAssociationApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.MobileOfflineProfileItemAssociation.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Phiên bản trong đó Liên kết Mục Cấu hình Mobile Offline được giới thiệu. */
		IntroducedVersion: string;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Thông tin về việc liên kết mục cấu hình đã được xác thực hay chưa */
		readonly IsValidated: boolean;
		/** Mã định danh duy nhất của liên kết mục cấu hình Mobile Offline. */
		MobileOfflineProfileItemAssociationId: string;
		/** Chỉ sử dụng nội bộ */
		readonly MobileOfflineProfileItemAssociationIdUnique: string;
		/** Id của mục cấu hình mẹ. */
		MobileOfflineProfileItemId: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người đã cập nhật bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên của liên kết mục cấu hình Mobile Offline. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức được liên kết với Mục Cấu hình Mobile Offline. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Cho biết ID của quy trình. */
		ProcessId: string;
		/** Tiêu chí bộ lọc thực thể liên kết mục cấu hình. */
		ProfileItemAssociationEntityFilter: string;
		/** Hiển thị ngày xuất bản lần cuối. */
		readonly PublishedOn_UtcDateAndTime: Date;
		/** Chỉ Sử dụng Nội bộ */
		RelationshipData: string;
		/** Tên sơ đồ mối quan hệ của thực thể */
		RelationshipDisplayName: string;
		/** Hiển thị mối quan hệ */
		RelationshipId: string;
		/** Tên hiển thị của mối quan hệ của thực thể */
		readonly RelationshipName: string;
		/** Danh sách các mối quan hệ của thực thể đã chọn trong mục cấu hình mẹ */
		SelectedRelationShipsSchema: OptionSet.MobileOfflineProfileItemAssociation.SelectedRelationShipsSchema;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Cho biết ID của giai đoạn. */
		StageId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TraversedPath: string;
		/** Số phiên bản của liên kết mục cấu hình Mobile Offline. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Phiên bản trong đó Liên kết Mục Cấu hình Mobile Offline được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Thông tin về việc liên kết mục cấu hình đã được xác thực hay chưa */
			readonly IsValidated: string;
			/** Mã định danh duy nhất của liên kết mục cấu hình Mobile Offline. */
			readonly MobileOfflineProfileItemAssociationId: string;
			/** Chỉ sử dụng nội bộ */
			readonly MobileOfflineProfileItemAssociationIdUnique: string;
			/** Id của mục cấu hình mẹ. */
			readonly MobileOfflineProfileItemId: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người đã cập nhật bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên của liên kết mục cấu hình Mobile Offline. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với Mục Cấu hình Mobile Offline. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Cho biết ID của quy trình. */
			readonly ProcessId: string;
			/** Tiêu chí bộ lọc thực thể liên kết mục cấu hình. */
			readonly ProfileItemAssociationEntityFilter: string;
			/** Hiển thị ngày xuất bản lần cuối. */
			readonly PublishedOn_UtcDateAndTime: string;
			/** Chỉ Sử dụng Nội bộ */
			readonly RelationshipData: string;
			/** Tên sơ đồ mối quan hệ của thực thể */
			readonly RelationshipDisplayName: string;
			/** Hiển thị mối quan hệ */
			readonly RelationshipId: string;
			/** Tên hiển thị của mối quan hệ của thực thể */
			readonly RelationshipName: string;
			/** Danh sách các mối quan hệ của thực thể đã chọn trong mục cấu hình mẹ */
			readonly SelectedRelationShipsSchema: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Cho biết ID của giai đoạn. */
			readonly StageId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraversedPath: string;
			/** Số phiên bản của liên kết mục cấu hình Mobile Offline. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfileItemAssociation {
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
		enum SelectedRelationShipsSchema {
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
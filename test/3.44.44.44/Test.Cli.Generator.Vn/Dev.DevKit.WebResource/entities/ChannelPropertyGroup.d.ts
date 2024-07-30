//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormNhom_Thuoc_tinh_Kenh {
		interface tab_property_bag_summary_Sections {
			property_bag_items_1: DevKit.Controls.Section;
			property_bag_properties_1: DevKit.Controls.Section;
		}
		interface tab_property_bag_summary extends DevKit.Controls.ITab {
			Section: tab_property_bag_summary_Sections;
		}
		interface Tabs {
			property_bag_summary: tab_property_bag_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Nhập tên nhóm thuộc tính kênh. */
			Name: DevKit.Controls.String;
			/** Chọn hoạt động có nhóm thuộc tính được liên kết. */
			RegardingTypeCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			ChannelPropertyGroup_ChannelProperty: DevKit.Controls.NavigationItem,
			channelpropertygroup_convertrule: DevKit.Controls.NavigationItem
		}
		interface Grid {
			propertiesGrid: DevKit.Controls.Grid;
		}
	}
	class FormNhom_Thuoc_tinh_Kenh extends DevKit.IForm {
		/**
		* Nhóm Thuộc tính Kênh [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Nhom_Thuoc_tinh_Kenh */
		Body: DevKit.FormNhom_Thuoc_tinh_Kenh.Body;
		/** The Navigation of form Nhom_Thuoc_tinh_Kenh */
		Navigation: DevKit.FormNhom_Thuoc_tinh_Kenh.Navigation;
		/** The Grid of form Nhom_Thuoc_tinh_Kenh */
		Grid: DevKit.FormNhom_Thuoc_tinh_Kenh.Grid;
		/** The SidePanes of form Nhom_Thuoc_tinh_Kenh */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelPropertyGroupApi {
		/**
		* DynamicsCrm.DevKit ChannelPropertyGroupApi
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
		/** Mã định danh duy nhất của nhóm thuộc tính kênh */
		ChannelPropertyGroupId: string;
		/** Chỉ sử dụng nội bộ */
		readonly ChannelPropertyGroupIdUnique: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ChannelPropertyGroup.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập mô tả cho nhóm thuộc tính. */
		Description: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo thuộc tính này. */
		ImportSequenceNumber: number;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người đã cập nhật bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên nhóm thuộc tính kênh. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức được liên kết với nhóm thuộc tính kênh. */
		readonly OrganizationId: string;
		/** Ngày và giờ di chuyển thuộc tính. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Chọn hoạt động có nhóm thuộc tính được liên kết. */
		RegardingTypeCode: OptionSet.ChannelPropertyGroup.RegardingTypeCode;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Tình trạng của nhóm thuộc tính kênh */
		statecode: OptionSet.ChannelPropertyGroup.statecode;
		/** Trạng thái của nhóm thuộc tính kênh */
		statuscode: OptionSet.ChannelPropertyGroup.statuscode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số phiên bản của nhóm thuộc tính kênh. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của nhóm thuộc tính kênh */
			readonly ChannelPropertyGroupId: string;
			/** Chỉ sử dụng nội bộ */
			readonly ChannelPropertyGroupIdUnique: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập mô tả cho nhóm thuộc tính. */
			readonly Description: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo thuộc tính này. */
			readonly ImportSequenceNumber: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người đã cập nhật bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên nhóm thuộc tính kênh. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với nhóm thuộc tính kênh. */
			readonly OrganizationId: string;
			/** Ngày và giờ di chuyển thuộc tính. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Chọn hoạt động có nhóm thuộc tính được liên kết. */
			readonly RegardingTypeCode: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Tình trạng của nhóm thuộc tính kênh */
			readonly statecode: string;
			/** Trạng thái của nhóm thuộc tính kênh */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số phiên bản của nhóm thuộc tính kênh. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelPropertyGroup {
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
		enum RegardingTypeCode {
			/** 4210 */
			Cuoc_goi_Dien_thoai,
			/** 4201 */
			Cuoc_hen,
			/** 4202 */
			Email,
			/** 4216 */
			Hoat_dong_mang_xa_hoi,
			/** 10311 */
			Nhan_xet_Cong_thong_tin,
			/** 4212 */
			Nhiem_vu,
			/** 10310 */
			Quy_doi_Loi_moi,
			/** 10185 */
			Tro_chuyen_qua_Teams
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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
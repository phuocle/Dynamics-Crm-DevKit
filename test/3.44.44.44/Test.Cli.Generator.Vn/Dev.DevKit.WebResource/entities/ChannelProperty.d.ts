//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThuoc_tinh_Kenh {
		interface tab_general_Sections {
			channelpropertyinformation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập tên của ứng dụng có thuộc tính được liên kết. */
			Applicationsource: DevKit.Controls.String;
			/** Nhập loại dữ liệu của thuộc tính. */
			DataType: DevKit.Controls.OptionSet;
			/** Mô tả thuộc tính */
			Description: DevKit.Controls.String;
			/** Nhập tên của thuộc tính nhận được trong thông tin được cung cấp bởi ứng dụng bên ngoài. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormThuoc_tinh_Kenh extends DevKit.IForm {
		/**
		* Thuộc tính Kênh [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thuoc_tinh_Kenh */
		Body: DevKit.FormThuoc_tinh_Kenh.Body;
		/** The Navigation of form Thuoc_tinh_Kenh */
		Navigation: DevKit.FormThuoc_tinh_Kenh.Navigation;
		/** The SidePanes of form Thuoc_tinh_Kenh */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelPropertyApi {
		/**
		* DynamicsCrm.DevKit ChannelPropertyApi
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
		/** Nhập tên của ứng dụng có thuộc tính được liên kết. */
		Applicationsource: string;
		/** Mã định danh duy nhất của thuộc tính kênh */
		ChannelPropertyId: string;
		/** Chỉ sử dụng nội bộ */
		readonly ChannelPropertyIdUnique: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ChannelProperty.ComponentState;
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Hiển thị và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập loại dữ liệu của thuộc tính. */
		DataType: OptionSet.ChannelProperty.DataType;
		/** Mô tả thuộc tính */
		Description: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo thuộc tính này. */
		ImportSequenceNumber: number;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Hiển thị ngày và giờ cập nhật bản ghi lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người đã cập nhật bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên của thuộc tính nhận được trong thông tin được cung cấp bởi ứng dụng bên ngoài. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức được liên kết với thuộc tính kênh. */
		readonly OrganizationId: string;
		/** Ngày và giờ di chuyển thuộc tính. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Các thuộc tính được chứa trong một túi cụ thể. */
		RegardingObjectId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Tình trạng của thuộc tính kênh */
		statecode: OptionSet.ChannelProperty.statecode;
		/** Trạng thái của thuộc tính kênh */
		statuscode: OptionSet.ChannelProperty.statuscode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số phiên bản của thuộc tính kênh. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Nhập tên của ứng dụng có thuộc tính được liên kết. */
			readonly Applicationsource: string;
			/** Mã định danh duy nhất của thuộc tính kênh */
			readonly ChannelPropertyId: string;
			/** Chỉ sử dụng nội bộ */
			readonly ChannelPropertyIdUnique: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Hiển thị và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập loại dữ liệu của thuộc tính. */
			readonly DataType: string;
			/** Mô tả thuộc tính */
			readonly Description: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo thuộc tính này. */
			readonly ImportSequenceNumber: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Hiển thị ngày và giờ cập nhật bản ghi lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người đã cập nhật bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên của thuộc tính nhận được trong thông tin được cung cấp bởi ứng dụng bên ngoài. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với thuộc tính kênh. */
			readonly OrganizationId: string;
			/** Ngày và giờ di chuyển thuộc tính. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Các thuộc tính được chứa trong một túi cụ thể. */
			readonly RegardingObjectId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Tình trạng của thuộc tính kênh */
			readonly statecode: string;
			/** Trạng thái của thuộc tính kênh */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số phiên bản của thuộc tính kênh. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelProperty {
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
		enum DataType {
			/** 1 */
			Mot_dong_Van_ban,
			/** 2 */
			So_Nguyen,
			/** 0 */
			So_thuc_Dau_phay_Dong
		}
		enum RegardingObjectTypeCode {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SettingDefinitionApi {
		/**
		* DynamicsCrm.DevKit SettingDefinitionApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SettingDefinition.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Kiểu dữ liệu định nghĩa thiết đặt. */
		DataType: OptionSet.SettingDefinition.DataType;
		/** Giá trị mặc định sẽ được dùng, nếu không có Giá trị thiết đặt ứng dụng liên kết. */
		DefaultValue: string;
		/** Mô tả về Định nghĩa thiết đặt. */
		Description: string;
		/** Tên hiển thị của Định nghĩa thiết đặt. */
		DisplayName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Chỉ định URL cung cấp thông tin của tùy chọn thiết đặt. */
		InformationUrl: string;
		/** For internal use only. */
		IsCustomizable: string;
		/** Chỉ định xem có ẩn phần thiết đặt khỏi trình thiết kế giao diện người dùng hay không. */
		IsHidden: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Chỉ định xem các nhà xuất bản khác có thể thay thế thiết đặt ở cấp ứng dụng hoặc tổ chức hay không. */
		IsOverridable: boolean;
		/** Chỉ định xem tùy chọn thiết đặt có phải là thiết đặt nền tảng nội bộ hay không. */
		IsPlatform: boolean;
		/** Chỉ định xem phần thiết đặt có kiểm soát việc dùng thử tính năng đang ở giai đoạn bản xem trước hay không. */
		readonly IsPreview: boolean;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		/** Xác định cấp độ thiết đặt có thể ghi đè. */
		OverridableLevel: OptionSet.SettingDefinition.OverridableLevel;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Chỉ định cấp độ phát hành của các tùy chọn thiết đặt. */
		ReleaseLevel: OptionSet.SettingDefinition.ReleaseLevel;
		/** Mã định danh duy nhất của phiên bản thực thể */
		SettingDefinitionId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Trạng thái của SettingDefinition */
		statecode: OptionSet.SettingDefinition.statecode;
		/** Lý do dẫn đến trạng thái SettingDefinition */
		statuscode: OptionSet.SettingDefinition.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tên duy nhất của Định nghĩa thiết đặt. */
		UniqueName: string;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Kiểu dữ liệu định nghĩa thiết đặt. */
			readonly DataType: string;
			/** Giá trị mặc định sẽ được dùng, nếu không có Giá trị thiết đặt ứng dụng liên kết. */
			readonly DefaultValue: string;
			/** Mô tả về Định nghĩa thiết đặt. */
			readonly Description: string;
			/** Tên hiển thị của Định nghĩa thiết đặt. */
			readonly DisplayName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Chỉ định URL cung cấp thông tin của tùy chọn thiết đặt. */
			readonly InformationUrl: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Chỉ định xem có ẩn phần thiết đặt khỏi trình thiết kế giao diện người dùng hay không. */
			readonly IsHidden: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Chỉ định xem các nhà xuất bản khác có thể thay thế thiết đặt ở cấp ứng dụng hoặc tổ chức hay không. */
			readonly IsOverridable: string;
			/** Chỉ định xem tùy chọn thiết đặt có phải là thiết đặt nền tảng nội bộ hay không. */
			readonly IsPlatform: string;
			/** Chỉ định xem phần thiết đặt có kiểm soát việc dùng thử tính năng đang ở giai đoạn bản xem trước hay không. */
			readonly IsPreview: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			/** Xác định cấp độ thiết đặt có thể ghi đè. */
			readonly OverridableLevel: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Chỉ định cấp độ phát hành của các tùy chọn thiết đặt. */
			readonly ReleaseLevel: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly SettingDefinitionId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Trạng thái của SettingDefinition */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái SettingDefinition */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tên duy nhất của Định nghĩa thiết đặt. */
			readonly UniqueName: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SettingDefinition {
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
			/** 2 */
			Boolean,
			/** 1 */
			Chuoi,
			/** 0 */
			So
		}
		enum OverridableLevel {
			/** 1 */
			Chi_o_cap_do_To_chuc,
			/** 2 */
			Chi_ung_dung,
			/** 0 */
			Ung_dung_va_To_chuc
		}
		enum ReleaseLevel {
			/** 2 */
			Ban_xem_truoc,
			/** 0 */
			GA,
			/** 1 */
			Quyen_truy_cap_som
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
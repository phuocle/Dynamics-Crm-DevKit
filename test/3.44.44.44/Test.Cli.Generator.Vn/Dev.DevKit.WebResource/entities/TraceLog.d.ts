//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class TraceLogApi {
		/**
		* DynamicsCrm.DevKit TraceLogApi
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
		/** Cho biết có thể xóa nhật ký truy vết này không. */
		CanBeDeleted: boolean;
		/** Cho biết cấp độ đối chiếu */
		CollationLevel: number;
		/** Mã định danh duy nhất của người dùng đã tạo dấu vết. */
		readonly CreatedBy: string;
		/** Thời gian tạo và ghi nhật ký lỗi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo dấu vết. */
		readonly CreatedOnBehalfBy: string;
		ErrorDetails: string;
		ErrorTypeDisplay: string;
		/** Cho biết khả năng tạo traceLog duy nhất(chỉ một) cho thực thể đã liên kết. */
		IsUnique: boolean;
		/** Thông tin về mức truy vết. */
		Level: OptionSet.TraceLog.Level;
		MachineName: string;
		/** Mã định danh duy nhất của người dùng sửa đổi dấu vết. */
		readonly ModifiedBy: string;
		/** Thời gian cập nhật và ghi nhật ký lỗi cho cùng một đối tượng liên quan. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi dấu vết. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với dấu vết. */
		readonly OrganizationId: string;
		/** Cho biết ID mẹ của nhật ký truy vết. */
		ParentTraceLogId: string;
		/** Hộp thư liên quan hoặc cấu hình máy chủ email. */
		regardingobjectid_emailserverprofile: string;
		/** Hộp thư liên quan hoặc cấu hình máy chủ email. */
		regardingobjectid_mailbox: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu đối tượng liên quan. */
		readonly RegardingObjectOwningBusinessUnit: string;
		/** Văn bản của dấu vết. */
		Text: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Trình bày XML của hành động truy vết. */
		TraceActionXml: string;
		/** Mã lỗi. */
		TraceCode: number;
		/** Trình bày XML của chi tiết dấu vết. */
		TraceDetailXml: string;
		/** Mã định danh duy nhất của dấu vết. */
		TraceLogId: string;
		/** Lưu trữ hàm băm của đối tượng đã liên kết với nhật ký theo dõi này. Hệ thống dùng id và mã loại đối tượng để tính hàm băm. */
		readonly TraceParameterHash: number;
		/** Trình bày XML của tham số truy vết. */
		TraceParameterXml: string;
		/** Chỉ sử dụng nội bộ. */
		readonly TraceRegardingId: string;
		/** Trạng thái về truy vết. */
		TraceStatus: boolean;
		/** Mã múi giờ đã được sử dụng khi tạo truy vết. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Cho biết có thể xóa nhật ký truy vết này không. */
			readonly CanBeDeleted: string;
			/** Cho biết cấp độ đối chiếu */
			readonly CollationLevel: string;
			/** Mã định danh duy nhất của người dùng đã tạo dấu vết. */
			readonly CreatedBy: string;
			/** Thời gian tạo và ghi nhật ký lỗi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo dấu vết. */
			readonly CreatedOnBehalfBy: string;
			readonly ErrorDetails: string;
			readonly ErrorTypeDisplay: string;
			/** Cho biết khả năng tạo traceLog duy nhất(chỉ một) cho thực thể đã liên kết. */
			readonly IsUnique: string;
			/** Thông tin về mức truy vết. */
			readonly Level: string;
			readonly MachineName: string;
			/** Mã định danh duy nhất của người dùng sửa đổi dấu vết. */
			readonly ModifiedBy: string;
			/** Thời gian cập nhật và ghi nhật ký lỗi cho cùng một đối tượng liên quan. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi dấu vết. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với dấu vết. */
			readonly OrganizationId: string;
			/** Cho biết ID mẹ của nhật ký truy vết. */
			readonly ParentTraceLogId: string;
			/** Hộp thư liên quan hoặc cấu hình máy chủ email. */
			readonly regardingobjectid_emailserverprofile: string;
			/** Hộp thư liên quan hoặc cấu hình máy chủ email. */
			readonly regardingobjectid_mailbox: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu đối tượng liên quan. */
			readonly RegardingObjectOwningBusinessUnit: string;
			/** Văn bản của dấu vết. */
			readonly Text: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Trình bày XML của hành động truy vết. */
			readonly TraceActionXml: string;
			/** Mã lỗi. */
			readonly TraceCode: string;
			/** Trình bày XML của chi tiết dấu vết. */
			readonly TraceDetailXml: string;
			/** Mã định danh duy nhất của dấu vết. */
			readonly TraceLogId: string;
			/** Lưu trữ hàm băm của đối tượng đã liên kết với nhật ký theo dõi này. Hệ thống dùng id và mã loại đối tượng để tính hàm băm. */
			readonly TraceParameterHash: string;
			/** Trình bày XML của tham số truy vết. */
			readonly TraceParameterXml: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TraceRegardingId: string;
			/** Trạng thái về truy vết. */
			readonly TraceStatus: string;
			/** Mã múi giờ đã được sử dụng khi tạo truy vết. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace TraceLog {
		enum Level {
			/** 2 */
			Canh_bao,
			/** 3 */
			Loi,
			/** 1 */
			Thong_tin
		}
		enum RegardingObjectOwnerIdType {
		}
		enum RegardingObjectTypeCode {
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
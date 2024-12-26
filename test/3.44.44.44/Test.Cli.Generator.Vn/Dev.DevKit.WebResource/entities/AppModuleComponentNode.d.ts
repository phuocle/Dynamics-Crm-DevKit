//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppModuleComponentNodeApi {
		/**
		* DynamicsCrm.DevKit AppModuleComponentNodeApi
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
		/** Mã định danh duy nhất của phiên bản thực thể */
		AppModuleComponentNodeId: string;
		ComponentDatabaseVersion: string;
		/** Mã định danh duy nhất cho thành phần Ứng dụng dựa trên mô hình. */
		ComponentObjectId: string;
		/** Loại thành phần Ứng dụng dựa trên mô hình. */
		ComponentType: number;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của thực thể AppModuleComponentNode. */
		Name: string;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Phiên bản ảnh tức thời Ứng dụng dựa trên mô hình. */
		SnapshotVersionNumber: number;
		/** Trạng thái AppModuleComponentNode */
		statecode: OptionSet.AppModuleComponentNode.statecode;
		/** Lý do dẫn đến trạng thái của Nút thành phần ứng dụng dựa trên mô hình */
		statuscode: OptionSet.AppModuleComponentNode.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Kết quả xác nhận tạo ảnh tức thời. */
		ValidationResult: string;
		ValidationStatus: OptionSet.AppModuleComponentNode.ValidationStatus;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly AppModuleComponentNodeId: string;
			readonly ComponentDatabaseVersion: string;
			/** Mã định danh duy nhất cho thành phần Ứng dụng dựa trên mô hình. */
			readonly ComponentObjectId: string;
			/** Loại thành phần Ứng dụng dựa trên mô hình. */
			readonly ComponentType: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của thực thể AppModuleComponentNode. */
			readonly Name: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Phiên bản ảnh tức thời Ứng dụng dựa trên mô hình. */
			readonly SnapshotVersionNumber: string;
			/** Trạng thái AppModuleComponentNode */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Nút thành phần ứng dụng dựa trên mô hình */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Kết quả xác nhận tạo ảnh tức thời. */
			readonly ValidationResult: string;
			readonly ValidationStatus: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModuleComponentNode {
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
		enum ValidationStatus {
			/** 2 */
			Loi,
			/** 1 */
			Thanh_cong
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
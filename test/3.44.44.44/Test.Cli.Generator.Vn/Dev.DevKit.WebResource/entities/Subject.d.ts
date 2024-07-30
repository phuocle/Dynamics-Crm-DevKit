//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SubjectApi {
		/**
		* DynamicsCrm.DevKit SubjectApi
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
		/** Mã định danh duy nhất của người dùng đã tạo chủ đề. */
		readonly CreatedBy: string;
		/** Hiển thị bên ngoài đã tạo bản ghi. */
		readonly CreatedByExternalParty: string;
		/** Ngày và giờ tạo chủ đề. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo chủ đề. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả của chủ đề. */
		Description: string;
		/** Thông tin chỉ định thời điểm sẽ hiển thị chủ đề trong danh sách của chủ đề. */
		FeatureMask: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng sửa đổi chủ đề lần cuối. */
		readonly ModifiedBy: string;
		/** Hiển thị bên ngoài đã sửa đổi bản ghi. */
		readonly ModifiedByExternalParty: string;
		/** Ngày và giờ sửa đổi chủ đề lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa chủ đề lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất cho tổ chức liên kết với chủ đề. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Mã định danh duy nhất của chủ đề chính. */
		ParentSubject: string;
		/** Mã định danh duy nhất của chủ đề. */
		SubjectId: string;
		/** Tiêu đề chủ đề. */
		Title: string;
		/** Số phiên bản của chủ đề. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo chủ đề. */
			readonly CreatedBy: string;
			/** Hiển thị bên ngoài đã tạo bản ghi. */
			readonly CreatedByExternalParty: string;
			/** Ngày và giờ tạo chủ đề. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo chủ đề. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả của chủ đề. */
			readonly Description: string;
			/** Thông tin chỉ định thời điểm sẽ hiển thị chủ đề trong danh sách của chủ đề. */
			readonly FeatureMask: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng sửa đổi chủ đề lần cuối. */
			readonly ModifiedBy: string;
			/** Hiển thị bên ngoài đã sửa đổi bản ghi. */
			readonly ModifiedByExternalParty: string;
			/** Ngày và giờ sửa đổi chủ đề lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa chủ đề lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất cho tổ chức liên kết với chủ đề. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Mã định danh duy nhất của chủ đề chính. */
			readonly ParentSubject: string;
			/** Mã định danh duy nhất của chủ đề. */
			readonly SubjectId: string;
			/** Tiêu đề chủ đề. */
			readonly Title: string;
			/** Số phiên bản của chủ đề. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Subject {
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
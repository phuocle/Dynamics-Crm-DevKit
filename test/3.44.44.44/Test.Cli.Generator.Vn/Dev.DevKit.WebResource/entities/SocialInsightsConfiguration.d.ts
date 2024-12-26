//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SocialInsightsConfigurationApi {
		/**
		* DynamicsCrm.DevKit SocialInsightsConfigurationApi
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
		/** Id của kiểm soát. */
		ControlId: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của biểu mẫu có liên kết với lượt thích. */
		FormId: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với giải pháp. */
		readonly OrganizationId: string;
		/** Id mục dữ liệu cho dữ liệu trên mạng xã hội. */
		SocialDataItemId: string;
		/** Loại của mục dữ liệu trên mạng xã hội. */
		SocialDataItemType: OptionSet.SocialInsightsConfiguration.SocialDataItemType;
		/** Tham số dùng để kết xuất dữ liệu trên mạng xã hội. */
		SocialDataParameters: string;
		/** Hiện ID của cấu hình hiểu biết xã hội. */
		SocialInsightsConfigurationId: string;
		readonly FormattedValue: {
			/** Id của kiểm soát. */
			readonly ControlId: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của biểu mẫu có liên kết với lượt thích. */
			readonly FormId: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với giải pháp. */
			readonly OrganizationId: string;
			/** Id mục dữ liệu cho dữ liệu trên mạng xã hội. */
			readonly SocialDataItemId: string;
			/** Loại của mục dữ liệu trên mạng xã hội. */
			readonly SocialDataItemType: string;
			/** Tham số dùng để kết xuất dữ liệu trên mạng xã hội. */
			readonly SocialDataParameters: string;
			/** Hiện ID của cấu hình hiểu biết xã hội. */
			readonly SocialInsightsConfigurationId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SocialInsightsConfiguration {
		enum FormTypeCode {
			/** 1030 */
			Bieu_mau_he_thong,
			/** 1031 */
			Bieu_mau_nguoi_dung
		}
		enum RegardingObjectTypeCode {
		}
		enum SocialDataItemType {
			/** 2 */
			Lop,
			/** 1 */
			Muc_tim_kiem
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
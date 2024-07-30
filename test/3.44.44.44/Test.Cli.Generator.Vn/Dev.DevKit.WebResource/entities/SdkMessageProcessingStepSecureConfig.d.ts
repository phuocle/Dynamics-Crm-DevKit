//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageProcessingStepSecureConfigApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepSecureConfigApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bước xử lý thông báo SDK. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bước xử lý thông báo SDK. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessageprocessingstepsecureconfig. */
		readonly CreatedOnBehalfBy: string;
		/** Cấp độ tùy chỉnh của cấu hình bảo mật dành cho bước xử lý thông báo SDK. */
		readonly CustomizationLevel: number;
		/** Mã định danh duy nhất của người dùng đã sửa bước xử lý thông báo SDK lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa bước xử lý thông báo SDK lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessageprocessingstepsecureconfig lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với bước xử lý thông báo SDK. */
		readonly OrganizationId: string;
		/** Mã định danh duy nhất của cấu hình bảo mật dành cho bước xử lý thông báo SDK. */
		SdkMessageProcessingStepSecureConfigId: string;
		/** Mã định danh duy nhất của bước xử lý thông báo SDK. */
		readonly SdkMessageProcessingStepSecureConfigIdUnique: string;
		/** Cấu hình bảo mật theo từng bước dành cho loại bổ trợ đã chuyển cho hàm dựng bổ trợ vào lúc chạy. */
		SecureConfig: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bước xử lý thông báo SDK. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bước xử lý thông báo SDK. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessageprocessingstepsecureconfig. */
			readonly CreatedOnBehalfBy: string;
			/** Cấp độ tùy chỉnh của cấu hình bảo mật dành cho bước xử lý thông báo SDK. */
			readonly CustomizationLevel: string;
			/** Mã định danh duy nhất của người dùng đã sửa bước xử lý thông báo SDK lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa bước xử lý thông báo SDK lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessageprocessingstepsecureconfig lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với bước xử lý thông báo SDK. */
			readonly OrganizationId: string;
			/** Mã định danh duy nhất của cấu hình bảo mật dành cho bước xử lý thông báo SDK. */
			readonly SdkMessageProcessingStepSecureConfigId: string;
			/** Mã định danh duy nhất của bước xử lý thông báo SDK. */
			readonly SdkMessageProcessingStepSecureConfigIdUnique: string;
			/** Cấu hình bảo mật theo từng bước dành cho loại bổ trợ đã chuyển cho hàm dựng bổ trợ vào lúc chạy. */
			readonly SecureConfig: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStepSecureConfig {
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
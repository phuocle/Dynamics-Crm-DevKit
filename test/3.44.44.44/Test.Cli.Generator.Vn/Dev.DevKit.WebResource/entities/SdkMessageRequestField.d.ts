//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageRequestFieldApi {
		/**
		* DynamicsCrm.DevKit SdkMessageRequestFieldApi
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
		/** Bộ phân tách chạy thực theo ngôn ngữ chung (CLR) dành cho trường yêu cầu thông báo SDK. */
		ClrParser: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SdkMessageRequestField.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo trường yêu cầu thông báo SDK. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo trường yêu cầu thông báo SDK. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessagerequestfield. */
		readonly CreatedOnBehalfBy: string;
		/** Cấp độ tùy chỉnh của trường yêu cầu thông báo SDK. */
		readonly CustomizationLevel: number;
		/** Cho biết cách thức dùng nội dung trường khi xử lý thông báo. 1 - Thực thể chính, 2 - Thực thể phụ */
		readonly FieldMask: number;
		/** Phiên bản có thành phần được đưa vào. */
		IntroducedVersion: string;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi trường yêu cầu thông báo SDK lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi trường yêu cầu thông báo SDK lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessagerequestfield lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của trường yêu cầu thông báo SDK. */
		Name: string;
		/** Thông tin về khả năng tùy chọn của trường yêu cầu thông báo SDK. */
		Optional: boolean;
		/** Mã định danh duy nhất của tổ chức có liên kết với trường yêu cầu thông báo SDK. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		ParameterBindingInformation: string;
		/** Bộ phân tách dành cho trường yêu cầu thông báo SDK. */
		Parser: string;
		/** Vị trí của trường yêu cầu thông báo Sdk. */
		readonly Position: number;
		/** Tên công khai của trường yêu cầu thông báo SDK. */
		PublicName: string;
		/** Mã định danh duy nhất của thực thể trường yêu cầu thông báo SDK. */
		SdkMessageRequestFieldId: string;
		/** Mã định danh thực thể của trường yêu cầu thông báo SDK. */
		readonly SdkMessageRequestFieldIdUnique: string;
		/** Mã định danh duy nhất của yêu cầu thông báo có liên kết với trường yêu cầu thông báo SDK. */
		readonly SdkMessageRequestId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Bộ phân tách chạy thực theo ngôn ngữ chung (CLR) dành cho trường yêu cầu thông báo SDK. */
			readonly ClrParser: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo trường yêu cầu thông báo SDK. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo trường yêu cầu thông báo SDK. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessagerequestfield. */
			readonly CreatedOnBehalfBy: string;
			/** Cấp độ tùy chỉnh của trường yêu cầu thông báo SDK. */
			readonly CustomizationLevel: string;
			/** Cho biết cách thức dùng nội dung trường khi xử lý thông báo. 1 - Thực thể chính, 2 - Thực thể phụ */
			readonly FieldMask: string;
			/** Phiên bản có thành phần được đưa vào. */
			readonly IntroducedVersion: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi trường yêu cầu thông báo SDK lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi trường yêu cầu thông báo SDK lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessagerequestfield lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của trường yêu cầu thông báo SDK. */
			readonly Name: string;
			/** Thông tin về khả năng tùy chọn của trường yêu cầu thông báo SDK. */
			readonly Optional: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với trường yêu cầu thông báo SDK. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly ParameterBindingInformation: string;
			/** Bộ phân tách dành cho trường yêu cầu thông báo SDK. */
			readonly Parser: string;
			/** Vị trí của trường yêu cầu thông báo Sdk. */
			readonly Position: string;
			/** Tên công khai của trường yêu cầu thông báo SDK. */
			readonly PublicName: string;
			/** Mã định danh duy nhất của thực thể trường yêu cầu thông báo SDK. */
			readonly SdkMessageRequestFieldId: string;
			/** Mã định danh thực thể của trường yêu cầu thông báo SDK. */
			readonly SdkMessageRequestFieldIdUnique: string;
			/** Mã định danh duy nhất của yêu cầu thông báo có liên kết với trường yêu cầu thông báo SDK. */
			readonly SdkMessageRequestId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageRequestField {
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
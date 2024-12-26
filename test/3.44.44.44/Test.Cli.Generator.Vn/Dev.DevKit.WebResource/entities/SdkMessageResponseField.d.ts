//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageResponseFieldApi {
		/**
		* DynamicsCrm.DevKit SdkMessageResponseFieldApi
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
		/** Bộ định dạng chạy thực theo ngôn ngữ chung (CLR) của trường phản hồi thông báo SDK. */
		ClrFormatter: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SdkMessageResponseField.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo trường phản hồi thông báo SDK. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo trường phản hồi thông báo SDK. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessageresponsefield. */
		readonly CreatedOnBehalfBy: string;
		/** Cấp độ tùy chỉnh của trường phản hồi thông báo SDK. */
		readonly CustomizationLevel: number;
		/** Bộ định dạng dành cho trường phản hồi thông báo SDK. */
		Formatter: string;
		/** Phiên bản có thành phần được đưa vào. */
		IntroducedVersion: string;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi trường phản hồi thông báo SDK lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi trường phản hồi thông báo SDK lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessageresponsefield lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của trường phản hồi thông báo SDK. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với trường phản hồi thông báo SDK. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		ParameterBindingInformation: string;
		/** Vị trí của trường phản hồi thông báo Sdk. */
		readonly Position: number;
		/** Tên công khai của trường phản hồi thông báo SDK. */
		PublicName: string;
		/** Mã định danh duy nhất của thực thể trường phản hồi thông báo SDK. */
		SdkMessageResponseFieldId: string;
		/** Mã định danh duy nhất của trường phản hồi thông báo SDK. */
		readonly SdkMessageResponseFieldIdUnique: string;
		/** Mã định danh duy nhất của phản hồi thông báo có liên kết với trường phản hồi thông báo SDK. */
		readonly SdkMessageResponseId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Giá trị thực của trường phản hồi thông báo SDK. */
		Value: string;
		/** Chỉ sử dụng nội bộ. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Bộ định dạng chạy thực theo ngôn ngữ chung (CLR) của trường phản hồi thông báo SDK. */
			readonly ClrFormatter: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo trường phản hồi thông báo SDK. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo trường phản hồi thông báo SDK. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessageresponsefield. */
			readonly CreatedOnBehalfBy: string;
			/** Cấp độ tùy chỉnh của trường phản hồi thông báo SDK. */
			readonly CustomizationLevel: string;
			/** Bộ định dạng dành cho trường phản hồi thông báo SDK. */
			readonly Formatter: string;
			/** Phiên bản có thành phần được đưa vào. */
			readonly IntroducedVersion: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi trường phản hồi thông báo SDK lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi trường phản hồi thông báo SDK lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessageresponsefield lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của trường phản hồi thông báo SDK. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với trường phản hồi thông báo SDK. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly ParameterBindingInformation: string;
			/** Vị trí của trường phản hồi thông báo Sdk. */
			readonly Position: string;
			/** Tên công khai của trường phản hồi thông báo SDK. */
			readonly PublicName: string;
			/** Mã định danh duy nhất của thực thể trường phản hồi thông báo SDK. */
			readonly SdkMessageResponseFieldId: string;
			/** Mã định danh duy nhất của trường phản hồi thông báo SDK. */
			readonly SdkMessageResponseFieldIdUnique: string;
			/** Mã định danh duy nhất của phản hồi thông báo có liên kết với trường phản hồi thông báo SDK. */
			readonly SdkMessageResponseId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Giá trị thực của trường phản hồi thông báo SDK. */
			readonly Value: string;
			/** Chỉ sử dụng nội bộ. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageResponseField {
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
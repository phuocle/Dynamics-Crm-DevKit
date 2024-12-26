//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageProcessingStepImageApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepImageApi
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
		/** Danh sách thuộc tính, phân cách bằng dấu phẩy, để chuyển vào hình ảnh bước xử lý thông báo SDK. */
		Attributes: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SdkMessageProcessingStepImage.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo hình ảnh bước xử lý thông báo SDK. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo hình ảnh bước xử lý thông báo SDK. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessageprocessingstepimage. */
		readonly CreatedOnBehalfBy: string;
		/** Cấp độ tùy chỉnh của hình ảnh bước xử lý thông báo SDK. */
		readonly CustomizationLevel: number;
		/** Mô tả của hình ảnh bước xử lý thông báo SDK. */
		Description: string;
		/** Tên chính dùng để truy cập tập thuộc tính hình ảnh trước và hình ảnh sau trong bước. */
		EntityAlias: string;
		/** Loại của hình ảnh đã yêu cầu. */
		ImageType: OptionSet.SdkMessageProcessingStepImage.ImageType;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Tên của thuộc tính trên thông báo Yêu cầu. */
		MessagePropertyName: string;
		/** Mã định danh duy nhất của người dùng đã sửa bước xử lý thông báo SDK lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa bước xử lý thông báo SDK lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessageprocessingstepimage lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của hình ảnh bước xử lý thông báo sdk. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với bước xử lý thông báo SDK. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Tên của thực thể liên quan. */
		RelatedAttributeName: string;
		/** Mã định danh duy nhất của bước xử lý thông báo SDK. */
		SdkMessageProcessingStepId: string;
		/** Mã định danh duy nhất của thực thể hình ảnh cho bước xử lý thông báo SDK. */
		SdkMessageProcessingStepImageId: string;
		/** Mã định danh duy nhất của hình ảnh bước xử lý thông báo SDK. */
		readonly SdkMessageProcessingStepImageIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số xác định bản sửa đổi cụ thể của hình ảnh bước.  */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Danh sách thuộc tính, phân cách bằng dấu phẩy, để chuyển vào hình ảnh bước xử lý thông báo SDK. */
			readonly Attributes: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo hình ảnh bước xử lý thông báo SDK. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo hình ảnh bước xử lý thông báo SDK. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessageprocessingstepimage. */
			readonly CreatedOnBehalfBy: string;
			/** Cấp độ tùy chỉnh của hình ảnh bước xử lý thông báo SDK. */
			readonly CustomizationLevel: string;
			/** Mô tả của hình ảnh bước xử lý thông báo SDK. */
			readonly Description: string;
			/** Tên chính dùng để truy cập tập thuộc tính hình ảnh trước và hình ảnh sau trong bước. */
			readonly EntityAlias: string;
			/** Loại của hình ảnh đã yêu cầu. */
			readonly ImageType: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Tên của thuộc tính trên thông báo Yêu cầu. */
			readonly MessagePropertyName: string;
			/** Mã định danh duy nhất của người dùng đã sửa bước xử lý thông báo SDK lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa bước xử lý thông báo SDK lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessageprocessingstepimage lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của hình ảnh bước xử lý thông báo sdk. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với bước xử lý thông báo SDK. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Tên của thực thể liên quan. */
			readonly RelatedAttributeName: string;
			/** Mã định danh duy nhất của bước xử lý thông báo SDK. */
			readonly SdkMessageProcessingStepId: string;
			/** Mã định danh duy nhất của thực thể hình ảnh cho bước xử lý thông báo SDK. */
			readonly SdkMessageProcessingStepImageId: string;
			/** Mã định danh duy nhất của hình ảnh bước xử lý thông báo SDK. */
			readonly SdkMessageProcessingStepImageIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số xác định bản sửa đổi cụ thể của hình ảnh bước.  */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStepImage {
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
		enum ImageType {
			/** 2 */
			Ca_hai,
			/** 1 */
			PostImage,
			/** 0 */
			PreImage
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
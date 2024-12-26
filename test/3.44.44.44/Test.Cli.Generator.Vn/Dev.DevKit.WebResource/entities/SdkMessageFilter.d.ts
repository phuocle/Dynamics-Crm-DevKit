//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageFilterApi {
		/**
		* DynamicsCrm.DevKit SdkMessageFilterApi
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
		/** Xác định vị trí sẽ nêu phương pháp. 0 - Máy chủ, 1 - Máy khách, 2 - cả hai. */
		Availability: number;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SdkMessageFilter.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bộ lọc thông báo SDK. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bộ lọc thông báo SDK. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessagefilter. */
		readonly CreatedOnBehalfBy: string;
		/** Cấp độ tùy chỉnh của bộ lọc thông báo SDK. */
		readonly CustomizationLevel: number;
		/** Phiên bản có thành phần được đưa vào. */
		IntroducedVersion: string;
		/** Cho biết khả năng chấp nhận bước xử lý thông báo SDK tùy chỉnh. */
		IsCustomProcessingStepAllowed: boolean;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Cho biết có thể hiển thị bộ lọc hay không. */
		readonly IsVisible: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bộ lọc thông báo SDK lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bộ lọc thông báo SDK lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessagefilter lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the SDK message filter. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với bộ lọc thông báo SDK. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		RestrictionLevel: number;
		/** Mã định danh duy nhất của thực thể bộ lọc thông báo SDK. */
		SdkMessageFilterId: string;
		/** Mã định danh duy nhất của bộ lọc thông báo SDK. */
		readonly SdkMessageFilterIdUnique: string;
		/** Mã định danh duy nhất của thông báo SDK liên quan. */
		SdkMessageId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		/** Thông báo SDK có được gọi từ quy trình làm việc hay không. */
		readonly WorkflowSdkStepEnabled: boolean;
		readonly FormattedValue: {
			/** Xác định vị trí sẽ nêu phương pháp. 0 - Máy chủ, 1 - Máy khách, 2 - cả hai. */
			readonly Availability: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bộ lọc thông báo SDK. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bộ lọc thông báo SDK. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessagefilter. */
			readonly CreatedOnBehalfBy: string;
			/** Cấp độ tùy chỉnh của bộ lọc thông báo SDK. */
			readonly CustomizationLevel: string;
			/** Phiên bản có thành phần được đưa vào. */
			readonly IntroducedVersion: string;
			/** Cho biết khả năng chấp nhận bước xử lý thông báo SDK tùy chỉnh. */
			readonly IsCustomProcessingStepAllowed: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Cho biết có thể hiển thị bộ lọc hay không. */
			readonly IsVisible: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bộ lọc thông báo SDK lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bộ lọc thông báo SDK lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessagefilter lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the SDK message filter. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với bộ lọc thông báo SDK. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RestrictionLevel: string;
			/** Mã định danh duy nhất của thực thể bộ lọc thông báo SDK. */
			readonly SdkMessageFilterId: string;
			/** Mã định danh duy nhất của bộ lọc thông báo SDK. */
			readonly SdkMessageFilterIdUnique: string;
			/** Mã định danh duy nhất của thông báo SDK liên quan. */
			readonly SdkMessageId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
			/** Thông báo SDK có được gọi từ quy trình làm việc hay không. */
			readonly WorkflowSdkStepEnabled: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageFilter {
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
		enum PrimaryObjectTypeCode {
		}
		enum SecondaryObjectTypeCode {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageApi {
		/**
		* DynamicsCrm.DevKit SdkMessageApi
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
		/** Thông tin về khả năng tự động giao dịch thông báo SDK. */
		AutoTransact: boolean;
		/** Xác định vị trí sẽ nêu phương pháp. 0 - Máy chủ, 1 - Máy khách, 2 - cả hai. */
		Availability: number;
		/** Nếu đây là phương pháp đã phân loại thì đây là tên. Nếu không thì là Không. */
		CategoryName: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SdkMessage.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo thông báo SDK. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo thông báo SDK. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessage. */
		readonly CreatedOnBehalfBy: string;
		/** Cấp độ tùy chỉnh của thông báo SDK. */
		readonly CustomizationLevel: number;
		/** Name of the privilege that allows execution of the SDK message */
		ExecutePrivilegeName: string;
		/** Cho biết khả năng thông báo SDK mở rộng yêu cầu theo mỗi thực thể chính đã xác định trong bộ lọc của nó. */
		Expand: boolean;
		/** Phiên bản có thành phần được đưa vào. */
		IntroducedVersion: string;
		/** Thông tin về khả năng hiện hoạt của thông báo SDK. */
		IsActive: boolean;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Cho biết việc thông báo SDK là riêng tư hay không. */
		IsPrivate: boolean;
		/** Xác định thông báo SDK sẽ là ReadOnly hay Read Write. false - ReadWrite, true - ReadOnly . */
		IsReadOnly: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly IsValidForExecuteAsync: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi thông báo SDK lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi thông báo SDK lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa sdkmessage lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của thông báo SDK. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với thông báo SDK. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của thực thể thông báo SDK. */
		SdkMessageId: string;
		/** Mã định danh duy nhất của thông báo SDK. */
		readonly SdkMessageIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Cho biết việc thông báo SDK là mẫu hay không. */
		Template: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly ThrottleSettings: string;
		/** Số xác định bản sửa đổi cụ thể của thông báo SDK.  */
		readonly VersionNumber: number;
		/** Thông báo SDK có được gọi từ quy trình làm việc hay không. */
		readonly WorkflowSdkStepEnabled: boolean;
		readonly FormattedValue: {
			/** Thông tin về khả năng tự động giao dịch thông báo SDK. */
			readonly AutoTransact: string;
			/** Xác định vị trí sẽ nêu phương pháp. 0 - Máy chủ, 1 - Máy khách, 2 - cả hai. */
			readonly Availability: string;
			/** Nếu đây là phương pháp đã phân loại thì đây là tên. Nếu không thì là Không. */
			readonly CategoryName: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo thông báo SDK. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo thông báo SDK. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessage. */
			readonly CreatedOnBehalfBy: string;
			/** Cấp độ tùy chỉnh của thông báo SDK. */
			readonly CustomizationLevel: string;
			/** Name of the privilege that allows execution of the SDK message */
			readonly ExecutePrivilegeName: string;
			/** Cho biết khả năng thông báo SDK mở rộng yêu cầu theo mỗi thực thể chính đã xác định trong bộ lọc của nó. */
			readonly Expand: string;
			/** Phiên bản có thành phần được đưa vào. */
			readonly IntroducedVersion: string;
			/** Thông tin về khả năng hiện hoạt của thông báo SDK. */
			readonly IsActive: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Cho biết việc thông báo SDK là riêng tư hay không. */
			readonly IsPrivate: string;
			/** Xác định thông báo SDK sẽ là ReadOnly hay Read Write. false - ReadWrite, true - ReadOnly . */
			readonly IsReadOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsValidForExecuteAsync: string;
			/** Mã định danh duy nhất của người dùng sửa đổi thông báo SDK lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi thông báo SDK lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa sdkmessage lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của thông báo SDK. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với thông báo SDK. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của thực thể thông báo SDK. */
			readonly SdkMessageId: string;
			/** Mã định danh duy nhất của thông báo SDK. */
			readonly SdkMessageIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Cho biết việc thông báo SDK là mẫu hay không. */
			readonly Template: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ThrottleSettings: string;
			/** Số xác định bản sửa đổi cụ thể của thông báo SDK.  */
			readonly VersionNumber: string;
			/** Thông báo SDK có được gọi từ quy trình làm việc hay không. */
			readonly WorkflowSdkStepEnabled: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessage {
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
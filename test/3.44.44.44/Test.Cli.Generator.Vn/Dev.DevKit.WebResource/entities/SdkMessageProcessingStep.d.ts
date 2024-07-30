//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageProcessingStepApi {
		/**
		* DynamicsCrm.DevKit SdkMessageProcessingStepApi
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
		/** Cho biết khả năng tự động xóa công việc hệ thống không đồng bộ khi hoàn thành. */
		AsyncAutoDelete: boolean;
		CanBeBypassed: boolean;
		/** Xác định Loại Bước Xử lý Thông báo SDK sẽ là ReadOnly hay Read Write. false - ReadWrite, true - ReadOnly  */
		CanUseReadOnlyConnection: boolean;
		/** For internal use only. */
		Category: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.SdkMessageProcessingStep.ComponentState;
		/** Cấu hình theo từng bước dành cho loại bổ trợ. Hệ thống đã chuyển cho hàm dựng bổ trợ vào lúc chạy. */
		Configuration: string;
		/** Mã định danh duy nhất của người dùng đã tạo bước xử lý thông báo SDK. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bước xử lý thông báo SDK. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessageprocessingstep. */
		readonly CreatedOnBehalfBy: string;
		/** Cấp độ tùy chỉnh của bước xử lý thông báo SDK. */
		readonly CustomizationLevel: number;
		/** Mô tả của bước xử lý thông báo SDK. */
		Description: string;
		/** EnablePluginProfiler */
		EnablePluginProfiler: boolean;
		/** Cấu hình cho việc gửi các sự kiện quy trình bán hàng sang dịch vụ Trình mở rộng Sự kiện. */
		EventExpander: string;
		/** Mã định danh duy nhất của trình xử lý sự kiện đã liên kết. */
		eventhandler_plugintype: string;
		/** Mã định danh duy nhất của trình xử lý sự kiện đã liên kết. */
		eventhandler_serviceendpoint: string;
		/** Danh sách thuộc tính, phân tách bằng dấu phẩy. Nếu sửa ít nhất một thuộc tính thì phần bổ trợ sẽ thực thi. */
		FilteringAttributes: string;
		/** Unique identifier for fxexpression associated with SdkMessageProcessingStep. */
		FxExpressionId: string;
		/** Mã định danh duy nhất của người dùng để nhân cách hóa bối cảnh khi thực thi bước. */
		ImpersonatingUserId: string;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Xác định nên thực thi phần bổ trợ từ ống truyền lệnh mẹ, ống truyền lệnh con hay cả hai. */
		InvocationSource: OptionSet.SdkMessageProcessingStep.InvocationSource;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Thông tin chỉ định khả năng ẩn thành phần này. */
		IsHidden: string;
		/** Thông tin chỉ định khả năng quản lý thành phần này. */
		readonly IsManaged: boolean;
		/** Chế độ chạy thực của thực thi, ví dụ: đồng bộ hoặc không đồng bộ. */
		Mode: OptionSet.SdkMessageProcessingStep.Mode;
		/** Mã định danh duy nhất của người dùng đã sửa bước xử lý thông báo SDK lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa bước xử lý thông báo SDK lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessageprocessingstep lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của bước xử lý thông báo sdk. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức có liên kết với bước xử lý thông báo SDK. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của loại bổ trợ có liên kết với bước. */
		PluginTypeId: string;
		/** Unique identifier for powerfxrule associated with SdkMessageProcessingStep. */
		PowerfxRuleId: string;
		/** Thứ tự xử lý trong giai đoạn. */
		Rank: number;
		/** Chỉ sử dụng nội bộ. Giữ các thuộc tính chung liên quan đến tích hợp thời gian chạy. */
		RuntimeIntegrationProperties: string;
		/** Mã định danh duy nhất của bộ lọc thông báo SDK. */
		SdkMessageFilterId: string;
		/** Mã định danh duy nhất của thông báo SDK. */
		SdkMessageId: string;
		/** Mã định danh duy nhất của thực thể bước xử lý thông báo SDK. */
		SdkMessageProcessingStepId: string;
		/** Mã định danh duy nhất của bước xử lý thông báo SDK. */
		readonly SdkMessageProcessingStepIdUnique: string;
		/** Mã định danh duy nhất của cấu hình bảo mật dành cho bước xử lý thông báo Sdk. */
		SdkMessageProcessingStepSecureConfigId: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Giai đoạn trong ống truyền lệnh thực thi mà bước xử lý thông báo SDK nằm trong đó. */
		Stage: OptionSet.SdkMessageProcessingStep.Stage;
		/** Trạng thái của bước xử lý thông báo SDK. */
		StateCode: OptionSet.SdkMessageProcessingStep.StateCode;
		/** Lý do dẫn đến trạng thái của bước xử lý thông báo SDK. */
		StatusCode: OptionSet.SdkMessageProcessingStep.StatusCode;
		/** Triển khai việc thực thi bước xử lý thông báo SDK; trên máy chủ, máy khách hoặc cả hai. */
		SupportedDeployment: OptionSet.SdkMessageProcessingStep.SupportedDeployment;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Số xác định bản sửa đổi cụ thể của bước xử lý thông báo SDK.  */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Cho biết khả năng tự động xóa công việc hệ thống không đồng bộ khi hoàn thành. */
			readonly AsyncAutoDelete: string;
			readonly CanBeBypassed: string;
			/** Xác định Loại Bước Xử lý Thông báo SDK sẽ là ReadOnly hay Read Write. false - ReadWrite, true - ReadOnly  */
			readonly CanUseReadOnlyConnection: string;
			/** For internal use only. */
			readonly Category: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Cấu hình theo từng bước dành cho loại bổ trợ. Hệ thống đã chuyển cho hàm dựng bổ trợ vào lúc chạy. */
			readonly Configuration: string;
			/** Mã định danh duy nhất của người dùng đã tạo bước xử lý thông báo SDK. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bước xử lý thông báo SDK. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo sdkmessageprocessingstep. */
			readonly CreatedOnBehalfBy: string;
			/** Cấp độ tùy chỉnh của bước xử lý thông báo SDK. */
			readonly CustomizationLevel: string;
			/** Mô tả của bước xử lý thông báo SDK. */
			readonly Description: string;
			/** EnablePluginProfiler */
			readonly EnablePluginProfiler: string;
			/** Cấu hình cho việc gửi các sự kiện quy trình bán hàng sang dịch vụ Trình mở rộng Sự kiện. */
			readonly EventExpander: string;
			/** Mã định danh duy nhất của trình xử lý sự kiện đã liên kết. */
			readonly eventhandler_plugintype: string;
			/** Mã định danh duy nhất của trình xử lý sự kiện đã liên kết. */
			readonly eventhandler_serviceendpoint: string;
			/** Danh sách thuộc tính, phân tách bằng dấu phẩy. Nếu sửa ít nhất một thuộc tính thì phần bổ trợ sẽ thực thi. */
			readonly FilteringAttributes: string;
			/** Unique identifier for fxexpression associated with SdkMessageProcessingStep. */
			readonly FxExpressionId: string;
			/** Mã định danh duy nhất của người dùng để nhân cách hóa bối cảnh khi thực thi bước. */
			readonly ImpersonatingUserId: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Xác định nên thực thi phần bổ trợ từ ống truyền lệnh mẹ, ống truyền lệnh con hay cả hai. */
			readonly InvocationSource: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Thông tin chỉ định khả năng ẩn thành phần này. */
			readonly IsHidden: string;
			/** Thông tin chỉ định khả năng quản lý thành phần này. */
			readonly IsManaged: string;
			/** Chế độ chạy thực của thực thi, ví dụ: đồng bộ hoặc không đồng bộ. */
			readonly Mode: string;
			/** Mã định danh duy nhất của người dùng đã sửa bước xử lý thông báo SDK lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa bước xử lý thông báo SDK lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi sdkmessageprocessingstep lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của bước xử lý thông báo sdk. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức có liên kết với bước xử lý thông báo SDK. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của loại bổ trợ có liên kết với bước. */
			readonly PluginTypeId: string;
			/** Unique identifier for powerfxrule associated with SdkMessageProcessingStep. */
			readonly PowerfxRuleId: string;
			/** Thứ tự xử lý trong giai đoạn. */
			readonly Rank: string;
			/** Chỉ sử dụng nội bộ. Giữ các thuộc tính chung liên quan đến tích hợp thời gian chạy. */
			readonly RuntimeIntegrationProperties: string;
			/** Mã định danh duy nhất của bộ lọc thông báo SDK. */
			readonly SdkMessageFilterId: string;
			/** Mã định danh duy nhất của thông báo SDK. */
			readonly SdkMessageId: string;
			/** Mã định danh duy nhất của thực thể bước xử lý thông báo SDK. */
			readonly SdkMessageProcessingStepId: string;
			/** Mã định danh duy nhất của bước xử lý thông báo SDK. */
			readonly SdkMessageProcessingStepIdUnique: string;
			/** Mã định danh duy nhất của cấu hình bảo mật dành cho bước xử lý thông báo Sdk. */
			readonly SdkMessageProcessingStepSecureConfigId: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Giai đoạn trong ống truyền lệnh thực thi mà bước xử lý thông báo SDK nằm trong đó. */
			readonly Stage: string;
			/** Trạng thái của bước xử lý thông báo SDK. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của bước xử lý thông báo SDK. */
			readonly StatusCode: string;
			/** Triển khai việc thực thi bước xử lý thông báo SDK; trên máy chủ, máy khách hoặc cả hai. */
			readonly SupportedDeployment: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Số xác định bản sửa đổi cụ thể của bước xử lý thông báo SDK.  */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessageProcessingStep {
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
		enum EventHandlerTypeCode {
		}
		enum InvocationSource {
			/** 0 */
			Ma_Cha,
			/** 1 */
			Muc_con
		}
		enum Mode {
			/** 0 */
			Dong_bo,
			/** 1 */
			Khong_dong_bo
		}
		enum Stage {
			/** 90 */
			Giai_doan_Hau_cam_ket_duoc_bat_dau_sau_khi_cam_ket_giao_dich_Chi_su_dung_noi_bo,
			/** 80 */
			Giai_doan_Tien_cam_ket_duoc_bat_dau_truoc_khi_cam_ket_giao_dich_Chi_su_dung_noi_bo,
			/** 40 */
			Sau_khi_thao_tac,
			/** 50 */
			Sau_khi_thao_tac_Khong_con_dung,
			/** 55 */
			Sau_khi_thao_thac_cuoi_cung_Chi_su_dung_noi_bo,
			/** 45 */
			Sau_khi_thao_thac_noi_bo_sau_bo_tro_ngoai_Chi_su_dung_noi_bo,
			/** 35 */
			Sau_khi_thao_thac_noi_bo_truoc_bo_tro_ngoai_Chi_su_dung_noi_bo,
			/** 30 */
			Thao_thac_chinh_Chi_su_dung_noi_bo,
			/** 20 */
			Truoc_khi_thao_tac,
			/** 5 */
			Truoc_khi_thao_thac_ban_dau_Chi_su_dung_noi_bo,
			/** 25 */
			Truoc_khi_thao_thac_noi_bo_sau_bo_tro_ngoai_Chi_su_dung_noi_bo,
			/** 15 */
			Truoc_khi_thao_thac_noi_bo_truoc_bo_tro_ngoai_Chi_su_dung_noi_bo,
			/** 10 */
			Truoc_khi_xac_thuc
		}
		enum StateCode {
			/** 0 */
			Da_bat,
			/** 1 */
			Da_tat
		}
		enum StatusCode {
			/** 1 */
			Da_bat,
			/** 2 */
			Da_tat
		}
		enum SupportedDeployment {
			/** 2 */
			Ca_hai,
			/** 1 */
			Chi_danh_cho_Microsoft_Dynamics_365_Client_for_Outlook,
			/** 0 */
			Duy_nhat_may_chu
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
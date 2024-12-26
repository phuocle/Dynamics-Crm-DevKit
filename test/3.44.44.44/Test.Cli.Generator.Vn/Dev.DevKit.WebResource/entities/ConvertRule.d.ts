//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormQuy_tac_tao_va_cap_nhat_ban_ghi {
		interface tab_general_Sections {
			AutoResponseSettings: DevKit.Controls.Section;
			CaseDetails: DevKit.Controls.Section;
			ChannelProperties: DevKit.Controls.Section;
			ConvertToCaseSettings: DevKit.Controls.Section;
			EmailCaseConditions: DevKit.Controls.Section;
			SocialMonitoringCaseConditions: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chọn có chuyển đổi thành bản ghi hay không cho những mục từ người gửi không xác định. */
			AllowUnknownSender: DevKit.Controls.Boolean;
			/** nhóm thuộc tính kênh được liên kết với quy tắc chuyển đổi. */
			ChannelPropertyGroupId: DevKit.Controls.Lookup;
			/** Chọn có tạo trường hợp hay không cho khách hàng có quyền được hưởng hiện hoạt. */
			CheckActiveEntitlement: DevKit.Controls.Boolean;
			/** Thông tin về việc có cần tạo bản ghi hay không cho các hồ sơ thuộc mạng xã hội bị ghi vào danh sách bị chặn. */
			CheckBlockedSocialProfile: DevKit.Controls.Boolean;
			/** Thông tin về việc có cần tạo bản ghi hay không cho thư trực tiếp. */
			CheckDirectMessages: DevKit.Controls.Boolean;
			/** Chọn chuyển đổi thành trường hợp hay không cho mục liên quan đến trường hợp đã giải quyết. */
			CheckIfResolved: DevKit.Controls.Boolean;
			/** Nhập tiêu đề hoặc tên của hàng đợi có thiết đặt được xác định. */
			Name: DevKit.Controls.String;
			/** Id Chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn hàng đợi được gán quy tắc. */
			QueueId: DevKit.Controls.Lookup;
			/** Nếu bạn muốn tạo trường hợp mới cho một mục kết hợp với trường hợp đã được giải quyết, hãy nhập khoảng thời gian trường hợp phải duy trì trạng thái đã giải quyết trước khi tạo trường hợp mới cho mục được liên kết. */
			ResolvedSince: DevKit.Controls.Integer;
			/** Chọn mẫu email để sử dụng cho việc tạo phản hồi tự động cho khách hàng. */
			ResponseTemplateId: DevKit.Controls.Lookup;
			/** Chọn có gửi phản hồi email tự động cho khách hàng sau khi tạo bản ghi hay không. */
			SendAutomaticResponse: DevKit.Controls.Boolean;
			/** Xác định hoạt động Dynamics 365 là nguồn của bản ghi. */
			SourceChannelTypeCode: DevKit.Controls.String;
			/** Nguồn của bản ghi. */
			SourceTypeCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			convertrule_convertruleitem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ConvertRuleItemsGrid: DevKit.Controls.Grid;
		}
	}
	class FormQuy_tac_tao_va_cap_nhat_ban_ghi extends DevKit.IForm {
		/**
		* Quy tắc tạo và cập nhật bản ghi [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quy_tac_tao_va_cap_nhat_ban_ghi */
		Body: DevKit.FormQuy_tac_tao_va_cap_nhat_ban_ghi.Body;
		/** The Navigation of form Quy_tac_tao_va_cap_nhat_ban_ghi */
		Navigation: DevKit.FormQuy_tac_tao_va_cap_nhat_ban_ghi.Navigation;
		/** The Grid of form Quy_tac_tao_va_cap_nhat_ban_ghi */
		Grid: DevKit.FormQuy_tac_tao_va_cap_nhat_ban_ghi.Grid;
		/** The SidePanes of form Quy_tac_tao_va_cap_nhat_ban_ghi */
		SidePanes: DevKit.SidePanes;
	}
	class ConvertRuleApi {
		/**
		* DynamicsCrm.DevKit ConvertRuleApi
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
		/** Chọn có chuyển đổi thành bản ghi hay không cho những mục từ người gửi không xác định. */
		AllowUnknownSender: boolean;
		/** nhóm thuộc tính kênh được liên kết với quy tắc chuyển đổi. */
		ChannelPropertyGroupId: string;
		/** Chọn có tạo trường hợp hay không cho khách hàng có quyền được hưởng hiện hoạt. */
		CheckActiveEntitlement: boolean;
		/** Thông tin về việc có cần tạo bản ghi hay không cho các hồ sơ thuộc mạng xã hội bị ghi vào danh sách bị chặn. */
		CheckBlockedSocialProfile: boolean;
		/** Thông tin về việc có cần tạo bản ghi hay không cho thư trực tiếp. */
		CheckDirectMessages: boolean;
		/** Chọn chuyển đổi thành trường hợp hay không cho mục liên quan đến trường hợp đã giải quyết. */
		CheckIfResolved: boolean;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ConvertRule.ComponentState;
		/** Mã định danh duy nhất của phiên bản thực thể */
		ConvertRuleId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ConvertRuleIdUnique: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung để mô tả quy tắc tạo bản ghi tự động. */
		Description: string;
		/** Tỷ giá của loại tiền liên kết với hàng đợi theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tiêu đề hoặc tên của hàng đợi có thiết đặt được xác định. */
		Name: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu quy tắc chuyển đổi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		OwningUser: string;
		/** Chọn hàng đợi được gán quy tắc. */
		QueueId: string;
		/** Phiên bản bản ghi */
		readonly RecordVersion: string;
		/** Nếu bạn muốn tạo trường hợp mới cho một mục kết hợp với trường hợp đã được giải quyết, hãy nhập khoảng thời gian trường hợp phải duy trì trạng thái đã giải quyết trước khi tạo trường hợp mới cho mục được liên kết. */
		ResolvedSince: number;
		/** Chọn mẫu email để sử dụng cho việc tạo phản hồi tự động cho khách hàng. */
		ResponseTemplateId: string;
		/** Chọn có gửi phản hồi email tự động cho khách hàng sau khi tạo bản ghi hay không. */
		SendAutomaticResponse: boolean;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Nguồn của bản ghi. */
		SourceTypeCode: OptionSet.ConvertRule.SourceTypeCode;
		/** Trạng thái của Quy tắc Chuyển đổi. */
		StateCode: OptionSet.ConvertRule.StateCode;
		/** Lý do cho trạng thái của Quy tắc Chuyển đổi */
		StatusCode: OptionSet.ConvertRule.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Mã định danh duy nhất của loại tiền liên kết với hàng đợi. */
		TransactionCurrencyId: string;
		/** Số phiên bản của quy tắc chuyển đổi. */
		readonly VersionNumber: number;
		/** Cho biết quy trình làm việc của quy tắc này. */
		WorkflowId: string;
		readonly FormattedValue: {
			/** Chọn có chuyển đổi thành bản ghi hay không cho những mục từ người gửi không xác định. */
			readonly AllowUnknownSender: string;
			/** nhóm thuộc tính kênh được liên kết với quy tắc chuyển đổi. */
			readonly ChannelPropertyGroupId: string;
			/** Chọn có tạo trường hợp hay không cho khách hàng có quyền được hưởng hiện hoạt. */
			readonly CheckActiveEntitlement: string;
			/** Thông tin về việc có cần tạo bản ghi hay không cho các hồ sơ thuộc mạng xã hội bị ghi vào danh sách bị chặn. */
			readonly CheckBlockedSocialProfile: string;
			/** Thông tin về việc có cần tạo bản ghi hay không cho thư trực tiếp. */
			readonly CheckDirectMessages: string;
			/** Chọn chuyển đổi thành trường hợp hay không cho mục liên quan đến trường hợp đã giải quyết. */
			readonly CheckIfResolved: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly ConvertRuleId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ConvertRuleIdUnique: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung để mô tả quy tắc tạo bản ghi tự động. */
			readonly Description: string;
			/** Tỷ giá của loại tiền liên kết với hàng đợi theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tiêu đề hoặc tên của hàng đợi có thiết đặt được xác định. */
			readonly Name: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu quy tắc chuyển đổi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Chọn hàng đợi được gán quy tắc. */
			readonly QueueId: string;
			/** Phiên bản bản ghi */
			readonly RecordVersion: string;
			/** Nếu bạn muốn tạo trường hợp mới cho một mục kết hợp với trường hợp đã được giải quyết, hãy nhập khoảng thời gian trường hợp phải duy trì trạng thái đã giải quyết trước khi tạo trường hợp mới cho mục được liên kết. */
			readonly ResolvedSince: string;
			/** Chọn mẫu email để sử dụng cho việc tạo phản hồi tự động cho khách hàng. */
			readonly ResponseTemplateId: string;
			/** Chọn có gửi phản hồi email tự động cho khách hàng sau khi tạo bản ghi hay không. */
			readonly SendAutomaticResponse: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Nguồn của bản ghi. */
			readonly SourceTypeCode: string;
			/** Trạng thái của Quy tắc Chuyển đổi. */
			readonly StateCode: string;
			/** Lý do cho trạng thái của Quy tắc Chuyển đổi */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Mã định danh duy nhất của loại tiền liên kết với hàng đợi. */
			readonly TransactionCurrencyId: string;
			/** Số phiên bản của quy tắc chuyển đổi. */
			readonly VersionNumber: string;
			/** Cho biết quy trình làm việc của quy tắc này. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace ConvertRule {
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
		enum SourceChannelTypeCode {
			/** 4210 */
			Cuoc_goi_Dien_thoai,
			/** 4201 */
			Cuoc_hen,
			/** 4202 */
			Email,
			/** 4216 */
			Hoat_dong_mang_xa_hoi,
			/** 10311 */
			Nhan_xet_Cong_thong_tin,
			/** 4212 */
			Nhiem_vu,
			/** 10310 */
			Quy_doi_Loi_moi,
			/** 10185 */
			Tro_chuyen_qua_Teams
		}
		enum SourceTypeCode {
			/** 2 */
			Email,
			/** 1 */
			Giam_sat_mang_xa_hoi
		}
		enum StateCode {
			/** 0 */
			Ban_nhap,
			/** 1 */
			Hien_hoat
		}
		enum StatusCode {
			/** 1 */
			Ban_nhap,
			/** 2 */
			Hien_hoat
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
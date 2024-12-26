//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMuc_quy_tac_tao_va_cap_nhat_ban_ghi {
		interface tab_general_Sections {
			CaseProperties: DevKit.Controls.Section;
			ConditionControl: DevKit.Controls.Section;
			Name: DevKit.Controls.Section;
			primaryactionsection: DevKit.Controls.Section;
			RegardingSettingsection: DevKit.Controls.Section;
			secondaryactionsection: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập tên hoặc tiêu đề của mục quy tắc được sử dụng để tạo và cập nhật bản ghi tự động. */
			Name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormMuc_quy_tac_tao_va_cap_nhat_ban_ghi extends DevKit.IForm {
		/**
		* Mục quy tắc tạo và cập nhật bản ghi [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Muc_quy_tac_tao_va_cap_nhat_ban_ghi */
		Body: DevKit.FormMuc_quy_tac_tao_va_cap_nhat_ban_ghi.Body;
		/** The Navigation of form Muc_quy_tac_tao_va_cap_nhat_ban_ghi */
		Navigation: DevKit.FormMuc_quy_tac_tao_va_cap_nhat_ban_ghi.Navigation;
		/** The SidePanes of form Muc_quy_tac_tao_va_cap_nhat_ban_ghi */
		SidePanes: DevKit.SidePanes;
	}
	class ConvertRuleItemApi {
		/**
		* DynamicsCrm.DevKit ConvertRuleItemApi
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
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ConvertRuleItem.ComponentState;
		/** Xác định bước của quy trình làm việc được liên kết */
		ConditionId: string;
		/** Điều kiện cho mục quy tắc chuyển đổi */
		ConditionXml: string;
		/** Mã định danh duy nhất của quy tắc chuyển đổi liên kết với mục quy tắc chuyển đổi. */
		ConvertRuleId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		ConvertRuleItemId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ConvertRuleItemIdUnique: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thông tin bổ sung để mô tả mục quy tắc tạo bản ghi tự động. */
		Description: string;
		/** Tỷ giá của loại tiền liên kết với hàng đợi theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên hoặc tiêu đề của mục quy tắc được sử dụng để tạo và cập nhật bản ghi tự động. */
		Name: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu mục quy tắc chuyển đổi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu Mục Quy tắc Chuyển đổi. */
		readonly OwningUser: string;
		/** Đặt xml thuộc tính cho mục quy tắc chuyển đổi */
		PropertiesXml: string;
		/** Chọn hàng đợi được gán quy tắc. */
		QueueId: string;
		/** Số hàng đợi của mục quy tắc chuyển đổi */
		SequenceNumber: number;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		readonly TransactionCurrencyId: string;
		/** Số phiên bản của Mục Quy tắc Chuyển đổi. */
		readonly VersionNumber: number;
		/** Quy trình làm việc liên quan đến Mục Quy tắc Chuyển đổi. */
		WorkflowId: string;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Xác định bước của quy trình làm việc được liên kết */
			readonly ConditionId: string;
			/** Điều kiện cho mục quy tắc chuyển đổi */
			readonly ConditionXml: string;
			/** Mã định danh duy nhất của quy tắc chuyển đổi liên kết với mục quy tắc chuyển đổi. */
			readonly ConvertRuleId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly ConvertRuleItemId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ConvertRuleItemIdUnique: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thông tin bổ sung để mô tả mục quy tắc tạo bản ghi tự động. */
			readonly Description: string;
			/** Tỷ giá của loại tiền liên kết với hàng đợi theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên hoặc tiêu đề của mục quy tắc được sử dụng để tạo và cập nhật bản ghi tự động. */
			readonly Name: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu mục quy tắc chuyển đổi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu Mục Quy tắc Chuyển đổi. */
			readonly OwningUser: string;
			/** Đặt xml thuộc tính cho mục quy tắc chuyển đổi */
			readonly PropertiesXml: string;
			/** Chọn hàng đợi được gán quy tắc. */
			readonly QueueId: string;
			/** Số hàng đợi của mục quy tắc chuyển đổi */
			readonly SequenceNumber: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Số phiên bản của Mục Quy tắc Chuyển đổi. */
			readonly VersionNumber: string;
			/** Quy trình làm việc liên quan đến Mục Quy tắc Chuyển đổi. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace ConvertRuleItem {
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
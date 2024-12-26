//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** Nhập người dùng hoặc nhóm sở hữu quy tắc cấu hình truy cập kênh. */
			OwnerId: DevKit.Controls.Lookup;
			/** Chọn trạng thái của quy tắc cấu hình truy cập kênh. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Nhập mô tả ngắn cho quy tắc cấu hình truy cập kênh. */
			Description: DevKit.Controls.String;
			/** Nhập tên mô tả cho quy tắc cấu hình truy cập kênh. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			profilerule_entries: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ProfileRuleItems: DevKit.Controls.Grid;
		}
	}
	class FormThong_tin extends DevKit.IForm {
		/**
		* Thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Thong_tin */
		Body: DevKit.FormThong_tin.Body;
		/** The Header section of form Thong_tin */
		Header: DevKit.FormThong_tin.Header;
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelAccessProfileRuleApi {
		/**
		* DynamicsCrm.DevKit ChannelAccessProfileRuleApi
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
		/** Mã định danh duy nhất của phiên bản thực thể */
		ChannelAccessProfileRuleId: string;
		/** Mã định danh duy nhất của Mục Quy tắc Cấu hình Truy cập Kênh được sử dụng khi đồng bộ các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
		readonly ChannelAccessProfileRuleIdUnique: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.ChannelAccessProfileRule.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập mô tả ngắn cho quy tắc cấu hình truy cập kênh. */
		Description: string;
		/** Tỷ giá của loại tiền được liên kết với quy tắc hồ sợ truy cập kênh theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Phiên bản trong đó quy tắc tương tự được giới thiệu. */
		IntroducedVersion: string;
		/** Được quản lý */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả cho quy tắc cấu hình truy cập kênh. */
		Name: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Cho biết quy tắc cấu hình truy cập kênh ở trạng thái bản nháp hay trạng thái hiện hoạt. */
		StateCode: OptionSet.ChannelAccessProfileRule.StateCode;
		/** Chọn trạng thái của quy tắc cấu hình truy cập kênh. */
		StatusCode: OptionSet.ChannelAccessProfileRule.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tỷ giá của loại tiền được liên kết với quy tắc hồ sợ truy cập kênh theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Cho biết quy trình làm việc của quy tắc này. */
		WorkflowId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly ChannelAccessProfileRuleId: string;
			/** Mã định danh duy nhất của Mục Quy tắc Cấu hình Truy cập Kênh được sử dụng khi đồng bộ các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
			readonly ChannelAccessProfileRuleIdUnique: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập mô tả ngắn cho quy tắc cấu hình truy cập kênh. */
			readonly Description: string;
			/** Tỷ giá của loại tiền được liên kết với quy tắc hồ sợ truy cập kênh theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Phiên bản trong đó quy tắc tương tự được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Được quản lý */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả cho quy tắc cấu hình truy cập kênh. */
			readonly Name: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Cho biết quy tắc cấu hình truy cập kênh ở trạng thái bản nháp hay trạng thái hiện hoạt. */
			readonly StateCode: string;
			/** Chọn trạng thái của quy tắc cấu hình truy cập kênh. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tỷ giá của loại tiền được liên kết với quy tắc hồ sợ truy cập kênh theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Cho biết quy trình làm việc của quy tắc này. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelAccessProfileRule {
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
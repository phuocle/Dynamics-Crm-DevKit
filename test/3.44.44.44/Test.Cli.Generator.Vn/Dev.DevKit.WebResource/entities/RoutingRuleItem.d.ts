//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMuc_Quy_tac {
		interface tab_general_Sections {
			rule_item_information: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_RuleCriteria_Sections {
			ConditionControl: DevKit.Controls.Section;
			rule_then_conditions: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_RuleCriteria extends DevKit.Controls.ITab {
			Section: tab_RuleCriteria_Sections;
		}
		interface Tabs {
			general: tab_general;
			notes: tab_notes;
			RuleCriteria: tab_RuleCriteria;
		}
		interface Body {
			Tab: Tabs;
			/** Hiện người được gán trên mục. */
			AssignObjectId: DevKit.Controls.Lookup;
			/** Nhập thêm thông tin để mô tả mục quy tắc. */
			Description: DevKit.Controls.String;
			/** Tên của Mục quy tắc định tuyến. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Chọn Hàng đợi có mục gán cho nó. */
			RoutedQueueId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormMuc_Quy_tac extends DevKit.IForm {
		/**
		* Mục Quy tắc [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Muc_Quy_tac */
		Body: DevKit.FormMuc_Quy_tac.Body;
		/** The Navigation of form Muc_Quy_tac */
		Navigation: DevKit.FormMuc_Quy_tac.Navigation;
		/** The SidePanes of form Muc_Quy_tac */
		SidePanes: DevKit.SidePanes;
	}
	class RoutingRuleItemApi {
		/**
		* DynamicsCrm.DevKit RoutingRuleItemApi
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
		/** Hiện người được gán trên mục. */
		assignobjectid_systemuser: string;
		/** Hiện người được gán trên mục. */
		assignobjectid_team: string;
		/** Hiện ngày giờ gán mục cho người dùng lần cuối. */
		AssignObjectIdModifiedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.RoutingRuleItem.ComponentState;
		/** Điều kiện cho mục quy tắc */
		ConditionXml: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập thêm thông tin để mô tả mục quy tắc. */
		Description: string;
		/** Tỷ giá của loại tiền liên kết với mục quy tắc định tuyến theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Chỉ sử dụng nội bộ. */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của Mục quy tắc định tuyến. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với mục quy tắc định tuyến. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Chọn Hàng đợi có mục gán cho nó. */
		RoutedQueueId: string;
		/** Mã định danh duy nhất dành cho Quy tắc định tuyến đã liên kết với Mục quy tắc. */
		RoutingRuleId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		RoutingRuleItemId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly RoutingRuleItemIdUnique: string;
		/** Số trình tự của mục quy tắc định tuyến */
		SequenceNumber: number;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với quy tắc định tuyến. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của Mục quy tắc định tuyến. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Hiện người được gán trên mục. */
			readonly assignobjectid_systemuser: string;
			/** Hiện người được gán trên mục. */
			readonly assignobjectid_team: string;
			/** Hiện ngày giờ gán mục cho người dùng lần cuối. */
			readonly AssignObjectIdModifiedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Điều kiện cho mục quy tắc */
			readonly ConditionXml: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập thêm thông tin để mô tả mục quy tắc. */
			readonly Description: string;
			/** Tỷ giá của loại tiền liên kết với mục quy tắc định tuyến theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Chỉ sử dụng nội bộ. */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của Mục quy tắc định tuyến. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với mục quy tắc định tuyến. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Chọn Hàng đợi có mục gán cho nó. */
			readonly RoutedQueueId: string;
			/** Mã định danh duy nhất dành cho Quy tắc định tuyến đã liên kết với Mục quy tắc. */
			readonly RoutingRuleId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly RoutingRuleItemId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RoutingRuleItemIdUnique: string;
			/** Số trình tự của mục quy tắc định tuyến */
			readonly SequenceNumber: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với quy tắc định tuyến. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của Mục quy tắc định tuyến. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RoutingRuleItem {
		enum AssignObjectIdType {
		}
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
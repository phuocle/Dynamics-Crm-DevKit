//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBo_quy_tac_dinh_tuyen {
		interface tab_general_Sections {
			routing_rule_set_information: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			general: tab_general;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập mô tả ngắn về mục tiêu của quy tắc định tuyến. */
			Description: DevKit.Controls.String;
			/** Tên của Quy tắc định tuyến. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Chỉ sử dụng nội bộ. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			routingrule_entries: DevKit.Controls.NavigationItem
		}
		interface Grid {
			RuleItems: DevKit.Controls.Grid;
		}
	}
	class FormBo_quy_tac_dinh_tuyen extends DevKit.IForm {
		/**
		* Bộ quy tắc định tuyến [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bo_quy_tac_dinh_tuyen */
		Body: DevKit.FormBo_quy_tac_dinh_tuyen.Body;
		/** The Navigation of form Bo_quy_tac_dinh_tuyen */
		Navigation: DevKit.FormBo_quy_tac_dinh_tuyen.Navigation;
		/** The Grid of form Bo_quy_tac_dinh_tuyen */
		Grid: DevKit.FormBo_quy_tac_dinh_tuyen.Grid;
		/** The SidePanes of form Bo_quy_tac_dinh_tuyen */
		SidePanes: DevKit.SidePanes;
	}
	class RoutingRuleApi {
		/**
		* DynamicsCrm.DevKit RoutingRuleApi
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
		readonly ComponentState: OptionSet.RoutingRule.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập mô tả ngắn về mục tiêu của quy tắc định tuyến. */
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
		/** Tên của Quy tắc định tuyến. */
		Name: string;
		/**  tổ chức đã liên kết với Quy tắc định tuyến  */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Chỉ sử dụng nội bộ */
		OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
		OwningUser: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		RoutingRuleId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly RoutingRuleIdUnique: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Trạng thái của quy tắc định tuyến */
		StateCode: OptionSet.RoutingRule.StateCode;
		/** Lý do dẫn đến trạng thái của quy tắc định tuyến */
		StatusCode: OptionSet.RoutingRule.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với quy tắc định tuyến. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của Quy tắc định tuyến. */
		readonly VersionNumber: number;
		/** Mã định danh duy nhất cho Quy trình làm việc. */
		WorkflowId: string;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập mô tả ngắn về mục tiêu của quy tắc định tuyến. */
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
			/** Tên của Quy tắc định tuyến. */
			readonly Name: string;
			/**  tổ chức đã liên kết với Quy tắc định tuyến  */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Chỉ sử dụng nội bộ */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly RoutingRuleId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly RoutingRuleIdUnique: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Trạng thái của quy tắc định tuyến */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của quy tắc định tuyến */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với quy tắc định tuyến. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của Quy tắc định tuyến. */
			readonly VersionNumber: string;
			/** Mã định danh duy nhất cho Quy trình làm việc. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace RoutingRule {
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
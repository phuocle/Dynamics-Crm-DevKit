//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormGoalRollupQuery_Information {
		interface tab_rule_Sections {
			criteria: DevKit.Controls.Section;
			Rule_Conditions: DevKit.Controls.Section;
			section_1: DevKit.Controls.Section;
		}
		interface tab_rule extends DevKit.Controls.ITab {
			Section: tab_rule_Sections;
		}
		interface Tabs {
			rule: tab_rule;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập tên mô tả cho truy vấn tính tổng số mục tiêu. */
			Name: DevKit.Controls.String;
			/** Nhập tên mô tả cho truy vấn tính tổng số mục tiêu. */
			Name1: DevKit.Controls.String;
			/** Nhập người dùng hoặc nhóm được gán để quản lý bản ghi. Trường này sẽ cập nhật mỗi lần bản ghi được gán cho người dùng khác. */
			OwnerId: DevKit.Controls.Lookup;
			queryeditor_uc: DevKit.Controls.ActionCards;
			/** Nhập loại bản ghi của truy vấn tính tổng số. */
			QueryEntityType: DevKit.Controls.String;
			queryentitytype_uc: DevKit.Controls.ActionCards;
			ruleconditioncontrol: DevKit.Controls.IFrame;
		}
		interface Navigation {
			goal_rollupquery_actualdecimal: DevKit.Controls.NavigationItem,
			goal_rollupquery_actualmoney: DevKit.Controls.NavigationItem,
			goal_rollupquery_customdecimal: DevKit.Controls.NavigationItem,
			goal_rollupquery_customint: DevKit.Controls.NavigationItem,
			goal_rollupquery_custommoney: DevKit.Controls.NavigationItem,
			goal_rollupquery_inprogressdecimal: DevKit.Controls.NavigationItem,
			goal_rollupquery_inprogressint: DevKit.Controls.NavigationItem,
			goal_rollupquery_inprogressmoney: DevKit.Controls.NavigationItem,
			goalrollupquery_actualint: DevKit.Controls.NavigationItem
		}
	}
	class FormGoalRollupQuery_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form GoalRollupQuery_Information */
		Body: DevKit.FormGoalRollupQuery_Information.Body;
		/** The Navigation of form GoalRollupQuery_Information */
		Navigation: DevKit.FormGoalRollupQuery_Information.Navigation;
		/** The SidePanes of form GoalRollupQuery_Information */
		SidePanes: DevKit.SidePanes;
	}
	class GoalRollupQueryApi {
		/**
		* DynamicsCrm.DevKit GoalRollupQueryApi
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
		/** Cho biết người tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Chuỗi chỉ định các tiêu chí điều kiện trong XML Tìm nạp dữ liệu. */
		FetchXml: string;
		/** Mã định danh duy nhất của truy vấn tính tổng số. */
		GoalRollupQueryId: string;
		/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
		ImportSequenceNumber: number;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên mô tả cho truy vấn tính tổng số mục tiêu. */
		Name: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Cho biết truy vấn tính tổng số mục tiêu hiện hoạt hay không hoạt động. */
		StateCode: OptionSet.GoalRollupQuery.StateCode;
		/** Chọn trạng thái của truy vấn tính tổng số mục tiêu. */
		StatusCode: OptionSet.GoalRollupQuery.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của truy vấn tính tổng số mục tiêu. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Chuỗi chỉ định các tiêu chí điều kiện trong XML Tìm nạp dữ liệu. */
			readonly FetchXml: string;
			/** Mã định danh duy nhất của truy vấn tính tổng số. */
			readonly GoalRollupQueryId: string;
			/** Số thứ tự của quá trình nhập tạo ra bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên mô tả cho truy vấn tính tổng số mục tiêu. */
			readonly Name: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Cho biết truy vấn tính tổng số mục tiêu hiện hoạt hay không hoạt động. */
			readonly StateCode: string;
			/** Chọn trạng thái của truy vấn tính tổng số mục tiêu. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của truy vấn tính tổng số mục tiêu. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace GoalRollupQuery {
		enum QueryEntityType {
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
			/** 1 */
			Da_dong,
			/** 0 */
			Mo
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** Công việc Phân tích mẹ đã phân tích Thành phần Phân tích cụ thể này. */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			msdyn_ComponentId: DevKit.Controls.String;
			msdyn_ComponentName: DevKit.Controls.String;
			msdyn_ComponentType: DevKit.Controls.OptionSet;
			msdyn_ErrorCount: DevKit.Controls.Integer;
			/** Tên thực thể tùy chỉnh. */
			msdyn_name: DevKit.Controls.String;
			msdyn_RetryCount: DevKit.Controls.Integer;
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			msdyn_RulePassCount: DevKit.Controls.Integer;
			msdyn_RulePassRate: DevKit.Controls.Integer;
			/** Bộ quy tắc Tình trạng Giải pháp đối với thành phần phân tích này. */
			msdyn_SolutionHealthRuleSetId: DevKit.Controls.Lookup;
			msdyn_WarningCount: DevKit.Controls.Integer;
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
			/** Lý do dẫn đến trạng thái của Thành phần Phân tích */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyn_analysiscomponent_msdyn_analysisresult: DevKit.Controls.NavigationItem
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
		/** The Navigation of form Thong_tin */
		Navigation: DevKit.FormThong_tin.Navigation;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_analysiscomponentApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysiscomponentApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		msdyn_analysiscomponentId: string;
		msdyn_AnalysisComponentType: OptionSet.msdyn_analysiscomponent.msdyn_AnalysisComponentType;
		/** Công việc Phân tích mẹ đã phân tích Thành phần Phân tích cụ thể này. */
		msdyn_AnalysisJobId: string;
		msdyn_ComponentId: string;
		msdyn_ComponentName: string;
		msdyn_ComponentType: OptionSet.msdyn_analysiscomponent.msdyn_ComponentType;
		msdyn_ComponentVersion: string;
		msdyn_ErrorCount: number;
		/** Tên thực thể tùy chỉnh. */
		msdyn_name: string;
		msdyn_RetryCount: number;
		msdyn_RuleFailCount: number;
		msdyn_RulePassCount: number;
		msdyn_RulePassRate: number;
		msdyn_sevcriticalcount: number;
		msdyn_sevhighcount: number;
		msdyn_sevlowcount: number;
		msdyn_sevmediumcount: number;
		/** Bộ quy tắc Tình trạng Giải pháp đối với thành phần phân tích này. */
		msdyn_SolutionHealthRuleSetId: string;
		msdyn_SuggestionCount: number;
		msdyn_WarningCount: number;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
		readonly OwningUser: string;
		/** Trạng thái của Thành phần Phân tích */
		statecode: OptionSet.msdyn_analysiscomponent.statecode;
		/** Lý do dẫn đến trạng thái của Thành phần Phân tích */
		statuscode: OptionSet.msdyn_analysiscomponent.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Số thứ tự của quá trình nhập đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly msdyn_analysiscomponentId: string;
			readonly msdyn_AnalysisComponentType: string;
			/** Công việc Phân tích mẹ đã phân tích Thành phần Phân tích cụ thể này. */
			readonly msdyn_AnalysisJobId: string;
			readonly msdyn_ComponentId: string;
			readonly msdyn_ComponentName: string;
			readonly msdyn_ComponentType: string;
			readonly msdyn_ComponentVersion: string;
			readonly msdyn_ErrorCount: string;
			/** Tên thực thể tùy chỉnh. */
			readonly msdyn_name: string;
			readonly msdyn_RetryCount: string;
			readonly msdyn_RuleFailCount: string;
			readonly msdyn_RulePassCount: string;
			readonly msdyn_RulePassRate: string;
			readonly msdyn_sevcriticalcount: string;
			readonly msdyn_sevhighcount: string;
			readonly msdyn_sevlowcount: string;
			readonly msdyn_sevmediumcount: string;
			/** Bộ quy tắc Tình trạng Giải pháp đối với thành phần phân tích này. */
			readonly msdyn_SolutionHealthRuleSetId: string;
			readonly msdyn_SuggestionCount: string;
			readonly msdyn_WarningCount: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất cho nhóm sở hữu bản ghi. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất cho người dùng sở hữu bản ghi. */
			readonly OwningUser: string;
			/** Trạng thái của Thành phần Phân tích */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Thành phần Phân tích */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_analysiscomponent {
		enum msdyn_AnalysisComponentType {
			/** 192350002 */
			Tinh_trang_doi_tuong,
			/** 192350001 */
			Tinh_trang_Thanh_phan,
			/** 192350000 */
			Tinh_trang_To_chuc
		}
		enum msdyn_ComponentType {
			/** 192350003 */
			Bieu_mau,
			/** 192350005 */
			Cau_hinh,
			/** 192350002 */
			Dang_xem,
			/** 192350000 */
			Giai_phap,
			/** 192350004 */
			Phan_bo_tro,
			/** 192350001 */
			Thuc_the
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 192350003 */
			Da_hoan_thanh_kem_theo_Ngoai_le,
			/** 2 */
			Da_huy,
			/** 192350000 */
			Dang_chay,
			/** 1 */
			Dang_cho_xu_ly,
			/** 192350001 */
			Hoan_thanh,
			/** 192350002 */
			Ngoai_le
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
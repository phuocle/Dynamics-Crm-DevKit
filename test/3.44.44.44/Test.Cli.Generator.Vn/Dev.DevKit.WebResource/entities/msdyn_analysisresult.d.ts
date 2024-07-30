//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Header extends DevKit.Controls.IHeader {
			/** ID chủ sở hữu */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** Công việc Phân tích mẹ đã đưa ra Kết quả Phân tích */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			msdyn_Category: DevKit.Controls.OptionSet;
			msdyn_EntityName: DevKit.Controls.String;
			msdyn_FileUri: DevKit.Controls.String;
			msdyn_helplink: DevKit.Controls.String;
			msdyn_Level: DevKit.Controls.OptionSet;
			msdyn_Line: DevKit.Controls.Integer;
			msdyn_Member: DevKit.Controls.String;
			msdyn_Message: DevKit.Controls.String;
			msdyn_Module: DevKit.Controls.String;
			/** Tên thực thể tùy chỉnh. */
			msdyn_name: DevKit.Controls.String;
			/** Trạng thái trả lại của việc chạy quy tắc: đạt, thất bại hoặc lỗi cấu hình */
			msdyn_ReturnStatus: DevKit.Controls.OptionSet;
			msdyn_RuleId: DevKit.Controls.String;
			msdyn_RuleReferenceUri: DevKit.Controls.String;
			msdyn_Severity: DevKit.Controls.OptionSet;
			msdyn_Snippet: DevKit.Controls.String;
			msdyn_SolutionHealthMessage: DevKit.Controls.String;
			msdyn_Type: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult: DevKit.Controls.NavigationItem
		}
		interface Grid {
			AnalysisResultDetails: DevKit.Controls.Grid;
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
	class msdyn_analysisresultApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysisresultApi
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
		/** Thành phần Phân tích liên kết có chứa vấn đề mô tả trong Kết quả Phân tích. */
		msdyn_AnalysisComponentId: string;
		msdyn_AnalysisComponentType: OptionSet.msdyn_analysisresult.msdyn_AnalysisComponentType;
		/** Công việc Phân tích mẹ đã đưa ra Kết quả Phân tích */
		msdyn_AnalysisJobId: string;
		/** Mã định danh duy nhất của phiên bản thực thể */
		msdyn_analysisresultId: string;
		msdyn_Category: OptionSet.msdyn_analysisresult.msdyn_Category;
		msdyn_ComponentType: OptionSet.msdyn_analysisresult.msdyn_ComponentType;
		msdyn_EntityName: string;
		msdyn_FileUri: string;
		msdyn_HasResolution: boolean;
		msdyn_helplink: string;
		msdyn_Level: OptionSet.msdyn_analysisresult.msdyn_Level;
		msdyn_Line: number;
		msdyn_Member: string;
		msdyn_Message: string;
		msdyn_MessageArguments: string;
		msdyn_MessageId: string;
		msdyn_Module: string;
		/** Tên thực thể tùy chỉnh. */
		msdyn_name: string;
		/** Loại sự cố cần được khắc phục. Giống như Tham số đầu vào IssueType cho Quy tắc tình trạng giải pháp. */
		msdyn_RepairIssueType: string;
		/** Trạng thái trả lại của việc chạy quy tắc: đạt, thất bại hoặc lỗi cấu hình */
		msdyn_ReturnStatus: OptionSet.msdyn_analysisresult.msdyn_ReturnStatus;
		msdyn_RuleId: string;
		msdyn_RuleReferenceUri: string;
		msdyn_Severity: OptionSet.msdyn_analysisresult.msdyn_Severity;
		msdyn_Snippet: string;
		msdyn_SolutionHealthMessage: string;
		msdyn_Type: string;
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
		/** Trạng thái của Kết quả Phân tích */
		statecode: OptionSet.msdyn_analysisresult.statecode;
		/** Lý do dẫn đến trạng thái của Kết quả Phân tích */
		statuscode: OptionSet.msdyn_analysisresult.statuscode;
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
			/** Thành phần Phân tích liên kết có chứa vấn đề mô tả trong Kết quả Phân tích. */
			readonly msdyn_AnalysisComponentId: string;
			readonly msdyn_AnalysisComponentType: string;
			/** Công việc Phân tích mẹ đã đưa ra Kết quả Phân tích */
			readonly msdyn_AnalysisJobId: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly msdyn_analysisresultId: string;
			readonly msdyn_Category: string;
			readonly msdyn_ComponentType: string;
			readonly msdyn_EntityName: string;
			readonly msdyn_FileUri: string;
			readonly msdyn_HasResolution: string;
			readonly msdyn_helplink: string;
			readonly msdyn_Level: string;
			readonly msdyn_Line: string;
			readonly msdyn_Member: string;
			readonly msdyn_Message: string;
			readonly msdyn_MessageArguments: string;
			readonly msdyn_MessageId: string;
			readonly msdyn_Module: string;
			/** Tên thực thể tùy chỉnh. */
			readonly msdyn_name: string;
			/** Loại sự cố cần được khắc phục. Giống như Tham số đầu vào IssueType cho Quy tắc tình trạng giải pháp. */
			readonly msdyn_RepairIssueType: string;
			/** Trạng thái trả lại của việc chạy quy tắc: đạt, thất bại hoặc lỗi cấu hình */
			readonly msdyn_ReturnStatus: string;
			readonly msdyn_RuleId: string;
			readonly msdyn_RuleReferenceUri: string;
			readonly msdyn_Severity: string;
			readonly msdyn_Snippet: string;
			readonly msdyn_SolutionHealthMessage: string;
			readonly msdyn_Type: string;
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
			/** Trạng thái của Kết quả Phân tích */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Kết quả Phân tích */
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
	namespace msdyn_analysisresult {
		enum msdyn_AnalysisComponentType {
			/** 192350001 */
			Tinh_trang_Thanh_phan,
			/** 192350000 */
			Tinh_trang_To_chuc
		}
		enum msdyn_Category {
			/** 192350003 */
			Bao_mat,
			/** 192350005 */
			Di_chuyen_Truc_tuyen,
			/** 192350000 */
			Hieu_suat,
			/** 192350006 */
			Kha_nang_duy_tri,
			/** 192350007 */
			Kha_nang_ho_tro,
			/** 192350008 */
			Kha_nang_truy_nhap,
			/** 192350009 */
			Licensing,
			/** 192350001 */
			San_sang_Nang_cap,
			/** 192350002 */
			Su_dung,
			/** 192350004 */
			Thiet_ke
		}
		enum msdyn_ComponentType {
			/** 192350002 */
			Cau_hinh,
			/** 192350001 */
			Phan_bo_tro,
			/** 192350000 */
			Tai_nguyen_web
		}
		enum msdyn_Level {
			/** 192350001 */
			Canh_bao,
			/** 192350000 */
			Loi
		}
		enum msdyn_ReturnStatus {
			/** 192350004 */
			Canh_bao,
			/** 192350003 */
			Da_giai_quyet,
			/** 192350000 */
			Dat,
			/** 192350006 */
			Goi_y,
			/** 192350005 */
			Loi,
			/** 192350002 */
			Loi_Cau_hinh,
			/** 192350001 */
			That_bai
		}
		enum msdyn_Severity {
			/** 192350002 */
			Cao,
			/** 192350003 */
			Nghiem_trong,
			/** 192350000 */
			Thap,
			/** 192350001 */
			Trung_binh
		}
		enum statecode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum statuscode {
			/** 1 */
			Hien_hoat,
			/** 2 */
			Khong_hoat_dong
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
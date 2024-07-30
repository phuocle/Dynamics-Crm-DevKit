//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections {
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections {
			_87C466A2_37F3_4CDE_A484_C6C75EFF544D: DevKit.Controls.Section;
		}
		interface tab__5B6AE5E5_8F54_4363_B906_48722F438B65 extends DevKit.Controls.ITab {
			Section: tab__5B6AE5E5_8F54_4363_B906_48722F438B65_Sections;
		}
		interface tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC extends DevKit.Controls.ITab {
			Section: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC_Sections;
		}
		interface Tabs {
			_5B6AE5E5_8F54_4363_B906_48722F438B65: tab__5B6AE5E5_8F54_4363_B906_48722F438B65;
			_6A04C119_906C_4D8D_84D6_A470E79CBFCC: tab__6A04C119_906C_4D8D_84D6_A470E79CBFCC;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập mô tả cho cấu hình tìm kiếm */
			Description: DevKit.Controls.String;
			/** Nhập số lượng tối đa các từ khóa hoặc cụm từ khóa được xác định bằng phân tích văn bản. */
			MaxKeyWords: DevKit.Controls.Integer;
			/** Nhập tên lôgic cho cấu hình tìm kiếm. */
			Name: DevKit.Controls.String;
			/** Nhập thực thể mà bài viết được đề xuất. */
			SourceEntity: DevKit.Controls.String;
		}
		interface Navigation {

		}
		interface Grid {
			textanalyticsentitymappings: DevKit.Controls.Grid;
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
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class KnowledgeSearchModelApi {
		/**
		* DynamicsCrm.DevKit KnowledgeSearchModelApi
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
		/** Mã định danh duy nhất của AzureServiceConnection được liên kết với Mô hình Tìm kiếm trong Cơ sở kiến thức. */
		AzureServiceConnectionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.KnowledgeSearchModel.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo Mô hình Tìm kiếm trong Cơ sở kiến thức. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo Mô hình Tìm kiếm trong Cơ sở kiến thức. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo Mô hình tìm kiếm trong cơ sở kiến thức. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập mô tả cho cấu hình tìm kiếm */
		Description: string;
		/** thực thể */
		Entity1: string;
		/** XML tìm nạp dữ liệu. */
		FetchXmlList: string;
		/** Được Quản lý */
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của phiên bản thực thể */
		KnowledgeSearchModelId: string;
		/** Mã định danh duy nhất của Mô hình Tìm kiếm trong Cơ sở Kiến thức được sử dụng khi đồng bộ các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
		readonly KnowledgeSearchModelIdUnique: string;
		/** Nhập số lượng tối đa các từ khóa hoặc cụm từ khóa được xác định bằng phân tích văn bản. */
		MaxKeyWords: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi Mô hình Tìm kiếm trong Cơ sở kiến thức. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi lần cuối mô hình Tìm kiếm trong Cơ sở kiến thức. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi mô hình tìm kiếm trong cơ sở kiến thức lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên lôgic cho cấu hình tìm kiếm. */
		Name: string;
		/** Nhập số lượng tối đa các từ của cụm từ khóa sử dụng trong chủ đề. */
		NgramSize: number;
		/** Mã định danh duy nhất của tổ chức được liên kết với thực thể Mô hình Tìm kiếm trong Cơ sở kiến thức. */
		readonly OrganizationId: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Trạng thái của Mô hình Tìm kiếm trong Cơ sở kiến thức */
		StateCode: OptionSet.KnowledgeSearchModel.StateCode;
		/** Lý do dẫn đến trạng thái của Mô hình Tìm kiếm trong Cơ sở kiến thức */
		StatusCode: OptionSet.KnowledgeSearchModel.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của AzureServiceConnection được liên kết với Mô hình Tìm kiếm trong Cơ sở kiến thức. */
			readonly AzureServiceConnectionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo Mô hình Tìm kiếm trong Cơ sở kiến thức. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo Mô hình Tìm kiếm trong Cơ sở kiến thức. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo Mô hình tìm kiếm trong cơ sở kiến thức. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập mô tả cho cấu hình tìm kiếm */
			readonly Description: string;
			/** thực thể */
			readonly Entity1: string;
			/** XML tìm nạp dữ liệu. */
			readonly FetchXmlList: string;
			/** Được Quản lý */
			readonly IsManaged: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly KnowledgeSearchModelId: string;
			/** Mã định danh duy nhất của Mô hình Tìm kiếm trong Cơ sở Kiến thức được sử dụng khi đồng bộ các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
			readonly KnowledgeSearchModelIdUnique: string;
			/** Nhập số lượng tối đa các từ khóa hoặc cụm từ khóa được xác định bằng phân tích văn bản. */
			readonly MaxKeyWords: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi Mô hình Tìm kiếm trong Cơ sở kiến thức. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi lần cuối mô hình Tìm kiếm trong Cơ sở kiến thức. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi mô hình tìm kiếm trong cơ sở kiến thức lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên lôgic cho cấu hình tìm kiếm. */
			readonly Name: string;
			/** Nhập số lượng tối đa các từ của cụm từ khóa sử dụng trong chủ đề. */
			readonly NgramSize: string;
			/** Mã định danh duy nhất của tổ chức được liên kết với thực thể Mô hình Tìm kiếm trong Cơ sở kiến thức. */
			readonly OrganizationId: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Trạng thái của Mô hình Tìm kiếm trong Cơ sở kiến thức */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của Mô hình Tìm kiếm trong Cơ sở kiến thức */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeSearchModel {
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
		enum SourceEntity {
			/** 112 */
			Truong_hop
		}
		enum StateCode {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
		}
		enum StatusCode {
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
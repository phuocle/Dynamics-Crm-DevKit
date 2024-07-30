//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections {
			_0CBFC71F_6EFF_4583_9B38_7A9AE69C3AE1: DevKit.Controls.Section;
		}
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections {
			_29B6CE18_08E1_4B87_B532_B18A6987BBB2: DevKit.Controls.Section;
			_89397326_037F_4A43_B362_6B9B04E7917B: DevKit.Controls.Section;
		}
		interface tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0 extends DevKit.Controls.ITab {
			Section: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0_Sections;
		}
		interface tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D extends DevKit.Controls.ITab {
			Section: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D_Sections;
		}
		interface Tabs {
			_3D17A623_BFEB_49F9_83C4_B5A02B96CAC0: tab__3D17A623_BFEB_49F9_83C4_B5A02B96CAC0;
			_67E8B341_A89A_4207_9BCC_4C1F9CC8B89D: tab__67E8B341_A89A_4207_9BCC_4C1F9CC8B89D;
		}
		interface Body {
			Tab: Tabs;
			/** Nhập mô tả cho Quy tắc Tương tự Nâng cao */
			Description: DevKit.Controls.String;
			/** Lọc Kết quả Theo Trạng thái */
			FilterResultByStatus: DevKit.Controls.OptionSet;
			/** Dùng Phân tích Văn bản cho việc Khớp Mục tiêu */
			IsAzureMLRequired: DevKit.Controls.Boolean;
			/** Nhập số lượng tối đa các từ khóa và cụm từ khóa để sử dụng với phân tích văn bản. */
			MaxNumberKeyphrases: DevKit.Controls.Integer;
			/** Nhập tên lôgic cho cấu hình tương tự */
			name: DevKit.Controls.String;
			/** Nhập thực thể mà các bản ghi tương tự sẽ được gợi ý cho thực thể đó */
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
	class AdvancedSimilarityRuleApi {
		/**
		* DynamicsCrm.DevKit AdvancedSimilarityRuleApi
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
		AdvancedSimilarityRuleId: string;
		/** Mã định danh duy nhất của Quy tắc Tương tự Nâng cao được sử dụng khi đồng bộ hóa các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
		readonly AdvancedSimilarityRuleIdUnique: string;
		/** Mã định danh duy nhất của AzureServiceConnection được liên kết với AdvancedSimilarityRule. */
		AzureServiceConnectionId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.AdvancedSimilarityRule.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo Quy tắc Tương tự Nâng cao. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập mô tả cho Quy tắc Tương tự Nâng cao */
		Description: string;
		/** thực thể */
		Entity1: string;
		/** Chỉ sử dụng nội bộ. */
		ExactMatchList: string;
		/** Chỉ sử dụng nội bộ. */
		FetchXmlList: string;
		/** Lọc Kết quả Theo Trạng thái */
		FilterResultByStatus: OptionSet.AdvancedSimilarityRule.FilterResultByStatus;
		/** Lọc Kết quả Theo Trạng thái */
		FilterResultByStatusDisplayName: string;
		/** Dùng Phân tích Văn bản cho việc Khớp Mục tiêu */
		IsAzureMLRequired: boolean;
		/** Được Quản lý */
		readonly IsManaged: boolean;
		/** Nhập số lượng tối đa các từ khóa và cụm từ khóa để sử dụng với phân tích văn bản. */
		MaxNumberKeyphrases: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi Quy tắc Tương tự Nâng cao. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi quy tắc tương tự nâng cao lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Nhập tên lôgic cho cấu hình tương tự */
		name: string;
		/** Nhập số lượng từ tối đa của cụm từ khóa để sử dụng với phân tích văn bản. */
		NgramSize: number;
		/** Mã định danh duy nhất của tổ chức liên kết với các quy tắc tương tự nâng cao */
		readonly OrganizationId: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Trạng thái của quy tắc tương tự nâng cao */
		StateCode: OptionSet.AdvancedSimilarityRule.StateCode;
		/** Lý do dẫn đến trạng thái của quy tắc tương tự nâng cao */
		StatusCode: OptionSet.AdvancedSimilarityRule.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly AdvancedSimilarityRuleId: string;
			/** Mã định danh duy nhất của Quy tắc Tương tự Nâng cao được sử dụng khi đồng bộ hóa các tùy chỉnh cho máy khách Microsoft Dynamics 365 dành cho Outlook */
			readonly AdvancedSimilarityRuleIdUnique: string;
			/** Mã định danh duy nhất của AzureServiceConnection được liên kết với AdvancedSimilarityRule. */
			readonly AzureServiceConnectionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo Quy tắc Tương tự Nâng cao. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập mô tả cho Quy tắc Tương tự Nâng cao */
			readonly Description: string;
			/** thực thể */
			readonly Entity1: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ExactMatchList: string;
			/** Chỉ sử dụng nội bộ. */
			readonly FetchXmlList: string;
			/** Lọc Kết quả Theo Trạng thái */
			readonly FilterResultByStatus: string;
			/** Lọc Kết quả Theo Trạng thái */
			readonly FilterResultByStatusDisplayName: string;
			/** Dùng Phân tích Văn bản cho việc Khớp Mục tiêu */
			readonly IsAzureMLRequired: string;
			/** Được Quản lý */
			readonly IsManaged: string;
			/** Nhập số lượng tối đa các từ khóa và cụm từ khóa để sử dụng với phân tích văn bản. */
			readonly MaxNumberKeyphrases: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi Quy tắc Tương tự Nâng cao. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi quy tắc tương tự nâng cao lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Nhập tên lôgic cho cấu hình tương tự */
			readonly name: string;
			/** Nhập số lượng từ tối đa của cụm từ khóa để sử dụng với phân tích văn bản. */
			readonly NgramSize: string;
			/** Mã định danh duy nhất của tổ chức liên kết với các quy tắc tương tự nâng cao */
			readonly OrganizationId: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Trạng thái của quy tắc tương tự nâng cao */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của quy tắc tương tự nâng cao */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace AdvancedSimilarityRule {
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
		enum FilterResultByStatus {
			/** 0 */
			Hien_hoat,
			/** 1 */
			Khong_hoat_dong
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
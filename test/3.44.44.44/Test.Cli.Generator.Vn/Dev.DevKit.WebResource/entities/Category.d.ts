//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThe_loai {
		interface tab_AssociatedCategories_Sections {
			Associated_Categories: DevKit.Controls.Section;
		}
		interface tab_AssociatedCategories extends DevKit.Controls.ITab {
			Section: tab_AssociatedCategories_Sections;
		}
		interface Tabs {
			AssociatedCategories: tab_AssociatedCategories;
		}
		interface Body {
			Tab: Tabs;
			/** Hiển thị số thể loại cho tham chiếu khách hàng. */
			CategoryNumber: DevKit.Controls.String;
			/** Nhập mô tả chi tiết của thể loại */
			Description: DevKit.Controls.String;
			/** Chọn một bài viết thể loại hiện có cho thể loại đó. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Nhập một số để xác định vị trí hiển thị của thể loại trong hệ thống cấp bậc. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Nhập tiêu đề cho Thể loại. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			category_parent_category: DevKit.Controls.NavigationItem
		}
		interface Grid {
			AssociatedCategoriesGrid: DevKit.Controls.Grid;
		}
	}
	class FormThe_loai extends DevKit.IForm {
		/**
		* Thể loại [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form The_loai */
		Body: DevKit.FormThe_loai.Body;
		/** The Navigation of form The_loai */
		Navigation: DevKit.FormThe_loai.Navigation;
		/** The Grid of form The_loai */
		Grid: DevKit.FormThe_loai.Grid;
		/** The SidePanes of form The_loai */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTuong_tac_Chinh_cua_The_loai {
		interface Tabs {
		}
		interface Body {
			/** Nhập mô tả chi tiết của thể loại */
			Description: DevKit.Controls.String;
			/** Chọn một bài viết thể loại hiện có cho thể loại đó. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Nhập một số để xác định vị trí hiển thị của thể loại trong hệ thống cấp bậc. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Nhập tiêu đề cho Thể loại. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			category_parent_category: DevKit.Controls.NavigationItem
		}
	}
	class FormTuong_tac_Chinh_cua_The_loai extends DevKit.IForm {
		/**
		* Tương tác Chính của Thể loại [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Tuong_tac_Chinh_cua_The_loai */
		Body: DevKit.FormTuong_tac_Chinh_cua_The_loai.Body;
		/** The Navigation of form Tuong_tac_Chinh_cua_The_loai */
		Navigation: DevKit.FormTuong_tac_Chinh_cua_The_loai.Navigation;
		/** The SidePanes of form Tuong_tac_Chinh_cua_The_loai */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTao_nhanh_the_loai {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Hiển thị số thể loại cho tham chiếu khách hàng. */
			CategoryNumber: DevKit.Controls.String;
			/** Nhập mô tả chi tiết của thể loại */
			Description: DevKit.Controls.String;
			/** Chọn một bài viết thể loại hiện có cho thể loại đó. */
			ParentCategoryId: DevKit.Controls.Lookup;
			/** Nhập một số để xác định vị trí hiển thị của thể loại trong hệ thống cấp bậc. */
			SequenceNumber: DevKit.Controls.Integer;
			/** Nhập tiêu đề cho Thể loại. */
			Title: DevKit.Controls.String;
		}
	}
	class FormTao_nhanh_the_loai extends DevKit.IForm {
		/**
		* Tạo nhanh thể loại [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Tao_nhanh_the_loai */
		Body: DevKit.FormTao_nhanh_the_loai.Body;
	}
	class CategoryApi {
		/**
		* DynamicsCrm.DevKit CategoryApi
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
		/** Hiển thị thể loại. */
		CategoryId: string;
		/** Hiển thị số thể loại cho tham chiếu khách hàng. */
		CategoryNumber: string;
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Nhập mô tả chi tiết của thể loại */
		Description: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để chuyển đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu thể loại. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu thể loại này. */
		readonly OwningUser: string;
		/** Chọn một bài viết thể loại hiện có cho thể loại đó. */
		ParentCategoryId: string;
		/** Nhập một số để xác định vị trí hiển thị của thể loại trong hệ thống cấp bậc. */
		SequenceNumber: number;
		/** Nhập tiêu đề cho Thể loại. */
		Title: string;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		TransactionCurrencyId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Hiển thị thể loại. */
			readonly CategoryId: string;
			/** Hiển thị số thể loại cho tham chiếu khách hàng. */
			readonly CategoryNumber: string;
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Nhập mô tả chi tiết của thể loại */
			readonly Description: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để chuyển đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Cho biết đơn vị kinh doanh của chủ sở hữu bản ghi. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu thể loại. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu thể loại này. */
			readonly OwningUser: string;
			/** Chọn một bài viết thể loại hiện có cho thể loại đó. */
			readonly ParentCategoryId: string;
			/** Nhập một số để xác định vị trí hiển thị của thể loại trong hệ thống cấp bậc. */
			readonly SequenceNumber: string;
			/** Nhập tiêu đề cho Thể loại. */
			readonly Title: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Category {
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
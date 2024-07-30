//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			title: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Mô tả về mẫu bài viết trong cơ sở kiến thức. */
			Description: DevKit.Controls.String;
			/** Ngôn ngữ của Mẫu Bài viết */
			LanguageCode: DevKit.Controls.Integer;
			/** Tiêu đề của mẫu bài viết trong cơ sở kiến thức. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			kb_article_template_kb_articles: DevKit.Controls.NavigationItem
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
	class KbArticleTemplateApi {
		/**
		* DynamicsCrm.DevKit KbArticleTemplateApi
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
		readonly ComponentState: OptionSet.KbArticleTemplate.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo mẫu bài viết trong cơ sở kiến thức. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo mẫu bài viết trong cơ sở kiến thức. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo kbarticletemplate. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả về mẫu bài viết trong cơ sở kiến thức. */
		Description: string;
		/** Định dạng XML của mẫu bài viết trong cơ sở kiến thức. */
		FormatXml: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin về khả năng hiện hoạt của bài viết trong cơ sở kiến thức. */
		IsActive: boolean;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Mã định danh duy nhất của mẫu bài viết trong cơ sở kiến thức. */
		KbArticleTemplateId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly KbArticleTemplateIdUnique: string;
		/** Ngôn ngữ của Mẫu Bài viết */
		LanguageCode: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối mẫu bài viết trong cơ sở kiến thức. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi lần cuối mẫu bài viết trong cơ sở kiến thức. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối kbarticletemplate. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với mẫu. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Cấu trúc XML của bài viết trong cơ sở kiến thức. */
		StructureXml: string;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Tiêu đề của mẫu bài viết trong cơ sở kiến thức. */
		Title: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo mẫu bài viết trong cơ sở kiến thức. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo mẫu bài viết trong cơ sở kiến thức. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo kbarticletemplate. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả về mẫu bài viết trong cơ sở kiến thức. */
			readonly Description: string;
			/** Định dạng XML của mẫu bài viết trong cơ sở kiến thức. */
			readonly FormatXml: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin về khả năng hiện hoạt của bài viết trong cơ sở kiến thức. */
			readonly IsActive: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Mã định danh duy nhất của mẫu bài viết trong cơ sở kiến thức. */
			readonly KbArticleTemplateId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly KbArticleTemplateIdUnique: string;
			/** Ngôn ngữ của Mẫu Bài viết */
			readonly LanguageCode: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối mẫu bài viết trong cơ sở kiến thức. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi lần cuối mẫu bài viết trong cơ sở kiến thức. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối kbarticletemplate. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với mẫu. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Cấu trúc XML của bài viết trong cơ sở kiến thức. */
			readonly StructureXml: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Tiêu đề của mẫu bài viết trong cơ sở kiến thức. */
			readonly Title: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KbArticleTemplate {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_announcement_Sections {
			additional_settings: DevKit.Controls.Section;
			announcement_information: DevKit.Controls.Section;
		}
		interface tab_announcement extends DevKit.Controls.ITab {
			Section: tab_announcement_Sections;
		}
		interface Tabs {
			announcement: tab_announcement;
		}
		interface Body {
			Tab: Tabs;
			/** Ngày và giờ của ngày cuối cùng mà thông báo còn hiện hoạt. */
			ActiveUntil: DevKit.Controls.Date;
			/** Tiêu đề thông báo. */
			ArticleTitle: DevKit.Controls.String;
			/** URL cho Trang web đặt thông báo. */
			ArticleUrl: DevKit.Controls.String;
			/** Văn bản cho thông báo. */
			NewsArticle: DevKit.Controls.String;
		}
		interface Navigation {

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
	class BusinessUnitNewsArticleApi {
		/**
		* DynamicsCrm.DevKit BusinessUnitNewsArticleApi
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
		/** Ngày và giờ cho thông báo trở thành hiện hoạt. */
		ActiveOn_UtcDateOnly: Date;
		/** Ngày và giờ của ngày cuối cùng mà thông báo còn hiện hoạt. */
		ActiveUntil_UtcDateOnly: Date;
		/** Tiêu đề thông báo. */
		ArticleTitle: string;
		/** Loại thông báo. */
		ArticleTypeCode: OptionSet.BusinessUnitNewsArticle.ArticleTypeCode;
		/** URL cho Trang web đặt thông báo. */
		ArticleUrl: string;
		/** Mã định danh duy nhất của thông báo. */
		BusinessUnitNewsArticleId: string;
		/** Mã định danh duy nhất của người dùng đã tạo thông báo. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo thông báo. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo businessunitnewsarticle. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người dùng sửa đổi thông báo lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi thông báo lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi businessunitnewsarticle lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Văn bản cho thông báo. */
		NewsArticle: string;
		/** Mã định danh duy nhất của tổ chức liên kết với thông báo. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Thông tin về việc có hiển thị thông báo trên Trang web chủ hay không. */
		ShowOnHomepage: boolean;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Ngày và giờ cho thông báo trở thành hiện hoạt. */
			readonly ActiveOn_UtcDateOnly: string;
			/** Ngày và giờ của ngày cuối cùng mà thông báo còn hiện hoạt. */
			readonly ActiveUntil_UtcDateOnly: string;
			/** Tiêu đề thông báo. */
			readonly ArticleTitle: string;
			/** Loại thông báo. */
			readonly ArticleTypeCode: string;
			/** URL cho Trang web đặt thông báo. */
			readonly ArticleUrl: string;
			/** Mã định danh duy nhất của thông báo. */
			readonly BusinessUnitNewsArticleId: string;
			/** Mã định danh duy nhất của người dùng đã tạo thông báo. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo thông báo. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo businessunitnewsarticle. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người dùng sửa đổi thông báo lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi thông báo lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi businessunitnewsarticle lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Văn bản cho thông báo. */
			readonly NewsArticle: string;
			/** Mã định danh duy nhất của tổ chức liên kết với thông báo. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Thông tin về việc có hiển thị thông báo trên Trang web chủ hay không. */
			readonly ShowOnHomepage: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace BusinessUnitNewsArticle {
		enum ArticleTypeCode {
			/** 2 */
			Nguoi_dung_Ban_hang,
			/** 3 */
			Nguoi_dung_Dich_vu,
			/** 1 */
			Tat_ca_Nguoi_dung
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
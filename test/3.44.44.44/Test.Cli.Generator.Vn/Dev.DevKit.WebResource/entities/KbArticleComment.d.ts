//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			kb_comment: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Mã định danh duy nhất của người dùng đã tạo nhận xét về bài viết trong cơ sở kiến thức. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo nhận xét về bài viết trong cơ sở kiến thức. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối nhận xét về bài viết trong cơ sở kiến thức. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi lần cuối nhận xét về bài viết trong cơ sở kiến thức. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Tiêu đề của nhận xét về bài viết trong cơ sở kiến thức. */
			Title: DevKit.Controls.String;
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
	class KbArticleCommentApi {
		/**
		* DynamicsCrm.DevKit KbArticleCommentApi
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
		/** Nội dung nhận xét về bài viết trong cơ sở kiến thức. */
		CommentText: string;
		/** Mã định danh duy nhất của người dùng đã tạo nhận xét về bài viết trong cơ sở kiến thức. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo nhận xét về bài viết trong cơ sở kiến thức. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo kbarticlecomment. */
		readonly CreatedOnBehalfBy: string;
		/** Mã định danh duy nhất của nhận xét về bài viết trong cơ sở kiến thức. */
		KbArticleCommentId: string;
		/** Mã định danh duy nhất của bài viết trong cơ sở kiến thức được áp dụng nhận xét này. */
		KbArticleId: string;
		/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối nhận xét về bài viết trong cơ sở kiến thức. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi lần cuối nhận xét về bài viết trong cơ sở kiến thức. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối kbarticlecomment. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức có nhận xét về bài viết được liên kết. */
		readonly OrganizationId: string;
		/** Tiêu đề của nhận xét về bài viết trong cơ sở kiến thức. */
		Title: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Nội dung nhận xét về bài viết trong cơ sở kiến thức. */
			readonly CommentText: string;
			/** Mã định danh duy nhất của người dùng đã tạo nhận xét về bài viết trong cơ sở kiến thức. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo nhận xét về bài viết trong cơ sở kiến thức. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo kbarticlecomment. */
			readonly CreatedOnBehalfBy: string;
			/** Mã định danh duy nhất của nhận xét về bài viết trong cơ sở kiến thức. */
			readonly KbArticleCommentId: string;
			/** Mã định danh duy nhất của bài viết trong cơ sở kiến thức được áp dụng nhận xét này. */
			readonly KbArticleId: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi lần cuối nhận xét về bài viết trong cơ sở kiến thức. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi lần cuối nhận xét về bài viết trong cơ sở kiến thức. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi lần cuối kbarticlecomment. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức có nhận xét về bài viết được liên kết. */
			readonly OrganizationId: string;
			/** Tiêu đề của nhận xét về bài viết trong cơ sở kiến thức. */
			readonly Title: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KbArticleComment {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormKnowledgeArticleViews {
		interface Tabs {
		}
		interface Body {
			/** Số Dạng xem Bài viết trong Cơ sở kiến thức được truy cập mỗi ngày */
			KnowledgeArticleView: DevKit.Controls.Integer;
			/** Cho biết vị trí đã sử dụng kiến thức */
			Location: DevKit.Controls.OptionSet;
			/** Thông tin về Ngày */
			ViewDate: DevKit.Controls.Date;
		}
		interface Navigation {

		}
	}
	class FormKnowledgeArticleViews extends DevKit.IForm {
		/**
		* KnowledgeArticleViews [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KnowledgeArticleViews */
		Body: DevKit.FormKnowledgeArticleViews.Body;
		/** The Navigation of form KnowledgeArticleViews */
		Navigation: DevKit.FormKnowledgeArticleViews.Navigation;
		/** The SidePanes of form KnowledgeArticleViews */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormKnowledgeArticleViews_MainInteractionCentric {
		interface Tabs {
		}
		interface Body {
			/** Số Dạng xem Bài viết trong Cơ sở kiến thức được truy cập mỗi ngày */
			KnowledgeArticleView: DevKit.Controls.Integer;
			/** Cho biết vị trí đã sử dụng kiến thức */
			Location: DevKit.Controls.OptionSet;
			/** Thông tin về Ngày */
			ViewDate: DevKit.Controls.Date;
		}
		interface Navigation {

		}
	}
	class FormKnowledgeArticleViews_MainInteractionCentric extends DevKit.IForm {
		/**
		* KnowledgeArticleViews MainInteractionCentric [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form KnowledgeArticleViews_MainInteractionCentric */
		Body: DevKit.FormKnowledgeArticleViews_MainInteractionCentric.Body;
		/** The Navigation of form KnowledgeArticleViews_MainInteractionCentric */
		Navigation: DevKit.FormKnowledgeArticleViews_MainInteractionCentric.Navigation;
		/** The SidePanes of form KnowledgeArticleViews_MainInteractionCentric */
		SidePanes: DevKit.SidePanes;
	}
	class KnowledgeArticleViewsApi {
		/**
		* DynamicsCrm.DevKit KnowledgeArticleViewsApi
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
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
		readonly ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Chọn Bài viết trong Cơ sở kiến thức. */
		KnowledgeArticleId: string;
		/** Số Dạng xem Bài viết trong Cơ sở kiến thức được truy cập mỗi ngày */
		KnowledgeArticleView: number;
		/** Mã định danh duy nhất của dạng xem bài viết trong cơ sở kiến thức */
		KnowledgeArticleViewsId: string;
		/** Cho biết vị trí đã sử dụng kiến thức */
		Location: OptionSet.KnowledgeArticleViews.Location;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu dạng xem bài viết trong cơ sở kiến thức. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu dạng xem bài viết trong cơ sở kiến thức. */
		readonly OwningUser: string;
		/** Trạng thái của Dạng xem Bài viết trong Cơ sở kiến thức */
		statecode: OptionSet.KnowledgeArticleViews.statecode;
		/** Lý do dẫn đến trạng thái của Dạng xem Bài viết trong Cơ sở kiến thức */
		statuscode: OptionSet.KnowledgeArticleViews.statuscode;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
		readonly TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Thông tin về Ngày */
		ViewDate_UtcDateOnly: Date;
		readonly FormattedValue: {
			/** Cho biết người tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Chọn Bài viết trong Cơ sở kiến thức. */
			readonly KnowledgeArticleId: string;
			/** Số Dạng xem Bài viết trong Cơ sở kiến thức được truy cập mỗi ngày */
			readonly KnowledgeArticleView: string;
			/** Mã định danh duy nhất của dạng xem bài viết trong cơ sở kiến thức */
			readonly KnowledgeArticleViewsId: string;
			/** Cho biết vị trí đã sử dụng kiến thức */
			readonly Location: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu dạng xem bài viết trong cơ sở kiến thức. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu dạng xem bài viết trong cơ sở kiến thức. */
			readonly OwningUser: string;
			/** Trạng thái của Dạng xem Bài viết trong Cơ sở kiến thức */
			readonly statecode: string;
			/** Lý do dẫn đến trạng thái của Dạng xem Bài viết trong Cơ sở kiến thức */
			readonly statuscode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Thông tin về Ngày */
			readonly ViewDate_UtcDateOnly: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeArticleViews {
		enum Location {
			/** 1 */
			Noi_bo,
			/** 2 */
			Web
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
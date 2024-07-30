//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface Tabs {
		}
		interface Body {

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
	class OfficeGraphDocumentApi {
		/**
		* DynamicsCrm.DevKit OfficeGraphDocumentApi
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
		/** Hiển thị Tên Tác giả của Tài liệu Office Graph. */
		readonly AuthorNames: string;
		/** Hiển thị Người tạo Tài liệu Office Graph. */
		readonly CreatedBy: string;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedTime_UtcDateAndTime: Date;
		/** Id Tài liệu. */
		DocumentId: string;
		/** Người sửa lần cuối tài liệu */
		readonly DocumentLastModifiedBy: string;
		/** Ngày sửa lần cuối tài liệu */
		readonly DocumentLastModifiedOn_UtcDateAndTime: Date;
		/** siêu dữ liệu xem trước tài liệu */
		readonly DocumentPreviewMetadata: string;
		/** Tỷ giá của loại tiền được liên kết với Tài liệu Office Graph theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Phần mở rộng Tệp của Tài liệu Office Graph. */
		readonly FileExtension: string;
		/** Hiển thị Loại Tệp của Tài liệu Office Graph. */
		readonly FileType: string;
		/** Hiển thị người sửa đổi Tài liệu Office Graph. */
		readonly ModifiedBy: string;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedTime_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của phiên bản thực thể */
		OfficeGraphDocumentId: string;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		/** Hiển thị Url Ảnh Xem trước của Tài liệu Office Graph. */
		readonly PreviewImageUrl: string;
		/** Hiển thị Loại Truy vấn của các thư mục con. */
		readonly QueryType: number;
		/** Xếp hạng mức độ liên quan của tài liệu đã truy xuất */
		readonly Rank: number;
		/** Url đọc trực tuyến */
		readonly ReadUrl: string;
		/** Phần mở rộng Tệp Phụ của Tài liệu Office Graph. */
		readonly SecondaryFileExtension: string;
		/** Tiêu đề của trang web tài liệu chính */
		readonly SiteTitle: string;
		/** Url trang web của trang web tài liệu chính */
		readonly SiteUrl: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Tiêu đề của thực thể. */
		Title: string;
		/** Tỷ giá của loại tiền được liên kết với Tài liệu Office Graph theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		readonly VersionNumber: number;
		/** Hiển thị Số lần Xem các thư mục con. */
		readonly ViewCount: number;
		/** Hiển thị Url Vị trí trên Web của Tài liệu Office Graph. */
		readonly WebLocationUrl: string;
		readonly FormattedValue: {
			/** Hiển thị Tên Tác giả của Tài liệu Office Graph. */
			readonly AuthorNames: string;
			/** Hiển thị Người tạo Tài liệu Office Graph. */
			readonly CreatedBy: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedTime_UtcDateAndTime: string;
			/** Id Tài liệu. */
			readonly DocumentId: string;
			/** Người sửa lần cuối tài liệu */
			readonly DocumentLastModifiedBy: string;
			/** Ngày sửa lần cuối tài liệu */
			readonly DocumentLastModifiedOn_UtcDateAndTime: string;
			/** siêu dữ liệu xem trước tài liệu */
			readonly DocumentPreviewMetadata: string;
			/** Tỷ giá của loại tiền được liên kết với Tài liệu Office Graph theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Phần mở rộng Tệp của Tài liệu Office Graph. */
			readonly FileExtension: string;
			/** Hiển thị Loại Tệp của Tài liệu Office Graph. */
			readonly FileType: string;
			/** Hiển thị người sửa đổi Tài liệu Office Graph. */
			readonly ModifiedBy: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedTime_UtcDateAndTime: string;
			/** Mã định danh duy nhất của phiên bản thực thể */
			readonly OfficeGraphDocumentId: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			/** Hiển thị Url Ảnh Xem trước của Tài liệu Office Graph. */
			readonly PreviewImageUrl: string;
			/** Hiển thị Loại Truy vấn của các thư mục con. */
			readonly QueryType: string;
			/** Xếp hạng mức độ liên quan của tài liệu đã truy xuất */
			readonly Rank: string;
			/** Url đọc trực tuyến */
			readonly ReadUrl: string;
			/** Phần mở rộng Tệp Phụ của Tài liệu Office Graph. */
			readonly SecondaryFileExtension: string;
			/** Tiêu đề của trang web tài liệu chính */
			readonly SiteTitle: string;
			/** Url trang web của trang web tài liệu chính */
			readonly SiteUrl: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Tiêu đề của thực thể. */
			readonly Title: string;
			/** Tỷ giá của loại tiền được liên kết với Tài liệu Office Graph theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			readonly VersionNumber: string;
			/** Hiển thị Số lần Xem các thư mục con. */
			readonly ViewCount: string;
			/** Hiển thị Url Vị trí trên Web của Tài liệu Office Graph. */
			readonly WebLocationUrl: string;
		}
	}
}
declare namespace OptionSet {
	namespace OfficeGraphDocument {
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
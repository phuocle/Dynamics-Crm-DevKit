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
	class RecommendedDocumentApi {
		/**
		* DynamicsCrm.DevKit RecommendedDocumentApi
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
		/** Nhập URL đặt tài liệu đề xuất. */
		readonly AbsoluteUrl: string;
		/** Hiện tên bản ghi liên kết của tài liệu đề xuất. */
		AssociatedRecordName: string;
		/** Hiện tên tác giả của tài liệu đề xuất. */
		Author: string;
		/** Chọn loại nội dung của tài liệu. */
		readonly ContentType: string;
		/** Hiển thị người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
		readonly CreatedOnBehalfBy: string;
		/** Hiện URL Chỉnh sửa của tài liệu đề xuất. */
		readonly EditUrl: string;
		/** Hiển thị tỷ giá của loại tiền được liên kết với tài liệu đề xuất theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Hiển thị tài liệu bên ngoài. */
		ExternalDocumentId: string;
		/** Cho biết người cập nhật bản ghi tài liệu lần cuối. */
		ExternalModifiedBy: string;
		/** Hiện kích thước tệp. */
		readonly FileSize: number;
		/** Hiện loại tệp. */
		readonly FileType: string;
		/** Hiện tên đầy đủ của tài liệu đề xuất. */
		readonly FullName: string;
		/** Lưu trữ tên Lớp Biểu tượng của tài liệu đề xuất. */
		readonly IconClassName: string;
		/** Hiện vị trí của tài liệu đề xuất. */
		readonly Location: string;
		/** Cho biết người cập nhật bản ghi sau cùng. */
		readonly ModifiedBy: string;
		/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
		readonly ModifiedOnBehalfBy: string;
		/** Hiển thị tổ chức. */
		readonly OrganizationId: string;
		/** Hiện URL Đọc của tài liệu đề xuất. */
		readonly ReadUrl: string;
		/** Hiện bản ghi tài liệu đề xuất. */
		RecommendedDocumentId: string;
		/** Hiện dung lượng lưu trữ nguồn của tài liệu đề xuất. */
		Source: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Nhập tiêu đề cho thực thể. */
		Title: string;
		/** Hiển thị tỷ giá của loại tiền được liên kết với tài liệu đề xuất theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Hiện phiên bản tài liệu đề xuất. */
		readonly Version: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Nhập URL đặt tài liệu đề xuất. */
			readonly AbsoluteUrl: string;
			/** Hiện tên bản ghi liên kết của tài liệu đề xuất. */
			readonly AssociatedRecordName: string;
			/** Hiện tên tác giả của tài liệu đề xuất. */
			readonly Author: string;
			/** Chọn loại nội dung của tài liệu. */
			readonly ContentType: string;
			/** Hiển thị người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Cho biết người tạo bản ghi thay mặt cho người dùng khác. */
			readonly CreatedOnBehalfBy: string;
			/** Hiện URL Chỉnh sửa của tài liệu đề xuất. */
			readonly EditUrl: string;
			/** Hiển thị tỷ giá của loại tiền được liên kết với tài liệu đề xuất theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Hiển thị tài liệu bên ngoài. */
			readonly ExternalDocumentId: string;
			/** Cho biết người cập nhật bản ghi tài liệu lần cuối. */
			readonly ExternalModifiedBy: string;
			/** Hiện kích thước tệp. */
			readonly FileSize: string;
			/** Hiện loại tệp. */
			readonly FileType: string;
			/** Hiện tên đầy đủ của tài liệu đề xuất. */
			readonly FullName: string;
			/** Lưu trữ tên Lớp Biểu tượng của tài liệu đề xuất. */
			readonly IconClassName: string;
			/** Hiện vị trí của tài liệu đề xuất. */
			readonly Location: string;
			/** Cho biết người cập nhật bản ghi sau cùng. */
			readonly ModifiedBy: string;
			/** Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác. */
			readonly ModifiedOnBehalfBy: string;
			/** Hiển thị tổ chức. */
			readonly OrganizationId: string;
			/** Hiện URL Đọc của tài liệu đề xuất. */
			readonly ReadUrl: string;
			/** Hiện bản ghi tài liệu đề xuất. */
			readonly RecommendedDocumentId: string;
			/** Hiện dung lượng lưu trữ nguồn của tài liệu đề xuất. */
			readonly Source: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Nhập tiêu đề cho thực thể. */
			readonly Title: string;
			/** Hiển thị tỷ giá của loại tiền được liên kết với tài liệu đề xuất theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Hiển thị mã múi giờ đã dùng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Hiện phiên bản tài liệu đề xuất. */
			readonly Version: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RecommendedDocument {
		enum RegardingObjectTypeCode {
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
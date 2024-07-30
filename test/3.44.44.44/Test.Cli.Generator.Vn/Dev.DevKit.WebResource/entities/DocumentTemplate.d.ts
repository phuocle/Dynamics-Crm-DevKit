//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formthong_tin {
		interface tab_general_Sections {
			Details: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Mã Loại Thực thể được Liên kết. */
			AssociatedEntityTypeCode: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng đã tạo mẫu tài liệu. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo mẫu tài liệu. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Thông tin bổ sung để mô tả mẫu tài liệu */
			Description: DevKit.Controls.String;
			/** Bộ tùy chọn để chọn loại mẫu tài liệu */
			DocumentType: DevKit.Controls.OptionSet;
			/** Ngôn ngữ của Mẫu Tài liệu. */
			LanguageCode: DevKit.Controls.Integer;
			/** Mã định danh duy nhất của người dùng đã sửa mẫu tài liệu lần cuối. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi mẫu tài liệu lần cuối. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Tên mẫu tài liệu. */
			Name: DevKit.Controls.String;
			/** Thông tin về trạng thái hiện hoạt của mẫu tài liệu. */
			Status: DevKit.Controls.Boolean;
		}
		interface Navigation {

		}
	}
	class Formthong_tin extends DevKit.IForm {
		/**
		* thông tin [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form thong_tin */
		Body: DevKit.Formthong_tin.Body;
		/** The Navigation of form thong_tin */
		Navigation: DevKit.Formthong_tin.Navigation;
		/** The SidePanes of form thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class DocumentTemplateApi {
		/**
		* DynamicsCrm.DevKit DocumentTemplateApi
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
		/** Dữ liệu máy khách về mẫu tài liệu này. */
		ClientData: string;
		/** Số byte của mẫu tài liệu. */
		Content: string;
		/** Mã định danh duy nhất của người dùng đã tạo mẫu tài liệu. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo mẫu tài liệu. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo mẫu tài liệu. */
		readonly CreatedOnBehalfBy: string;
		/** Thông tin bổ sung để mô tả mẫu tài liệu */
		Description: string;
		/** Mã định danh duy nhất của mẫu tài liệu. */
		DocumentTemplateId: string;
		/** Bộ tùy chọn để chọn loại mẫu tài liệu */
		DocumentType: OptionSet.DocumentTemplate.DocumentType;
		/** Ngôn ngữ của Mẫu Tài liệu. */
		LanguageCode: number;
		/** Mã định danh duy nhất của người dùng đã sửa mẫu tài liệu lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi mẫu tài liệu lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi mẫu tài liệu. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên mẫu tài liệu. */
		Name: string;
		/** Mã định danh duy nhất của tổ chức liên kết với tài nguyên web. */
		readonly OrganizationId: string;
		/** Thông tin về trạng thái hiện hoạt của mẫu tài liệu. */
		Status: boolean;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Dữ liệu máy khách về mẫu tài liệu này. */
			readonly ClientData: string;
			/** Số byte của mẫu tài liệu. */
			readonly Content: string;
			/** Mã định danh duy nhất của người dùng đã tạo mẫu tài liệu. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo mẫu tài liệu. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo mẫu tài liệu. */
			readonly CreatedOnBehalfBy: string;
			/** Thông tin bổ sung để mô tả mẫu tài liệu */
			readonly Description: string;
			/** Mã định danh duy nhất của mẫu tài liệu. */
			readonly DocumentTemplateId: string;
			/** Bộ tùy chọn để chọn loại mẫu tài liệu */
			readonly DocumentType: string;
			/** Ngôn ngữ của Mẫu Tài liệu. */
			readonly LanguageCode: string;
			/** Mã định danh duy nhất của người dùng đã sửa mẫu tài liệu lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi mẫu tài liệu lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi mẫu tài liệu. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên mẫu tài liệu. */
			readonly Name: string;
			/** Mã định danh duy nhất của tổ chức liên kết với tài nguyên web. */
			readonly OrganizationId: string;
			/** Thông tin về trạng thái hiện hoạt của mẫu tài liệu. */
			readonly Status: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DocumentTemplate {
		enum AssociatedEntityTypeCode {
		}
		enum DocumentType {
			/** 1 */
			Microsoft_Excel,
			/** 2 */
			Microsoft_Word
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
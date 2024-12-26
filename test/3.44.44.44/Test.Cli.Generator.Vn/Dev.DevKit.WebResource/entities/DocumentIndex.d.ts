//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			document_index: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Chỉ sử dụng nội bộ. */
			Number: DevKit.Controls.String;
			/** Nhập tiêu đề của bài viết trong cơ sở kiến thức ở cấp độ cha. Dữ liệu này được cập nhật trong chỉ mục tìm kiếm mỗi lần phát hành bài viết. */
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
	class DocumentIndexApi {
		/**
		* DynamicsCrm.DevKit DocumentIndexApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bài biết được lập chỉ mục. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bài viết được lập chỉ mục. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo documentindex. */
		readonly CreatedOnBehalfBy: string;
		/** Chọn bài biết ở cấp độ cha cho mục chỉ mục tài liệu. ID liên kết chỉ mục với thông tin bài viết chẳng hạn như số, tiêu đề và từ khóa của bài viết. */
		DocumentId: string;
		/** Mã định danh duy nhất của bài viết được lập chỉ mục. */
		DocumentIndexId: string;
		/** Chỉ sử dụng nội bộ. */
		DocumentTypeCode: OptionSet.DocumentIndex.DocumentTypeCode;
		/** Cho biết phiên bản nào của bài viết trong cơ sở kiến thức là phiên bản mới nhất. */
		IsLatestVersion: boolean;
		/** Cho biết bài viết trong cơ sở kiến thức ở cấp độ cha có hay không được phát hành trong Microsoft Dynamics 365 để từ khóa và nội dung bài viết được bổ sung vào chỉ mục tìm kiếm. */
		IsPublished: boolean;
		/** Nhập từ khóa cho bài viết. Từ khóa được cập nhật trong chỉ mục tìm kiếm mỗi lần phát hành bài viết. */
		KeyWords: string;
		/** Chỉ sử dụng trong hệ thống. */
		Location: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bài viết được lập chỉ mục lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bài viết được lập chỉ mục lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi documentindex lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Chỉ sử dụng nội bộ. */
		Number: string;
		/** Chọn ID của tổ chức có bản ghi được liên kết. */
		readonly OrganizationId: string;
		/** Chỉ sử dụng nội bộ. */
		SearchText: string;
		/** Cho biết bản ghi chủ đề được chọn trong bài viết ở cấp độ cha của cơ sở kiến thức. ID được cập nhật trong chỉ mục tìm kiếm mỗi lần phát hành bài viết. */
		SubjectId: string;
		/** Nhập tiêu đề của bài viết trong cơ sở kiến thức ở cấp độ cha. Dữ liệu này được cập nhật trong chỉ mục tìm kiếm mỗi lần phát hành bài viết. */
		Title: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bài biết được lập chỉ mục. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bài viết được lập chỉ mục. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo documentindex. */
			readonly CreatedOnBehalfBy: string;
			/** Chọn bài biết ở cấp độ cha cho mục chỉ mục tài liệu. ID liên kết chỉ mục với thông tin bài viết chẳng hạn như số, tiêu đề và từ khóa của bài viết. */
			readonly DocumentId: string;
			/** Mã định danh duy nhất của bài viết được lập chỉ mục. */
			readonly DocumentIndexId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly DocumentTypeCode: string;
			/** Cho biết phiên bản nào của bài viết trong cơ sở kiến thức là phiên bản mới nhất. */
			readonly IsLatestVersion: string;
			/** Cho biết bài viết trong cơ sở kiến thức ở cấp độ cha có hay không được phát hành trong Microsoft Dynamics 365 để từ khóa và nội dung bài viết được bổ sung vào chỉ mục tìm kiếm. */
			readonly IsPublished: string;
			/** Nhập từ khóa cho bài viết. Từ khóa được cập nhật trong chỉ mục tìm kiếm mỗi lần phát hành bài viết. */
			readonly KeyWords: string;
			/** Chỉ sử dụng trong hệ thống. */
			readonly Location: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bài viết được lập chỉ mục lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bài viết được lập chỉ mục lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi documentindex lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Chỉ sử dụng nội bộ. */
			readonly Number: string;
			/** Chọn ID của tổ chức có bản ghi được liên kết. */
			readonly OrganizationId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SearchText: string;
			/** Cho biết bản ghi chủ đề được chọn trong bài viết ở cấp độ cha của cơ sở kiến thức. ID được cập nhật trong chỉ mục tìm kiếm mỗi lần phát hành bài viết. */
			readonly SubjectId: string;
			/** Nhập tiêu đề của bài viết trong cơ sở kiến thức ở cấp độ cha. Dữ liệu này được cập nhật trong chỉ mục tìm kiếm mỗi lần phát hành bài viết. */
			readonly Title: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DocumentIndex {
		enum DocumentTypeCode {
			/** 1 */
			Gia_tri_mac_dinh
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
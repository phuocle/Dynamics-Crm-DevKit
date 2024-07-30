//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			Categorization: DevKit.Controls.Section;
			Details: DevKit.Controls.Section;
			Language: DevKit.Controls.Section;
			Ownership: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Mô tả về mẫu trộn thư. */
			Description: DevKit.Controls.String;
			/** Thông tin về việc mẫu trộn thư ở chế độ cá nhân hay có sẵn cho tất cả người dùng. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Ngôn ngữ của mẫu trộn thư. */
			LanguageCode: DevKit.Controls.Integer;
			/** Tên của mẫu trộn thư. */
			Name: DevKit.Controls.String;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu mẫu trộn thư. */
			OwnerId: DevKit.Controls.Lookup;
			/** Loại mẫu trộn thư. */
			TemplateTypeCode: DevKit.Controls.String;
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
	class MailMergeTemplateApi {
		/**
		* DynamicsCrm.DevKit MailMergeTemplateApi
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
		/** Nội dung của mẫu trộn thư. */
		Body: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.MailMergeTemplate.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo mẫu trộn thư. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo mẫu trộn thư. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo mailmergetemplate. */
		readonly CreatedOnBehalfBy: string;
		/** Trường dữ liệu mặc định được liên kết với mẫu trộn thư. */
		DefaultFilter: string;
		/** Mô tả về mẫu trộn thư. */
		Description: string;
		/** Phiên bản của định dạng Microsoft Office Word XML mà mẫu sử dụng. */
		DocumentFormat: OptionSet.MailMergeTemplate.DocumentFormat;
		/** Tỷ giá của loại tiền liên kết với mailmergetemplate theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Tên tệp của mẫu trộn thư. */
		FileName: string;
		/** Kích thước tệp của mẫu trộn thư. */
		readonly FileSize: number;
		/** Phiên bản có biểu mẫu được giới thiệu. */
		IntroducedVersion: string;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
		readonly IsManaged: boolean;
		/** Thông tin về việc mẫu trộn thư ở chế độ cá nhân hay có sẵn cho tất cả người dùng. */
		IsPersonal: boolean;
		/** Ngôn ngữ của mẫu trộn thư. */
		LanguageCode: number;
		/** Mã định danh duy nhất của mẫu trộn thư. */
		MailMergeTemplateId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly MailMergeTemplateIdUnique: string;
		/** Danh sách thả xuống để chọn loại trộn thư. */
		MailMergeType: OptionSet.MailMergeTemplate.MailMergeType;
		/** Loại MIME của mẫu trộn thư. */
		MimeType: string;
		/** Mã định danh duy nhất của người dùng đã sửa đổi mẫu trộn thư lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi mẫu trộn thư lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi mailmergetemplate lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của mẫu trộn thư. */
		Name: string;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu mẫu trộn thư. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu mẫu trộn thư. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu mẫu trộn thư. */
		readonly OwningUser: string;
		/** Tham số Xml. */
		readonly ParameterXml: string;
		/** Mã định danh duy nhất của giải pháp được liên kết. */
		readonly SolutionId: string;
		/** Trạng thái của mẫu trộn thư. */
		StateCode: OptionSet.MailMergeTemplate.StateCode;
		/** Lý do dẫn đến trạng thái của mẫu trộn thư. */
		StatusCode: OptionSet.MailMergeTemplate.StatusCode;
		/** Chỉ sử dụng nội bộ. */
		readonly SupportingSolutionId: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với mailmergetemplate. */
		TransactionCurrencyId: string;
		/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
		UTCConversionTimeZoneCode: number;
		/** Số phiên bản của mẫu trộn thư. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Nội dung của mẫu trộn thư. */
			readonly Body: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo mẫu trộn thư. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo mẫu trộn thư. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo mailmergetemplate. */
			readonly CreatedOnBehalfBy: string;
			/** Trường dữ liệu mặc định được liên kết với mẫu trộn thư. */
			readonly DefaultFilter: string;
			/** Mô tả về mẫu trộn thư. */
			readonly Description: string;
			/** Phiên bản của định dạng Microsoft Office Word XML mà mẫu sử dụng. */
			readonly DocumentFormat: string;
			/** Tỷ giá của loại tiền liên kết với mailmergetemplate theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Tên tệp của mẫu trộn thư. */
			readonly FileName: string;
			/** Kích thước tệp của mẫu trộn thư. */
			readonly FileSize: string;
			/** Phiên bản có biểu mẫu được giới thiệu. */
			readonly IntroducedVersion: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không. */
			readonly IsManaged: string;
			/** Thông tin về việc mẫu trộn thư ở chế độ cá nhân hay có sẵn cho tất cả người dùng. */
			readonly IsPersonal: string;
			/** Ngôn ngữ của mẫu trộn thư. */
			readonly LanguageCode: string;
			/** Mã định danh duy nhất của mẫu trộn thư. */
			readonly MailMergeTemplateId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly MailMergeTemplateIdUnique: string;
			/** Danh sách thả xuống để chọn loại trộn thư. */
			readonly MailMergeType: string;
			/** Loại MIME của mẫu trộn thư. */
			readonly MimeType: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi mẫu trộn thư lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi mẫu trộn thư lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi mailmergetemplate lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của mẫu trộn thư. */
			readonly Name: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu mẫu trộn thư. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu mẫu trộn thư. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu mẫu trộn thư. */
			readonly OwningUser: string;
			/** Tham số Xml. */
			readonly ParameterXml: string;
			/** Mã định danh duy nhất của giải pháp được liên kết. */
			readonly SolutionId: string;
			/** Trạng thái của mẫu trộn thư. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của mẫu trộn thư. */
			readonly StatusCode: string;
			/** Chỉ sử dụng nội bộ. */
			readonly SupportingSolutionId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với mailmergetemplate. */
			readonly TransactionCurrencyId: string;
			/** Mã múi giờ đã được sử dụng khi tạo bản ghi. */
			readonly UTCConversionTimeZoneCode: string;
			/** Số phiên bản của mẫu trộn thư. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailMergeTemplate {
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
		enum DocumentFormat {
			/** 1 */
			_2003,
			/** 2 */
			_2007
		}
		enum MailMergeType {
			/** 5 */
			Bao_gia,
			/** 2 */
			Email,
			/** 6 */
			Fax,
			/** 4 */
			Nhan,
			/** 3 */
			Phong_bi,
			/** 1 */
			Thu_tin
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
		enum TemplateTypeCode {
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
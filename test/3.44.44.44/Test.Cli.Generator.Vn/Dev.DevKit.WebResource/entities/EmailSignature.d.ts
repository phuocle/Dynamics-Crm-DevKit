//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEmail_signature {
		interface Header extends DevKit.Controls.IHeader {
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu chữ ký email cho hoạt động email. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_general_Sections {
			Details: DevKit.Controls.Section;
			Details_UCI: DevKit.Controls.Section;
			Signature_Editor: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Thông tin chỉ định chữ ký email có là mặc định với người dùng hay không. */
			IsDefault: DevKit.Controls.Boolean;
			/** Ngôn ngữ của chữ ký email. */
			LanguageCode: DevKit.Controls.Integer;
			/** Ngôn ngữ của chữ ký email. */
			LanguageCode1: DevKit.Controls.Integer;
			/** Mã định danh duy nhất của người dùng hoặc nhóm sở hữu chữ ký email cho hoạt động email. */
			OwnerId: DevKit.Controls.Lookup;
			/** Html an toàn của chữ ký email. */
			SafeHtml: DevKit.Controls.String;
			/** Tiêu đề của chữ ký email. */
			Title: DevKit.Controls.String;
			/** Tiêu đề của chữ ký email. */
			Title1: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormEmail_signature extends DevKit.IForm {
		/**
		* Email signature [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Email_signature */
		Body: DevKit.FormEmail_signature.Body;
		/** The Header section of form Email_signature */
		Header: DevKit.FormEmail_signature.Header;
		/** The Navigation of form Email_signature */
		Navigation: DevKit.FormEmail_signature.Navigation;
		/** The SidePanes of form Email_signature */
		SidePanes: DevKit.SidePanes;
	}
	class EmailSignatureApi {
		/**
		* DynamicsCrm.DevKit EmailSignatureApi
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
		/** Văn bản nội dung của chữ ký email. */
		Body: string;
		/** Chỉ sử dụng nội bộ. */
		readonly ComponentState: OptionSet.EmailSignature.ComponentState;
		/** Mã định danh duy nhất của người dùng đã tạo chữ ký email. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo chữ ký email. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo chữ ký email. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả chữ ký email. */
		Description: string;
		/** Mã định danh duy nhất của chữ ký email. */
		EmailSignatureId: string;
		/** Chỉ sử dụng nội bộ. */
		GenerationTypeCode: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
		IsCustomizable: string;
		/** Thông tin chỉ định chữ ký email có là mặc định với người dùng hay không. */
		IsDefault: boolean;
		/** Thông tin cho biết chữ ký email là mang tính cá nhân hay có sẵn cho tất cả người dùng. */
		IsPersonal: boolean;
		/** Ngôn ngữ của chữ ký email. */
		LanguageCode: number;
		/** Loại MIME của chữ ký email. */
		MimeType: string;
		/** Mã định danh duy nhất của người dùng đã sửa đổi chữ ký email lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi chữ ký email lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi chữ ký email lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Ngày và giờ di chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chỉ sử dụng nội bộ. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu chữ ký email. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu chữ ký email. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu chữ ký email. */
		readonly OwningUser: string;
		/** Dữ liệu XML cho nội dung của chữ ký email. */
		PresentationXml: string;
		/** Html an toàn của chữ ký email. */
		SafeHtml: string;
		/** Tiêu đề của chữ ký email. */
		Title: string;
		readonly FormattedValue: {
			/** Văn bản nội dung của chữ ký email. */
			readonly Body: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ComponentState: string;
			/** Mã định danh duy nhất của người dùng đã tạo chữ ký email. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo chữ ký email. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo chữ ký email. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả chữ ký email. */
			readonly Description: string;
			/** Mã định danh duy nhất của chữ ký email. */
			readonly EmailSignatureId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly GenerationTypeCode: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Thông tin cho biết liệu có thể tùy chỉnh thành phần này hay không. */
			readonly IsCustomizable: string;
			/** Thông tin chỉ định chữ ký email có là mặc định với người dùng hay không. */
			readonly IsDefault: string;
			/** Thông tin cho biết chữ ký email là mang tính cá nhân hay có sẵn cho tất cả người dùng. */
			readonly IsPersonal: string;
			/** Ngôn ngữ của chữ ký email. */
			readonly LanguageCode: string;
			/** Loại MIME của chữ ký email. */
			readonly MimeType: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi chữ ký email lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi chữ ký email lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi chữ ký email lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Ngày và giờ di chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chỉ sử dụng nội bộ. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu chữ ký email. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu chữ ký email. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu chữ ký email. */
			readonly OwningUser: string;
			/** Dữ liệu XML cho nội dung của chữ ký email. */
			readonly PresentationXml: string;
			/** Html an toàn của chữ ký email. */
			readonly SafeHtml: string;
			/** Tiêu đề của chữ ký email. */
			readonly Title: string;
		}
	}
}
declare namespace OptionSet {
	namespace EmailSignature {
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
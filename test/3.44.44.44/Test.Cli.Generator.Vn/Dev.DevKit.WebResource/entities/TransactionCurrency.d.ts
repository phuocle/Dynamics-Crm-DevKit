//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTransactionCurrency_Information {
		interface tab_general_Sections {
			Currency_conversion: DevKit.Controls.Section;
			Select_Base_Currency: DevKit.Controls.Section;
			Transaction_currency_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Tên của loại tiền giao dịch. */
			CurrencyName: DevKit.Controls.String;
			/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền. */
			CurrencyPrecision: DevKit.Controls.Integer;
			/** Ký hiệu dùng cho loại tiền giao dịch. */
			CurrencySymbol: DevKit.Controls.String;
			/** Tỷ giá giữa loại tiền giao dịch và loại tiền gốc. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Mã loại tiền ISO cho loại tiền giao dịch. */
			ISOCurrencyCode: DevKit.Controls.String;
			systemcurrency: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			adx_inviteredemption_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			adx_portalcomment_transactioncurrency_transactioncurrencyid: DevKit.Controls.NavigationItem,
			basecurrency_organization: DevKit.Controls.NavigationItem,
			transactioncurrency_account: DevKit.Controls.NavigationItem,
			TransactionCurrency_ActionCardUserState: DevKit.Controls.NavigationItem,
			transactioncurrency_annualfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_Appointment: DevKit.Controls.NavigationItem,
			TransactionCurrency_BusinessUnit: DevKit.Controls.NavigationItem,
			transactioncurrency_cardtype: DevKit.Controls.NavigationItem,
			transactioncurrency_category: DevKit.Controls.NavigationItem,
			TransactionCurrency_ChannelAccessProfile: DevKit.Controls.NavigationItem,
			transactioncurrency_contact: DevKit.Controls.NavigationItem,
			TransactionCurrency_ConvertRule: DevKit.Controls.NavigationItem,
			transactioncurrency_convertruleitem: DevKit.Controls.NavigationItem,
			TransactionCurrency_delveactionhub: DevKit.Controls.NavigationItem,
			TransactionCurrency_Email: DevKit.Controls.NavigationItem,
			transactioncurrency_expiredprocess: DevKit.Controls.NavigationItem,
			TransactionCurrency_ExternalParty: DevKit.Controls.NavigationItem,
			TransactionCurrency_externalpartyitem: DevKit.Controls.NavigationItem,
			transactioncurrency_feedback: DevKit.Controls.NavigationItem,
			transactioncurrency_fixedmonthlyfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_Goal: DevKit.Controls.NavigationItem,
			TransactionCurrency_InteractionForEmail: DevKit.Controls.NavigationItem,
			TransactionCurrency_KbArticle: DevKit.Controls.NavigationItem,
			TransactionCurrency_knowledgearticle: DevKit.Controls.NavigationItem,
			transactioncurrency_knowledgearticleviews: DevKit.Controls.NavigationItem,
			TransactionCurrency_KnowledgeBaseRecord: DevKit.Controls.NavigationItem,
			TransactionCurrency_MailMergeTemplate: DevKit.Controls.NavigationItem,
			transactioncurrency_monthlyfiscalcalendar: DevKit.Controls.NavigationItem,
			transactioncurrency_newprocess: DevKit.Controls.NavigationItem,
			TransactionCurrency_officegraphdocument: DevKit.Controls.NavigationItem,
			TransactionCurrency_PhoneCall: DevKit.Controls.NavigationItem,
			transactioncurrency_position: DevKit.Controls.NavigationItem,
			TransactionCurrency_profilerule: DevKit.Controls.NavigationItem,
			TransactionCurrency_profileruleitem: DevKit.Controls.NavigationItem,
			transactioncurrency_quarterlyfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_Queue: DevKit.Controls.NavigationItem,
			TransactionCurrency_QueueItem: DevKit.Controls.NavigationItem,
			TransactionCurrency_recommendeddocument: DevKit.Controls.NavigationItem,
			TransactionCurrency_ReportCategory: DevKit.Controls.NavigationItem,
			TransactionCurrency_Routingrule: DevKit.Controls.NavigationItem,
			TransactionCurrency_routingruleitem: DevKit.Controls.NavigationItem,
			transactioncurrency_semiannualfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_SharePointSite: DevKit.Controls.NavigationItem,
			TransactionCurrency_SimilarityRule: DevKit.Controls.NavigationItem,
			TransactionCurrency_SLA: DevKit.Controls.NavigationItem,
			TransactionCurrency_SLAItem: DevKit.Controls.NavigationItem,
			TransactionCurrency_suggestioncardtemplate: DevKit.Controls.NavigationItem,
			TransactionCurrency_SystemUser: DevKit.Controls.NavigationItem,
			TransactionCurrency_Task: DevKit.Controls.NavigationItem,
			TransactionCurrency_Team: DevKit.Controls.NavigationItem,
			TransactionCurrency_Territory: DevKit.Controls.NavigationItem,
			TransactionCurrency_Theme: DevKit.Controls.NavigationItem,
			transactioncurrency_translationprocess: DevKit.Controls.NavigationItem,
			TransactionCurrency_UntrackedEmail: DevKit.Controls.NavigationItem,
			transactioncurrency_userfiscalcalendar: DevKit.Controls.NavigationItem,
			TransactionCurrency_UserMapping: DevKit.Controls.NavigationItem,
			transactioncurrency_usersettings: DevKit.Controls.NavigationItem
		}
	}
	class FormTransactionCurrency_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TransactionCurrency_Information */
		Body: DevKit.FormTransactionCurrency_Information.Body;
		/** The Navigation of form TransactionCurrency_Information */
		Navigation: DevKit.FormTransactionCurrency_Information.Navigation;
		/** The SidePanes of form TransactionCurrency_Information */
		SidePanes: DevKit.SidePanes;
	}
	class TransactionCurrencyApi {
		/**
		* DynamicsCrm.DevKit TransactionCurrencyApi
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
		/** Mã định danh duy nhất của người dùng đã tạo loại tiền giao dịch. */
		readonly CreatedBy: string;
		/** Ngày giờ tạo loại tiền giao dịch. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo transactioncurrency. */
		readonly CreatedOnBehalfBy: string;
		/** Tên của loại tiền giao dịch. */
		CurrencyName: string;
		/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền. */
		CurrencyPrecision: number;
		/** Ký hiệu dùng cho loại tiền giao dịch. */
		CurrencySymbol: string;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** Chỉ sử dụng nội bộ. */
		readonly EntityImageId: string;
		/** Tỷ giá giữa loại tiền giao dịch và loại tiền gốc. */
		ExchangeRate: number;
		/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
		ImportSequenceNumber: number;
		/** Mã loại tiền ISO cho loại tiền giao dịch. */
		ISOCurrencyCode: string;
		/** Mã định danh duy nhất của người dùng sửa đổi loại tiền giao dịch lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày giờ sửa đổi loại tiền giao dịch lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi transactioncurrency lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất của tổ chức liên kết với loại tiền giao dịch. */
		readonly OrganizationId: string;
		/** Ngày và giờ dịch chuyển bản ghi. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Trang thái của loại tiền giao dịch. */
		StateCode: OptionSet.TransactionCurrency.StateCode;
		/** Lý do dẫn đến trạng thái của loại tiền giao dịch. */
		StatusCode: OptionSet.TransactionCurrency.StatusCode;
		/** Mã định danh duy nhất của loại tiền giao dịch. */
		TransactionCurrencyId: string;
		/** Chỉ sử dụng nội bộ. */
		readonly UniqueDscId: string;
		/** Số phiên bản của loại tiền giao dịch. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo loại tiền giao dịch. */
			readonly CreatedBy: string;
			/** Ngày giờ tạo loại tiền giao dịch. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo transactioncurrency. */
			readonly CreatedOnBehalfBy: string;
			/** Tên của loại tiền giao dịch. */
			readonly CurrencyName: string;
			/** Số chữ số sau dấu thập phân có thể dùng cho loại tiền. */
			readonly CurrencyPrecision: string;
			/** Ký hiệu dùng cho loại tiền giao dịch. */
			readonly CurrencySymbol: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** Chỉ sử dụng nội bộ. */
			readonly EntityImageId: string;
			/** Tỷ giá giữa loại tiền giao dịch và loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này. */
			readonly ImportSequenceNumber: string;
			/** Mã loại tiền ISO cho loại tiền giao dịch. */
			readonly ISOCurrencyCode: string;
			/** Mã định danh duy nhất của người dùng sửa đổi loại tiền giao dịch lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày giờ sửa đổi loại tiền giao dịch lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi transactioncurrency lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất của tổ chức liên kết với loại tiền giao dịch. */
			readonly OrganizationId: string;
			/** Ngày và giờ dịch chuyển bản ghi. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Trang thái của loại tiền giao dịch. */
			readonly StateCode: string;
			/** Lý do dẫn đến trạng thái của loại tiền giao dịch. */
			readonly StatusCode: string;
			/** Mã định danh duy nhất của loại tiền giao dịch. */
			readonly TransactionCurrencyId: string;
			/** Chỉ sử dụng nội bộ. */
			readonly UniqueDscId: string;
			/** Số phiên bản của loại tiền giao dịch. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TransactionCurrency {
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
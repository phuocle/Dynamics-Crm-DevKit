//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBai_viet_trong_Co_so_kien_thuc {
		interface Header extends DevKit.Controls.IHeader {
			/** Cho biết ID duy nhất của bài viết trong cơ sở kiến thức (KB) được liên kết. */
			UniqueId: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Cho biết URL Parature Service Desk nội bộ của bản ghi cơ sở kiến thức. */
			PrivateUrl: DevKit.Controls.String;
			/** Cho biết URL cổng Parature công khai của bản ghi cơ sở kiến thức. */
			PublicUrl: DevKit.Controls.String;
			/** Cho biết tiêu đề của bản ghi cơ sở kiến thức (KB). */
			Title: DevKit.Controls.String;
			/** Cho biết ID duy nhất của bài viết trong cơ sở kiến thức (KB) được liên kết. */
			UniqueId: DevKit.Controls.String;
		}
		interface Navigation {
			knowledgebaserecord_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			knowledgebaserecord_adx_portalcomments: DevKit.Controls.NavigationItem,
			KnowledgeBaseRecord_Appointments: DevKit.Controls.NavigationItem,
			KnowledgeBaseRecord_Emails: DevKit.Controls.NavigationItem,
			KnowledgeBaseRecord_PhoneCalls: DevKit.Controls.NavigationItem,
			KnowledgeBaseRecord_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormBai_viet_trong_Co_so_kien_thuc extends DevKit.IForm {
		/**
		* Bài viết trong Cơ sở kiến thức [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Bai_viet_trong_Co_so_kien_thuc */
		Body: DevKit.FormBai_viet_trong_Co_so_kien_thuc.Body;
		/** The Header section of form Bai_viet_trong_Co_so_kien_thuc */
		Header: DevKit.FormBai_viet_trong_Co_so_kien_thuc.Header;
		/** The Navigation of form Bai_viet_trong_Co_so_kien_thuc */
		Navigation: DevKit.FormBai_viet_trong_Co_so_kien_thuc.Navigation;
		/** The SidePanes of form Bai_viet_trong_Co_so_kien_thuc */
		SidePanes: DevKit.SidePanes;
	}
	class KnowledgeBaseRecordApi {
		/**
		* DynamicsCrm.DevKit KnowledgeBaseRecordApi
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
		/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo bản ghi. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
		readonly CreatedOnBehalfBy: string;
		/** Tỷ giá của loại tiền được liên kết với bản ghi cơ sở kiến thức theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Trường này sẽ được dùng để lưu trữ ID Duy nhất của bản ghi Cơ sở Kiến thức được liên kết */
		KnowledgeBaseRecordId: string;
		/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi bản ghi. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
		readonly ModifiedOnBehalfBy: string;
		/** Mã định danh duy nhất cho tổ chức */
		readonly OrganizationId: string;
		/** Cho biết URL Parature Service Desk nội bộ của bản ghi cơ sở kiến thức. */
		PrivateUrl: string;
		/** Cho biết URL cổng Parature công khai của bản ghi cơ sở kiến thức. */
		PublicUrl: string;
		/** Chỉ sử dụng nội bộ. */
		TimeZoneRuleVersionNumber: number;
		/** Cho biết tiêu đề của bản ghi cơ sở kiến thức (KB). */
		Title: string;
		/** Tỷ giá của loại tiền được liên kết với Bản ghi Cơ sở Kiến thức theo loại tiền gốc. */
		TransactionCurrencyId: string;
		/** Cho biết ID duy nhất của bài viết trong cơ sở kiến thức (KB) được liên kết. */
		UniqueId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo bản ghi. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo bản ghi. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi. */
			readonly CreatedOnBehalfBy: string;
			/** Tỷ giá của loại tiền được liên kết với bản ghi cơ sở kiến thức theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Trường này sẽ được dùng để lưu trữ ID Duy nhất của bản ghi Cơ sở Kiến thức được liên kết */
			readonly KnowledgeBaseRecordId: string;
			/** Mã định danh duy nhất của người dùng sửa đổi bản ghi. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi bản ghi. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi. */
			readonly ModifiedOnBehalfBy: string;
			/** Mã định danh duy nhất cho tổ chức */
			readonly OrganizationId: string;
			/** Cho biết URL Parature Service Desk nội bộ của bản ghi cơ sở kiến thức. */
			readonly PrivateUrl: string;
			/** Cho biết URL cổng Parature công khai của bản ghi cơ sở kiến thức. */
			readonly PublicUrl: string;
			/** Chỉ sử dụng nội bộ. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Cho biết tiêu đề của bản ghi cơ sở kiến thức (KB). */
			readonly Title: string;
			/** Tỷ giá của loại tiền được liên kết với Bản ghi Cơ sở Kiến thức theo loại tiền gốc. */
			readonly TransactionCurrencyId: string;
			/** Cho biết ID duy nhất của bài viết trong cơ sở kiến thức (KB) được liên kết. */
			readonly UniqueId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace KnowledgeBaseRecord {
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
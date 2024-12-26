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
			/** Mã định danh duy nhất của người dùng đã tạo mẫu tài liệu cá nhân. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ tạo mẫu tài liệu cá nhân. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Thông tin bổ sung để mô tả mẫu tài liệu cá nhân */
			Description: DevKit.Controls.String;
			/** Bộ tùy chọn để chọn loại mẫu tài liệu cá nhân */
			DocumentType: DevKit.Controls.OptionSet;
			/** Ngôn ngữ của Mẫu Tài liệu Cá nhân. */
			LanguageCode: DevKit.Controls.Integer;
			/** Mã định danh duy nhất của người dùng đã sửa đổi mẫu tài liệu cá nhân lần cuối. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Ngày và giờ sửa đổi mẫu tài liệu cá nhân lần cuối. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Tên của mẫu tài liệu cá nhân. */
			Name: DevKit.Controls.String;
			/** Thông tin về trạng thái hiện hoạt của mẫu tài liệu cá nhân. */
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
	class PersonalDocumentTemplateApi {
		/**
		* DynamicsCrm.DevKit PersonalDocumentTemplateApi
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
		/** Dữ liệu máy khách về mẫu tài liệu cá nhân này. */
		ClientData: string;
		/** Số byte của mẫu tài liệu cá nhân. */
		Content: string;
		/** Mã định danh duy nhất của người dùng đã tạo mẫu tài liệu cá nhân. */
		readonly CreatedBy: string;
		/** Ngày và giờ tạo mẫu tài liệu cá nhân. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo mẫu tài liệu cá nhân. */
		readonly CreatedOnBehalfBy: string;
		/** Thông tin bổ sung để mô tả mẫu tài liệu cá nhân */
		Description: string;
		/** Bộ tùy chọn để chọn loại mẫu tài liệu cá nhân */
		DocumentType: OptionSet.PersonalDocumentTemplate.DocumentType;
		/** Ngôn ngữ của Mẫu Tài liệu Cá nhân. */
		LanguageCode: number;
		/** Mã định danh duy nhất của người dùng đã sửa đổi mẫu tài liệu cá nhân lần cuối. */
		readonly ModifiedBy: string;
		/** Ngày và giờ sửa đổi mẫu tài liệu cá nhân lần cuối. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi mẫu tài liệu cá nhân. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của mẫu tài liệu cá nhân. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu mẫu tài liệu cá nhân. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu mẫu tài liệu cá nhân. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu mẫu tài liệu cá nhân. */
		readonly OwningUser: string;
		/** Mã định danh duy nhất của mẫu tài liệu cá nhân. */
		PersonalDocumentTemplateId: string;
		/** Thông tin về trạng thái hiện hoạt của mẫu tài liệu cá nhân. */
		Status: boolean;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Dữ liệu máy khách về mẫu tài liệu cá nhân này. */
			readonly ClientData: string;
			/** Số byte của mẫu tài liệu cá nhân. */
			readonly Content: string;
			/** Mã định danh duy nhất của người dùng đã tạo mẫu tài liệu cá nhân. */
			readonly CreatedBy: string;
			/** Ngày và giờ tạo mẫu tài liệu cá nhân. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo mẫu tài liệu cá nhân. */
			readonly CreatedOnBehalfBy: string;
			/** Thông tin bổ sung để mô tả mẫu tài liệu cá nhân */
			readonly Description: string;
			/** Bộ tùy chọn để chọn loại mẫu tài liệu cá nhân */
			readonly DocumentType: string;
			/** Ngôn ngữ của Mẫu Tài liệu Cá nhân. */
			readonly LanguageCode: string;
			/** Mã định danh duy nhất của người dùng đã sửa đổi mẫu tài liệu cá nhân lần cuối. */
			readonly ModifiedBy: string;
			/** Ngày và giờ sửa đổi mẫu tài liệu cá nhân lần cuối. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa đổi mẫu tài liệu cá nhân. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của mẫu tài liệu cá nhân. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu mẫu tài liệu cá nhân. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu mẫu tài liệu cá nhân. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu mẫu tài liệu cá nhân. */
			readonly OwningUser: string;
			/** Mã định danh duy nhất của mẫu tài liệu cá nhân. */
			readonly PersonalDocumentTemplateId: string;
			/** Thông tin về trạng thái hiện hoạt của mẫu tài liệu cá nhân. */
			readonly Status: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PersonalDocumentTemplate {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormThong_tin {
		interface tab_general_Sections {
			description: DevKit.Controls.Section;
			territory_information: DevKit.Controls.Section;
		}
		interface tab_subterritories_tab_Sections {
			territory_tab1_section_1: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_subterritories_tab extends DevKit.Controls.ITab {
			Section: tab_subterritories_tab_Sections;
		}
		interface Tabs {
			general: tab_general;
			subterritories_tab: tab_subterritories_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Mô tả vùng lãnh thổ. */
			Description: DevKit.Controls.String;
			/** Mã định danh duy nhất của người quản lý của vùng lãnh thổ. */
			ManagerId: DevKit.Controls.Lookup;
			/** Tên của vùng lãnh thổ. */
			Name: DevKit.Controls.String;
			/** Chọn cấp bậc mẹ cho vùng lãnh thổ này. */
			ParentTerritoryId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			territory_parent_territory: DevKit.Controls.NavigationItem,
			territory_system_users: DevKit.Controls.NavigationItem
		}
		interface Grid {
			territories_subgrid: DevKit.Controls.Grid;
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
		/** The Grid of form Thong_tin */
		Grid: DevKit.FormThong_tin.Grid;
		/** The SidePanes of form Thong_tin */
		SidePanes: DevKit.SidePanes;
	}
	class TerritoryApi {
		/**
		* DynamicsCrm.DevKit TerritoryApi
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
		/** Mã định danh duy nhất của người dùng đã tạo vùng lãnh thổ. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã tạo vùng lãnh thổ. */
		readonly CreatedOnBehalfBy: string;
		/** Mô tả vùng lãnh thổ. */
		Description: string;
		/** Hình ảnh mặc định cho thực thể. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Tỷ giá của loại tiền liên kết với vùng lãnh thổ theo loại tiền gốc. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Mã định danh duy nhất của người quản lý của vùng lãnh thổ. */
		ManagerId: string;
		/** Mã định danh duy nhất của người dùng sửa đổi vùng lãnh thổ lần cuối. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của người dùng đại diện đã sửa vùng lãnh thổ lần cuối. */
		readonly ModifiedOnBehalfBy: string;
		/** Tên của vùng lãnh thổ. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Chọn cấp bậc mẹ cho vùng lãnh thổ này. */
		ParentTerritoryId: string;
		/** Mã định danh duy nhất của vùng lãnh thổ. */
		TerritoryId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Mã định danh duy nhất của loại tiền liên kết với vùng lãnh thổ. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của người dùng đã tạo vùng lãnh thổ. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã tạo vùng lãnh thổ. */
			readonly CreatedOnBehalfBy: string;
			/** Mô tả vùng lãnh thổ. */
			readonly Description: string;
			/** Hình ảnh mặc định cho thực thể. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Tỷ giá của loại tiền liên kết với vùng lãnh thổ theo loại tiền gốc. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Mã định danh duy nhất của người quản lý của vùng lãnh thổ. */
			readonly ManagerId: string;
			/** Mã định danh duy nhất của người dùng sửa đổi vùng lãnh thổ lần cuối. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của người dùng đại diện đã sửa vùng lãnh thổ lần cuối. */
			readonly ModifiedOnBehalfBy: string;
			/** Tên của vùng lãnh thổ. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Chọn cấp bậc mẹ cho vùng lãnh thổ này. */
			readonly ParentTerritoryId: string;
			/** Mã định danh duy nhất của vùng lãnh thổ. */
			readonly TerritoryId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Mã định danh duy nhất của loại tiền liên kết với vùng lãnh thổ. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Territory {
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
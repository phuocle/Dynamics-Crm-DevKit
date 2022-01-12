//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSalesLiterature_Information {
		interface tab_general_Sections {
			description: DevKit.Controls.Section;
			sales_literature_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the sales literature, such as the intended audience or primary messages. */
			Description: DevKit.Controls.String;
			/** Choose the user who is responsible for maintaining or updating the sales literature. */
			EmployeeContactId: DevKit.Controls.Lookup;
			/** Enter the expiration date or last day the sales literature can be distributed. */
			ExpirationDate: DevKit.Controls.Date;
			/** Select a category or type to help others identify the intended use of the sales literature. */
			LiteratureTypeCode: DevKit.Controls.OptionSet;
			/** Type a descriptive title for the sales literature. */
			Name: DevKit.Controls.String;
			/** Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
		}
	}
	class FormSalesLiterature_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SalesLiterature_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SalesLiterature_Information */
		Body: DevKit.FormSalesLiterature_Information.Body;
		/** The SidePanes of form SalesLiterature_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSales_Literature {
		interface Header extends DevKit.Controls.IHeader {
			/** Choose the user who is responsible for maintaining or updating the sales literature. */
			EmployeeContactId: DevKit.Controls.Lookup;
			/** Enter the expiration date or last day the sales literature can be distributed. */
			ExpirationDate: DevKit.Controls.Date;
		}
		interface tab_general_information_Sections {
			related: DevKit.Controls.Section;
			sales_literature_information: DevKit.Controls.Section;
			sales_attachments: DevKit.Controls.Section;
		}
		interface tab_general_information extends DevKit.Controls.ITab {
			Section: tab_general_information_Sections;
		}
		interface Tabs {
			general_information: tab_general_information;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the sales literature, such as the intended audience or primary messages. */
			Description: DevKit.Controls.String;
			/** Select a category or type to help others identify the intended use of the sales literature. */
			LiteratureTypeCode: DevKit.Controls.OptionSet;
			/** Type a descriptive title for the sales literature. */
			Name: DevKit.Controls.String;
			/** Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area. */
			SubjectId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navComp: DevKit.Controls.NavigationItem,
			navDoc: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navProducts: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Competitors: DevKit.Controls.Grid;
			Products: DevKit.Controls.Grid;
			SalesAttachments: DevKit.Controls.Grid;
		}
	}
	class FormSales_Literature extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Sales_Literature Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sales_Literature */
		Body: DevKit.FormSales_Literature.Body;
		/** The Header section of form Sales_Literature */
		Header: DevKit.FormSales_Literature.Header;
		/** The Navigation of form Sales_Literature */
		Navigation: DevKit.FormSales_Literature.Navigation;
		/** The Grid of form Sales_Literature */
		Grid: DevKit.FormSales_Literature.Grid;
		/** The SidePanes of form Sales_Literature */
		SidePanes: DevKit.SidePanes;
	}
	class SalesLiteratureApi {
		/**
		* DynamicsCrm.DevKit SalesLiteratureApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the sales literature, such as the intended audience or primary messages. */
		Description: DevKit.WebApi.StringValue;
		/** Choose the user who is responsible for maintaining or updating the sales literature. */
		EmployeeContactId: DevKit.WebApi.LookupValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter the expiration date or last day the sales literature can be distributed. */
		ExpirationDate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Tells whether the sales literature has one or more attachments. */
		HasAttachments: DevKit.WebApi.BooleanValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select whether the sales literature can be distributed to prospects and customers or is for internal use only. */
		IsCustomerViewable: DevKit.WebApi.BooleanValue;
		/** Type one or more topics or keywords that can be used to search for the sales literature. */
		KeyWords: DevKit.WebApi.StringValue;
		/** Select a category or type to help others identify the intended use of the sales literature. */
		LiteratureTypeCode: DevKit.WebApi.OptionSetValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a descriptive title for the sales literature. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the sales literature. */
		SalesLiteratureId: DevKit.WebApi.GuidValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Choose the subject for the sales literature to relate the item to a product or business group. Administrators can configure subjects under Business Management in the Settings area. */
		SubjectId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SalesLiterature {
		enum LiteratureTypeCode {
			/** 6 */
			Bulletins,
			/** 9 */
			Company_Background,
			/** 8 */
			Manuals,
			/** 100001 */
			Marketing_Collateral,
			/** 5 */
			News,
			/** 2 */
			Policies_And_Procedures,
			/** 0 */
			Presentation,
			/** 7 */
			Price_Sheets,
			/** 1 */
			Product_Sheet,
			/** 3 */
			Sales_Literature,
			/** 4 */
			Spreadsheets
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCompetitor {
		interface Header extends DevKit.Controls.IHeader {
			/** Type the amount of revenue reported in the competitor's annual report or other source. */
			ReportedRevenue: DevKit.Controls.Money;
			/** Type the stock exchange symbol for the competitor to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
			TickerSymbol: DevKit.Controls.String;
		}
		interface tab_COMPETITOR_Sections {
			analysis: DevKit.Controls.Section;
			Competitor_Information: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
		}
		interface tab_opportunities_Sections {
			OpportunitiesChart: DevKit.Controls.Section;
			Opportunity: DevKit.Controls.Section;
		}
		interface tab_COMPETITOR extends DevKit.Controls.ITab {
			Section: tab_COMPETITOR_Sections;
		}
		interface tab_opportunities extends DevKit.Controls.ITab {
			Section: tab_opportunities_Sections;
		}
		interface Tabs {
			COMPETITOR: tab_COMPETITOR;
			opportunities: tab_opportunities;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the complete primary address. */
			Address1_Composite: DevKit.Controls.String;
			/** Type the company or business name used to identify the competitor in data views and related records. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type notes or other information about the competitor's strengths, such as top-selling products and targeted industries or markets. */
			Strengths: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Type notes or other information about the competitor's weaknesses or areas in which your organization outperforms the competitor. */
			Weaknesses: DevKit.Controls.String;
			/** Type the website URL for the competitor. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			competitor_addresses: DevKit.Controls.NavigationItem,
			competitor_opportunity_activities: DevKit.Controls.NavigationItem,
			competitor_Posts: DevKit.Controls.NavigationItem
		}
		interface Grid {
			ChartTest: DevKit.Controls.Grid;
			OpportunityCurrentFiscalYear: DevKit.Controls.Grid;
		}
	}
	class FormCompetitor extends DevKit.IForm {
		/**
		* Competitor [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Competitor */
		Body: DevKit.FormCompetitor.Body;
		/** The Header section of form Competitor */
		Header: DevKit.FormCompetitor.Header;
		/** The Navigation of form Competitor */
		Navigation: DevKit.FormCompetitor.Navigation;
		/** The Grid of form Competitor */
		Grid: DevKit.FormCompetitor.Grid;
		/** The SidePanes of form Competitor */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCompetitor_Information {
		interface tab_analysis_Sections {
			analysis: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			address: DevKit.Controls.Section;
			competitor_information: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_tab_recordwall_Sections {
			tab_recordwall_section_1: DevKit.Controls.Section;
		}
		interface tab_analysis extends DevKit.Controls.ITab {
			Section: tab_analysis_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_tab_recordwall extends DevKit.Controls.ITab {
			Section: tab_tab_recordwall_Sections;
		}
		interface Tabs {
			analysis: tab_analysis;
			general: tab_general;
			notes: tab_notes;
			tab_recordwall: tab_tab_recordwall;
		}
		interface Body {
			Tab: Tabs;
			/** Type the city for the primary address. */
			Address1_City: DevKit.Controls.String;
			/** Type the country or region for the primary address. */
			Address1_Country: DevKit.Controls.String;
			/** Type the first line of the primary address. */
			Address1_Line1: DevKit.Controls.String;
			/** Type the second line of the primary address. */
			Address1_Line2: DevKit.Controls.String;
			/** Type the third line of the primary address. */
			Address1_Line3: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the primary address. */
			Address1_PostalCode: DevKit.Controls.String;
			/** Type the state or province of the primary address. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** Type the competitor's primary product, service, or specialty. */
			KeyProduct: DevKit.Controls.String;
			/** Type the company or business name used to identify the competitor in data views and related records. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Type notes or other information about the competitive opportunities or selling points you can make. */
			Opportunities: DevKit.Controls.String;
			/** Type notes or other information about the competitor's business, such as location, revenue, or distribution channel. */
			Overview: DevKit.Controls.String;
			/** Type the amount of revenue reported in the competitor's annual report or other source. */
			ReportedRevenue: DevKit.Controls.Money;
			/** Type the stock exchange at which the competitor is listed to track their stock and financial performance of the company. */
			StockExchange: DevKit.Controls.String;
			/** Type notes or other information about the competitor's strengths, such as top-selling products and targeted industries or markets. */
			Strengths: DevKit.Controls.String;
			/** Type notes or other information about the competitor's threats to your organization when you sell to the same prospect or customer. */
			Threats: DevKit.Controls.String;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			/** Type notes or other information about the competitor's weaknesses or areas in which your organization outperforms the competitor. */
			Weaknesses: DevKit.Controls.String;
			WebResource_RecordWall: DevKit.Controls.WebResource;
			/** Type the website URL for the competitor. */
			WebSiteUrl: DevKit.Controls.String;
		}
		interface Navigation {
			competitor_addresses: DevKit.Controls.NavigationItem,
			competitor_opportunity_activities: DevKit.Controls.NavigationItem,
			competitor_Posts: DevKit.Controls.NavigationItem
		}
	}
	class FormCompetitor_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Competitor_Information */
		Body: DevKit.FormCompetitor_Information.Body;
		/** The Navigation of form Competitor_Information */
		Navigation: DevKit.FormCompetitor_Information.Navigation;
		/** The SidePanes of form Competitor_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCompetitor2 {
		interface tab_newCompetitor_Sections {
			quickCompetitor_column1: DevKit.Controls.Section;
			quickCompetitor_column2: DevKit.Controls.Section;
			quickCompetitor_column3: DevKit.Controls.Section;
		}
		interface tab_newCompetitor extends DevKit.Controls.ITab {
			Section: tab_newCompetitor_Sections;
		}
		interface Tabs {
			newCompetitor: tab_newCompetitor;
		}
		interface Body {
			Tab: Tabs;
			/** Type the company or business name used to identify the competitor in data views and related records. */
			Name: DevKit.Controls.String;
			/** Type the amount of revenue reported in the competitor's annual report or other source. */
			ReportedRevenue: DevKit.Controls.Money;
			/** Type notes or other information about the competitor's strengths, such as top-selling products and targeted industries or markets. */
			Strengths: DevKit.Controls.String;
			/** Type the stock exchange symbol for the competitor to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
			TickerSymbol: DevKit.Controls.String;
			/** Type notes or other information about the competitor's weaknesses or areas in which your organization outperforms the competitor. */
			Weaknesses: DevKit.Controls.String;
			/** Type the website URL for the competitor. */
			WebSiteUrl: DevKit.Controls.String;
		}
	}
	class FormCompetitor2 extends DevKit.IForm {
		/**
		* Competitor [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Competitor2 */
		Body: DevKit.FormCompetitor2.Body;
	}
	class CompetitorApi {
		/**
		* DynamicsCrm.DevKit CompetitorApi
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
		/** Unique identifier for address 1. */
		Address1_AddressId: string;
		/** Select the primary address type. */
		Address1_AddressTypeCode: OptionSet.Competitor.Address1_AddressTypeCode;
		/** Type the city for the primary address. */
		Address1_City: string;
		/** Shows the complete primary address. */
		readonly Address1_Composite: string;
		/** Type the country or region for the primary address. */
		Address1_Country: string;
		/** Type the county for the primary address. */
		Address1_County: string;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: string;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: number;
		/** Type the first line of the primary address. */
		Address1_Line1: string;
		/** Type the second line of the primary address. */
		Address1_Line2: string;
		/** Type the third line of the primary address. */
		Address1_Line3: string;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: number;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: string;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: string;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: string;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: OptionSet.Competitor.Address1_ShippingMethodCode;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: string;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: string;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: string;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: string;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: string;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: number;
		/** Unique identifier for address 2. */
		Address2_AddressId: string;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: OptionSet.Competitor.Address2_AddressTypeCode;
		/** Type the city for the secondary address. */
		Address2_City: string;
		/** Shows the complete secondary address. */
		readonly Address2_Composite: string;
		/** Type the country or region for the secondary address. */
		Address2_Country: string;
		/** Type the county for the secondary address. */
		Address2_County: string;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: string;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: number;
		/** Type the first line of the secondary address. */
		Address2_Line1: string;
		/** Type the second line of the secondary address. */
		Address2_Line2: string;
		/** Type the third line of the secondary address. */
		Address2_Line3: string;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: number;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: string;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: string;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: string;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: OptionSet.Competitor.Address2_ShippingMethodCode;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: string;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: string;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: string;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: string;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly , if shipped by UPS. */
		Address2_UPSZone: string;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: number;
		/** Unique identifier of the competitor. */
		CompetitorId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the default image for the record. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Type the competitor's primary product, service, or specialty. */
		KeyProduct: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Describes whether competitor is opted out or not */
		msdyn_gdproptout: boolean;
		/** Type the company or business name used to identify the competitor in data views and related records. */
		Name: string;
		/** Type notes or other information about the competitive opportunities or selling points you can make. */
		Opportunities: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Type notes or other information about the competitor's business, such as location, revenue, or distribution channel. */
		Overview: string;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Type the URL for the website used to obtain reference information about the competitor. */
		ReferenceInfoUrl: string;
		/** Type the amount of revenue reported in the competitor's annual report or other source. */
		ReportedRevenue: number;
		/** Value of the Reported Revenue in base currency. */
		readonly ReportedRevenue_Base: number;
		/** Type the quarter number during which the competitor's reported revenue was recorded or announced for use in reporting and analysis. */
		ReportingQuarter: number;
		/** Type the fiscal year during which the competitor's reported revenue was announced for use in reporting and analysis. */
		ReportingYear: number;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Type the stock exchange at which the competitor is listed to track their stock and financial performance of the company. */
		StockExchange: string;
		/** Type notes or other information about the competitor's strengths, such as top-selling products and targeted industries or markets. */
		Strengths: string;
		/** Type notes or other information about the competitor's threats to your organization when you sell to the same prospect or customer. */
		Threats: string;
		/** Type the stock exchange symbol for the competitor to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
		TickerSymbol: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Type notes or other information about the competitor's weaknesses or areas in which your organization outperforms the competitor. */
		Weaknesses: string;
		/** Type the website URL for the competitor. */
		WebSiteUrl: string;
		/** Type the percentage of your organization's lost opportunities that are won by the competitor to identify your strongest competitors. */
		WinPercentage: number;
		/** Type the phonetic spelling of the competitor's name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiName: string;
		readonly FormattedValue: {
			/** Unique identifier for address 1. */
			readonly Address1_AddressId: string;
			/** Select the primary address type. */
			readonly Address1_AddressTypeCode: string;
			/** Type the city for the primary address. */
			readonly Address1_City: string;
			/** Shows the complete primary address. */
			readonly Address1_Composite: string;
			/** Type the country or region for the primary address. */
			readonly Address1_Country: string;
			/** Type the county for the primary address. */
			readonly Address1_County: string;
			/** Type the fax number associated with the primary address. */
			readonly Address1_Fax: string;
			/** Type the latitude value for the primary address for use in mapping and other applications. */
			readonly Address1_Latitude: string;
			/** Type the first line of the primary address. */
			readonly Address1_Line1: string;
			/** Type the second line of the primary address. */
			readonly Address1_Line2: string;
			/** Type the third line of the primary address. */
			readonly Address1_Line3: string;
			/** Type the longitude value for the primary address for use in mapping and other applications. */
			readonly Address1_Longitude: string;
			/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
			readonly Address1_Name: string;
			/** Type the ZIP Code or postal code for the primary address. */
			readonly Address1_PostalCode: string;
			/** Type the post office box number of the primary address. */
			readonly Address1_PostOfficeBox: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address1_ShippingMethodCode: string;
			/** Type the state or province of the primary address. */
			readonly Address1_StateOrProvince: string;
			/** Type the main phone number associated with the primary address. */
			readonly Address1_Telephone1: string;
			/** Type a second phone number associated with the primary address. */
			readonly Address1_Telephone2: string;
			/** Type a third phone number associated with the primary address. */
			readonly Address1_Telephone3: string;
			/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly Address1_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address1_UTCOffset: string;
			/** Unique identifier for address 2. */
			readonly Address2_AddressId: string;
			/** Select the secondary address type. */
			readonly Address2_AddressTypeCode: string;
			/** Type the city for the secondary address. */
			readonly Address2_City: string;
			/** Shows the complete secondary address. */
			readonly Address2_Composite: string;
			/** Type the country or region for the secondary address. */
			readonly Address2_Country: string;
			/** Type the county for the secondary address. */
			readonly Address2_County: string;
			/** Type the fax number associated with the secondary address. */
			readonly Address2_Fax: string;
			/** Type the latitude value for the secondary address for use in mapping and other applications. */
			readonly Address2_Latitude: string;
			/** Type the first line of the secondary address. */
			readonly Address2_Line1: string;
			/** Type the second line of the secondary address. */
			readonly Address2_Line2: string;
			/** Type the third line of the secondary address. */
			readonly Address2_Line3: string;
			/** Type the longitude value for the secondary address for use in mapping and other applications. */
			readonly Address2_Longitude: string;
			/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
			readonly Address2_Name: string;
			/** Type the ZIP Code or postal code for the secondary address. */
			readonly Address2_PostalCode: string;
			/** Type the post office box number of the secondary address. */
			readonly Address2_PostOfficeBox: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly Address2_ShippingMethodCode: string;
			/** Type the state or province of the secondary address. */
			readonly Address2_StateOrProvince: string;
			/** Type the main phone number associated with the secondary address. */
			readonly Address2_Telephone1: string;
			/** Type a second phone number associated with the secondary address. */
			readonly Address2_Telephone2: string;
			/** Type a third phone number associated with the secondary address. */
			readonly Address2_Telephone3: string;
			/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly , if shipped by UPS. */
			readonly Address2_UPSZone: string;
			/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
			readonly Address2_UTCOffset: string;
			/** Unique identifier of the competitor. */
			readonly CompetitorId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type the competitor's primary product, service, or specialty. */
			readonly KeyProduct: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Describes whether competitor is opted out or not */
			readonly msdyn_gdproptout: string;
			/** Type the company or business name used to identify the competitor in data views and related records. */
			readonly Name: string;
			/** Type notes or other information about the competitive opportunities or selling points you can make. */
			readonly Opportunities: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Type notes or other information about the competitor's business, such as location, revenue, or distribution channel. */
			readonly Overview: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Type the URL for the website used to obtain reference information about the competitor. */
			readonly ReferenceInfoUrl: string;
			/** Type the amount of revenue reported in the competitor's annual report or other source. */
			readonly ReportedRevenue: string;
			/** Value of the Reported Revenue in base currency. */
			readonly ReportedRevenue_Base: string;
			/** Type the quarter number during which the competitor's reported revenue was recorded or announced for use in reporting and analysis. */
			readonly ReportingQuarter: string;
			/** Type the fiscal year during which the competitor's reported revenue was announced for use in reporting and analysis. */
			readonly ReportingYear: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Type the stock exchange at which the competitor is listed to track their stock and financial performance of the company. */
			readonly StockExchange: string;
			/** Type notes or other information about the competitor's strengths, such as top-selling products and targeted industries or markets. */
			readonly Strengths: string;
			/** Type notes or other information about the competitor's threats to your organization when you sell to the same prospect or customer. */
			readonly Threats: string;
			/** Type the stock exchange symbol for the competitor to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
			readonly TickerSymbol: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Type notes or other information about the competitor's weaknesses or areas in which your organization outperforms the competitor. */
			readonly Weaknesses: string;
			/** Type the website URL for the competitor. */
			readonly WebSiteUrl: string;
			/** Type the percentage of your organization's lost opportunities that are won by the competitor to identify your strongest competitors. */
			readonly WinPercentage: string;
			/** Type the phonetic spelling of the competitor's name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
			readonly YomiName: string;
		}
	}
}
declare namespace OptionSet {
	namespace Competitor {
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
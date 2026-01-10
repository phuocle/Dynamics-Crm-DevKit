//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBusinessUnit_Information {
		interface tab_addresses_Sections {
			/** Bill To Address */
			bill_to_address: DevKit.Controls.Section;
			/** Ship To Address */
			ship_to_address: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			/** Section 1 */
			section_1: DevKit.Controls.Section;
		}
		/** Addresses */
		interface tab_addresses extends DevKit.Controls.ITab {
			Section: tab_addresses_Sections;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** Addresses */
			addresses: tab_addresses;
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** City name for address 1. */
			Address1_City: DevKit.Controls.String;
			/** Country/region name for address 1. */
			Address1_Country: DevKit.Controls.String;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Controls.String;
			/** Second line for entering address 1 information. */
			Address1_Line2: DevKit.Controls.String;
			/** Third line for entering address 1 information. */
			Address1_Line3: DevKit.Controls.String;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Second telephone number associated with address 1. */
			Address1_Telephone2: DevKit.Controls.String;
			/** Third telephone number associated with address 1. */
			Address1_Telephone3: DevKit.Controls.String;
			/** City name for address 2. */
			Address2_City: DevKit.Controls.String;
			/** Country/region name for address 2. */
			Address2_Country: DevKit.Controls.String;
			/** First line for entering address 2 information. */
			Address2_Line1: DevKit.Controls.String;
			/** Second line for entering address 2 information. */
			Address2_Line2: DevKit.Controls.String;
			/** Third line for entering address 2 information. */
			Address2_Line3: DevKit.Controls.String;
			/** ZIP Code or postal code for address 2. */
			Address2_PostalCode: DevKit.Controls.String;
			/** State or province for address 2. */
			Address2_StateOrProvince: DevKit.Controls.String;
			/** Name of the division to which the business unit belongs. */
			DivisionName: DevKit.Controls.String;
			/** Email address for the business unit. */
			EMailAddress: DevKit.Controls.String;
			/** Name of the business unit. */
			Name: DevKit.Controls.String;
			/** Unique identifier for the parent business unit. */
			ParentBusinessUnitId: DevKit.Controls.Lookup;
			/** Website URL for the business unit. */
			WebSiteUrl: DevKit.Controls.String;
		}
	}
	export class FormBusinessUnit_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form BusinessUnit_Information */
		Body: DevKit.FormBusinessUnit_Information.Body;
	}
	export class BusinessUnitApi {
		/**
		* DynamicsCrm.DevKit BusinessUnitApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier for address 1. */
		Address1_AddressId: string | null;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: OptionSet.BusinessUnit.Address1_AddressTypeCode | null;
		/** City name for address 1. */
		Address1_City: string | null;
		/** Country/region name for address 1. */
		Address1_Country: string | null;
		/** County name for address 1. */
		Address1_County: string | null;
		/** Fax number for address 1. */
		Address1_Fax: string | null;
		/** Latitude for address 1. */
		Address1_Latitude: number | null;
		/** First line for entering address 1 information. */
		Address1_Line1: string | null;
		/** Second line for entering address 1 information. */
		Address1_Line2: string | null;
		/** Third line for entering address 1 information. */
		Address1_Line3: string | null;
		/** Longitude for address 1. */
		Address1_Longitude: number | null;
		/** Name to enter for address 1. */
		Address1_Name: string | null;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: string | null;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: string | null;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: OptionSet.BusinessUnit.Address1_ShippingMethodCode | null;
		/** State or province for address 1. */
		Address1_StateOrProvince: string | null;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: string | null;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: string | null;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: string | null;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: string | null;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: number | null;
		/** Unique identifier for address 2. */
		Address2_AddressId: string | null;
		/** Type of address for address 2, such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: OptionSet.BusinessUnit.Address2_AddressTypeCode | null;
		/** City name for address 2. */
		Address2_City: string | null;
		/** Country/region name for address 2. */
		Address2_Country: string | null;
		/** County name for address 2. */
		Address2_County: string | null;
		/** Fax number for address 2. */
		Address2_Fax: string | null;
		/** Latitude for address 2. */
		Address2_Latitude: number | null;
		/** First line for entering address 2 information. */
		Address2_Line1: string | null;
		/** Second line for entering address 2 information. */
		Address2_Line2: string | null;
		/** Third line for entering address 2 information. */
		Address2_Line3: string | null;
		/** Longitude for address 2. */
		Address2_Longitude: number | null;
		/** Name to enter for address 2. */
		Address2_Name: string | null;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: string | null;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: string | null;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: OptionSet.BusinessUnit.Address2_ShippingMethodCode | null;
		/** State or province for address 2. */
		Address2_StateOrProvince: string | null;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: string | null;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: string | null;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: string | null;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: string | null;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: number | null;
		/** Unique identifier of the business unit. */
		BusinessUnitId: string | null;
		/** Fiscal calendar associated with the business unit. */
		CalendarId: string | null;
		/** Name of the business unit cost center. */
		CostCenter: string | null;
		/** Unique identifier of the user who created the business unit. */
		readonly CreatedBy: string | null;
		/** Date and time when the business unit was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the businessunit. */
		readonly CreatedOnBehalfBy: string | null;
		/** Credit limit for the business unit. */
		CreditLimit: number | null;
		/** Description of the business unit. */
		Description: string | null;
		/** Reason for disabling the business unit. */
		readonly DisabledReason: string | null;
		/** Name of the division to which the business unit belongs. */
		DivisionName: string | null;
		/** Email address for the business unit. */
		EMailAddress: string | null;
		/** Exchange rate for the currency associated with the businessunit with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Alternative name under which the business unit can be filed. */
		FileAsName: string | null;
		/** FTP site URL for the business unit. */
		FtpSiteUrl: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Inheritance mask for the business unit. */
		InheritanceMask: number | null;
		/** Information about whether the business unit is enabled or disabled. */
		IsDisabled: boolean | null;
		/** Unique identifier of the user who last modified the business unit. */
		readonly ModifiedBy: string | null;
		/** Date and time when the business unit was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the businessunit. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the business unit. */
		Name: string | null;
		/** Unique identifier of the organization associated with the business unit. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Unique identifier for the parent business unit. */
		ParentBusinessUnitId: string | null;
		/** Picture or diagram of the business unit. */
		Picture: string | null;
		/** Stock exchange on which the business is listed. */
		StockExchange: string | null;
		/** Stock exchange ticker symbol for the business unit. */
		TickerSymbol: string | null;
		/** Unique identifier of the currency associated with the businessunit. */
		TransactionCurrencyId: string | null;
		readonly UserGroupId: string | null;
		/** UTC offset for the business unit. This is the difference between local time and standard Coordinated Universal Time. */
		UTCOffset: number | null;
		/** Version number of the business unit. */
		readonly VersionNumber: number | null;
		/** Website URL for the business unit. */
		WebSiteUrl: string | null;
		/** Information about whether workflow or sales process rules have been suspended. */
		WorkflowSuspended: boolean | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for address 1. */
			readonly Address1_AddressId: string;
			/** Type of address for address 1, such as billing, shipping, or primary address. */
			readonly Address1_AddressTypeCode: string;
			/** City name for address 1. */
			readonly Address1_City: string;
			/** Country/region name for address 1. */
			readonly Address1_Country: string;
			/** County name for address 1. */
			readonly Address1_County: string;
			/** Fax number for address 1. */
			readonly Address1_Fax: string;
			/** Latitude for address 1. */
			readonly Address1_Latitude: string;
			/** First line for entering address 1 information. */
			readonly Address1_Line1: string;
			/** Second line for entering address 1 information. */
			readonly Address1_Line2: string;
			/** Third line for entering address 1 information. */
			readonly Address1_Line3: string;
			/** Longitude for address 1. */
			readonly Address1_Longitude: string;
			/** Name to enter for address 1. */
			readonly Address1_Name: string;
			/** ZIP Code or postal code for address 1. */
			readonly Address1_PostalCode: string;
			/** Post office box number for address 1. */
			readonly Address1_PostOfficeBox: string;
			/** Method of shipment for address 1. */
			readonly Address1_ShippingMethodCode: string;
			/** State or province for address 1. */
			readonly Address1_StateOrProvince: string;
			/** First telephone number associated with address 1. */
			readonly Address1_Telephone1: string;
			/** Second telephone number associated with address 1. */
			readonly Address1_Telephone2: string;
			/** Third telephone number associated with address 1. */
			readonly Address1_Telephone3: string;
			/** United Parcel Service (UPS) zone for address 1. */
			readonly Address1_UPSZone: string;
			/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
			readonly Address1_UTCOffset: string;
			/** Unique identifier for address 2. */
			readonly Address2_AddressId: string;
			/** Type of address for address 2, such as billing, shipping, or primary address. */
			readonly Address2_AddressTypeCode: string;
			/** City name for address 2. */
			readonly Address2_City: string;
			/** Country/region name for address 2. */
			readonly Address2_Country: string;
			/** County name for address 2. */
			readonly Address2_County: string;
			/** Fax number for address 2. */
			readonly Address2_Fax: string;
			/** Latitude for address 2. */
			readonly Address2_Latitude: string;
			/** First line for entering address 2 information. */
			readonly Address2_Line1: string;
			/** Second line for entering address 2 information. */
			readonly Address2_Line2: string;
			/** Third line for entering address 2 information. */
			readonly Address2_Line3: string;
			/** Longitude for address 2. */
			readonly Address2_Longitude: string;
			/** Name to enter for address 2. */
			readonly Address2_Name: string;
			/** ZIP Code or postal code for address 2. */
			readonly Address2_PostalCode: string;
			/** Post office box number for address 2. */
			readonly Address2_PostOfficeBox: string;
			/** Method of shipment for address 2. */
			readonly Address2_ShippingMethodCode: string;
			/** State or province for address 2. */
			readonly Address2_StateOrProvince: string;
			/** First telephone number associated with address 2. */
			readonly Address2_Telephone1: string;
			/** Second telephone number associated with address 2. */
			readonly Address2_Telephone2: string;
			/** Third telephone number associated with address 2. */
			readonly Address2_Telephone3: string;
			/** United Parcel Service (UPS) zone for address 2. */
			readonly Address2_UPSZone: string;
			/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
			readonly Address2_UTCOffset: string;
			/** Unique identifier of the business unit. */
			readonly BusinessUnitId: string;
			/** Fiscal calendar associated with the business unit. */
			readonly CalendarId: string;
			/** Name of the business unit cost center. */
			readonly CostCenter: string;
			/** Unique identifier of the user who created the business unit. */
			readonly CreatedBy: string;
			/** Date and time when the business unit was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the businessunit. */
			readonly CreatedOnBehalfBy: string;
			/** Credit limit for the business unit. */
			readonly CreditLimit: string;
			/** Description of the business unit. */
			readonly Description: string;
			/** Reason for disabling the business unit. */
			readonly DisabledReason: string;
			/** Name of the division to which the business unit belongs. */
			readonly DivisionName: string;
			/** Email address for the business unit. */
			readonly EMailAddress: string;
			/** Exchange rate for the currency associated with the businessunit with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Alternative name under which the business unit can be filed. */
			readonly FileAsName: string;
			/** FTP site URL for the business unit. */
			readonly FtpSiteUrl: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Inheritance mask for the business unit. */
			readonly InheritanceMask: string;
			/** Information about whether the business unit is enabled or disabled. */
			readonly IsDisabled: string;
			/** Unique identifier of the user who last modified the business unit. */
			readonly ModifiedBy: string;
			/** Date and time when the business unit was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the businessunit. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the business unit. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the business unit. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier for the parent business unit. */
			readonly ParentBusinessUnitId: string;
			/** Picture or diagram of the business unit. */
			readonly Picture: string;
			/** Stock exchange on which the business is listed. */
			readonly StockExchange: string;
			/** Stock exchange ticker symbol for the business unit. */
			readonly TickerSymbol: string;
			/** Unique identifier of the currency associated with the businessunit. */
			readonly TransactionCurrencyId: string;
			readonly UserGroupId: string;
			/** UTC offset for the business unit. This is the difference between local time and standard Coordinated Universal Time. */
			readonly UTCOffset: string;
			/** Version number of the business unit. */
			readonly VersionNumber: string;
			/** Website URL for the business unit. */
			readonly WebSiteUrl: string;
			/** Information about whether workflow or sales process rules have been suspended. */
			readonly WorkflowSuspended: string;
		}
	}
}
declare namespace OptionSet {
	namespace BusinessUnit {
		enum Address1_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address1_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_AddressTypeCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum Address2_ShippingMethodCode {
			/** Default_Value = 1*/
			Default_Value = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSite_Information {
		interface tab_address_Sections {
			primary_address: DevKit.Controls.Section;
			time_zone: DevKit.Controls.Section;
		}
		interface tab_General_Sections {
			section1: DevKit.Controls.Section;
		}
		interface tab_address extends DevKit.Controls.ITab {
			Section: tab_address_Sections;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			address: tab_address;
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			/** City name for address 1. */
			Address1_City: DevKit.Controls.String;
			/** Country/region name for address 1. */
			Address1_Country: DevKit.Controls.String;
			/** Fax number for address 1. */
			Address1_Fax: DevKit.Controls.String;
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
			/** Email address for the site. */
			EMailAddress: DevKit.Controls.String;
			/** Name of the site. */
			Name: DevKit.Controls.String;
			/** Local time zone for the site. */
			TimeZoneCode: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSite_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Site_Information */
		Body: DevKit.FormSite_Information.Body;
		/** The Process of form Site_Information */
		Process: DevKit.FormSite_Information.Process;
		/** The SidePanes of form Site_Information */
		SidePanes: DevKit.SidePanes;
	}
	class SiteApi {
		/**
		* DynamicsCrm.DevKit SiteApi
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
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: OptionSet.Site.Address1_AddressTypeCode;
		/** City name for address 1. */
		Address1_City: string;
		/** Country/region name for address 1. */
		Address1_Country: string;
		/** County name for address 1. */
		Address1_County: string;
		/** Fax number for address 1. */
		Address1_Fax: string;
		/** Latitude for address 1. */
		Address1_Latitude: number;
		/** First line for entering address 1 information. */
		Address1_Line1: string;
		/** Second line for entering address 1 information. */
		Address1_Line2: string;
		/** Third line for entering address 1 information. */
		Address1_Line3: string;
		/** Longitude for address 1. */
		Address1_Longitude: number;
		/** Name to enter for address 1. */
		Address1_Name: string;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: string;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: string;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: OptionSet.Site.Address1_ShippingMethodCode;
		/** State or province for address 1. */
		Address1_StateOrProvince: string;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: string;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: string;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: string;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: string;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: number;
		/** Unique identifier for address 2. */
		Address2_AddressId: string;
		/** Type of address for address 2, such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: OptionSet.Site.Address2_AddressTypeCode;
		/** City name for address 2. */
		Address2_City: string;
		/** Country/region name for address 2. */
		Address2_Country: string;
		/** County name for address 2. */
		Address2_County: string;
		/** Fax number for address 2. */
		Address2_Fax: string;
		/** Latitude for address 2. */
		Address2_Latitude: number;
		/** First line for entering address 2 information. */
		Address2_Line1: string;
		/** Second line for entering address 2 information. */
		Address2_Line2: string;
		/** Third line for entering address 2 information. */
		Address2_Line3: string;
		/** Longitude for address 2. */
		Address2_Longitude: number;
		/** Name to enter for address 2. */
		Address2_Name: string;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: string;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: string;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: OptionSet.Site.Address2_ShippingMethodCode;
		/** State or province for address 2. */
		Address2_StateOrProvince: string;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: string;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: string;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: string;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: string;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: number;
		/** Unique identifier of the user who created the site. */
		readonly CreatedBy: string;
		/** Date and time when the site was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the site. */
		readonly CreatedOnBehalfBy: string;
		/** Email address for the site. */
		EMailAddress: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who last modified the site. */
		readonly ModifiedBy: string;
		/** Date and time when the site was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the site. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the site. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the site. */
		SiteId: string;
		/** Local time zone for the site. */
		TimeZoneCode: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** Unique identifier of the user who created the site. */
			readonly CreatedBy: string;
			/** Date and time when the site was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the site. */
			readonly CreatedOnBehalfBy: string;
			/** Email address for the site. */
			readonly EMailAddress: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who last modified the site. */
			readonly ModifiedBy: string;
			/** Date and time when the site was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the site. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the site. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the site. */
			readonly SiteId: string;
			/** Local time zone for the site. */
			readonly TimeZoneCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Site {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
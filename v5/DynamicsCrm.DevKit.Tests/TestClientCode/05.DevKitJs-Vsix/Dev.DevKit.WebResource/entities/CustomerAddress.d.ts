//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomerAddress_Information {
		interface tab_general_Sections {
			/** Additional Information */
			additional_information: DevKit.Controls.Section;
			/** Customer Address Information */
			customer_address_information: DevKit.Controls.Section;
			/** Phone Numbers */
			phone_numbers: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Select the address type, such as primary or billing. */
			AddressTypeCode: DevKit.Controls.OptionSet;
			/** Type the city for the customer's address to help identify the location. */
			City: DevKit.Controls.String;
			/** Type the country or region for the customer's address. */
			Country: DevKit.Controls.String;
			/** Type the fax number associated with the customer's address. */
			Fax: DevKit.Controls.String;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			FreightTermsCode: DevKit.Controls.OptionSet;
			/** Type the first line of the customer's address to help identify the location. */
			Line1: DevKit.Controls.String;
			/** Type the second line of the customer's address. */
			Line2: DevKit.Controls.String;
			/** Type the third line of the customer's address. */
			Line3: DevKit.Controls.String;
			/** Type a descriptive name for the customer's address, such as Corporate Headquarters. */
			Name: DevKit.Controls.String;
			/** Type the ZIP Code or postal code for the address. */
			PostalCode: DevKit.Controls.String;
			/** Type the name of the primary contact person for the customer's address. */
			PrimaryContactName: DevKit.Controls.String;
			/** Select a shipping method for deliveries sent to this address. */
			ShippingMethodCode: DevKit.Controls.OptionSet;
			/** Type the state or province of the customer's address. */
			StateOrProvince: DevKit.Controls.String;
			/** Type the primary phone number for the customer's address. */
			Telephone1: DevKit.Controls.String;
			/** Type a second phone number for the customer's address. */
			Telephone2: DevKit.Controls.String;
		}
	}
	export class FormCustomerAddress_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form CustomerAddress_Information */
		Body: DevKit.FormCustomerAddress_Information.Body;
	}
	export class CustomerAddressApi {
		/**
		* DynamicsCrm.DevKit CustomerAddressApi
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
		/** Shows the number of the address, to indicate whether the address is the primary, secondary, or other address for the customer. */
		AddressNumber: number | null;
		/** Select the address type, such as primary or billing. */
		AddressTypeCode: OptionSet.CustomerAddress.AddressTypeCode | null;
		/** Type the city for the customer's address to help identify the location. */
		City: string | null;
		/** Shows the complete address. */
		readonly Composite: string | null;
		/** Type the country or region for the customer's address. */
		Country: string | null;
		/** Type the county for the customer's address. */
		County: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the customer address. */
		CustomerAddressId: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Type the fax number associated with the customer's address. */
		Fax: string | null;
		/** Select the freight terms to make sure shipping charges are processed correctly. */
		FreightTermsCode: OptionSet.CustomerAddress.FreightTermsCode | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Type the latitude value for the customer's address, for use in mapping and other applications. */
		Latitude: number | null;
		/** Type the first line of the customer's address to help identify the location. */
		Line1: string | null;
		/** Type the second line of the customer's address. */
		Line2: string | null;
		/** Type the third line of the customer's address. */
		Line3: string | null;
		/** Type the longitude value for the customer's address, for use in mapping and other applications. */
		Longitude: number | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a descriptive name for the customer's address, such as Corporate Headquarters. */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the customer address. */
		readonly OwningUser: string | null;
		/** Type the ZIP Code or postal code for the address. */
		PostalCode: string | null;
		/** Type the post office box number of the customer's address. */
		PostOfficeBox: string | null;
		/** Type the name of the primary contact person for the customer's address. */
		PrimaryContactName: string | null;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: OptionSet.CustomerAddress.ShippingMethodCode | null;
		/** Type the state or province of the customer's address. */
		StateOrProvince: string | null;
		/** Type the primary phone number for the customer's address. */
		Telephone1: string | null;
		/** Type a second phone number for the customer's address. */
		Telephone2: string | null;
		/** Type a third phone number for the customer's address. */
		Telephone3: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** Type the UPS zone of the customer's address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		UPSZone: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Select the time zone for the address. */
		UTCOffset: number | null;
		/** Version number of the customer address. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows the number of the address, to indicate whether the address is the primary, secondary, or other address for the customer. */
			readonly AddressNumber: string;
			/** Select the address type, such as primary or billing. */
			readonly AddressTypeCode: string;
			/** Type the city for the customer's address to help identify the location. */
			readonly City: string;
			/** Shows the complete address. */
			readonly Composite: string;
			/** Type the country or region for the customer's address. */
			readonly Country: string;
			/** Type the county for the customer's address. */
			readonly County: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the customer address. */
			readonly CustomerAddressId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Type the fax number associated with the customer's address. */
			readonly Fax: string;
			/** Select the freight terms to make sure shipping charges are processed correctly. */
			readonly FreightTermsCode: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type the latitude value for the customer's address, for use in mapping and other applications. */
			readonly Latitude: string;
			/** Type the first line of the customer's address to help identify the location. */
			readonly Line1: string;
			/** Type the second line of the customer's address. */
			readonly Line2: string;
			/** Type the third line of the customer's address. */
			readonly Line3: string;
			/** Type the longitude value for the customer's address, for use in mapping and other applications. */
			readonly Longitude: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the customer's address, such as Corporate Headquarters. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the customer address. */
			readonly OwningUser: string;
			/** Type the ZIP Code or postal code for the address. */
			readonly PostalCode: string;
			/** Type the post office box number of the customer's address. */
			readonly PostOfficeBox: string;
			/** Type the name of the primary contact person for the customer's address. */
			readonly PrimaryContactName: string;
			/** Select a shipping method for deliveries sent to this address. */
			readonly ShippingMethodCode: string;
			/** Type the state or province of the customer's address. */
			readonly StateOrProvince: string;
			/** Type the primary phone number for the customer's address. */
			readonly Telephone1: string;
			/** Type a second phone number for the customer's address. */
			readonly Telephone2: string;
			/** Type a third phone number for the customer's address. */
			readonly Telephone3: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Type the UPS zone of the customer's address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
			readonly UPSZone: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Select the time zone for the address. */
			readonly UTCOffset: string;
			/** Version number of the customer address. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomerAddress {
		enum AddressTypeCode {
			/** Bill_To = 1*/
			Bill_To = 1,
			/** Other = 4*/
			Other = 4,
			/** Primary = 3*/
			Primary = 3,
			/** Ship_To = 2*/
			Ship_To = 2
		}
		enum FreightTermsCode {
			/** FOB = 1*/
			FOB = 1,
			/** No_Charge = 2*/
			No_Charge = 2
		}
		enum ObjectTypeCode {
			/** Account = 1*/
			Account = 1,
			/** Contact = 2*/
			Contact = 2
		}
		enum ParentIdTypeCode {
		}
		enum ShippingMethodCode {
			/** Airborne = 1*/
			Airborne = 1,
			/** DHL = 2*/
			DHL = 2,
			/** FedEx = 3*/
			FedEx = 3,
			/** Full_Load = 6*/
			Full_Load = 6,
			/** Postal_Mail = 5*/
			Postal_Mail = 5,
			/** UPS = 4*/
			UPS = 4,
			/** Will_Call = 7*/
			Will_Call = 7
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
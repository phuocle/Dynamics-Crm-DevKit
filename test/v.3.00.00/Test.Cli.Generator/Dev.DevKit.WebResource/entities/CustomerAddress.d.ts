//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomerAddress_Information {
		interface tab_general_Sections {
			additional_information: DevKit.Controls.Section;
			customer_address_information: DevKit.Controls.Section;
			phone_numbers: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormCustomerAddress_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form CustomerAddress_Information */
		Body: DevKit.FormCustomerAddress_Information.Body;
		/** The Process of form CustomerAddress_Information */
		Process: DevKit.FormCustomerAddress_Information.Process;
		/** The SidePanes of form CustomerAddress_Information */
		SidePanes: DevKit.SidePanes;
	}
	class CustomerAddressApi {
		/**
		* DynamicsCrm.DevKit CustomerAddressApi
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
		/** Shows the number of the address, to indicate whether the address is the primary, secondary, or other address for the customer. */
		AddressNumber: number;
		/** Select the address type, such as primary or billing. */
		AddressTypeCode: OptionSet.CustomerAddress.AddressTypeCode;
		/** Type the city for the customer's address to help identify the location. */
		City: string;
		/** Shows the complete address. */
		readonly Composite: string;
		/** Type the country or region for the customer's address. */
		Country: string;
		/** Type the county for the customer's address. */
		County: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the customer address. */
		CustomerAddressId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Type the fax number associated with the customer's address. */
		Fax: string;
		/** Select the freight terms to make sure shipping charges are processed correctly. */
		FreightTermsCode: OptionSet.CustomerAddress.FreightTermsCode;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Type the latitude value for the customer's address, for use in mapping and other applications. */
		Latitude: number;
		/** Type the first line of the customer's address to help identify the location. */
		Line1: string;
		/** Type the second line of the customer's address. */
		Line2: string;
		/** Type the third line of the customer's address. */
		Line3: string;
		/** Type the longitude value for the customer's address, for use in mapping and other applications. */
		Longitude: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive name for the customer's address, such as Corporate Headquarters. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the customer address. */
		readonly OwningUser: string;
		/** Choose the customer's address. */
		parentid_account: string;
		/** Choose the customer's address. */
		parentid_contact: string;
		/** Type the ZIP Code or postal code for the address. */
		PostalCode: string;
		/** Type the post office box number of the customer's address. */
		PostOfficeBox: string;
		/** Type the name of the primary contact person for the customer's address. */
		PrimaryContactName: string;
		/** Select a shipping method for deliveries sent to this address. */
		ShippingMethodCode: OptionSet.CustomerAddress.ShippingMethodCode;
		/** Type the state or province of the customer's address. */
		StateOrProvince: string;
		/** Type the primary phone number for the customer's address. */
		Telephone1: string;
		/** Type a second phone number for the customer's address. */
		Telephone2: string;
		/** Type a third phone number for the customer's address. */
		Telephone3: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Type the UPS zone of the customer's address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		UPSZone: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Select the time zone for the address. */
		UTCOffset: number;
		/** Version number of the customer address. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace CustomerAddress {
		enum AddressTypeCode {
			/** 1 */
			Bill_To,
			/** 4 */
			Other,
			/** 3 */
			Primary,
			/** 2 */
			Ship_To
		}
		enum FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum ObjectTypeCode {
			/** 1 */
			Account,
			/** 2 */
			Contact
		}
		enum ShippingMethodCode {
			/** 1 */
			Airborne,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 6 */
			Full_Load,
			/** 5 */
			Postal_Mail,
			/** 4 */
			UPS,
			/** 7 */
			Will_Call
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
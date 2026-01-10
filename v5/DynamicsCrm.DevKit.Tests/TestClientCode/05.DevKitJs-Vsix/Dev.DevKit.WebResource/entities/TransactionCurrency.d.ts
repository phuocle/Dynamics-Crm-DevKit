//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTransactionCurrency_Information {
		interface tab_Legacy_tab_Sections {
			/** Currency Conversion */
			Currency_conversion: DevKit.Controls.Section;
			/** Select Base Currency */
			Select_Base_Currency: DevKit.Controls.Section;
			/** Transaction Currency Information */
			Transaction_currency_information: DevKit.Controls.Section;
		}
		interface tab_UCI_tab_Sections {
			/** Currency Details */
			CurrencyInformation: DevKit.Controls.Section;
			/** General Section */
			General: DevKit.Controls.Section;
		}
		/** General */
		interface tab_Legacy_tab extends DevKit.Controls.ITab {
			Section: tab_Legacy_tab_Sections;
		}
		/** General */
		interface tab_UCI_tab extends DevKit.Controls.ITab {
			Section: tab_UCI_tab_Sections;
		}
		interface Tabs {
			/** General */
			Legacy_tab: tab_Legacy_tab;
			/** General */
			UCI_tab: tab_UCI_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Name of the transaction currency. */
			CurrencyName: DevKit.Controls.String;
			/** Name of the transaction currency. */
			CurrencyName1: DevKit.Controls.String;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision: DevKit.Controls.Integer;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision1: DevKit.Controls.Integer;
			/** Symbol for the transaction currency. */
			CurrencySymbol: DevKit.Controls.String;
			/** Symbol for the transaction currency. */
			CurrencySymbol1: DevKit.Controls.String;
			/** Currency type that can be used for new currency. */
			CurrencyType: DevKit.Controls.OptionSet;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate1: DevKit.Controls.Decimal;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode: DevKit.Controls.String;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode1: DevKit.Controls.String;
			systemcurrency: DevKit.Controls.ActionCards;
			systemcurrency_uci: DevKit.Controls.ActionCards;
		}
	}
	export class FormTransactionCurrency_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form TransactionCurrency_Information */
		Body: DevKit.FormTransactionCurrency_Information.Body;
	}
	export class TransactionCurrencyApi {
		/**
		* DynamicsCrm.DevKit TransactionCurrencyApi
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
		/** Unique identifier of the user who created the transaction currency. */
		readonly CreatedBy: string | null;
		/** Date and time when the transaction currency was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the transactioncurrency. */
		readonly CreatedOnBehalfBy: string | null;
		/** Name of the transaction currency. */
		CurrencyName: string | null;
		/** Number of decimal places that can be used for currency. */
		CurrencyPrecision: number | null;
		/** Symbol for the transaction currency. */
		CurrencySymbol: string | null;
		/** Currency type that can be used for new currency. */
		CurrencyType: OptionSet.TransactionCurrency.CurrencyType | null;
		/** The default image for the entity. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** Exchange rate between the transaction currency and the base currency. */
		ExchangeRate: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** ISO currency code for the transaction currency. */
		ISOCurrencyCode: string | null;
		/** Unique identifier of the user who last modified the transaction currency. */
		readonly ModifiedBy: string | null;
		/** Date and time when the transaction currency was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the transactioncurrency. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the transaction currency. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Status of the transaction currency. */
		StateCode: OptionSet.TransactionCurrency.StateCode | null;
		/** Reason for the status of the transaction currency. */
		StatusCode: OptionSet.TransactionCurrency.StatusCode | null;
		/** Unique identifier of the transaction currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		readonly UniqueDscId: string | null;
		/** Version number of the transaction currency. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the transaction currency. */
			readonly CreatedBy: string;
			/** Date and time when the transaction currency was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the transactioncurrency. */
			readonly CreatedOnBehalfBy: string;
			/** Name of the transaction currency. */
			readonly CurrencyName: string;
			/** Number of decimal places that can be used for currency. */
			readonly CurrencyPrecision: string;
			/** Symbol for the transaction currency. */
			readonly CurrencySymbol: string;
			/** Currency type that can be used for new currency. */
			readonly CurrencyType: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Exchange rate between the transaction currency and the base currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** ISO currency code for the transaction currency. */
			readonly ISOCurrencyCode: string;
			/** Unique identifier of the user who last modified the transaction currency. */
			readonly ModifiedBy: string;
			/** Date and time when the transaction currency was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the transactioncurrency. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the transaction currency. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the transaction currency. */
			readonly StateCode: string;
			/** Reason for the status of the transaction currency. */
			readonly StatusCode: string;
			/** Unique identifier of the transaction currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly UniqueDscId: string;
			/** Version number of the transaction currency. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TransactionCurrency {
		enum CurrencyType {
			/** Custom = 1*/
			Custom = 1,
			/** System = 0*/
			System = 0
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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
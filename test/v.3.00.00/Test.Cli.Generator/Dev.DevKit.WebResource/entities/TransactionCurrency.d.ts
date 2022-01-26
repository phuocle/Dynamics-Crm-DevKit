//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTransactionCurrency_Information {
		interface tab_general_Sections {
			Currency_conversion: DevKit.Controls.Section;
			Select_Base_Currency: DevKit.Controls.Section;
			Transaction_currency_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Name of the transaction currency. */
			CurrencyName: DevKit.Controls.String;
			/** Number of decimal places that can be used for currency. */
			CurrencyPrecision: DevKit.Controls.Integer;
			/** Symbol for the transaction currency. */
			CurrencySymbol: DevKit.Controls.String;
			/** Exchange rate between the transaction currency and the base currency. */
			ExchangeRate: DevKit.Controls.Decimal;
			/** ISO currency code for the transaction currency. */
			ISOCurrencyCode: DevKit.Controls.String;
			systemcurrency: DevKit.Controls.ActionCards;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormTransactionCurrency_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TransactionCurrency_Information */
		Body: DevKit.FormTransactionCurrency_Information.Body;
		/** The Process of form TransactionCurrency_Information */
		Process: DevKit.FormTransactionCurrency_Information.Process;
		/** The SidePanes of form TransactionCurrency_Information */
		SidePanes: DevKit.SidePanes;
	}
	class TransactionCurrencyApi {
		/**
		* DynamicsCrm.DevKit TransactionCurrencyApi
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
		/** Unique identifier of the user who created the transaction currency. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the transaction currency was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the transactioncurrency. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the transaction currency. */
		CurrencyName: DevKit.WebApi.StringValue;
		/** Number of decimal places that can be used for currency. */
		CurrencyPrecision: DevKit.WebApi.IntegerValue;
		/** Symbol for the transaction currency. */
		CurrencySymbol: DevKit.WebApi.StringValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Exchange rate between the transaction currency and the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** ISO currency code for the transaction currency. */
		ISOCurrencyCode: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the transaction currency. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the transaction currency was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the transactioncurrency. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the transaction currency. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the transaction currency. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the transaction currency. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the transaction currency. */
		TransactionCurrencyId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		UniqueDscId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the transaction currency. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TransactionCurrency {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
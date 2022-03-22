﻿//@ts-check
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
		/** Unique identifier of the user who created the transaction currency. */
		readonly CreatedBy: string;
		/** Date and time when the transaction currency was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the transactioncurrency. */
		readonly CreatedOnBehalfBy: string;
		/** Name of the transaction currency. */
		CurrencyName: string;
		/** Number of decimal places that can be used for currency. */
		CurrencyPrecision: number;
		/** Symbol for the transaction currency. */
		CurrencySymbol: string;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Exchange rate between the transaction currency and the base currency. */
		ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** ISO currency code for the transaction currency. */
		ISOCurrencyCode: string;
		/** Unique identifier of the user who last modified the transaction currency. */
		readonly ModifiedBy: string;
		/** Date and time when the transaction currency was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the transactioncurrency. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the transaction currency. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the transaction currency. */
		StateCode: OptionSet.TransactionCurrency.StateCode;
		/** Reason for the status of the transaction currency. */
		StatusCode: OptionSet.TransactionCurrency.StatusCode;
		/** Unique identifier of the transaction currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		readonly UniqueDscId: string;
		/** Version number of the transaction currency. */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
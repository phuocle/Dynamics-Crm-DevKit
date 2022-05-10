//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDiscount_Information {
		interface tab_general_Sections {
			discount_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Amount of the discount, specified either as a percentage or as a monetary amount. */
			Amount: DevKit.Controls.Money;
			/** Unique identifier of the discount list associated with the discount. */
			DiscountTypeId: DevKit.Controls.Lookup;
			/** Upper boundary for the quantity range to which a particular discount can be applied. */
			HighQuantity: DevKit.Controls.Decimal;
			/** Lower boundary for the quantity range to which a particular discount is applied. */
			LowQuantity: DevKit.Controls.Decimal;
			/** Percentage discount value. */
			Percentage: DevKit.Controls.Decimal;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormDiscount_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Discount_Information */
		Body: DevKit.FormDiscount_Information.Body;
		/** The Process of form Discount_Information */
		Process: DevKit.FormDiscount_Information.Process;
		/** The SidePanes of form Discount_Information */
		SidePanes: DevKit.SidePanes;
	}
	class DiscountApi {
		/**
		* DynamicsCrm.DevKit DiscountApi
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
		/** Amount of the discount, specified either as a percentage or as a monetary amount. */
		Amount: number;
		/** Value of the Amount in base currency. */
		readonly Amount_Base: number;
		/** Unique identifier of the user who created the discount. */
		readonly CreatedBy: string;
		/** Date and time when the discount was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the discount. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the discount. */
		DiscountId: string;
		/** Unique identifier of the discount list associated with the discount. */
		DiscountTypeId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Upper boundary for the quantity range to which a particular discount can be applied. */
		HighQuantity: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Specifies whether the discount is specified as a monetary amount or a percentage. */
		readonly IsAmountType: boolean;
		/** Lower boundary for the quantity range to which a particular discount is applied. */
		LowQuantity: number;
		/** Unique identifier of the user who last modified the discount. */
		readonly ModifiedBy: string;
		/** Date and time when the discount was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the discount. */
		readonly ModifiedOnBehalfBy: string;
		/** name */
		Name: string;
		/** Unique identifier of the organization associated with the discount. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Percentage discount value. */
		Percentage: number;
		/** Select the discount's status. */
		StatusCode: OptionSet.Discount.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Amount of the discount, specified either as a percentage or as a monetary amount. */
			readonly Amount: string;
			/** Value of the Amount in base currency. */
			readonly Amount_Base: string;
			/** Unique identifier of the user who created the discount. */
			readonly CreatedBy: string;
			/** Date and time when the discount was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the discount. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the discount. */
			readonly DiscountId: string;
			/** Unique identifier of the discount list associated with the discount. */
			readonly DiscountTypeId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Upper boundary for the quantity range to which a particular discount can be applied. */
			readonly HighQuantity: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Specifies whether the discount is specified as a monetary amount or a percentage. */
			readonly IsAmountType: string;
			/** Lower boundary for the quantity range to which a particular discount is applied. */
			readonly LowQuantity: string;
			/** Unique identifier of the user who last modified the discount. */
			readonly ModifiedBy: string;
			/** Date and time when the discount was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the discount. */
			readonly ModifiedOnBehalfBy: string;
			/** name */
			readonly Name: string;
			/** Unique identifier of the organization associated with the discount. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Percentage discount value. */
			readonly Percentage: string;
			/** Select the discount's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Discount {
		enum StatusCode {
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
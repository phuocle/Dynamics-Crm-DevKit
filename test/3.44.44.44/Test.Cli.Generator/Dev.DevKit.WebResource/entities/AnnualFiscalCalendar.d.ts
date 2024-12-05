//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AnnualFiscalCalendarApi {
		/**
		* DynamicsCrm.DevKit AnnualFiscalCalendarApi
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
		readonly BusinessUnitId: string;
		/** Unique identifier of the user who created the quota for the annual fiscal calendar. */
		readonly CreatedBy: string;
		/** Date and time when the quota for the annual fiscal calendar was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the annualfiscalcalendar. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the fiscal calendar sales quota takes effect. */
		EffectiveOn_UtcDateOnly: Date;
		/** Exchange rate for the currency associated with the annual fiscal calendar with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Type of fiscal period used in the sales quota. */
		readonly FiscalPeriodType: number;
		/** Unique identifier of the user who last modified the quota for the annual fiscal calendar. */
		readonly ModifiedBy: string;
		/** Date and time when the annual fiscal calendar was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the annualfiscalcalendar. */
		readonly ModifiedOnBehalfBy: string;
		/** Sales quota for the first period in the fiscal year. */
		Period1: number;
		/** Base currency equivalent of the sales quota for the first period in the fiscal year. */
		readonly Period1_Base: number;
		/** Unique identifier of the sales person associated with the sales quota. */
		SalesPersonId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the annual fiscal calendar. */
		TransactionCurrencyId: string;
		/** Unique identifier of the user associated with the annual fiscal calendar. */
		UserFiscalCalendarId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			readonly BusinessUnitId: string;
			/** Unique identifier of the user who created the quota for the annual fiscal calendar. */
			readonly CreatedBy: string;
			/** Date and time when the quota for the annual fiscal calendar was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the annualfiscalcalendar. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the fiscal calendar sales quota takes effect. */
			readonly EffectiveOn_UtcDateOnly: string;
			/** Exchange rate for the currency associated with the annual fiscal calendar with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Type of fiscal period used in the sales quota. */
			readonly FiscalPeriodType: string;
			/** Unique identifier of the user who last modified the quota for the annual fiscal calendar. */
			readonly ModifiedBy: string;
			/** Date and time when the annual fiscal calendar was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the annualfiscalcalendar. */
			readonly ModifiedOnBehalfBy: string;
			/** Sales quota for the first period in the fiscal year. */
			readonly Period1: string;
			/** Base currency equivalent of the sales quota for the first period in the fiscal year. */
			readonly Period1_Base: string;
			/** Unique identifier of the sales person associated with the sales quota. */
			readonly SalesPersonId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the annual fiscal calendar. */
			readonly TransactionCurrencyId: string;
			/** Unique identifier of the user associated with the annual fiscal calendar. */
			readonly UserFiscalCalendarId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace AnnualFiscalCalendar {
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
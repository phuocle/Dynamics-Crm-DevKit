//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class QuarterlyFiscalCalendarApi {
		/**
		* DynamicsCrm.DevKit QuarterlyFiscalCalendarApi
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
		BusinessUnitId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who created the quarterly fiscal calendar. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the quota for the quarterly fiscal calendar was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the quarterlyfiscalcalendar. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the quarterly fiscal calendar sales quota takes effect. */
		EffectiveOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Exchange rate for the currency associated with the quarterly fiscal calendar with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type of fiscal period used in the sales quota. */
		FiscalPeriodType: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the user who last modified the quarterly fiscal calendar. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the quarterly fiscal calendar was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the quarterlyfiscalcalendar. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sales quota for the first quarter in the fiscal year. */
		Period1: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the first quarter in the fiscal year. */
		Period1_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the fourth quarter in the fiscal year. */
		Period10: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the fourth quarter in the fiscal year. */
		Period10_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the second quarter in the fiscal year. */
		Period4: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the second quarter in the fiscal year */
		Period4_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Sales quota for the third quarter in the fiscal year. */
		Period7: DevKit.WebApi.MoneyValue;
		/** Base currency equivalent of the sales quota for the third quarter in the fiscal year. */
		Period7_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Unique identifier of the associated salesperson. */
		SalesPersonId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the quarterly fiscal calendar. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the quarterly fiscal calendar. */
		UserFiscalCalendarId: DevKit.WebApi.GuidValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace QuarterlyFiscalCalendar {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
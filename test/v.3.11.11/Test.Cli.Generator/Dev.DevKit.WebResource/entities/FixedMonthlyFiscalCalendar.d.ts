//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class FixedMonthlyFiscalCalendarApi {
		/**
		* DynamicsCrm.DevKit FixedMonthlyFiscalCalendarApi
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
		/** Business unit responsible for the quota associated with this calendar. */
		readonly BusinessUnitId: string;
		/** Unique identifier of the user who created the fiscal calendar. */
		readonly CreatedBy: string;
		/** Date and time when the quota for the fixed monthly fiscal calendar was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the fixedmonthlyfiscalcalendar. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the fixed monthly fiscal calendar sales quota takes effect. */
		EffectiveOn_UtcDateOnly: Date;
		/** Exchange rate for the currency associated with the fixed monthly fiscal calendar with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Type of fiscal period used in the fixed monthly fiscal calendar sales quota. */
		readonly FiscalPeriodType: number;
		/** Unique identifier of the user who last modified the fixed monthly fiscal calendar. */
		readonly ModifiedBy: string;
		/** Date and time when the fixed monthly fiscal calendar was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the fixedmonthlyfiscalcalendar. */
		readonly ModifiedOnBehalfBy: string;
		/** Sales quota for the first period in the fiscal year. */
		Period1: number;
		/** Base currency equivalent of the sales quota for the first period in the fiscal year. */
		readonly Period1_Base: number;
		/** Sales quota for the tenth period in the fiscal year. */
		Period10: number;
		/** Base currency equivalent of the sales quota for the tenth period in the fiscal year. */
		readonly Period10_Base: number;
		/** Sales quota for the eleventh period in the fiscal year. */
		Period11: number;
		/** Base currency equivalent of the sales quota for the eleventh period in the fiscal year. */
		readonly Period11_Base: number;
		/** Sales quota for the twelfth period in the fiscal year. */
		Period12: number;
		/** Base currency equivalent of the sales quota for the twelfth period in the fiscal year. */
		readonly Period12_Base: number;
		/** Sales quota for the thirteenth period in the fiscal year. */
		Period13: number;
		/** Base currency equivalent of the sales quota for the thirteenth period in the fiscal year. */
		readonly Period13_Base: number;
		/** Sales quota for the second period in the fiscal year. */
		Period2: number;
		/** Base currency equivalent of the sales quota for the second period in the fiscal year. */
		readonly Period2_Base: number;
		/** Sales quota for the third period in the fiscal year. */
		Period3: number;
		/** Base currency equivalent of the sales quota for the third period in the fiscal year. */
		readonly Period3_Base: number;
		/** Sales quota for the fourth period in the fiscal year. */
		Period4: number;
		/** Base currency equivalent of the sales quota for the fourth period in the fiscal year. */
		readonly Period4_Base: number;
		/** Sales quota for the fifth period in the fiscal year. */
		Period5: number;
		/** Base currency equivalent of the sales quota for the fifth period in the fiscal year. */
		readonly Period5_Base: number;
		/** Sales quota for the sixth period in the fiscal year. */
		Period6: number;
		/** Base currency equivalent of the sales quota for the sixth period in the fiscal year. */
		readonly Period6_Base: number;
		/** Sales quota for the seventh period in the fiscal year. */
		Period7: number;
		/** Base currency equivalent of the sales quota for the seventh period in the fiscal year. */
		readonly Period7_Base: number;
		/** Sales quota for the eighth period in the fiscal year. */
		Period8: number;
		/** Base currency equivalent of the sales quota for the eighth period in the fiscal year. */
		readonly Period8_Base: number;
		/** Sales quota for the ninth period in the fiscal year. */
		Period9: number;
		/** Base currency equivalent of the sales quota for the ninth period in the fiscal year. */
		readonly Period9_Base: number;
		/** Unique identifier of the associated salesperson. */
		SalesPersonId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the fixed monthly fiscal calendar. */
		TransactionCurrencyId: string;
		/** Unique identifier of the user of the fiscal calendar. */
		UserFiscalCalendarId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Business unit responsible for the quota associated with this calendar. */
			readonly BusinessUnitId: string;
			/** Unique identifier of the user who created the fiscal calendar. */
			readonly CreatedBy: string;
			/** Date and time when the quota for the fixed monthly fiscal calendar was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the fixedmonthlyfiscalcalendar. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the fixed monthly fiscal calendar sales quota takes effect. */
			readonly EffectiveOn_UtcDateOnly: string;
			/** Exchange rate for the currency associated with the fixed monthly fiscal calendar with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Type of fiscal period used in the fixed monthly fiscal calendar sales quota. */
			readonly FiscalPeriodType: string;
			/** Unique identifier of the user who last modified the fixed monthly fiscal calendar. */
			readonly ModifiedBy: string;
			/** Date and time when the fixed monthly fiscal calendar was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the fixedmonthlyfiscalcalendar. */
			readonly ModifiedOnBehalfBy: string;
			/** Sales quota for the first period in the fiscal year. */
			readonly Period1: string;
			/** Base currency equivalent of the sales quota for the first period in the fiscal year. */
			readonly Period1_Base: string;
			/** Sales quota for the tenth period in the fiscal year. */
			readonly Period10: string;
			/** Base currency equivalent of the sales quota for the tenth period in the fiscal year. */
			readonly Period10_Base: string;
			/** Sales quota for the eleventh period in the fiscal year. */
			readonly Period11: string;
			/** Base currency equivalent of the sales quota for the eleventh period in the fiscal year. */
			readonly Period11_Base: string;
			/** Sales quota for the twelfth period in the fiscal year. */
			readonly Period12: string;
			/** Base currency equivalent of the sales quota for the twelfth period in the fiscal year. */
			readonly Period12_Base: string;
			/** Sales quota for the thirteenth period in the fiscal year. */
			readonly Period13: string;
			/** Base currency equivalent of the sales quota for the thirteenth period in the fiscal year. */
			readonly Period13_Base: string;
			/** Sales quota for the second period in the fiscal year. */
			readonly Period2: string;
			/** Base currency equivalent of the sales quota for the second period in the fiscal year. */
			readonly Period2_Base: string;
			/** Sales quota for the third period in the fiscal year. */
			readonly Period3: string;
			/** Base currency equivalent of the sales quota for the third period in the fiscal year. */
			readonly Period3_Base: string;
			/** Sales quota for the fourth period in the fiscal year. */
			readonly Period4: string;
			/** Base currency equivalent of the sales quota for the fourth period in the fiscal year. */
			readonly Period4_Base: string;
			/** Sales quota for the fifth period in the fiscal year. */
			readonly Period5: string;
			/** Base currency equivalent of the sales quota for the fifth period in the fiscal year. */
			readonly Period5_Base: string;
			/** Sales quota for the sixth period in the fiscal year. */
			readonly Period6: string;
			/** Base currency equivalent of the sales quota for the sixth period in the fiscal year. */
			readonly Period6_Base: string;
			/** Sales quota for the seventh period in the fiscal year. */
			readonly Period7: string;
			/** Base currency equivalent of the sales quota for the seventh period in the fiscal year. */
			readonly Period7_Base: string;
			/** Sales quota for the eighth period in the fiscal year. */
			readonly Period8: string;
			/** Base currency equivalent of the sales quota for the eighth period in the fiscal year. */
			readonly Period8_Base: string;
			/** Sales quota for the ninth period in the fiscal year. */
			readonly Period9: string;
			/** Base currency equivalent of the sales quota for the ninth period in the fiscal year. */
			readonly Period9_Base: string;
			/** Unique identifier of the associated salesperson. */
			readonly SalesPersonId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the fixed monthly fiscal calendar. */
			readonly TransactionCurrencyId: string;
			/** Unique identifier of the user of the fiscal calendar. */
			readonly UserFiscalCalendarId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace FixedMonthlyFiscalCalendar {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
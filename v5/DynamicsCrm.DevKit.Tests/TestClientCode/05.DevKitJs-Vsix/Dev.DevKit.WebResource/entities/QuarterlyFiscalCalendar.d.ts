//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class QuarterlyFiscalCalendarApi {
		/**
		* DynamicsCrm.DevKit QuarterlyFiscalCalendarApi
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
		readonly BusinessUnitId: string | null;
		/** Unique identifier of the user who created the quarterly fiscal calendar. */
		readonly CreatedBy: string | null;
		/** Date and time when the quota for the quarterly fiscal calendar was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the quarterlyfiscalcalendar. */
		readonly CreatedOnBehalfBy: string | null;
		/** Date and time when the quarterly fiscal calendar sales quota takes effect. */
		EffectiveOn_UtcDateOnly: Date | null;
		/** Exchange rate for the currency associated with the quarterly fiscal calendar with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Type of fiscal period used in the sales quota. */
		readonly FiscalPeriodType: number | null;
		/** Unique identifier of the user who last modified the quarterly fiscal calendar. */
		readonly ModifiedBy: string | null;
		/** Date and time when the quarterly fiscal calendar was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the quarterlyfiscalcalendar. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Sales quota for the first quarter in the fiscal year. */
		Period1: number | null;
		/** Base currency equivalent of the sales quota for the first quarter in the fiscal year. */
		readonly Period1_Base: number | null;
		/** Sales quota for the fourth quarter in the fiscal year. */
		Period10: number | null;
		/** Base currency equivalent of the sales quota for the fourth quarter in the fiscal year. */
		readonly Period10_Base: number | null;
		/** Sales quota for the second quarter in the fiscal year. */
		Period4: number | null;
		/** Base currency equivalent of the sales quota for the second quarter in the fiscal year */
		readonly Period4_Base: number | null;
		/** Sales quota for the third quarter in the fiscal year. */
		Period7: number | null;
		/** Base currency equivalent of the sales quota for the third quarter in the fiscal year. */
		readonly Period7_Base: number | null;
		/** Unique identifier of the associated salesperson. */
		SalesPersonId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Unique identifier of the currency associated with the quarterly fiscal calendar. */
		TransactionCurrencyId: string | null;
		/** Unique identifier of the quarterly fiscal calendar. */
		UserFiscalCalendarId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly BusinessUnitId: string;
			/** Unique identifier of the user who created the quarterly fiscal calendar. */
			readonly CreatedBy: string;
			/** Date and time when the quota for the quarterly fiscal calendar was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the quarterlyfiscalcalendar. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the quarterly fiscal calendar sales quota takes effect. */
			readonly EffectiveOn_UtcDateOnly: string;
			/** Exchange rate for the currency associated with the quarterly fiscal calendar with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Type of fiscal period used in the sales quota. */
			readonly FiscalPeriodType: string;
			/** Unique identifier of the user who last modified the quarterly fiscal calendar. */
			readonly ModifiedBy: string;
			/** Date and time when the quarterly fiscal calendar was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the quarterlyfiscalcalendar. */
			readonly ModifiedOnBehalfBy: string;
			/** Sales quota for the first quarter in the fiscal year. */
			readonly Period1: string;
			/** Base currency equivalent of the sales quota for the first quarter in the fiscal year. */
			readonly Period1_Base: string;
			/** Sales quota for the fourth quarter in the fiscal year. */
			readonly Period10: string;
			/** Base currency equivalent of the sales quota for the fourth quarter in the fiscal year. */
			readonly Period10_Base: string;
			/** Sales quota for the second quarter in the fiscal year. */
			readonly Period4: string;
			/** Base currency equivalent of the sales quota for the second quarter in the fiscal year */
			readonly Period4_Base: string;
			/** Sales quota for the third quarter in the fiscal year. */
			readonly Period7: string;
			/** Base currency equivalent of the sales quota for the third quarter in the fiscal year. */
			readonly Period7_Base: string;
			/** Unique identifier of the associated salesperson. */
			readonly SalesPersonId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the quarterly fiscal calendar. */
			readonly TransactionCurrencyId: string;
			/** Unique identifier of the quarterly fiscal calendar. */
			readonly UserFiscalCalendarId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace QuarterlyFiscalCalendar {
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
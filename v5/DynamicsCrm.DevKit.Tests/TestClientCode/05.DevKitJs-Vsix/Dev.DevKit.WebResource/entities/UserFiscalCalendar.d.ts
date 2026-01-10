//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class UserFiscalCalendarApi {
		/**
		* DynamicsCrm.DevKit UserFiscalCalendarApi
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
		/** Unique identifier of the business unit with which the user fiscal calendar is associated. */
		readonly BusinessUnitId: string | null;
		/** Unique identifier of the user who created the fiscal calendar. */
		readonly CreatedBy: string | null;
		/** Date and time when the fiscal calendar was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the userfiscalcalendar. */
		readonly CreatedOnBehalfBy: string | null;
		/** Date and time when the fiscal calendar takes effect. */
		EffectiveOn_UtcDateOnly: Date | null;
		/** Exchange rate for the currency associated with the user fiscal calendar with respect to the base currency. */
		readonly ExchangeRate: number | null;
		/** Type of fiscal period used in the fiscal calendar. */
		readonly FiscalPeriodType: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who last modified the fiscal calendar. */
		readonly ModifiedBy: string | null;
		/** Date and time when the fiscal calendar was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the userfiscalcalendar. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Sales quota for the first period in the fiscal year. */
		Period1: number | null;
		/** Base currency equivalent of the sales quota for the first period in the fiscal year. */
		readonly Period1_Base: number | null;
		/** Sales quota for the tenth period in the fiscal year. */
		Period10: number | null;
		/** Base currency equivalent of the sales quota for the tenth period in the fiscal year. */
		readonly Period10_Base: number | null;
		/** Sales quota for the eleventh period in the fiscal year. */
		Period11: number | null;
		/** Base currency equivalent of the sales quota for the eleventh period in the fiscal year. */
		readonly Period11_Base: number | null;
		/** Sales quota for the twelfth period in the fiscal year. */
		Period12: number | null;
		/** Base currency equivalent of the sales quota for the twelfth period in the fiscal year. */
		readonly Period12_Base: number | null;
		/** Sales quota for the thirteenth period in the fiscal year. */
		Period13: number | null;
		/** Base currency equivalent of the sales quota for the thirteenth period in the fiscal year. */
		readonly Period13_Base: number | null;
		/** Sales quota for the second period in the fiscal year. */
		Period2: number | null;
		/** Base currency equivalent of the sales quota for the second period in the fiscal year. */
		readonly Period2_Base: number | null;
		/** Sales quota for the third period in the fiscal year. */
		Period3: number | null;
		/** Base currency equivalent of the sales quota for the third period in the fiscal year. */
		readonly Period3_Base: number | null;
		/** Sales quota for the fourth period in the fiscal year. */
		Period4: number | null;
		/** Base currency equivalent of the sales quota for the fourth period in the fiscal year. */
		readonly Period4_Base: number | null;
		/** Sales quota for the fifth period in the fiscal year. */
		Period5: number | null;
		/** Base currency equivalent of the sales quota for the fifth period in the fiscal year. */
		readonly Period5_Base: number | null;
		/** Sales quota for the sixth period in the fiscal year. */
		Period6: number | null;
		/** Base currency equivalent of the sales quota for the sixth period in the fiscal year. */
		readonly Period6_Base: number | null;
		/** Sales quota for the seventh period in the fiscal year. */
		Period7: number | null;
		/** Base currency equivalent of the sales quota for the seventh period in the fiscal year. */
		readonly Period7_Base: number | null;
		/** Sales quota for the eighth period in the fiscal year. */
		Period8: number | null;
		/** Base currency equivalent of the sales quota for the eighth period in the fiscal year. */
		readonly Period8_Base: number | null;
		/** Sales quota for the ninth period in the fiscal year. */
		Period9: number | null;
		/** Base currency equivalent of the sales quota for the ninth period in the fiscal year. */
		readonly Period9_Base: number | null;
		/** Unique identifier of the salesperson to whom the fiscal calendar is assigned. */
		SalesPersonId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Unique identifier of the currency associated with the user fiscal calendar. */
		TransactionCurrencyId: string | null;
		/** Unique identifier for the fiscal calendar. */
		UserFiscalCalendarId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the business unit with which the user fiscal calendar is associated. */
			readonly BusinessUnitId: string;
			/** Unique identifier of the user who created the fiscal calendar. */
			readonly CreatedBy: string;
			/** Date and time when the fiscal calendar was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the userfiscalcalendar. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the fiscal calendar takes effect. */
			readonly EffectiveOn_UtcDateOnly: string;
			/** Exchange rate for the currency associated with the user fiscal calendar with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Type of fiscal period used in the fiscal calendar. */
			readonly FiscalPeriodType: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who last modified the fiscal calendar. */
			readonly ModifiedBy: string;
			/** Date and time when the fiscal calendar was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the userfiscalcalendar. */
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
			/** Unique identifier of the salesperson to whom the fiscal calendar is assigned. */
			readonly SalesPersonId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the user fiscal calendar. */
			readonly TransactionCurrencyId: string;
			/** Unique identifier for the fiscal calendar. */
			readonly UserFiscalCalendarId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserFiscalCalendar {
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
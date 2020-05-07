//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	class msdyn_invoicefrequencyApi {
		/**
		* DynamicsCrm.DevKit msdyn_invoicefrequencyApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Describes how the run days per period interval are setup. As weekdays (Monday, Tuesday...) or day of period (1st, 2nd…)  */
		msdyn_daysofrun: DevKit.WebApi.OptionSetValue;
		/** Shows the entity instances. */
		msdyn_invoicefrequencyId: DevKit.WebApi.GuidValue;
		/** Type the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Select the period used for the setup of invoice frequency: supported values are Monthly, Weekly or Bi Weekly. */
		msdyn_period: DevKit.WebApi.OptionSetValue;
		/** Select the number of times invoicing should run in a period. */
		msdyn_runspermonth: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Invoice Frequency */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Invoice Frequency */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_invoicefrequency {
		enum msdyn_daysofrun {
			/** 192350000 */
			Day_of_period,
			/** 192350001 */
			Weekday_of_period
		}
		enum msdyn_period {
			/** 192350000 */
			Weekly,
			/** 192350001 */
			Monthly,
			/** 192350002 */
			Biweekly
		}
		enum msdyn_runspermonth {
			/** 1 */
			_1,
			/** 2 */
			_2,
			/** 3 */
			_3,
			/** 4 */
			_4
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
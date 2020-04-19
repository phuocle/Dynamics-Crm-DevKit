//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
//{'JsForm':[],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}
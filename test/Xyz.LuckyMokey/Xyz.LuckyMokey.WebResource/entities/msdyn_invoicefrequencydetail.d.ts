﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
}
declare namespace OptionSet {
	namespace msdyn_invoicefrequencydetail {
		enum msdyn_dayofmonth {
			/** 192350001 */
			_1,
			/** 192350002 */
			_2,
			/** 192350003 */
			_3,
			/** 192350004 */
			_4,
			/** 192350005 */
			_5,
			/** 192350006 */
			_6,
			/** 192350007 */
			_7,
			/** 192350008 */
			_8,
			/** 192350009 */
			_9,
			/** 192350010 */
			_10,
			/** 192350011 */
			_11,
			/** 192350012 */
			_12,
			/** 192350013 */
			_13,
			/** 192350014 */
			_14,
			/** 192350015 */
			_15,
			/** 192350016 */
			_16,
			/** 192350017 */
			_17,
			/** 192350018 */
			_18,
			/** 192350019 */
			_19,
			/** 192350020 */
			_20,
			/** 192350021 */
			_21,
			/** 192350022 */
			_22,
			/** 192350023 */
			_23,
			/** 192350024 */
			_24,
			/** 192350025 */
			_25,
			/** 192350026 */
			_26,
			/** 192350027 */
			_27,
			/** 192350028 */
			_28,
			/** 192350029 */
			_29,
			/** 192350030 */
			_30,
			/** 192350031 */
			_31
		}
		enum msdyn_occurrenceofweekday {
			/** 192350000 */
			First,
			/** 192350001 */
			Second,
			/** 192350002 */
			Third,
			/** 192350003 */
			Fourth,
			/** 192350004 */
			Last
		}
		enum msdyn_weekday {
			/** 192350000 */
			Sunday,
			/** 192350001 */
			Monday,
			/** 192350002 */
			Tuesday,
			/** 192350003 */
			Wednesday,
			/** 192350004 */
			Thursday,
			/** 192350005 */
			Friday,
			/** 192350006 */
			Saturday
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
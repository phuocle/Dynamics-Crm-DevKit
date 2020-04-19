//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
}
declare namespace OptionSet {
	namespace adobe_agreementtemplate {
		enum adobe_automaticreminder {
			/** 648770000 */
			Never,
			/** 648770001 */
			Every_Day_Until_Signed,
			/** 648770002 */
			Every_Week_Until_Signed
		}
		enum adobe_identityverification {
			/** 648770003 */
			EMAIL,
			/** 648770004 */
			PHONE,
			/** 648770000 */
			PASSWORD,
			/** 648770001 */
			KNOWLEDGE_BASE,
			/** 648770002 */
			WEB_IDENTITY
		}
		enum adobe_sendersigningoptions {
			/** 648770000 */
			I_sign_first,
			/** 648770001 */
			I_sign_last,
			/** 648770002 */
			Only_I_sign
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
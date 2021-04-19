//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_personalmessage_Information {
		interface Tabs {
		}
		interface Body {
			/** Locale */
			msdyn_locale_field: DevKit.Controls.OptionSet;
			/** Message */
			msdyn_message: DevKit.Controls.String;
			msdyn_tagscontrolfield: DevKit.Controls.ActionCards;
		}
	}
	class Formmsdyn_personalmessage_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_personalmessage_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_personalmessage_Information */
		Body: MyDog.Formmsdyn_personalmessage_Information.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_personalmessage {
		enum msdyn_locale_field {
			/** 1025 */
			ar_SA,
			/** 1029 */
			cs_CZ,
			/** 1030 */
			da_DK,
			/** 1031 */
			de_DE,
			/** 1033 */
			en_US,
			/** 3082 */
			es_ES,
			/** 1035 */
			fi_FI,
			/** 1036 */
			fr_FR,
			/** 1037 */
			he_IL,
			/** 1057 */
			id_ID,
			/** 1040 */
			it_IT,
			/** 1041 */
			ja_JP,
			/** 1042 */
			ko_KR,
			/** 1044 */
			nb_NO,
			/** 1043 */
			nl_NL,
			/** 1045 */
			pl_PL,
			/** 1046 */
			pt_BR,
			/** 2070 */
			pt_PT,
			/** 1048 */
			ro_RO,
			/** 1049 */
			ru_RU,
			/** 1053 */
			sv_SE,
			/** 1054 */
			th_TH,
			/** 1055 */
			tr_TR,
			/** 2052 */
			zh_CN
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
//{'JsForm':['Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}
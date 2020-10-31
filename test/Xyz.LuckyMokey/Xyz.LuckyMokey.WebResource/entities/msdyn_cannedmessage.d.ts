//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_cannedmessage_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Locale_Field: DevKit.Form.Controls.ControlOptionSet;
			msdyn_message: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_title: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_cannedmessage_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_cannedmessage_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_cannedmessage_Information */
		Body: LuckyMokey.Formmsdyn_cannedmessage_Information.Body;
	}
	class msdyn_cannedmessageApi {
		/**
		* DynamicsCrm.DevKit msdyn_cannedmessageApi
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
		/** Unique identifier for entity instances */
		msdyn_cannedmessageId: DevKit.WebApi.GuidValue;
		msdyn_Locale_Field: DevKit.WebApi.OptionSetValue;
		msdyn_message: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_title: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Quick replies */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Quick replies */
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
	namespace msdyn_cannedmessage {
		enum msdyn_Locale_Field {
			/** 1030 */
			da_DK,
			/** 1031 */
			de_DE,
			/** 3082 */
			es_ES,
			/** 1033 */
			en_US,
			/** 1036 */
			fr_FR,
			/** 1040 */
			it_IT,
			/** 1043 */
			nl_NL,
			/** 1041 */
			ja_JP,
			/** 1044 */
			nb_NO,
			/** 1046 */
			pt_BR,
			/** 2070 */
			pt_PT,
			/** 1053 */
			sv_SE,
			/** 1025 */
			ar_SA,
			/** 2052 */
			zh_CN,
			/** 1057 */
			id_ID,
			/** 1045 */
			pl_PL,
			/** 1048 */
			ro_RO,
			/** 1049 */
			ru_RU,
			/** 1054 */
			th_TH,
			/** 1055 */
			tr_TR,
			/** 1035 */
			fi_FI,
			/** 1042 */
			ko_KR,
			/** 1029 */
			cs_CZ,
			/** 1037 */
			he_IL,
			/** 3076 */
			zh_HK,
			/** 1032 */
			el_GR,
			/** 1081 */
			hi_IN,
			/** 1050 */
			hr_HR,
			/** 1061 */
			et_EE,
			/** 1026 */
			bg_BG,
			/** 1027 */
			ca_ES,
			/** 1110 */
			gl_ES,
			/** 1038 */
			hu_HU
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
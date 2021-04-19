//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_conversationactionlocale_Information {
		interface Tabs {
		}
		interface Body {
			/** Label string for conversation action button */
			msdyn_Label: DevKit.Controls.String;
			/** Locale code for conversation action UI strings */
			msdyn_Locale_picklist: DevKit.Controls.OptionSet;
			/** Slash commad string for conversation action button */
			msdyn_SlashCommands: DevKit.Controls.String;
			/** Tooltip for Conversation Action */
			msdyn_Tooltip: DevKit.Controls.String;
		}
	}
	class Formmsdyn_conversationactionlocale_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_conversationactionlocale_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_conversationactionlocale_Information */
		Body: MyDog.Formmsdyn_conversationactionlocale_Information.Body;
	}
	class msdyn_conversationactionlocaleApi {
		/**
		* DynamicsCrm.DevKit msdyn_conversationactionlocaleApi
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
		/** Conversation action Id */
		msdyn_Conversationactionkey: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_conversationactionlocaleId: DevKit.WebApi.GuidValue;
		/** Label string for conversation action button */
		msdyn_Label: DevKit.WebApi.StringValue;
		/** Locale code for conversation action UI strings */
		msdyn_Locale_picklist: DevKit.WebApi.OptionSetValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Slash commad string for conversation action button */
		msdyn_SlashCommands: DevKit.WebApi.StringValue;
		/** Tooltip for Conversation Action */
		msdyn_Tooltip: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Conversation Action Locale */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Conversation Action Locale */
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
	namespace msdyn_conversationactionlocale {
		enum msdyn_Locale_picklist {
			/** 1025 */
			ar_SA,
			/** 1026 */
			bg_BG,
			/** 1027 */
			ca_ES,
			/** 1029 */
			cs_CZ,
			/** 1030 */
			da_DK,
			/** 1031 */
			de_DE,
			/** 1032 */
			el_GR,
			/** 1033 */
			en_US,
			/** 3082 */
			es_ES,
			/** 1061 */
			et_EE,
			/** 1069 */
			eu_ES,
			/** 1035 */
			fi_FI,
			/** 1036 */
			fr_FR,
			/** 1110 */
			gl_ES,
			/** 1037 */
			he_IL,
			/** 1081 */
			hi_IN,
			/** 1050 */
			hr_HR,
			/** 1038 */
			hu_HU,
			/** 1057 */
			id_ID,
			/** 1040 */
			it_IT,
			/** 1041 */
			ja_JP,
			/** 1087 */
			kk_KZ,
			/** 1042 */
			ko_KR,
			/** 1063 */
			lt_LT,
			/** 1062 */
			lv_LV,
			/** 1086 */
			ms_MY,
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
			/** 1051 */
			sk_SK,
			/** 1060 */
			sl_SI,
			/** 3098 */
			sr_Cyrl_CS,
			/** 2074 */
			sr_Latn_CS,
			/** 1053 */
			sv_SE,
			/** 1054 */
			th_TH,
			/** 1055 */
			tr_TR,
			/** 1058 */
			uk_UA,
			/** 1066 */
			vi_VN,
			/** 2052 */
			zh_CN,
			/** 3076 */
			zh_HK,
			/** 1028 */
			zh_TW
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
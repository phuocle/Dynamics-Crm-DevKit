//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocrichobject_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ocrichobject_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocrichobject_Information */
		Body: DevKit.Formmsdyn_ocrichobject_Information.Body;
		/** The Process of form msdyn_ocrichobject_Information */
		Process: DevKit.Formmsdyn_ocrichobject_Information.Process;
		/** The SidePanes of form msdyn_ocrichobject_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_ocrichobject_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ocrichobject_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocrichobject_Information2 */
		Body: DevKit.Formmsdyn_ocrichobject_Information2.Body;
		/** The Process of form msdyn_ocrichobject_Information2 */
		Process: DevKit.Formmsdyn_ocrichobject_Information2.Process;
		/** The SidePanes of form msdyn_ocrichobject_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocrichobjectApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocrichobjectApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Indicates if the rich message can be edited by the agent */
		msdyn_allowagenttoedit: boolean;
		/** The locale of a rich message */
		msdyn_locale: OptionSet.msdyn_ocrichobject.msdyn_locale;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Rich message json */
		msdyn_objectjson: string;
		/** Unique identifier for entity instances */
		msdyn_ocrichobjectId: string;
		/** The rich message type */
		msdyn_ocrichobjecttype: OptionSet.msdyn_ocrichobject.msdyn_ocrichobjecttype;
		/** The channel to which this rich message is attached */
		msdyn_streamsource: OptionSet.msdyn_ocrichobject.msdyn_streamsource;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Line Channel */
		statecode: OptionSet.msdyn_ocrichobject.statecode;
		/** Reason for the status of the rich message */
		statuscode: OptionSet.msdyn_ocrichobject.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Indicates if the rich message can be edited by the agent */
			readonly msdyn_allowagenttoedit: string;
			/** The locale of a rich message */
			readonly msdyn_locale: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Rich message json */
			readonly msdyn_objectjson: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocrichobjectId: string;
			/** The rich message type */
			readonly msdyn_ocrichobjecttype: string;
			/** The channel to which this rich message is attached */
			readonly msdyn_streamsource: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Line Channel */
			readonly statecode: string;
			/** Reason for the status of the rich message */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_ocrichobject {
		enum msdyn_locale {
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
		enum msdyn_ocrichobjecttype {
			/** 192350006 */
			Apple_Pay,
			/** 192350007 */
			Authentication,
			/** 192350004 */
			Custom_JSON,
			/** 192350002 */
			List_Picker,
			/** 192350005 */
			Suggested_Reply,
			/** 192350003 */
			Time_Picker,
			/** 192350001 */
			Video_Rich_Link,
			/** 192350000 */
			Website_Rich_Link
		}
		enum msdyn_streamsource {
			/** 192450000 */
			Apple_Messages_for_Business,
			/** 192390000 */
			Co_browse,
			/** 192350002 */
			Custom,
			/** 192350000 */
			Entity_Records,
			/** 192330000 */
			Facebook,
			/** 192310000 */
			LINE,
			/** 192360000 */
			Live_chat,
			/** 19241000 */
			Microsoft_Teams,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192350001 */
			Twitter,
			/** 192380000 */
			Video,
			/** 192370000 */
			Voice,
			/** 192320000 */
			WeChat,
			/** 192300000 */
			WhatsApp
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
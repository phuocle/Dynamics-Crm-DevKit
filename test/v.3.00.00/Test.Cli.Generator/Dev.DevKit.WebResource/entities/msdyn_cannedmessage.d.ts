//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_cannedmessage_Information {
		interface tab__93219A9C_5501_404F_BC31_C01C9CDA0F86_Sections {
			_93219A9C_5501_404F_BC31_C01C9CDA0F86_SECTION_2: DevKit.Controls.Section;
			_CEB1071D_14DC_4DC3_A647_260E616D2FEC: DevKit.Controls.Section;
		}
		interface tab__93219A9C_5501_404F_BC31_C01C9CDA0F86 extends DevKit.Controls.ITab {
			Section: tab__93219A9C_5501_404F_BC31_C01C9CDA0F86_Sections;
		}
		interface Tabs {
			_93219A9C_5501_404F_BC31_C01C9CDA0F86: tab__93219A9C_5501_404F_BC31_C01C9CDA0F86;
		}
		interface Body {
			Tab: Tabs;
			/** The locale of a canned message */
			msdyn_Locale_Field: DevKit.Controls.OptionSet;
			/** Canned message text */
			msdyn_message: DevKit.Controls.String;
			/** Dummy field to render the tags control */
			msdyn_tagscontrolfield: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_title: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			workstreams: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_cannedmessage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_cannedmessage_Information */
		Body: DevKit.Formmsdyn_cannedmessage_Information.Body;
		/** The Process of form msdyn_cannedmessage_Information */
		Process: DevKit.Formmsdyn_cannedmessage_Information.Process;
		/** The Grid of form msdyn_cannedmessage_Information */
		Grid: DevKit.Formmsdyn_cannedmessage_Information.Grid;
		/** The SidePanes of form msdyn_cannedmessage_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Unique identifier for entity instances */
		msdyn_cannedmessageId: string;
		/** The locale of a canned message */
		msdyn_Locale_Field: OptionSet.msdyn_cannedmessage.msdyn_Locale_Field;
		/** Canned message text */
		msdyn_message: string;
		/** Dummy field to render the tags control */
		msdyn_tagscontrolfield: string;
		/** The name of the custom entity. */
		msdyn_title: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Quick replies */
		statecode: OptionSet.msdyn_cannedmessage.statecode;
		/** Reason for the status of the Quick replies */
		statuscode: OptionSet.msdyn_cannedmessage.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msdyn_cannedmessageId: string;
			/** The locale of a canned message */
			readonly msdyn_Locale_Field: string;
			/** Canned message text */
			readonly msdyn_message: string;
			/** Dummy field to render the tags control */
			readonly msdyn_tagscontrolfield: string;
			/** The name of the custom entity. */
			readonly msdyn_title: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Quick replies */
			readonly statecode: string;
			/** Reason for the status of the Quick replies */
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
	namespace msdyn_cannedmessage {
		enum msdyn_Locale_Field {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
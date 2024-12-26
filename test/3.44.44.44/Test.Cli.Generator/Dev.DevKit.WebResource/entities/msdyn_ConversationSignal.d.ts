//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ConversationSignal_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_conversationsegmentsentiment_msdyn_conversationsignal_msdyn_SentimentTarget: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ConversationSignal_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ConversationSignal_Information */
		Body: DevKit.Formmsdyn_ConversationSignal_Information.Body;
		/** The Navigation of form msdyn_ConversationSignal_Information */
		Navigation: DevKit.Formmsdyn_ConversationSignal_Information.Navigation;
		/** The SidePanes of form msdyn_ConversationSignal_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ConversationSignalApi {
		/**
		* DynamicsCrm.DevKit msdyn_ConversationSignalApi
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
		msdyn_ActualText: string;
		msdyn_Confidence: number;
		msdyn_ConversationParticipantInsights: string;
		/** Unique identifier for entity instances */
		msdyn_ConversationSignalId: string;
		msdyn_DurationInMS: number;
		msdyn_FragmentEnd: number;
		msdyn_FragmentStart: number;
		msdyn_Locale: OptionSet.msdyn_ConversationSignal.msdyn_Locale;
		msdyn_Name: string;
		msdyn_OffsetInMS: number;
		msdyn_Text: string;
		msdyn_Type: string;
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
		/** Status of the Conversation Signal */
		statecode: OptionSet.msdyn_ConversationSignal.statecode;
		/** Reason for the status of the Conversation Signal */
		statuscode: OptionSet.msdyn_ConversationSignal.statuscode;
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
			readonly msdyn_ActualText: string;
			readonly msdyn_Confidence: string;
			readonly msdyn_ConversationParticipantInsights: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ConversationSignalId: string;
			readonly msdyn_DurationInMS: string;
			readonly msdyn_FragmentEnd: string;
			readonly msdyn_FragmentStart: string;
			readonly msdyn_Locale: string;
			readonly msdyn_Name: string;
			readonly msdyn_OffsetInMS: string;
			readonly msdyn_Text: string;
			readonly msdyn_Type: string;
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
			/** Status of the Conversation Signal */
			readonly statecode: string;
			/** Reason for the status of the Conversation Signal */
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
	namespace msdyn_ConversationSignal {
		enum msdyn_Locale {
			/** 140 */
			ar_ae,
			/** 150 */
			ar_bh,
			/** 160 */
			ar_eg,
			/** 170 */
			ar_iq,
			/** 180 */
			ar_jo,
			/** 190 */
			ar_kw,
			/** 200 */
			ar_lb,
			/** 210 */
			ar_om,
			/** 220 */
			ar_qa,
			/** 230 */
			ar_sa,
			/** 240 */
			ar_sy,
			/** 260 */
			da_dk,
			/** 20 */
			de_de,
			/** 10 */
			en_gb,
			/** 0 */
			en_us,
			/** 50 */
			es_es,
			/** 60 */
			es_mx,
			/** 280 */
			fi_fi,
			/** 120 */
			fr_ca,
			/** 30 */
			fr_fr,
			/** 250 */
			he_il,
			/** 40 */
			it_it,
			/** 70 */
			ja_jp,
			/** 290 */
			nb_no,
			/** 110 */
			nl_nl,
			/** 80 */
			pt_br,
			/** 130 */
			pt_pt,
			/** 270 */
			sv_se,
			/** 90 */
			zh_cn
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
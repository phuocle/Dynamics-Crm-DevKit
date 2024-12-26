//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_reaction_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_reaction_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_reaction_Information */
		Body: DevKit.Formmsdyncrm_reaction_Information.Body;
		/** The Navigation of form msdyncrm_reaction_Information */
		Navigation: DevKit.Formmsdyncrm_reaction_Information.Navigation;
		/** The SidePanes of form msdyncrm_reaction_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_reactionApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_reactionApi
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
		msdyncrm_attachment01: string;
		msdyncrm_attachment02: string;
		msdyncrm_attachment03: string;
		msdyncrm_attachment04: string;
		msdyncrm_createdonnetwork_UtcDateAndTime: Date;
		/** Like count */
		msdyncrm_likecount: number;
		msdyncrm_liketype: OptionSet.msdyncrm_reaction.msdyncrm_liketype;
		msdyncrm_longmessage: string;
		msdyncrm_message: string;
		/** The name of the custom entity. */
		msdyncrm_name: string;
		msdyncrm_networkid: string;
		msdyncrm_parentid: string;
		msdyncrm_parenttype: string;
		msdyncrm_phrases: string;
		/** Unique identifier for entity instances */
		msdyncrm_reactionId: string;
		/** Url of the comment in social network */
		msdyncrm_reactionurl: string;
		msdyncrm_sentiment: string;
		msdyncrm_sentimentscore: string;
		msdyncrm_type: OptionSet.msdyncrm_reaction.msdyncrm_type;
		msdyncrm_userid: string;
		msdyncrm_username: string;
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
		/** Status of the Reaction */
		statecode: OptionSet.msdyncrm_reaction.statecode;
		/** Reason for the status of the Reaction */
		statuscode: OptionSet.msdyncrm_reaction.statuscode;
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
			readonly msdyncrm_attachment01: string;
			readonly msdyncrm_attachment02: string;
			readonly msdyncrm_attachment03: string;
			readonly msdyncrm_attachment04: string;
			readonly msdyncrm_createdonnetwork_UtcDateAndTime: string;
			/** Like count */
			readonly msdyncrm_likecount: string;
			readonly msdyncrm_liketype: string;
			readonly msdyncrm_longmessage: string;
			readonly msdyncrm_message: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_networkid: string;
			readonly msdyncrm_parentid: string;
			readonly msdyncrm_parenttype: string;
			readonly msdyncrm_phrases: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_reactionId: string;
			/** Url of the comment in social network */
			readonly msdyncrm_reactionurl: string;
			readonly msdyncrm_sentiment: string;
			readonly msdyncrm_sentimentscore: string;
			readonly msdyncrm_type: string;
			readonly msdyncrm_userid: string;
			readonly msdyncrm_username: string;
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
			/** Status of the Reaction */
			readonly statecode: string;
			/** Reason for the status of the Reaction */
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
	namespace msdyncrm_reaction {
		enum msdyncrm_liketype {
			/** 948320005 */
			Anger,
			/** 948320006 */
			Care,
			/** 948320001 */
			Haha,
			/** 948320000 */
			Like,
			/** 948320002 */
			Love,
			/** 948320004 */
			Sad,
			/** 948320003 */
			Wow
		}
		enum msdyncrm_type {
			/** 948320001 */
			Comment,
			/** 948320000 */
			Like
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
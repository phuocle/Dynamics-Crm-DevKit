//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_mktactivity_Information {
		interface Tabs {
		}
		interface Body {
			/** The status of Marketing Activity creation */
			msdyncrm_action_status: DevKit.Controls.String;
			msdyncrm_activityadditionalparams: DevKit.Controls.String;
			msdyncrm_durationmillisecond: DevKit.Controls.Integer;
			msdyncrm_error_message: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_mktactivity_Feedback: DevKit.Controls.NavigationItem,
			msdyncrm_mktactivity_QueueItems: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_mktactivity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_mktactivity_Information */
		Body: DevKit.Formmsdyncrm_mktactivity_Information.Body;
		/** The Navigation of form msdyncrm_mktactivity_Information */
		Navigation: DevKit.Formmsdyncrm_mktactivity_Information.Navigation;
		/** The SidePanes of form msdyncrm_mktactivity_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_mktactivityApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_mktactivityApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		/** The status of Marketing Activity creation */
		msdyncrm_action_status: string;
		msdyncrm_activityadditionalparams: string;
		msdyncrm_activitytoken: string;
		msdyncrm_actualdurationminutes: number;
		msdyncrm_actualend_UtcDateOnly: Date;
		msdyncrm_actualstart_UtcDateOnly: Date;
		msdyncrm_description: string;
		msdyncrm_durationmillisecond: number;
		msdyncrm_error_message: string;
		msdyncrm_exchangerate: number;
		msdyncrm_isbilled: boolean;
		msdyncrm_ismapiprivate: boolean;
		msdyncrm_isregularactivity: boolean;
		msdyncrm_isworkflowcreated: boolean;
		/** Unique ID for entity instances */
		msdyncrm_mktactivityId: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the marketing activity */
		statecode: OptionSet.msdyncrm_mktactivity.statecode;
		/** Reason for the status of the marketing activity */
		statuscode: OptionSet.msdyncrm_mktactivity.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			/** The status of Marketing Activity creation */
			readonly msdyncrm_action_status: string;
			readonly msdyncrm_activityadditionalparams: string;
			readonly msdyncrm_activitytoken: string;
			readonly msdyncrm_actualdurationminutes: string;
			readonly msdyncrm_actualend_UtcDateOnly: string;
			readonly msdyncrm_actualstart_UtcDateOnly: string;
			readonly msdyncrm_description: string;
			readonly msdyncrm_durationmillisecond: string;
			readonly msdyncrm_error_message: string;
			readonly msdyncrm_exchangerate: string;
			readonly msdyncrm_isbilled: string;
			readonly msdyncrm_ismapiprivate: string;
			readonly msdyncrm_isregularactivity: string;
			readonly msdyncrm_isworkflowcreated: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_mktactivityId: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the marketing activity */
			readonly statecode: string;
			/** Reason for the status of the marketing activity */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_mktactivity {
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
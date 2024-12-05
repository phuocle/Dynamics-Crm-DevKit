//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_experimentv2_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for entity instances */
			msdynmkt_experimentv2Id: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_experimentv2_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_experimentv2_Information */
		Body: DevKit.Formmsdynmkt_experimentv2_Information.Body;
		/** The Navigation of form msdynmkt_experimentv2_Information */
		Navigation: DevKit.Formmsdynmkt_experimentv2_Information.Navigation;
		/** The SidePanes of form msdynmkt_experimentv2_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_experimentv2Api {
		/**
		* DynamicsCrm.DevKit msdynmkt_experimentv2Api
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
		msdynmkt_associatejobId: string;
		/** Call back action to get experiment data */
		msdynmkt_callbackaction: string;
		msdynmkt_endTime_UtcDateAndTime: Date;
		msdynmkt_experimentactionId: string;
		msdynmkt_experimentrecordid: string;
		/** Unique identifier for entity instances */
		msdynmkt_experimentv2Id: string;
		msdynmkt_experimentversionnumber: string;
		msdynmkt_experimentversionrecordid: string;
		msdynmkt_expiryTime_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_productname: string;
		msdynmkt_startTime_UtcDateAndTime: Date;
		msdynmkt_status: OptionSet.msdynmkt_experimentv2.msdynmkt_status;
		msdynmkt_testdetails: string;
		msdynmkt_winnerOrDefault: string;
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
		/** Status of the msdynmkt_experimentv2 */
		statecode: OptionSet.msdynmkt_experimentv2.statecode;
		/** Reason for the status of the msdynmkt_experimentv2 */
		statuscode: OptionSet.msdynmkt_experimentv2.statuscode;
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
			readonly msdynmkt_associatejobId: string;
			/** Call back action to get experiment data */
			readonly msdynmkt_callbackaction: string;
			readonly msdynmkt_endTime_UtcDateAndTime: string;
			readonly msdynmkt_experimentactionId: string;
			readonly msdynmkt_experimentrecordid: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_experimentv2Id: string;
			readonly msdynmkt_experimentversionnumber: string;
			readonly msdynmkt_experimentversionrecordid: string;
			readonly msdynmkt_expiryTime_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_productname: string;
			readonly msdynmkt_startTime_UtcDateAndTime: string;
			readonly msdynmkt_status: string;
			readonly msdynmkt_testdetails: string;
			readonly msdynmkt_winnerOrDefault: string;
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
			/** Status of the msdynmkt_experimentv2 */
			readonly statecode: string;
			/** Reason for the status of the msdynmkt_experimentv2 */
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
	namespace msdynmkt_experimentv2 {
		enum msdynmkt_status {
			/** 534120002 */
			CompletedConclusive,
			/** 534120001 */
			CompletedInconclusive,
			/** 534120003 */
			Failed,
			/** 534120000 */
			InProgress,
			/** 534120005 */
			None,
			/** 534120004 */
			Stopped
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
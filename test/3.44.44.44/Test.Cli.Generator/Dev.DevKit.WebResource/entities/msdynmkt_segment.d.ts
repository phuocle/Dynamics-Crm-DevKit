//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_segment_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the source segment. */
			msdynmkt_sourcesegmentuid: DevKit.Controls.String;
		}
		interface Navigation {
			msdynmkt_msdynmkt_segment_msdynmkt_teamsengagement_audiencesegment: DevKit.Controls.NavigationItem,
			msdynmkt_segmentusage_msdynmkt_segment: DevKit.Controls.NavigationItem,
			msdynmkt_segmentusage_msdynmkt_segment_dependententityid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_segment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_segment_Information */
		Body: DevKit.Formmsdynmkt_segment_Information.Body;
		/** The Navigation of form msdynmkt_segment_Information */
		Navigation: DevKit.Formmsdynmkt_segment_Information.Navigation;
		/** The SidePanes of form msdynmkt_segment_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_segmentApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_segmentApi
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
		/** The logical name of the entity of the segment members */
		msdynmkt_baseentitylogicalname: string;
		/** CDM manifest path relative to the data lake folder path. */
		msdynmkt_cdmmanifestrelativepath: string;
		/** The column name of the id field in actual segment member data (CDM partitions) */
		msdynmkt_cdmpartitionprimarykeycolumn: string;
		/** Reference to the data lake folder where actual segment member data (CDM partitions) is */
		msdynmkt_datalakefolderid: string;
		/** Description. */
		msdynmkt_description: string;
		/** Display name. */
		msdynmkt_displayname: string;
		/** Last time when this was evaluated for journey associations. */
		msdynmkt_lastevaluated_UtcDateAndTime: Date;
		/** Date and time when the segment was last export for consumption by internal services. */
		msdynmkt_lastexportedat_UtcDateAndTime: Date;
		/** Last updated on. */
		msdynmkt_lastupdatedon_TimezoneDateAndTime: Date;
		/** Last time when this segment was used in a journey. */
		msdynmkt_lastusedinjourney_UtcDateAndTime: Date;
		/** The name the user who last associated a journey with this segment. */
		msdynmkt_lastusedinjourneyby: string;
		/** Member count. */
		msdynmkt_membercount: number;
		/** Last Updated time of rollup field Member Count. */
		readonly msdynmkt_membercount_Date_UtcDateAndTime: Date;
		/** State of rollup field Member Count. */
		readonly msdynmkt_membercount_State: number;
		/** The number of live journeys associated with the segment */
		msdynmkt_publishedjourneycount: number;
		/** Business-unit scope for selecting segment members */
		msdynmkt_scope: OptionSet.msdynmkt_segment.msdynmkt_scope;
		/** Unique identifier for entity instances. */
		msdynmkt_segmentId: string;
		/** Source. */
		msdynmkt_source: OptionSet.msdynmkt_segment.msdynmkt_source;
		/** The creator of the source segment. */
		msdynmkt_sourcesegmentcreatedby: string;
		/** Date and time when the source segment was created. */
		msdynmkt_sourcesegmentcreatedon_TimezoneDateAndTime: Date;
		/** Unique identifier of the source segment. */
		msdynmkt_sourcesegmentuid: string;
		/** Uri to the source segment. */
		msdynmkt_sourcesegmenturi: string;
		/** Date and time when the segment is first required by dependent services. */
		msdynmkt_timerequiredby_UtcDateAndTime: Date;
		/** Date and time when the segment is last required by dependent services. */
		msdynmkt_timerequiredend_UtcDateAndTime: Date;
		/** Type. */
		msdynmkt_type: OptionSet.msdynmkt_segment.msdynmkt_type;
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
		/** Status of the msdynmkt_segment */
		statecode: OptionSet.msdynmkt_segment.statecode;
		/** Reason for the status of the msdynmkt_segment */
		statuscode: OptionSet.msdynmkt_segment.statuscode;
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
			/** The logical name of the entity of the segment members */
			readonly msdynmkt_baseentitylogicalname: string;
			/** CDM manifest path relative to the data lake folder path. */
			readonly msdynmkt_cdmmanifestrelativepath: string;
			/** The column name of the id field in actual segment member data (CDM partitions) */
			readonly msdynmkt_cdmpartitionprimarykeycolumn: string;
			/** Reference to the data lake folder where actual segment member data (CDM partitions) is */
			readonly msdynmkt_datalakefolderid: string;
			/** Description. */
			readonly msdynmkt_description: string;
			/** Display name. */
			readonly msdynmkt_displayname: string;
			/** Last time when this was evaluated for journey associations. */
			readonly msdynmkt_lastevaluated_UtcDateAndTime: string;
			/** Date and time when the segment was last export for consumption by internal services. */
			readonly msdynmkt_lastexportedat_UtcDateAndTime: string;
			/** Last updated on. */
			readonly msdynmkt_lastupdatedon_TimezoneDateAndTime: string;
			/** Last time when this segment was used in a journey. */
			readonly msdynmkt_lastusedinjourney_UtcDateAndTime: string;
			/** The name the user who last associated a journey with this segment. */
			readonly msdynmkt_lastusedinjourneyby: string;
			/** Member count. */
			readonly msdynmkt_membercount: string;
			/** Last Updated time of rollup field Member Count. */
			readonly msdynmkt_membercount_Date_UtcDateAndTime: string;
			/** State of rollup field Member Count. */
			readonly msdynmkt_membercount_State: string;
			/** The number of live journeys associated with the segment */
			readonly msdynmkt_publishedjourneycount: string;
			/** Business-unit scope for selecting segment members */
			readonly msdynmkt_scope: string;
			/** Unique identifier for entity instances. */
			readonly msdynmkt_segmentId: string;
			/** Source. */
			readonly msdynmkt_source: string;
			/** The creator of the source segment. */
			readonly msdynmkt_sourcesegmentcreatedby: string;
			/** Date and time when the source segment was created. */
			readonly msdynmkt_sourcesegmentcreatedon_TimezoneDateAndTime: string;
			/** Unique identifier of the source segment. */
			readonly msdynmkt_sourcesegmentuid: string;
			/** Uri to the source segment. */
			readonly msdynmkt_sourcesegmenturi: string;
			/** Date and time when the segment is first required by dependent services. */
			readonly msdynmkt_timerequiredby_UtcDateAndTime: string;
			/** Date and time when the segment is last required by dependent services. */
			readonly msdynmkt_timerequiredend_UtcDateAndTime: string;
			/** Type. */
			readonly msdynmkt_type: string;
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
			/** Status of the msdynmkt_segment */
			readonly statecode: string;
			/** Reason for the status of the msdynmkt_segment */
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
	namespace msdynmkt_segment {
		enum msdynmkt_scope {
			/** 270100001 */
			Business_unit,
			/** 270100000 */
			Organization
		}
		enum msdynmkt_source {
			/** 11 */
			Customer_Insights,
			/** 10 */
			Marketing,
			/** 12 */
			Real_time_Journeys
		}
		enum msdynmkt_type {
			/** 11 */
			Dynamic,
			/** 12 */
			Expansion,
			/** 10 */
			Static
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
			/** 7 */
			ComputedWithWarnings,
			/** 6 */
			Computing,
			/** 4 */
			Deleted,
			/** 3 */
			Error,
			/** 5 */
			Exporting,
			/** 2 */
			Inactive,
			/** 9 */
			Stopped,
			/** 8 */
			Stopping
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
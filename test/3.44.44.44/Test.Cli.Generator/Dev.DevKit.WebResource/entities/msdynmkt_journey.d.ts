//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_journey_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the journey. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface tab_settings_Sections {
			settings_tab_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_settings extends DevKit.Controls.ITab {
			Section: tab_settings_Sections;
		}
		interface tab_tab extends DevKit.Controls.ITab {
			Section: tab_tab_Sections;
		}
		interface Tabs {
			settings: tab_settings;
			tab: tab_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			msdynmkt_baseversionjourneyid: DevKit.Controls.String;
			/** Double Opt-In Compliance lookup if the journey's purpose is DOI */
			msdynmkt_DoubleOptInCompliance: DevKit.Controls.Lookup;
			msdynmkt_errorDetails: DevKit.Controls.String;
			/** Frequency cap type for the journey */
			msdynmkt_frequencycaptype: DevKit.Controls.OptionSet;
			msdynmkt_issupersededbylaterversion: DevKit.Controls.Boolean;
			msdynmkt_JourneyJSON: DevKit.Controls.String;
			/** Journey's purpose - Marketing, DOI */
			msdynmkt_Purpose: DevKit.Controls.OptionSet;
			msdynmkt_versionnumber: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdynmkt_experiment_journeyId: DevKit.Controls.NavigationItem,
			msdynmkt_journey_journeyevent: DevKit.Controls.NavigationItem,
			msdynmkt_journey_journeyoptimizationcount: DevKit.Controls.NavigationItem,
			msdynmkt_journey_msdynmkt_journeyrunparameter_JourneyId: DevKit.Controls.NavigationItem,
			msdynmkt_journeydependency_journey: DevKit.Controls.NavigationItem,
			msdynmkt_marketingformsubmission_customerjourneyid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_contact_customerjourneyid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_lead_customerjourneyid: DevKit.Controls.NavigationItem,
			msdynmkt_msdynmkt_journey_msdynmkt_teamsengagement_engagementjourney: DevKit.Controls.NavigationItem,
			msdynmkt_opportunity_JourneyId_msdynmkt_journey: DevKit.Controls.NavigationItem,
			msdynmkt_phonecall_JourneyId_msdynmkt_journey: DevKit.Controls.NavigationItem,
			msdynmkt_segmentusage_JourneyId_lookup: DevKit.Controls.NavigationItem,
			msdynmkt_segmentusage_msdynmkt_journey_dependententityid: DevKit.Controls.NavigationItem,
			msdynmkt_task_JourneyId_msdynmkt_journey: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdynmkt_journey_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_journey_Information */
		Body: DevKit.Formmsdynmkt_journey_Information.Body;
		/** The Header section of form msdynmkt_journey_Information */
		Header: DevKit.Formmsdynmkt_journey_Information.Header;
		/** The Navigation of form msdynmkt_journey_Information */
		Navigation: DevKit.Formmsdynmkt_journey_Information.Navigation;
		/** The SidePanes of form msdynmkt_journey_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_journeyApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_journeyApi
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
		msdynmkt_baseversionjourneyid: string;
		/** Double Opt-In Compliance lookup if the journey's purpose is DOI */
		msdynmkt_DoubleOptInCompliance: string;
		msdynmkt_errorDetails: string;
		/** Internal usage only. */
		msdynmkt_flags: string;
		/** Frequency cap type for the journey */
		msdynmkt_frequencycaptype: OptionSet.msdynmkt_journey.msdynmkt_frequencycaptype;
		msdynmkt_issupersededbylaterversion: boolean;
		msdynmkt_journeyEndTime_TimezoneDateAndTime: Date;
		msdynmkt_journeyfeatureversionnumber: number;
		/** Unique identifier for entity instances */
		msdynmkt_journeyId: string;
		msdynmkt_journeyinstancepartitionenabled: boolean;
		msdynmkt_JourneyJSON: string;
		msdynmkt_JourneyJSONBackup: string;
		msdynmkt_journeyStartTime_TimezoneDateAndTime: Date;
		/** The name of the journey. */
		msdynmkt_name: string;
		/** Journey's purpose - Marketing, DOI */
		msdynmkt_Purpose: OptionSet.msdynmkt_journey.msdynmkt_Purpose;
		msdynmkt_readyToBeTriggeredBySegmentRefresh: boolean;
		/** ID of template that journey is created from */
		msdynmkt_templateid: string;
		msdynmkt_triggerType: OptionSet.msdynmkt_journey.msdynmkt_triggerType;
		msdynmkt_versiondescription: string;
		msdynmkt_versionnumber: number;
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
		/** Status of the Journey */
		statecode: OptionSet.msdynmkt_journey.statecode;
		/** Reason for the status of the Journey */
		statuscode: OptionSet.msdynmkt_journey.statuscode;
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
			readonly msdynmkt_baseversionjourneyid: string;
			/** Double Opt-In Compliance lookup if the journey's purpose is DOI */
			readonly msdynmkt_DoubleOptInCompliance: string;
			readonly msdynmkt_errorDetails: string;
			/** Internal usage only. */
			readonly msdynmkt_flags: string;
			/** Frequency cap type for the journey */
			readonly msdynmkt_frequencycaptype: string;
			readonly msdynmkt_issupersededbylaterversion: string;
			readonly msdynmkt_journeyEndTime_TimezoneDateAndTime: string;
			readonly msdynmkt_journeyfeatureversionnumber: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_journeyId: string;
			readonly msdynmkt_journeyinstancepartitionenabled: string;
			readonly msdynmkt_JourneyJSON: string;
			readonly msdynmkt_JourneyJSONBackup: string;
			readonly msdynmkt_journeyStartTime_TimezoneDateAndTime: string;
			/** The name of the journey. */
			readonly msdynmkt_name: string;
			/** Journey's purpose - Marketing, DOI */
			readonly msdynmkt_Purpose: string;
			readonly msdynmkt_readyToBeTriggeredBySegmentRefresh: string;
			/** ID of template that journey is created from */
			readonly msdynmkt_templateid: string;
			readonly msdynmkt_triggerType: string;
			readonly msdynmkt_versiondescription: string;
			readonly msdynmkt_versionnumber: string;
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
			/** Status of the Journey */
			readonly statecode: string;
			/** Reason for the status of the Journey */
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
	namespace msdynmkt_journey {
		enum msdynmkt_frequencycaptype {
			/** 0 */
			Apply_frequency_cap_by_skipping_messages,
			/** 1 */
			Ignore_frequency_cap
		}
		enum msdynmkt_Purpose {
			/** 721460001 */
			Double_Opt_In,
			/** 721460000 */
			Marketing
		}
		enum msdynmkt_triggerType {
			/** 3 */
			Event,
			/** 2 */
			OneTime,
			/** 1 */
			Ongoing,
			/** 0 */
			Recurring
		}
		enum statecode {
			/** 6 */
			Completed,
			/** 5 */
			Completing,
			/** 4 */
			Deleted,
			/** 0 */
			Draft,
			/** 1 */
			Live,
			/** 3 */
			Publishing,
			/** 2 */
			Stopped,
			/** 8 */
			Stopping
		}
		enum statuscode {
			/** 8 */
			Completed,
			/** 7 */
			Completing,
			/** 6 */
			Deleted,
			/** 1 */
			Draft,
			/** 5 */
			Draining,
			/** 2 */
			Live,
			/** 4 */
			Publishing,
			/** 3 */
			Stopped,
			/** 9 */
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
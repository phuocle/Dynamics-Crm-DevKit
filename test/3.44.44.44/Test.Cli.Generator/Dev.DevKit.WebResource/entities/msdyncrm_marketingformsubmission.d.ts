//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_marketingformsubmission_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyncrm_customerjourneyid: DevKit.Controls.Lookup;
			msdyncrm_failuredescription: DevKit.Controls.String;
			msdyncrm_failuretechnicaldetails: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_formname: DevKit.Controls.String;
			msdyncrm_marketingemailid: DevKit.Controls.Lookup;
			msdyncrm_marketingformid: DevKit.Controls.Lookup;
			msdyncrm_marketingpageid: DevKit.Controls.Lookup;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the marketing form submission */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyncrm_marketingformsubmission_field: DevKit.Controls.NavigationItem
		}
		interface Grid {
			marketingfields: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_marketingformsubmission_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_marketingformsubmission_Information */
		Body: DevKit.Formmsdyncrm_marketingformsubmission_Information.Body;
		/** The Navigation of form msdyncrm_marketingformsubmission_Information */
		Navigation: DevKit.Formmsdyncrm_marketingformsubmission_Information.Navigation;
		/** The Grid of form msdyncrm_marketingformsubmission_Information */
		Grid: DevKit.Formmsdyncrm_marketingformsubmission_Information.Grid;
		/** The SidePanes of form msdyncrm_marketingformsubmission_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_marketingformsubmissionApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_marketingformsubmissionApi
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
		/** Contact matching result */
		msdyncrm_contactmatchingresult: string;
		msdyncrm_customerjourneyid: string;
		msdyncrm_customerjourneyid_value: string;
		msdyncrm_eventid_value: string;
		msdyncrm_failuredescription: string;
		msdyncrm_failuretechnicaldetails: string;
		/** The name of the custom entity */
		msdyncrm_formname: string;
		/** Lead matching result */
		msdyncrm_leadmatchingresult: string;
		msdyncrm_marketingemailid: string;
		msdyncrm_marketingemailid_value: string;
		msdyncrm_marketingformid: string;
		msdyncrm_marketingformid_value: string;
		/** Unique identifier for this entity */
		msdyncrm_marketingformsubmissionId: string;
		msdyncrm_marketingpageid: string;
		msdyncrm_marketingpageid_value: string;
		/** Unique identifier for Contact associated with Marketing form submission. */
		msdyncrm_matchedcontactid: string;
		/** Unique identifier for Lead associated with Marketing form submission. */
		msdyncrm_matchedleadid: string;
		msdyncrm_originalcontactid: string;
		msdyncrm_originalcontactid_value: string;
		msdyncrm_pageurl: string;
		/** Number of step to be processed */
		msdyncrm_processingstep: number;
		msdyncrm_registrationid_value: string;
		msdyncrm_sessionid_value: string;
		/** Submitted values */
		readonly msdyncrm_submittedvalues: string;
		msdyncrm_timestamp_submission: string;
		msdyncrm_visitorid_value: string;
		/** Website id */
		msdyncrm_websiteid_value: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the marketing form submission */
		statecode: OptionSet.msdyncrm_marketingformsubmission.statecode;
		/** Reason for the status of the marketing form submission */
		statuscode: OptionSet.msdyncrm_marketingformsubmission.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created */
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
			/** Contact matching result */
			readonly msdyncrm_contactmatchingresult: string;
			readonly msdyncrm_customerjourneyid: string;
			readonly msdyncrm_customerjourneyid_value: string;
			readonly msdyncrm_eventid_value: string;
			readonly msdyncrm_failuredescription: string;
			readonly msdyncrm_failuretechnicaldetails: string;
			/** The name of the custom entity */
			readonly msdyncrm_formname: string;
			/** Lead matching result */
			readonly msdyncrm_leadmatchingresult: string;
			readonly msdyncrm_marketingemailid: string;
			readonly msdyncrm_marketingemailid_value: string;
			readonly msdyncrm_marketingformid: string;
			readonly msdyncrm_marketingformid_value: string;
			/** Unique identifier for this entity */
			readonly msdyncrm_marketingformsubmissionId: string;
			readonly msdyncrm_marketingpageid: string;
			readonly msdyncrm_marketingpageid_value: string;
			/** Unique identifier for Contact associated with Marketing form submission. */
			readonly msdyncrm_matchedcontactid: string;
			/** Unique identifier for Lead associated with Marketing form submission. */
			readonly msdyncrm_matchedleadid: string;
			readonly msdyncrm_originalcontactid: string;
			readonly msdyncrm_originalcontactid_value: string;
			readonly msdyncrm_pageurl: string;
			/** Number of step to be processed */
			readonly msdyncrm_processingstep: string;
			readonly msdyncrm_registrationid_value: string;
			readonly msdyncrm_sessionid_value: string;
			/** Submitted values */
			readonly msdyncrm_submittedvalues: string;
			readonly msdyncrm_timestamp_submission: string;
			readonly msdyncrm_visitorid_value: string;
			/** Website id */
			readonly msdyncrm_websiteid_value: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the marketing form submission */
			readonly statecode: string;
			/** Reason for the status of the marketing form submission */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_marketingformsubmission {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350001 */
			Failure,
			/** 192350003 */
			Finished,
			/** 2 */
			Inactive,
			/** 192350000 */
			Pending,
			/** 192350002 */
			Success
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
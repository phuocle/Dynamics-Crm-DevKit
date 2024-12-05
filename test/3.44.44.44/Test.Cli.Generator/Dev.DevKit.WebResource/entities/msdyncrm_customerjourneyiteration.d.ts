//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_customerjourneyiteration_Information {
		interface Tabs {
		}
		interface Body {
			/** The customer journey that this iteration belongs to */
			msdyncrm_customerjourneyId: DevKit.Controls.Lookup;
			/** The end date for this iteration of the customer journey */
			msdyncrm_enddate: DevKit.Controls.DateTime;
			/** Current iteration sequence number for a recurring customer journey */
			msdyncrm_iterationnumber: DevKit.Controls.Integer;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** The start date of the customer-journey iteration */
			msdyncrm_startdate: DevKit.Controls.DateTime;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyncrm_msdyncrm_customerjourneyiteration_appointment: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourneyiteration_msdyncrm_customerjourneycustomchannelactivity_CJIteration: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourneyiteration_phonecall: DevKit.Controls.NavigationItem,
			msdyncrm_msdyncrm_customerjourneyiteration_task: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyncrm_customerjourneyiteration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_customerjourneyiteration_Information */
		Body: DevKit.Formmsdyncrm_customerjourneyiteration_Information.Body;
		/** The Navigation of form msdyncrm_customerjourneyiteration_Information */
		Navigation: DevKit.Formmsdyncrm_customerjourneyiteration_Information.Navigation;
		/** The SidePanes of form msdyncrm_customerjourneyiteration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_customerjourneyiterationApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_customerjourneyiterationApi
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
		/** The customer journey that this iteration belongs to */
		msdyncrm_customerjourneyId: string;
		/** Unique ID for entity instances */
		msdyncrm_customerjourneyiterationId: string;
		/** The state of customer journey */
		msdyncrm_designerstate: string;
		/** The end date for this iteration of the customer journey */
		msdyncrm_enddate_UtcDateAndTime: Date;
		/** Current iteration sequence number for a recurring customer journey */
		msdyncrm_iterationnumber: number;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** The start date of the customer-journey iteration */
		msdyncrm_startdate_UtcDateAndTime: Date;
		/** Definition of the customer journey design */
		msdyncrm_workflowdefinition: string;
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
		/** Status of the customer journey iteration */
		statecode: OptionSet.msdyncrm_customerjourneyiteration.statecode;
		/** Reason for the status of the customer journey iteration */
		statuscode: OptionSet.msdyncrm_customerjourneyiteration.statuscode;
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
			/** The customer journey that this iteration belongs to */
			readonly msdyncrm_customerjourneyId: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_customerjourneyiterationId: string;
			/** The state of customer journey */
			readonly msdyncrm_designerstate: string;
			/** The end date for this iteration of the customer journey */
			readonly msdyncrm_enddate_UtcDateAndTime: string;
			/** Current iteration sequence number for a recurring customer journey */
			readonly msdyncrm_iterationnumber: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** The start date of the customer-journey iteration */
			readonly msdyncrm_startdate_UtcDateAndTime: string;
			/** Definition of the customer journey design */
			readonly msdyncrm_workflowdefinition: string;
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
			/** Status of the customer journey iteration */
			readonly statecode: string;
			/** Reason for the status of the customer journey iteration */
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
	namespace msdyncrm_customerjourneyiteration {
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
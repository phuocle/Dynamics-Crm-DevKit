//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_assignmentmap_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_assignedticks: DevKit.Controls.String;
			msdyn_availablecapacity: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_systemuserid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_assignmentmap_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_assignmentmap_Information */
		Body: DevKit.Formmsdyn_assignmentmap_Information.Body;
		/** The Navigation of form msdyn_assignmentmap_Information */
		Navigation: DevKit.Formmsdyn_assignmentmap_Information.Navigation;
		/** The SidePanes of form msdyn_assignmentmap_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_assignmentmapApi {
		/**
		* DynamicsCrm.DevKit msdyn_assignmentmapApi
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
		/** Depicts if the seller should be considered while lead assignment. */
		msdyn_applicableforrouting: boolean;
		msdyn_assignedticks: string;
		/** Unique identifier for entity instances */
		msdyn_assignmentmapId: string;
		msdyn_availablecapacity: number;
		/** Indicates whether reconciliation is required */
		msdyn_isreconcilerequired: boolean;
		/** Records the last reconciliation date and time for the seller */
		msdyn_lastreconciledtime_TimezoneDateAndTime: Date;
		msdyn_maxcapacity: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Stores the count of actual records assigned to the seller, accurate up to the AggregateQueryRecordLimit. */
		msdyn_reconciletaskconsumedcapacity: number;
		/** Json which store last assigned ticks at rule level */
		msdyn_rulelevelassignedticksjson: string;
		msdyn_systemuserid: string;
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
		/** Status of the Routing Map */
		statecode: OptionSet.msdyn_assignmentmap.statecode;
		/** Reason for the status of the Routing Map */
		statuscode: OptionSet.msdyn_assignmentmap.statuscode;
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
			/** Depicts if the seller should be considered while lead assignment. */
			readonly msdyn_applicableforrouting: string;
			readonly msdyn_assignedticks: string;
			/** Unique identifier for entity instances */
			readonly msdyn_assignmentmapId: string;
			readonly msdyn_availablecapacity: string;
			/** Indicates whether reconciliation is required */
			readonly msdyn_isreconcilerequired: string;
			/** Records the last reconciliation date and time for the seller */
			readonly msdyn_lastreconciledtime_TimezoneDateAndTime: string;
			readonly msdyn_maxcapacity: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Stores the count of actual records assigned to the seller, accurate up to the AggregateQueryRecordLimit. */
			readonly msdyn_reconciletaskconsumedcapacity: string;
			/** Json which store last assigned ticks at rule level */
			readonly msdyn_rulelevelassignedticksjson: string;
			readonly msdyn_systemuserid: string;
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
			/** Status of the Routing Map */
			readonly statecode: string;
			/** Reason for the status of the Routing Map */
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
	namespace msdyn_assignmentmap {
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
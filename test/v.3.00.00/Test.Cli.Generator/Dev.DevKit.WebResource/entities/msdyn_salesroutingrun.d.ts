//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_salesroutingrun_Information {
		interface Tabs {
		}
		interface Body {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_salesroutingrun_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_salesroutingrun_Information */
		Body: DevKit.Formmsdyn_salesroutingrun_Information.Body;
		/** The Process of form msdyn_salesroutingrun_Information */
		Process: DevKit.Formmsdyn_salesroutingrun_Information.Process;
		/** The SidePanes of form msdyn_salesroutingrun_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_salesroutingrunApi {
		/**
		* DynamicsCrm.DevKit msdyn_salesroutingrunApi
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
		msdyn_assignmentruleid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Assigned owner id */
		msdyn_ownerassigned_systemuser: string;
		/** Assigned owner id */
		msdyn_ownerassigned_team: string;
		/** Unique identifier for entity instances */
		msdyn_salesroutingrunId: string;
		msdyn_segmentid: string;
		msdyn_targetobject_lead: string;
		msdyn_targetobject_opportunity: string;
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
		/** Status of the Sales routing run */
		statecode: OptionSet.msdyn_salesroutingrun.statecode;
		/** Reason for the status of the Sales routing run */
		statuscode: OptionSet.msdyn_salesroutingrun.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_salesroutingrun {
		enum statecode {
			/** 2 */
			Failed,
			/** 0 */
			Inprogress,
			/** 1 */
			Succeeded
		}
		enum statuscode {
			/** 6 */
			Eligible_sellers_dont_have_availability,
			/** 7 */
			Eligible_sellers_dont_have_capacity,
			/** 8 */
			No_assignment_rule_for_this_records_segment,
			/** 5 */
			No_sellers_meet_the_conditions,
			/** 9 */
			Owner_assigned_manually,
			/** 2 */
			Owner_assigned_successfully,
			/** 4 */
			Record_doesnt_meet_any_conditions,
			/** 1 */
			Run_is_in_progress,
			/** 3 */
			There_was_an_issue_with_the_server
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
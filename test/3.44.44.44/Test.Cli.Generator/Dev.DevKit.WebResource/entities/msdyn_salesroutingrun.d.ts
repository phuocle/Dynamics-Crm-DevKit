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
		interface Navigation {

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
		/** The Navigation of form msdyn_salesroutingrun_Information */
		Navigation: DevKit.Formmsdyn_salesroutingrun_Information.Navigation;
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
		msdyn_connectedsequenceids: string;
		msdyn_connectsequencestatus: OptionSet.msdyn_salesroutingrun.msdyn_connectsequencestatus;
		msdyn_errormessage: string;
		msdyn_isrecordassigned: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Assigned owner id */
		msdyn_ownerassigned_queue: string;
		/** Assigned owner id */
		msdyn_ownerassigned_systemuser: string;
		/** Assigned owner id */
		msdyn_ownerassigned_team: string;
		/** Previous owner id */
		msdyn_previousowner_queue: string;
		/** Previous owner id */
		msdyn_previousowner_systemuser: string;
		/** Previous owner id */
		msdyn_previousowner_team: string;
		msdyn_previoussegmentid: string;
		msdyn_routingrequestsource: OptionSet.msdyn_salesroutingrun.msdyn_routingrequestsource;
		msdyn_routingstatus: OptionSet.msdyn_salesroutingrun.msdyn_routingstatus;
		/** Unique identifier for entity instances */
		msdyn_salesroutingrunId: string;
		msdyn_saruninstanceid: string;
		msdyn_segmentationstatus: OptionSet.msdyn_salesroutingrun.msdyn_segmentationstatus;
		msdyn_segmentid: string;
		msdyn_targetobject_account: string;
		msdyn_targetobject_contact: string;
		msdyn_targetobject_lead: string;
		msdyn_targetobject_msdyn_salessuggestion: string;
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
			readonly msdyn_assignmentruleid: string;
			readonly msdyn_connectedsequenceids: string;
			readonly msdyn_connectsequencestatus: string;
			readonly msdyn_errormessage: string;
			readonly msdyn_isrecordassigned: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Assigned owner id */
			readonly msdyn_ownerassigned_queue: string;
			/** Assigned owner id */
			readonly msdyn_ownerassigned_systemuser: string;
			/** Assigned owner id */
			readonly msdyn_ownerassigned_team: string;
			/** Previous owner id */
			readonly msdyn_previousowner_queue: string;
			/** Previous owner id */
			readonly msdyn_previousowner_systemuser: string;
			/** Previous owner id */
			readonly msdyn_previousowner_team: string;
			readonly msdyn_previoussegmentid: string;
			readonly msdyn_routingrequestsource: string;
			readonly msdyn_routingstatus: string;
			/** Unique identifier for entity instances */
			readonly msdyn_salesroutingrunId: string;
			readonly msdyn_saruninstanceid: string;
			readonly msdyn_segmentationstatus: string;
			readonly msdyn_segmentid: string;
			readonly msdyn_targetobject_account: string;
			readonly msdyn_targetobject_contact: string;
			readonly msdyn_targetobject_lead: string;
			readonly msdyn_targetobject_msdyn_salessuggestion: string;
			readonly msdyn_targetobject_opportunity: string;
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
			/** Status of the Sales routing run */
			readonly statecode: string;
			/** Reason for the status of the Sales routing run */
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
	namespace msdyn_salesroutingrun {
		enum msdyn_connectsequencestatus {
			/** 8 */
			D365WorkAssignment_app_user_doesnt_have_the_necessary_permissions,
			/** 0 */
			In_progress,
			/** 4 */
			No_sequence_connected_to_this_segment,
			/** 6 */
			Seller_needs_additional_access,
			/** 7 */
			Sequence_is_either_deleted_or_inactive,
			/** 5 */
			Sequence_unchanged,
			/** 3 */
			Skipped_as_segmentation_failed,
			/** 2 */
			Something_went_wrong,
			/** 1 */
			Successfully_connected_to_a_sequence
		}
		enum msdyn_ownerassignedIdType {
		}
		enum msdyn_previousownerIdType {
		}
		enum msdyn_routingrequestsource {
			/** 5 */
			Force_routed_manually,
			/** 2 */
			Manually_reassigned,
			/** 4 */
			Manually_resegmented,
			/** 0 */
			New_record,
			/** 3 */
			Reassignment_scheduled,
			/** 1 */
			Record_updated
		}
		enum msdyn_routingstatus {
			/** 15 */
			Couldnt_find_eligible_queue,
			/** 13 */
			Couldnt_find_eligible_team,
			/** 18 */
			D365WorkAssignment_app_user_doesnt_have_the_necessary_permissions,
			/** 6 */
			Eligible_sellers_dont_have_availability,
			/** 7 */
			Eligible_sellers_dont_have_capacity,
			/** 14 */
			Found_multiple_eligible_queues,
			/** 12 */
			Found_multiple_eligible_teams,
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
			/** 10 */
			Record_unassigned_as_seller_lacks_security_role_privileges,
			/** 17 */
			Rules_wont_run_for_this_segment,
			/** 1 */
			Run_is_in_progress,
			/** 11 */
			Seller_not_assigned_as_record_is_older_than_the_set_timeframe,
			/** 16 */
			Skipped_as_segmentation_failed,
			/** 3 */
			There_was_an_issue_with_the_server
		}
		enum msdyn_segmentationstatus {
			/** 6 */
			D365WorkAssignment_app_user_doesnt_have_the_necessary_permissions,
			/** 0 */
			In_Progress,
			/** 4 */
			Matched_with_previous_segment,
			/** 3 */
			No_matching_segments,
			/** 5 */
			No_segmentation_required,
			/** 1 */
			Segmentation_successful,
			/** 2 */
			Something_went_wrong
		}
		enum msdyn_targetobjectIdType {
		}
		enum statecode {
			/** 2 */
			Failed,
			/** 0 */
			Inprogress,
			/** 1 */
			Succeeded
		}
		enum statuscode {
			/** 15 */
			Couldnt_find_eligible_queue,
			/** 13 */
			Couldnt_find_eligible_team,
			/** 18 */
			D365WorkAssignment_app_user_doesnt_have_the_necessary_permissions,
			/** 6 */
			Eligible_sellers_dont_have_availability,
			/** 7 */
			Eligible_sellers_dont_have_capacity,
			/** 14 */
			Found_multiple_eligible_queues,
			/** 12 */
			Found_multiple_eligible_teams,
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
			/** 10 */
			Record_unassigned_as_seller_lacks_security_role_privileges,
			/** 17 */
			Rules_wont_run_for_this_segment,
			/** 1 */
			Run_is_in_progress,
			/** 11 */
			Seller_not_assigned_as_record_is_older_than_the_set_timeframe,
			/** 16 */
			Skipped_as_segmentation_failed,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
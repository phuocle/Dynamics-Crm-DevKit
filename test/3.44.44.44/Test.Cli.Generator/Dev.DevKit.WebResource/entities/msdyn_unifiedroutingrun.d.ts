﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_unifiedroutingrun_Information {
		interface Tabs {
		}
		interface Body {
			/** The diagnostic item. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_unifiedroutingrun_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_unifiedroutingrun_Information */
		Body: DevKit.Formmsdyn_unifiedroutingrun_Information.Body;
		/** The Navigation of form msdyn_unifiedroutingrun_Information */
		Navigation: DevKit.Formmsdyn_unifiedroutingrun_Information.Navigation;
		/** The SidePanes of form msdyn_unifiedroutingrun_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormUnified_routing_run_diagnostics {
		interface Tabs {
		}
		interface Body {
			msdyn_name: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic: DevKit.Controls.NavigationItem
		}
	}
	class FormUnified_routing_run_diagnostics extends DevKit.IForm {
		/**
		* Unified routing run diagnostics [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Unified_routing_run_diagnostics */
		Body: DevKit.FormUnified_routing_run_diagnostics.Body;
		/** The Navigation of form Unified_routing_run_diagnostics */
		Navigation: DevKit.FormUnified_routing_run_diagnostics.Navigation;
		/** The SidePanes of form Unified_routing_run_diagnostics */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_unifiedroutingrunApi {
		/**
		* DynamicsCrm.DevKit msdyn_unifiedroutingrunApi
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
		msdyn_assignedagent: string;
		/** Default value of diagnostic version while creating the run record */
		msdyn_diagnosticversion: string;
		msdyn_endtime_UtcDateAndTime: Date;
		msdyn_liveworkitem: string;
		/** The diagnostic item. */
		msdyn_name: string;
		msdyn_queue: string;
		msdyn_routingduration: number;
		/** Routing duration in seconds */
		msdyn_routingdurationinseconds: number;
		msdyn_routingstatus: OptionSet.msdyn_unifiedroutingrun.msdyn_routingstatus;
		/** Run number */
		msdyn_runnumber: number;
		msdyn_starttime_UtcDateAndTime: Date;
		/** Unique identifier for the target object associated with unified routing run. */
		msdyn_targetobject_msdyn_ocliveworkitem: string;
		/** Unique identifier for the target object associated with unified routing run. */
		msdyn_targetobject_msdyn_ocvoicemail_msdyn_ocvoicemail: string;
		/** Unique identifier for the target object associated with unified routing run. */
		msdyn_targetobject_queueitem: string;
		/** Unique identifier for entity instances */
		msdyn_unifiedroutingrunId: string;
		msdyn_workstream: string;
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
		/** Status of the Unified routing run */
		statecode: OptionSet.msdyn_unifiedroutingrun.statecode;
		/** Reason for the status of the Unified routing run */
		statuscode: OptionSet.msdyn_unifiedroutingrun.statuscode;
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
			readonly msdyn_assignedagent: string;
			/** Default value of diagnostic version while creating the run record */
			readonly msdyn_diagnosticversion: string;
			readonly msdyn_endtime_UtcDateAndTime: string;
			readonly msdyn_liveworkitem: string;
			/** The diagnostic item. */
			readonly msdyn_name: string;
			readonly msdyn_queue: string;
			readonly msdyn_routingduration: string;
			/** Routing duration in seconds */
			readonly msdyn_routingdurationinseconds: string;
			readonly msdyn_routingstatus: string;
			/** Run number */
			readonly msdyn_runnumber: string;
			readonly msdyn_starttime_UtcDateAndTime: string;
			/** Unique identifier for the target object associated with unified routing run. */
			readonly msdyn_targetobject_msdyn_ocliveworkitem: string;
			/** Unique identifier for the target object associated with unified routing run. */
			readonly msdyn_targetobject_msdyn_ocvoicemail_msdyn_ocvoicemail: string;
			/** Unique identifier for the target object associated with unified routing run. */
			readonly msdyn_targetobject_queueitem: string;
			/** Unique identifier for entity instances */
			readonly msdyn_unifiedroutingrunId: string;
			readonly msdyn_workstream: string;
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
			/** Status of the Unified routing run */
			readonly statecode: string;
			/** Reason for the status of the Unified routing run */
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
	namespace msdyn_unifiedroutingrun {
		enum msdyn_routingstatus {
			/** 100000006 */
			Agent_assignment_completed,
			/** 100000000 */
			Intake_rules_completed,
			/** 100000005 */
			Queue_Assignment_rules_completed,
			/** 100000004 */
			Queue_Assignment_selection_rules_completed,
			/** 100000003 */
			Queue_Prioritization_rules_completed,
			/** 100000001 */
			Workstream_Classification_rules_processing,
			/** 100000002 */
			Workstream_Route_to_queue_rules_completed
		}
		enum msdyn_targetobjectIdType {
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
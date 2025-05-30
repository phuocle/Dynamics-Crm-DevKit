﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_workstreamhmmigrationstatusApi {
		/**
		* DynamicsCrm.DevKit msdyn_workstreamhmmigrationstatusApi
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
		/** Error code of the migration status. */
		msdyn_errorcode: string;
		/** Error message of the migration status. */
		msdyn_errordescription: string;
		/** Error type of this record. */
		msdyn_errortype: OptionSet.msdyn_workstreamhmmigrationstatus.msdyn_errortype;
		/** Work stream record associated with the migration status. */
		msdyn_liveworkstreamid: string;
		/** Json formatted values of the migration log. */
		msdyn_migrationlogjson: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** New value json of the deflection bot ID and queue bot mapping post-migration. */
		msdyn_newvaluejson: string;
		/** Operation type of this record. */
		msdyn_operationtype: OptionSet.msdyn_workstreamhmmigrationstatus.msdyn_operationtype;
		/** Original value json of the deflection bot ID and queue bot mapping post-migration. */
		msdyn_originalvaluejson: string;
		/** Migration status of this record. */
		msdyn_status: OptionSet.msdyn_workstreamhmmigrationstatus.msdyn_status;
		/** Validation Status of this record. */
		msdyn_validationstatus: OptionSet.msdyn_workstreamhmmigrationstatus.msdyn_validationstatus;
		/** Unique identifier for entity instances */
		msdyn_workstreamhmmigrationstatusId: string;
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
		/** Status of the Voice workstream V2 migration status */
		statecode: OptionSet.msdyn_workstreamhmmigrationstatus.statecode;
		/** Reason for the status of the Voice workstream V2 migration status */
		statuscode: OptionSet.msdyn_workstreamhmmigrationstatus.statuscode;
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
			/** Error code of the migration status. */
			readonly msdyn_errorcode: string;
			/** Error message of the migration status. */
			readonly msdyn_errordescription: string;
			/** Error type of this record. */
			readonly msdyn_errortype: string;
			/** Work stream record associated with the migration status. */
			readonly msdyn_liveworkstreamid: string;
			/** Json formatted values of the migration log. */
			readonly msdyn_migrationlogjson: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** New value json of the deflection bot ID and queue bot mapping post-migration. */
			readonly msdyn_newvaluejson: string;
			/** Operation type of this record. */
			readonly msdyn_operationtype: string;
			/** Original value json of the deflection bot ID and queue bot mapping post-migration. */
			readonly msdyn_originalvaluejson: string;
			/** Migration status of this record. */
			readonly msdyn_status: string;
			/** Validation Status of this record. */
			readonly msdyn_validationstatus: string;
			/** Unique identifier for entity instances */
			readonly msdyn_workstreamhmmigrationstatusId: string;
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
			/** Status of the Voice workstream V2 migration status */
			readonly statecode: string;
			/** Reason for the status of the Voice workstream V2 migration status */
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
	namespace msdyn_workstreamhmmigrationstatus {
		enum msdyn_errortype {
			/** 192350002 */
			Critical,
			/** 192350000 */
			None,
			/** 192350001 */
			Warning
		}
		enum msdyn_operationtype {
			/** 192350000 */
			None,
			/** 192350002 */
			Revert,
			/** 192350001 */
			Update
		}
		enum msdyn_status {
			/** 192350002 */
			Complete,
			/** 192350003 */
			Failed,
			/** 192350001 */
			In_progress,
			/** 192350000 */
			None
		}
		enum msdyn_validationstatus {
			/** 192350002 */
			Failed,
			/** 192350003 */
			In_progress,
			/** 192350000 */
			Not_tested,
			/** 192350001 */
			Passed
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
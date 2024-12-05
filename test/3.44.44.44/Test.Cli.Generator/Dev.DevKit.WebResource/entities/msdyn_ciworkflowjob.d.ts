//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_ciworkflowjobApi {
		/**
		* DynamicsCrm.DevKit msdyn_ciworkflowjobApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		msdyn_cancelledby: string;
		/** Unique identifier for entity instances */
		msdyn_ciworkflowjobId: string;
		msdyn_endtimestamp_UtcDateAndTime: Date;
		msdyn_forcerunrequested: string;
		msdyn_graphname: string;
		msdyn_graphversion: number;
		msdyn_idlistserialized: string;
		msdyn_inputrefreshmode: string;
		msdyn_jobid: string;
		msdyn_jobstatus: string;
		msdyn_jobsubmissionkind: string;
		msdyn_jobtype: string;
		msdyn_Name: string;
		msdyn_operationtype: string;
		msdyn_optionsserialized: string;
		msdyn_starttimestamp_UtcDateAndTime: Date;
		msdyn_submittedby: string;
		msdyn_subtype: string;
		msdyn_taskidsserialized: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the ciworkflowjob */
		statecode: OptionSet.msdyn_ciworkflowjob.statecode;
		/** Reason for the status of the ciworkflowjob */
		statuscode: OptionSet.msdyn_ciworkflowjob.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			readonly msdyn_cancelledby: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ciworkflowjobId: string;
			readonly msdyn_endtimestamp_UtcDateAndTime: string;
			readonly msdyn_forcerunrequested: string;
			readonly msdyn_graphname: string;
			readonly msdyn_graphversion: string;
			readonly msdyn_idlistserialized: string;
			readonly msdyn_inputrefreshmode: string;
			readonly msdyn_jobid: string;
			readonly msdyn_jobstatus: string;
			readonly msdyn_jobsubmissionkind: string;
			readonly msdyn_jobtype: string;
			readonly msdyn_Name: string;
			readonly msdyn_operationtype: string;
			readonly msdyn_optionsserialized: string;
			readonly msdyn_starttimestamp_UtcDateAndTime: string;
			readonly msdyn_submittedby: string;
			readonly msdyn_subtype: string;
			readonly msdyn_taskidsserialized: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the ciworkflowjob */
			readonly statecode: string;
			/** Reason for the status of the ciworkflowjob */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_ciworkflowjob {
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
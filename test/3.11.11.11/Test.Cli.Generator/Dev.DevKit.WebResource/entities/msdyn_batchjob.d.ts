//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_batchjob_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_frequency: DevKit.Controls.OptionSet;
			msdyn_isactive: DevKit.Controls.Boolean;
			msdyn_JobType: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_batchjob_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_batchjob_Information */
		Body: DevKit.Formmsdyn_batchjob_Information.Body;
		/** The Process of form msdyn_batchjob_Information */
		Process: DevKit.Formmsdyn_batchjob_Information.Process;
		/** The SidePanes of form msdyn_batchjob_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_batchjobApi {
		/**
		* DynamicsCrm.DevKit msdyn_batchjobApi
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
		/** Unique identifier for entity instances */
		msdyn_batchjobId: string;
		msdyn_Data: string;
		msdyn_data1: string;
		msdyn_frequency: OptionSet.msdyn_batchjob.msdyn_frequency;
		msdyn_isactive: boolean;
		msdyn_JobType: OptionSet.msdyn_batchjob.msdyn_JobType;
		msdyn_lastrundate_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_operationtype: OptionSet.msdyn_batchjob.msdyn_operationtype;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Batch Job */
		statecode: OptionSet.msdyn_batchjob.statecode;
		/** Reason for the status of the Batch Job */
		statuscode: OptionSet.msdyn_batchjob.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msdyn_batchjobId: string;
			readonly msdyn_Data: string;
			readonly msdyn_data1: string;
			readonly msdyn_frequency: string;
			readonly msdyn_isactive: string;
			readonly msdyn_JobType: string;
			readonly msdyn_lastrundate_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_operationtype: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Batch Job */
			readonly statecode: string;
			/** Reason for the status of the Batch Job */
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
	namespace msdyn_batchjob {
		enum msdyn_frequency {
			/** 0 */
			Daily,
			/** 1 */
			Monthly
		}
		enum msdyn_JobType {
			/** 867380006 */
			Idle,
			/** 867380000 */
			None,
			/** 867380001 */
			Training,
			/** 867380005 */
			Waiting
		}
		enum msdyn_operationtype {
			/** 1 */
			Create,
			/** 3 */
			Delete,
			/** 0 */
			None,
			/** 2 */
			Update
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
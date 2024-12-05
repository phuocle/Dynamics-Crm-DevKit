//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class workqueueApi {
		/**
		* DynamicsCrm.DevKit workqueueApi
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
		/** Indicates whether updating the input while the item is in processing is allowed. Default value is NotSet. */
		allowupdateinputwhileprocessing: OptionSet.workqueue.allowupdateinputwhileprocessing;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.workqueue.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The default lifespan in minutes of work queue items when added to the work queue. */
		defaultitemtimetoliveinminutes: number;
		/** The work queue description. */
		description: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** The input schema field contains the expected input schema used for input validation at enqueue time. */
		inputschema: string;
		/** The input schema type allows to validate the input field at enqueue time against a specific schema. */
		inputschematype: OptionSet.workqueue.inputschematype;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** The maximum number of times an item can be requeued. */
		itemmaxrequeuecount: number;
		/** The maximum number of times an item should be retried. This can be overridden at runtime. */
		itemmaxretrycount: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the work queue. */
		name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** The priority type determines the pick and processing order for work queue items in a work queue. */
		prioritytype: OptionSet.workqueue.prioritytype;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** The status of the work queue. */
		statecode: OptionSet.workqueue.statecode;
		/** Reason for the status of the Work Queue */
		statuscode: OptionSet.workqueue.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Unique identifier for entity instances. */
		workqueueId: string;
		workqueuekey: string;
		/** The work queue type allows to handle more specific work queue behavior. */
		WorkQueueType: OptionSet.workqueue.WorkQueueType;
		readonly FormattedValue: {
			/** Indicates whether updating the input while the item is in processing is allowed. Default value is NotSet. */
			readonly allowupdateinputwhileprocessing: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The default lifespan in minutes of work queue items when added to the work queue. */
			readonly defaultitemtimetoliveinminutes: string;
			/** The work queue description. */
			readonly description: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** The input schema field contains the expected input schema used for input validation at enqueue time. */
			readonly inputschema: string;
			/** The input schema type allows to validate the input field at enqueue time against a specific schema. */
			readonly inputschematype: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** The maximum number of times an item can be requeued. */
			readonly itemmaxrequeuecount: string;
			/** The maximum number of times an item should be retried. This can be overridden at runtime. */
			readonly itemmaxretrycount: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the work queue. */
			readonly name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** The priority type determines the pick and processing order for work queue items in a work queue. */
			readonly prioritytype: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** The status of the work queue. */
			readonly statecode: string;
			/** Reason for the status of the Work Queue */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Unique identifier for entity instances. */
			readonly workqueueId: string;
			readonly workqueuekey: string;
			/** The work queue type allows to handle more specific work queue behavior. */
			readonly WorkQueueType: string;
		}
	}
}
declare namespace OptionSet {
	namespace workqueue {
		enum allowupdateinputwhileprocessing {
			/** 1 */
			No,
			/** 0 */
			NotSet,
			/** 2 */
			Yes
		}
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum inputschematype {
			/** 1 */
			Json,
			/** 0 */
			No_Schema,
			/** 2 */
			Xml
		}
		enum prioritytype {
			/** 0 */
			Fifo
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
			Inactive,
			/** 3 */
			Paused
		}
		enum WorkQueueType {
			/** 1 */
			Run_Queue,
			/** 0 */
			Work_Queue
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
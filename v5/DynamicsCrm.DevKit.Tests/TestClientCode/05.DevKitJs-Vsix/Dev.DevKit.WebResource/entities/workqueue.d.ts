//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class workqueueApi {
		/**
		* DynamicsCrm.DevKit workqueueApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Indicates whether updating the input while the item is in processing is allowed. Default value is NotSet. */
		allowupdateinputwhileprocessing: OptionSet.workqueue.allowupdateinputwhileprocessing | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.workqueue.ComponentState | null;
		/** Indicates whether item should be processed even if SLA is violated. Default value is NotSet. */
		continueprocessingifslaviolated: OptionSet.workqueue.continueprocessingifslaviolated | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** The default lifespan in minutes of work queue items when added to the work queue. */
		defaultitemtimetoliveinminutes: number | null;
		/** The work queue description. */
		description: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** The input schema field contains the expected input schema used for input validation at enqueue time. */
		inputschema: string | null;
		/** The input schema type allows to validate the input field at enqueue time against a specific schema. */
		inputschematype: OptionSet.workqueue.inputschematype | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** The maximum number of times an item can be requeued. */
		itemmaxrequeuecount: number | null;
		/** The maximum number of times an item should be retried. This can be overridden at runtime. */
		itemmaxretrycount: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the work queue. */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** The priority type determines the pick and processing order for work queue items in a work queue. */
		prioritytype: OptionSet.workqueue.prioritytype | null;
		/** The SLA Threshold in percentage for items added to the work queue. */
		slathresholdinpercentage: number | null;
		/** Date and time that the SLA Threshold was modified on. */
		slathresholdmodifiedon_UtcDateAndTime: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** The status of the work queue. */
		statecode: OptionSet.workqueue.statecode | null;
		/** Reason for the status of the Work Queue */
		statuscode: OptionSet.workqueue.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/** Unique identifier for entity instances. */
		workqueueId: string | null;
		workqueuekey: string | null;
		/** The work queue type allows to handle more specific work queue behavior. */
		WorkQueueType: OptionSet.workqueue.WorkQueueType | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Indicates whether updating the input while the item is in processing is allowed. Default value is NotSet. */
			readonly allowupdateinputwhileprocessing: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Indicates whether item should be processed even if SLA is violated. Default value is NotSet. */
			readonly continueprocessingifslaviolated: string;
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
			/** The SLA Threshold in percentage for items added to the work queue. */
			readonly slathresholdinpercentage: string;
			/** Date and time that the SLA Threshold was modified on. */
			readonly slathresholdmodifiedon_UtcDateAndTime: string;
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
			/** No = 1*/
			No = 1,
			/** NotSet = 0*/
			NotSet = 0,
			/** Yes = 2*/
			Yes = 2
		}
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum continueprocessingifslaviolated {
			/** No = 1*/
			No = 1,
			/** NotSet = 0*/
			NotSet = 0,
			/** Yes = 2*/
			Yes = 2
		}
		enum inputschematype {
			/** Json = 1*/
			Json = 1,
			/** No_Schema = 0*/
			No_Schema = 0,
			/** Xml = 2*/
			Xml = 2
		}
		enum prioritytype {
			/** Fifo = 0*/
			Fifo = 0
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2,
			/** Paused = 3*/
			Paused = 3
		}
		enum WorkQueueType {
			/** Run_Queue = 1*/
			Run_Queue = 1,
			/** Work_Queue = 0*/
			Work_Queue = 0
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class PluginTraceLogApi {
		/**
		* DynamicsCrm.DevKit PluginTraceLogApi
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
		/** Unsecured configuration for the plug-in trace log. */
		readonly Configuration: string | null;
		/** Unique identifier for tracking plug-in or custom workflow activity execution. */
		readonly CorrelationId: string | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Depth of execution of the plug-in or custom workflow activity. */
		readonly Depth: number | null;
		/** Details of the exception. */
		readonly ExceptionDetails: string | null;
		/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
		readonly IsSystemCreated: boolean | null;
		/** Trace text from the plug-in. */
		readonly MessageBlock: string | null;
		/** Name of the message that triggered this plug-in. */
		readonly MessageName: string | null;
		/** Type of execution. */
		readonly Mode: OptionSet.PluginTraceLog.Mode | null;
		/** Type of custom code. */
		readonly OperationType: OptionSet.PluginTraceLog.OperationType | null;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string | null;
		/** Time, in milliseconds, to construct. */
		readonly PerformanceConstructorDuration: number | null;
		/** Date and time when constructed. */
		readonly PerformanceConstructorStartTime_UtcDateAndTime: Date | null;
		/** Time, in milliseconds, to execute the request. */
		readonly PerformanceExecutionDuration: number | null;
		/** Time, in milliseconds, to execute the request. */
		readonly PerformanceExecutionStartTime_UtcDateAndTime: Date | null;
		/** Asynchronous workflow persistence key. */
		readonly PersistenceKey: string | null;
		/** ID of the plug-in registration step. */
		readonly PluginStepId: string | null;
		/** Unique identifier for an entity instance. */
		readonly PluginTraceLogId: string | null;
		/** Entity, if any, that the plug-in is executed against. */
		readonly PrimaryEntity: string | null;
		/** Plug-in profile formatted as serialized text. */
		readonly Profile: string | null;
		/** Unique identifier of the message request. */
		readonly RequestId: string | null;
		/** Secured configuration for the plug-in trace log. */
		readonly SecureConfiguration: string | null;
		/** Class name of the plug-in. */
		readonly TypeName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unsecured configuration for the plug-in trace log. */
			readonly Configuration: string;
			/** Unique identifier for tracking plug-in or custom workflow activity execution. */
			readonly CorrelationId: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Depth of execution of the plug-in or custom workflow activity. */
			readonly Depth: string;
			/** Details of the exception. */
			readonly ExceptionDetails: string;
			/** Where the event originated. Set to true if it's a system trace; otherwise, false. */
			readonly IsSystemCreated: string;
			/** Trace text from the plug-in. */
			readonly MessageBlock: string;
			/** Name of the message that triggered this plug-in. */
			readonly MessageName: string;
			/** Type of execution. */
			readonly Mode: string;
			/** Type of custom code. */
			readonly OperationType: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Time, in milliseconds, to construct. */
			readonly PerformanceConstructorDuration: string;
			/** Date and time when constructed. */
			readonly PerformanceConstructorStartTime_UtcDateAndTime: string;
			/** Time, in milliseconds, to execute the request. */
			readonly PerformanceExecutionDuration: string;
			/** Time, in milliseconds, to execute the request. */
			readonly PerformanceExecutionStartTime_UtcDateAndTime: string;
			/** Asynchronous workflow persistence key. */
			readonly PersistenceKey: string;
			/** ID of the plug-in registration step. */
			readonly PluginStepId: string;
			/** Unique identifier for an entity instance. */
			readonly PluginTraceLogId: string;
			/** Entity, if any, that the plug-in is executed against. */
			readonly PrimaryEntity: string;
			/** Plug-in profile formatted as serialized text. */
			readonly Profile: string;
			/** Unique identifier of the message request. */
			readonly RequestId: string;
			/** Secured configuration for the plug-in trace log. */
			readonly SecureConfiguration: string;
			/** Class name of the plug-in. */
			readonly TypeName: string;
		}
	}
}
declare namespace OptionSet {
	namespace PluginTraceLog {
		enum Mode {
			/** Asynchronous = 1*/
			Asynchronous = 1,
			/** Synchronous = 0*/
			Synchronous = 0
		}
		enum OperationType {
			/** Plug_in = 1*/
			Plug_in = 1,
			/** Unknown = 0*/
			Unknown = 0,
			/** Workflow_Activity = 2*/
			Workflow_Activity = 2
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
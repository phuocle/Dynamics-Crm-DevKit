//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ExpanderEventApi {
		/**
		* DynamicsCrm.DevKit ExpanderEventApi
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
		/** The URI where the context is stored. */
		ContextUri: string | null;
		/** Unique identifier used to correlate between expander events and SDK message invocations. */
		CorrelationId: string | null;
		/** Unique identifier of the user who created the event. */
		readonly CreatedBy: string | null;
		/** Date and time when the event was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the event. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the expander event. */
		ExpanderEventId: string | null;
		/** Unique identifier of the user who last modified the event. */
		readonly ModifiedBy: string | null;
		/** Date and time when the event was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the event. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the event. */
		Name: string | null;
		/** Unique identifier of the organization with which the event is associated. */
		readonly OrganizationId: string | null;
		/** The workloads that have registered to send an event. */
		Registrations: string | null;
		/** Version number of the event. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The URI where the context is stored. */
			readonly ContextUri: string;
			/** Unique identifier used to correlate between expander events and SDK message invocations. */
			readonly CorrelationId: string;
			/** Unique identifier of the user who created the event. */
			readonly CreatedBy: string;
			/** Date and time when the event was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the event. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the expander event. */
			readonly ExpanderEventId: string;
			/** Unique identifier of the user who last modified the event. */
			readonly ModifiedBy: string;
			/** Date and time when the event was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the event. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the event. */
			readonly Name: string;
			/** Unique identifier of the organization with which the event is associated. */
			readonly OrganizationId: string;
			/** The workloads that have registered to send an event. */
			readonly Registrations: string;
			/** Version number of the event. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ExpanderEvent {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class TraceLogApi {
		/**
		* DynamicsCrm.DevKit TraceLogApi
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
		/** Indicates if this trace log can be deleted. */
		CanBeDeleted: boolean | null;
		/** Indicates the collation level */
		CollationLevel: number | null;
		/** Unique identifier of the user who created the trace. */
		readonly CreatedBy: string | null;
		/** Time the error is created and logged. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the trace. */
		readonly CreatedOnBehalfBy: string | null;
		ErrorDetails: string | null;
		ErrorTypeDisplay: string | null;
		/** Tells if this traceLog is created uniquely(only one) for the associated entity. */
		IsUnique: boolean | null;
		/** Information about the trace level. */
		Level: OptionSet.TraceLog.Level | null;
		MachineName: string | null;
		/** Unique identifier of the user who modified the trace. */
		readonly ModifiedBy: string | null;
		/** Time the error is updated and logged for the same regarding object. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the trace. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the trace. */
		readonly OrganizationId: string | null;
		/** Indicates the parent ID of the trace log. */
		ParentTraceLogId: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the regarding object. */
		readonly RegardingObjectOwningBusinessUnit: string | null;
		/** Text of the trace. */
		Text: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** XML representation of the trace actions. */
		TraceActionXml: string | null;
		/** Error code. */
		TraceCode: number | null;
		/** XML representation of the trace details. */
		TraceDetailXml: string | null;
		/** Unique identifier of the trace. */
		TraceLogId: string | null;
		/** Stores the hash of the entity object associated with this tracelog. Hash is computed using the object type code and its id. */
		readonly TraceParameterHash: number | null;
		/** XML representation of the trace parameters. */
		TraceParameterXml: string | null;
		/** For internal use only. */
		readonly TraceRegardingId: string | null;
		/** Status about the trace. */
		TraceStatus: boolean | null;
		/** Time zone code that was in use when the trace was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Indicates if this trace log can be deleted. */
			readonly CanBeDeleted: string;
			/** Indicates the collation level */
			readonly CollationLevel: string;
			/** Unique identifier of the user who created the trace. */
			readonly CreatedBy: string;
			/** Time the error is created and logged. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the trace. */
			readonly CreatedOnBehalfBy: string;
			readonly ErrorDetails: string;
			readonly ErrorTypeDisplay: string;
			/** Tells if this traceLog is created uniquely(only one) for the associated entity. */
			readonly IsUnique: string;
			/** Information about the trace level. */
			readonly Level: string;
			readonly MachineName: string;
			/** Unique identifier of the user who modified the trace. */
			readonly ModifiedBy: string;
			/** Time the error is updated and logged for the same regarding object. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the trace. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the trace. */
			readonly OrganizationId: string;
			/** Indicates the parent ID of the trace log. */
			readonly ParentTraceLogId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the regarding object. */
			readonly RegardingObjectOwningBusinessUnit: string;
			/** Text of the trace. */
			readonly Text: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** XML representation of the trace actions. */
			readonly TraceActionXml: string;
			/** Error code. */
			readonly TraceCode: string;
			/** XML representation of the trace details. */
			readonly TraceDetailXml: string;
			/** Unique identifier of the trace. */
			readonly TraceLogId: string;
			/** Stores the hash of the entity object associated with this tracelog. Hash is computed using the object type code and its id. */
			readonly TraceParameterHash: string;
			/** XML representation of the trace parameters. */
			readonly TraceParameterXml: string;
			/** For internal use only. */
			readonly TraceRegardingId: string;
			/** Status about the trace. */
			readonly TraceStatus: string;
			/** Time zone code that was in use when the trace was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace TraceLog {
		enum Level {
			/** Error = 3*/
			Error = 3,
			/** Information = 1*/
			Information = 1,
			/** Warning = 2*/
			Warning = 2
		}
		enum RegardingObjectOwnerIdType {
		}
		enum RegardingObjectTypeCode {
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
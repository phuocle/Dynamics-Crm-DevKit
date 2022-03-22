//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class TraceLogApi {
		/**
		* DynamicsCrm.DevKit TraceLogApi
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
		/** Indicates if this trace log can be deleted. */
		CanBeDeleted: boolean;
		/** Indicates the collation level */
		CollationLevel: number;
		/** Unique identifier of the user who created the trace. */
		readonly CreatedBy: string;
		/** Time the error is created and logged. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the trace. */
		readonly CreatedOnBehalfBy: string;
		ErrorDetails: string;
		ErrorTypeDisplay: string;
		/** Tells if this traceLog is created uniquely(only one) for the associated entity. */
		IsUnique: boolean;
		/** Information about the trace level. */
		Level: OptionSet.TraceLog.Level;
		MachineName: string;
		/** Unique identifier of the user who modified the trace. */
		readonly ModifiedBy: string;
		/** Time the error is updated and logged for the same regarding object. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the trace. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the trace. */
		readonly OrganizationId: string;
		/** Indicates the parent ID of the trace log. */
		ParentTraceLogId: string;
		/** Regarding mailbox or email server profile. */
		regardingobjectid_emailserverprofile: string;
		/** Regarding mailbox or email server profile. */
		regardingobjectid_mailbox: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the regarding object. */
		readonly RegardingObjectOwningBusinessUnit: string;
		/** Text of the trace. */
		Text: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** XML representation of the trace actions. */
		TraceActionXml: string;
		/** Error code. */
		TraceCode: number;
		/** XML representation of the trace details. */
		TraceDetailXml: string;
		/** Unique identifier of the trace. */
		TraceLogId: string;
		/** Stores the hash of the entity object associated with this tracelog. Hash is computed using the object type code and its id. */
		readonly TraceParameterHash: number;
		/** XML representation of the trace parameters. */
		TraceParameterXml: string;
		/** For internal use only. */
		readonly TraceRegardingId: string;
		/** Status about the trace. */
		TraceStatus: boolean;
		/** Time zone code that was in use when the trace was created. */
		UTCConversionTimeZoneCode: number;
	}
}
declare namespace OptionSet {
	namespace TraceLog {
		enum Level {
			/** 3 */
			Error,
			/** 1 */
			Information,
			/** 2 */
			Warning
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
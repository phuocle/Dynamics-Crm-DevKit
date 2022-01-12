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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Indicates if this trace log can be deleted. */
		CanBeDeleted: DevKit.WebApi.BooleanValue;
		/** Indicates the collation level */
		CollationLevel: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who created the trace. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Time the error is created and logged. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the trace. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		ErrorDetails: DevKit.WebApi.StringValue;
		ErrorTypeDisplay: DevKit.WebApi.StringValue;
		/** Tells if this traceLog is created uniquely(only one) for the associated entity. */
		IsUnique: DevKit.WebApi.BooleanValue;
		/** Information about the trace level. */
		Level: DevKit.WebApi.OptionSetValue;
		MachineName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who modified the trace. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Time the error is updated and logged for the same regarding object. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the trace. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the trace. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Indicates the parent ID of the trace log. */
		ParentTraceLogId: DevKit.WebApi.LookupValue;
		/** Regarding mailbox or email server profile. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValue;
		/** Regarding mailbox or email server profile. */
		regardingobjectid_mailbox: DevKit.WebApi.LookupValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the regarding object. */
		RegardingObjectOwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Text of the trace. */
		Text: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** XML representation of the trace actions. */
		TraceActionXml: DevKit.WebApi.StringValue;
		/** Error code. */
		TraceCode: DevKit.WebApi.IntegerValue;
		/** XML representation of the trace details. */
		TraceDetailXml: DevKit.WebApi.StringValue;
		/** Unique identifier of the trace. */
		TraceLogId: DevKit.WebApi.GuidValue;
		/** Stores the hash of the entity object associated with this tracelog. Hash is computed using the object type code and its id. */
		TraceParameterHash: DevKit.WebApi.IntegerValueReadonly;
		/** XML representation of the trace parameters. */
		TraceParameterXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TraceRegardingId: DevKit.WebApi.LookupValueReadonly;
		/** Status about the trace. */
		TraceStatus: DevKit.WebApi.BooleanValue;
		/** Time zone code that was in use when the trace was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class searchtelemetryApi {
		/**
		* DynamicsCrm.DevKit searchtelemetryApi
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
		/** CorrelationId for the search */
		CorrelationId: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** If customer is allow our engineer to eye on */
		EyesOnAnalyticsAllowed: boolean | null;
		/** Feedback data for the search */
		FeedbackData: string | null;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string | null;
		/** RequestId for the search */
		RequestId: string | null;
		/** ScenarioName for the search, current will be one of RelevanceSearch/Marketing/Cxp */
		ScenarioName: string | null;
		/** Unique identifier for entity instances */
		searchtelemetryId: string | null;
		/** SessionId for the search */
		SessionId: string | null;
		/** Time to live in seconds. */
		TTLInSeconds: number | null;
		/** User Query */
		UserQuery: string | null;
		/** Version number of SearchTelemetry. */
		readonly versionnumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** CorrelationId for the search */
			readonly CorrelationId: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** If customer is allow our engineer to eye on */
			readonly EyesOnAnalyticsAllowed: string;
			/** Feedback data for the search */
			readonly FeedbackData: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** RequestId for the search */
			readonly RequestId: string;
			/** ScenarioName for the search, current will be one of RelevanceSearch/Marketing/Cxp */
			readonly ScenarioName: string;
			/** Unique identifier for entity instances */
			readonly searchtelemetryId: string;
			/** SessionId for the search */
			readonly SessionId: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** User Query */
			readonly UserQuery: string;
			/** Version number of SearchTelemetry. */
			readonly versionnumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace searchtelemetry {
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
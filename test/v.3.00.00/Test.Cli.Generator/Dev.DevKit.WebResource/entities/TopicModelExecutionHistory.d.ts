//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class TopicModelExecutionHistoryApi {
		/**
		* DynamicsCrm.DevKit TopicModelExecutionHistoryApi
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
		/** Unique identifier of the user who created the topic model execution history. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the topic model execution history. */
		readonly CreatedOnBehalfBy: string;
		/** Detailed error message for the Topic Analysis process */
		ErrorDetails: string;
		/** Fetch Xml */
		FetchXmlList: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Allow model to check is test executed. */
		IsTestExecution: boolean;
		/** Maximum number of Topics. */
		MaxTopics: number;
		/** Unique identifier of the user who modified the topic model execution history. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the topic model execution history. */
		readonly ModifiedOnBehalfBy: string;
		/** name */
		Name: string;
		/** Number of Topics Identified */
		NumberOfTopicsFound: number;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Record Correlation Id. */
		RecordCorrelationId: string;
		/** Number of Records Synchronized */
		RecordsProcessed: number;
		/** StartTime */
		StartTime_UtcDateAndTime: Date;
		/** Status */
		Status: OptionSet.TopicModelExecutionHistory.Status;
		/** StatusReason */
		StatusReason: OptionSet.TopicModelExecutionHistory.StatusReason;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier for Model associated with Topic Model Execution History. */
		TopicModelConfigurationId: string;
		/** Unique identifier for entity instances */
		TopicModelExecutionHistoryId: string;
		/** Unique identifier for Model associated with Topic Model Execution History. */
		TopicModelId: string;
		/** Duration (in mins) */
		TotalTime: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace TopicModelExecutionHistory {
		enum Status {
			/** 4 */
			Failed,
			/** 2 */
			In_progress,
			/** 1 */
			Queued,
			/** 3 */
			Success
		}
		enum StatusReason {
			/** 6 */
			Analysis_failed,
			/** 3 */
			Analyzing_topic_analysis_execution,
			/** 7 */
			Connection_failed,
			/** 5 */
			Synchronization_failed,
			/** 1 */
			Topic_analysis_execution_is_queued,
			/** 2 */
			Topic_analysis_execution_is_synchronizing,
			/** 4 */
			Topic_analysis_has_built
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
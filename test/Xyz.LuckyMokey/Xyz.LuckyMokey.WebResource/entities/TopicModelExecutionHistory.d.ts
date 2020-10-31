//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the topic model execution history. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the topic model execution history. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Detailed error message for the Topic Analysis process */
		ErrorDetails: DevKit.WebApi.StringValue;
		/** Fetch Xml */
		FetchXmlList: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Allow model to check is test executed. */
		IsTestExecution: DevKit.WebApi.BooleanValue;
		/** Maximum number of Topics. */
		MaxTopics: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the topic model execution history. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the topic model execution history. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** name */
		Name: DevKit.WebApi.StringValue;
		/** Number of Topics Identified */
		NumberOfTopicsFound: DevKit.WebApi.IntegerValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Record Correlation Id. */
		RecordCorrelationId: DevKit.WebApi.StringValue;
		/** Number of Records Synchronized */
		RecordsProcessed: DevKit.WebApi.IntegerValue;
		/** StartTime */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Status */
		Status: DevKit.WebApi.OptionSetValue;
		/** StatusReason */
		StatusReason: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for Model associated with Topic Model Execution History. */
		TopicModelConfigurationId: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		TopicModelExecutionHistoryId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Model associated with Topic Model Execution History. */
		TopicModelId: DevKit.WebApi.LookupValue;
		/** Duration (in mins) */
		TotalTime: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TopicModelExecutionHistory {
		enum Status {
			/** 1 */
			Queued,
			/** 2 */
			In_progress,
			/** 3 */
			Success,
			/** 4 */
			Failed
		}
		enum StatusReason {
			/** 1 */
			Topic_analysis_execution_is_queued,
			/** 2 */
			Topic_analysis_execution_is_synchronizing,
			/** 3 */
			Analyzing_topic_analysis_execution,
			/** 4 */
			Topic_analysis_has_built,
			/** 5 */
			Synchronization_failed,
			/** 6 */
			Analysis_failed,
			/** 7 */
			Connection_failed
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
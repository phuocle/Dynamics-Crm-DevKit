//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_knowledgesearchinsight_Information {
		interface Tabs {
		}
		interface Body {
			/** The string typed in the search field */
			msdyn_SearchTerm: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_knowledgesearchinsight_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_knowledgesearchinsight_Information */
		Body: DevKit.Formmsdyn_knowledgesearchinsight_Information.Body;
		/** The Process of form msdyn_knowledgesearchinsight_Information */
		Process: DevKit.Formmsdyn_knowledgesearchinsight_Information.Process;
		/** The SidePanes of form msdyn_knowledgesearchinsight_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_knowledgesearchinsightApi {
		/**
		* DynamicsCrm.DevKit msdyn_knowledgesearchinsightApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the application where the knowledge search is performed. */
		msdyn_ApplicationName: DevKit.WebApi.StringValue;
		/** Designed for federation search. Used to correlate the search that triggered different search records from different search providers. */
		msdyn_CorrelationId: DevKit.WebApi.StringValue;
		/** The ID of control knowledge search where the search is performed. */
		msdyn_CustomControlId: DevKit.WebApi.StringValue;
		/** Entity Record ID of the Entity Type */
		msdyn_EntityRecordId: DevKit.WebApi.StringValue;
		/** Which kind of entity context the knowledge search performed */
		msdyn_EntityType: DevKit.WebApi.StringValue;
		/** The filters selected when performing the search. */
		msdyn_Filters: DevKit.WebApi.StringValue;
		/** Whether the search is initiated by the system automatically or manually initiated by the user. */
		msdyn_InitiatedBy: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_knowledgesearchinsightId: DevKit.WebApi.GuidValue;
		/** The time to return search results. */
		msdyn_ResponseTime: DevKit.WebApi.IntegerValue;
		/** The total count of knowledge articles returned */
		msdyn_ResultCount: DevKit.WebApi.IntegerValue;
		/** Designed for federation search. The ID of the federated search provider. */
		msdyn_SearchProviderId: DevKit.WebApi.StringValue;
		/** Designed for federation search. The name of the federated search provider. */
		msdyn_SearchProviderName: DevKit.WebApi.StringValue;
		/** The string typed in the search field */
		msdyn_SearchTerm: DevKit.WebApi.StringValue;
		/** The type of search run, like full text search, relevance search, etc. */
		msdyn_SearchType: DevKit.WebApi.StringValue;
		/** The sort selected when performing the search. */
		msdyn_SortBy: DevKit.WebApi.StringValue;
		/** Date and time when the search is performed */
		msdyn_TimeStamp_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Knowledge Search Insight */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Knowledge Search Insight */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_knowledgesearchinsight {
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
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
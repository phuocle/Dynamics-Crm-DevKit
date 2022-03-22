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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the application where the knowledge search is performed. */
		msdyn_ApplicationName: string;
		/** Designed for federation search. Used to correlate the search that triggered different search records from different search providers. */
		msdyn_CorrelationId: string;
		/** The ID of control knowledge search where the search is performed. */
		msdyn_CustomControlId: string;
		/** Entity Record ID of the Entity Type */
		msdyn_EntityRecordId: string;
		/** Which kind of entity context the knowledge search performed */
		msdyn_EntityType: string;
		/** The filters selected when performing the search. */
		msdyn_Filters: string;
		/** Whether the search is initiated by the system automatically or manually initiated by the user. */
		msdyn_InitiatedBy: string;
		/** Unique identifier for entity instances */
		msdyn_knowledgesearchinsightId: string;
		/** The time to return search results. */
		msdyn_ResponseTime: number;
		/** The total count of knowledge articles returned */
		msdyn_ResultCount: number;
		/** Designed for federation search. The ID of the federated search provider. */
		msdyn_SearchProviderId: string;
		/** Designed for federation search. The name of the federated search provider. */
		msdyn_SearchProviderName: string;
		/** The string typed in the search field */
		msdyn_SearchTerm: string;
		/** The type of search run, like full text search, relevance search, etc. */
		msdyn_SearchType: string;
		/** The sort selected when performing the search. */
		msdyn_SortBy: string;
		/** Date and time when the search is performed */
		msdyn_TimeStamp_TimezoneDateAndTime: Date;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Knowledge Search Insight */
		statecode: OptionSet.msdyn_knowledgesearchinsight.statecode;
		/** Reason for the status of the Knowledge Search Insight */
		statuscode: OptionSet.msdyn_knowledgesearchinsight.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
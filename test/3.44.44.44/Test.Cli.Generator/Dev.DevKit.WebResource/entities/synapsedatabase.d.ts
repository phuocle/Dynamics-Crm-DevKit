//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class synapsedatabaseApi {
		/**
		* DynamicsCrm.DevKit synapsedatabaseApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.synapsedatabase.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Name of the Synapse database. */
		DatabaseName: string;
		/** Unique identifier for Data Lake Folder associated with Synapse Database. */
		datalakefolder: string;
		/** The development endpoint for this Synapse database. */
		DevelopmentEndpoint: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Connection Id for the Lakehouse that contains shortcuts to the table. */
		LakehouseConnectionId: string;
		/** Id for the Lakehouse that contains shortcuts to the table. */
		LakehouseId: string;
		/** Id for the Power BI workspace that contains the Lakehouse */
		LakehouseWorkspaceId: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Azure resource group of the Synapse database. */
		ResourceGroup: string;
		/** Schema prefix to use for the table names */
		SchemaPrefix: string;
		/** Serverless Sql Endpoint of the Synapse database. */
		ServerlessSqlEndpoint: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Spark pool configuration */
		SparkPoolConfig: string;
		/** Status of the Synapse Database */
		statecode: OptionSet.synapsedatabase.statecode;
		/** Reason for the status of the Synapse Database */
		statuscode: OptionSet.synapsedatabase.statuscode;
		/** Azure subscription for the Synapse database */
		Subscription: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier for entity instances */
		synapsedatabaseId: string;
		/** Azure tenant of the Synapse database */
		Tenant: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique Name for the entity. */
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Workspace name of the Synapse database. */
		WorkspaceName: string;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Name of the Synapse database. */
			readonly DatabaseName: string;
			/** Unique identifier for Data Lake Folder associated with Synapse Database. */
			readonly datalakefolder: string;
			/** The development endpoint for this Synapse database. */
			readonly DevelopmentEndpoint: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Connection Id for the Lakehouse that contains shortcuts to the table. */
			readonly LakehouseConnectionId: string;
			/** Id for the Lakehouse that contains shortcuts to the table. */
			readonly LakehouseId: string;
			/** Id for the Power BI workspace that contains the Lakehouse */
			readonly LakehouseWorkspaceId: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Azure resource group of the Synapse database. */
			readonly ResourceGroup: string;
			/** Schema prefix to use for the table names */
			readonly SchemaPrefix: string;
			/** Serverless Sql Endpoint of the Synapse database. */
			readonly ServerlessSqlEndpoint: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Spark pool configuration */
			readonly SparkPoolConfig: string;
			/** Status of the Synapse Database */
			readonly statecode: string;
			/** Reason for the status of the Synapse Database */
			readonly statuscode: string;
			/** Azure subscription for the Synapse database */
			readonly Subscription: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier for entity instances */
			readonly synapsedatabaseId: string;
			/** Azure tenant of the Synapse database */
			readonly Tenant: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique Name for the entity. */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Workspace name of the Synapse database. */
			readonly WorkspaceName: string;
		}
	}
}
declare namespace OptionSet {
	namespace synapsedatabase {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
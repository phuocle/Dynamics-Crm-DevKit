//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class datalakeworkspaceApi {
		/**
		* DynamicsCrm.DevKit datalakeworkspaceApi
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
		readonly ComponentState: OptionSet.datalakeworkspace.ComponentState;
		/** Azure Data Lake container endpoint for this workspace. */
		readonly containerendpoint: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique Name for the entity. */
		datalakeworkspace_UniqueName: string;
		/** Unique identifier for entity instances */
		datalakeworkspaceId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Indicates if workspace data storage uses customer capacity. */
		iscustomercapacity: boolean;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates if deep copy is enabled for workspace. */
		isdeepcopyenabled: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Indicates if workspace data and metadata are visible to all applications, or only visible to the workspace owner and applications with explicit permissions to the workspace. */
		isprivate: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** The app id which owns this workspace. The owning app id has full control i.e. read, write and execute permissions on the ADLS folder. */
		owningappid: string;
		/** Workspace path in the Azure Data Lake container. */
		readonly path: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Data Lake Workspace */
		readonly statecode: OptionSet.datalakeworkspace.statecode;
		/** Reason for the status of the Data Lake Workspace */
		readonly statuscode: OptionSet.datalakeworkspace.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** AAD tenant id where the owning application id is registered. */
		tenantid: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		/** Application Id that is white listed in AAD Tenant ID to access the Graph API. */
		whitelistedappid: string;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Azure Data Lake container endpoint for this workspace. */
			readonly containerendpoint: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique Name for the entity. */
			readonly datalakeworkspace_UniqueName: string;
			/** Unique identifier for entity instances */
			readonly datalakeworkspaceId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indicates if workspace data storage uses customer capacity. */
			readonly iscustomercapacity: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates if deep copy is enabled for workspace. */
			readonly isdeepcopyenabled: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Indicates if workspace data and metadata are visible to all applications, or only visible to the workspace owner and applications with explicit permissions to the workspace. */
			readonly isprivate: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** The app id which owns this workspace. The owning app id has full control i.e. read, write and execute permissions on the ADLS folder. */
			readonly owningappid: string;
			/** Workspace path in the Azure Data Lake container. */
			readonly path: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Data Lake Workspace */
			readonly statecode: string;
			/** Reason for the status of the Data Lake Workspace */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** AAD tenant id where the owning application id is registered. */
			readonly tenantid: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Application Id that is white listed in AAD Tenant ID to access the Graph API. */
			readonly whitelistedappid: string;
		}
	}
}
declare namespace OptionSet {
	namespace datalakeworkspace {
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
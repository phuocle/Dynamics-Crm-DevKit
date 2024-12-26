//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class datalakefolderApi {
		/**
		* DynamicsCrm.DevKit datalakefolderApi
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
		/** Azure Data Lake Access Type. */
		AccessType: string;
		/** Path to the CDM file. */
		CDMPath: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.datalakefolder.ComponentState;
		/** Azure Data Lake container endpoint for this folder. */
		containerendpoint: string;
		/** The security group for contributor access. */
		ContributorSecurityGroupId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Unique Name for the entity. */
		datalakefolder_UniqueName: string;
		/** Unique identifier for entity instances */
		datalakefolderId: string;
		/** Sub folder path to delta lake. */
		deltaLakePath: string;
		/** Extended Properties associated with this folder. */
		extendedproperties: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Indicates whether lake is used for compliance purposes or not. */
		IsComplianceLake: boolean;
		/** Indicates if folder data storage uses customer capacity. */
		iscustomercapacity: boolean;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates if deep copy is enabled for folder. */
		isdeepcopyenabled: boolean;
		/** Indicates whether lake is managed or external. */
		IsExternalLake: boolean;
		/** Indicates whether external lake is read only. */
		IsExternalLakeReadOnly: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Indicates if folder data and metadata are visible to all applications, or only visible to the folder owner and applications with explicit permissions to the folder. */
		isprivate: boolean;
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
		/** The app id which owns this folder. The owning app id has full control i.e. read, write and execute permissions on the ADLS folder. */
		owningappid: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier of the parent folder for this folder. */
		parentfolderid: string;
		/** Folder path in the Azure Data Lake container. */
		path: string;
		/** The security group for reader access. */
		ReaderSecurityGroupId: string;
		/** Azure resource group of the storage account. */
		ResourceGroup: string;
		/** Indicates if folder is shared for readaccess for other FPAs. */
		sharedforreadaccess: boolean;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Data Lake Folder */
		statecode: OptionSet.datalakefolder.statecode;
		/** Reason for the status of the Data Lake Folder */
		statuscode: OptionSet.datalakefolder.statuscode;
		/** Azure subscription of the storage account. */
		Subscription: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Enable schema synchronization to Dataverse. */
		SynchronizeSchemaToDataverse: boolean;
		/** Enable schema synchronization to Synapse database. */
		SynchronizeSchemaToSynapseDb: boolean;
		/** Azure tenant of the storage account. */
		Tenant: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Azure Data Lake Access Type. */
			readonly AccessType: string;
			/** Path to the CDM file. */
			readonly CDMPath: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Azure Data Lake container endpoint for this folder. */
			readonly containerendpoint: string;
			/** The security group for contributor access. */
			readonly ContributorSecurityGroupId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique Name for the entity. */
			readonly datalakefolder_UniqueName: string;
			/** Unique identifier for entity instances */
			readonly datalakefolderId: string;
			/** Sub folder path to delta lake. */
			readonly deltaLakePath: string;
			/** Extended Properties associated with this folder. */
			readonly extendedproperties: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indicates whether lake is used for compliance purposes or not. */
			readonly IsComplianceLake: string;
			/** Indicates if folder data storage uses customer capacity. */
			readonly iscustomercapacity: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates if deep copy is enabled for folder. */
			readonly isdeepcopyenabled: string;
			/** Indicates whether lake is managed or external. */
			readonly IsExternalLake: string;
			/** Indicates whether external lake is read only. */
			readonly IsExternalLakeReadOnly: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Indicates if folder data and metadata are visible to all applications, or only visible to the folder owner and applications with explicit permissions to the folder. */
			readonly isprivate: string;
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
			/** The app id which owns this folder. The owning app id has full control i.e. read, write and execute permissions on the ADLS folder. */
			readonly owningappid: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier of the parent folder for this folder. */
			readonly parentfolderid: string;
			/** Folder path in the Azure Data Lake container. */
			readonly path: string;
			/** The security group for reader access. */
			readonly ReaderSecurityGroupId: string;
			/** Azure resource group of the storage account. */
			readonly ResourceGroup: string;
			/** Indicates if folder is shared for readaccess for other FPAs. */
			readonly sharedforreadaccess: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Data Lake Folder */
			readonly statecode: string;
			/** Reason for the status of the Data Lake Folder */
			readonly statuscode: string;
			/** Azure subscription of the storage account. */
			readonly Subscription: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Enable schema synchronization to Dataverse. */
			readonly SynchronizeSchemaToDataverse: string;
			/** Enable schema synchronization to Synapse database. */
			readonly SynchronizeSchemaToSynapseDb: string;
			/** Azure tenant of the storage account. */
			readonly Tenant: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace datalakefolder {
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
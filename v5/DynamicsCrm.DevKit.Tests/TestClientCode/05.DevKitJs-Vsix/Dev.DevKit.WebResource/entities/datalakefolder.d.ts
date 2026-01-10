//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class datalakefolderApi {
		/**
		* DynamicsCrm.DevKit datalakefolderApi
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
		/** Azure Data Lake Access Type. */
		AccessType: string | null;
		/** Path to the CDM file. */
		CDMPath: string | null;
		/** Azure location where the compliance lake should be created. */
		ComplianceLakeLocation: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.datalakefolder.ComponentState | null;
		/** Azure Data Lake container endpoint for this folder. */
		containerendpoint: string | null;
		/** The security group for contributor access. */
		ContributorSecurityGroupId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique Name for the entity. */
		datalakefolder_UniqueName: string | null;
		/** Unique identifier for entity instances */
		datalakefolderId: string | null;
		/** Sub folder path to delta lake. */
		deltaLakePath: string | null;
		/** Extended Properties associated with this folder. */
		extendedproperties: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Indicates whether lake is used for compliance purposes or not. */
		IsComplianceLake: boolean | null;
		/** Indicates if folder data storage uses customer capacity. */
		iscustomercapacity: boolean | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates if deep copy is enabled for folder. */
		isdeepcopyenabled: boolean | null;
		/** Indicates whether lake is managed or external. */
		IsExternalLake: boolean | null;
		/** Indicates whether external lake is read only. */
		IsExternalLakeReadOnly: boolean | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Indicates if folder data and metadata are visible to all applications, or only visible to the folder owner and applications with explicit permissions to the folder. */
		isprivate: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** The app id which owns this folder. The owning app id has full control i.e. read, write and execute permissions on the ADLS folder. */
		owningappid: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Unique identifier of the parent folder for this folder. */
		parentfolderid: string | null;
		/** Folder path in the Azure Data Lake container. */
		path: string | null;
		/** The security group for reader access. */
		ReaderSecurityGroupId: string | null;
		/** Azure resource group of the storage account. */
		ResourceGroup: string | null;
		/** Indicates if folder is shared for readaccess for other FPAs. */
		sharedforreadaccess: boolean | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Data Lake Folder */
		statecode: OptionSet.datalakefolder.statecode | null;
		/** Reason for the status of the Data Lake Folder */
		statuscode: OptionSet.datalakefolder.statuscode | null;
		/** Azure subscription of the storage account. */
		Subscription: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Enable schema synchronization to Dataverse. */
		SynchronizeSchemaToDataverse: boolean | null;
		/** Enable schema synchronization to Synapse database. */
		SynchronizeSchemaToSynapseDb: boolean | null;
		/** Azure tenant of the storage account. */
		Tenant: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Azure Data Lake Access Type. */
			readonly AccessType: string;
			/** Path to the CDM file. */
			readonly CDMPath: string;
			/** Azure location where the compliance lake should be created. */
			readonly ComplianceLakeLocation: string;
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
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
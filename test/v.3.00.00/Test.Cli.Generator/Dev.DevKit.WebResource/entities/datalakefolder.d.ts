﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formdatalakefolder_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formdatalakefolder_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form datalakefolder_Information */
		Body: DevKit.Formdatalakefolder_Information.Body;
		/** The Process of form datalakefolder_Information */
		Process: DevKit.Formdatalakefolder_Information.Process;
		/** The SidePanes of form datalakefolder_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formdatalakefolder_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formdatalakefolder_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form datalakefolder_Information2 */
		Body: DevKit.Formdatalakefolder_Information2.Body;
		/** The Process of form datalakefolder_Information2 */
		Process: DevKit.Formdatalakefolder_Information2.Process;
		/** The SidePanes of form datalakefolder_Information2 */
		SidePanes: DevKit.SidePanes;
	}
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
		/** Extended Properties associated with this folder. */
		extendedproperties: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
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
		/** Folder path in the Azure Data Lake container. */
		path: string;
		/** The security group for reader access. */
		ReaderSecurityGroupId: string;
		/** Azure resource group of the storage account. */
		ResourceGroup: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
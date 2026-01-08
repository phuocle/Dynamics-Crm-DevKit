//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formpackagehistory_Information {
		interface Tabs {
		}
		interface Body {
			/** The application name of the target for installation */
			ApplicationName: DevKit.Controls.String;
			/** The catalog that acted as the source for the artifact */
			CatalogId: DevKit.Controls.String;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** deploy package as given user (azureactivedirectoryobjectid) */
			DeployAsUserId: DevKit.Controls.String;
			/** The display name for this operation */
			ExecutionName: DevKit.Controls.String;
			/** Indicates whether this package history record represents a cluster operation */
			IsClusterOperation: DevKit.Controls.Boolean;
			/** Stores the package file for installation */
			PackageFile: DevKit.Controls.File;
			/** Type of the package */
			PackageType: DevKit.Controls.OptionSet;
			/** Priority level for the package */
			Priority: DevKit.Controls.OptionSet;
			/** Deployment Package settings value. */
			Settings: DevKit.Controls.String;
			/** Stage of the operation */
			StageValue: DevKit.Controls.OptionSet;
			/** The unique name of the target for installation */
			UniqueName: DevKit.Controls.String;
		}
	}
	export class Formpackagehistory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form packagehistory_Information */
		Body: DevKit.Formpackagehistory_Information.Body;
	}
	export class packagehistoryApi {
		/**
		* DynamicsCrm.DevKit packagehistoryApi
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
		/** Unique identifier for the application installed */
		ApplicationId: string | null;
		/** The application name of the target for installation */
		ApplicationName: string | null;
		/** The catalog that acted as the source for the artifact */
		CatalogId: string | null;
		/** The correlationId for this process */
		CorrelationId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** deploy package as given user (azureactivedirectoryobjectid) */
		DeployAsUserId: string | null;
		/** Stores the package deployment logs for an installation */
		readonly DeploymentLog_name: string | null;
		/** Stores Deployment MessageId for the queued package. */
		DeploymentMessageId: string | null;
		/** The display name for this operation */
		ExecutionName: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Indicates whether this package history record represents a cluster operation */
		IsClusterOperation: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** OperationId */
		OperationId: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Stores the package file for installation */
		readonly PackageFile_name: string | null;
		/** Unique identifier for a single package history execution */
		packagehistoryId: string | null;
		/** Unique identifier for the package to install */
		PackageId: string | null;
		PackageInstanceId: string | null;
		/** Type of the package */
		PackageType: OptionSet.packagehistory.PackageType | null;
		/** Priority level for the package */
		Priority: OptionSet.packagehistory.Priority | null;
		PublisherId: string | null;
		/** The publisher name of the target for installation */
		PublisherName: string | null;
		/** Deployment Package settings value. */
		Settings: string | null;
		/** Stage of the operation */
		StageValue: OptionSet.packagehistory.StageValue | null;
		/** Status of the operation */
		statecode: OptionSet.packagehistory.statecode | null;
		/** Reason for the status of the operation */
		statuscode: OptionSet.packagehistory.statuscode | null;
		/** Status for the orchestration */
		StatusMessage: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** The unique name of the target for installation */
		UniqueName: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** The version of the target for installation */
		Version: string | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for the application installed */
			readonly ApplicationId: string;
			/** The application name of the target for installation */
			readonly ApplicationName: string;
			/** The catalog that acted as the source for the artifact */
			readonly CatalogId: string;
			/** The correlationId for this process */
			readonly CorrelationId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** deploy package as given user (azureactivedirectoryobjectid) */
			readonly DeployAsUserId: string;
			/** Stores the package deployment logs for an installation */
			readonly DeploymentLog_name: string;
			/** Stores Deployment MessageId for the queued package. */
			readonly DeploymentMessageId: string;
			/** The display name for this operation */
			readonly ExecutionName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indicates whether this package history record represents a cluster operation */
			readonly IsClusterOperation: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** OperationId */
			readonly OperationId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Stores the package file for installation */
			readonly PackageFile_name: string;
			/** Unique identifier for a single package history execution */
			readonly packagehistoryId: string;
			/** Unique identifier for the package to install */
			readonly PackageId: string;
			readonly PackageInstanceId: string;
			/** Type of the package */
			readonly PackageType: string;
			/** Priority level for the package */
			readonly Priority: string;
			readonly PublisherId: string;
			/** The publisher name of the target for installation */
			readonly PublisherName: string;
			/** Deployment Package settings value. */
			readonly Settings: string;
			/** Stage of the operation */
			readonly StageValue: string;
			/** Status of the operation */
			readonly statecode: string;
			/** Reason for the status of the operation */
			readonly statuscode: string;
			/** Status for the orchestration */
			readonly StatusMessage: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** The unique name of the target for installation */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** The version of the target for installation */
			readonly Version: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace packagehistory {
		enum PackageType {
			/** App = 0*/
			App = 0,
			/** DatabaseVersionUpdate = 2*/
			DatabaseVersionUpdate = 2,
			/** Solution = 1*/
			Solution = 1
		}
		enum Priority {
			/** High = 1*/
			High = 1,
			/** Low = 3*/
			Low = 3,
			/** Medium = 2*/
			Medium = 2
		}
		enum StageValue {
			/** Configuration = 2*/
			Configuration = 2,
			/** CustomCode = 4*/
			CustomCode = 4,
			/** DataImport = 5*/
			DataImport = 5,
			/** FnO = 6*/
			FnO = 6,
			/** PackageInit = 3*/
			PackageInit = 3,
			/** PackageProcessing = 0*/
			PackageProcessing = 0,
			/** QueuedForCluster = 8*/
			QueuedForCluster = 8,
			/** SchemaDeployed = 7*/
			SchemaDeployed = 7,
			/** Solutions = 1*/
			Solutions = 1
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Completed = 526430003*/
			Completed = 526430003,
			/** Failed = 526430004*/
			Failed = 526430004,
			/** In_Process = 526430002*/
			In_Process = 526430002,
			/** Requested = 526430000*/
			Requested = 526430000,
			/** Scheduled = 526430001*/
			Scheduled = 526430001,
			/** Uninstalled = 526430005*/
			Uninstalled = 526430005
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
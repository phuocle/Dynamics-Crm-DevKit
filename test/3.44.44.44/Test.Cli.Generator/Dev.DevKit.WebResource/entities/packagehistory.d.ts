//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formpackagehistory_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** The display name for this operation */
			ExecutionName: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formpackagehistory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form packagehistory_Information */
		Body: DevKit.Formpackagehistory_Information.Body;
		/** The Navigation of form packagehistory_Information */
		Navigation: DevKit.Formpackagehistory_Information.Navigation;
		/** The SidePanes of form packagehistory_Information */
		SidePanes: DevKit.SidePanes;
	}
	class packagehistoryApi {
		/**
		* DynamicsCrm.DevKit packagehistoryApi
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
		/** Unique identifier for the application installed */
		ApplicationId: string;
		/** The application name of the target for installation */
		ApplicationName: string;
		/** The catalog that acted as the source for the artifact */
		CatalogId: string;
		/** The correlationId for this process */
		CorrelationId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Stores the package deployment logs for an installation */
		readonly DeploymentLog_name: string;
		/** The display name for this operation */
		ExecutionName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** OperationId */
		OperationId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier for a single package history execution */
		packagehistoryId: string;
		/** Unique identifier for the package to install */
		PackageId: string;
		PublisherId: string;
		/** The publisher name of the target for installation */
		PublisherName: string;
		/** Status of the operation */
		statecode: OptionSet.packagehistory.statecode;
		/** Reason for the status of the operation */
		statuscode: OptionSet.packagehistory.statuscode;
		/** Status for the orchestration */
		StatusMessage: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** The unique name of the target for installation */
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** The version of the target for installation */
		Version: string;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** Stores the package deployment logs for an installation */
			readonly DeploymentLog_name: string;
			/** The display name for this operation */
			readonly ExecutionName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
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
			/** Unique identifier for a single package history execution */
			readonly packagehistoryId: string;
			/** Unique identifier for the package to install */
			readonly PackageId: string;
			readonly PublisherId: string;
			/** The publisher name of the target for installation */
			readonly PublisherName: string;
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
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 526430003 */
			Completed,
			/** 526430004 */
			Failed,
			/** 526430002 */
			In_Process,
			/** 526430000 */
			Requested,
			/** 526430001 */
			Scheduled,
			/** 526430005 */
			Uninstalled
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
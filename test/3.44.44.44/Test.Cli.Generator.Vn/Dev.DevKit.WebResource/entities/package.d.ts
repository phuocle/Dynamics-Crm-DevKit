//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formpackage_Information {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {

		}
	}
	class Formpackage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form package_Information */
		Body: DevKit.Formpackage_Information.Body;
		/** The Navigation of form package_Information */
		Navigation: DevKit.Formpackage_Information.Navigation;
		/** The SidePanes of form package_Information */
		SidePanes: DevKit.SidePanes;
	}
	class packageApi {
		/**
		* DynamicsCrm.DevKit packageApi
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
		AppId: string;
		ApplicationName: string;
		/** The Catalog identifier for packages installed from a Catalog */
		CatalogId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Stores the package deployment logs for an installation */
		readonly DeploymentLog_name: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Date and time when the package was first installed. */
		InstalledOn_UtcDateAndTime: Date;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier for entity instances */
		packageId: string;
		PackageInstanceId: string;
		PackageInstanceOperationId: string;
		/** The unique name of the package. */
		PackageUniqueName: string;
		PackageVersion: string;
		PublisherId: string;
		PublisherName: string;
		/** Status of the Package */
		statecode: OptionSet.package.statecode;
		/** Reason for the status of the Package */
		statuscode: OptionSet.package.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		TPSPackageId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			readonly AppId: string;
			readonly ApplicationName: string;
			/** The Catalog identifier for packages installed from a Catalog */
			readonly CatalogId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Stores the package deployment logs for an installation */
			readonly DeploymentLog_name: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Date and time when the package was first installed. */
			readonly InstalledOn_UtcDateAndTime: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier for entity instances */
			readonly packageId: string;
			readonly PackageInstanceId: string;
			readonly PackageInstanceOperationId: string;
			/** The unique name of the package. */
			readonly PackageUniqueName: string;
			readonly PackageVersion: string;
			readonly PublisherId: string;
			readonly PublisherName: string;
			/** Status of the Package */
			readonly statecode: string;
			/** Reason for the status of the Package */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			readonly TPSPackageId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace package {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}
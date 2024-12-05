//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPackages {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the delegate user who modified the record. */
			ModifiedOnBehalfBy: DevKit.Controls.Lookup;
			/** Async Job used to track this operation.  */
			mspcat_AsyncOperationId: DevKit.Controls.String;
			/** Type of Deployment this package is intended to be used for */
			mspcat_IntendedDeploymentType: DevKit.Controls.OptionSet;
			mspcat_Name: DevKit.Controls.String;
			/** Describes the request operation on this package */
			mspcat_Operation: DevKit.Controls.OptionSet;
			mspcat_packagefile: DevKit.Controls.File;
			mspcat_ProcessingMessage: DevKit.Controls.String;
			/** Link between the solution unique name and the catalog package */
			mspcat_SolutionUniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the Package Store */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Package Store */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			mspcat_mspcat_catalogsubmissionfiles_PackageStor: DevKit.Controls.NavigationItem
		}
		interface Grid {
			Subgrid_new_1: DevKit.Controls.Grid;
		}
	}
	class FormPackages extends DevKit.IForm {
		/**
		* Packages [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Packages */
		Body: DevKit.FormPackages.Body;
		/** The Navigation of form Packages */
		Navigation: DevKit.FormPackages.Navigation;
		/** The Grid of form Packages */
		Grid: DevKit.FormPackages.Grid;
		/** The SidePanes of form Packages */
		SidePanes: DevKit.SidePanes;
	}
	class mspcat_PackageStoreApi {
		/**
		* DynamicsCrm.DevKit mspcat_PackageStoreApi
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
		/** Async Job used to track this operation.  */
		mspcat_AsyncOperationId: string;
		/** Type of Deployment this package is intended to be used for */
		mspcat_IntendedDeploymentType: OptionSet.mspcat_PackageStore.mspcat_IntendedDeploymentType;
		mspcat_Name: string;
		/** Describes the request operation on this package */
		mspcat_Operation: OptionSet.mspcat_PackageStore.mspcat_Operation;
		/** File that the package is stored in */
		readonly mspcat_PackageFile_name: string;
		/** Unique identifier for entity instances */
		mspcat_PackageStoreId: string;
		mspcat_ProcessingMessage: string;
		/** Link between the solution unique name and the catalog package */
		mspcat_SolutionUniqueName: string;
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
		/** Status of the Package Store */
		statecode: OptionSet.mspcat_PackageStore.statecode;
		/** Reason for the status of the Package Store */
		statuscode: OptionSet.mspcat_PackageStore.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Async Job used to track this operation.  */
			readonly mspcat_AsyncOperationId: string;
			/** Type of Deployment this package is intended to be used for */
			readonly mspcat_IntendedDeploymentType: string;
			readonly mspcat_Name: string;
			/** Describes the request operation on this package */
			readonly mspcat_Operation: string;
			/** File that the package is stored in */
			readonly mspcat_PackageFile_name: string;
			/** Unique identifier for entity instances */
			readonly mspcat_PackageStoreId: string;
			readonly mspcat_ProcessingMessage: string;
			/** Link between the solution unique name and the catalog package */
			readonly mspcat_SolutionUniqueName: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the Package Store */
			readonly statecode: string;
			/** Reason for the status of the Package Store */
			readonly statuscode: string;
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
	namespace mspcat_PackageStore {
		enum mspcat_IntendedDeploymentType {
			/** 526430000 */
			Standard,
			/** 526430001 */
			Template
		}
		enum mspcat_Operation {
			/** 958090001 */
			Create_Package,
			/** 526430001 */
			Package_Upload,
			/** 958090000 */
			Submit_To_Catalog
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 958090001 */
			Completed,
			/** 958090003 */
			Draft,
			/** 958090002 */
			Failed,
			/** 2 */
			Inactive,
			/** 1 */
			Pending,
			/** 958090000 */
			Running,
			/** 958090004 */
			Submitted
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
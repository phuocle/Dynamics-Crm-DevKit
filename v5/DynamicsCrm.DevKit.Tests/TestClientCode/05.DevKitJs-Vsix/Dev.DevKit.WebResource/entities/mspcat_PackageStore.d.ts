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
			/** Name */
			mspcat_Name: DevKit.Controls.String;
			/** Describes the request operation on this package */
			mspcat_Operation: DevKit.Controls.OptionSet;
			/** File that the package is stored in */
			mspcat_PackageFile: DevKit.Controls.File;
			/** Processing Message */
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
		interface Grid {
			/** Files for Submission To Catalog */
			Subgrid_new_1: DevKit.Controls.Grid;
		}
	}
	export class FormPackages extends DevKit.IForm {
		/**
		* Packages [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Packages */
		Body: DevKit.FormPackages.Body;
		/** The Grid of form Packages */
		Grid: DevKit.FormPackages.Grid;
	}
	export class mspcat_PackageStoreApi {
		/**
		* DynamicsCrm.DevKit mspcat_PackageStoreApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Async Job used to track this operation.  */
		mspcat_AsyncOperationId: string | null;
		/** Type of Deployment this package is intended to be used for */
		mspcat_IntendedDeploymentType: OptionSet.mspcat_PackageStore.mspcat_IntendedDeploymentType | null;
		mspcat_Name: string | null;
		/** Describes the request operation on this package */
		mspcat_Operation: OptionSet.mspcat_PackageStore.mspcat_Operation | null;
		/** File that the package is stored in */
		readonly mspcat_PackageFile_name: string | null;
		/** Unique identifier for entity instances */
		mspcat_PackageStoreId: string | null;
		mspcat_ProcessingMessage: string | null;
		/** Link between the solution unique name and the catalog package */
		mspcat_SolutionUniqueName: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Status of the Package Store */
		statecode: OptionSet.mspcat_PackageStore.statecode | null;
		/** Reason for the status of the Package Store */
		statuscode: OptionSet.mspcat_PackageStore.statuscode | null;
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
			/** Standard = 526430000*/
			Standard = 526430000,
			/** Template = 526430001*/
			Template = 526430001
		}
		enum mspcat_Operation {
			/** Create_Package = 958090001*/
			Create_Package = 958090001,
			/** Package_Upload = 526430001*/
			Package_Upload = 526430001,
			/** Submit_To_Catalog = 958090000*/
			Submit_To_Catalog = 958090000
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Completed = 958090001*/
			Completed = 958090001,
			/** Draft = 958090003*/
			Draft = 958090003,
			/** Failed = 958090002*/
			Failed = 958090002,
			/** Inactive = 2*/
			Inactive = 2,
			/** Pending = 1*/
			Pending = 1,
			/** Running = 958090000*/
			Running = 958090000,
			/** Submitted = 958090004*/
			Submitted = 958090004
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
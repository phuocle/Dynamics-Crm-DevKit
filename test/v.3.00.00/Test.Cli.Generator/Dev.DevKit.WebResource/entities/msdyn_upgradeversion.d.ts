//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_upgradeversion_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Date/time when a single-version upgrade finished */
			msdyn_Finished: DevKit.Controls.DateTime;
			/** Version that was installed before a single-version upgrade */
			msdyn_StartingVersion: DevKit.Controls.String;
			/** Status/outcome of a single-version upgrade */
			msdyn_Status: DevKit.Controls.OptionSet;
			/** Summary of a single-version upgrade */
			msdyn_summary: DevKit.Controls.String;
			/** Version that will be achieved by a single-version upgrade */
			msdyn_TargetVersion: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			UpgradeSteps: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_upgradeversion_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_upgradeversion_Information */
		Body: DevKit.Formmsdyn_upgradeversion_Information.Body;
		/** The Process of form msdyn_upgradeversion_Information */
		Process: DevKit.Formmsdyn_upgradeversion_Information.Process;
		/** The Grid of form msdyn_upgradeversion_Information */
		Grid: DevKit.Formmsdyn_upgradeversion_Information.Grid;
		/** The SidePanes of form msdyn_upgradeversion_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_upgradeversionApi {
		/**
		* DynamicsCrm.DevKit msdyn_upgradeversionApi
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
		CreatedOn_UtcDateAndTime: Date;
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
		/** Date/time when a single-version upgrade finished */
		msdyn_Finished_UtcDateAndTime: Date;
		/** Version that was installed before a single-version upgrade */
		msdyn_StartingVersion: string;
		/** Status/outcome of a single-version upgrade */
		msdyn_Status: OptionSet.msdyn_upgradeversion.msdyn_Status;
		/** Summary of a single-version upgrade */
		msdyn_summary: string;
		/** Version that will be achieved by a single-version upgrade */
		msdyn_TargetVersion: string;
		/** Package deployer run that invoked a single-version upgrade */
		msdyn_UpgradeRun: string;
		/** Unique identifier for entity instances */
		msdyn_upgradeversionId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the UpgradeVersion */
		statecode: OptionSet.msdyn_upgradeversion.statecode;
		/** Reason for the status of the UpgradeVersion */
		statuscode: OptionSet.msdyn_upgradeversion.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_upgradeversion {
		enum msdyn_Status {
			/** 100000002 */
			Failure,
			/** 100000000 */
			Started,
			/** 100000001 */
			Success
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
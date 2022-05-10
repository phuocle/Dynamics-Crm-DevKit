//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_upgraderun_Information {
		interface tab__4A6546DD_DFC2_4A18_88D6_04661583D80E_Sections {
		}
		interface tab__4A6546DD_DFC2_4A18_88D6_04661583D80E extends DevKit.Controls.ITab {
			Section: tab__4A6546DD_DFC2_4A18_88D6_04661583D80E_Sections;
		}
		interface Tabs {
			_4A6546DD_DFC2_4A18_88D6_04661583D80E: tab__4A6546DD_DFC2_4A18_88D6_04661583D80E;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Errors during upgrade or installation, if any */
			msdyn_Error: DevKit.Controls.String;
			/** Date/time when an upgrade run finished */
			msdyn_FinishedDate: DevKit.Controls.DateTime;
			/** Name of the Package Deployer package */
			msdyn_Package: DevKit.Controls.String;
			/** Name of the Solution that is upgraded */
			msdyn_Solution: DevKit.Controls.String;
			/** Version that was installed before upgrade run */
			msdyn_StartingVersion: DevKit.Controls.String;
			/** Status/outcome of an upgrade run */
			msdyn_Status: DevKit.Controls.OptionSet;
			/** Version that will be achieved by the upgrade run */
			msdyn_TargetVersion: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			UpgradeVersions: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_upgraderun_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_upgraderun_Information */
		Body: DevKit.Formmsdyn_upgraderun_Information.Body;
		/** The Process of form msdyn_upgraderun_Information */
		Process: DevKit.Formmsdyn_upgraderun_Information.Process;
		/** The Grid of form msdyn_upgraderun_Information */
		Grid: DevKit.Formmsdyn_upgraderun_Information.Grid;
		/** The SidePanes of form msdyn_upgraderun_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_upgraderunApi {
		/**
		* DynamicsCrm.DevKit msdyn_upgraderunApi
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
		/** Errors during upgrade or installation, if any */
		msdyn_Error: string;
		/** Date/time when an upgrade run finished */
		msdyn_FinishedDate_UtcDateAndTime: Date;
		/** Name of the Package Deployer package */
		msdyn_Package: string;
		/** Name of the Solution that is upgraded */
		msdyn_Solution: string;
		/** Version that was installed before upgrade run */
		msdyn_StartingVersion: string;
		/** Status/outcome of an upgrade run */
		msdyn_Status: OptionSet.msdyn_upgraderun.msdyn_Status;
		/** Summary of an upgrade operation performed by Package Deployer */
		msdyn_Summary: string;
		/** Version that will be achieved by the upgrade run */
		msdyn_TargetVersion: string;
		/** Unique identifier for entity instances */
		msdyn_upgraderunId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the UpgradeRun */
		statecode: OptionSet.msdyn_upgraderun.statecode;
		/** Reason for the status of the UpgradeRun */
		statuscode: OptionSet.msdyn_upgraderun.statuscode;
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
			/** Errors during upgrade or installation, if any */
			readonly msdyn_Error: string;
			/** Date/time when an upgrade run finished */
			readonly msdyn_FinishedDate_UtcDateAndTime: string;
			/** Name of the Package Deployer package */
			readonly msdyn_Package: string;
			/** Name of the Solution that is upgraded */
			readonly msdyn_Solution: string;
			/** Version that was installed before upgrade run */
			readonly msdyn_StartingVersion: string;
			/** Status/outcome of an upgrade run */
			readonly msdyn_Status: string;
			/** Summary of an upgrade operation performed by Package Deployer */
			readonly msdyn_Summary: string;
			/** Version that will be achieved by the upgrade run */
			readonly msdyn_TargetVersion: string;
			/** Unique identifier for entity instances */
			readonly msdyn_upgraderunId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the UpgradeRun */
			readonly statecode: string;
			/** Reason for the status of the UpgradeRun */
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
	namespace msdyn_upgraderun {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
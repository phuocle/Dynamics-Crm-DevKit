//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_upgradestep_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Diagnostic output from an upgrade step */
			msdyn_Details: DevKit.Controls.String;
			/** Error text, if an error occurred during this step */
			msdyn_Errors: DevKit.Controls.String;
			/** Date/time when an upgrade step finished */
			msdyn_FinishedDate: DevKit.Controls.DateTime;
			/** Name of the method or stored procedure corresponding to an upgrade step */
			msdyn_Name: DevKit.Controls.String;
			/** Status/outcome of an upgrade step */
			msdyn_Status: DevKit.Controls.OptionSet;
			msdyn_StepID: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_upgradestep_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_upgradestep_Information */
		Body: DevKit.Formmsdyn_upgradestep_Information.Body;
		/** The Process of form msdyn_upgradestep_Information */
		Process: DevKit.Formmsdyn_upgradestep_Information.Process;
		/** The SidePanes of form msdyn_upgradestep_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_upgradestepApi {
		/**
		* DynamicsCrm.DevKit msdyn_upgradestepApi
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
		/** Database version for internal use only */
		msdyn_dbversion: number;
		/** Diagnostic output from an upgrade step */
		msdyn_Details: string;
		/** Error text, if an error occurred during this step */
		msdyn_Errors: string;
		/** Date/time when an upgrade step finished */
		msdyn_FinishedDate_UtcDateAndTime: Date;
		/** Name of the method or stored procedure corresponding to an upgrade step */
		msdyn_Name: string;
		/** Status/outcome of an upgrade step */
		msdyn_Status: OptionSet.msdyn_upgradestep.msdyn_Status;
		msdyn_StepID: string;
		/** Unique identifier for entity instances */
		msdyn_upgradestepId: string;
		/** Single-version upgrade that contains this upgrade step */
		msdyn_UpgradeVersion: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the UpgradeStep */
		statecode: OptionSet.msdyn_upgradestep.statecode;
		/** Reason for the status of the UpgradeStep */
		statuscode: OptionSet.msdyn_upgradestep.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_upgradestep {
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
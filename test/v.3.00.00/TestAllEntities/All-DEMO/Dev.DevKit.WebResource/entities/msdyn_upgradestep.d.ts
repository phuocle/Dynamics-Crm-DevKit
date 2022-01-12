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
	}
	class Formmsdyn_upgradestep_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_upgradestep_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_upgradestep_Information */
		Body: DevKit.Formmsdyn_upgradestep_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Database version for internal use only */
		msdyn_dbversion: DevKit.WebApi.IntegerValue;
		/** Diagnostic output from an upgrade step */
		msdyn_Details: DevKit.WebApi.StringValue;
		/** Error text, if an error occurred during this step */
		msdyn_Errors: DevKit.WebApi.StringValue;
		/** Date/time when an upgrade step finished */
		msdyn_FinishedDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Name of the method or stored procedure corresponding to an upgrade step */
		msdyn_Name: DevKit.WebApi.StringValue;
		/** Status/outcome of an upgrade step */
		msdyn_Status: DevKit.WebApi.OptionSetValue;
		msdyn_StepID: DevKit.WebApi.GuidValue;
		/** Unique identifier for entity instances */
		msdyn_upgradestepId: DevKit.WebApi.GuidValue;
		/** Single-version upgrade that contains this upgrade step */
		msdyn_UpgradeVersion: DevKit.WebApi.LookupValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the UpgradeStep */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UpgradeStep */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
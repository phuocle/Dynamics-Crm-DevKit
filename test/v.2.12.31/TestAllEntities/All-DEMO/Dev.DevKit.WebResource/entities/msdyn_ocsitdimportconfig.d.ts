﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocsitdimportconfig_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_loadstatus: DevKit.Controls.OptionSet;
			/** The name of the data loading config. */
			msdyn_name: DevKit.Controls.String;
			/**  Skill finder model */
			msdyn_ocskillidentmlmodelid: DevKit.Controls.Lookup;
			/** No of records imported at given point of time from this import config */
			msdyn_recordsimported: DevKit.Controls.Integer;
			/** No of records skipped because of no or bad training data */
			msdyn_recordsskipped: DevKit.Controls.Integer;
			/** Total no of records imported from this import config */
			msdyn_totalrecordstoimport: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_ocsitdimportconfig_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocsitdimportconfig_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocsitdimportconfig_Information */
		Body: DevKit.Formmsdyn_ocsitdimportconfig_Information.Body;
	}
	class msdyn_ocsitdimportconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocsitdimportconfigApi
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
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
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
		/** Data loading config */
		msdyn_cdsdataloadconfig: DevKit.WebApi.StringValue;
		/** Data loading config type */
		msdyn_importconfigtype: DevKit.WebApi.OptionSetValue;
		msdyn_loadstatus: DevKit.WebApi.OptionSetValue;
		/** The name of the data loading config. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for data loading config */
		msdyn_ocsitdimportconfigId: DevKit.WebApi.GuidValue;
		/**  Skill finder model */
		msdyn_ocskillidentmlmodelid: DevKit.WebApi.LookupValue;
		/** No of records imported at given point of time from this import config */
		msdyn_recordsimported: DevKit.WebApi.IntegerValue;
		/** No of records skipped because of no or bad training data */
		msdyn_recordsskipped: DevKit.WebApi.IntegerValue;
		/** Total no of records imported from this import config */
		msdyn_totalrecordstoimport: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the ocsitdimportconfig */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the ocsitdimportconfig */
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
	namespace msdyn_ocsitdimportconfig {
		enum msdyn_importconfigtype {
			/** 617690000 */
			Conversation
		}
		enum msdyn_loadstatus {
			/** 192350002 */
			Load_completed,
			/** 192350003 */
			Load_failed,
			/** 192350001 */
			Loading_training_data,
			/** 192350000 */
			Triggering_load
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
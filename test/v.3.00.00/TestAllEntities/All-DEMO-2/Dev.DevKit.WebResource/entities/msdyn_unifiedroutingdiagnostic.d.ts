//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_unifiedroutingdiagnostic_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the rule execution was completed. */
			msdyn_completedon: DevKit.Controls.DateTime;
			/** Unique identifier for Decision rule set associated with unifiedroutingdiagnostic. */
			msdyn_decisionrulesetid: DevKit.Controls.Lookup;
			/** Evaluation */
			msdyn_evaluation: DevKit.Controls.String;
			/** Input data */
			msdyn_inputdata: DevKit.Controls.String;
			/** Name of the unifiedroutingdiagnostic record */
			msdyn_name: DevKit.Controls.String;
			/** Output data */
			msdyn_outputdata: DevKit.Controls.String;
			/** Rule type */
			msdyn_ruletype: DevKit.Controls.OptionSet;
			/** Date and time when the rule execution was started. */
			msdyn_startedon: DevKit.Controls.DateTime;
			/** Unique identifier for the target object associated with unifiedroutingdiagnostic. */
			msdyn_targetobject: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_unifiedroutingdiagnostic_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_unifiedroutingdiagnostic_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_unifiedroutingdiagnostic_Information */
		Body: DevKit.Formmsdyn_unifiedroutingdiagnostic_Information.Body;
	}
	class msdyn_unifiedroutingdiagnosticApi {
		/**
		* DynamicsCrm.DevKit msdyn_unifiedroutingdiagnosticApi
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
		/** Date and time when the rule execution was completed. */
		msdyn_completedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier for Decision rule set associated with unifiedroutingdiagnostic. */
		msdyn_decisionrulesetid: DevKit.WebApi.LookupValue;
		/** Evaluation */
		msdyn_evaluation: DevKit.WebApi.StringValue;
		/** Input data */
		msdyn_inputdata: DevKit.WebApi.StringValue;
		/** Name of the unifiedroutingdiagnostic record */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Conversation associated with unifiedroutingdiagnostic. */
		msdyn_ocliveworkitemid: DevKit.WebApi.LookupValue;
		/** Output data */
		msdyn_outputdata: DevKit.WebApi.StringValue;
		/** Rule type */
		msdyn_ruletype: DevKit.WebApi.OptionSetValue;
		/** Sequence number */
		msdyn_sequencenumber: DevKit.WebApi.IntegerValue;
		/** Date and time when the rule execution was started. */
		msdyn_startedon_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier for the target object associated with unifiedroutingdiagnostic. */
		msdyn_targetobject_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Unique identifier for the target object associated with unifiedroutingdiagnostic. */
		msdyn_targetobject_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_unifiedroutingdiagnosticId: DevKit.WebApi.GuidValue;
		/** Unique identifier for Unified routing run associated with Unified routing diagnostic. */
		msdyn_unifiedroutingrunid: DevKit.WebApi.LookupValue;
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
		/** Status of the unifiedroutingdiagnostic */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the unifiedroutingdiagnostic */
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
	namespace msdyn_unifiedroutingdiagnostic {
		enum msdyn_ruletype {
			/** 6 */
			Assignment,
			/** 9 */
			Assignment_Selection_Criteria,
			/** 1 */
			Demand_Classification,
			/** 11 */
			Intake,
			/** 4 */
			ML,
			/** 5 */
			Prioritization,
			/** 2 */
			Route_To_Queue,
			/** 3 */
			Skill_Identification
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
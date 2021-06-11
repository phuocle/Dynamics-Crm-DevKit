//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_decisionruleset_Information {
		interface Tabs {
		}
		interface Body {
			/** Defines the authoring mode for the rule set */
			msdyn_authoringmode: DevKit.Controls.OptionSet;
			/** Description of the rule set record */
			msdyn_description: DevKit.Controls.String;
			/** Input contract for the ruleset */
			msdyn_inputcontractid: DevKit.Controls.Lookup;
			/** Represent collection of similar type */
			msdyn_isinputcollection: DevKit.Controls.Boolean;
			/** Name of the rule set record */
			msdyn_name: DevKit.Controls.String;
			/** Output contract for the ruleset */
			msdyn_outputcontractid: DevKit.Controls.Lookup;
			/** Defines type of the rule set */
			msdyn_rulesetdefinition: DevKit.Controls.String;
			/** Defines type of the rule set */
			msdyn_rulesettype: DevKit.Controls.OptionSet;
			/** Unique name for the ruleset record */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_decisionruleset_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_decisionruleset_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_decisionruleset_Information */
		Body: DevKit.Formmsdyn_decisionruleset_Information.Body;
	}
	class msdyn_decisionrulesetApi {
		/**
		* DynamicsCrm.DevKit msdyn_decisionrulesetApi
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
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** AI builder model for the ruleset */
		msdyn_aibmodelid: DevKit.WebApi.LookupValue;
		/** Defines the authoring mode for the rule set */
		msdyn_authoringmode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		msdyn_decisionrulesetId: DevKit.WebApi.GuidValue;
		/** Description of the rule set record */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Input contract for the ruleset */
		msdyn_inputcontractid: DevKit.WebApi.LookupValue;
		/** Represent collection of similar type */
		msdyn_isinputcollection: DevKit.WebApi.BooleanValue;
		/** Defines the type for ML model */
		msdyn_mlmodeltype: DevKit.WebApi.OptionSetValue;
		/** Name of the rule set record */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Output contract for the ruleset */
		msdyn_outputcontractid: DevKit.WebApi.LookupValue;
		/** Defines type of the rule set */
		msdyn_rulesetdefinition: DevKit.WebApi.StringValue;
		/** Defines type of the rule set */
		msdyn_rulesettype: DevKit.WebApi.OptionSetValue;
		/** Unique name for the ruleset record */
		msdyn_UniqueName: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
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
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Decision rule set */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Decision rule set */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_decisionruleset {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_authoringmode {
			/** 192350000 */
			Decision_list
		}
		enum msdyn_mlmodeltype {
			/** 192350000 */
			Skill_based
		}
		enum msdyn_rulesettype {
			/** 192350000 */
			Declarative,
			/** 192350001 */
			ML_model_based
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
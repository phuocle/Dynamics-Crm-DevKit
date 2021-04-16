//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormEnvironmentVariableDefinition_Information {
		interface Tabs {
		}
		interface Body {
			Values: DevKit.Form.Controls.ControlGrid;
			/** Unique identifier for Connection Reference associated with Environment Variable Definition. */
			ConnectionReferenceId: DevKit.Form.Controls.ControlLookup;
			/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
			DefaultValue: DevKit.Form.Controls.ControlString;
			/** Description of the variable definition. */
			Description: DevKit.Form.Controls.ControlString;
			/** Display Name of the variable definition. */
			DisplayName: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
			ParentDefinitionId: DevKit.Form.Controls.ControlLookup;
			/** Unique entity name. */
			SchemaName: DevKit.Form.Controls.ControlString;
			/** Environment variable value type. */
			Type: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormEnvironmentVariableDefinition_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form EnvironmentVariableDefinition_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form EnvironmentVariableDefinition_Information */
		Body: MyDog.FormEnvironmentVariableDefinition_Information.Body;
	}
	class EnvironmentVariableDefinitionApi {
		/**
		* DynamicsCrm.DevKit EnvironmentVariableDefinitionApi
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
		ApiId: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier for Connection Reference associated with Environment Variable Definition. */
		ConnectionReferenceId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
		DefaultValue: DevKit.WebApi.StringValue;
		/** Description of the variable definition. */
		Description: DevKit.WebApi.StringValue;
		/** Display Name of the variable definition. */
		DisplayName: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		EnvironmentVariableDefinitionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		EnvironmentVariableDefinitionIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		Hint: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Tells whether the component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		IsRequired: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
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
		ParameterKey: DevKit.WebApi.StringValue;
		/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
		ParentDefinitionId: DevKit.WebApi.LookupValue;
		/** Unique entity name. */
		SchemaName: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Environment Variable Definition */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Environment Variable Definition */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Environment variable value type. */
		Type: DevKit.WebApi.OptionSetValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		ValueSchema: DevKit.WebApi.StringValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace EnvironmentVariableDefinition {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
		enum Type {
			/** 100000000 */
			String,
			/** 100000001 */
			Number,
			/** 100000002 */
			Boolean,
			/** 100000003 */
			JSON,
			/** 100000004 */
			Data_Source
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}
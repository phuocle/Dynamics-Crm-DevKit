//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formbotcomponent_Information {
		interface Tabs {
		}
		interface Body {
			ChildComponents: DevKit.Form.Controls.ControlGrid;
			RelatedBots: DevKit.Form.Controls.ControlGrid;
			RelatedBotComponents: DevKit.Form.Controls.ControlGrid;
			RelatedProcesses: DevKit.Form.Controls.ControlGrid;
			/** The sub type of Chatbot subcomponent. */
			ComponentType: DevKit.Form.Controls.ControlOptionSet;
			/** The content or metadata of the Bot Component that defines its structure and properties. */
			Content: DevKit.Form.Controls.ControlString;
			/** The content of the Bot Component in OBI format */
			Data: DevKit.Form.Controls.ControlString;
			/** Contains searchable text for the bot component */
			Description: DevKit.Form.Controls.ControlString;
			/** Language of the chatbot subcomponent */
			Language: DevKit.Form.Controls.ControlOptionSet;
			/** The name of the custom entity. */
			name: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Chatbot subcomponent associated with Chatbot subcomponent. */
			ParentBotComponentId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formbotcomponent_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form botcomponent_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form botcomponent_Information */
		Body: MyDog.Formbotcomponent_Information.Body;
	}
	class botcomponentApi {
		/**
		* DynamicsCrm.DevKit botcomponentApi
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
		/** Unique identifier for entity instances */
		botcomponentId: DevKit.WebApi.GuidValue;
		/** The category of Chatbot subcomponent. */
		Category: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** The sub type of Chatbot subcomponent. */
		ComponentType: DevKit.WebApi.OptionSetValue;
		/** The content or metadata of the Bot Component that defines its structure and properties. */
		Content: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The content of the Bot Component in OBI format */
		Data: DevKit.WebApi.StringValue;
		/** Contains searchable text for the bot component */
		Description: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Language of the chatbot subcomponent */
		Language: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** The name of the custom entity. */
		name: DevKit.WebApi.StringValue;
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
		/** Unique identifier for Chatbot subcomponent associated with Chatbot subcomponent. */
		ParentBotComponentId: DevKit.WebApi.LookupValue;
		SchemaName: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the BotComponent */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the BotComponent */
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
	namespace botcomponent {
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
		enum ComponentType {
			/** 0 */
			Topic,
			/** 1 */
			Skill,
			/** 2 */
			Bot_variable,
			/** 3 */
			Bot_entity,
			/** 4 */
			Dialog,
			/** 6 */
			Language_understanding,
			/** 7 */
			Language_generation,
			/** 5 */
			Trigger,
			/** 8 */
			Dialog_schema
		}
		enum Language {
			/** 1033 */
			English,
			/** 1034 */
			Spanish,
			/** 1046 */
			Portuguese_Brazilian,
			/** 1036 */
			French,
			/** 1043 */
			Dutch,
			/** 1044 */
			Norwegian,
			/** 1030 */
			Danish,
			/** 1053 */
			Swedish,
			/** 1040 */
			Italian,
			/** 1031 */
			German,
			/** 2052 */
			Chinese_Simplified,
			/** 1028 */
			Chinese_Traditional,
			/** 1025 */
			Arabic,
			/** 1041 */
			Japanese,
			/** 1042 */
			Korean,
			/** 1081 */
			Hindi,
			/** 1057 */
			Indonesian,
			/** 1049 */
			Russian,
			/** 1045 */
			Polish,
			/** 1055 */
			Turkish
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}
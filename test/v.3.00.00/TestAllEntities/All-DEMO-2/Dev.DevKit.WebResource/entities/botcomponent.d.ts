//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formbotcomponent_Information {
		interface Tabs {
		}
		interface Body {
			/** Accent Color for this re-usable subcomponent */
			AccentColor: DevKit.Controls.String;
			/** The sub type of Chatbot subcomponent. */
			ComponentType: DevKit.Controls.OptionSet;
			/** The content or metadata of the Bot Component that defines its structure and properties. */
			Content: DevKit.Controls.String;
			/** The content of the Bot Component in OBI format */
			Data: DevKit.Controls.String;
			/** Contains searchable text for the bot component */
			Description: DevKit.Controls.String;
			/** Link to learn More about this subcomponent */
			HelpLink: DevKit.Controls.String;
			/** Icon Url for this subcomponent */
			IconUrl: DevKit.Controls.String;
			/** Language of the chatbot subcomponent */
			Language: DevKit.Controls.OptionSet;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for Chatbot subcomponent associated with Chatbot subcomponent. */
			ParentBotComponentId: DevKit.Controls.Lookup;
			/** Reuse Policy for the chatbot subcomponent */
			ReusePolicy: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ChildComponents: DevKit.Controls.Grid;
			RelatedBotComponents: DevKit.Controls.Grid;
			RelatedBots: DevKit.Controls.Grid;
			RelatedProcesses: DevKit.Controls.Grid;
		}
	}
	class Formbotcomponent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form botcomponent_Information */
		Body: DevKit.Formbotcomponent_Information.Body;
		/** The Process of form botcomponent_Information */
		Process: DevKit.Formbotcomponent_Information.Process;
		/** The Grid of form botcomponent_Information */
		Grid: DevKit.Formbotcomponent_Information.Grid;
		/** The SidePanes of form botcomponent_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Accent Color for this re-usable subcomponent */
		AccentColor: DevKit.WebApi.StringValue;
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
		/** Link to learn More about this subcomponent */
		HelpLink: DevKit.WebApi.StringValue;
		/** Icon Url for this subcomponent */
		IconUrl: DevKit.WebApi.StringValue;
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
		/** Reuse Policy for the chatbot subcomponent */
		ReusePolicy: DevKit.WebApi.OptionSetValue;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum ComponentType {
			/** 3 */
			Bot_entity,
			/** 2 */
			Bot_variable,
			/** 4 */
			Dialog,
			/** 8 */
			Dialog_schema,
			/** 7 */
			Language_generation,
			/** 6 */
			Language_understanding,
			/** 1 */
			Skill,
			/** 0 */
			Topic,
			/** 5 */
			Trigger
		}
		enum Language {
			/** 1025 */
			Arabic,
			/** 2052 */
			Chinese_Simplified,
			/** 1028 */
			Chinese_Traditional,
			/** 1030 */
			Danish,
			/** 1043 */
			Dutch,
			/** 1033 */
			English,
			/** 1036 */
			French,
			/** 1031 */
			German,
			/** 1081 */
			Hindi,
			/** 1057 */
			Indonesian,
			/** 1040 */
			Italian,
			/** 1041 */
			Japanese,
			/** 1042 */
			Korean,
			/** 1044 */
			Norwegian,
			/** 1045 */
			Polish,
			/** 1046 */
			Portuguese_Brazilian,
			/** 1049 */
			Russian,
			/** 1034 */
			Spanish,
			/** 1053 */
			Swedish,
			/** 1055 */
			Turkish
		}
		enum ReusePolicy {
			/** 0 */
			None,
			/** 1 */
			Private,
			/** 2 */
			Public
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
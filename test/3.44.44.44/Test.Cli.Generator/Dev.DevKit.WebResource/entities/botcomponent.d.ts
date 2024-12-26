//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formbotcomponent_Information {
		interface Tabs {
		}
		interface Body {
			/** Accent Color for this re-usable component */
			AccentColor: DevKit.Controls.String;
			/** The category of Copilot component. */
			Category: DevKit.Controls.String;
			/** The sub type of Copilot component. */
			ComponentType: DevKit.Controls.OptionSet;
			/** The content or metadata of the Bot Component that defines its structure and properties. */
			Content: DevKit.Controls.String;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** The content of the Bot Component in OBI format */
			Data: DevKit.Controls.String;
			/** Contains searchable text for the bot component */
			Description: DevKit.Controls.String;
			/** Link to learn More about this component */
			HelpLink: DevKit.Controls.String;
			/** Icon Url for this component */
			IconUrl: DevKit.Controls.String;
			/** Language of the copilot component */
			Language: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Unique identifier for Copilot component collection associated with Copilot component. */
			ParentBotComponentCollectionId: DevKit.Controls.Lookup;
			/** Unique identifier for Copilot component associated with Copilot component. */
			ParentBotComponentId: DevKit.Controls.Lookup;
			/** Unique identifier for Bot associated with the Component. */
			ParentBotId: DevKit.Controls.Lookup;
			/** Reuse Policy for the copilot component */
			ReusePolicy: DevKit.Controls.OptionSet;
			SchemaName: DevKit.Controls.String;
			/** Status of the BotComponent */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the BotComponent */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			botcomponent_parent_botcomponent: DevKit.Controls.NavigationItem,
			Comment_Artifact_BotComponent: DevKit.Controls.NavigationItem,
			msdyn_botcomponent_msdyn_servicecopilotplugin_botcomponentid: DevKit.Controls.NavigationItem,
			msdyn_botcomponent_msdyn_servicecopilotpluginaction_botcomponentid: DevKit.Controls.NavigationItem
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
		/** The Navigation of form botcomponent_Information */
		Navigation: DevKit.Formbotcomponent_Information.Navigation;
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
		/** Accent Color for this re-usable component */
		AccentColor: string;
		/** Unique identifier for entity instances */
		botcomponentId: string;
		/** The category of Copilot component. */
		Category: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.botcomponent.ComponentState;
		/** The sub type of Copilot component. */
		ComponentType: OptionSet.botcomponent.ComponentType;
		/** The content or metadata of the Bot Component that defines its structure and properties. */
		Content: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The content of the Bot Component in OBI format */
		Data: string;
		/** Contains searchable text for the bot component */
		Description: string;
		/** This is a file type attribute to store File attachments. */
		readonly FileData_name: string;
		/** Link to learn More about this component */
		HelpLink: string;
		/** Icon Url for this component */
		IconUrl: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Language of the copilot component */
		Language: OptionSet.botcomponent.Language;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the custom entity. */
		name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier for Copilot component collection associated with Copilot component. */
		ParentBotComponentCollectionId: string;
		/** Unique identifier for Copilot component associated with Copilot component. */
		ParentBotComponentId: string;
		/** Unique identifier for Bot associated with the Component. */
		ParentBotId: string;
		/** Reuse Policy for the copilot component */
		ReusePolicy: OptionSet.botcomponent.ReusePolicy;
		SchemaName: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the BotComponent */
		statecode: OptionSet.botcomponent.statecode;
		/** Reason for the status of the BotComponent */
		statuscode: OptionSet.botcomponent.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Accent Color for this re-usable component */
			readonly AccentColor: string;
			/** Unique identifier for entity instances */
			readonly botcomponentId: string;
			/** The category of Copilot component. */
			readonly Category: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** The sub type of Copilot component. */
			readonly ComponentType: string;
			/** The content or metadata of the Bot Component that defines its structure and properties. */
			readonly Content: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The content of the Bot Component in OBI format */
			readonly Data: string;
			/** Contains searchable text for the bot component */
			readonly Description: string;
			/** This is a file type attribute to store File attachments. */
			readonly FileData_name: string;
			/** Link to learn More about this component */
			readonly HelpLink: string;
			/** Icon Url for this component */
			readonly IconUrl: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Language of the copilot component */
			readonly Language: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier for Copilot component collection associated with Copilot component. */
			readonly ParentBotComponentCollectionId: string;
			/** Unique identifier for Copilot component associated with Copilot component. */
			readonly ParentBotComponentId: string;
			/** Unique identifier for Bot associated with the Component. */
			readonly ParentBotId: string;
			/** Reuse Policy for the copilot component */
			readonly ReusePolicy: string;
			readonly SchemaName: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the BotComponent */
			readonly statecode: string;
			/** Reason for the status of the BotComponent */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
			/** 11 */
			Bot_entity_V2,
			/** 14 */
			Bot_File_Attachment,
			/** 10 */
			Bot_translations_V2,
			/** 2 */
			Bot_variable,
			/** 12 */
			Bot_variable_V2,
			/** 18 */
			Copilot_Settings,
			/** 15 */
			Custom_GPT,
			/** 4 */
			Dialog,
			/** 8 */
			Dialog_schema,
			/** 17 */
			External_Trigger,
			/** 16 */
			Knowledge_Source,
			/** 7 */
			Language_generation,
			/** 6 */
			Language_understanding,
			/** 1 */
			Skill,
			/** 13 */
			Skill_V2,
			/** 0 */
			Topic,
			/** 9 */
			Topic_V2,
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
			/** 1029 */
			Czech,
			/** 1030 */
			Danish,
			/** 1043 */
			Dutch,
			/** 1033 */
			English,
			/** 3081 */
			English_Australia,
			/** 2057 */
			English_United_Kingdom,
			/** 1035 */
			Finnish,
			/** 1036 */
			French,
			/** 3084 */
			French_Canada,
			/** 1031 */
			German,
			/** 1032 */
			Greek,
			/** 1037 */
			Hebrew,
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
			/** 21514 */
			Spanish_United_States,
			/** 1053 */
			Swedish,
			/** 1054 */
			Thai,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
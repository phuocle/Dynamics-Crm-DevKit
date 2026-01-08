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
			/** Used to store dependencies between bots. */
			Dependencies: DevKit.Controls.String;
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
			/** SchemaName */
			SchemaName: DevKit.Controls.String;
			/** Status of the BotComponent */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the BotComponent */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Grid {
			/** Child components */
			ChildComponents: DevKit.Controls.Grid;
			/** Related chat bot components */
			RelatedBotComponents: DevKit.Controls.Grid;
			/** Related chat bots */
			RelatedBots: DevKit.Controls.Grid;
			/** Related flows */
			RelatedProcesses: DevKit.Controls.Grid;
		}
	}
	export class Formbotcomponent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form botcomponent_Information */
		Body: DevKit.Formbotcomponent_Information.Body;
		/** The Grid of form botcomponent_Information */
		Grid: DevKit.Formbotcomponent_Information.Grid;
	}
	export class botcomponentApi {
		/**
		* DynamicsCrm.DevKit botcomponentApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Accent Color for this re-usable component */
		AccentColor: string | null;
		/** Unique identifier for entity instances */
		botcomponentId: string | null;
		canmodifystate: boolean | null;
		/** The category of Copilot component. */
		Category: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.botcomponent.ComponentState | null;
		/** The sub type of Copilot component. */
		ComponentType: OptionSet.botcomponent.ComponentType | null;
		/** The content or metadata of the Bot Component that defines its structure and properties. */
		Content: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** The content of the Bot Component in OBI format */
		Data: string | null;
		/** Used to store dependencies between bots. */
		Dependencies: string | null;
		/** Contains searchable text for the bot component */
		Description: string | null;
		/** This is a file type attribute to store File attachments. */
		readonly FileData_name: string | null;
		/** Link to learn More about this component */
		HelpLink: string | null;
		/** Icon Url for this component */
		IconUrl: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Language of the copilot component */
		Language: OptionSet.botcomponent.Language | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Unique identifier for Copilot component collection associated with Copilot component. */
		ParentBotComponentCollectionId: string | null;
		/** Unique identifier for Copilot component associated with Copilot component. */
		ParentBotComponentId: string | null;
		/** Unique identifier for Bot associated with the Component. */
		ParentBotId: string | null;
		/** Reuse Policy for the copilot component */
		ReusePolicy: OptionSet.botcomponent.ReusePolicy | null;
		SchemaName: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the BotComponent */
		statecode: OptionSet.botcomponent.statecode | null;
		/** Reason for the status of the BotComponent */
		statuscode: OptionSet.botcomponent.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Accent Color for this re-usable component */
			readonly AccentColor: string;
			/** Unique identifier for entity instances */
			readonly botcomponentId: string;
			readonly canmodifystate: string;
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
			/** Used to store dependencies between bots. */
			readonly Dependencies: string;
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum ComponentType {
			/** Bot_entity = 3*/
			Bot_entity = 3,
			/** Bot_entity_V2 = 11*/
			Bot_entity_V2 = 11,
			/** Bot_File_Attachment = 14*/
			Bot_File_Attachment = 14,
			/** Bot_translations_V2 = 10*/
			Bot_translations_V2 = 10,
			/** Bot_variable = 2*/
			Bot_variable = 2,
			/** Bot_variable_V2 = 12*/
			Bot_variable_V2 = 12,
			/** Copilot_Settings = 18*/
			Copilot_Settings = 18,
			/** Custom_GPT = 15*/
			Custom_GPT = 15,
			/** Dialog = 4*/
			Dialog = 4,
			/** Dialog_schema = 8*/
			Dialog_schema = 8,
			/** External_Trigger = 17*/
			External_Trigger = 17,
			/** Knowledge_Source = 16*/
			Knowledge_Source = 16,
			/** Language_generation = 7*/
			Language_generation = 7,
			/** Language_understanding = 6*/
			Language_understanding = 6,
			/** Skill = 1*/
			Skill = 1,
			/** Skill_V2 = 13*/
			Skill_V2 = 13,
			/** Test_Case = 19*/
			Test_Case = 19,
			/** Topic = 0*/
			Topic = 0,
			/** Topic_V2 = 9*/
			Topic_V2 = 9,
			/** Trigger = 5*/
			Trigger = 5
		}
		enum Language {
			/** Arabic = 1025*/
			Arabic = 1025,
			/** Chinese_Simplified = 2052*/
			Chinese_Simplified = 2052,
			/** Chinese_Traditional = 1028*/
			Chinese_Traditional = 1028,
			/** Czech = 1029*/
			Czech = 1029,
			/** Danish = 1030*/
			Danish = 1030,
			/** Dutch = 1043*/
			Dutch = 1043,
			/** English = 1033*/
			English = 1033,
			/** English_Australia = 3081*/
			English_Australia = 3081,
			/** English_United_Kingdom = 2057*/
			English_United_Kingdom = 2057,
			/** Finnish = 1035*/
			Finnish = 1035,
			/** French = 1036*/
			French = 1036,
			/** French_Canada = 3084*/
			French_Canada = 3084,
			/** German = 1031*/
			German = 1031,
			/** Greek = 1032*/
			Greek = 1032,
			/** Hebrew = 1037*/
			Hebrew = 1037,
			/** Hindi = 1081*/
			Hindi = 1081,
			/** Indonesian = 1057*/
			Indonesian = 1057,
			/** Italian = 1040*/
			Italian = 1040,
			/** Japanese = 1041*/
			Japanese = 1041,
			/** Korean = 1042*/
			Korean = 1042,
			/** Norwegian = 1044*/
			Norwegian = 1044,
			/** Polish = 1045*/
			Polish = 1045,
			/** Portuguese_Brazilian = 1046*/
			Portuguese_Brazilian = 1046,
			/** Portuguese_Portugal = 2070*/
			Portuguese_Portugal = 2070,
			/** Russian = 1049*/
			Russian = 1049,
			/** Spanish = 1034*/
			Spanish = 1034,
			/** Spanish_United_States = 21514*/
			Spanish_United_States = 21514,
			/** Swedish = 1053*/
			Swedish = 1053,
			/** Thai = 1054*/
			Thai = 1054,
			/** Turkish = 1055*/
			Turkish = 1055
		}
		enum ReusePolicy {
			/** None = 0*/
			None = 0,
			/** Private = 1*/
			Private = 1,
			/** Public = 2*/
			Public = 2
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
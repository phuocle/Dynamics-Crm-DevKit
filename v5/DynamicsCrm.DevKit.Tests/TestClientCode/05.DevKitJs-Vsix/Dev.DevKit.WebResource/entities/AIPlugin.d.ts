//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAIPlugin_main_form {
		interface tab_New_Tab_Sections {
			/** AI Plugin Operations */
			New_Section: DevKit.Controls.Section;
		}
		/** New Tab */
		interface tab_New_Tab extends DevKit.Controls.ITab {
			Section: tab_New_Tab_Sections;
		}
		interface Tabs {
			/** New Tab */
			New_Tab: tab_New_Tab;
		}
		interface Body {
			Tab: Tabs;
			AIPluginTitle: DevKit.Controls.Lookup;
			/** Human-readable description of the Plugin */
			HumanDescription: DevKit.Controls.String;
			/** Human-readable name for the model */
			HumanName: DevKit.Controls.String;
			/** Description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. */
			ModelDescription: DevKit.Controls.String;
			/** Model name for the plugin */
			ModelName: DevKit.Controls.String;
			/** Name */
			Name: DevKit.Controls.String;
			/** PluginType */
			PluginType: DevKit.Controls.OptionSet;
			/** SchemaVersion of OpenAI Manifest */
			SchemaVersion: DevKit.Controls.OptionSet;
			/** Swagger value that is upserted to generated plugin definition, used to provide override for properties not exposed as table/columns.

Example:

{
  "info": {
      "x-ms-keywords": [ "sales", "support" ]
   }
}

Adds x-ms-keywords in info property. */
			UpsertSwagger: DevKit.Controls.String;
		}
		interface Grid {
			/** Operations */
			OperationsGrid: DevKit.Controls.Grid;
		}
	}
	export class FormAIPlugin_main_form extends DevKit.IForm {
		/**
		* AIPlugin main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form AIPlugin_main_form */
		Body: DevKit.FormAIPlugin_main_form.Body;
		/** The Grid of form AIPlugin_main_form */
		Grid: DevKit.FormAIPlugin_main_form.Grid;
	}
	export class AIPluginApi {
		/**
		* DynamicsCrm.DevKit AIPluginApi
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
		/** Unique identifier for entity instances */
		AIPluginId: string | null;
		AIPluginTitle: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.AIPlugin.ComponentState | null;
		/** Connector reference for AIPlugin */
		Connector: string | null;
		/** Contact Email */
		ContactEmail: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Human-readable description of the Plugin */
		HumanDescription: string | null;
		/** Human-readable name for the model */
		HumanName: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Legal Info Url */
		LegalInfoUrl: string | null;
		/** Description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. */
		ModelDescription: string | null;
		/** Model name for the plugin */
		ModelName: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		Name: string | null;
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
		/** Auth reference for AIPlugin */
		PluginAuthId: string | null;
		PluginSubType: OptionSet.AIPlugin.PluginSubType | null;
		PluginType: OptionSet.AIPlugin.PluginType | null;
		/** Privacy Policy Url */
		PrivacyPolicyUrl: string | null;
		/** SchemaVersion of OpenAI Manifest */
		SchemaVersion: OptionSet.AIPlugin.SchemaVersion | null;
		/** SharedConnector Description */
		SharedConnector: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the AIPlugin */
		statecode: OptionSet.AIPlugin.statecode | null;
		/** Reason for the status of the AIPlugin */
		statuscode: OptionSet.AIPlugin.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Swagger value that is upserted to generated plugin definition, used to provide override for properties not exposed as table/columns.

Example:

{
  "info": {
      "x-ms-keywords": [ "sales", "support" ]
   }
}

Adds x-ms-keywords in info property. */
		UpsertSwagger: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly AIPluginId: string;
			readonly AIPluginTitle: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Connector reference for AIPlugin */
			readonly Connector: string;
			/** Contact Email */
			readonly ContactEmail: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Human-readable description of the Plugin */
			readonly HumanDescription: string;
			/** Human-readable name for the model */
			readonly HumanName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Legal Info Url */
			readonly LegalInfoUrl: string;
			/** Description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. */
			readonly ModelDescription: string;
			/** Model name for the plugin */
			readonly ModelName: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly Name: string;
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
			/** Auth reference for AIPlugin */
			readonly PluginAuthId: string;
			readonly PluginSubType: string;
			readonly PluginType: string;
			/** Privacy Policy Url */
			readonly PrivacyPolicyUrl: string;
			/** SchemaVersion of OpenAI Manifest */
			readonly SchemaVersion: string;
			/** SharedConnector Description */
			readonly SharedConnector: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the AIPlugin */
			readonly statecode: string;
			/** Reason for the status of the AIPlugin */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Swagger value that is upserted to generated plugin definition, used to provide override for properties not exposed as table/columns.

Example:

{
  "info": {
      "x-ms-keywords": [ "sales", "support" ]
   }
}

Adds x-ms-keywords in info property. */
			readonly UpsertSwagger: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AIPlugin {
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
		enum PluginSubType {
			/** Certified_Connector = 1*/
			Certified_Connector = 1,
			/** Conversational = 5*/
			Conversational = 5,
			/** Custom_Api = 6*/
			Custom_Api = 6,
			/** Custom_Connector = 8*/
			Custom_Connector = 8,
			/** Dataverse = 0*/
			Dataverse = 0,
			/** Flow = 3*/
			Flow = 3,
			/** Prompt = 4*/
			Prompt = 4,
			/** QA = 2*/
			QA = 2,
			/** Rest_Api = 7*/
			Rest_Api = 7
		}
		enum PluginType {
			/** Connector = 2*/
			Connector = 2,
			/** CustomConnector = 1*/
			CustomConnector = 1,
			/** Dataverse = 0*/
			Dataverse = 0,
			/** Flow = 3*/
			Flow = 3
		}
		enum SchemaVersion {
			/** _10 = 0*/
			_10 = 0
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
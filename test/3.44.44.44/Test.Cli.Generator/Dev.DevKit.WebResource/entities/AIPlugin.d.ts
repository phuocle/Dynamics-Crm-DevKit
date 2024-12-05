//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAIPlugin_main_form {
		interface tab_New_Tab_Sections {
			New_Section: DevKit.Controls.Section;
		}
		interface tab_New_Tab extends DevKit.Controls.ITab {
			Section: tab_New_Tab_Sections;
		}
		interface Tabs {
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
			Name: DevKit.Controls.String;
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
		interface Navigation {
			AIPlugin_AIPluginConversationStarterMapping: DevKit.Controls.NavigationItem,
			aiplugingovernance_aiplugin: DevKit.Controls.NavigationItem,
			AIPluginInstance_AIPlugin_AIPlugin: DevKit.Controls.NavigationItem,
			AIPluginOperation_AIPlugin_AIPlugin: DevKit.Controls.NavigationItem,
			msdyn_aiplugin_msdyn_servicecopilotplugin_aipluginid: DevKit.Controls.NavigationItem,
			sideloadedaiplugin_AIPlugin_aiplugin: DevKit.Controls.NavigationItem
		}
		interface Grid {
			OperationsGrid: DevKit.Controls.Grid;
		}
	}
	class FormAIPlugin_main_form extends DevKit.IForm {
		/**
		* AIPlugin main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form AIPlugin_main_form */
		Body: DevKit.FormAIPlugin_main_form.Body;
		/** The Navigation of form AIPlugin_main_form */
		Navigation: DevKit.FormAIPlugin_main_form.Navigation;
		/** The Grid of form AIPlugin_main_form */
		Grid: DevKit.FormAIPlugin_main_form.Grid;
		/** The SidePanes of form AIPlugin_main_form */
		SidePanes: DevKit.SidePanes;
	}
	class AIPluginApi {
		/**
		* DynamicsCrm.DevKit AIPluginApi
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
		/** Unique identifier for entity instances */
		AIPluginId: string;
		AIPluginTitle: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.AIPlugin.ComponentState;
		/** Connector reference for AIPlugin */
		Connector: string;
		/** Contact Email */
		ContactEmail: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Human-readable description of the Plugin */
		HumanDescription: string;
		/** Human-readable name for the model */
		HumanName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Legal Info Url */
		LegalInfoUrl: string;
		/** Description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. */
		ModelDescription: string;
		/** Model name for the plugin */
		ModelName: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		Name: string;
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
		/** Auth reference for AIPlugin */
		PluginAuthId: string;
		PluginSubType: OptionSet.AIPlugin.PluginSubType;
		PluginType: OptionSet.AIPlugin.PluginType;
		/** Privacy Policy Url */
		PrivacyPolicyUrl: string;
		/** SchemaVersion of OpenAI Manifest */
		SchemaVersion: OptionSet.AIPlugin.SchemaVersion;
		/** SharedConnector Description */
		SharedConnector: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the AIPlugin */
		statecode: OptionSet.AIPlugin.statecode;
		/** Reason for the status of the AIPlugin */
		statuscode: OptionSet.AIPlugin.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Swagger value that is upserted to generated plugin definition, used to provide override for properties not exposed as table/columns.

Example:

{
  "info": {
      "x-ms-keywords": [ "sales", "support" ]
   }
}

Adds x-ms-keywords in info property. */
		UpsertSwagger: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum PluginSubType {
			/** 1 */
			Certified_Connector,
			/** 5 */
			Conversational,
			/** 6 */
			Custom_Api,
			/** 8 */
			Custom_Connector,
			/** 0 */
			Dataverse,
			/** 3 */
			Flow,
			/** 4 */
			Prompt,
			/** 2 */
			QA,
			/** 7 */
			Rest_Api
		}
		enum PluginType {
			/** 2 */
			Connector,
			/** 1 */
			CustomConnector,
			/** 0 */
			Dataverse,
			/** 3 */
			Flow
		}
		enum SchemaVersion {
			/** 0 */
			_10
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
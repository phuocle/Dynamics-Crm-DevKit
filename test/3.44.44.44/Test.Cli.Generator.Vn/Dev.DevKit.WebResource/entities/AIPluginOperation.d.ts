//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAIPluginOperation_main_form {
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
			AIPlugin: DevKit.Controls.Lookup;
			AIPluginOperationExportKey: DevKit.Controls.String;
			CustomAPI: DevKit.Controls.Lookup;
			/** Operation Description */
			Description: DevKit.Controls.String;
			DVFileSearch: DevKit.Controls.Lookup;
			DVTableSearch: DevKit.Controls.Lookup;
			Name: DevKit.Controls.String;
			/** OperationId on the swagger file */
			OperationId: DevKit.Controls.String;
		}
		interface Navigation {
			AIPluginOperationParameter_AIPluginO: DevKit.Controls.NavigationItem,
			fabricaiskill_aipluginoperationid: DevKit.Controls.NavigationItem,
			msdyn_knowledgeassetconfiguration_aipluginoperationid: DevKit.Controls.NavigationItem
		}
	}
	class FormAIPluginOperation_main_form extends DevKit.IForm {
		/**
		* AIPluginOperation main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form AIPluginOperation_main_form */
		Body: DevKit.FormAIPluginOperation_main_form.Body;
		/** The Navigation of form AIPluginOperation_main_form */
		Navigation: DevKit.FormAIPluginOperation_main_form.Navigation;
		/** The SidePanes of form AIPluginOperation_main_form */
		SidePanes: DevKit.SidePanes;
	}
	class AIPluginOperationApi {
		/**
		* DynamicsCrm.DevKit AIPluginOperationApi
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
		AIPlugin: string;
		AIPluginOperationExportKey: string;
		/** Unique identifier for entity instances */
		AIPluginOperationId: string;
		AIPluginOperationResponseTemplate: string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.AIPluginOperation.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		CustomAPI: string;
		/** Operation Description */
		Description: string;
		DVFileSearch: string;
		DVTableSearch: string;
		Entity1: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Defines if the AIPluginOperation is consequential. */
		IsConsequential: boolean;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Lookup to AI Model */
		msdyn_AIModel: string;
		Name: string;
		/** OperationId on the swagger file */
		OperationId: string;
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
		/** ReferencedOperationId Description */
		ReferencedOperationId: string;
		/** ResponseSemantics for the AI Plugin Operation */
		ResponseSemantics: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the AIPluginOperation */
		statecode: OptionSet.AIPluginOperation.statecode;
		/** Reason for the status of the AIPluginOperation */
		statuscode: OptionSet.AIPluginOperation.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		Workflow: string;
		readonly FormattedValue: {
			readonly AIPlugin: string;
			readonly AIPluginOperationExportKey: string;
			/** Unique identifier for entity instances */
			readonly AIPluginOperationId: string;
			readonly AIPluginOperationResponseTemplate: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			readonly CustomAPI: string;
			/** Operation Description */
			readonly Description: string;
			readonly DVFileSearch: string;
			readonly DVTableSearch: string;
			readonly Entity1: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Defines if the AIPluginOperation is consequential. */
			readonly IsConsequential: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Lookup to AI Model */
			readonly msdyn_AIModel: string;
			readonly Name: string;
			/** OperationId on the swagger file */
			readonly OperationId: string;
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
			/** ReferencedOperationId Description */
			readonly ReferencedOperationId: string;
			/** ResponseSemantics for the AI Plugin Operation */
			readonly ResponseSemantics: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the AIPluginOperation */
			readonly statecode: string;
			/** Reason for the status of the AIPluginOperation */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			readonly Workflow: string;
		}
	}
}
declare namespace OptionSet {
	namespace AIPluginOperation {
		enum ComponentState {
			/** 0 */
			Da_phat_hanh,
			/** 2 */
			Da_xoa,
			/** 3 */
			Da_xoa_Huy_phat_hanh,
			/** 1 */
			Huy_phat_hanh
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}
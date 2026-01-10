//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAIPluginOperation_main_form {
		interface tab_New_Tab_Sections {
			/** New Section */
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
			/** AIPlugin */
			AIPlugin: DevKit.Controls.Lookup;
			/** AI Plugin Operation Export Key */
			AIPluginOperationExportKey: DevKit.Controls.String;
			/** Custom API */
			CustomAPI: DevKit.Controls.Lookup;
			/** Operation Description */
			Description: DevKit.Controls.String;
			/** DVFileSearch */
			DVFileSearch: DevKit.Controls.Lookup;
			/** DVTableSearch */
			DVTableSearch: DevKit.Controls.Lookup;
			/** Name */
			Name: DevKit.Controls.String;
			/** OperationId on the swagger file */
			OperationId: DevKit.Controls.String;
		}
	}
	export class FormAIPluginOperation_main_form extends DevKit.IForm {
		/**
		* AIPluginOperation main form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form AIPluginOperation_main_form */
		Body: DevKit.FormAIPluginOperation_main_form.Body;
	}
	export class AIPluginOperationApi {
		/**
		* DynamicsCrm.DevKit AIPluginOperationApi
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
		AIPlugin: string | null;
		AIPluginOperationExportKey: string | null;
		/** Unique identifier for entity instances */
		AIPluginOperationId: string | null;
		AIPluginOperationResponseTemplate: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.AIPluginOperation.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		CustomAPI: string | null;
		/** Operation Description */
		Description: string | null;
		DVFileSearch: string | null;
		DVTableSearch: string | null;
		Entity2: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Defines if the AIPluginOperation is consequential. */
		IsConsequential: boolean | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Lookup to AI Model */
		msdyn_AIModel: string | null;
		Name: string | null;
		/** OperationId on the swagger file */
		OperationId: string | null;
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
		/** ReferencedOperationId Description */
		ReferencedOperationId: string | null;
		/** ResponseSemantics for the AI Plugin Operation */
		ResponseSemantics: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the AIPluginOperation */
		statecode: OptionSet.AIPluginOperation.statecode | null;
		/** Reason for the status of the AIPluginOperation */
		statuscode: OptionSet.AIPluginOperation.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		Workflow: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			readonly Entity2: string;
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
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
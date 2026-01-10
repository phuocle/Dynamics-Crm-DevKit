//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEnvironmentVariableDefinition_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Connection Reference associated with Environment Variable Definition. */
			ConnectionReferenceId: DevKit.Controls.Lookup;
			/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
			DefaultValue: DevKit.Controls.String;
			/** Description of the variable definition. */
			Description: DevKit.Controls.String;
			/** Display Name of the variable definition. */
			DisplayName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
			ParentDefinitionId: DevKit.Controls.Lookup;
			/** Unique entity name. */
			SchemaName: DevKit.Controls.String;
			/** Environment variable value type. */
			Type: DevKit.Controls.OptionSet;
		}
		interface Grid {
			/** Values */
			Values: DevKit.Controls.Grid;
		}
	}
	export class FormEnvironmentVariableDefinition_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form EnvironmentVariableDefinition_Information */
		Body: DevKit.FormEnvironmentVariableDefinition_Information.Body;
		/** The Grid of form EnvironmentVariableDefinition_Information */
		Grid: DevKit.FormEnvironmentVariableDefinition_Information.Grid;
	}
	export class EnvironmentVariableDefinitionApi {
		/**
		* DynamicsCrm.DevKit EnvironmentVariableDefinitionApi
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
		ApiId: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.EnvironmentVariableDefinition.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
		DefaultValue: string | null;
		/** Description of the variable definition. */
		Description: string | null;
		/** Display Name of the variable definition. */
		DisplayName: string | null;
		/** Unique identifier for entity instances */
		EnvironmentVariableDefinitionId: string | null;
		/** For internal use only. */
		readonly EnvironmentVariableDefinitionIdUnique: string | null;
		/** For internal use only. */
		Hint: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** A JSON object describing the options for the input control that should be presented to the user for setting the current value of the Environment variable. */
		InputControlConfig: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Tells whether the component can be customized. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** For internal use only. */
		IsRequired: boolean | null;
		/** Clicking on this url will take the user to a webpage which further explains the environment variable being populated. */
		LearnMoreUrl: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
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
		ParameterKey: string | null;
		/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
		ParentDefinitionId: string | null;
		/** Unique entity name. */
		SchemaName: string | null;
		/** Environment variable secret store. */
		SecretStore: OptionSet.EnvironmentVariableDefinition.SecretStore | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Environment Variable Definition */
		statecode: OptionSet.EnvironmentVariableDefinition.statecode | null;
		/** Reason for the status of the Environment Variable Definition */
		statuscode: OptionSet.EnvironmentVariableDefinition.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Environment variable value type. */
		Type: OptionSet.EnvironmentVariableDefinition.Type | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** For internal use only. */
		ValueSchema: string | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly ApiId: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
			readonly DefaultValue: string;
			/** Description of the variable definition. */
			readonly Description: string;
			/** Display Name of the variable definition. */
			readonly DisplayName: string;
			/** Unique identifier for entity instances */
			readonly EnvironmentVariableDefinitionId: string;
			/** For internal use only. */
			readonly EnvironmentVariableDefinitionIdUnique: string;
			/** For internal use only. */
			readonly Hint: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** A JSON object describing the options for the input control that should be presented to the user for setting the current value of the Environment variable. */
			readonly InputControlConfig: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Tells whether the component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** For internal use only. */
			readonly IsRequired: string;
			/** Clicking on this url will take the user to a webpage which further explains the environment variable being populated. */
			readonly LearnMoreUrl: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
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
			readonly ParameterKey: string;
			/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
			readonly ParentDefinitionId: string;
			/** Unique entity name. */
			readonly SchemaName: string;
			/** Environment variable secret store. */
			readonly SecretStore: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Environment Variable Definition */
			readonly statecode: string;
			/** Reason for the status of the Environment Variable Definition */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Environment variable value type. */
			readonly Type: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** For internal use only. */
			readonly ValueSchema: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace EnvironmentVariableDefinition {
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
		enum SecretStore {
			/** Azure_Key_Vault = 0*/
			Azure_Key_Vault = 0,
			/** Microsoft_Dataverse = 1*/
			Microsoft_Dataverse = 1
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
		enum Type {
			/** Boolean = 100000002*/
			Boolean = 100000002,
			/** Data_Source = 100000004*/
			Data_Source = 100000004,
			/** JSON = 100000003*/
			JSON = 100000003,
			/** Number = 100000001*/
			Number = 100000001,
			/** Secret = 100000005*/
			Secret = 100000005,
			/** String = 100000000*/
			String = 100000000
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
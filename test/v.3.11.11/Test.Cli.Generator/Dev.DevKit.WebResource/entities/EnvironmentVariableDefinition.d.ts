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
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Values: DevKit.Controls.Grid;
		}
	}
	class FormEnvironmentVariableDefinition_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form EnvironmentVariableDefinition_Information */
		Body: DevKit.FormEnvironmentVariableDefinition_Information.Body;
		/** The Process of form EnvironmentVariableDefinition_Information */
		Process: DevKit.FormEnvironmentVariableDefinition_Information.Process;
		/** The Grid of form EnvironmentVariableDefinition_Information */
		Grid: DevKit.FormEnvironmentVariableDefinition_Information.Grid;
		/** The SidePanes of form EnvironmentVariableDefinition_Information */
		SidePanes: DevKit.SidePanes;
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
		ApiId: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.EnvironmentVariableDefinition.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Default variable value to be used if no associated EnvironmentVariableValue entities exist. */
		DefaultValue: string;
		/** Description of the variable definition. */
		Description: string;
		/** Display Name of the variable definition. */
		DisplayName: string;
		/** Unique identifier for entity instances */
		EnvironmentVariableDefinitionId: string;
		/** For internal use only. */
		readonly EnvironmentVariableDefinitionIdUnique: string;
		/** For internal use only. */
		Hint: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Tells whether the component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** For internal use only. */
		IsRequired: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
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
		ParameterKey: string;
		/** Unique identifier for Environment Variable Definition associated with Environment Variable Definition. */
		ParentDefinitionId: string;
		/** Unique entity name. */
		SchemaName: string;
		/** Environment variable secret store. */
		SecretStore: OptionSet.EnvironmentVariableDefinition.SecretStore;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Environment Variable Definition */
		statecode: OptionSet.EnvironmentVariableDefinition.statecode;
		/** Reason for the status of the Environment Variable Definition */
		statuscode: OptionSet.EnvironmentVariableDefinition.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Environment variable value type. */
		Type: OptionSet.EnvironmentVariableDefinition.Type;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** For internal use only. */
		ValueSchema: string;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Tells whether the component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** For internal use only. */
			readonly IsRequired: string;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum OwnerIdType {
		}
		enum SecretStore {
			/** 0 */
			Azure_Key_Vault,
			/** 1 */
			Microsoft_Dataverse
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
			/** 100000002 */
			Boolean,
			/** 100000004 */
			Data_Source,
			/** 100000003 */
			JSON,
			/** 100000001 */
			Number,
			/** 100000005 */
			Secret,
			/** 100000000 */
			String
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
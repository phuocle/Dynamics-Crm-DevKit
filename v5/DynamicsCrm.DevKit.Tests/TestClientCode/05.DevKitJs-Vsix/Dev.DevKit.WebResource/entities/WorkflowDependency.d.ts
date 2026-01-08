//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class WorkflowDependencyApi {
		/**
		* DynamicsCrm.DevKit WorkflowDependencyApi
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
		/** Unique identifier of the user who created the process dependency. */
		readonly CreatedBy: string | null;
		/** Date and time when the process dependency was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the process dependency. */
		readonly CreatedOnBehalfBy: string | null;
		/** Name of the entity used in the process. */
		CustomEntityName: string | null;
		/** Name of the attribute used in the process. */
		DependentAttributeName: string | null;
		/** Name of the entity used in the process. */
		DependentEntityName: string | null;
		/** Comma-separated list of attributes that will be passed to process instance. */
		EntityAttributes: string | null;
		/** Unique identifier of the user who last modified the process dependency. */
		readonly ModifiedBy: string | null;
		/** Date and time when the process dependency was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the process dependency. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the process dependency. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the process dependency. */
		readonly OwningUser: string | null;
		/** Name of the process parameter. */
		ParameterName: string | null;
		/** Fully qualified name of the CLR type of the local parameter. */
		ParameterType: string | null;
		/** Attribute of the primary entity that specifies related entity. */
		RelatedAttributeName: string | null;
		/** Name of the related entity. */
		RelatedEntityName: string | null;
		/** Unique identifier of the SDK message. */
		SdkMessageId: string | null;
		/** Type of the process dependency. */
		Type: OptionSet.WorkflowDependency.Type | null;
		readonly VersionNumber: number | null;
		/** Unique identifier of the process dependency. */
		WorkflowDependencyId: string | null;
		/** Unique identifier of the process with which the dependency is associated. */
		WorkflowId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the process dependency. */
			readonly CreatedBy: string;
			/** Date and time when the process dependency was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the process dependency. */
			readonly CreatedOnBehalfBy: string;
			/** Name of the entity used in the process. */
			readonly CustomEntityName: string;
			/** Name of the attribute used in the process. */
			readonly DependentAttributeName: string;
			/** Name of the entity used in the process. */
			readonly DependentEntityName: string;
			/** Comma-separated list of attributes that will be passed to process instance. */
			readonly EntityAttributes: string;
			/** Unique identifier of the user who last modified the process dependency. */
			readonly ModifiedBy: string;
			/** Date and time when the process dependency was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the process dependency. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the process dependency. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the process dependency. */
			readonly OwningUser: string;
			/** Name of the process parameter. */
			readonly ParameterName: string;
			/** Fully qualified name of the CLR type of the local parameter. */
			readonly ParameterType: string;
			/** Attribute of the primary entity that specifies related entity. */
			readonly RelatedAttributeName: string;
			/** Name of the related entity. */
			readonly RelatedEntityName: string;
			/** Unique identifier of the SDK message. */
			readonly SdkMessageId: string;
			/** Type of the process dependency. */
			readonly Type: string;
			readonly VersionNumber: string;
			/** Unique identifier of the process dependency. */
			readonly WorkflowDependencyId: string;
			/** Unique identifier of the process with which the dependency is associated. */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace WorkflowDependency {
		enum Type {
			/** Argument_Entity_that_workflow_depends_on = 9*/
			Argument_Entity_that_workflow_depends_on = 9,
			/** Attribute_definition_that_workflow_depends_on = 8*/
			Attribute_definition_that_workflow_depends_on = 8,
			/** Custom_entity_definition_that_workflow_depends_on = 7*/
			Custom_entity_definition_that_workflow_depends_on = 7,
			/** Local_parameter = 2*/
			Local_parameter = 2,
			/** Primary_entity = 3*/
			Primary_entity = 3,
			/** Primary_entity_after_SDK_operation = 5*/
			Primary_entity_after_SDK_operation = 5,
			/** Primary_entity_before_SDK_operation = 4*/
			Primary_entity_before_SDK_operation = 4,
			/** Related_entity = 6*/
			Related_entity = 6,
			/** Sdk_association = 1*/
			Sdk_association = 1
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
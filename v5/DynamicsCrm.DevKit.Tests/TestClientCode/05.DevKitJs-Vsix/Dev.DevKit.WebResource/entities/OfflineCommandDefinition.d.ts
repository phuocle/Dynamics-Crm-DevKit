//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class OfflineCommandDefinitionApi {
		/**
		* DynamicsCrm.DevKit OfflineCommandDefinitionApi
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
		/** Command Definition of Non Crud Command */
		CommandDefinition: string | null;
		/** Unique identifier of the Command Definition for the Microsoft Dynamics 365. */
		CommandDefinitionId: string | null;
		/** Command Name of Non Crud Command. */
		CommandName: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the non crud command. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Primary Entity Logical Name of entity for which command is used */
		PrimaryEntityLogicalName: string | null;
		/** Unique identifier of the solution. */
		SolutionName: string | null;
		/** Internal use Only */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Command Definition of Non Crud Command */
			readonly CommandDefinition: string;
			/** Unique identifier of the Command Definition for the Microsoft Dynamics 365. */
			readonly CommandDefinitionId: string;
			/** Command Name of Non Crud Command. */
			readonly CommandName: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the non crud command. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Primary Entity Logical Name of entity for which command is used */
			readonly PrimaryEntityLogicalName: string;
			/** Unique identifier of the solution. */
			readonly SolutionName: string;
			/** Internal use Only */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace OfflineCommandDefinition {
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
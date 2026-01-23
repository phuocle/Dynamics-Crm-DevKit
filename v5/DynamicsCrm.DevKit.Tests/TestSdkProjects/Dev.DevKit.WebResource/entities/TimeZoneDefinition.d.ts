//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class TimeZoneDefinitionApi {
		/**
		* DynamicsCrm.DevKit TimeZoneDefinitionApi
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
		/** Base time bias of the time zone. */
		Bias: number | null;
		/** Unique identifier of the user who created the time zone record. */
		readonly CreatedBy: string | null;
		/** Date and time when the time zone record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the timezonedefinition. */
		readonly CreatedOnBehalfBy: string | null;
		/** Time zone name for the daylight time. */
		DaylightName: string | null;
		/** Unique identifier of the user who last modified the time zone record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the time zone record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the timezonedefinition. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the time zone definition. */
		readonly OrganizationId: string | null;
		/** Order an entry for a time zone definition is retired. 0 for the latest entry. */
		RetiredOrder: number | null;
		/** Time zone name for the standard time. */
		StandardName: string | null;
		/** Time zone identification code. */
		TimeZoneCode: number | null;
		/** Unique identifier of the time zone record. */
		TimeZoneDefinitionId: string | null;
		/** Display name for the time zone in the Microsoft Windows registry. */
		UserInterfaceName: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Base time bias of the time zone. */
			readonly Bias: string;
			/** Unique identifier of the user who created the time zone record. */
			readonly CreatedBy: string;
			/** Date and time when the time zone record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the timezonedefinition. */
			readonly CreatedOnBehalfBy: string;
			/** Time zone name for the daylight time. */
			readonly DaylightName: string;
			/** Unique identifier of the user who last modified the time zone record. */
			readonly ModifiedBy: string;
			/** Date and time when the time zone record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the timezonedefinition. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the time zone definition. */
			readonly OrganizationId: string;
			/** Order an entry for a time zone definition is retired. 0 for the latest entry. */
			readonly RetiredOrder: string;
			/** Time zone name for the standard time. */
			readonly StandardName: string;
			/** Time zone identification code. */
			readonly TimeZoneCode: string;
			/** Unique identifier of the time zone record. */
			readonly TimeZoneDefinitionId: string;
			/** Display name for the time zone in the Microsoft Windows registry. */
			readonly UserInterfaceName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace TimeZoneDefinition {
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
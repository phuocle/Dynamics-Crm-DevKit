//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormCustomAPIResponseProperty_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for the custom API that owns this custom API response property */
			CustomAPIId: DevKit.Controls.Lookup;
			/** Localized description for custom API response property instances */
			Description: DevKit.Controls.String;
			/** Localized display name for custom API response property instances */
			DisplayName: DevKit.Controls.String;
			/** The logical name of the entity bound to the custom API response property */
			LogicalEntityName: DevKit.Controls.String;
			/** The primary name of the custom API response property */
			Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** The data type of the custom API response property */
			Type: DevKit.Controls.OptionSet;
			/** Unique name for the custom API response property */
			UniqueName: DevKit.Controls.String;
		}
	}
	export class FormCustomAPIResponseProperty_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form CustomAPIResponseProperty_Information */
		Body: DevKit.FormCustomAPIResponseProperty_Information.Body;
	}
	export class CustomAPIResponsePropertyApi {
		/**
		* DynamicsCrm.DevKit CustomAPIResponsePropertyApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.CustomAPIResponseProperty.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier for the custom API that owns this custom API response property */
		CustomAPIId: string | null;
		/** Unique identifier for custom API response property instances */
		CustomAPIResponsePropertyId: string | null;
		/** Localized description for custom API response property instances */
		Description: string | null;
		/** Localized display name for custom API response property instances */
		DisplayName: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** The logical name of the entity bound to the custom API response property */
		LogicalEntityName: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The primary name of the custom API response property */
		Name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Custom API Response Property */
		statecode: OptionSet.CustomAPIResponseProperty.statecode | null;
		/** Reason for the status of the Custom API Response Property */
		statuscode: OptionSet.CustomAPIResponseProperty.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** The data type of the custom API response property */
		Type: OptionSet.CustomAPIResponseProperty.Type | null;
		/** Unique name for the custom API response property */
		UniqueName: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
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
			/** Unique identifier for the custom API that owns this custom API response property */
			readonly CustomAPIId: string;
			/** Unique identifier for custom API response property instances */
			readonly CustomAPIResponsePropertyId: string;
			/** Localized description for custom API response property instances */
			readonly Description: string;
			/** Localized display name for custom API response property instances */
			readonly DisplayName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** The logical name of the entity bound to the custom API response property */
			readonly LogicalEntityName: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The primary name of the custom API response property */
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Custom API Response Property */
			readonly statecode: string;
			/** Reason for the status of the Custom API Response Property */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** The data type of the custom API response property */
			readonly Type: string;
			/** Unique name for the custom API response property */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomAPIResponseProperty {
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
		enum Type {
			/** Boolean = 0*/
			Boolean = 0,
			/** DateTime = 1*/
			DateTime = 1,
			/** Decimal = 2*/
			Decimal = 2,
			/** Entity = 3*/
			Entity = 3,
			/** EntityCollection = 4*/
			EntityCollection = 4,
			/** EntityReference = 5*/
			EntityReference = 5,
			/** Float = 6*/
			Float = 6,
			/** Guid = 12*/
			Guid = 12,
			/** Integer = 7*/
			Integer = 7,
			/** Money = 8*/
			Money = 8,
			/** Picklist = 9*/
			Picklist = 9,
			/** String = 10*/
			String = 10,
			/** StringArray = 11*/
			StringArray = 11
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
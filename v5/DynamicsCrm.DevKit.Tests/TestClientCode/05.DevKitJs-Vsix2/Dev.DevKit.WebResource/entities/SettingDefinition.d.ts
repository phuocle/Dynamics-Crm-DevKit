//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SettingDefinitionApi {
		/**
		* DynamicsCrm.DevKit SettingDefinitionApi
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
		readonly ComponentState: OptionSet.SettingDefinition.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Data type of Setting Definition. */
		DataType: OptionSet.SettingDefinition.DataType | null;
		/** Default value to be used, if there is no associated App Setting Value. */
		DefaultValue: string | null;
		/** The description of the Setting Definition. */
		Description: string | null;
		/** Display name of the Setting Definition. */
		DisplayName: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Specifies information url of the setting. */
		InformationUrl: string | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Specifies whether settings is hidden from ui designer. */
		IsHidden: boolean | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Specifies whether settings can be overridden at an app or org level by other publishers. */
		IsOverridable: boolean | null;
		/** Specifies whether setting is a internal platform setting. */
		IsPlatform: boolean | null;
		/** Specifies whether settings controls the flighting a preview feature. */
		readonly IsPreview: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Overridable Level of Setting Definition. */
		OverridableLevel: OptionSet.SettingDefinition.OverridableLevel | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Specifies settings release level. */
		ReleaseLevel: OptionSet.SettingDefinition.ReleaseLevel | null;
		/** Unique identifier for entity instances */
		SettingDefinitionId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the SettingDefinition */
		statecode: OptionSet.SettingDefinition.statecode | null;
		/** Reason for the status of the SettingDefinition */
		statuscode: OptionSet.SettingDefinition.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Unique name of the Setting Definition. */
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
			/** Data type of Setting Definition. */
			readonly DataType: string;
			/** Default value to be used, if there is no associated App Setting Value. */
			readonly DefaultValue: string;
			/** The description of the Setting Definition. */
			readonly Description: string;
			/** Display name of the Setting Definition. */
			readonly DisplayName: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Specifies information url of the setting. */
			readonly InformationUrl: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Specifies whether settings is hidden from ui designer. */
			readonly IsHidden: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Specifies whether settings can be overridden at an app or org level by other publishers. */
			readonly IsOverridable: string;
			/** Specifies whether setting is a internal platform setting. */
			readonly IsPlatform: string;
			/** Specifies whether settings controls the flighting a preview feature. */
			readonly IsPreview: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Overridable Level of Setting Definition. */
			readonly OverridableLevel: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Specifies settings release level. */
			readonly ReleaseLevel: string;
			/** Unique identifier for entity instances */
			readonly SettingDefinitionId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the SettingDefinition */
			readonly statecode: string;
			/** Reason for the status of the SettingDefinition */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique name of the Setting Definition. */
			readonly UniqueName: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SettingDefinition {
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
		enum DataType {
			/** Boolean = 2*/
			Boolean = 2,
			/** Number = 0*/
			Number = 0,
			/** String = 1*/
			String = 1
		}
		enum OverridableLevel {
			/** App_And_Organization = 0*/
			App_And_Organization = 0,
			/** App_Only = 2*/
			App_Only = 2,
			/** Organization_Only = 1*/
			Organization_Only = 1
		}
		enum ReleaseLevel {
			/** Early_Access = 1*/
			Early_Access = 1,
			/** GA = 0*/
			GA = 0,
			/** Preview = 2*/
			Preview = 2
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
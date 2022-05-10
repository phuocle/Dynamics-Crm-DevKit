//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SettingDefinitionApi {
		/**
		* DynamicsCrm.DevKit SettingDefinitionApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SettingDefinition.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Data type of Setting Definition. */
		DataType: OptionSet.SettingDefinition.DataType;
		/** Default value to be used, if there is no associated App Setting Value. */
		DefaultValue: string;
		/** The description of the Setting Definition. */
		Description: string;
		/** Display name of the Setting Definition. */
		DisplayName: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Specifies information url of the setting. */
		InformationUrl: string;
		/** For internal use only. */
		IsCustomizable: string;
		/** Specifies whether settings is hidden from ui designer. */
		IsHidden: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Specifies whether settings can be overridden at an app or org level by other publishers. */
		IsOverridable: boolean;
		/** Specifies whether setting is a internal platform setting. */
		IsPlatform: boolean;
		/** Specifies whether settings controls the flighting a preview feature. */
		readonly IsPreview: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Overridable Level of Setting Definition. */
		OverridableLevel: OptionSet.SettingDefinition.OverridableLevel;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Specifies settings release level. */
		ReleaseLevel: OptionSet.SettingDefinition.ReleaseLevel;
		/** Unique identifier for entity instances */
		SettingDefinitionId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the SettingDefinition */
		statecode: OptionSet.SettingDefinition.statecode;
		/** Reason for the status of the SettingDefinition */
		statuscode: OptionSet.SettingDefinition.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique name of the Setting Definition. */
		UniqueName: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum DataType {
			/** 2 */
			Boolean,
			/** 0 */
			Number,
			/** 1 */
			String
		}
		enum OverridableLevel {
			/** 0 */
			App_And_Organization,
			/** 2 */
			App_Only,
			/** 1 */
			Organization_Only
		}
		enum ReleaseLevel {
			/** 1 */
			Early_Access,
			/** 0 */
			GA,
			/** 2 */
			Preview
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
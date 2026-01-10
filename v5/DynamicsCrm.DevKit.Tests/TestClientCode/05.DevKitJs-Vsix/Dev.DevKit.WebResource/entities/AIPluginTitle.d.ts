//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class AIPluginTitleApi {
		/**
		* DynamicsCrm.DevKit AIPluginTitleApi
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
		/** Accent Color */
		AccentColor: string | null;
		/** Unique identifier for entity instances */
		AIPluginTitleId: string | null;
		/** BaseArtifact Id */
		BaseArtifactId: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.AIPluginTitle.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description */
		Description: string | null;
		/** Developer Name */
		DeveloperName: string | null;
		/** Display Name */
		DisplayName: string | null;
		/** Icon URI */
		Icon: string | null;
		/** Icons Color Image */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		IconsColorImage: string | null;
		IconsColorImage_Timestamp: number | null;
		IconsColorImage_URL: string | null;
		readonly IconsColorImageId: string | null;
		/** Icons Outline Image */
		IconsOutlineImage: string | null;
		IconsOutlineImage_Timestamp: number | null;
		IconsOutlineImage_URL: string | null;
		readonly IconsOutlineImageId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		IsCustom: boolean | null;
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
		Name: string | null;
		/** Unique identifier for the organization */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Plugin Title Version */
		PluginTitleVersion: string | null;
		/** Privacy URL */
		PrivacyURL: string | null;
		/** Short Description */
		ShortDescription: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the AIPluginTitle */
		statecode: OptionSet.AIPluginTitle.statecode | null;
		/** Reason for the status of the AIPluginTitle */
		statuscode: OptionSet.AIPluginTitle.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Terms Of Use Url */
		TermsOfUseUrl: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/** Website Url */
		WebsiteUrl: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Accent Color */
			readonly AccentColor: string;
			/** Unique identifier for entity instances */
			readonly AIPluginTitleId: string;
			/** BaseArtifact Id */
			readonly BaseArtifactId: string;
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
			/** Description */
			readonly Description: string;
			/** Developer Name */
			readonly DeveloperName: string;
			/** Display Name */
			readonly DisplayName: string;
			/** Icon URI */
			readonly Icon: string;
			/** Icons Color Image */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly IconsColorImage: string;
			readonly IconsColorImage_Timestamp: string;
			readonly IconsColorImage_URL: string;
			readonly IconsColorImageId: string;
			/** Icons Outline Image */
			readonly IconsOutlineImage: string;
			readonly IconsOutlineImage_Timestamp: string;
			readonly IconsOutlineImage_URL: string;
			readonly IconsOutlineImageId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			readonly IsCustom: string;
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
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Plugin Title Version */
			readonly PluginTitleVersion: string;
			/** Privacy URL */
			readonly PrivacyURL: string;
			/** Short Description */
			readonly ShortDescription: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the AIPluginTitle */
			readonly statecode: string;
			/** Reason for the status of the AIPluginTitle */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Terms Of Use Url */
			readonly TermsOfUseUrl: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Website Url */
			readonly WebsiteUrl: string;
		}
	}
}
declare namespace OptionSet {
	namespace AIPluginTitle {
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
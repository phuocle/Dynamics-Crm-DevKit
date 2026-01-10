//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class OrganizationUIApi {
		/**
		* DynamicsCrm.DevKit OrganizationUIApi
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
		readonly ComponentState: OptionSet.OrganizationUI.ComponentState | null;
		/** For internal use only. */
		FieldXml: string | null;
		/** Unique identifier of the record type form. */
		FormId: string | null;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		readonly FormIdUnique: string | null;
		/** XML representation of the form layout. */
		FormXml: string | null;
		/** Binary representation of the icon used in record type grid views. */
		GridIcon: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		readonly IsManaged: boolean | null;
		/** Binary representation of the large icon used in the record type form. */
		LargeEntityIcon: string | null;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string | null;
		/** Binary representation of the large icon used in the Microsoft Dynamics 365 client for Outlook for this record type. */
		OutlookShortcutIcon: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** For internal use only. */
		PreviewColumnsetXml: string | null;
		/** For internal use only. */
		PreviewXml: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		Version: number | null;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** For internal use only. */
			readonly FieldXml: string;
			/** Unique identifier of the record type form. */
			readonly FormId: string;
			/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
			readonly FormIdUnique: string;
			/** XML representation of the form layout. */
			readonly FormXml: string;
			/** Binary representation of the icon used in record type grid views. */
			readonly GridIcon: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Binary representation of the large icon used in the record type form. */
			readonly LargeEntityIcon: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** Binary representation of the large icon used in the Microsoft Dynamics 365 client for Outlook for this record type. */
			readonly OutlookShortcutIcon: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** For internal use only. */
			readonly PreviewColumnsetXml: string;
			/** For internal use only. */
			readonly PreviewXml: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly Version: string;
			/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace OrganizationUI {
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
		enum ObjectTypeCode {
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
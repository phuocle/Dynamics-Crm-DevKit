//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ReportVisibilityApi {
		/**
		* DynamicsCrm.DevKit ReportVisibilityApi
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
		readonly ComponentState: OptionSet.ReportVisibility.ComponentState | null;
		/** Unique identifier of the user who created the report visibility record. */
		readonly CreatedBy: string | null;
		/** Date and time when the report visibility record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the reportvisibility. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who last modified the report visibility record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the report visibility record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the reportvisibility. */
		readonly ModifiedOnBehalfBy: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the report visibility record. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the report visibility record. */
		readonly OwningUser: string | null;
		/** Unique identifier of the report. */
		ReportId: string | null;
		/** Unique identifier of the report visibility record. */
		ReportVisibilityId: string | null;
		/** For internal use only. */
		readonly ReportVisibilityIdUnique: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		readonly VersionNumber: number | null;
		/** Type of visibility of the report. */
		VisibilityCode: OptionSet.ReportVisibility.VisibilityCode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the report visibility record. */
			readonly CreatedBy: string;
			/** Date and time when the report visibility record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the reportvisibility. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the report visibility record. */
			readonly ModifiedBy: string;
			/** Date and time when the report visibility record was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the reportvisibility. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the report visibility record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the report visibility record. */
			readonly OwningUser: string;
			/** Unique identifier of the report. */
			readonly ReportId: string;
			/** Unique identifier of the report visibility record. */
			readonly ReportVisibilityId: string;
			/** For internal use only. */
			readonly ReportVisibilityIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
			/** Type of visibility of the report. */
			readonly VisibilityCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ReportVisibility {
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
		enum VisibilityCode {
			/** Forms_for_related_record_types = 2*/
			Forms_for_related_record_types = 2,
			/** Lists_for_related_record_types = 3*/
			Lists_for_related_record_types = 3,
			/** Reports_area = 1*/
			Reports_area = 1
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
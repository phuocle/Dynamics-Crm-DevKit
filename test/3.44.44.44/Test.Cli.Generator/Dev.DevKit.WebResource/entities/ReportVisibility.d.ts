//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ReportVisibilityApi {
		/**
		* DynamicsCrm.DevKit ReportVisibilityApi
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
		readonly ComponentState: OptionSet.ReportVisibility.ComponentState;
		/** Unique identifier of the user who created the report visibility record. */
		readonly CreatedBy: string;
		/** Date and time when the report visibility record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the reportvisibility. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the report visibility record. */
		readonly ModifiedBy: string;
		/** Date and time when the report visibility record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the reportvisibility. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the report visibility record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the report visibility record. */
		readonly OwningUser: string;
		/** Unique identifier of the report. */
		ReportId: string;
		/** Unique identifier of the report visibility record. */
		ReportVisibilityId: string;
		/** For internal use only. */
		readonly ReportVisibilityIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		/** Type of visibility of the report. */
		VisibilityCode: OptionSet.ReportVisibility.VisibilityCode;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum VisibilityCode {
			/** 2 */
			Forms_for_related_record_types,
			/** 3 */
			Lists_for_related_record_types,
			/** 1 */
			Reports_area
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
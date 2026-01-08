//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ReportLinkApi {
		/**
		* DynamicsCrm.DevKit ReportLinkApi
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
		/** Unique identifier of the user who created the report link. */
		readonly CreatedBy: string | null;
		/** Date and time when the report link record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the reportlink. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Unique identifier of the linked report. */
		LinkedReportId: string | null;
		/** Name of the linked report. */
		LinkedReportName: string | null;
		/** Link type of the report. */
		LinkTypeCode: OptionSet.ReportLink.LinkTypeCode | null;
		/** Unique identifier of the user who last modified the report link. */
		readonly ModifiedBy: string | null;
		/** Date and time when the report link was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the reportlink. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the report link. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the report link. */
		readonly OwningUser: string | null;
		/** Unique identifier of the main report. */
		ReportId: string | null;
		/** Unique identifier of the report link. */
		ReportLinkId: string | null;
		/** For internal use only. */
		readonly ReportLinkIdUnique: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the report link. */
			readonly CreatedBy: string;
			/** Date and time when the report link record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the reportlink. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the linked report. */
			readonly LinkedReportId: string;
			/** Name of the linked report. */
			readonly LinkedReportName: string;
			/** Link type of the report. */
			readonly LinkTypeCode: string;
			/** Unique identifier of the user who last modified the report link. */
			readonly ModifiedBy: string;
			/** Date and time when the report link was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the reportlink. */
			readonly ModifiedOnBehalfBy: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the report link. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the report link. */
			readonly OwningUser: string;
			/** Unique identifier of the main report. */
			readonly ReportId: string;
			/** Unique identifier of the report link. */
			readonly ReportLinkId: string;
			/** For internal use only. */
			readonly ReportLinkIdUnique: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ReportLink {
		enum LinkTypeCode {
			/** Drill_through = 1*/
			Drill_through = 1,
			/** Drill_through_and_sub_report = 3*/
			Drill_through_and_sub_report = 3,
			/** Sub_report = 2*/
			Sub_report = 2
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
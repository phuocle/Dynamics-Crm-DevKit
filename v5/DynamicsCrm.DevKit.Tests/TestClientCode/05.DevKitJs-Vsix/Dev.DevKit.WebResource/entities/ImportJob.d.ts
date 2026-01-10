//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormImportJob_Information {
		interface Tabs {
		}
		interface Body {
			/** Import Progress Percentage. */
			Progress: DevKit.Controls.Double;
			/** Unique identifier of the solution. */
			SolutionName: DevKit.Controls.String;
		}
	}
	export class FormImportJob_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form ImportJob_Information */
		Body: DevKit.FormImportJob_Information.Body;
	}
	export class ImportJobApi {
		/**
		* DynamicsCrm.DevKit ImportJobApi
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
		/** Date and time when the import job was completed. */
		readonly CompletedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who created the importJob. */
		readonly CreatedBy: string | null;
		/** Date and time when the import job record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the import job record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unstructured data associated with the import job. */
		Data: string | null;
		/** The context of the import */
		ImportContext: string | null;
		/** Unique identifier of the import job. */
		ImportJobId: string | null;
		/** Unique identifier of the user who modified the importJob. */
		readonly ModifiedBy: string | null;
		/** Date and time when the import job was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the import job record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the import job. */
		Name: string | null;
		/** The context of the solution operation */
		OperationContext: string | null;
		/** Unique identifier of the organization associated with the importjob. */
		readonly OrganizationId: string | null;
		/** Import Progress Percentage. */
		Progress: number | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Unique identifier of the solution. */
		SolutionName: string | null;
		/** Date and time when the import job was started. */
		readonly StartedOn_UtcDateAndTime: Date | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Date and time when the import job was completed. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Unique identifier of the user who created the importJob. */
			readonly CreatedBy: string;
			/** Date and time when the import job record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the import job record. */
			readonly CreatedOnBehalfBy: string;
			/** Unstructured data associated with the import job. */
			readonly Data: string;
			/** The context of the import */
			readonly ImportContext: string;
			/** Unique identifier of the import job. */
			readonly ImportJobId: string;
			/** Unique identifier of the user who modified the importJob. */
			readonly ModifiedBy: string;
			/** Date and time when the import job was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the import job record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the import job. */
			readonly Name: string;
			/** The context of the solution operation */
			readonly OperationContext: string;
			/** Unique identifier of the organization associated with the importjob. */
			readonly OrganizationId: string;
			/** Import Progress Percentage. */
			readonly Progress: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Unique identifier of the solution. */
			readonly SolutionName: string;
			/** Date and time when the import job was started. */
			readonly StartedOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace ImportJob {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class CustomControlApi {
		/**
		* DynamicsCrm.DevKit CustomControlApi
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
		/** Authoring Manifest of the CustomControl. */
		AuthoringManifest: string | null;
		/** Custom control data in JSON format. */
		ClientJson: string | null;
		/** Compatible Data Types For Custom Controls */
		CompatibleDataTypes: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.CustomControl.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unique identifier of the Custom Control for the Microsoft Dynamics 365. */
		CustomControlId: string | null;
		/** For internal use only. */
		readonly CustomControlIdUnique: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		readonly IsManaged: boolean | null;
		/** Manifest of the CustomControl. */
		Manifest: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the custom control. */
		Name: string | null;
		/** Unique identifier of the organization associated with the custom control. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Supported platforms of the CustomControl. */
		SupportedPlatform: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		Version: string | null;
		/** Version number of the Custom Control. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Authoring Manifest of the CustomControl. */
			readonly AuthoringManifest: string;
			/** Custom control data in JSON format. */
			readonly ClientJson: string;
			/** Compatible Data Types For Custom Controls */
			readonly CompatibleDataTypes: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the Custom Control for the Microsoft Dynamics 365. */
			readonly CustomControlId: string;
			/** For internal use only. */
			readonly CustomControlIdUnique: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			readonly IsManaged: string;
			/** Manifest of the CustomControl. */
			readonly Manifest: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the custom control. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the custom control. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Supported platforms of the CustomControl. */
			readonly SupportedPlatform: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly Version: string;
			/** Version number of the Custom Control. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace CustomControl {
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
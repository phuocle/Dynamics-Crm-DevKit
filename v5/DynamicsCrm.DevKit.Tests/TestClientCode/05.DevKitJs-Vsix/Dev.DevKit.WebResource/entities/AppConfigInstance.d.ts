//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class AppConfigInstanceApi {
		/**
		* DynamicsCrm.DevKit AppConfigInstanceApi
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
		/** System-calculated App Configuration unique identifier. */
		AppConfigId: string | null;
		/** Enter the App Configuration unique identifier of AppConfig entity for which this customization belongs. */
		AppConfigIdUnique: string | null;
		/** System-Populated App Configuration instance identifier. */
		readonly AppConfigInstanceId: string | null;
		/** System-populated App Configuration Instance unique identifier. */
		AppConfigInstanceIdUnique: string | null;
		/** System-calculated App Configuration Master identifier. */
		AppConfigMasterId: string | null;
		/** System-Populated Published or UnPublished state of App Configuration Instance. */
		readonly ComponentState: OptionSet.AppConfigInstance.ComponentState | null;
		/** ComponentType */
		ComponentType: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** For internal use only. */
		readonly ImportSequenceNumber: number | null;
		/** Shows the version in which the App Configuration Instance is introduced. */
		IntroducedVersion: string | null;
		/** Is Managed */
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** ObjectId */
		ObjectId: string | null;
		/** System-calculated field for Organization identifier. */
		readonly OrganizationId: string | null;
		/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Shows the last overwrite time for the App Configuration Instance. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Set the solution idenfitier for associated solution. */
		readonly SolutionId: string | null;
		/** Set the supporting solution idenfitier for associated solution. */
		readonly SupportingSolutionId: string | null;
		/** Enter a value for the customization property that is valid as per the validator XML specified in the app configuration master record. */
		Value: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** System-calculated App Configuration unique identifier. */
			readonly AppConfigId: string;
			/** Enter the App Configuration unique identifier of AppConfig entity for which this customization belongs. */
			readonly AppConfigIdUnique: string;
			/** System-Populated App Configuration instance identifier. */
			readonly AppConfigInstanceId: string;
			/** System-populated App Configuration Instance unique identifier. */
			readonly AppConfigInstanceIdUnique: string;
			/** System-calculated App Configuration Master identifier. */
			readonly AppConfigMasterId: string;
			/** System-Populated Published or UnPublished state of App Configuration Instance. */
			readonly ComponentState: string;
			/** ComponentType */
			readonly ComponentType: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalfÂ of another user. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. */
			readonly ImportSequenceNumber: string;
			/** Shows the version in which the App Configuration Instance is introduced. */
			readonly IntroducedVersion: string;
			/** Is Managed */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** ObjectId */
			readonly ObjectId: string;
			/** System-calculated field for Organization identifier. */
			readonly OrganizationId: string;
			/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Shows the last overwrite time for the App Configuration Instance. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Set the solution idenfitier for associated solution. */
			readonly SolutionId: string;
			/** Set the supporting solution idenfitier for associated solution. */
			readonly SupportingSolutionId: string;
			/** Enter a value for the customization property that is valid as per the validator XML specified in the app configuration master record. */
			readonly Value: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppConfigInstance {
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
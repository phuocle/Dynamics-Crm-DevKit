//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class AppConfigApi {
		/**
		* DynamicsCrm.DevKit AppConfigApi
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
		/** System-populated app configuration ID. */
		readonly AppConfigId: string | null;
		/** System-populated app configuration unique ID. */
		AppConfigIdUnique: string | null;
		/** The App Config diff computed for managed solutions containing the AppConfig entity. For internal use only. */
		AppConfigImportXml: string | null;
		/** Choose the app module to associate with the app configuration. */
		AppModuleId: string | null;
		/** For internal use only */
		readonly ComponentState: OptionSet.AppConfig.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalfÂ of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** For internal use only. */
		readonly ImportSequenceNumber: number | null;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string | null;
		/** Is Managed */
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string | null;
		/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Internal use only */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Shows whether the app configuration is Active or Inactive. Inactive records are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.AppConfig.StateCode | null;
		/** Select the status. */
		StatusCode: OptionSet.AppConfig.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** System-populated app configuration ID. */
			readonly AppConfigId: string;
			/** System-populated app configuration unique ID. */
			readonly AppConfigIdUnique: string;
			/** The App Config diff computed for managed solutions containing the AppConfig entity. For internal use only. */
			readonly AppConfigImportXml: string;
			/** Choose the app module to associate with the app configuration. */
			readonly AppModuleId: string;
			/** For internal use only */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalfÂ of another user. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. */
			readonly ImportSequenceNumber: string;
			/** Version in which the similarity rule is introduced. */
			readonly IntroducedVersion: string;
			/** Is Managed */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Internal use only */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Shows whether the app configuration is Active or Inactive. Inactive records are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Select the status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppConfig {
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
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
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
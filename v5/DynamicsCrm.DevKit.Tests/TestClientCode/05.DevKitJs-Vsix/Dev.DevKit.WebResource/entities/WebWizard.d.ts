//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class WebWizardApi {
		/**
		* DynamicsCrm.DevKit WebWizardApi
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
		/** Privileges required to use this wizard, separated with commas (,). */
		AccessPrivileges: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.WebWizard.ComponentState | null;
		/** Unique identifier of the user who created the wizard definition. */
		readonly CreatedBy: string | null;
		/** Date and time when the wizard definition was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the webwizard. */
		readonly CreatedOnBehalfBy: string | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Information about whether all pages for this wizard are statically defined. */
		IsStaticPageSequence: boolean | null;
		/** Unique identifier of the user who last modified the wizard definition. */
		readonly ModifiedBy: string | null;
		/** Date and time when the wizard definition was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the webwizard. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the wizard */
		Name: string | null;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Sequence number of the first page of this wizard. */
		StartPageSequenceNumber: number | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Title of the wizard. */
		TitleResourceString: string | null;
		readonly VersionNumber: number | null;
		/** Unique identifier of the wizard. */
		WebWizardId: string | null;
		/** Unique identifier of the Web Wizard. */
		readonly WebWizardIdUnique: string | null;
		/** Window height for the wizard. */
		WizardPageHeight: number | null;
		/** Window width for the wizard. */
		WizardPageWidth: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Privileges required to use this wizard, separated with commas (,). */
			readonly AccessPrivileges: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the wizard definition. */
			readonly CreatedBy: string;
			/** Date and time when the wizard definition was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the webwizard. */
			readonly CreatedOnBehalfBy: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Information about whether all pages for this wizard are statically defined. */
			readonly IsStaticPageSequence: string;
			/** Unique identifier of the user who last modified the wizard definition. */
			readonly ModifiedBy: string;
			/** Date and time when the wizard definition was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the webwizard. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the wizard */
			readonly Name: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Sequence number of the first page of this wizard. */
			readonly StartPageSequenceNumber: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Title of the wizard. */
			readonly TitleResourceString: string;
			readonly VersionNumber: string;
			/** Unique identifier of the wizard. */
			readonly WebWizardId: string;
			/** Unique identifier of the Web Wizard. */
			readonly WebWizardIdUnique: string;
			/** Window height for the wizard. */
			readonly WizardPageHeight: string;
			/** Window width for the wizard. */
			readonly WizardPageWidth: string;
		}
	}
}
declare namespace OptionSet {
	namespace WebWizard {
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WebWizardApi {
		/**
		* DynamicsCrm.DevKit WebWizardApi
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
		/** Privileges required to use this wizard, separated with commas (,). */
		AccessPrivileges: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.WebWizard.ComponentState;
		/** Unique identifier of the user who created the wizard definition. */
		readonly CreatedBy: string;
		/** Date and time when the wizard definition was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the webwizard. */
		readonly CreatedOnBehalfBy: string;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Information about whether all pages for this wizard are statically defined. */
		IsStaticPageSequence: boolean;
		/** Unique identifier of the user who last modified the wizard definition. */
		readonly ModifiedBy: string;
		/** Date and time when the wizard definition was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the webwizard. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the wizard */
		Name: string;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Sequence number of the first page of this wizard. */
		StartPageSequenceNumber: number;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Title of the wizard. */
		TitleResourceString: string;
		readonly VersionNumber: number;
		/** Unique identifier of the wizard. */
		WebWizardId: string;
		/** Unique identifier of the Web Wizard. */
		readonly WebWizardIdUnique: string;
		/** Window height for the wizard. */
		WizardPageHeight: number;
		/** Window width for the wizard. */
		WizardPageWidth: number;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
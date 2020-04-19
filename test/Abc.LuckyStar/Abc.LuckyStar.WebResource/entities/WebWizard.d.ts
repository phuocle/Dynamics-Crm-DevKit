//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Privileges required to use this wizard, separated with commas (,). */
		AccessPrivileges: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the wizard definition. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the wizard definition was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the webwizard. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether all pages for this wizard are statically defined. */
		IsStaticPageSequence: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the wizard definition. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the wizard definition was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the webwizard. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the wizard */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Sequence number of the first page of this wizard. */
		StartPageSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Title of the wizard. */
		TitleResourceString: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the wizard. */
		WebWizardId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Web Wizard. */
		WebWizardIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Window height for the wizard. */
		WizardPageHeight: DevKit.WebApi.IntegerValue;
		/** Window width for the wizard. */
		WizardPageWidth: DevKit.WebApi.IntegerValue;
	}
}
declare namespace OptionSet {
	namespace WebWizard {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
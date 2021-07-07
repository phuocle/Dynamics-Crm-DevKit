//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppConfigInstanceApi {
		/**
		* DynamicsCrm.DevKit AppConfigInstanceApi
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
		/** System-calculated App Configuration unique identifier. */
		AppConfigId: DevKit.WebApi.LookupValue;
		/** Enter the App Configuration unique identifier of AppConfig entity for which this customization belongs. */
		AppConfigIdUnique: DevKit.WebApi.GuidValue;
		/** System-Populated App Configuration instance identifier. */
		AppConfigInstanceId: DevKit.WebApi.GuidValueReadonly;
		/** System-populated App Configuration Instance unique identifier. */
		AppConfigInstanceIdUnique: DevKit.WebApi.GuidValue;
		/** System-calculated App Configuration Master identifier. */
		AppConfigMasterId: DevKit.WebApi.LookupValue;
		/** System-Populated Published or UnPublished state of App Configuration Instance. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** ComponentType */
		ComponentType: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalfÂ of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the version in which the App Configuration Instance is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is Managed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** ObjectId */
		ObjectId: DevKit.WebApi.GuidValue;
		/** System-calculated field for Organization identifier. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Shows the last overwrite time for the App Configuration Instance. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Set the solution idenfitier for associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Set the supporting solution idenfitier for associated solution. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Enter a value for the customization property that is valid as per the validator XML specified in the app configuration master record. */
		Value: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace AppConfigInstance {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
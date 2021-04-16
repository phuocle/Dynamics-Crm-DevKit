//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	class WebResourceApi {
		/**
		* DynamicsCrm.DevKit WebResourceApi
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
		/** Information that specifies whether this component can be deleted. */
		CanBeDeleted: DevKit.WebApi.ManagedPropertyValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Bytes of the web resource, in Base64 format. */
		Content: DevKit.WebApi.StringValue;
		ContentFileRef_Name: DevKit.WebApi.StringValueReadonly;
		/** Json representation of the content of the resource. */
		ContentJson: DevKit.WebApi.StringValue;
		ContentJsonFileRef_Name: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the user who created the web resource. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the web resource was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the web resource. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		DependencyXml: DevKit.WebApi.StringValue;
		/** Description of the web resource. */
		Description: DevKit.WebApi.StringValue;
		/** Display name of the web resource. */
		DisplayName: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this web resource is available for mobile client in offline mode. */
		IsAvailableForMobileOffline: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether this web resource is enabled for mobile client. */
		IsEnabledForMobileClient: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: DevKit.WebApi.ManagedPropertyValue;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Language of the web resource. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the web resource. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the web resource was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the web resource. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the web resource. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the web resource. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Silverlight runtime version number required by a silverlight web resource. */
		SilverlightVersion: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the web resource. */
		WebResourceId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		WebResourceIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Drop-down list for selecting the type of the web resource. */
		WebResourceType: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace WebResource {
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
		enum WebResourceType {
			/** 1 */
			Webpage_HTML,
			/** 2 */
			Style_Sheet_CSS,
			/** 3 */
			Script_JScript,
			/** 4 */
			Data_XML,
			/** 5 */
			PNG_format,
			/** 6 */
			JPG_format,
			/** 7 */
			GIF_format,
			/** 8 */
			Silverlight_XAP,
			/** 9 */
			Style_Sheet_XSL,
			/** 10 */
			ICO_format,
			/** 11 */
			Vector_format_SVG,
			/** 12 */
			String_RESX
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}
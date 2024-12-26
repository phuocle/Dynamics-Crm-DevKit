//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Information that specifies whether this component can be deleted. */
		CanBeDeleted: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.WebResource.ComponentState;
		/** Bytes of the web resource, in Base64 format. */
		Content: string;
		/** Reference to the content file on Azure. */
		readonly ContentFileRef_name: string;
		/** Json representation of the content of the resource. */
		ContentJson: string;
		/** Reference to the Json content file on Azure. */
		readonly ContentJsonFileRef_name: string;
		/** Unique identifier of the user who created the web resource. */
		readonly CreatedBy: string;
		/** Date and time when the web resource was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the web resource. */
		readonly CreatedOnBehalfBy: string;
		/** For internal use only. */
		DependencyXml: string;
		/** Description of the web resource. */
		Description: string;
		/** Display name of the web resource. */
		DisplayName: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this web resource is available for mobile client in offline mode. */
		IsAvailableForMobileOffline: boolean;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Information that specifies whether this web resource is enabled for mobile client. */
		IsEnabledForMobileClient: boolean;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: string;
		readonly IsManaged: boolean;
		/** Language of the web resource. */
		LanguageCode: number;
		/** Unique identifier of the user who last modified the web resource. */
		readonly ModifiedBy: string;
		/** Date and time when the web resource was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the web resource. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the web resource. */
		Name: string;
		/** Unique identifier of the organization associated with the web resource. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Silverlight runtime version number required by a silverlight web resource. */
		SilverlightVersion: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		/** Unique identifier of the web resource. */
		WebResourceId: string;
		/** For internal use only. */
		readonly WebResourceIdUnique: string;
		/** Drop-down list for selecting the type of the web resource. */
		WebResourceType: OptionSet.WebResource.WebResourceType;
		readonly FormattedValue: {
			/** Information that specifies whether this component can be deleted. */
			readonly CanBeDeleted: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Bytes of the web resource, in Base64 format. */
			readonly Content: string;
			/** Reference to the content file on Azure. */
			readonly ContentFileRef_name: string;
			/** Json representation of the content of the resource. */
			readonly ContentJson: string;
			/** Reference to the Json content file on Azure. */
			readonly ContentJsonFileRef_name: string;
			/** Unique identifier of the user who created the web resource. */
			readonly CreatedBy: string;
			/** Date and time when the web resource was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the web resource. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. */
			readonly DependencyXml: string;
			/** Description of the web resource. */
			readonly Description: string;
			/** Display name of the web resource. */
			readonly DisplayName: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this web resource is available for mobile client in offline mode. */
			readonly IsAvailableForMobileOffline: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Information that specifies whether this web resource is enabled for mobile client. */
			readonly IsEnabledForMobileClient: string;
			/** Information that specifies whether this component should be hidden. */
			readonly IsHidden: string;
			readonly IsManaged: string;
			/** Language of the web resource. */
			readonly LanguageCode: string;
			/** Unique identifier of the user who last modified the web resource. */
			readonly ModifiedBy: string;
			/** Date and time when the web resource was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the web resource. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the web resource. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the web resource. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Silverlight runtime version number required by a silverlight web resource. */
			readonly SilverlightVersion: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
			/** Unique identifier of the web resource. */
			readonly WebResourceId: string;
			/** For internal use only. */
			readonly WebResourceIdUnique: string;
			/** Drop-down list for selecting the type of the web resource. */
			readonly WebResourceType: string;
		}
	}
}
declare namespace OptionSet {
	namespace WebResource {
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
		enum WebResourceType {
			/** 4 */
			Data_XML,
			/** 7 */
			GIF_format,
			/** 10 */
			ICO_format,
			/** 6 */
			JPG_format,
			/** 5 */
			PNG_format,
			/** 3 */
			Script_JScript,
			/** 8 */
			Silverlight_XAP,
			/** 12 */
			String_RESX,
			/** 2 */
			Style_Sheet_CSS,
			/** 9 */
			Style_Sheet_XSL,
			/** 11 */
			Vector_format_SVG,
			/** 1 */
			Webpage_HTML
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
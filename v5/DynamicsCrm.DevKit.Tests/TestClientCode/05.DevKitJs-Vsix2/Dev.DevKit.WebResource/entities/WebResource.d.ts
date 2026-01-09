//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class WebResourceApi {
		/**
		* DynamicsCrm.DevKit WebResourceApi
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
		/** Information that specifies whether this component can be deleted. */
		CanBeDeleted: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.WebResource.ComponentState | null;
		/** Bytes of the web resource, in Base64 format. */
		Content: string | null;
		/** Reference to the content file on Azure. */
		readonly ContentFileRef_name: string | null;
		/** Json representation of the content of the resource. */
		ContentJson: string | null;
		/** Reference to the Json content file on Azure. */
		readonly ContentJsonFileRef_name: string | null;
		/** Unique identifier of the user who created the web resource. */
		readonly CreatedBy: string | null;
		/** Date and time when the web resource was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the web resource. */
		readonly CreatedOnBehalfBy: string | null;
		/** For internal use only. */
		DependencyXml: string | null;
		/** Description of the web resource. */
		Description: string | null;
		/** Display name of the web resource. */
		DisplayName: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this web resource is available for mobile client in offline mode. */
		IsAvailableForMobileOffline: boolean | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Information that specifies whether this web resource is enabled for mobile client. */
		IsEnabledForMobileClient: boolean | null;
		/** Information that specifies whether this component should be hidden. */
		IsHidden: string | null;
		readonly IsManaged: boolean | null;
		/** Language of the web resource. */
		LanguageCode: number | null;
		/** Unique identifier of the user who last modified the web resource. */
		readonly ModifiedBy: string | null;
		/** Date and time when the web resource was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the web resource. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the web resource. */
		Name: string | null;
		/** Unique identifier of the organization associated with the web resource. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Silverlight runtime version number required by a silverlight web resource. */
		SilverlightVersion: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		readonly VersionNumber: number | null;
		/** Unique identifier of the web resource. */
		WebResourceId: string | null;
		/** For internal use only. */
		readonly WebResourceIdUnique: string | null;
		/** Drop-down list for selecting the type of the web resource. */
		WebResourceType: OptionSet.WebResource.WebResourceType | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum WebResourceType {
			/** Data_XML = 4*/
			Data_XML = 4,
			/** GIF_format = 7*/
			GIF_format = 7,
			/** ICO_format = 10*/
			ICO_format = 10,
			/** JPG_format = 6*/
			JPG_format = 6,
			/** PNG_format = 5*/
			PNG_format = 5,
			/** Script_JScript = 3*/
			Script_JScript = 3,
			/** Silverlight_XAP = 8*/
			Silverlight_XAP = 8,
			/** String_RESX = 12*/
			String_RESX = 12,
			/** Style_Sheet_CSS = 2*/
			Style_Sheet_CSS = 2,
			/** Style_Sheet_XSL = 9*/
			Style_Sheet_XSL = 9,
			/** Vector_format_SVG = 11*/
			Vector_format_SVG = 11,
			/** Webpage_HTML = 1*/
			Webpage_HTML = 1
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
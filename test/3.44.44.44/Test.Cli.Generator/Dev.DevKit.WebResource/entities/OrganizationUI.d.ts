//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class OrganizationUIApi {
		/**
		* DynamicsCrm.DevKit OrganizationUIApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.OrganizationUI.ComponentState;
		/** For internal use only. */
		FieldXml: string;
		/** Unique identifier of the record type form. */
		FormId: string;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		readonly FormIdUnique: string;
		/** XML representation of the form layout. */
		FormXml: string;
		/** Binary representation of the icon used in record type grid views. */
		GridIcon: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		readonly IsManaged: boolean;
		/** Binary representation of the large icon used in the record type form. */
		LargeEntityIcon: string;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string;
		/** Binary representation of the large icon used in the Microsoft Dynamics 365 client for Outlook for this record type. */
		OutlookShortcutIcon: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** For internal use only. */
		PreviewColumnsetXml: string;
		/** For internal use only. */
		PreviewXml: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		Version: number;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** For internal use only. */
			readonly FieldXml: string;
			/** Unique identifier of the record type form. */
			readonly FormId: string;
			/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
			readonly FormIdUnique: string;
			/** XML representation of the form layout. */
			readonly FormXml: string;
			/** Binary representation of the icon used in record type grid views. */
			readonly GridIcon: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			readonly IsManaged: string;
			/** Binary representation of the large icon used in the record type form. */
			readonly LargeEntityIcon: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** Binary representation of the large icon used in the Microsoft Dynamics 365 client for Outlook for this record type. */
			readonly OutlookShortcutIcon: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** For internal use only. */
			readonly PreviewColumnsetXml: string;
			/** For internal use only. */
			readonly PreviewXml: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly Version: string;
			/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace OrganizationUI {
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
		enum ObjectTypeCode {
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
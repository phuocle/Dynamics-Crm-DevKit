//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDisplayString_Information {
		interface tab_general_Sections {
			/** Information */
			information: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Comment for a customized display string. */
			CustomComment: DevKit.Controls.String;
			/** Customized display string. */
			CustomDisplayString: DevKit.Controls.String;
		}
	}
	export class FormDisplayString_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form DisplayString_Information */
		Body: DevKit.FormDisplayString_Information.Body;
	}
	export class DisplayStringApi {
		/**
		* DynamicsCrm.DevKit DisplayStringApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.DisplayString.ComponentState | null;
		/** Unique identifier of the user who created the display string. */
		readonly CreatedBy: string | null;
		/** Date and time when the display string was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the displaystring. */
		readonly CreatedOnBehalfBy: string | null;
		/** Comment for a customized display string. */
		CustomComment: string | null;
		/** Customized display string. */
		CustomDisplayString: string | null;
		/** Unique identifier of the display string. */
		DisplayStringId: string | null;
		/** For internal use only. */
		readonly DisplayStringIdUnique: string | null;
		/** For internal use only. */
		readonly DisplayStringKey: string | null;
		/** Parameters used for formatting the display string. */
		readonly FormatParameters: number | null;
		readonly IsManaged: boolean | null;
		/** Language code of the display string. */
		LanguageCode: number | null;
		/** Unique identifier of the user who last modified the display string. */
		readonly ModifiedBy: string | null;
		/** Date and time when the display string was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the displaystring. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Unique identifier of the organization associated with the display string. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Published display string. */
		readonly PublishedDisplayString: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the display string. */
			readonly CreatedBy: string;
			/** Date and time when the display string was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the displaystring. */
			readonly CreatedOnBehalfBy: string;
			/** Comment for a customized display string. */
			readonly CustomComment: string;
			/** Customized display string. */
			readonly CustomDisplayString: string;
			/** Unique identifier of the display string. */
			readonly DisplayStringId: string;
			/** For internal use only. */
			readonly DisplayStringIdUnique: string;
			/** For internal use only. */
			readonly DisplayStringKey: string;
			/** Parameters used for formatting the display string. */
			readonly FormatParameters: string;
			readonly IsManaged: string;
			/** Language code of the display string. */
			readonly LanguageCode: string;
			/** Unique identifier of the user who last modified the display string. */
			readonly ModifiedBy: string;
			/** Date and time when the display string was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the displaystring. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the display string. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Published display string. */
			readonly PublishedDisplayString: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DisplayString {
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
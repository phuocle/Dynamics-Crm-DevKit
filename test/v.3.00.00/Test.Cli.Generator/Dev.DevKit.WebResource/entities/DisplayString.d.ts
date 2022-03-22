//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDisplayString_Information {
		interface tab_general_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Comment for a customized display string. */
			CustomComment: DevKit.Controls.String;
			/** Customized display string. */
			CustomDisplayString: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormDisplayString_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form DisplayString_Information */
		Body: DevKit.FormDisplayString_Information.Body;
		/** The Process of form DisplayString_Information */
		Process: DevKit.FormDisplayString_Information.Process;
		/** The SidePanes of form DisplayString_Information */
		SidePanes: DevKit.SidePanes;
	}
	class DisplayStringApi {
		/**
		* DynamicsCrm.DevKit DisplayStringApi
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
		readonly ComponentState: OptionSet.DisplayString.ComponentState;
		/** Unique identifier of the user who created the display string. */
		readonly CreatedBy: string;
		/** Date and time when the display string was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the displaystring. */
		readonly CreatedOnBehalfBy: string;
		/** Comment for a customized display string. */
		CustomComment: string;
		/** Customized display string. */
		CustomDisplayString: string;
		/** Unique identifier of the display string. */
		DisplayStringId: string;
		/** For internal use only. */
		readonly DisplayStringIdUnique: string;
		/** For internal use only. */
		readonly DisplayStringKey: string;
		/** Parameters used for formatting the display string. */
		readonly FormatParameters: number;
		readonly IsManaged: boolean;
		/** Language code of the display string. */
		LanguageCode: number;
		/** Unique identifier of the user who last modified the display string. */
		readonly ModifiedBy: string;
		/** Date and time when the display string was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the displaystring. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the display string. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Published display string. */
		readonly PublishedDisplayString: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace DisplayString {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
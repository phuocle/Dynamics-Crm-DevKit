//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormDisplayString_Information {
		interface tab_general_Sections {
			information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Comment for a customized display string. */
			CustomComment: DevKit.Form.Controls.ControlString;
			/** Customized display string. */
			CustomDisplayString: DevKit.Form.Controls.ControlString;
		}
	}
	class FormDisplayString_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form DisplayString_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form DisplayString_Information */
		Body: LuckyStar.FormDisplayString_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the display string. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the display string was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the displaystring. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Comment for a customized display string. */
		CustomComment: DevKit.WebApi.StringValue;
		/** Customized display string. */
		CustomDisplayString: DevKit.WebApi.StringValue;
		/** Unique identifier of the display string. */
		DisplayStringId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		DisplayStringIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		DisplayStringKey: DevKit.WebApi.StringValueReadonly;
		/** Parameters used for formatting the display string. */
		FormatParameters: DevKit.WebApi.IntegerValueReadonly;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Language code of the display string. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who last modified the display string. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the display string was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the displaystring. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the display string. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Published display string. */
		PublishedDisplayString: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DisplayString {
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
//{'JsForm':['DisplayString Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
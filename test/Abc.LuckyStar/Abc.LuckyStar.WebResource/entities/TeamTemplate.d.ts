//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormTeamTemplate {
		interface tab_general_Sections {
			General: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
			Access_Rights: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Default access rights mask for the access teams associated with entity instances. */
			DefaultAccessRightsMask: DevKit.Form.Controls.ControlInteger;
			/** Type additional information that describes the team. */
			Description: DevKit.Form.Controls.ControlString;
			/** Object type code of entity which is enabled for access teams */
			ObjectTypeCode: DevKit.Form.Controls.ControlInteger;
			/** Type the name of the team template. */
			TeamTemplateName: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTeamTemplate extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form TeamTemplate
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form TeamTemplate */
		Body: LuckyStar.FormTeamTemplate.Body;
	}
	class TeamTemplateApi {
		/**
		* DynamicsCrm.DevKit TeamTemplateApi
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
		/** Unique identifier of the user who created the team template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the team template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the team template. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Default access rights mask for the access teams associated with entity instances. */
		DefaultAccessRightsMask: DevKit.WebApi.IntegerValue;
		/** Type additional information that describes the team. */
		Description: DevKit.WebApi.StringValue;
		/** Information about whether this team template is user-defined or system-defined. */
		IsSystem: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the team template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the team template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the team template. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Object type code of entity which is enabled for access teams */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the team template. */
		TeamTemplateId: DevKit.WebApi.GuidValue;
		/** Type the name of the team template. */
		TeamTemplateName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace TeamTemplate {
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
//{'JsForm':['TeamTemplate'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
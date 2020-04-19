//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormTemplate_Information {
		interface tab_general_Sections {
			email_template_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Subject associated with the email template. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTemplate_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Template_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Template_Information */
		Body: LuckyStar.FormTemplate_Information.Body;
	}
	class TemplateApi {
		/**
		* DynamicsCrm.DevKit TemplateApi
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
		/** Body text of the email template. */
		Body: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the email template. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the email template was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the template. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the email template. */
		Description: DevKit.WebApi.StringValue;
		/** For internal use only. */
		GenerationTypeCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the template is personal or is available to all users. */
		IsPersonal: DevKit.WebApi.BooleanValue;
		/** Indicates if a template is recommended by Dynamics 365. */
		IsRecommended: DevKit.WebApi.BooleanValueReadonly;
		/** Language of the email template. */
		LanguageCode: DevKit.WebApi.IntegerValue;
		/** MIME type of the email template. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the template. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the email template was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the template. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. Shows the number of times emails that use this template have been opened. */
		OpenCount: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the open rate of this template. This is based on number of opens on followed emails that use this template. */
		OpenRate: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the template. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the template. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the template. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** XML data for the body of the email template. */
		PresentationXml: DevKit.WebApi.StringValue;
		/** For internal use only. Shows the number of times emails that use this template have received replies. */
		ReplyCount: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the reply rate for this template. This is based on number of replies received on followed emails that use this template. */
		ReplyRate: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Subject associated with the email template. */
		Subject: DevKit.WebApi.StringValue;
		/** XML data for the subject of the email template. */
		SubjectPresentationXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the template. */
		TemplateId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TemplateIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Title of the template. */
		Title: DevKit.WebApi.StringValue;
		/** Shows the number of sent emails that use this template. */
		UsedCount: DevKit.WebApi.IntegerValueReadonly;
		/** Version number of the template. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Template {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
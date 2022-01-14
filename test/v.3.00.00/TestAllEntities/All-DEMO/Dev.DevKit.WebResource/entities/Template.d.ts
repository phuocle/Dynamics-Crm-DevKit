//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTemplate_Information {
		interface tab_general_Sections {
			email_template_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Subject associated with the email template. */
			Subject: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormTemplate_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Template_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Template_Information */
		Body: DevKit.FormTemplate_Information.Body;
		/** The Process of form Template_Information */
		Process: DevKit.FormTemplate_Information.Process;
		/** The SidePanes of form Template_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTemplate {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the template for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_Template_Sections {
			Details: DevKit.Controls.Section;
			Template_editor: DevKit.Controls.Section;
		}
		interface tab_Template extends DevKit.Controls.ITab {
			Section: tab_Template_Sections;
		}
		interface Tabs {
			Template: tab_Template;
		}
		interface Body {
			Tab: Tabs;
			/** Description of the email template. */
			Description: DevKit.Controls.String;
			/** Information about whether the template is personal or is available to all users. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Language of the email template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Safe html of email template. */
			SafeHtml: DevKit.Controls.String;
			/** Safe html of email template subject. */
			SubjectSafeHtml: DevKit.Controls.String;
			category: DevKit.Controls.ActionCards;
			/** Title of the template. */
			Title: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormTemplate extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Template Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Template */
		Body: DevKit.FormTemplate.Body;
		/** The Header section of form Template */
		Header: DevKit.FormTemplate.Header;
		/** The Process of form Template */
		Process: DevKit.FormTemplate.Process;
		/** The Grid of form Template */
		Grid: DevKit.FormTemplate.Grid;
		/** The SidePanes of form Template */
		SidePanes: DevKit.SidePanes;
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
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
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
		/** Safe html of email template. */
		SafeHtml: DevKit.WebApi.StringValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Subject associated with the email template. */
		Subject: DevKit.WebApi.StringValue;
		/** XML data for the subject of the email template. */
		SubjectPresentationXml: DevKit.WebApi.StringValue;
		/** Safe html of email template subject. */
		SubjectSafeHtml: DevKit.WebApi.StringValue;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum TemplateTypeCode {
			/** 1 */
			Account,
			/** 4402 */
			Campaign_Activity,
			/** 112 */
			Case,
			/** 2 */
			Contact,
			/** 1010 */
			Contract,
			/** 9700 */
			Entitlement,
			/** 1090 */
			Invoice,
			/** 4 */
			Lead,
			/** 3 */
			Opportunity,
			/** 1088 */
			Order,
			/** 1084 */
			Quote,
			/** 4214 */
			Service_Activity,
			/** 4700 */
			System_Job,
			/** 8 */
			User
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
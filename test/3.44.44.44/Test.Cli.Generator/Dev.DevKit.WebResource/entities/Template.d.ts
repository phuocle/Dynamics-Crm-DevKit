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
		interface Navigation {
			Email_EmailTemplate: DevKit.Controls.NavigationItem,
			emailtemplate_convertrule: DevKit.Controls.NavigationItem,
			template_activity_mime_attachments: DevKit.Controls.NavigationItem
		}
	}
	class FormTemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Template_Information */
		Body: DevKit.FormTemplate_Information.Body;
		/** The Navigation of form Template_Information */
		Navigation: DevKit.FormTemplate_Information.Navigation;
		/** The SidePanes of form Template_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTemplate {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the template for the email activity. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_Attachment_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_Enhance_Editor_tab_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_Template_Sections {
			Details: DevKit.Controls.Section;
			Template_editor: DevKit.Controls.Section;
		}
		interface tab_Attachment_tab extends DevKit.Controls.ITab {
			Section: tab_Attachment_tab_Sections;
		}
		interface tab_Enhance_Editor_tab extends DevKit.Controls.ITab {
			Section: tab_Enhance_Editor_tab_Sections;
		}
		interface tab_Template extends DevKit.Controls.ITab {
			Section: tab_Template_Sections;
		}
		interface Tabs {
			Attachment_tab: tab_Attachment_tab;
			Enhance_Editor_tab: tab_Enhance_Editor_tab;
			Template: tab_Template;
		}
		interface Body {
			Tab: Tabs;
			category: DevKit.Controls.ActionCards;
			/** Description of the email template. */
			Description: DevKit.Controls.String;
			enhancededitorhtml: DevKit.Controls.String;
			isenhancededitorenabled: DevKit.Controls.Boolean;
			/** Language of the email template. */
			LanguageCode: DevKit.Controls.Integer;
			/** Information about whether the template is personal or is available to all users. */
			IsPersonal: DevKit.Controls.Boolean;
			/** Safe html of email template. */
			SafeHtml: DevKit.Controls.String;
			/** Subject associated with the email template. */
			Subject: DevKit.Controls.String;
			/** Safe html of email template subject. */
			SubjectSafeHtml: DevKit.Controls.String;
			/** Title of the template. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			Email_EmailTemplate: DevKit.Controls.NavigationItem,
			emailtemplate_convertrule: DevKit.Controls.NavigationItem,
			template_activity_mime_attachments: DevKit.Controls.NavigationItem
		}
		interface Grid {
			attachmentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormTemplate extends DevKit.IForm {
		/**
		* Template [Main Form]
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
		/** The Navigation of form Template */
		Navigation: DevKit.FormTemplate.Navigation;
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
		/** Body text of the email template. */
		Body: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Template.ComponentState;
		/** Unique identifier of the user who created the email template. */
		readonly CreatedBy: string;
		/** Date and time when the email template was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the template. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the email template. */
		Description: string;
		enhancededitorhtml: string;
		/** Shows the default image for the record. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** For internal use only. */
		GenerationTypeCode: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		isenhancededitorenabled: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Information about whether the template is personal or is available to all users. */
		IsPersonal: boolean;
		/** Indicates if a template is recommended by Dynamics 365. */
		readonly IsRecommended: boolean;
		/** Language of the email template. */
		LanguageCode: number;
		/** MIME type of the email template. */
		MimeType: string;
		/** Unique identifier of the user who last modified the template. */
		readonly ModifiedBy: string;
		/** Date and time when the email template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the template. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. Shows the number of times emails that use this template have been opened. */
		readonly OpenCount: number;
		/** Shows the open rate of this template. This is based on number of opens on followed emails that use this template. */
		readonly OpenRate: number;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the template. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the template. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the template. */
		readonly OwningUser: string;
		/** XML data for the body of the email template. */
		PresentationXml: string;
		/** For internal use only. Shows the number of times emails that use this template have received replies. */
		readonly ReplyCount: number;
		/** Shows the reply rate for this template. This is based on number of replies received on followed emails that use this template. */
		readonly ReplyRate: number;
		/** Safe html of email template. */
		SafeHtml: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Subject associated with the email template. */
		Subject: string;
		/** XML data for the subject of the email template. */
		SubjectPresentationXml: string;
		/** Safe html of email template subject. */
		SubjectSafeHtml: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier of the template. */
		TemplateId: string;
		/** For internal use only. */
		readonly TemplateIdUnique: string;
		/** Title of the template. */
		Title: string;
		/** Shows the number of sent emails that use this template. */
		readonly UsedCount: number;
		/** Version number of the template. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Body text of the email template. */
			readonly Body: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the email template. */
			readonly CreatedBy: string;
			/** Date and time when the email template was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the template. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the email template. */
			readonly Description: string;
			readonly enhancededitorhtml: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** For internal use only. */
			readonly GenerationTypeCode: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			readonly isenhancededitorenabled: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Information about whether the template is personal or is available to all users. */
			readonly IsPersonal: string;
			/** Indicates if a template is recommended by Dynamics 365. */
			readonly IsRecommended: string;
			/** Language of the email template. */
			readonly LanguageCode: string;
			/** MIME type of the email template. */
			readonly MimeType: string;
			/** Unique identifier of the user who last modified the template. */
			readonly ModifiedBy: string;
			/** Date and time when the email template was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the template. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. Shows the number of times emails that use this template have been opened. */
			readonly OpenCount: string;
			/** Shows the open rate of this template. This is based on number of opens on followed emails that use this template. */
			readonly OpenRate: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the template. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the template. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the template. */
			readonly OwningUser: string;
			/** XML data for the body of the email template. */
			readonly PresentationXml: string;
			/** For internal use only. Shows the number of times emails that use this template have received replies. */
			readonly ReplyCount: string;
			/** Shows the reply rate for this template. This is based on number of replies received on followed emails that use this template. */
			readonly ReplyRate: string;
			/** Safe html of email template. */
			readonly SafeHtml: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Subject associated with the email template. */
			readonly Subject: string;
			/** XML data for the subject of the email template. */
			readonly SubjectPresentationXml: string;
			/** Safe html of email template subject. */
			readonly SubjectSafeHtml: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the template. */
			readonly TemplateId: string;
			/** For internal use only. */
			readonly TemplateIdUnique: string;
			/** Title of the template. */
			readonly Title: string;
			/** Shows the number of sent emails that use this template. */
			readonly UsedCount: string;
			/** Version number of the template. */
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
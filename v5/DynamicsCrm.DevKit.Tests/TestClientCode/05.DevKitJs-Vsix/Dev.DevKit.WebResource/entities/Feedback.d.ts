//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormFeedback {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			/** Feedback Contacts */
			feedback_Contacts: DevKit.Controls.Section;
			/** Feedback Details */
			feedback_Details: DevKit.Controls.Section;
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
			/** Shows who closed the record. */
			ClosedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ClosedOn: DevKit.Controls.DateTime;
			/** Type the feedback comments. */
			Comments: DevKit.Controls.String;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Controls.Integer;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Controls.Integer;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Controls.OptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
		}
	}
	export class FormFeedback extends DevKit.IForm {
		/**
		* Feedback [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Feedback */
		Body: DevKit.FormFeedback.Body;
		/** The Header section of form Feedback */
		Header: DevKit.FormFeedback.Header;
	}
	namespace FormFeedback_MainIC {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Shows whether the feedback is open, rejected or closed. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_general_Sections {
			/** COMMENTS */
			Content: DevKit.Controls.Section;
			/** RESOLUTION */
			Content_2: DevKit.Controls.Section;
			/** GENERAL */
			General_Info: DevKit.Controls.Section;
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
			/** Shows who closed the record. */
			ClosedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ClosedOn: DevKit.Controls.DateTime;
			/** Type the feedback comments. */
			Comments: DevKit.Controls.String;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Controls.Integer;
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Controls.Integer;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Controls.OptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
		}
	}
	export class FormFeedback_MainIC extends DevKit.IForm {
		/**
		* Feedback MainIC [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Feedback_MainIC */
		Body: DevKit.FormFeedback_MainIC.Body;
		/** The Header section of form Feedback_MainIC */
		Header: DevKit.FormFeedback_MainIC.Header;
	}
	namespace FormNew_Comment_Form {
		interface tab_general_Sections {
			/** Feedback Details */
			feedback_Details: DevKit.Controls.Section;
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
			/** Type the feedback comments. */
			Comments: DevKit.Controls.String;
		}
	}
	export class FormNew_Comment_Form extends DevKit.IForm {
		/**
		* New Comment Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form New_Comment_Form */
		Body: DevKit.FormNew_Comment_Form.Body;
	}
	namespace Formsimple_contact_us_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			NormalizedRating: DevKit.Controls.Decimal;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Your_details_Sections {
			/** Contact Information */
			CONTACT_INFORMATION: DevKit.Controls.Section;
		}
		/** Fill in your details */
		interface tab_Your_details extends DevKit.Controls.ITab {
			Section: tab_Your_details_Sections;
		}
		interface Tabs {
			/** Fill in your details */
			Your_details: tab_Your_details;
		}
		interface Body {
			Tab: Tabs;
			/** Email of the contact who created the record. */
			Adx_ContactEmail: DevKit.Controls.String;
			/** Name of the contact who created the record. */
			Adx_CreatedByContact: DevKit.Controls.String;
			/** Type the feedback comments. */
			Comments: DevKit.Controls.String;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
		}
	}
	export class Formsimple_contact_us_form extends DevKit.IForm {
		/**
		* simple contact us form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form simple_contact_us_form */
		Body: DevKit.Formsimple_contact_us_form.Body;
		/** The Header section of form simple_contact_us_form */
		Header: DevKit.Formsimple_contact_us_form.Header;
	}
	namespace FormFeedback_Quick_Create {
		interface tab_general_Sections {
			/** Feedback Contacts */
			feedback_Contacts: DevKit.Controls.Section;
			/** Feedback Details */
			feedback_Details: DevKit.Controls.Section;
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
			/** Type the feedback comments. */
			Comments: DevKit.Controls.String;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Controls.Integer;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Controls.Integer;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Controls.OptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
		}
	}
	export class FormFeedback_Quick_Create extends DevKit.IForm {
		/**
		* Feedback Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Feedback_Quick_Create */
		Body: DevKit.FormFeedback_Quick_Create.Body;
	}
	export class FeedbackApi {
		/**
		* DynamicsCrm.DevKit FeedbackApi
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
		/** Shows whether the feedback is approved for display. */
		adx_approved: boolean | null;
		/** The URL of the author’s home page/blog. */
		adx_authorurl: string | null;
		/** Email of the contact who created the record. */
		Adx_ContactEmail: string | null;
		/** Username of the contact who created the record. */
		Adx_ContactUsername: string | null;
		/** Name of the contact who created the record. */
		Adx_CreatedByContact: string | null;
		/** Shows who closed the record. */
		readonly ClosedBy: string | null;
		/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ClosedOn_UtcDateAndTime: Date | null;
		/** Type the feedback comments. */
		Comments: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the contact who created the record. */
		CreatedByContact: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Shows the contact who created the record on behalf of another user. */
		CreatedOnBehalfByContact: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** FeedbackId */
		FeedbackId: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Enter the maximum rating value. */
		MaxRating: number | null;
		/** Enter the minimum rating value. */
		MinRating: number | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Shows the record in context of which feedback rating is being provided. */
		msdyn_ContextObjectId: string | null;
		/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
		readonly NormalizedRating: number | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the knowledge article views. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team that owns the feedback. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns this feedback. */
		readonly OwningUser: string | null;
		/** Specifies how helpful the related record was. */
		Rating: number | null;
		/** Shows where the feedback was submitted from. */
		Source: OptionSet.Feedback.Source | null;
		/** Shows whether the feedback is open, rejected or closed. */
		StateCode: OptionSet.Feedback.StateCode | null;
		/** Select the feedback's status. */
		StatusCode: OptionSet.Feedback.StatusCode | null;
		/** Type a title for the feedback. */
		Title: string | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** Version number of the feedback. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows whether the feedback is approved for display. */
			readonly adx_approved: string;
			/** The URL of the author’s home page/blog. */
			readonly adx_authorurl: string;
			/** Email of the contact who created the record. */
			readonly Adx_ContactEmail: string;
			/** Username of the contact who created the record. */
			readonly Adx_ContactUsername: string;
			/** Name of the contact who created the record. */
			readonly Adx_CreatedByContact: string;
			/** Shows who closed the record. */
			readonly ClosedBy: string;
			/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ClosedOn_UtcDateAndTime: string;
			/** Type the feedback comments. */
			readonly Comments: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the contact who created the record. */
			readonly CreatedByContact: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the contact who created the record on behalf of another user. */
			readonly CreatedOnBehalfByContact: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** FeedbackId */
			readonly FeedbackId: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Enter the maximum rating value. */
			readonly MaxRating: string;
			/** Enter the minimum rating value. */
			readonly MinRating: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows the record in context of which feedback rating is being provided. */
			readonly msdyn_ContextObjectId: string;
			/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
			readonly NormalizedRating: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the knowledge article views. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the feedback. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns this feedback. */
			readonly OwningUser: string;
			/** Specifies how helpful the related record was. */
			readonly Rating: string;
			/** Shows where the feedback was submitted from. */
			readonly Source: string;
			/** Shows whether the feedback is open, rejected or closed. */
			readonly StateCode: string;
			/** Select the feedback's status. */
			readonly StatusCode: string;
			/** Type a title for the feedback. */
			readonly Title: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Version number of the feedback. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Feedback {
		enum msdyn_ContextObjectIdType {
		}
		enum RegardingObjectTypeCode {
		}
		enum Source {
			/** Internal = 0*/
			Internal = 0,
			/** Portal = 1*/
			Portal = 1
		}
		enum StateCode {
			/** Closed = 1*/
			Closed = 1,
			/** Open = 0*/
			Open = 0
		}
		enum StatusCode {
			/** Accepted = 2*/
			Accepted = 2,
			/** Closed = 3*/
			Closed = 3,
			/** Proposed = 1*/
			Proposed = 1,
			/** Rejected = 4*/
			Rejected = 4
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
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
			feedback_Contacts: DevKit.Controls.Section;
			feedback_Details: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormFeedback extends DevKit.IForm {
		/**
		* Feedback [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Feedback */
		Body: DevKit.FormFeedback.Body;
		/** The Header section of form Feedback */
		Header: DevKit.FormFeedback.Header;
		/** The Process of form Feedback */
		Process: DevKit.FormFeedback.Process;
		/** The SidePanes of form Feedback */
		SidePanes: DevKit.SidePanes;
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
			Content: DevKit.Controls.Section;
			Content_2: DevKit.Controls.Section;
			General_Info: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormFeedback_MainIC extends DevKit.IForm {
		/**
		* Feedback MainIC [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Feedback_MainIC */
		Body: DevKit.FormFeedback_MainIC.Body;
		/** The Header section of form Feedback_MainIC */
		Header: DevKit.FormFeedback_MainIC.Header;
		/** The Process of form Feedback_MainIC */
		Process: DevKit.FormFeedback_MainIC.Process;
		/** The SidePanes of form Feedback_MainIC */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormFeedback_Quick_Create {
		interface tab_general_Sections {
			feedback_Contacts: DevKit.Controls.Section;
			feedback_Details: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type the feedback comments. */
			Comments: DevKit.Controls.String;
			/** Shows the contact who created the record. */
			CreatedByContact: DevKit.Controls.Lookup;
			/** Enter the maximum rating value. */
			MaxRating: DevKit.Controls.Integer;
			/** Enter the minimum rating value. */
			MinRating: DevKit.Controls.Integer;
			/** Unique identifier of the user or team who owns the knowledge article views. */
			OwnerId: DevKit.Controls.Lookup;
			/** Specifies how helpful the related record was. */
			Rating: DevKit.Controls.Integer;
			/** Shows the record that the feedback is associated with. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows where the feedback was submitted from. */
			Source: DevKit.Controls.OptionSet;
			/** Select the feedback's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a title for the feedback. */
			Title: DevKit.Controls.String;
		}
	}
	class FormFeedback_Quick_Create extends DevKit.IForm {
		/**
		* Feedback Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Feedback_Quick_Create */
		Body: DevKit.FormFeedback_Quick_Create.Body;
	}
	class FeedbackApi {
		/**
		* DynamicsCrm.DevKit FeedbackApi
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
		/** Shows who closed the record. */
		readonly ClosedBy: string;
		/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ClosedOn_UtcDateAndTime: Date;
		/** Type the feedback comments. */
		Comments: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the contact who created the record. */
		CreatedByContact: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the contact who created the record on behalf of another user. */
		CreatedOnBehalfByContact: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** FeedbackId */
		FeedbackId: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Enter the maximum rating value. */
		MaxRating: number;
		/** Enter the minimum rating value. */
		MinRating: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows the record in context of which feedback rating is being provided. */
		msdyn_ContextObjectId_incident: string;
		/** Shows the record in context of which feedback rating is being provided. */
		msdyn_ContextObjectId_knowledgearticle: string;
		/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
		readonly NormalizedRating: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the knowledge article views. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the feedback. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns this feedback. */
		readonly OwningUser: string;
		/** Specifies how helpful the related record was. */
		Rating: number;
		/** Shows the record that the feedback is associated with. */
		ContactId: string;
		/** Shows the record that the feedback is associated with. */
		FeedbackId1: string;
		/** Shows the record that the feedback is associated with. */
		KnowledgeArticleId: string;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msdyn_liveconversation: string;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msdyn_ocliveworkitem: string;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msdyn_ocoutboundmessage: string;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msdyn_ocsession: string;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msfp_alert: string;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msfp_surveyinvite: string;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_msfp_surveyresponse: string;
		/** Shows where the feedback was submitted from. */
		Source: OptionSet.Feedback.Source;
		/** Shows whether the feedback is open, rejected or closed. */
		StateCode: OptionSet.Feedback.StateCode;
		/** Select the feedback's status. */
		StatusCode: OptionSet.Feedback.StatusCode;
		/** Type a title for the feedback. */
		Title: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Version number of the feedback. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace Feedback {
		enum Source {
			/** 0 */
			Internal,
			/** 1 */
			Portal
		}
		enum StateCode {
			/** 1 */
			Closed,
			/** 0 */
			Open
		}
		enum StatusCode {
			/** 2 */
			Accepted,
			/** 3 */
			Closed,
			/** 1 */
			Proposed,
			/** 4 */
			Rejected
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
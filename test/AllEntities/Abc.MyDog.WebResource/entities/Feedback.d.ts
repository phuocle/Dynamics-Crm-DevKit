//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
			feedback_Details: DevKit.Controls.Section;
			feedback_Contacts: DevKit.Controls.Section;
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
	}
	class FormFeedback extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Feedback
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Feedback */
		Body: MyDog.FormFeedback.Body;
		/** The Header section of form Feedback */
		Header: MyDog.FormFeedback.Header;
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
			General_Info: DevKit.Controls.Section;
			Content: DevKit.Controls.Section;
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
	}
	class FormFeedback_MainIC extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Feedback_MainIC
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Feedback_MainIC */
		Body: MyDog.FormFeedback_MainIC.Body;
		/** The Header section of form Feedback_MainIC */
		Header: MyDog.FormFeedback_MainIC.Header;
	}
	namespace FormFeedback_Quick_Create {
		interface tab_general_Sections {
			feedback_Details: DevKit.Controls.Section;
			feedback_Contacts: DevKit.Controls.Section;
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
		* DynamicsCrm.DevKit form Feedback_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Feedback_Quick_Create */
		Body: MyDog.FormFeedback_Quick_Create.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Shows who closed the record. */
		ClosedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was closed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ClosedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Type the feedback comments. */
		Comments: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the contact who created the record. */
		CreatedByContact: DevKit.WebApi.LookupValue;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the contact who created the record on behalf of another user. */
		CreatedOnBehalfByContact: DevKit.WebApi.LookupValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** FeedbackId */
		FeedbackId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Enter the maximum rating value. */
		MaxRating: DevKit.WebApi.IntegerValue;
		/** Enter the minimum rating value. */
		MinRating: DevKit.WebApi.IntegerValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the record in context of which feedback rating is being provided. */
		msdyn_ContextObjectId: DevKit.WebApi.LookupValue;
		/** Shows the rating scaled to a value between 0 and 1 based on minimum and maximum ratings. */
		NormalizedRating: DevKit.WebApi.DecimalValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the knowledge article views. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the feedback. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns this feedback. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Specifies how helpful the related record was. */
		Rating: DevKit.WebApi.IntegerValue;
		/** Shows the record that the feedback is associated with. */
		ContactId: DevKit.WebApi.LookupValue;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the feedback is associated with. */
		regardingobjectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** Shows the record that the feedback is associated with. */
		_FeedbackId: DevKit.WebApi.LookupValue;
		/** Shows the record that the feedback is associated with. */
		KnowledgeArticleId: DevKit.WebApi.LookupValue;
		/** Shows where the feedback was submitted from. */
		Source: DevKit.WebApi.OptionSetValue;
		/** Shows whether the feedback is open, rejected or closed. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the feedback's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a title for the feedback. */
		Title: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the feedback. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Feedback','Feedback MainIC','Quick Create'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
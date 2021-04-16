//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormFax {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			general_information: DevKit.Form.Controls.ControlSection;
			Letter_description: DevKit.Form.Controls.ControlSection;
			Letter_details: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_SUMMARY_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the fax as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Type the recipient's fax number. */
			FaxNumber: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, queue, or user who sent the fax. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the fax relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the fax. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, queue, or user recipients for the fax. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormFax extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Fax
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Fax */
		Body: MyDog.FormFax.Body;
		/** The Header section of form Fax */
		Header: MyDog.FormFax.Header;
	}
	class FaxApi {
		/**
		* DynamicsCrm.DevKit FaxApi
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
		/** Unique identifier of the fax activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the fax. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the fax. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the fax. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the fax. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the billing code for the fax to make sure the fax is charged to the correct sender or customer account. */
		BillingCode: DevKit.WebApi.StringValue;
		/** Type a category to identify the fax type, such as sales offer or press release, to tie the fax to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Type the name of the cover page to use when sending the fax. */
		CoverPageName: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the fax as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type the recipient's fax number. */
		FaxNumber: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information regarding whether the fax activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Indication of whether the fax activity was created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the number of pages included in the fax. */
		NumberOfPages: DevKit.WebApi.IntegerValue;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the fax activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the fax activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the fax activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the record that the fax relates to. */
		regardingobjectid_account_fax: DevKit.WebApi.LookupValue;
		/** Choose the record that the fax relates to. */
		regardingobjectid_contact_fax: DevKit.WebApi.LookupValue;
		/** Choose the record that the fax relates to. */
		regardingobjectid_devkit_azureaccount_fax: DevKit.WebApi.LookupValue;
		/** Choose the record that the fax relates to. */
		regardingobjectid_devkit_webapi_fax: DevKit.WebApi.LookupValue;
		/** Choose the record that the fax relates to. */
		regardingobjectid_knowledgearticle_fax: DevKit.WebApi.LookupValue;
		/** Choose the record that the fax relates to. */
		regardingobjectid_knowledgebaserecord_fax: DevKit.WebApi.LookupValue;
		/** Shows the expected duration of the fax activity, in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the service level agreement (SLA) that you want to apply to the fax record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this fax. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the fax's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the fax type to relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the fax. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Type the Transmitting Subscriber ID (TSID) associated with a send action. This is typically a combination of the recipient's fax or phone number and company name. */
		Tsid: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the fax. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace Fax {
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Open,
			/** 2 */
			Completed,
			/** 3 */
			Sent,
			/** 4 */
			Received,
			/** 5 */
			Canceled
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
//{'JsForm':['Fax'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}
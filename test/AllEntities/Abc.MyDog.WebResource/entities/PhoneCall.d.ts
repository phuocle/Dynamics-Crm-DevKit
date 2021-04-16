//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormPhone_Call {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_phonecall_Sections {
			general_information: DevKit.Form.Controls.ControlSection;
			phone_call_description: DevKit.Form.Controls.ControlSection;
			phone_call_details: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_phonecall extends DevKit.Form.Controls.IControlTab {
			Section: tab_phonecall_Sections;
		}
		interface Tabs {
			phonecall: tab_phonecall;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Form.Controls.ControlString;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormPhone_Call extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Phone_Call
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Phone_Call */
		Body: MyDog.FormPhone_Call.Body;
		/** The Header section of form Phone_Call */
		Header: MyDog.FormPhone_Call.Header;
	}
	namespace FormPhone_Call_for_Interactive_experience {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_4: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Form.Controls.ControlString;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormPhone_Call_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Phone_Call_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Phone_Call_for_Interactive_experience */
		Body: MyDog.FormPhone_Call_for_Interactive_experience.Body;
		/** The Header section of form Phone_Call_for_Interactive_experience */
		Header: MyDog.FormPhone_Call_for_Interactive_experience.Header;
	}
	namespace FormPhone_call_quick_create_form {
		interface tab_PhoneCall_Tab_1_Sections {
			PhoneCall_Description: DevKit.Form.Controls.ControlSection;
			PhoneCall_Description_2: DevKit.Form.Controls.ControlSection;
			PhoneCall_Description_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_PhoneCall_Tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_PhoneCall_Tab_1_Sections;
		}
		interface Tabs {
			PhoneCall_Tab_1: tab_PhoneCall_Tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Form.Controls.ControlString;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Form.Controls.ControlBoolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Form.Controls.ControlLookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Form.Controls.ControlString;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Form.Controls.ControlString;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormPhone_call_quick_create_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Phone_call_quick_create_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Phone_call_quick_create_form */
		Body: MyDog.FormPhone_call_quick_create_form.Body;
	}
	class PhoneCallApi {
		/**
		* DynamicsCrm.DevKit PhoneCallApi
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
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the phone call activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the phone call. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the phone call. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the phone call. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the phone call. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type a category to identify the phone call type, such as lead gathering or customer follow-up, to tie the phone call to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the phone call as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information which specifies whether the phone call activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Indication which specifies if the phone call activity was created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select whether a voice mail was left for the person. */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the phone call activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the phone call activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the phone call activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Type the phone number. */
		PhoneNumber: DevKit.WebApi.StringValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_account_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_contact_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_devkit_azureaccount_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_devkit_webapi_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_knowledgearticle_phonecall: DevKit.WebApi.LookupValue;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_knowledgebaserecord_phonecall: DevKit.WebApi.LookupValue;
		/** Scheduled duration of the phone call activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Phone Call record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this Phone Call. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the phone call's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the phone call type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the phone call. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the phone call activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace PhoneCall {
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
			Made,
			/** 3 */
			Canceled,
			/** 4 */
			Received
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
//{'JsForm':['Phone Call','Phone Call for Interactive experience','Phone call quick create form.'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}
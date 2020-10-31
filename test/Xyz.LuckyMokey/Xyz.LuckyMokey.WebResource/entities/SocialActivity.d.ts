//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormSocial_Activity {
		interface Header {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Form.Controls.ControlDouble;
			/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Date and time when the activity was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** For internal use only. */
			PostedOn: DevKit.Form.Controls.ControlDateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Form.Controls.ControlLookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Form.Controls.ControlString;
			/** Shows the URL of the post. */
			PostURL: DevKit.Form.Controls.ControlString;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSocial_Activity extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Social_Activity
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Social_Activity */
		Body: LuckyMokey.FormSocial_Activity.Body;
		/** The Header section of form Social_Activity */
		Header: LuckyMokey.FormSocial_Activity.Header;
	}
	namespace FormSocial_Activity_for_Interactive_experience {
		interface Header {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Form.Controls.ControlDouble;
			/** Shows whether the social activity completed. This field is read-only. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Form.Controls.ControlString;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** For internal use only. */
			PostedOn: DevKit.Form.Controls.ControlDateTime;
			/** For internal use only. */
			PostedOn_1: DevKit.Form.Controls.ControlDateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Form.Controls.ControlLookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Form.Controls.ControlString;
			/** Shows the URL of the post. */
			PostURL: DevKit.Form.Controls.ControlString;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormSocial_Activity_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Social_Activity_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Social_Activity_for_Interactive_experience */
		Body: LuckyMokey.FormSocial_Activity_for_Interactive_experience.Body;
		/** The Header section of form Social_Activity_for_Interactive_experience */
		Header: LuckyMokey.FormSocial_Activity_for_Interactive_experience.Header;
	}
	class SocialActivityApi {
		/**
		* DynamicsCrm.DevKit SocialActivityApi
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
		/** Unique identifier of the activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Actual duration of the activity in minutes. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Actual end time of the activity. */
		ActualEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Actual start time of the activity. */
		ActualStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the activity. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the activitypointer. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows information about the social post content. This field is read-only. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the post as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for the responses to a post. For internal use only. */
		InResponseTo: DevKit.WebApi.StringValue;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the Activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		postauthor_account: DevKit.WebApi.LookupValue;
		postauthor_contact: DevKit.WebApi.LookupValue;
		postauthoraccount_account: DevKit.WebApi.LookupValue;
		postauthoraccount_contact: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		PostedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the author of the post on the corresponding social channel. */
		PostFromProfileId: DevKit.WebApi.LookupValue;
		PostFromProfileIdName: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the post. For internal use only. */
		PostId: DevKit.WebApi.StringValue;
		/** Shows if the social post originated as a private or public message. */
		PostMessageType: DevKit.WebApi.OptionSetValue;
		/** Shows the recipients of the social post. */
		PostToProfileId: DevKit.WebApi.StringValue;
		/** Shows the URL of the post. */
		PostURL: DevKit.WebApi.StringValue;
		/** Shows the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_account_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_adobe_migratedrecord_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_adobe_templatedocument_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bookableresourcebooking_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bookableresourcebookingheader_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bulkoperation_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_campaign_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_campaignactivity_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_contact_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_contract_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_entitlement_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_entitlementtemplate_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_incident_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_invoice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_knowledgearticle_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_knowledgebaserecord_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_lead_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreement_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingdate_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingincident_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingservice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingsetup_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoicedate_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingalertstatus_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingrule_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingtimestamp_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_customerasset_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_fieldservicesetting_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypeproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypeservice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryadjustment_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryjournal_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventorytransfer_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_payment_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentdetail_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentmethod_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentterm_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_playbookinstance_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_postalbum_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_postalcode_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_processnotes_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_productinventory_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_projectteam_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorder_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderbill_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingincident_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingservice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingservicetask_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_resourceterritory_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rma_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmaproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmareceipt_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmareceiptproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmasubstatus_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtv_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtvproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtvsubstatus_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_shipvia_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timegroup_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timegroupdetail_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timeoffrequest_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_warehouse_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorder_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workordercharacteristic_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderincident_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderservice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderservicetask_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_opportunity_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_quote_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_salesorder_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_site_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_action_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_hostedapplication_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_nonhostedapplication_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_option_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_savedsession_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflow_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflowstep_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflow_workflowstep_mapping_socialactivity: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
		SentimentValue: DevKit.WebApi.DoubleValue;
		/** Unique identifier for the associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Social Activity record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this Social Activity. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		SocialAdditionalParams: DevKit.WebApi.StringValue;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the social activity completed. This field is read-only. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Subject associated with the activity. */
		Subject: DevKit.WebApi.StringValue;
		/** Unique identifier of the social conversation. For internal use only. */
		ThreadId: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the social activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace SocialActivity {
		enum Community {
			/** 1 */
			Facebook,
			/** 2 */
			Twitter,
			/** 0 */
			Other
		}
		enum PostMessageType {
			/** 0 */
			Public_Message,
			/** 1 */
			Private_Message
		}
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
			Completed,
			/** 2 */
			Failed,
			/** 3 */
			Processing,
			/** 4 */
			Open,
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
//{'JsForm':['Social Activity','Social Activity for Interactive experience'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
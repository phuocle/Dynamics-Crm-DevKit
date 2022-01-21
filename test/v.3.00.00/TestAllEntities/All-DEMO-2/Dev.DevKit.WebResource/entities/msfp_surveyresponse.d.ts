//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsfp_surveyresponse_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the activity. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Scheduled end time of the activity. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Status of the activity. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38_Sections {
			_FE5BE043_870F_4D0F_B79F_195DCBA93F38_SECTION_4: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
			QuestionResponses: DevKit.Controls.Section;
		}
		interface tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38 extends DevKit.Controls.ITab {
			Section: tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38_Sections;
		}
		interface Tabs {
			_FE5BE043_870F_4D0F_B79F_195DCBA93F38: tab__FE5BE043_870F_4D0F_B79F_195DCBA93F38;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the activity. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Person who the activity is from. */
			From: DevKit.Controls.Lookup;
			IFRAME_SurveyResponse: DevKit.Controls.IFrame;
			/** Context data for the survey response. */
			msfp_embedcontextparameters: DevKit.Controls.String;
			/** Shows the language of the respondent. */
			msfp_language: DevKit.Controls.String;
			/** Shows the locale of the respondent. */
			msfp_locale: DevKit.Controls.String;
			/** The survey response name. */
			msfp_name: DevKit.Controls.String;
			/** Net Promoter Score of the response. */
			msfp_npsscore: DevKit.Controls.Integer;
			/** Other survey response properties in JSON format. */
			msfp_otherproperties: DevKit.Controls.String;
			/** List of question responses in JSON format. */
			msfp_questionresponseslist: DevKit.Controls.String;
			/** Name of the respondent. */
			msfp_respondent: DevKit.Controls.String;
			/** Email address of the respondent. */
			msfp_respondentemailaddress: DevKit.Controls.String;
			msfp_responsetype: DevKit.Controls.String;
			/** Satisfaction metric values for the survey response. */
			msfp_satisfactionmetricvalue: DevKit.Controls.String;
			/** Sentiment of the response. */
			msfp_sentiment: DevKit.Controls.OptionSet;
			/** Unique identifier for the survey in the source application. */
			msfp_sourcesurveyidentifier: DevKit.Controls.String;
			/** Stores the date when a response was submitted. */
			msfp_submitdate: DevKit.Controls.Date;
			/** Specifies the survey associated with the survey response. */
			msfp_surveyid: DevKit.Controls.Lookup;
			/** Specifies survey invitation associated with the survey response */
			msfp_surveyinviteid: DevKit.Controls.Lookup;
			/** Link to the survey response in Customer Voice. */
			msfp_surveyresponseurl: DevKit.Controls.String;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Scheduled start time of the activity. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			QuestionResponses: DevKit.Controls.Grid;
		}
	}
	class Formmsfp_surveyresponse_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msfp_surveyresponse_Information */
		Body: DevKit.Formmsfp_surveyresponse_Information.Body;
		/** The Header section of form msfp_surveyresponse_Information */
		Header: DevKit.Formmsfp_surveyresponse_Information.Header;
		/** The Process of form msfp_surveyresponse_Information */
		Process: DevKit.Formmsfp_surveyresponse_Information.Process;
		/** The Grid of form msfp_surveyresponse_Information */
		Grid: DevKit.Formmsfp_surveyresponse_Information.Grid;
		/** The SidePanes of form msfp_surveyresponse_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msfp_surveyresponseApi {
		/**
		* DynamicsCrm.DevKit msfp_surveyresponseApi
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
		/** Additional information provided by the external application as JSON. For internal use only. */
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
		/** Date and time when the delivery of the activity was last attempted. */
		DeliveryLastAttemptedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Description of the activity. */
		Description: DevKit.WebApi.StringValue;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type of instance of a recurring series. */
		InstanceTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsMapiPrivate: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Left the voice mail */
		LeftVoiceMail: DevKit.WebApi.BooleanValue;
		/** Unique identifier of user who last modified the activity. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when activity was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Context data for the survey response. */
		msfp_embedcontextparameters: DevKit.WebApi.StringValue;
		/** Specifies if individual question response records are generated. */
		msfp_isquestionresponsegenerated: DevKit.WebApi.BooleanValue;
		/** (Deprecated) Specifies if individual question response records are generated. */
		msfp_isquestionresponsesgenerated: DevKit.WebApi.BooleanValue;
		/** Shows the language of the respondent. */
		msfp_language: DevKit.WebApi.StringValue;
		/** Shows the locale of the respondent. */
		msfp_locale: DevKit.WebApi.StringValue;
		/** The survey response name. */
		msfp_name: DevKit.WebApi.StringValue;
		/** Net Promoter Score of the response. */
		msfp_npsscore: DevKit.WebApi.IntegerValue;
		/** Other survey response properties in JSON format. */
		msfp_otherproperties: DevKit.WebApi.StringValue;
		msfp_parent_survey_response_new: DevKit.WebApi.LookupValue;
		/** List of question responses in JSON format. */
		msfp_questionresponseslist: DevKit.WebApi.StringValue;
		/** Name of the respondent. */
		msfp_respondent: DevKit.WebApi.StringValue;
		/** Email address of the respondent. */
		msfp_respondentemailaddress: DevKit.WebApi.StringValue;
		msfp_responsetype: DevKit.WebApi.StringValue;
		msfp_satisfactionmetriccalculated: DevKit.WebApi.BooleanValue;
		/** Satisfaction metric values for the survey response. */
		msfp_satisfactionmetricvalue: DevKit.WebApi.StringValue;
		/** Sentiment of the response. */
		msfp_sentiment: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for the response in the source application. */
		msfp_sourceresponseidentifier: DevKit.WebApi.StringValue;
		/** Unique identifier for the survey in the source application. */
		msfp_sourcesurveyidentifier: DevKit.WebApi.StringValue;
		/** Stores the date when a response was submitted. */
		msfp_Startdate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Stores the date when a response was submitted. */
		msfp_submitdate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Specifies the survey associated with the survey response. */
		msfp_surveyid: DevKit.WebApi.LookupValue;
		/** Specifies survey invitation associated with the survey response */
		msfp_surveyinviteid: DevKit.WebApi.LookupValue;
		/** Response to the survey. */
		msfp_surveyresponse1: DevKit.WebApi.StringValue;
		/** Link to the survey response in Customer Voice. */
		msfp_surveyresponseurl: DevKit.WebApi.StringValue;
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
		/** Unique identifier of the user that owns the activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		PostponeActivityProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Priority of the activity. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebooking_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebookingheader_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bulkoperation_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaign_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaignactivity_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contract_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlement_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlementtemplate_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_incident_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_invoice_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_lead_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreement_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingrule_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_customerasset_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_payment_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentdetail_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentmethod_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentterm_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_playbookinstance_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalbum_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalcode_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_processnotes_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_productinventory_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_projectteam_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorder_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_resourceterritory_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rma_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmaproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceipt_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtv_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_shipvia_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroup_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_warehouse_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorder_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderincident_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderproduct_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservice_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_opportunity_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_quote_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_salesorder_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_action_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_hostedapplication_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_nonhostedapplication_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_option_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_savedsession_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflow_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflowstep_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		SeriesId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of an associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Status of the activity. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the activity. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Subject associated with the activity. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace msfp_surveyresponse {
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 10400 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10702 */
			Conversation,
			/** 10294 */
			Customer_Voice_alert,
			/** 10304 */
			Customer_Voice_survey_invite,
			/** 10306 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 10813 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10430 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10717 */
			Session,
			/** 4212 */
			Task
		}
		enum Community {
			/** 5 */
			Cortana,
			/** 6 */
			Direct_Line,
			/** 8 */
			Direct_Line_Speech,
			/** 9 */
			Email,
			/** 1 */
			Facebook,
			/** 10 */
			GroupMe,
			/** 11 */
			Kik,
			/** 3 */
			Line,
			/** 7 */
			Microsoft_Teams,
			/** 0 */
			Other,
			/** 13 */
			Skype,
			/** 14 */
			Slack,
			/** 12 */
			Telegram,
			/** 2 */
			Twitter,
			/** 4 */
			Wechat,
			/** 15 */
			WhatsApp
		}
		enum DeliveryPriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
		enum msfp_sentiment {
			/** 647390002 */
			Negative,
			/** 647390001 */
			Neutral,
			/** 647390000 */
			Positive
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum StateCode {
			/** 2 */
			Canceled,
			/** 1 */
			Completed,
			/** 0 */
			Open,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 3 */
			Canceled,
			/** 2 */
			Completed,
			/** 1 */
			Open,
			/** 4 */
			Scheduled
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormLetter {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			general_information: DevKit.Controls.Section;
			Letter_description: DevKit.Controls.Section;
			Letter_details: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent creating and sending the letter. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type the complete recipient address for the letter to ensure timely delivery. */
			Address: DevKit.Controls.String;
			/** Type the letter body or additional information to describe the letter, such as the primary message or the products and services described. */
			Description: DevKit.Controls.String;
			/** Select the direction of the letter as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Enter the account, contact, lead, or user who sent the letter. */
			from: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the letter activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the letter. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, or user recipients for the letter. */
			to: DevKit.Controls.Lookup;
		}
	}
	class FormLetter extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Letter
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Letter */
		Body: MyDog.FormLetter.Body;
		/** The Header section of form Letter */
		Header: MyDog.FormLetter.Header;
	}
	class LetterApi {
		/**
		* DynamicsCrm.DevKit LetterApi
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
		/** Unique identifier of the letter activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent creating and sending the letter. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the letter. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the letter. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the letter. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the letter. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the complete recipient address for the letter to ensure timely delivery. */
		Address: DevKit.WebApi.StringValue;
		/** Type a category to identify the letter type, such as sales offer or past due notice, to tie the letter to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the letter body or additional information to describe the letter, such as the primary message or the products and services described. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the letter as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Shows whether the letter activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Shows whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Shows whether the letter activity was created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
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
		/** Unique identifier of the business unit that owns the letter activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the letter activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the letter activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_account_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_bookableresourcebooking_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_bookableresourcebookingheader_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_bulkoperation_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_campaign_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_campaignactivity_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_contact_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_contract_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_entitlement_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_entitlementtemplate_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_incident_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_invoice_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_knowledgearticle_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_knowledgebaserecord_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_lead_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreement_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_bookingrule_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_customerasset_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_payment_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_paymentdetail_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_paymentmethod_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_paymentterm_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_playbookinstance_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_postalbum_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_postalcode_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_processnotes_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_productinventory_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_projectteam_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorder_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_resourceterritory_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rma_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rmaproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rmareceipt_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rtv_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rtvproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_shipvia_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_timegroup_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_warehouse_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorder_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderincident_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderproduct_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderservice_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_opportunity_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_quote_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_salesorder_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_site_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_action_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_hostedapplication_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_nonhostedapplication_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_option_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_savedsession_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_workflow_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_workflowstep_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_letter: DevKit.WebApi.LookupValue;
		/** Scheduled duration of the letter activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier for an associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Letter record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this Letter. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the letter's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the letter type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the letter. */
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
		/** Version number of the letter. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace Letter {
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
			Open
		}
		enum StatusCode {
			/** 5 */
			Canceled,
			/** 2 */
			Draft,
			/** 1 */
			Open,
			/** 3 */
			Received,
			/** 4 */
			Sent
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
//{'JsForm':['Letter'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
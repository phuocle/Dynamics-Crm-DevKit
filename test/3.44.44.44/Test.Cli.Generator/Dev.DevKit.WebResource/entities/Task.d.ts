//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTask {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_TASK_TAB_Sections {
			Description: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			TASK: DevKit.Controls.Section;
			task_details: DevKit.Controls.Section;
		}
		interface tab_TASK_TAB extends DevKit.Controls.ITab {
			Section: tab_TASK_TAB_Sections;
		}
		interface Tabs {
			TASK_TAB: tab_TASK_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.String;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_conversationactionitem_task_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_task_msdyn_routableobjectid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_task_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_task: DevKit.Controls.NavigationItem,
			task_activitymonitor: DevKit.Controls.NavigationItem,
			Task_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormTask extends DevKit.IForm {
		/**
		* Task [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task */
		Body: DevKit.FormTask.Body;
		/** The Header section of form Task */
		Header: DevKit.FormTask.Header;
		/** The Navigation of form Task */
		Navigation: DevKit.FormTask.Navigation;
		/** The SidePanes of form Task */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTask_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_4_Sections {
			tab_3_section_3: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.String;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Choose the record that the task relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_conversationactionitem_task_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_task_msdyn_routableobjectid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_task_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_task: DevKit.Controls.NavigationItem,
			task_activitymonitor: DevKit.Controls.NavigationItem,
			Task_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormTask_for_Interactive_experience extends DevKit.IForm {
		/**
		* Task for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task_for_Interactive_experience */
		Body: DevKit.FormTask_for_Interactive_experience.Body;
		/** The Header section of form Task_for_Interactive_experience */
		Header: DevKit.FormTask_for_Interactive_experience.Header;
		/** The Navigation of form Task_for_Interactive_experience */
		Navigation: DevKit.FormTask_for_Interactive_experience.Navigation;
		/** The SidePanes of form Task_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormTask_quick_create_form {
		interface tab_createtask_Sections {
			task: DevKit.Controls.Section;
			task_2: DevKit.Controls.Section;
			task_3: DevKit.Controls.Section;
		}
		interface tab_createtask extends DevKit.Controls.ITab {
			Section: tab_createtask_Sections;
		}
		interface Tabs {
			createtask: tab_createtask;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the task. */
			Description: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the record that the task relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormTask_quick_create_form extends DevKit.IForm {
		/**
		* Task quick create form. [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Task_quick_create_form */
		Body: DevKit.FormTask_quick_create_form.Body;
	}
	class TaskApi {
		/**
		* DynamicsCrm.DevKit TaskApi
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
		/** For internal use only. */
		ActivityAdditionalParams: string;
		/** Unique identifier of the task. */
		ActivityId: string;
		/** Type the number of minutes spent on the task. The duration is used in reporting. */
		ActualDurationMinutes: number;
		/** Enter the actual end date and time of the task. By default, it displays when the activity was completed or canceled. */
		ActualEnd_UtcDateOnly: Date;
		/** Enter the actual start date and time for the task. By default, it displays when the task was created. */
		ActualStart_UtcDateOnly: Date;
		/** Type a category to identify the task type, such as lead gathering or customer follow up, to tie the task to a business group or function. */
		Category: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Assigned Task Unique Id */
		CrmTaskAssignedUniqueId: string;
		/** Type additional information to describe the task. */
		Description: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Information which specifies whether the task was billed as part of resolving a case. */
		IsBilled: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Information which specifies if the task was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_ActivityId: string;
		/** Customer journey iteration */
		msdyncrm_associatedcustomerjourneyiteration: string;
		/** The Journey action id in which the task is created. */
		msdynmkt_JourneyActionId: string;
		/** The journey id in which the task is created */
		msdynmkt_JourneyId: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the record owner's business unit. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the task. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the task. */
		readonly OwningUser: string;
		/** Type the percentage complete value for the task to track tasks to completion. */
		PercentComplete: number;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Task.PriorityCode;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_account_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_adx_invitation_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_bookableresourcebooking_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_bookableresourcebookingheader_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_bulkoperation_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_campaign_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_campaignactivity_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_contact_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_contract_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_entitlement_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_entitlementtemplate_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_incident_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_invoice_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_knowledgearticle_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_knowledgebaserecord_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_lead_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_contentsettings_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_customerjourney_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_leadscoremodel_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinaccount_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinactivity_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinfieldmapping_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinform_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinformanswer_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinformquestion_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinformsubmission_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_linkedinuserprofile_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_marketingemailtestsend_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_migration_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyncrm_uicconfig_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreement_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementbookingdate_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementbookingincident_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementbookingproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementbookingservice_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementbookingsetup_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementinvoicedate_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_bookingalertstatus_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_bookingrule_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_bookingtimestamp_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_customerasset_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_fieldservicesetting_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_incidenttypeproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_incidenttypeservice_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_inventoryadjustment_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_inventoryjournal_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_inventorytransfer_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_payment_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_paymentdetail_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_paymentmethod_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_paymentterm_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_playbookinstance_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_postalbum_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_postalcode_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_productinventory_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_purchaseorder_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_purchaseorderbill_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_purchaseorderproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_quotebookingincident_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_quotebookingproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_quotebookingservice_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_quotebookingservicetask_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_resourceterritory_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_rma_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_rmaproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_rmareceipt_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_rmareceiptproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_rmasubstatus_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_rtv_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_rtvproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_rtvsubstatus_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_salessuggestion_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_shipvia_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_swarm_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_timegroup_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_timegroupdetail_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_timeoffrequest_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_warehouse_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_workorder_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_workordercharacteristic_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_workorderincident_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_workorderproduct_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_workorderservice_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msdyn_workorderservicetask_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_checkin_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_event_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_eventpurchase_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_eventpurchaseattendee_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_eventpurchasepass_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_eventregistration_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_hotel_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_hotelroomallocation_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_hotelroomreservation_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_layout_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_room_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_session_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_sessionregistration_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_sessiontrack_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_speaker_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_speakerengagement_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_sponsorablearticle_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_sponsorship_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_venue_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_webinarconfiguration_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_msevtmgt_webinarprovider_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_adplacement_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_pollplacement_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_publishingstatetransitionrule_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_redirect_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_shortcut_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_mspp_website_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_opportunity_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_quote_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_salesorder_task: string;
		/** Choose the record that the task relates to. */
		regardingobjectid_site_task: string;
		/** Scheduled duration of the task, specified in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Choose the service that is associated with this activity. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the Task record. */
		SLAId: string;
		/** Last SLA that was applied to this Task. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
		StateCode: OptionSet.Task.StateCode;
		/** Select the task's status. */
		StatusCode: OptionSet.Task.StatusCode;
		/** Type a subcategory to identify the task type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the task. */
		Subject: string;
		/** For internal use only. */
		SubscriptionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the task. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the task. */
			readonly ActivityId: string;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end date and time of the task. By default, it displays when the activity was completed or canceled. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the task. By default, it displays when the task was created. */
			readonly ActualStart_UtcDateOnly: string;
			/** Type a category to identify the task type, such as lead gathering or customer follow up, to tie the task to a business group or function. */
			readonly Category: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Assigned Task Unique Id */
			readonly CrmTaskAssignedUniqueId: string;
			/** Type additional information to describe the task. */
			readonly Description: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information which specifies whether the task was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information which specifies if the task was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_ActivityId: string;
			/** Customer journey iteration */
			readonly msdyncrm_associatedcustomerjourneyiteration: string;
			/** The Journey action id in which the task is created. */
			readonly msdynmkt_JourneyActionId: string;
			/** The journey id in which the task is created */
			readonly msdynmkt_JourneyId: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the record owner's business unit. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the task. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the task. */
			readonly OwningUser: string;
			/** Type the percentage complete value for the task to track tasks to completion. */
			readonly PercentComplete: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_account_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_adx_invitation_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_bookableresourcebooking_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_bookableresourcebookingheader_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_bulkoperation_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_campaign_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_campaignactivity_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_contact_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_contract_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_entitlement_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_entitlementtemplate_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_incident_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_invoice_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_knowledgearticle_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_knowledgebaserecord_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_lead_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_contentsettings_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_customerjourney_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_leadscoremodel_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaccount_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinactivity_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinform_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_migration_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyncrm_uicconfig_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreement_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementbookingdate_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementbookingincident_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservice_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_bookingalertstatus_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_bookingrule_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_bookingtimestamp_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_customerasset_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservice_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_payment_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_paymentdetail_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_paymentmethod_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_paymentterm_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_playbookinstance_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_postalbum_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_postalcode_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_productinventory_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_purchaseorder_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_purchaseorderbill_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_quotebookingincident_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_quotebookingproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_quotebookingservice_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_resourceterritory_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_rma_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_rmaproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_rmareceipt_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_rmasubstatus_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_rtv_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_rtvproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_rtvsubstatus_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_salessuggestion_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_shipvia_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_swarm_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_timegroup_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_timegroupdetail_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_warehouse_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_workorder_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_workordercharacteristic_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_workorderincident_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_workorderproduct_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_workorderservice_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msdyn_workorderservicetask_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_checkin_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_event_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchase_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_eventregistration_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_hotel_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_layout_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_room_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_session_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_sessionregistration_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_sessiontrack_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_speaker_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_speakerengagement_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_sponsorship_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_venue_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_msevtmgt_webinarprovider_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_adplacement_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_pollplacement_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_redirect_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_shortcut_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_mspp_website_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_opportunity_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_quote_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_salesorder_task: string;
			/** Choose the record that the task relates to. */
			readonly regardingobjectid_site_task: string;
			/** Scheduled duration of the task, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected due date and time. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Choose the service that is associated with this activity. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Task record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this Task. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the task's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the task type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the task. */
			readonly Subject: string;
			/** For internal use only. */
			readonly SubscriptionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the task. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Task {
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 11000 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10691 */
			Conversation,
			/** 10877 */
			Copilot_Transcript,
			/** 10600 */
			Customer_Voice_alert,
			/** 10610 */
			Customer_Voice_survey_invite,
			/** 10612 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 10310 */
			Invite_Redemption,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 11063 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10311 */
			Portal_Comment,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10708 */
			Session,
			/** 4212 */
			Task,
			/** 10185 */
			Teams_chat,
			/** 11070 */
			Voicemail
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum RegardingObjectTypeCode {
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
			/** 6 */
			Canceled,
			/** 5 */
			Completed,
			/** 7 */
			Deferred,
			/** 3 */
			In_Progress,
			/** 2 */
			Not_Started,
			/** 4 */
			Waiting_on_someone_else
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
//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormDialer_customization_during_call {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_phonecall_Sections {
			Dialer_customization_during_call: DevKit.Controls.Section;
		}
		interface tab_phonecall extends DevKit.Controls.ITab {
			Section: tab_phonecall_Sections;
		}
		interface Tabs {
			phonecall: tab_phonecall;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_conversationactionitem_phonecall_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_phonecall_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_sciconversation_phonecall_msdyn_RelatedActivity: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_conversationinsight_conversationinsighttarget: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_ocrecording_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_recording_phone_call_activity: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_transcript_transcripttarget: DevKit.Controls.NavigationItem,
			PhoneCall_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormDialer_customization_during_call extends DevKit.IForm {
		/**
		* Dialer customization - during call [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Dialer_customization_during_call */
		Body: DevKit.FormDialer_customization_during_call.Body;
		/** The Header section of form Dialer_customization_during_call */
		Header: DevKit.FormDialer_customization_during_call.Header;
		/** The Navigation of form Dialer_customization_during_call */
		Navigation: DevKit.FormDialer_customization_during_call.Navigation;
		/** The SidePanes of form Dialer_customization_during_call */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormDialer_customization_post_call {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_phonecall_Sections {
			Dialer_customization_post_call: DevKit.Controls.Section;
		}
		interface tab_phonecall extends DevKit.Controls.ITab {
			Section: tab_phonecall_Sections;
		}
		interface Tabs {
			phonecall: tab_phonecall;
		}
		interface Body {
			Tab: Tabs;
			/** Select the phone call's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msdyn_msdyn_conversationactionitem_phonecall_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_phonecall_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_sciconversation_phonecall_msdyn_RelatedActivity: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_conversationinsight_conversationinsighttarget: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_ocrecording_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_recording_phone_call_activity: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_transcript_transcripttarget: DevKit.Controls.NavigationItem,
			PhoneCall_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormDialer_customization_post_call extends DevKit.IForm {
		/**
		* Dialer customization - post call [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Dialer_customization_post_call */
		Body: DevKit.FormDialer_customization_post_call.Body;
		/** The Header section of form Dialer_customization_post_call */
		Header: DevKit.FormDialer_customization_post_call.Header;
		/** The Navigation of form Dialer_customization_post_call */
		Navigation: DevKit.FormDialer_customization_post_call.Navigation;
		/** The SidePanes of form Dialer_customization_post_call */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPhone_Call {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_phonecall_Sections {
			general_information: DevKit.Controls.Section;
			phone_call_description: DevKit.Controls.Section;
			phone_call_details: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_ci_call_summary_Sections {
			tab_ci_section_call_summary: DevKit.Controls.Section;
		}
		interface tab_tab_ci_notes_Sections {
			tab_ci_section_notes: DevKit.Controls.Section;
		}
		interface tab_tab_notes_Sections {
			timeline_section: DevKit.Controls.Section;
		}
		interface tab_phonecall extends DevKit.Controls.ITab {
			Section: tab_phonecall_Sections;
		}
		interface tab_tab_ci_call_summary extends DevKit.Controls.ITab {
			Section: tab_tab_ci_call_summary_Sections;
		}
		interface tab_tab_ci_notes extends DevKit.Controls.ITab {
			Section: tab_tab_ci_notes_Sections;
		}
		interface tab_tab_notes extends DevKit.Controls.ITab {
			Section: tab_tab_notes_Sections;
		}
		interface Tabs {
			phonecall: tab_phonecall;
			tab_ci_call_summary: tab_tab_ci_call_summary;
			tab_ci_notes: tab_tab_ci_notes;
			tab_notes: tab_tab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Controls.String;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Type the phone number. */
			PhoneNumber: DevKit.Controls.String;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Controls.String;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject1: DevKit.Controls.String;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject2: DevKit.Controls.String;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_conversationactionitem_phonecall_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_phonecall_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_sciconversation_phonecall_msdyn_RelatedActivity: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_conversationinsight_conversationinsighttarget: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_ocrecording_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_recording_phone_call_activity: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_transcript_transcripttarget: DevKit.Controls.NavigationItem,
			PhoneCall_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormPhone_Call extends DevKit.IForm {
		/**
		* Phone Call [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Phone_Call */
		Body: DevKit.FormPhone_Call.Body;
		/** The Header section of form Phone_Call */
		Header: DevKit.FormPhone_Call.Header;
		/** The Navigation of form Phone_Call */
		Navigation: DevKit.FormPhone_Call.Navigation;
		/** The SidePanes of form Phone_Call */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPhone_Call_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Controls.String;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Controls.Lookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Controls.String;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_conversationactionitem_phonecall_msdyn_CreatedActivity: DevKit.Controls.NavigationItem,
			msdyn_msdyn_salescopilotinsight_phonecall_msdyn_activityid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_sciconversation_phonecall_msdyn_RelatedActivity: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_conversationinsight_conversationinsighttarget: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_ocrecording_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_recording_phone_call_activity: DevKit.Controls.NavigationItem,
			msdyn_phonecall_msdyn_transcript_transcripttarget: DevKit.Controls.NavigationItem,
			PhoneCall_QueueItem: DevKit.Controls.NavigationItem
		}
	}
	class FormPhone_Call_for_Interactive_experience extends DevKit.IForm {
		/**
		* Phone Call for Interactive experience [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Phone_Call_for_Interactive_experience */
		Body: DevKit.FormPhone_Call_for_Interactive_experience.Body;
		/** The Header section of form Phone_Call_for_Interactive_experience */
		Header: DevKit.FormPhone_Call_for_Interactive_experience.Header;
		/** The Navigation of form Phone_Call_for_Interactive_experience */
		Navigation: DevKit.FormPhone_Call_for_Interactive_experience.Navigation;
		/** The SidePanes of form Phone_Call_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPhone_call_quick_create_form {
		interface tab_PhoneCall_Tab_1_Sections {
			PhoneCall_Description: DevKit.Controls.Section;
			PhoneCall_Description_2: DevKit.Controls.Section;
			PhoneCall_Description_3: DevKit.Controls.Section;
		}
		interface tab_PhoneCall_Tab_1 extends DevKit.Controls.ITab {
			Section: tab_PhoneCall_Tab_1_Sections;
		}
		interface Tabs {
			PhoneCall_Tab_1: tab_PhoneCall_Tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			Description: DevKit.Controls.String;
			/** Select the direction of the phone call as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Enter the account, contact, lead, or user who made the phone call. */
			from: DevKit.Controls.Lookup;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Type the phone number. */
			PhoneNumber: DevKit.Controls.String;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the record that the phone call relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Type a short description about the objective or primary topic of the phone call. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, or user recipients of the phone call. */
			to: DevKit.Controls.Lookup;
		}
	}
	class FormPhone_call_quick_create_form extends DevKit.IForm {
		/**
		* Phone call quick create form. [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Phone_call_quick_create_form */
		Body: DevKit.FormPhone_call_quick_create_form.Body;
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
		/** Unique identifier of the phone call activity. */
		ActivityId: string;
		/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
		ActualDurationMinutes: number;
		/** Enter the actual end date and time of the phone call. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the phone call. */
		ActualEnd_UtcDateOnly: Date;
		/** Enter the actual start date and time for the phone call. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the phone call. */
		ActualStart_UtcDateOnly: Date;
		/** Type a category to identify the phone call type, such as lead gathering or customer follow-up, to tie the phone call to a business group or function. */
		Category: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
		Description: string;
		/** Select the direction of the phone call as incoming or outbound. */
		DirectionCode: boolean;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Information which specifies whether the phone call activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Indication which specifies if the phone call activity was created by a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Select whether a voice mail was left for the person. */
		LeftVoiceMail: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_ActivityId: string;
		/** Customer journey iteration */
		msdyncrm_associatedcustomerjourneyiteration: string;
		/** The Journey action id in which the phonecall is created. */
		msdynmkt_JourneyActionId: string;
		/** The journey id in which the phonecall is created */
		msdynmkt_JourneyId: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the phone call activity. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the phone call activity. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the phone call activity. */
		readonly OwningUser: string;
		/** Type the phone number. */
		PhoneNumber: string;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.PhoneCall.PriorityCode;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_account_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_adx_invitation_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_bookableresourcebooking_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_bookableresourcebookingheader_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_bulkoperation_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_campaign_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_campaignactivity_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_contact_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_contract_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_entitlement_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_entitlementtemplate_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_incident_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_invoice_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_knowledgearticle_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_knowledgebaserecord_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_lead_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_contentsettings_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_customerjourney_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_leadscoremodel_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinaccount_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinactivity_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinfieldmapping_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinform_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinformanswer_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinformquestion_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinformsubmission_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_linkedinuserprofile_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_marketingemailtestsend_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_migration_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyncrm_uicconfig_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreement_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementbookingdate_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementbookingincident_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementbookingproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementbookingservice_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementbookingsetup_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementinvoicedate_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_bookingalertstatus_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_bookingrule_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_bookingtimestamp_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_customerasset_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_fieldservicesetting_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_incidenttypeproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_incidenttypeservice_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_inventoryadjustment_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_inventoryjournal_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_inventorytransfer_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_payment_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_paymentdetail_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_paymentmethod_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_paymentterm_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_playbookinstance_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_postalbum_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_postalcode_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_productinventory_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_purchaseorder_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_purchaseorderbill_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_purchaseorderproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_quotebookingincident_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_quotebookingproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_quotebookingservice_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_quotebookingservicetask_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_resourceterritory_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_rma_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_rmaproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_rmareceipt_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_rmareceiptproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_rmasubstatus_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_rtv_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_rtvproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_rtvsubstatus_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_salessuggestion_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_shipvia_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_swarm_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_timegroup_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_timegroupdetail_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_timeoffrequest_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_warehouse_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_workorder_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_workordercharacteristic_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_workorderincident_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_workorderproduct_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_workorderservice_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msdyn_workorderservicetask_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_checkin_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_event_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_eventpurchase_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_eventpurchaseattendee_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_eventpurchasepass_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_eventregistration_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_hotel_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_hotelroomallocation_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_hotelroomreservation_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_layout_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_room_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_session_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_sessionregistration_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_sessiontrack_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_speaker_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_speakerengagement_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_sponsorablearticle_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_sponsorship_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_venue_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_webinarconfiguration_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_msevtmgt_webinarprovider_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_mspp_adplacement_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_mspp_pollplacement_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_mspp_publishingstatetransitionrule_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_mspp_redirect_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_mspp_shortcut_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_mspp_website_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_opportunity_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_quote_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_salesorder_phonecall: string;
		/** Choose the record that the phone call relates to. */
		regardingobjectid_site_phonecall: string;
		/** Scheduled duration of the phone call activity, specified in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Unique identifier for an associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the Phone Call record. */
		SLAId: string;
		/** Last SLA that was applied to this Phone Call. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
		StateCode: OptionSet.PhoneCall.StateCode;
		/** Select the phone call's status. */
		StatusCode: OptionSet.PhoneCall.StatusCode;
		/** Type a subcategory to identify the phone call type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the phone call. */
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
		/** Version number of the phone call activity. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the phone call activity. */
			readonly ActivityId: string;
			/** Type the number of minutes spent on the phone call. The duration is used in reporting. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end date and time of the phone call. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual duration of the phone call. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the phone call. By default, it displays the date and time when the activity was created, but can be edited to capture the actual duration of the phone call. */
			readonly ActualStart_UtcDateOnly: string;
			/** Type a category to identify the phone call type, such as lead gathering or customer follow-up, to tie the phone call to a business group or function. */
			readonly Category: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the phone call, such as the primary message or the products and services discussed. */
			readonly Description: string;
			/** Select the direction of the phone call as incoming or outbound. */
			readonly DirectionCode: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information which specifies whether the phone call activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Indication which specifies if the phone call activity was created by a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Select whether a voice mail was left for the person. */
			readonly LeftVoiceMail: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_ActivityId: string;
			/** Customer journey iteration */
			readonly msdyncrm_associatedcustomerjourneyiteration: string;
			/** The Journey action id in which the phonecall is created. */
			readonly msdynmkt_JourneyActionId: string;
			/** The journey id in which the phonecall is created */
			readonly msdynmkt_JourneyId: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the phone call activity. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the phone call activity. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the phone call activity. */
			readonly OwningUser: string;
			/** Type the phone number. */
			readonly PhoneNumber: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_account_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_adx_invitation_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_bookableresourcebooking_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_bookableresourcebookingheader_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_bulkoperation_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_campaign_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_campaignactivity_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_contact_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_contract_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_entitlement_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_entitlementtemplate_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_incident_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_invoice_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_knowledgearticle_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_knowledgebaserecord_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_lead_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_contentsettings_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_customerjourney_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_leadscoremodel_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaccount_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinactivity_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinform_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_migration_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyncrm_uicconfig_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreement_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementbookingdate_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementbookingincident_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservice_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_bookingalertstatus_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_bookingrule_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_bookingtimestamp_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_customerasset_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservice_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_payment_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_paymentdetail_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_paymentmethod_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_paymentterm_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_playbookinstance_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_postalbum_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_postalcode_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_productinventory_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_purchaseorder_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_purchaseorderbill_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_quotebookingincident_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_quotebookingproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_quotebookingservice_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_resourceterritory_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_rma_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_rmaproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_rmareceipt_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_rmasubstatus_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_rtv_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_rtvproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_rtvsubstatus_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_salessuggestion_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_shipvia_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_swarm_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_timegroup_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_timegroupdetail_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_warehouse_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_workorder_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_workordercharacteristic_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_workorderincident_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_workorderproduct_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_workorderservice_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msdyn_workorderservicetask_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_checkin_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_event_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchase_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_eventregistration_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_hotel_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_layout_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_room_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_session_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_sessionregistration_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_sessiontrack_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_speaker_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_speakerengagement_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_sponsorship_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_venue_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_msevtmgt_webinarprovider_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_mspp_adplacement_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_mspp_pollplacement_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_mspp_redirect_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_mspp_shortcut_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_mspp_website_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_opportunity_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_quote_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_salesorder_phonecall: string;
			/** Choose the record that the phone call relates to. */
			readonly regardingobjectid_site_phonecall: string;
			/** Scheduled duration of the phone call activity, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected due date and time. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Unique identifier for an associated service. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Phone Call record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this Phone Call. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the phone call is open, completed, or canceled. Completed and canceled phone calls are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the phone call's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the phone call type and relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the phone call. */
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
			/** Version number of the phone call activity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PhoneCall {
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
			/** 3 */
			Canceled,
			/** 2 */
			Made,
			/** 1 */
			Open,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
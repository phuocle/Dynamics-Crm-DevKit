//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormProcessSession_Information {
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections {
			Details: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Summary_Sections {
			Summary: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Comments_Sections {
			Comments: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Linked_Sessions_Sections {
			Linked_Sessions: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Details_Sections {
			Details_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417 extends DevKit.Form.Controls.IControlTab {
			Section: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections;
		}
		interface tab_Summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_Summary_Sections;
		}
		interface tab_Comments extends DevKit.Form.Controls.IControlTab {
			Section: tab_Comments_Sections;
		}
		interface tab_Linked_Sessions extends DevKit.Form.Controls.IControlTab {
			Section: tab_Linked_Sessions_Sections;
		}
		interface tab_Details extends DevKit.Form.Controls.IControlTab {
			Section: tab_Details_Sections;
		}
		interface Tabs {
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417;
			Summary: tab_Summary;
			Comments: tab_Comments;
			Linked_Sessions: tab_Linked_Sessions;
			Details: tab_Details;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who canceled the dialog session. */
			CanceledBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was canceled. */
			CanceledOn: DevKit.Form.Controls.ControlDateTime;
			/** User comments. */
			Comments: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user who completed the dialog session. */
			CompletedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was completed. */
			CompletedOn: DevKit.Form.Controls.ControlDateTime;
			/** Date and time when the dialog session was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Name of the dialog session. */
			Name: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the succeeding linked dialog session. */
			NextLinkedSessionId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the originating dialog session. */
			OriginatingSessionId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the user or team who owns the dialog session. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the preceding linked dialog session. */
			PreviousLinkedSessionId: DevKit.Form.Controls.ControlLookup;
			/** Select the process activation record that is related to the dialog session. */
			ProcessId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the dialog session is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Form.Controls.ControlDateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Footer {
			/** Status of the dialog session. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormProcessSession_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form ProcessSession_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form ProcessSession_Information */
		Body: LuckyMokey.FormProcessSession_Information.Body;
		/** The Footer section of form ProcessSession_Information */
		Footer: LuckyMokey.FormProcessSession_Information.Footer;
	}
	class ProcessSessionApi {
		/**
		* DynamicsCrm.DevKit ProcessSessionApi
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
		/** Name of the activity that is being executed. */
		ActivityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who canceled the dialog session. */
		CanceledBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was canceled. */
		CanceledOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** User comments. */
		Comments: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who completed the dialog session. */
		CompletedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who started the dialog session. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the dialog session. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Error code related to the dialog session. */
		ErrorCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who ran the dialog process. */
		ExecutedBy: DevKit.WebApi.LookupValue;
		/** Date and time when the dialog process was run. */
		ExecutedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Input arguments for the child dialog process. */
		InputArguments: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the dialog session. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the dialog session. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the dialog session. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the succeeding linked dialog session. */
		NextLinkedSessionId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the originating dialog session. */
		OriginatingSessionId: DevKit.WebApi.LookupValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the dialog session. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the dialog session. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the dialog session. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the preceding linked dialog session. */
		PreviousLinkedSessionId: DevKit.WebApi.LookupValue;
		/** Select the process activation record that is related to the dialog session. */
		ProcessId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the dialog session. */
		ProcessSessionId: DevKit.WebApi.GuidValue;
		/** Name of the dialog stage. */
		ProcessStageName: DevKit.WebApi.StringValue;
		/** State of the dialog process. */
		ProcessState: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ProtectionKey: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_agreementdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_agreementmappingtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_agreementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_datamap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_datamappingattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_datamapreverse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_integrationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_migratedrecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_recipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_templatedocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_templaterecipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_transactionperformance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adobe_workflow_activity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_apisettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookingstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		channelaccessprofile_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		profileid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_characteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connectionreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connectionrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contractdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contracttemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customeropportunityrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_discount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_discounttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_expiredprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		externalparty_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		externalpartyitem_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_goalrollupquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_invoicedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticlecomment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgearticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_metric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynsm_marketingsitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynsm_salessitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynsm_servicessitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynsm_settingssitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_3dmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_accountpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_actual: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analysisjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analysisresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analytics: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analyticsadminsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analyticsforcs: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_approval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_authenticationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_autocapturerule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_autocapturesettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_batchjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookableresourceassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingchange: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingsetupmetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_businessclosure: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_cannedmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_cdsentityengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_channel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_channelcapability: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_chatansweroption: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_chatquestionnaireresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_chatwidgetlanguage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ciprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_clientextension: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_collabgraphresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_configuration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleappparameterdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contactpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contractlineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contractlinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationactionlocale: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_customerasset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_customerassetcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataexport: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_delegation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dimension: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dimensionfieldname: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entitlementapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityroutingconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_estimate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_estimateline: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_expense: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_expensecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_expensereceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_facebookengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldcomputation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldservicepricelistitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldservicesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldservicesystemjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_findworkevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_geofence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_geofenceevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_geofencingsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypeservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_integrationjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_integrationjobdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inventoryjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_invoicefrequency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_invoicefrequencydetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicedatahistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdeviceproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotfieldmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotpropertydefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotproviderinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iottocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_journal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_journalline: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kpieventdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kpieventdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_livechatconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_livechatengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_livechatwidgetlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_liveworkstream: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_localizedsurveyquestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_maskingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_mlresultcache: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_msteamssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_msteamssettingsv2: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocbotchannelregistration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occhannelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occhannelstateconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocfbapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocfbpage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_oclocalizationdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocprovisioningstate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsessioncharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsessionsentiment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsystemmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_oc_geolocationprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_omnichannelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_omnichannelpersonalization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_omnichannelqueue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_omnichannelsyncconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_operatinghour: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderinvoicingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderinvoicingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderinvoicingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_organizationalunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_payment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_paymentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_paymentmethod: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_paymentterm: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_postalcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_presence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_priority: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_processnotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productinventory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_project: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectapproval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projecttask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectteam: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_provider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_questionsequence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quoteinvoicingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quoteinvoicingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelineanalyticsbreakdown: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotepricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementorganizationunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourceassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourceassignmentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcecategorymarkuppricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcepaytype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcerequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcerequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rma: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rmaproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rmasubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_roleutilization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_routingrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rtvproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_scenario: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_scheduleboardsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_schedulingparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_searchconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sentimentanalysis: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_servicetasktype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessiondata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessionevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessionparticipant: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessionparticipantdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_shipvia: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sikeyvalueconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_skillattachmentruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_skillattachmenttarget: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_smsengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_smsnumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_surveyquestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_taxcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_taxcodedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_templatetags: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timeentry: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timeoffcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timeoffrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactionconnection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactionorigin: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactiontype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transcript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_uniquenumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_userworkhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_visitorjourney: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workordertype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_actioncallworkflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_agentscripttaskcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_answer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_auditanddiagnosticssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_configuration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_customizationfiles: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_entityassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_entitysearch: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_form: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_languagemodule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_scriptlet: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_scripttasktrigger: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_search: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_sessioninformation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_sessiontransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_uiievent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_usersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_windowroute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_question: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mwns_mawenssolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mwns_mawenssolutionsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_newprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_opportunityproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_opportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_phonetocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_productassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_productpricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_productsubstitute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_quotedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_ratingmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_ratingvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_report: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_rollupfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_salesorderdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_service: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_site: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_subject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_template: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_theme: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_transactioncurrency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_translationprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_action: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_audit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_context: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_hostedapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_nonhostedapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_option: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_savedsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_sessiontransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_workflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_workflowstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_usermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_workflowbinary: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who started the dialog session. */
		StartedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Status of the dialog session. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the dialog session. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Name of the dialog step. */
		StepName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ProcessSession {
		enum StateCode {
			/** 0 */
			Incomplete,
			/** 1 */
			Complete
		}
		enum StatusCode {
			/** 1 */
			Not_Started,
			/** 2 */
			In_Progress,
			/** 3 */
			Paused,
			/** 4 */
			Completed,
			/** 5 */
			Canceled,
			/** 6 */
			Failed
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
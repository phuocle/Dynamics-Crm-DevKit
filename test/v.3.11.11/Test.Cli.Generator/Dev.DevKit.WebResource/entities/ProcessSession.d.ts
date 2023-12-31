//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormProcessSession_Information {
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections {
			Details: DevKit.Controls.Section;
		}
		interface tab_Comments_Sections {
			Comments: DevKit.Controls.Section;
		}
		interface tab_Details_Sections {
			Details_2: DevKit.Controls.Section;
		}
		interface tab_Linked_Sessions_Sections {
			Linked_Sessions: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Summary: DevKit.Controls.Section;
		}
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417 extends DevKit.Controls.ITab {
			Section: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections;
		}
		interface tab_Comments extends DevKit.Controls.ITab {
			Section: tab_Comments_Sections;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_Linked_Sessions extends DevKit.Controls.ITab {
			Section: tab_Linked_Sessions_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417;
			Comments: tab_Comments;
			Details: tab_Details;
			Linked_Sessions: tab_Linked_Sessions;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who canceled the dialog session. */
			CanceledBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was canceled. */
			CanceledOn: DevKit.Controls.DateTime;
			/** User comments. */
			Comments: DevKit.Controls.String;
			/** Unique identifier of the user who completed the dialog session. */
			CompletedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the dialog session was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Name of the dialog session. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the succeeding linked dialog session. */
			NextLinkedSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the originating dialog session. */
			OriginatingSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the dialog session. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the preceding linked dialog session. */
			PreviousLinkedSessionId: DevKit.Controls.Lookup;
			/** Select the process activation record that is related to the dialog session. */
			ProcessId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the dialog session is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Controls.DateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the dialog session. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormProcessSession_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ProcessSession_Information */
		Body: DevKit.FormProcessSession_Information.Body;
		/** The Footer section of form ProcessSession_Information */
		Footer: DevKit.FormProcessSession_Information.Footer;
		/** The Process of form ProcessSession_Information */
		Process: DevKit.FormProcessSession_Information.Process;
		/** The SidePanes of form ProcessSession_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Name of the activity that is being executed. */
		ActivityName: string;
		/** Unique identifier of the user who canceled the dialog session. */
		readonly CanceledBy: string;
		/** Date and time when the dialog session was canceled. */
		CanceledOn_UtcDateAndTime: Date;
		/** User comments. */
		Comments: string;
		/** Unique identifier of the user who completed the dialog session. */
		readonly CompletedBy: string;
		/** Date and time when the dialog session was completed. */
		CompletedOn_UtcDateAndTime: Date;
		/** Unique identifier of the user who started the dialog session. */
		readonly CreatedBy: string;
		/** Date and time when the dialog session was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the dialog session. */
		readonly CreatedOnBehalfBy: string;
		/** Error code related to the dialog session. */
		ErrorCode: number;
		/** Unique identifier of the user who ran the dialog process. */
		ExecutedBy: string;
		/** Date and time when the dialog process was run. */
		readonly ExecutedOn_UtcDateAndTime: Date;
		/** Input arguments for the child dialog process. */
		InputArguments: string;
		/** Unique identifier of the user who last modified the dialog session. */
		readonly ModifiedBy: string;
		/** Date and time when the dialog session was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the dialog session. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the dialog session. */
		Name: string;
		/** Unique identifier of the succeeding linked dialog session. */
		NextLinkedSessionId: string;
		/** Unique identifier of the originating dialog session. */
		OriginatingSessionId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the dialog session. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the dialog session. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the dialog session. */
		readonly OwningUser: string;
		/** Unique identifier of the preceding linked dialog session. */
		PreviousLinkedSessionId: string;
		/** Select the process activation record that is related to the dialog session. */
		ProcessId: string;
		/** Unique identifier of the dialog session. */
		ProcessSessionId: string;
		/** Name of the dialog stage. */
		ProcessStageName: string;
		/** State of the dialog process. */
		ProcessState: string;
		/** For internal use only. */
		readonly ProtectionKey: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_account: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_activityfileattachment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_activitymonitor: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_adminsettingsentity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_annotation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appaction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appactionmigration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appactionrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appelement: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_applicationuser: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appmodulecomponentedge: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appmodulecomponentnode: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appointment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appusersetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresource: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcebooking: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcebookingheader: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcecategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcecategoryassn: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcecharacteristic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookableresourcegroup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bookingstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bot: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_botcomponent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_businessunit: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_businessunitnewsarticle: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_campaign: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_campaignactivity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_campaignresponse: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_canvasappextendedmetadata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_catalog: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_catalogassignment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		channelaccessprofile_processsession: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		profileid: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_characteristic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_chat: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_comment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_competitor: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connection: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connectionreference: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connectionrole: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connector: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_constraintbasedgroup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contact: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contract: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contractdetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contracttemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_conversationtranscript: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_convertrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customapi: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customapirequestparameter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customapiresponseproperty: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customeraddress: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customeropportunityrole: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customerrelationship: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_datalakefolder: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_datalakefolderpermission: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_datalakeworkspace: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_datalakeworkspacepermission: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_dataprocessingconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_discount: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_discounttype: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_email: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_entitlement: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_entitlementchannel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_entitlemententityallocationtypemapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_entitlementtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_environmentvariabledefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_environmentvariablevalue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_equipment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_expiredprocess: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_exportsolutionupload: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		externalparty_processsession: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		externalpartyitem_processsession: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_fax: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_featurecontrolsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_flowmachine: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_flowmachinegroup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_goal: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_goalrollupquery: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_holidaywrapper: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_incident: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_internalcatalogassignment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_invoice: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_invoicedetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticle: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticlecomment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticletemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_keyvaultreference: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgearticle: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgearticleincident: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgebaserecord: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_lead: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_leadtoopportunitysalesprocess: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_letter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_list: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_listoperation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mailbox: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mailmergetemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_managedidentity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_marketingformdisplayattributes: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_metric: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynce_botcontent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynsm_marketingsitemap: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynsm_salessitemap: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynsm_servicessitemap: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynsm_settingssitemap: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_3dmodel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_accountpricelist: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_actioncardregarding: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_actioncardrolesetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_actual: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_adaptivecardconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_adminappstate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agentstatushistory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreement: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdataset: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibfile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aicontactsuggestion: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aimodel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodimage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodlabel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aitemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analysisjob: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analysisresult: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analytics: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analyticsadminsettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_analyticsforcs: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_appconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_applicationextension: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_approval: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_approvalset: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_assetcategorytemplateassociation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_assetsuggestionssetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_assettemplateassociation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_assignmentconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_assignmentconfigurationstep: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_assignmentmap: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_assignmentrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_attribute: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_attributevalue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_authenticationsettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_authsettingsentry: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_autocapturerule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_autocapturesettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_batchjob: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookableresourceassociation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingalert: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingchange: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingjournal: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingsetupmetadata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_businessclosure: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_callablecontext: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_cannedmessage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_capacityprofile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_caseenrichment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_casesuggestionrequestpayload: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_casetopic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_casetopicsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_casetopicsummary: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_casetopic_incident: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_cdsentityengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_channel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_channelcapability: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_channelprovider: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_characteristicreqforteammember: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_chatansweroption: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_chatquestionnaireresponse: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_chatwidgetlanguage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ciprovider: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_clientextension: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_collabgraphresource: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_configuration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleapplicationtype: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_consoleappparameterdefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contactpricelist: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contractlinedetailperformance: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contractlineinvoiceschedule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contractlinescheduleofvalue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_contractperformance: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationaction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationdata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationinsight: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationsuggestionrequestpayload: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationtopic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationtopicsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationtopicsummary: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_conversationtopic_conversation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_csadminconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_customengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_customerasset: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_customerassetattachment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_customerassetcategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_fs: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_oc: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_databaseversion: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataexport: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataflow: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dealmanageraccess: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dealmanagersettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_decisioncontract: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_decisionruleset: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_delegation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dimension: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dimensionfieldname: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entitlementapplication: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityrankingrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_entityroutingconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_estimate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_estimateline: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_expense: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_expensecategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_expensereceipt: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_extendedusersetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_facebookengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fact: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldcomputation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldservicesetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_fieldservicesystemjob: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_findworkevent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_flowcardtype: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastdefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastinstance: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_functionallocation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_gdprdata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_geofence: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_geofenceevent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_geofencingsettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_geolocationsettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_geolocationtracking: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_helppage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iermlmodel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iermltraining: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inboxconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttype: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttyperecommendationresult: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttyperesolution: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypeservicetask: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inspection: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inspectionattachment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inspectiondefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inspectioninstance: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inspectionresponse: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_integrationjob: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_integrationjobdetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inventoryjournal: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_inventorytransfer: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_invoicefrequency: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_invoicefrequencydetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_invoicelinetransaction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotalert: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevice: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicedatahistory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdeviceproperty: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotfieldmapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotpropertydefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotprovider: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotproviderinstance: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iotsettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_iottocaseprocess: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_journal: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_journalline: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kbattachment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kbenrichment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kpieventdata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kpieventdefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_leadhygienesetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_lineengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_livechatconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_livechatengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_livechatwidgetlocation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_liveconversation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_liveworkitemevent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_liveworkstream: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_localizedsurveyquestion: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_macrosession: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_maskingrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_migrationtracker: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_mlresultcache: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_msteamssetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_msteamssettingsv2: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_notesanalysisconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_notificationfield: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_notificationtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocapplepay: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocbotchannelregistration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occarrier: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occhannelapimessageprivilege: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occhannelapimethodmapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occhannelconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occhannelstateconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occommunicationprovidersetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_occustommessagingchannel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocfbapplication: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocfbpage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_oclanguage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_oclinechannelconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_oclocalizationdata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocoutboundconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocpaymentprofile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocphonenumber: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocprovisioningstate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocrecording: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocrequest: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocrichobject: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocrichobjectmap: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocruleitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsentimentdailytopic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsession: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsessioncharacteristic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsessionparticipantevent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsessionsentiment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsimltraining: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsitdimportconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsitdskill: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsitrainingdata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocskillidentmlmodel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsmschannelsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocsystemmessage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_octag: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_octeamschannelconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_octwitterapplication: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_octwitterhandle: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_oc_geolocationprovider: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_omnichannelconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_omnichannelpersonalization: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_omnichannelqueue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_omnichannelsyncconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_operatinghour: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitylineresourcecategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitylinetransaction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitylinetransactioncategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitylinetransactionclassificatio: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_opportunitypricelist: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderlineresourcecategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderlinetransaction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderlinetransactioncategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderlinetransactionclassification: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_orderpricelist: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_organizationalunit: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_paneconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_panetabconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_panetoolconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_payment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_paymentdetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_paymentmethod: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_paymentterm: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_personalmessage: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_personasecurityrolemapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbookactivity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbookactivityattribute: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbookcategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbookinstance: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_playbooktemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_pmanalysishistory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_pminferredtask: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_pmrecording: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_pmtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_postalbum: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_postalcode: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_postconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_postruleconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_predictivescore: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_predictworkhourdurationsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_presence: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_priority: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_problematicasset: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_processnotes: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productinventory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productivityactioninputparameter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productivityactionoutputparameter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productivityagentscript: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productivityagentscriptstep: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productivitymacroactiontemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productivitymacroconnector: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_productivityparameterdefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_project: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectapproval: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectparameter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectparameterpricelist: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectpricelist: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projecttask: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projecttaskdependency: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projecttaskstatususer: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectteam: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projectteammembersignup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_projecttransactioncategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_property: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_propertyassetassociation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_propertylog: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_propertytemplateassociation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_provider: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorder: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorderproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_questionsequence: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingincident: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingservice: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotebookingsetup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quoteinvoicingproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quoteinvoicingsetup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelineanalyticsbreakdown: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelineinvoiceschedule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelineresourcecategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelinescheduleofvalue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelinetransaction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelinetransactioncategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotelinetransactionclassification: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_quotepricelist: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_recording: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementdependency: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementgroup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementorganizationunit: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementrelationship: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_requirementstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resolution: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourceassignment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourceassignmentdetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcecategorymarkuppricelevel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcecategorypricelevel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcepaytype: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcerequest: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcerequirement: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_resourceterritory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_richtextfile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rma: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rmaproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rmareceipt: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rmasubstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rolecompetencyrequirement: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_roleutilization: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_routingconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_routingconfigurationstep: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_routingrequest: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_routingrulesetsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rtv: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rtvproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_rulesetdependencymapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_salesassignmentsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_salesroutingrun: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_salessuggestion: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_salestag: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_scenario: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_schedulingparameter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_searchconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_segment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_segmentcatalogue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sentimentanalysis: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sequence: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sequencestat: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sequencetarget: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sequencetargetstep: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sequencetemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_servicetasktype: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessiondata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessionevent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessionparticipant: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessionparticipantdata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sessiontemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_shipvia: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_siconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_sikeyvalueconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_skillattachmentruleitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_skillattachmenttarget: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_slakpi: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_smartassistconfig: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_smsengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_smsnumber: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_soundfile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_suggestioninteraction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_suggestionrequestpayload: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_suggestionsmodelsummary: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_suggestionssetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_surveyquestion: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_swarm: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_swarmparticipant: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_swarmparticipantrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_swarmrole: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_swarmskill: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_swarmtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_taxcode: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_taxcodedetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_teamschannelengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_teamschatassociation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_teamschatsuggestion: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_teamscollaboration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_teamsdialeradminsettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_teamsengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_templateforproperties: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_templateparameter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_templatetags: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timeentry: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timeentrysetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timegroup: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timegroupdetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timeoffcalendar: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timeoffrequest: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_timespent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_tour: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactioncategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactioncategoryclassification: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactioncategoryhierarchyelement: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactioncategorypricelevel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactionconnection: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactionorigin: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transactiontype: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_transcript: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_twitterengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_unifiedroutingrun: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_uniquenumber: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_untrackedappointment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_upgraderun: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_upgradestep: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_upgradeversion: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_urnotificationtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_urnotificationtemplatemapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_usagemetric: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_usersetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_userworkhistory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_visitorjourney: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_wallsavedquery: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_warehouse: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_wechatengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_whatsappengagementctx: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workhourtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_worklistviewconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorder: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderincident: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderresolution: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderservice: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workorderservicetask: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workordersubstatus: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workordertype: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workqueuestate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_workqueueusersetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_actioncallworkflow: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_agentscriptaction: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_agentscripttaskcategory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_answer: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_auditanddiagnosticssetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_configuration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_customizationfiles: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_entityassignment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_entitysearch: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_form: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_languagemodule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_scriptlet: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_scripttasktrigger: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_search: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_sessioninformation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_sessiontransfer: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_task: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_toolbarbutton: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_toolbarstrip: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_tracesourcesetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_ucisettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_uiievent: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_usersettings: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyusd_windowroute: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_alert: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_alertrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_emailtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_fileresponse: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_localizedemailtemplate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_project: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_question: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_questionresponse: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_satisfactionmetric: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_survey: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_surveyinvite: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_surveyreminder: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_surveyresponse: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msfp_unsubscribedrecipient: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_newprocess: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_opportunity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_opportunityproduct: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_opportunitysalesprocess: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_organizationdatasyncstate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_organizationsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_package: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_pdfsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_phonecall: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_phonetocaseprocess: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_position: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_pricelevel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_privilegesremovalsetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_processstageparameter: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_product: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_productassociation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_productpricelevel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_productsubstitute: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_provisionlanguageforuser: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_queue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_queueitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_quote: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_quotedetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_ratingmodel: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_ratingvalue: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_relationshiprole: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_report: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_rollupfield: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_routingrule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_routingruleitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_salesliterature: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_salesliteratureitem: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_salesorder: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_salesorderdetail: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_service: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_serviceappointment: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_serviceplan: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_serviceplanmapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_settingdefinition: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharedlinksetting: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharedobject: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharedworkspace: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharepointdocumentlocation: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharepointsite: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_site: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sla: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_socialactivity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_socialprofile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_stagesolutionupload: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_subject: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_synapsedatabase: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_synapselinkprofile: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_synapselinkprofileentity: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_synapselinkschedule: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_systemuser: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_task: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_team: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_template: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_territory: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_theme: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_transactioncurrency: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_translationprocess: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_action: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_audit: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_context: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_hostedapplication: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_nonhostedapplication: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_option: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_savedsession: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_sessiontransfer: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_workflow: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_workflowstep: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_usermapping: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_virtualentitymetadata: string;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_workflowbinary: string;
		/** Unique identifier of the user who started the dialog session. */
		readonly StartedBy: string;
		/** Date and time when the dialog session was started. */
		StartedOn_UtcDateAndTime: Date;
		/** Status of the dialog session. */
		StateCode: OptionSet.ProcessSession.StateCode;
		/** Reason for the status of the dialog session. */
		StatusCode: OptionSet.ProcessSession.StatusCode;
		/** Name of the dialog step. */
		StepName: string;
		readonly FormattedValue: {
			/** Name of the activity that is being executed. */
			readonly ActivityName: string;
			/** Unique identifier of the user who canceled the dialog session. */
			readonly CanceledBy: string;
			/** Date and time when the dialog session was canceled. */
			readonly CanceledOn_UtcDateAndTime: string;
			/** User comments. */
			readonly Comments: string;
			/** Unique identifier of the user who completed the dialog session. */
			readonly CompletedBy: string;
			/** Date and time when the dialog session was completed. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Unique identifier of the user who started the dialog session. */
			readonly CreatedBy: string;
			/** Date and time when the dialog session was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the dialog session. */
			readonly CreatedOnBehalfBy: string;
			/** Error code related to the dialog session. */
			readonly ErrorCode: string;
			/** Unique identifier of the user who ran the dialog process. */
			readonly ExecutedBy: string;
			/** Date and time when the dialog process was run. */
			readonly ExecutedOn_UtcDateAndTime: string;
			/** Input arguments for the child dialog process. */
			readonly InputArguments: string;
			/** Unique identifier of the user who last modified the dialog session. */
			readonly ModifiedBy: string;
			/** Date and time when the dialog session was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the dialog session. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the dialog session. */
			readonly Name: string;
			/** Unique identifier of the succeeding linked dialog session. */
			readonly NextLinkedSessionId: string;
			/** Unique identifier of the originating dialog session. */
			readonly OriginatingSessionId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the dialog session. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the dialog session. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the dialog session. */
			readonly OwningUser: string;
			/** Unique identifier of the preceding linked dialog session. */
			readonly PreviousLinkedSessionId: string;
			/** Select the process activation record that is related to the dialog session. */
			readonly ProcessId: string;
			/** Unique identifier of the dialog session. */
			readonly ProcessSessionId: string;
			/** Name of the dialog stage. */
			readonly ProcessStageName: string;
			/** State of the dialog process. */
			readonly ProcessState: string;
			/** For internal use only. */
			readonly ProtectionKey: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_account: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_activityfileattachment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_activitymonitor: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_adminsettingsentity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_annotation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appaction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appactionmigration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appactionrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appelement: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_applicationuser: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appointment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_appusersetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bookableresource: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bookableresourcebooking: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bookableresourcebookingheader: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bookableresourcecategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bookableresourcecategoryassn: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bookableresourcecharacteristic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bookableresourcegroup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bookingstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_bot: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_botcomponent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_businessunit: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_businessunitnewsarticle: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_campaign: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_campaignactivity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_campaignresponse: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_catalog: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_catalogassignment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly channelaccessprofile_processsession: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly profileid: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_characteristic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_chat: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_comment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_competitor: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_connection: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_connectionreference: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_connectionrole: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_connector: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_constraintbasedgroup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_contact: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_contract: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_contractdetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_contracttemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_conversationtranscript: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_convertrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_customapi: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_customeraddress: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_customeropportunityrole: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_customerrelationship: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_datalakefolder: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_discount: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_discounttype: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_email: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_entitlement: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_entitlementchannel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_entitlemententityallocationtypemapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_entitlementtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_equipment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_expiredprocess: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly externalparty_processsession: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly externalpartyitem_processsession: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_fax: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_flowmachine: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_goal: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_goalrollupquery: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_holidaywrapper: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_incident: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_invoice: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_invoicedetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_kbarticle: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_kbarticlecomment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_kbarticletemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_keyvaultreference: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_knowledgearticleincident: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_knowledgebaserecord: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_lead: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_leadtoopportunitysalesprocess: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_letter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_list: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_listoperation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_mailbox: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_mailmergetemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_managedidentity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_marketingformdisplayattributes: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_metric: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdynsm_marketingsitemap: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdynsm_salessitemap: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdynsm_servicessitemap: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdynsm_settingssitemap: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_3dmodel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_accountpricelist: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_actioncardregarding: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_actioncardrolesetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_actual: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_adaptivecardconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_adminappstate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agentstatushistory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreement: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementbookingdate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementbookingincident: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservice: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_agreementsubstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aicontactsuggestion: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_analytics: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_analyticsadminsettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_analyticsforcs: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_appconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_applicationextension: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_approval: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_approvalset: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_assetcategorytemplateassociation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_assetsuggestionssetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_assettemplateassociation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_assignmentconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_assignmentconfigurationstep: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_assignmentmap: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_assignmentrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_attribute: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_attributevalue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_authenticationsettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_authsettingsentry: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_autocapturerule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_autocapturesettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_batchjob: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookableresourceassociation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookingalert: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookingalertstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookingchange: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookingjournal: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookingrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookingsetupmetadata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bookingtimestamp: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_businessclosure: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_callablecontext: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_cannedmessage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_capacityprofile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_caseenrichment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_casesuggestionrequestpayload: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_casetopic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_casetopicsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_casetopicsummary: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_casetopic_incident: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_cdsentityengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_channel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_channelcapability: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_channelprovider: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_characteristicreqforteammember: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_chatansweroption: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_chatquestionnaireresponse: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_chatwidgetlanguage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ciprovider: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_clientextension: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_collabgraphresource: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_configuration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_consoleapplicationtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_consoleapplicationtype: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_consoleappparameterdefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_contactpricelist: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_contractlinedetailperformance: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_contractlineinvoiceschedule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_contractlinescheduleofvalue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_contractperformance: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationaction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationdata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationinsight: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationsuggestionrequestpayload: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationtopic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationtopicsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationtopicsummary: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_conversationtopic_conversation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_csadminconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_customengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_customerasset: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_customerassetattachment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_customerassetcategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fs: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_databaseversion: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataexport: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dealmanageraccess: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dealmanagersettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_decisioncontract: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_decisionruleset: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_delegation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dimension: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_dimensionfieldname: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_entitlementapplication: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_entityconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_entityconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_entityrankingrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_entityroutingconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_estimate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_estimateline: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_expense: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_expensecategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_expensereceipt: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_extendedusersetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_facebookengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_fact: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_fieldcomputation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_fieldservicesetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_fieldservicesystemjob: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_findworkevent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_flowcardtype: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_forecastdefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_forecastinstance: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_functionallocation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_gdprdata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_geofence: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_geofenceevent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_geofencingsettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_geolocationsettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_geolocationtracking: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iermlmodel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iermltraining: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inboxconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttype: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttyperecommendationresult: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttyperesolution: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttypeservice: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttypeservicetask: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttypessetup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_incidenttype_requirementgroup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inspection: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inspectionattachment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inspectiondefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inspectioninstance: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inspectionresponse: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_integrationjob: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_integrationjobdetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inventoryjournal: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_inventorytransfer: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_invoicefrequency: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_invoicefrequencydetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_invoicelinetransaction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotalert: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotdevice: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotdevicecategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotdevicecommand: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotdevicecommanddefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotdevicedatahistory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotdeviceproperty: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotfieldmapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotpropertydefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotprovider: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotproviderinstance: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iotsettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_iottocaseprocess: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_journal: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_journalline: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_kbenrichment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_kpieventdata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_kpieventdefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_leadhygienesetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_lineengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_livechatconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_livechatengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_livechatwidgetlocation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_liveconversation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_liveworkitemevent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_liveworkstream: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_localizedsurveyquestion: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_macrosession: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_maskingrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_migrationtracker: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_mlresultcache: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_msteamssetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_msteamssettingsv2: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_notesanalysisconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_notificationfield: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_notificationtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocapplepay: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocbotchannelregistration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occarrier: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occhannelapimessageprivilege: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occhannelapimethodmapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occhannelconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occhannelstateconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occommunicationprovidersetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_occustommessagingchannel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocfbapplication: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocfbpage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocflaggedspam: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_oclanguage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_oclinechannelconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocliveworkitemparticipant: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocliveworkitemsentiment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_oclocalizationdata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocoutboundconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocpaymentprofile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocphonenumber: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocprovisioningstate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocrecording: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocrequest: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocrichobject: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocrichobjectmap: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocruleitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsession: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsessioncharacteristic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsessionparticipantevent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsessionsentiment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsimltraining: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsitdimportconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsitdskill: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsitrainingdata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocskillidentmlmodel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsmschannelsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocsystemmessage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_octag: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_octeamschannelconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_octwitterapplication: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_octwitterhandle: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_oc_geolocationprovider: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_omnichannelconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_omnichannelpersonalization: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_omnichannelqueue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_omnichannelsyncconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_operatinghour: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_opportunitylineresourcecategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_opportunitylinetransaction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_opportunitylinetransactioncategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_opportunitylinetransactionclassificatio: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_opportunitypricelist: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderlineresourcecategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderlinetransaction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderlinetransactioncategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderlinetransactionclassification: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_orderpricelist: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_organizationalunit: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_overflowactionconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_paneconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_panetabconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_panetoolconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_payment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_paymentdetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_paymentmethod: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_paymentterm: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_personalmessage: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_personalsoundsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_personasecurityrolemapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_playbookactivity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_playbookactivityattribute: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_playbookcategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_playbookinstance: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_playbooktemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_postalbum: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_postalcode: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_postconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_postruleconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_predictivescore: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_predictworkhourdurationsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_presence: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_priority: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_problematicasset: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_processnotes: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productinventory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productivityactioninputparameter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productivityactionoutputparameter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productivityagentscript: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productivityagentscriptstep: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productivitymacroactiontemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productivitymacroconnector: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_productivityparameterdefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_project: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projectapproval: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projectparameter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projectparameterpricelist: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projectpricelist: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projecttask: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projecttaskdependency: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projecttaskstatususer: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projectteam: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projectteammembersignup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_projecttransactioncategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_property: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_propertyassetassociation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_propertylog: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_propertytemplateassociation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_provider: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_purchaseorder: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_purchaseorderbill: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_purchaseorderproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_questionsequence: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotebookingincident: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotebookingproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotebookingservice: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotebookingsetup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quoteinvoicingproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quoteinvoicingsetup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotelineanalyticsbreakdown: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotelineinvoiceschedule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotelineresourcecategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotelinescheduleofvalue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotelinetransaction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotelinetransactioncategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotelinetransactionclassification: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_quotepricelist: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_recording: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_requirementcharacteristic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_requirementdependency: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_requirementgroup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_requirementorganizationunit: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_requirementrelationship: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_requirementresourcecategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_requirementresourcepreference: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_requirementstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resolution: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourceassignment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourceassignmentdetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourcecategorymarkuppricelevel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourcecategorypricelevel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourcepaytype: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourcerequest: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourcerequirement: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourcerequirementdetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_resourceterritory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rma: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rmaproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rmareceipt: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rmasubstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rolecompetencyrequirement: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_roleutilization: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_routingconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_routingconfigurationstep: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_routingrequest: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_routingrulesetsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rtv: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rtvproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rtvsubstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_rulesetdependencymapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_salesassignmentsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_salesroutingrun: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_salessuggestion: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_salestag: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_scenario: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_schedulingparameter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_searchconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_segment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_segmentcatalogue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sentimentanalysis: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sequence: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sequencestat: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sequencetarget: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sequencetargetstep: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sequencetemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_servicetasktype: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sessiondata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sessionevent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sessionparticipant: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sessionparticipantdata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sessiontemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_shipvia: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_siconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_sikeyvalueconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_skillattachmentruleitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_skillattachmenttarget: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_smartassistconfig: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_smsengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_smsnumber: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_soundfile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_soundnotificationsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_suggestioninteraction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_suggestionrequestpayload: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_suggestionsmodelsummary: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_suggestionssetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_surveyquestion: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_swarm: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_swarmparticipant: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_swarmparticipantrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_swarmrole: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_swarmskill: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_swarmtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_taxcode: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_taxcodedetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_teamschannelengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_teamschatassociation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_teamschatsuggestion: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_teamscollaboration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_teamsdialeradminsettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_teamsengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_templateforproperties: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_templateparameter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_templatetags: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_timeentry: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_timeentrysetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_timegroup: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_timegroupdetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_timeoffcalendar: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_timeoffrequest: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_timespent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_tour: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_transactioncategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_transactioncategoryclassification: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_transactioncategoryhierarchyelement: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_transactioncategorypricelevel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_transactionconnection: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_transactionorigin: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_transactiontype: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_transcript: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_twitterengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_unifiedroutingrun: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_uniquenumber: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_untrackedappointment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_upgraderun: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_upgradestep: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_upgradeversion: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_urnotificationtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_urnotificationtemplatemapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_usagemetric: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_usersetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_userworkhistory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_visitorjourney: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_wallsavedquery: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_wallsavedqueryusersettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_warehouse: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_wechatengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_whatsappengagementctx: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workhourtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_worklistviewconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workorder: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workordercharacteristic: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workorderincident: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workorderproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workorderresolution: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workorderservice: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workorderservicetask: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workordersubstatus: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workordertype: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workqueuestate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyn_workqueueusersetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_actioncallworkflow: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_agentscriptaction: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_agentscripttaskcategory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_answer: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_auditanddiagnosticssetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_configuration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_customizationfiles: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_entityassignment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_entitysearch: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_form: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_languagemodule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_scriptlet: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_scripttasktrigger: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_search: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_sessioninformation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_sessiontransfer: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_task: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_toolbarbutton: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_toolbarstrip: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_tracesourcesetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_ucisettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_uiievent: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_usersettings: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msdyusd_windowroute: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_alert: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_alertrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_emailtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_fileresponse: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_localizedemailtemplate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_project: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_question: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_questionresponse: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_satisfactionmetric: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_survey: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_surveyinvite: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_surveyreminder: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_surveyresponse: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_msfp_unsubscribedrecipient: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_newprocess: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_opportunity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_opportunityproduct: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_opportunitysalesprocess: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_organizationsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_package: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_pdfsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_phonecall: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_phonetocaseprocess: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_position: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_pricelevel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_processstageparameter: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_product: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_productassociation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_productpricelevel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_productsubstitute: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_queue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_queueitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_quote: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_quotedetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_ratingmodel: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_ratingvalue: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_relationshiprole: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_report: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_rollupfield: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_routingrule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_routingruleitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_salesliterature: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_salesliteratureitem: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_salesorder: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_salesorderdetail: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_service: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_serviceappointment: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_serviceplan: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_settingdefinition: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_sharedobject: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_sharedworkspace: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_sharepointdocumentlocation: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_sharepointsite: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_site: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_sla: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_socialactivity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_socialprofile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_subject: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_synapsedatabase: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_systemuser: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_task: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_team: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_template: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_territory: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_theme: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_transactioncurrency: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_translationprocess: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_action: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_audit: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_context: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_hostedapplication: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_nonhostedapplication: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_option: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_savedsession: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_sessiontransfer: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_workflow: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_workflowstep: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_uii_workflow_workflowstep_mapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_usermapping: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Unique identifier of the object with which the dialog session is associated. */
			readonly regardingobjectid_workflowbinary: string;
			/** Unique identifier of the user who started the dialog session. */
			readonly StartedBy: string;
			/** Date and time when the dialog session was started. */
			readonly StartedOn_UtcDateAndTime: string;
			/** Status of the dialog session. */
			readonly StateCode: string;
			/** Reason for the status of the dialog session. */
			readonly StatusCode: string;
			/** Name of the dialog step. */
			readonly StepName: string;
		}
	}
}
declare namespace OptionSet {
	namespace ProcessSession {
		enum OwnerIdType {
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 1 */
			Complete,
			/** 0 */
			Incomplete
		}
		enum StatusCode {
			/** 5 */
			Canceled,
			/** 4 */
			Completed,
			/** 6 */
			Failed,
			/** 2 */
			In_Progress,
			/** 1 */
			Not_Started,
			/** 3 */
			Paused
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
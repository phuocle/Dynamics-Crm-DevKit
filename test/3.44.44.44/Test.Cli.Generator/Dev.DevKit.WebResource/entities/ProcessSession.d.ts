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
			/** Unique ID of the object associated with the dialog session */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Controls.DateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

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
		/** The Navigation of form ProcessSession_Information */
		Navigation: DevKit.FormProcessSession_Information.Navigation;
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
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_account: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_activityfileattachment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_activitymonitor: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_adminsettingsentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_adx_externalidentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_adx_invitation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_adx_inviteredemption: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_adx_portalcomment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_adx_setting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_adx_webformsession: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aicopilot: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aiplugin: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginauth: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginconversationstarter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginconversationstartermapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginexternalschema: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginexternalschemaproperty: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aiplugingovernance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aiplugingovernanceext: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aiplugininstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginoperationparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginoperationresponsetemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aiplugintitle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aipluginusersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_aiskillconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_annotation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appaction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appactionmigration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appactionrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appelement: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_application: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_applicationuser: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appmodulecomponentedge: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appmodulecomponentnode: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appointment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_appusersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_archivecleanupinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_archivecleanupoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_attributemaskingrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bookableresource: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bookableresourcebooking: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bookableresourcebookingheader: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bookableresourcecategory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bookableresourcecategoryassn: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bookableresourcecharacteristic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bookableresourcegroup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bookingstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bot: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_botcomponent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_botcomponentcollection: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bulkarchiveconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bulkarchivefailuredetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bulkarchiveoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_bulkarchiveoperationdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_businessunit: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_businessunitnewsarticle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_c360_configuration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_campaign: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_campaignactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_campaignresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_canvasappextendedmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_card: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_catalog: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_catalogassignment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_certificatecredential: string;
		/** Unique ID of the object associated with the dialog session */
		channelaccessprofile_processsession: string;
		/** Unique ID of the object associated with the dialog session */
		profileid: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_characteristic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_chat: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_comment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_competitor: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_connection: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_connectioninstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_connectionreference: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_connectionrole: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_connector: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_constraintbasedgroup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_contact: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_contract: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_contractdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_contracttemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_conversationtranscript: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_convertrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_copilotexamplequestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_copilotglossaryterm: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_copilotsynonyms: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_credential: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_customapi: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_customapirequestparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_customapiresponseproperty: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_customeraddress: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_customeropportunityrole: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_customerrelationship: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_datalakefolder: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_datalakefolderpermission: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_datalakeworkspace: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_datalakeworkspacepermission: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_dataprocessingconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_delegatedauthorization: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_deleteditemreference: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_desktopflowbinary: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_desktopflowmodule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_discount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_discounttype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_dvfilesearch: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_dvfilesearchattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_dvfilesearchentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_dvtablesearch: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_dvtablesearchattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_dvtablesearchentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_email: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_enablearchivalrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_entitlement: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_entitlementchannel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_entitlemententityallocationtypemapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_entitlementtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_entityrecordfilter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_environmentvariabledefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_environmentvariablevalue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_equipment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_expiredprocess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_exportedexcel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_exportsolutionupload: string;
		/** Unique ID of the object associated with the dialog session */
		externalparty_processsession: string;
		/** Unique ID of the object associated with the dialog session */
		externalpartyitem_processsession: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_fabricaiskill: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_fax: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_featurecontrolsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_federatedknowledgeconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_flowcapacityassignment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_flowcredentialapplication: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_flowevent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_flowmachine: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_flowmachinegroup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_flowmachineimage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_flowmachineimageversion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_flowmachinenetwork: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_fxexpression: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_goal: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_goalrollupquery: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_governanceconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_holidaywrapper: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_incident: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_internalcatalogassignment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_invoice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_invoicedetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_kbarticle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_kbarticlecomment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_kbarticletemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_keyvaultreference: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_knowledgearticle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_knowledgearticleincident: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_knowledgebaserecord: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_lead: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_leadtoopportunitysalesprocess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_letter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_list: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_listoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mailbox: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mailmergetemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mainfewshot: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_makerfewshot: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_managedidentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_marketingformdisplayattributes: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_maskingrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_metadataforarchival: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_metric: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mobileofflineprofileextension: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_activitymappingmetadatabase: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_additionalentityinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_aibuildercallbacktesthook: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_aibuildermodelmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_analysisinstanceconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_analysismetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_azuremlwebservice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_businessunitconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_cdsamodelmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_clusterloadmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_conflationcriteriastatistics: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_conflationmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_conflationrun: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_conflationstatistics: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_consentsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_dataflowmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_datapreparationmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_dataqualityfeaturewisemetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_dataqualityoverview: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_dataqualityreport: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_datasetcatalog: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_datasourcemetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_datatroubleshootingaccess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_derivedentitymetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_diagnosticsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_discoveredcdsamodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_discoveryoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_enrichmentmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_enrichmentrun: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_entityfiltermetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_exportconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_exportconfigreport: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_exportedmoduleconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_exportsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_featuretemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_graphmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_hierarchymetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_hostloadmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_importexportstatusmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_insightmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_insightsdataqualityreport: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_instancemetrics: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_instancepartnercatalog: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_instancesearchconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_instancesettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_intelligenceworkflowmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_intelligenceworkflowrunmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_intelligenceworkspacemetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_keyvaultmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_lightcdsamodelmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_logicappssubscribermetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_mappedsecretmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_measuremetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_modelconfigmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_moduleconfigurationreference: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_notificationcheckpoint: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_packageimportmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_packagejobmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_packagemetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_platforminstancemapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_powerplatformconnector: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_powerplatformrefreshsignalmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_preenrichmentmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_profilestorestateinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_realtimeaggregatedstats: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_realtimem3configuration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_realtimem3searchconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_realtimepluginmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_realtimesystemtablemetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_realtimetablemetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_refreshhistorymetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_refreshschedulebase: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_refreshstatehistorymetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_relationshipmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_reportmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_resetinstancehistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_resourcemetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_runtimerealtimem3metadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_segmentmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_semanticentitymappingmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_sparkjobexecutionmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_templatedmeasuremetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_templatedsegmentmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_transformmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynce_botcontent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_addtocalendarstyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_appointmentactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_basestyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_buttonstyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_cdnconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_cdsaconnectorconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_codestyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_columnstyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_contentblock: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_contentblockstyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_contentsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_createleadactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_customerinsightsinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_customerjourney: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_customerjourneycustomchannelactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_customerjourneyiteration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_customerjourneyruntimestate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_customerjourneytemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_customerjourneyworkflowlink: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_defaultmarketingsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_delaydatetimeactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_delaydurationactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_deprecatedcustomtileactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_deprecatedeventactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_deprecatedformsprosurveyactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_deprecatedpageactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_designerfeatureavailability: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_digitalassetsconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_dividerstyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_emailkeypoint: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_featureconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_file: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_formpage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_formpagetemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_generalstyles: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_geopin: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_gpt3log: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_gwennolfeatureconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_gwennolspamscoreactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_gwennolspamscorerequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_imagestyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_keyword: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_launchworkflowactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_layoutstyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_leadentityfield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_leadscore: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_leadscoremodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_leadscore_v2: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_leadscoringconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_leadtoopportunity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinaudience: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedincampaign: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedincampaignactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinfieldmapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinform: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinformanswer: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinformquestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinformsubmission: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_linkedinuserprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_listform: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_liveentitydependency: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingdataimport: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingemail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingemailactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingemailtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingemailtest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingemailtestattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingemailtestsend: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingfieldsubmission: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingform: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingformactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingformfield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingformsubmission: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingformtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingformwhitelistrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingpage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingpageconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_marketingpagetemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_matchingstrategy: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_matchingstrategyattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_migration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_mktactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_networkpage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_personalizedpage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_personalizedpagefield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_phonecallactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_portalsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_postingishts: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_qrcodestyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_quicksendemail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_quotainfoentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_reaction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_recordupdateactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_redirecturl: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_segment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_segmentactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_segmenttemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_setupdomain: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_socialpost: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_socialpostingconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_socialpostingconsent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_sourceactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_splitteractivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_tag: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_taskactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_taskactivitymarketingtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_textstyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_triggeractivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_uicconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_usergeoregion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_usersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_video: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_videostyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyncrm_website: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_aimodelversion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_apsconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_brandprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_brandsender: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_brandtheme: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_buttonstyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_byoacschannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_byoacschannelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_captcha: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_catalogeventstatusconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_cmsaddon: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_comparatormetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_compliancesettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_compliancesettings3: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_compliancesettings4: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_configuration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_consent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_consentcenterconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_consentprovider: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_consentproviderdefaultconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_consentproviderdefaultpurpose: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_consentproviderlocalization: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_consentsystemconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_contactpointconsent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_contactpointconsent2: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_contactpointconsent3: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_contactpointconsent4: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_contactpointsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_conversioneventdefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_createdentitylink: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_customchannelmessage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_customerdatamapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_customerdataselection: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_domain: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_email: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_emailtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_entitygradedistribution: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_entityscoredistribution: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_entityscoringmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_eventmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_eventparametermetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_experiment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_experimentv2: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_featureconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_formsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_formtargetaudience: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_fragment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_frequencycap: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_gdprrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_imagestyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_infobipchannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_infobipchannelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_journey: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_journeydependency: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_journeyevent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_journeyoptimizationcount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_journeyrunparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_journeysetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_journeytemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_journeyworkflowmapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_keyword: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_leadqualificationmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_linkmobilitychannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_marketingfieldsubmission: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_marketingform: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_marketingformfield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_marketingformsubmission: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_marketingformtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_matchingstrategy: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_matchingstrategyattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_metadataentityrelationship: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_metadataitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_metadatastorestate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_mobileapp: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_mobileappchannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_mobiledevice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_mocksmsproviderchannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_predefinedplaceholder: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_preferencecenter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_preferencecenterlink: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_purpose: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_pushdeviceregistrationresult: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_pushmobiledevice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_pushnotification: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_qrcodestyle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_quiettimesetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_recaptchaconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_segment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_segmentdefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_segmentexecution: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_segmentusage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_sms: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_submitbutton: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_tag: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_teamsengagement: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_telesignchannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_telesignchannelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_topic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_twiliochannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_twiliochannelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_utmtracking: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_vibeschannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_vibeschannelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdynmkt_webinaremailjourney: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_3dmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_accountkpiitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_actioncardactionstat: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_actioncardregarding: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_actioncardrolesetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_actioncardstataggregation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_activeicdextension: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_activityanalysiscleanupstate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_activityanalysisconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_actual: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_adaptivecardconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_adminappstate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentcapacityprofileunit: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentcapacityupdatehistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentchannelstate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentcopilotsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentgroup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentgroupmembership: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentresourceforecasting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agentstatushistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreement: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementbookingdate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementbookingincident: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementbookingproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementbookingservice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementbookingservicetask: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementbookingsetup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementinvoicedate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementinvoiceproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementinvoicesetup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_agreementsubstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aibdataset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aibfile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aicontactsuggestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aievent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aimodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aiodimage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aiodlabel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_aitemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_analysisjob: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_analysisoverride: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_analysisresult: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_analytics: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_analyticsadminsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_analyticsforcs: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_apirequestcache: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_apirequestfolder: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_appconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_appcopilotconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_appinsightsmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_applicationextension: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_applicationtabtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_appprofilerolemapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_appstate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_assetcategorytemplateassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_assetsuggestionssetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_assettemplateassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_assignmentconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_assignmentconfigurationstep: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_assignmentmap: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_assignmentrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_attribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_attributeinfluencestatistics: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_attributevalue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_authenticationsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_authsettingsentry: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_autocapturerule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_autocapturesettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_autonomouscasecreationrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookableresourceassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookingalert: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookingalertstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookingchange: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookingjournal: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookingrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookingsetupmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bookingtimestamp: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_botsession: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_businessclosure: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_callablecontext: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_cannedmessage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_capacityprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_caseenrichment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_casefollowupandclosureconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_casesuggestionrequestpayload: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_casetopic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_casetopicsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_casetopicsummary: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_casetopic_incident: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_cdsentityengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channelcapability: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channeldefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channeldefinitionconsent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channeldefinitionlocale: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channelinstancesecret: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channelmessageattachment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channelmessagecontextpart: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channelmessagepart: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_channelprovider: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_chatansweroption: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_chatquestionnaireresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_chatwidgetlanguage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ciprovider: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_clientextension: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_collabgraphresource: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_collabspaceteamassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_configuration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_consoleapplicationtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_consoleapplicationtype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_consoleappparameterdefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_consumingapplication: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_contactkpiitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_contactsuggestionrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_contactsuggestionruleset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationaction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationactionitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationactionlocale: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationaggregatedinsights: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationcomment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationdata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationinsight: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationmessageblock: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationparticipantinsights: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationparticipantsentiment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationquestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationsegmentsentiment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationsentiment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationsignal: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationsubject: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationsummaryinteraction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationsummarysetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationsummarysuggestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationsystemtag: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationtag: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationtopic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationtopicsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationtopicsummary: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_conversationtopic_conversation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_copilotagentpreference: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_copilotinteraction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_copilotinteractiondata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_copilotinteractions: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_copilotknowledgeinteraction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_copilotsummarizationsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_copilottranscript: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_copilottranscriptdata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_crmconnection: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_csadminconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_cskeyvalueconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customapirulesetconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customerasset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customerassetattachment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customerassetcategory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customeremailcommunication: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customerfeedbacksurvey: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customerfeedbacksurveyinvite: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_customerfeedbacksurveyresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dailyaccountkpiitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dailycontactkpiitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dailyleadkpiitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dailyopportunitykpiitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsdataset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_copilot: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_fs: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_mc: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_mkt: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_oc: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_oc_rt: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_sareporting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataanalyticsworkspace: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_databaseversion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataflow: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataflowtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_datahygienesettinginfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dealmanageraccess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dealmanagersettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_decisioncontract: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_decisionruleset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_defextendedchannelinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_defextendedchannelinstanceaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_deletedconversation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_derivedinsightsrelatedentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_digitalsellingactivetask: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_digitalsellingcompletedtask: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_distributedlock: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dmsrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dmsrequeststatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dmssyncrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_dmssyncstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_duplicateleadmapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_effortpredictionresult: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entitlementapplication: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityattachment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityattributepredictionrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityderivedinsight: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityrankingrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityroutingconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_entityworkstreammap: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_extendedusersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_externalcrm: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_externalrecord: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_facebookengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_federatedarticle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_fieldservicepricelistitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_fieldservicesetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_fieldservicesummaryconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_fieldservicesystemjob: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_fileupload: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flowcardtype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_approval: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_approvalrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_approvalresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_approvalstep: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flow_flowapproval: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_flwconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_forecastconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_forecastdefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_forecastingcache: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_forecastinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_forecastpredictionstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_forecastrecurrence: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_forecastsettingsandsummary: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_formmapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_function: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_functionallocation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_functionallocationtype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_gdprdata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_geofence: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_geofenceevent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_geofencingsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_geolocationsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_geolocationtracking: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_helppage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_historicalcaseharvestbatch: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_historicalcaseharvestrun: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_icdextension: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_icebreakersconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iermlmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iermltraining: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inboxcardconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inboxconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inboxentityconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttypecharacteristic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttypeproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttyperecommendationresult: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttyperesolution: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttypeservice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttypeservicetask: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttypessetup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_incidenttype_requirementgroup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inspection: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inspectionattachment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inspectiondefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inspectioninstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inspectionresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_insurance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_integratedsearchprovider: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentattributeset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentattribute_entity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intententity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentfamily: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentfeature_configuration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentgroupcondition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentharvesting_batchjobstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentharvesting_provisioning_status: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentsolutionmap: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_intentsolution_mappingconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inventoryadjustment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inventoryjournal: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_inventorytransfer: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotalert: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotdevice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotdevicecategory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotdevicecommand: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotdevicecommanddefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotdevicedatahistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotdeviceproperty: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotfieldmapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotpropertydefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotprovider: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotproviderinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iotsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_iottocaseprocess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_kbattachment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_kbenrichment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgeharvestjobrecord: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_kpieventdata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_kpieventdefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_leadhygienesetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_leadkpiitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_leadmodelconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_lineengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_linkedentityattributevalidity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_livechatconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_livechatengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_livechatwidgetlocation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_liveconversation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_liveworkitemevent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_liveworkstream: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_localizedsurveyquestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_locationtemplateassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_locationtypetemplateassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_lockstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_macrosession: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_maskingrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_masterentityroutingconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_migrationtracker: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_mobileapp: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_mobilesource: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_modelpreviewstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_modulerundetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_mostcontacted: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_mostcontactedby: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_msteamssetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_msteamssettingsv2: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_nextaction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_notesanalysisconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_notificationfield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_notificationtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_nottoexceed: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocagentassignedcustomapiprivilege: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocapplebusinessaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocapplepay: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocautoblockrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocautomatedactionrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocautomatedactionrulesmapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocbotchannelregistration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocbotchannelregistrationsecret: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occarrier: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occhannelapimessageprivilege: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occhannelapimethodmapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occhannelconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occhannelstateconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occommunicationprovidersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_occustommessagingchannel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocexternalcontext: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocfbapplication: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocfbpage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocflaggedspam: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocgatekeeperengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_oclanguage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_oclinechannelconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocliveworkitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocliveworkitemparticipant: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocliveworkitemsentiment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_oclocalizationdata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocoutboundconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocoutboundmessage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocpaymentprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocphonecallengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocphonemusic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocphonenumber: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocprovisioningstate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocrecording: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocrichobject: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocrichobjectmap: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocruleitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsentimentdailytopic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsession: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsessioncharacteristic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsessionparticipantevent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsessionsentiment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsimltraining: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsitdimportconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsitdskill: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsitrainingdata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocskillidentmlmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsmschannelsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsmssettingsecret: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocsystemmessage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_octag: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_octeamschannelconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_octwitterapplication: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_octwitterhandle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_octwitterhandleprovisioningstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_octwitterhandlesecret: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocvoice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocvoicechannellanguagesetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocvoicechannelsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocvoicemail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocwechatchannelconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_oc_geolocationprovider: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_odosfeaturemetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_odosmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_omnichannelconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_omnichannelpersonalization: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_omnichannelqueue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_omnichannelsyncconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_operatinghour: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_opportunitykpiitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_opportunitymodelconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_orderinvoicingdate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_orderinvoicingproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_orderinvoicingsetup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_orderinvoicingsetupdate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_organizationalunit: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_orgchartnode: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_originatingqueue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_overflowactionconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_paneconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_panetabconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_panetoolconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_payment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_paymentdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_paymentmethod: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_paymentterm: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_personalmessage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_personalsoundsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_personasecurityrolemapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_playbookactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_playbookactivityattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_playbookcategory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_playbookinstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_playbooktemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmanalysishistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmcalendar: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmcalendarversion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pminferredtask: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmprocesstemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmprocessusersettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmprocessversion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmrecording: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmsimulation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_pmview: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_postalbum: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_postalcode: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_postconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_postruleconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_predictioncomputationoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_predictionmodelstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_predictionscheduledoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_predictivemodelscore: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_predictivescore: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_predictivescoringsyncstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_predictworkhourdurationsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_preferredagent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_preferredagentcustomeridentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_preferredagentroutedentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_presence: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_priority: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_problematicasset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_problematicassetfeedback: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productinventory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productivityactioninputparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productivityactionoutputparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productivityagentscript: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productivityagentscriptstep: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productivitymacroactiontemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productivitymacroconnector: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_productivityparameterdefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_property: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_propertyassetassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_propertylocationassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_propertylog: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_propertytemplateassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_provider: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_purchaseorder: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_purchaseorderbill: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_purchaseorderproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_purchaseorderreceipt: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_purchaseordersubstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_questionsequence: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_quotebookingincident: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_quotebookingproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_quotebookingservice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_quotebookingservicetask: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_quotebookingsetup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_quoteinvoicingproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_quoteinvoicingsetup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rawinsightentitylink: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_readtrackingenabledinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_realtimescoring: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_realtimescoringoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_recomputetracker: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_recording: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_recurringsalesaction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_recurringsalesactionv2: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_relationshipanalyticsmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_reportbookmark: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementchange: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementcharacteristic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementdependency: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementgroup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementorganizationunit: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementrelationship: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementresourcecategory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementresourcepreference: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_requirementstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_resolution: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_resourcepaytype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_resourcerequirement: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_resourcerequirementdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_resourceterritory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_richtextfile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rma: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rmaproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rmareceipt: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rmareceiptproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rmasubstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_routingconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_routingconfigurationstep: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_routingrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_routingrulesetsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rtv: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rtvproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rtvsubstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_rulesetdependencymapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sabackupdiagnostic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sabatchruninstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesaccelerationinsight: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesaccelerationsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesassignmentsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salescopilotinsight: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salescopilotorgsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salescopilotusersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesinsightssettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesocmessage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesocsmstemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesroutingdiagnostic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salesroutingrun: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salessuggestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_salestag: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_saruninstance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_scenario: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_schedule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_scheduleboardsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_schedulingfeatureflag: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_schedulingparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_schedulingscope: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sciconversation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_scicustomemailhighlight: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_scicustomhighlight: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_scicustompublisher: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_scienvironmentsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sciusersettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_searchconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_segment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_segmentationsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_segmentattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_segmentcatalogue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sentimentanalysis: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sequence: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sequencestat: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sequencetarget: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sequencetargetstep: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sequencetemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_servicecopilotplugin: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_servicecopilotpluginaction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_servicecopilotpluginrole: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_serviceoneprovisioningrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_servicetasktype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sessiondata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sessionevent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sessionparticipant: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sessionparticipantdata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sessiontemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_shareasconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_shipvia: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_siconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_sikeyvalueconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_similarentitiesfeatureimportance: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_skillattachmentruleitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_skillattachmenttarget: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_slakpi: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_smartassistconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_smsengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_smsnumber: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_soundfile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_soundnotificationsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_submodeldefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_suggestionassignmentrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_suggestioninteraction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_suggestionprincipalobjectaccess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_suggestionrequestpayload: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_suggestionsellerpriority: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_suggestionsmodelsummary: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_suggestionssetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_surveyconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_surveyquestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_surveysetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_swarm: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_swarmparticipant: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_swarmparticipantrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_swarmrole: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_swarmskill: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_swarmtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_systemuserschedulersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_taggedrecord: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_taxcode: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_taxcodedetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_teamschannelengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_teamschatassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_teamschatsuggestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_teamscollaboration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_teamsdialeradminsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_teamsengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_templateforproperties: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_templateparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_templateruleset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_templatetags: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_timeentry: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_timeentrysetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_timegroup: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_timegroupdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_timeoffrequest: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_timespent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_tour: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_trade: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_tradecoverage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_trainingresult: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_transactionorigin: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_transcript: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_twitterengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_unifiedroutingrun: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_uniquenumber: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_untrackedappointment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_upgraderun: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_upgradestep: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_upgradeversion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_urnotificationtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_urnotificationtemplatemapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_usagemetric: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_usagereporting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_usersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_visitorjourney: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_vivacustomerlist: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_vivaentitysetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_vivaorgextensioncred: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_vivaorgsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_vivausersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_voicechannelorganizationsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_wallsavedquery: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_wallsavedqueryusersettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_warehouse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_warranty: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_wechatengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_whatsappengagementctx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_wkwcolleaguesforcompany: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_wkwcolleaguesforcontact: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_wkwconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workflowactionstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workhourtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_worklistviewconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workorder: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workordercharacteristic: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workorderincident: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workordernte: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workorderproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workorderresolution: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workorderresourcerestriction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workorderservice: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workorderservicetask: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workordersubstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workordertype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workqueuestate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workqueueusersetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msdyn_workstreamhmmigrationstatus: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_attendeepass: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_authenticationsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_bucket: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_building: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_checkin: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_customregistrationfield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_entitycounter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_event: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventadministration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventanalytics: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventcustomregistrationfield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventmanagementactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventmanagementconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventpurchase: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventpurchaseattendee: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventpurchasecontact: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventpurchasepass: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventregistration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventregistrationticket: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventteammember: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventteamsproperties: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_eventvendor: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_file: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_hotel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_hotelroomallocation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_hotelroomreservation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_layout: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_pass: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_registrationresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_room: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_roomreservation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_session: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_sessionregistration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_sessiontrack: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_speaker: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_speakerengagement: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_sponsorablearticle: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_sponsorship: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_usertokencache: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_venue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_waitlistitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_webapplication: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_webinarconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_webinarconsent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_webinarprovider: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_webinartype: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msevtmgt_websiteentityconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_alert: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_alertrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_emailtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_fileresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_localizedemailtemplate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_project: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_question: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_questionresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_satisfactionmetric: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_survey: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_surveyinvite: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_surveyreminder: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_surveyresponse: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msfp_unsubscribedrecipient: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msgdpr_gdprconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msgdpr_gdprconsentchangerecord: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_msgraphresourcetosubscription: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_mspcat_packagestore: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_newprocess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_opportunity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_opportunityproduct: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_opportunitysalesprocess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_organizationdatasyncfnostate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_organizationdatasyncstate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_organizationsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_package: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_packagehistory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_pdfsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_phonecall: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_phonetocaseprocess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_plannerbusinessscenario: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_plannersyncaction: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_plugin: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_position: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerbidataset: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerbidatasetapdx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerbimashupparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerbireport: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerbireportapdx: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerfxrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerpagecomponent: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerpagesite: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerpagesitelanguage: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerpagesitepublished: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerpagesmanagedidentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_powerpagesscanreport: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_pricelevel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_privilegecheckerlog: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_privilegecheckerrun: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_privilegesremovalsetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_processstageparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_product: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_productassociation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_productpricelevel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_productsubstitute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_provisionlanguageforuser: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_queue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_queueitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_quote: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_quotedetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_ratingmodel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_ratingvalue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_reconciliationentityinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_reconciliationentitystepinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_reconciliationinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_recordfilter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_recurringappointmentmaster: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_recyclebinconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_relationshiprole: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_report: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_reportparameter: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_retaineddataexcel: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_retentioncleanupinfo: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_retentioncleanupoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_retentionconfig: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_retentionfailuredetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_retentionoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_retentionoperationdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_retentionsuccessdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_roleeditorlayout: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_rollupfield: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_routingrule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_routingruleitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_salesliterature: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_salesliteratureitem: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_salesorder: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_salesorderdetail: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_searchattributesettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_searchcustomanalyzer: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_searchrelationshipsettings: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_service: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_serviceappointment: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_serviceplan: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_serviceplancustomcontrol: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_serviceplanmapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_settingdefinition: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_sharedlinksetting: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_sharedobject: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_sharedworkspace: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_sharedworkspacepool: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_sharepointdocumentlocation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_sharepointsite: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_sideloadedaiplugin: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_site: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_sla: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_socialactivity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_socialprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_stagedentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_stagedentityattribute: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_stagedmetadataasyncoperation: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_stagesolutionupload: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_subject: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_supportusertable: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_synapsedatabase: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_synapselinkprofile: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_synapselinkprofileentity: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_synapselinkschedule: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_systemuser: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_task: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_tdsmetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_team: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_template: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_territory: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_theme: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_transactioncurrency: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_translationprocess: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_usermapping: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_userrating: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_viewasexamplequestion: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_virtualentitymetadata: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_workflowbinary: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_workqueue: string;
		/** Unique ID of the object associated with the dialog session */
		regardingobjectid_workqueueitem: string;
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
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_account: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_activityfileattachment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_activitymonitor: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_adminsettingsentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_adx_externalidentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_adx_invitation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_adx_setting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_adx_webformsession: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aicopilot: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aiplugin: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginauth: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aiplugingovernance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aiplugininstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aiplugintitle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aipluginusersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_aiskillconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_annotation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appaction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appactionmigration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appactionrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appelement: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_application: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_applicationuser: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appointment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_appusersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_attributemaskingrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bookableresource: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bookableresourcebooking: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bookableresourcebookingheader: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bookableresourcecategory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bookableresourcecategoryassn: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bookableresourcecharacteristic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bookableresourcegroup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bookingstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bot: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_botcomponent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_botcomponentcollection: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_businessunit: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_businessunitnewsarticle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_c360_configuration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_campaign: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_campaignactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_campaignresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_card: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_catalog: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_catalogassignment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_certificatecredential: string;
			/** Unique ID of the object associated with the dialog session */
			readonly channelaccessprofile_processsession: string;
			/** Unique ID of the object associated with the dialog session */
			readonly profileid: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_characteristic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_chat: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_comment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_competitor: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_connection: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_connectioninstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_connectionreference: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_connectionrole: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_connector: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_constraintbasedgroup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_contact: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_contract: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_contractdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_contracttemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_conversationtranscript: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_convertrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_copilotsynonyms: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_credential: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_customapi: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_customeraddress: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_customeropportunityrole: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_customerrelationship: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_datalakefolder: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_delegatedauthorization: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_deleteditemreference: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_desktopflowbinary: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_desktopflowmodule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_discount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_discounttype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_dvfilesearch: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_dvtablesearch: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_email: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_entitlement: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_entitlementchannel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_entitlemententityallocationtypemapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_entitlementtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_entityrecordfilter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_equipment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_expiredprocess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_exportedexcel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Unique ID of the object associated with the dialog session */
			readonly externalparty_processsession: string;
			/** Unique ID of the object associated with the dialog session */
			readonly externalpartyitem_processsession: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_fabricaiskill: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_fax: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_flowevent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_flowmachine: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_flowmachineimage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_fxexpression: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_goal: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_goalrollupquery: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_governanceconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_holidaywrapper: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_incident: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_invoice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_invoicedetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_kbarticle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_kbarticlecomment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_kbarticletemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_keyvaultreference: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_knowledgearticle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_knowledgearticleincident: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_knowledgebaserecord: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_lead: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_leadtoopportunitysalesprocess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_letter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_list: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_listoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mailbox: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mailmergetemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mainfewshot: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_makerfewshot: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_managedidentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_marketingformdisplayattributes: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_maskingrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_metadataforarchival: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_metric: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_activitymappingmetadatabase: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_additionalentityinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_aibuildercallbacktesthook: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_aibuildermodelmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_analysisinstanceconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_analysismetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_azuremlwebservice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_businessunitconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_cdsamodelmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_clusterloadmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_conflationcriteriastatistics: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_conflationmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_conflationrun: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_conflationstatistics: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_consentsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_dataflowmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_datapreparationmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_dataqualityfeaturewisemetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_dataqualityoverview: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_dataqualityreport: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_datasetcatalog: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_datasourcemetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_datatroubleshootingaccess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_derivedentitymetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_diagnosticsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_discoveredcdsamodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_discoveryoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_enrichmentmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_enrichmentrun: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_entityfiltermetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_exportconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_exportconfigreport: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_exportedmoduleconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_exportsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_featuretemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_graphmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_hierarchymetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_hostloadmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_importexportstatusmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_insightmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_insightsdataqualityreport: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_instancemetrics: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_instancepartnercatalog: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_instancesearchconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_instancesettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_intelligenceworkflowmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_intelligenceworkflowrunmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_intelligenceworkspacemetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_keyvaultmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_lightcdsamodelmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_logicappssubscribermetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_mappedsecretmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_measuremetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_modelconfigmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_moduleconfigurationreference: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_notificationcheckpoint: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_packageimportmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_packagejobmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_packagemetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_platforminstancemapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_powerplatformconnector: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_powerplatformrefreshsignalmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_preenrichmentmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_profilestorestateinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_realtimeaggregatedstats: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_realtimem3configuration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_realtimem3searchconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_realtimepluginmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_realtimesystemtablemetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_realtimetablemetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_refreshhistorymetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_refreshschedulebase: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_refreshstatehistorymetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_relationshipmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_reportmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_resetinstancehistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_resourcemetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_runtimerealtimem3metadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_segmentmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_semanticentitymappingmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_sparkjobexecutionmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_templatedmeasuremetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_templatedsegmentmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_transformmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_addtocalendarstyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_appointmentactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_basestyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_buttonstyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_cdnconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_cdsaconnectorconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_codestyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_columnstyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_contentblock: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_contentblockstyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_contentsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_createleadactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_customerinsightsinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_customerjourney: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_customerjourneycustomchannelactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_customerjourneyiteration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_customerjourneyruntimestate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_customerjourneytemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_customerjourneyworkflowlink: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_defaultmarketingsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_delaydatetimeactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_delaydurationactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_deprecatedcustomtileactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_deprecatedeventactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_deprecatedformsprosurveyactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_deprecatedpageactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_designerfeatureavailability: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_digitalassetsconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_dividerstyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_emailkeypoint: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_featureconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_file: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_formpage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_formpagetemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_generalstyles: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_geopin: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_gpt3log: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_gwennolfeatureconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_gwennolspamscoreactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_gwennolspamscorerequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_imagestyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_keyword: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_launchworkflowactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_layoutstyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_leadentityfield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_leadscore: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_leadscoremodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_leadscore_v2: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_leadscoringconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_leadtoopportunity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinaudience: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedincampaign: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedincampaignactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinform: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinformanswer: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinformquestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_listform: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_liveentitydependency: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingdataimport: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingemail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingemailactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingemailtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingemailtest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingemailtestattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingfieldsubmission: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingform: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingformactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingformfield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingformsubmission: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingformtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingformwhitelistrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingpage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingpageconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_marketingpagetemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_matchingstrategy: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_matchingstrategyattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_migration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_mktactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_networkpage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_personalizedpage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_personalizedpagefield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_phonecallactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_portalsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_postingishts: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_qrcodestyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_quicksendemail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_quotainfoentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_reaction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_recordupdateactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_redirecturl: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_segment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_segmentactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_segmenttemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_setupdomain: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_socialpost: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_socialpostingconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_socialpostingconsent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_sourceactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_splitteractivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_tag: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_taskactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_taskactivitymarketingtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_textstyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_triggeractivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_uicconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_usergeoregion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_usersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_video: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_videostyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyncrm_website: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_aimodelversion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_apsconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_brandprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_brandsender: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_brandtheme: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_buttonstyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_byoacschannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_byoacschannelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_captcha: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_catalogeventstatusconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_cmsaddon: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_comparatormetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_compliancesettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_compliancesettings3: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_compliancesettings4: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_configuration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_consent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_consentcenterconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_consentprovider: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_consentproviderdefaultconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_consentproviderdefaultpurpose: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_consentproviderlocalization: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_consentsystemconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_contactpointconsent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_contactpointconsent2: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_contactpointconsent3: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_contactpointconsent4: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_contactpointsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_conversioneventdefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_createdentitylink: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_customchannelmessage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_customerdatamapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_customerdataselection: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_domain: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_email: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_emailtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_entitygradedistribution: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_entityscoredistribution: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_entityscoringmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_eventmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_eventparametermetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_experiment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_experimentv2: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_featureconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_formsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_formtargetaudience: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_fragment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_frequencycap: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_gdprrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_imagestyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_infobipchannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_infobipchannelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_journey: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_journeydependency: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_journeyevent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_journeyoptimizationcount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_journeyrunparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_journeysetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_journeytemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_journeyworkflowmapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_keyword: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_leadqualificationmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_linkmobilitychannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_marketingfieldsubmission: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_marketingform: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_marketingformfield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_marketingformsubmission: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_marketingformtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_matchingstrategy: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_matchingstrategyattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_metadataentityrelationship: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_metadataitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_metadatastorestate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_mobileapp: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_mobileappchannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_mobiledevice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_predefinedplaceholder: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_preferencecenter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_preferencecenterlink: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_purpose: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_pushdeviceregistrationresult: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_pushmobiledevice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_pushnotification: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_qrcodestyle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_quiettimesetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_recaptchaconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_segment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_segmentdefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_segmentexecution: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_segmentusage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_sms: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_submitbutton: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_tag: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_teamsengagement: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_telesignchannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_telesignchannelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_topic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_twiliochannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_twiliochannelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_utmtracking: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_vibeschannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_vibeschannelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdynmkt_webinaremailjourney: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_3dmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_accountkpiitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_actioncardactionstat: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_actioncardregarding: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_actioncardrolesetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_actioncardstataggregation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_activeicdextension: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_activityanalysiscleanupstate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_activityanalysisconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_actual: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_adaptivecardconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_adminappstate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentcapacityprofileunit: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentcapacityupdatehistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentchannelstate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentcopilotsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentgroup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentgroupmembership: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentresourceforecasting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agentstatushistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreement: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementbookingdate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementbookingincident: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementbookingproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementbookingservice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementbookingservicetask: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementbookingsetup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementinvoicedate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementinvoicesetup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_agreementsubstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aicontactsuggestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aievent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_analytics: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_analyticsadminsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_analyticsforcs: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_apirequestcache: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_apirequestfolder: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_appconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_appcopilotconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_applicationextension: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_applicationtabtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_appprofilerolemapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_appstate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_assetcategorytemplateassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_assetsuggestionssetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_assettemplateassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_assignmentconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_assignmentconfigurationstep: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_assignmentmap: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_assignmentrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_attribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_attributeinfluencestatistics: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_attributevalue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_authenticationsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_authsettingsentry: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_autocapturerule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_autocapturesettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_autonomouscasecreationrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookableresourceassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookingalert: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookingalertstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookingchange: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookingjournal: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookingrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookingsetupmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bookingtimestamp: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_botsession: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_businessclosure: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_callablecontext: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_cannedmessage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_capacityprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_caseenrichment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_casefollowupandclosureconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_casesuggestionrequestpayload: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_casetopic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_casetopicsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_casetopicsummary: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_casetopic_incident: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_cdsentityengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channelcapability: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channeldefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channeldefinitionconsent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channeldefinitionlocale: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channelinstancesecret: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channelmessageattachment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channelmessagecontextpart: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channelmessagepart: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_channelprovider: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_chatansweroption: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_chatquestionnaireresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_chatwidgetlanguage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ciprovider: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_clientextension: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_collabgraphresource: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_collabspaceteamassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_configuration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_consoleapplicationtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_consoleapplicationtype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_consoleappparameterdefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_consumingapplication: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_contactkpiitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_contactsuggestionrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_contactsuggestionruleset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationaction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationactionitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationactionlocale: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationaggregatedinsights: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationcomment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationdata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationinsight: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationmessageblock: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationparticipantinsights: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationparticipantsentiment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationquestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationsegmentsentiment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationsentiment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationsignal: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationsubject: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationsummaryinteraction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationsummarysetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationsummarysuggestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationsystemtag: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationtag: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationtopic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationtopicsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationtopicsummary: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_conversationtopic_conversation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_copilotagentpreference: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_copilotinteraction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_copilotinteractiondata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_copilotinteractions: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_copilotknowledgeinteraction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_copilotsummarizationsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_copilottranscript: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_copilottranscriptdata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_crmconnection: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_csadminconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_cskeyvalueconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customapirulesetconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customerasset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customerassetattachment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customerassetcategory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customeremailcommunication: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customerfeedbacksurvey: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customerfeedbacksurveyinvite: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_customerfeedbacksurveyresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dailyaccountkpiitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dailycontactkpiitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dailyleadkpiitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dailyopportunitykpiitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsdataset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_copilot: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fs: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_mc: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_mkt: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc_rt: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sareporting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataanalyticsworkspace: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_databaseversion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_datahygienesettinginfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dealmanageraccess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dealmanagersettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_decisioncontract: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_decisionruleset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_defextendedchannelinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_defextendedchannelinstanceaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_deletedconversation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_derivedinsightsrelatedentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_digitalsellingactivetask: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_digitalsellingcompletedtask: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_distributedlock: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_duplicateleadmapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_effortpredictionresult: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entitlementapplication: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityattachment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityattributepredictionrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityderivedinsight: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityrankingrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityroutingconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_entityworkstreammap: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_extendedusersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_externalcrm: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_externalrecord: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_facebookengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_fieldservicepricelistitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_fieldservicesetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_fieldservicesummaryconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_fieldservicesystemjob: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flowcardtype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_flwconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_forecastconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_forecastdefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_forecastingcache: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_forecastinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_forecastpredictionstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_forecastrecurrence: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_forecastsettingsandsummary: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_formmapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_function: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_functionallocation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_functionallocationtype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_gdprdata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_geofence: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_geofenceevent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_geofencingsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_geolocationsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_geolocationtracking: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_historicalcaseharvestbatch: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_historicalcaseharvestrun: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_icdextension: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_icebreakersconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iermlmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iermltraining: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inboxcardconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inboxconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inboxentityconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttypeproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttyperecommendationresult: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttyperesolution: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttypeservice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttypeservicetask: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttypessetup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_incidenttype_requirementgroup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inspection: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inspectionattachment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inspectiondefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inspectioninstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inspectionresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_insurance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentattributeset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentattribute_entity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intententity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentfamily: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentfeature_configuration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentgroupcondition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentharvesting_batchjobstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentharvesting_provisioning_status: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentsolutionmap: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_intentsolution_mappingconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inventoryadjustment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inventoryjournal: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_inventorytransfer: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotalert: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotdevice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotdevicecategory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotdevicecommand: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotdevicecommanddefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotdevicedatahistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotdeviceproperty: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotfieldmapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotpropertydefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotprovider: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotproviderinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iotsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_iottocaseprocess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_kbenrichment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgeharvestjobrecord: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_kpieventdata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_kpieventdefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_leadhygienesetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_leadkpiitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_leadmodelconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_lineengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_linkedentityattributevalidity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_livechatconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_livechatengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_livechatwidgetlocation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_liveconversation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_liveworkitemevent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_liveworkstream: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_localizedsurveyquestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_locationtemplateassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_locationtypetemplateassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_lockstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_macrosession: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_maskingrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_masterentityroutingconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_migrationtracker: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_mobilesource: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_modelpreviewstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_mostcontacted: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_mostcontactedby: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_msteamssetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_msteamssettingsv2: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_nextaction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_notesanalysisconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_notificationfield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_notificationtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_nottoexceed: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocagentassignedcustomapiprivilege: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocapplebusinessaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocapplepay: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocautoblockrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocautomatedactionrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocautomatedactionrulesmapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocbotchannelregistration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocbotchannelregistrationsecret: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occarrier: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occhannelapimessageprivilege: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occhannelapimethodmapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occhannelconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occhannelstateconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occommunicationprovidersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_occustommessagingchannel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocexternalcontext: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocfbapplication: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocfbpage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocflaggedspam: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocgatekeeperengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_oclanguage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_oclinechannelconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocliveworkitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocliveworkitemparticipant: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocliveworkitemsentiment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_oclocalizationdata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocoutboundconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocoutboundmessage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocpaymentprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocphonecallengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocphonemusic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocphonenumber: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocprovisioningstate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocrecording: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocrichobject: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocrichobjectmap: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocruleitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsentimentdailytopic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsession: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsessioncharacteristic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsessionparticipantevent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsessionsentiment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsimltraining: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsitdimportconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsitdskill: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsitrainingdata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocskillidentmlmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsmschannelsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsmssettingsecret: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocsystemmessage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_octag: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_octeamschannelconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_octwitterapplication: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_octwitterhandle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_octwitterhandleprovisioningstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_octwitterhandlesecret: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocvoice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocvoicechannellanguagesetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocvoicechannelsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocvoicemail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocwechatchannelconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_oc_geolocationprovider: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_odosfeaturemetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_odosmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_omnichannelconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_omnichannelpersonalization: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_omnichannelqueue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_omnichannelsyncconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_operatinghour: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_opportunitykpiitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_opportunitymodelconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_orderinvoicingdate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_orderinvoicingproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_orderinvoicingsetup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_orderinvoicingsetupdate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_organizationalunit: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_orgchartnode: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_originatingqueue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_overflowactionconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_paneconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_panetabconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_panetoolconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_payment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_paymentdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_paymentmethod: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_paymentterm: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_personalmessage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_personalsoundsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_personasecurityrolemapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_playbookactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_playbookactivityattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_playbookcategory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_playbookinstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_playbooktemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_pmview: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_postalbum: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_postalcode: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_postconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_postruleconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_predictioncomputationoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_predictionmodelstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_predictionscheduledoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_predictivemodelscore: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_predictivescore: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_predictivescoringsyncstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_predictworkhourdurationsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_preferredagent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_preferredagentcustomeridentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_preferredagentroutedentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_presence: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_priority: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_problematicasset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_problematicassetfeedback: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productinventory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productivityactioninputparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productivityactionoutputparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productivityagentscript: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productivityagentscriptstep: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productivitymacroactiontemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productivitymacroconnector: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_productivityparameterdefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_property: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_propertyassetassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_propertylocationassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_propertylog: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_propertytemplateassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_provider: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_purchaseorder: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_purchaseorderbill: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_purchaseorderproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_purchaseorderreceipt: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_purchaseordersubstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_questionsequence: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_quotebookingincident: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_quotebookingproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_quotebookingservice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_quotebookingservicetask: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_quotebookingsetup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_quoteinvoicingproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_quoteinvoicingsetup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rawinsightentitylink: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_readtrackingenabledinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_realtimescoring: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_realtimescoringoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_recomputetracker: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_recording: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_recurringsalesaction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_recurringsalesactionv2: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_relationshipanalyticsmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_reportbookmark: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementchange: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementcharacteristic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementdependency: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementgroup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementorganizationunit: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementrelationship: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementresourcecategory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementresourcepreference: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_requirementstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_resolution: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_resourcepaytype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_resourcerequirement: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_resourcerequirementdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_resourceterritory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rma: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rmaproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rmareceipt: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rmareceiptproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rmasubstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_routingconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_routingconfigurationstep: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_routingrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_routingrulesetsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rtv: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rtvproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rtvsubstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_rulesetdependencymapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sabackupdiagnostic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sabatchruninstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesaccelerationinsight: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesaccelerationsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesassignmentsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salescopilotinsight: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salescopilotorgsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salescopilotusersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesinsightssettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesocmessage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesocsmstemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesroutingdiagnostic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salesroutingrun: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salessuggestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_salestag: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_saruninstance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_scenario: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_schedule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_scheduleboardsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_schedulingfeatureflag: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_schedulingparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_schedulingscope: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sciconversation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_scicustomemailhighlight: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_scicustomhighlight: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_scicustompublisher: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_scienvironmentsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sciusersettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_searchconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_segment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_segmentationsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_segmentattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_segmentcatalogue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sentimentanalysis: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sequence: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sequencestat: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sequencetarget: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sequencetargetstep: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sequencetemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_servicecopilotplugin: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_servicecopilotpluginaction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_servicecopilotpluginrole: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_serviceoneprovisioningrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_servicetasktype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sessiondata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sessionevent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sessionparticipant: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sessionparticipantdata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sessiontemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_shareasconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_shipvia: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_siconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_sikeyvalueconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_similarentitiesfeatureimportance: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_skillattachmentruleitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_skillattachmenttarget: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_smartassistconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_smsengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_smsnumber: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_soundfile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_soundnotificationsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_submodeldefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_suggestionassignmentrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_suggestioninteraction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_suggestionprincipalobjectaccess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_suggestionrequestpayload: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_suggestionsellerpriority: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_suggestionsmodelsummary: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_suggestionssetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_surveyconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_surveyquestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_surveysetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_swarm: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_swarmparticipant: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_swarmparticipantrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_swarmrole: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_swarmskill: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_swarmtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_systemuserschedulersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_taggedrecord: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_taxcode: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_taxcodedetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_teamschannelengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_teamschatassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_teamschatsuggestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_teamscollaboration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_teamsdialeradminsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_teamsengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_templateforproperties: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_templateparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_templateruleset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_templatetags: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_timeentry: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_timeentrysetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_timegroup: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_timegroupdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_timeoffrequest: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_timespent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_tour: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_trade: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_tradecoverage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_trainingresult: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_transactionorigin: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_transcript: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_twitterengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_unifiedroutingrun: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_uniquenumber: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_untrackedappointment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_upgraderun: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_upgradestep: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_upgradeversion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_urnotificationtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_urnotificationtemplatemapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_usagemetric: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_usagereporting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_usersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_visitorjourney: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_vivacustomerlist: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_vivaentitysetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_vivaorgextensioncred: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_vivaorgsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_vivausersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_voicechannelorganizationsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_wallsavedquery: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_wallsavedqueryusersettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_warehouse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_warranty: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_wechatengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_whatsappengagementctx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_wkwcolleaguesforcompany: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_wkwcolleaguesforcontact: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_wkwconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workhourtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_worklistviewconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workorder: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workordercharacteristic: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workorderincident: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workordernte: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workorderproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workorderresolution: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workorderresourcerestriction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workorderservice: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workorderservicetask: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workordersubstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workordertype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workqueuestate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workqueueusersetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msdyn_workstreamhmmigrationstatus: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_attendeepass: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_authenticationsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_bucket: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_building: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_checkin: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_customregistrationfield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_entitycounter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_event: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventadministration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventanalytics: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventcustomregistrationfield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventmanagementactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventmanagementconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventpurchase: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventpurchasecontact: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventpurchasepass: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventregistration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventregistrationticket: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventteammember: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventteamsproperties: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_eventvendor: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_file: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_hotel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_hotelroomallocation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_hotelroomreservation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_layout: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_pass: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_registrationresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_room: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_roomreservation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_session: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_sessionregistration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_sessiontrack: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_speaker: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_speakerengagement: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_sponsorablearticle: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_sponsorship: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_usertokencache: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_venue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_waitlistitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_webapplication: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_webinarconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_webinarconsent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_webinarprovider: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_webinartype: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msevtmgt_websiteentityconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_alert: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_alertrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_emailtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_fileresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_localizedemailtemplate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_project: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_question: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_questionresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_satisfactionmetric: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_survey: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_surveyinvite: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_surveyreminder: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_surveyresponse: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msfp_unsubscribedrecipient: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msgdpr_gdprconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msgdpr_gdprconsentchangerecord: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_newprocess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_opportunity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_opportunityproduct: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_opportunitysalesprocess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_organizationsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_package: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_packagehistory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_pdfsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_phonecall: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_phonetocaseprocess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_plannersyncaction: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_plugin: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_position: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerbidataset: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerbireport: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerbireportapdx: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerfxrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerpagecomponent: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerpagesite: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerpagesmanagedidentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_pricelevel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_processstageparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_product: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_productassociation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_productpricelevel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_productsubstitute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_queue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_queueitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_quote: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_quotedetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_ratingmodel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_ratingvalue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_reconciliationinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_recordfilter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_recyclebinconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_relationshiprole: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_report: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_reportparameter: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_retaineddataexcel: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_retentionconfig: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_retentionoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_retentionsuccessdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_roleeditorlayout: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_rollupfield: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_routingrule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_routingruleitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_salesliterature: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_salesliteratureitem: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_salesorder: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_salesorderdetail: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_searchattributesettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_service: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_serviceappointment: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_serviceplan: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_serviceplancustomcontrol: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_settingdefinition: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_sharedobject: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_sharedworkspace: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_sharepointdocumentlocation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_sharepointsite: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_site: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_sla: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_socialactivity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_socialprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_stagedentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_stagedentityattribute: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_subject: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_supportusertable: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_synapsedatabase: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_systemuser: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_task: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_tdsmetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_team: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_template: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_territory: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_theme: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_transactioncurrency: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_translationprocess: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_usermapping: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_userrating: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_workflowbinary: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_workqueue: string;
			/** Unique ID of the object associated with the dialog session */
			readonly regardingobjectid_workqueueitem: string;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}
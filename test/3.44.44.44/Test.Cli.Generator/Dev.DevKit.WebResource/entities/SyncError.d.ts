//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSync_Error {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the sync error. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the sync error status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Details_Sections {
		}
		interface tab_General_Tab_Sections {
			SYNCERROR_INFORMATION: DevKit.Controls.Section;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_General_Tab extends DevKit.Controls.ITab {
			Section: tab_General_Tab_Sections;
		}
		interface Tabs {
			Details: tab_Details;
			General_Tab: tab_General_Tab;
		}
		interface Body {
			Tab: Tabs;
			/** Action Name for which sync error has occurred */
			Action: DevKit.Controls.String;
			/** Enter a short description of the sync error. */
			Description: DevKit.Controls.String;
			/** Displays the error code. */
			ErrorCode: DevKit.Controls.String;
			/** Error description from the exception */
			ErrorDetail: DevKit.Controls.String;
			/** Error Message of the exception */
			ErrorMessage: DevKit.Controls.String;
			/** Date and time when the upsync request was executed on CRM server */
			ErrorTime: DevKit.Controls.DateTime;
			/** Select the preferred error type. */
			ErrorType: DevKit.Controls.OptionSet;
			/** Entity name of the record for which sync error has occurred */
			Name: DevKit.Controls.String;
			/** Choose the record that the sync error relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormSync_Error extends DevKit.IForm {
		/**
		* Sync Error [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sync_Error */
		Body: DevKit.FormSync_Error.Body;
		/** The Header section of form Sync_Error */
		Header: DevKit.FormSync_Error.Header;
		/** The Navigation of form Sync_Error */
		Navigation: DevKit.FormSync_Error.Navigation;
		/** The SidePanes of form Sync_Error */
		SidePanes: DevKit.SidePanes;
	}
	class SyncErrorApi {
		/**
		* DynamicsCrm.DevKit SyncErrorApi
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
		/** Action Name for which sync error has occurred */
		Action: string;
		/** Show the action data */
		ActionData: string;
		/** Unique identifier of the user who created the sync error. */
		readonly CreatedBy: string;
		/** Date and time when the sync Error was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sync error. */
		readonly CreatedOnBehalfBy: string;
		/** Enter a short description of the sync error. */
		Description: string;
		/** Displays the error code. */
		ErrorCode: string;
		/** Error description from the exception */
		ErrorDetail: string;
		/** Error Message of the exception */
		ErrorMessage: string;
		/** Date and time when the upsync request was executed on CRM server */
		ErrorTime_UtcDateAndTime: Date;
		/** Select the preferred error type. */
		ErrorType: OptionSet.SyncError.ErrorType;
		/** Unique identifier of the user who last modified the sync error. */
		readonly ModifiedBy: string;
		/** Date and time when the sync error was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sync error. */
		readonly ModifiedOnBehalfBy: string;
		/** Entity name of the record for which sync error has occurred */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Business unit that owns the sync error. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the sync error. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the sync error. */
		readonly OwningUser: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activityfileattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activitymimeattachment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activitymonitor: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activityparty_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adminsettingsentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adx_externalidentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adx_invitation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adx_inviteredemption: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adx_portalcomment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adx_setting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adx_webformsession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aicopilot: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aiplugin: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginauth: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginconversationstarter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginconversationstartermapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginexternalschema: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginexternalschemaproperty: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aiplugingovernance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aiplugingovernanceext: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aiplugininstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginoperationparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginoperationresponsetemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aiplugintitle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aipluginusersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_aiskillconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_annotation_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appactionmigration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appactionrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appelement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_application: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_applicationuser: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appmodulecomponentedge: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appmodulecomponentnode: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appointment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appusersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_archivecleanupinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_archivecleanupoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attachment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attributeimageconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attributemaskingrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresource_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebooking_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebookingheader_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecategory_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecategoryassn_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecharacteristic_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcegroup_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookingstatus_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bot: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_botcomponent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_botcomponentcollection: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkarchiveconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkarchivefailuredetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkarchiveoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkarchiveoperationdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkoperation_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkoperationlog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_businessdatalocalizedlabel_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_businessunit_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_c360_configuration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaign_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaignactivity_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaignresponse_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_canvasappextendedmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_card: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_catalog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_catalogassignment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_category_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_certificatecredential: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofile_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofilerule_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofileruleitem_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_characteristic_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_chat: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_childincidentcount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_comment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_commitment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_competitor_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_competitoraddress_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connection_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connectioninstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connectionreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connectionrole_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connector: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_constraintbasedgroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contact_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contract_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contractdetail_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contracttemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_conversationtranscript: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_copilotexamplequestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_copilotglossaryterm: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_copilotsynonyms: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_credential: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapi: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapirequestparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapiresponseproperty: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customeraddress_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customeropportunityrole_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakefolder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakefolderpermission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakeworkspace: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakeworkspacepermission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dataprocessingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_delegatedauthorization: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_deleteditemreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_desktopflowbinary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_desktopflowmodule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_discount_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_discounttype_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_duplicaterule_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_duplicaterulecondition_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dvfilesearch: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dvfilesearchattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dvfilesearchentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dvtablesearch: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dvtablesearchattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dvtablesearchentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicproperty: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyoptionsetitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_email_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_emailserverprofile_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_enablearchivalrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlement_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementchannel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlemententityallocationtypemapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementtemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementtemplatechannel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityanalyticsconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityimageconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityindex: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityrecordfilter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_environmentvariabledefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_environmentvariablevalue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_equipment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ExpiredProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_exportedexcel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_exportsolutionupload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_externalparty_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_externalpartyitem_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fabricaiskill: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fax_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_featurecontrolsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_federatedknowledgeconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_feedback_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fieldpermission_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fieldsecurityprofile_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fileattachment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowcapacityassignment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowcredentialapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachine: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachinegroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachineimage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachineimageversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachinenetwork: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowsession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fxexpression: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_goal_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_goalrollupquery_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_governanceconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_holidaywrapper: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_importmap_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_incident_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_incidentresolution_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_indexattributes: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_internaladdress_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_internalcatalogassignment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_invoice_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_invoicedetail_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_kbarticle_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_kbarticletemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_keyvaultreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticle_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticleincident_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticleviews_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgebaserecord_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_lead_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_leadaddress_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_LeadToOpportunitySalesProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_letter_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_list_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_listoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mailbox_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mailmergetemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mainfewshot: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_makerfewshot: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_managedidentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_marketingformdisplayattributes: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_maskingrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_metadataforarchival: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_metric_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mobileofflineprofileextension: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_activitymappingmetadatabase: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_additionalentityinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_aibuildercallbacktesthook: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_aibuildermodelmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_analysisinstanceconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_analysismetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_azuremlwebservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_businessunitconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_cdsamodelmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_clusterloadmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_conflationcriteriastatistics: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_conflationmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_conflationrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_conflationstatistics: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_consentsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_dataflowmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_datapreparationmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_dataqualityfeaturewisemetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_dataqualityoverview: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_dataqualityreport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_datasetcatalog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_datasourcemetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_datatroubleshootingaccess: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_derivedentitymetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_diagnosticsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_discoveredcdsamodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_discoveryoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_enrichmentmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_enrichmentrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_entityfiltermetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_exportconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_exportconfigreport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_exportedmoduleconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_exportsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_featuretemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_graphmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_hierarchymetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_hostloadmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_importexportstatusmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_insightmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_insightsdataqualityreport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_instancemetrics: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_instancepartnercatalog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_instancesearchconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_instancesettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_intelligenceworkflowmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_intelligenceworkflowrunmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_intelligenceworkspacemetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_keyvaultmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_lightcdsamodelmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_logicappssubscribermetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_mappedsecretmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_measuremetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_modelconfigmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_moduleconfigurationreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_notificationcheckpoint: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_packageimportmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_packagejobmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_packagemetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_platforminstancemapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_powerplatformconnector: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_powerplatformrefreshsignalmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_preenrichmentmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_profilestorestateinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_realtimeaggregatedstats: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_realtimem3configuration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_realtimem3searchconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_realtimepluginmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_realtimesystemtablemetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_realtimetablemetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_refreshhistorymetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_refreshschedulebase: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_refreshstatehistorymetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_relationshipmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_reportmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_resetinstancehistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_resourcemetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_runtimerealtimem3metadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_segmentmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_semanticentitymappingmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_sparkjobexecutionmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_templatedmeasuremetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_templatedsegmentmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_transformmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynce_botcontent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_addtocalendarstyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_appointmentactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_basestyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_buttonstyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_cdnconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_cdsaconnectorconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_codestyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_columnstyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_contentblock: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_contentblockstyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_contentsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_createleadactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_customerinsightsinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_customerjourney: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_customerjourneycustomchannelactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_customerjourneyiteration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_customerjourneyruntimestate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_customerjourneytemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_customerjourneyworkflowlink: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_defaultmarketingsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_delaydatetimeactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_delaydurationactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_deprecatedcustomtileactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_deprecatedeventactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_deprecatedformsprosurveyactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_deprecatedpageactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_designerfeatureavailability: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_digitalassetsconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_dividerstyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_emailkeypoint: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_featureconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_file: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_formpage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_formpagetemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_generalstyles: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_geopin: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_gpt3log: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_gwennolfeatureconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_gwennolspamscoreactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_gwennolspamscorerequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_imagestyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_keyword: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_launchworkflowactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_layoutstyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_leadentityfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_leadscore: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_leadscoremodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_leadscore_v2: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_leadscoringconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_leadtoopportunity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinaudience: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedincampaign: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedincampaignactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinfieldmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinform: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinformanswer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinformquestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinformsubmission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_linkedinuserprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_listform: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_liveentitydependency: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingdataimport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingemail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingemailactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingemailtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingemailtest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingemailtestattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingemailtestsend: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingfieldsubmission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingform: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingformactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingformfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingformsubmission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingformtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingformwhitelistrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingpage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingpageconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_marketingpagetemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_matchingstrategy: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_matchingstrategyattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_migration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_mktactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_networkpage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_personalizedpage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_personalizedpagefield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_phonecallactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_portalsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_postingishts: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_qrcodestyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_quicksendemail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_quotainfoentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_reaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_recordupdateactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_redirecturl: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_segment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_segmentactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_segmenttemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_setupdomain: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_socialpost: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_socialpostingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_socialpostingconsent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_sourceactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_splitteractivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_tag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_taskactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_taskactivitymarketingtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_textstyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_triggeractivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_uicconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_usergeoregion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_usersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_video: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_videostyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyncrm_website: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_aimodelversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_apsconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_brandprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_brandsender: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_brandtheme: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_buttonstyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_byoacschannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_byoacschannelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_captcha: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_catalogeventstatusconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_cmsaddon: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_comparatormetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_compliancesettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_compliancesettings3: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_compliancesettings4: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_configuration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_consent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_consentcenterconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_consentprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_consentproviderdefaultconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_consentproviderdefaultpurpose: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_consentproviderlocalization: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_consentsystemconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_contactpointconsent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_contactpointconsent2: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_contactpointconsent3: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_contactpointconsent4: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_contactpointsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_conversioneventdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_createdentitylink: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_customchannelmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_customerdatamapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_customerdataselection: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_domain: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_email: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_emailtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_entitygradedistribution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_entityscoredistribution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_entityscoringmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_eventmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_eventparametermetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_experiment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_experimentv2: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_featureconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_formsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_formtargetaudience: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_fragment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_frequencycap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_gdprrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_imagestyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_infobipchannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_infobipchannelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_journey: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_journeydependency: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_journeyevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_journeyoptimizationcount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_journeyrunparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_journeysetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_journeytemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_journeyworkflowmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_keyword: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_leadqualificationmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_linkmobilitychannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_marketingfieldsubmission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_marketingform: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_marketingformfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_marketingformsubmission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_marketingformtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_matchingstrategy: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_matchingstrategyattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_metadataentityrelationship: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_metadataitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_metadatastorestate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_mobileapp: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_mobileappchannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_mobiledevice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_mocksmsproviderchannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_predefinedplaceholder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_preferencecenter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_preferencecenterlink: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_purpose: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_pushdeviceregistrationresult: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_pushmobiledevice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_pushnotification: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_qrcodestyle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_quiettimesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_recaptchaconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_segment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_segmentdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_segmentexecution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_segmentusage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_sms: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_submitbutton: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_tag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_teamsengagement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_telesignchannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_telesignchannelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_topic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_twiliochannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_twiliochannelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_utmtracking: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_vibeschannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_vibeschannelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynmkt_webinaremailjourney: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_3dmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_accountkpiitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actioncardactionstat: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actioncardregarding: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actioncardrolesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actioncardstataggregation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_activeicdextension: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_activityanalysiscleanupstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_activityanalysisconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actual: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_adaptivecardconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_adminappstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentcapacityprofileunit: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentcapacityupdatehistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentchannelstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentcopilotsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentgroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentgroupmembership: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentresourceforecasting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentstatushistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingdate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingincident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingsetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoicedate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementsubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdataset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibfile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aicontactsuggestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aievent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aimodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodimage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodlabel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aitemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisjob: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisoverride: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisresult: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analytics: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analyticsadminsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analyticsforcs: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_apirequestcache: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_apirequestfolder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_appconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_appcopilotconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_appinsightsmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_applicationextension: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_applicationtabtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_appprofilerolemapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_appstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assetcategorytemplateassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assetsuggestionssetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assettemplateassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentconfigurationstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentmap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_attribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_attributeinfluencestatistics: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_attributevalue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_authenticationsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_authsettingsentry: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_autocapturerule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_autocapturesettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_autonomouscasecreationrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourceassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingalert: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingalertstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingchange: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingjournal: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingsetupmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingtimestamp: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_botsession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_businessclosure: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_callablecontext: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_cannedmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_capacityprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_caseenrichment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casefollowupandclosureconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casesuggestionrequestpayload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopicsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopicsummary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopic_incident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_cdsentityengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelcapability: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channeldefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channeldefinitionconsent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channeldefinitionlocale: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelinstancesecret: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelmessageattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelmessagecontextpart: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelmessagepart: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatansweroption: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatwidgetlanguage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ciprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_clientextension: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_collabgraphresource: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_collabspaceteamassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_configuration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleappparameterdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consumingapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contactkpiitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contactsuggestionrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contactsuggestionruleset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationactionitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationactionlocale: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationaggregatedinsights: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationcomment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationinsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationmessageblock: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationparticipantinsights: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationparticipantsentiment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationquestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsegmentsentiment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsentiment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsignal: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsubject: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsummaryinteraction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsummarysetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsummarysuggestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsystemtag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopicsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopicsummary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopic_conversation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_copilotagentpreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_copilotinteraction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_copilotinteractiondata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_copilotinteractions: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_copilotknowledgeinteraction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_copilotsummarizationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_copilottranscript: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_copilottranscriptdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_crmconnection: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_csadminconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_cskeyvalueconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customapirulesetconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerasset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerassetattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerassetcategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customeremailcommunication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerfeedbacksurvey: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerfeedbacksurveyinvite: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerfeedbacksurveyresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dailyaccountkpiitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dailycontactkpiitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dailyleadkpiitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dailyopportunitykpiitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsdataset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_copilot: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fs: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_mc: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_mkt: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_oc: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_oc_rt: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_sareporting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsworkspace: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_databaseversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataflow: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataflowtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_datahygienesettinginfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dealmanageraccess: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dealmanagersettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_decisioncontract: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_decisionruleset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_defextendedchannelinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_defextendedchannelinstanceaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_deletedconversation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_derivedinsightsrelatedentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_digitalsellingactivetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_digitalsellingcompletedtask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_distributedlock: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dmsrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dmsrequeststatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dmssyncrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dmssyncstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_duplicateleadmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_effortpredictionresult: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entitlementapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityattributepredictionrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityderivedinsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityrankingrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityroutingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityworkstreammap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_extendedusersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_externalcrm: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_externalrecord: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_facebookengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicepricelistitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicesummaryconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicesystemjob: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fileupload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flowcardtype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_approval: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_approvalrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_approvalresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_approvalstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flow_flowapproval: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flwconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastingcache: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastpredictionstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastrecurrence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastsettingsandsummary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_formmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_function: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_functionallocation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_functionallocationtype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_gdprdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofenceevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofencingsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geolocationsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geolocationtracking: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_helppage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_historicalcaseharvestbatch: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_historicalcaseharvestrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_icdextension: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_icebreakersconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iermlmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iermltraining: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inboxcardconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inboxconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inboxentityconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperecommendationresult: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperesolution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeservicetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypessetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspection: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectionattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectiondefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectioninstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectionresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_insurance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_integratedsearchprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentattributeset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentattribute_entity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intententity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentfamily: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentfeature_configuration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentgroupcondition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentharvesting_batchjobstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentharvesting_provisioning_status: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentsolutionmap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_intentsolution_mappingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryadjustment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryjournal: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventorytransfer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotalert: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecommand: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicedatahistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdeviceproperty: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotfieldmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotpropertydefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotproviderinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iottocaseprocess: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kbattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kbenrichment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgeharvestjobrecord: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kpieventdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kpieventdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_leadhygienesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_leadkpiitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_leadmodelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_lineengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_linkedentityattributevalidity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatwidgetlocation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveconversation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkitemevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkstream: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_localizedsurveyquestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_locationtemplateassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_locationtypetemplateassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_lockstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_macrosession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_maskingrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_masterentityroutingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_migrationtracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_mobileapp: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_mobilesource: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_modelpreviewstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_modulerundetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_mostcontacted: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_mostcontactedby: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_msteamssetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_msteamssettingsv2: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_nextaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notesanalysisconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notificationfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notificationtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_nottoexceed: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocagentassignedcustomapiprivilege: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocapplebusinessaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocapplepay: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocautoblockrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocautomatedactionrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocautomatedactionrulesmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocbotchannelregistration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocbotchannelregistrationsecret: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occarrier: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelapimessageprivilege: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelapimethodmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelstateconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occommunicationprovidersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occustommessagingchannel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocexternalcontext: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocfbapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocfbpage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocflaggedspam: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocgatekeeperengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclanguage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclinechannelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclocalizationdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocoutboundconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocoutboundmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocpaymentprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocphonecallengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocphonemusic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocphonenumber: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocprovisioningstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocrecording: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocrichobject: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocrichobjectmap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocruleitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsessioncharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsessionparticipantevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsessionsentiment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsimltraining: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitdimportconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitdskill: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitrainingdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocskillidentmlmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsmschannelsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsmssettingsecret: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsystemmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octeamschannelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octwitterapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octwitterhandle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octwitterhandleprovisioningstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octwitterhandlesecret: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocvoice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocvoicechannellanguagesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocvoicechannelsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocvoicemail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwechatchannelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oc_geolocationprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_odosfeaturemetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_odosmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelpersonalization: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelqueue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelsyncconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_operatinghour: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitykpiitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitymodelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingdate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingsetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_organizationalunit: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orgchartnode: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_originatingqueue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_overflowactionconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paneconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_panetabconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_panetoolconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_payment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentmethod: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentterm: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personalmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personalsoundsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personasecurityrolemapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookactivityattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookcategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbooktemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmanalysishistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmcalendar: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmcalendarversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pminferredtask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmprocesstemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmprocessusersettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmprocessversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmrecording: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmsimulation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmview: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postalbum: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postalcode: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postruleconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictioncomputationoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictionmodelstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictionscheduledoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictivemodelscore: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictivescore: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictivescoringsyncstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictworkhourdurationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_preferredagent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_preferredagentcustomeridentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_preferredagentroutedentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_presence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_priority: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_problematicasset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_problematicassetfeedback: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productinventory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityactioninputparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityactionoutputparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityagentscript: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityagentscriptstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacroactiontemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacroconnector: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityparameterdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_property: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertyassetassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertylocationassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertylog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertytemplateassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_provider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderbill: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_questionsequence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingincident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingservicetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingsetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quoteinvoicingproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quoteinvoicingsetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rawinsightentitylink: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_readtrackingenabledinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_realtimescoring: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_realtimescoringoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_recomputetracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_recording: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_recurringsalesaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_recurringsalesactionv2: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_relationshipanalyticsmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_reportbookmark: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementchange: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementcharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementdependency: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementgroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementorganizationunit: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementrelationship: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementresourcecategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementresourcepreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resolution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcepaytype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcerequirement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcerequirementdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourceterritory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_richtextfile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rma: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmaproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmareceipt: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmareceiptproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmasubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingconfigurationstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingrulesetsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtv: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtvproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtvsubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rulesetdependencymapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sabackupdiagnostic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sabatchruninstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesaccelerationinsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesaccelerationsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesassignmentsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salescopilotinsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salescopilotorgsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salescopilotusersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesinsightssettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesocmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesocsmstemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesroutingdiagnostic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesroutingrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salessuggestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salestag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_saruninstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scenario: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_schedule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scheduleboardsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_schedulingfeatureflag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_schedulingparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_schedulingscope: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sciconversation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scicustomemailhighlight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scicustomhighlight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scicustompublisher: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scienvironmentsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sciusersettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_searchconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_segment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_segmentationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_segmentattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_segmentcatalogue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sentimentanalysis: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequencestat: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequencetarget: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequencetargetstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequencetemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_servicecopilotplugin: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_servicecopilotpluginaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_servicecopilotpluginrole: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_serviceoneprovisioningrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_servicetasktype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessiondata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionparticipant: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionparticipantdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessiontemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_shareasconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_shipvia: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_siconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sikeyvalueconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_similarentitiesfeatureimportance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_skillattachmentruleitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_skillattachmenttarget: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_slakpi: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smartassistconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smsengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smsnumber: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_soundfile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_soundnotificationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_submodeldefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionassignmentrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestioninteraction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionprincipalobjectaccess: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionrequestpayload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionsellerpriority: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionsmodelsummary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionssetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_surveyconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_surveyquestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_surveysetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_swarm: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_swarmparticipant: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_swarmparticipantrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_swarmrole: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_swarmskill: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_swarmtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_taggedrecord: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_taxcode: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_taxcodedetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamschannelengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamschatassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamschatsuggestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamscollaboration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamsdialeradminsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamsengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templateforproperties: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templateparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templateruleset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templatetags: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeentry: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeentrysetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timegroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timegroupdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeoffrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timespent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_tour: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_trade: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_tradecoverage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_trainingresult: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactionorigin: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transcript: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_twitterengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_uniquenumber: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_untrackedappointment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgraderun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgradestep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgradeversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_urnotificationtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_urnotificationtemplatemapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_usagemetric: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_usagereporting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_usersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_visitorjourney: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_vivacustomerlist: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_vivaentitysetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_vivaorgextensioncred: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_vivaorgsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_vivausersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_voicechannelorganizationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wallsavedquery: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_warehouse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_warranty: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wechatengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_whatsappengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wkwcolleaguesforcompany: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wkwcolleaguesforcontact: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wkwconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workflowactionstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workhourtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_worklistviewconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordercharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderincident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordernte: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderresolution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderservicetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordersubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordertype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workqueuestate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workqueueusersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workstreamhmmigrationstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_attendeepass: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_authenticationsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_bucket: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_building: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_checkin: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_customregistrationfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_entitycounter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_event: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventadministration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventanalytics: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventcustomregistrationfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventmanagementactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventmanagementconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventpurchase: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventpurchaseattendee: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventpurchasecontact: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventpurchasepass: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventregistration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventregistrationticket: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventteammember: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventteamsproperties: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_eventvendor: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_file: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_hotel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_hotelroomallocation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_hotelroomreservation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_layout: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_pass: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_registrationresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_room: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_roomreservation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_session: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_sessionregistration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_sessiontrack: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_speaker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_speakerengagement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_sponsorablearticle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_sponsorship: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_usertokencache: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_venue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_waitlistitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_webapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_webinarconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_webinarconsent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_webinarprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_webinartype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msevtmgt_websiteentityconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_alert: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_alertrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_emailtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_fileresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_localizedemailtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_project: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_question: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_questionresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_satisfactionmetric: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_survey: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyinvite: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyreminder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_unsubscribedrecipient: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msgdpr_gdprconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msgdpr_gdprconsentchangerecord: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msgraphresourcetosubscription: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mspcat_packagestore: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_NewProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_offlinecommanddefinition_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunity_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunityclose_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunityproduct_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_OpportunitySalesProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_orderclose_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organization_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncfnostate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_package: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_packagehistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_pdfsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_phonecall_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_PhoneToCaseProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_plannerbusinessscenario: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_plannersyncaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_plugin: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_pluginpackage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_position_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_postfollow_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerbidataset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerbidatasetapdx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerbimashupparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerbireport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerbireportapdx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerfxrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerpagecomponent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerpagesite: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerpagesitelanguage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerpagesitepublished: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerpagesmanagedidentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_powerpagesscanreport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_pricelevel_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_privilegecheckerlog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_privilegecheckerrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_privilegesremovalsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processsession_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processstage_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processstageparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processtrigger_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_product_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productassociation_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productpricelevel_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productsubstitute_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_provisionlanguageforuser: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_publisher_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_queue_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_queueitem_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quote_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quoteclose_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quotedetail_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ratingmodel_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ratingvalue_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_reconciliationentityinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_reconciliationentitystepinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_reconciliationinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_recordfilter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_recurringappointmentmaster_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_recyclebinconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_relationshipattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_report_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_reportcategory_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_reportparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resource_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcegroup_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcegroupexpansion_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcespec: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_retaineddataexcel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_retentioncleanupinfo: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_retentioncleanupoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_retentionconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_retentionfailuredetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_retentionoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_retentionoperationdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_retentionsuccessdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_role_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_roleeditorlayout: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_rollupfield_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesliterature_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesliteratureitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesorder_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesorderdetail_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesprocessinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_savedquery_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_savedqueryvisualization_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_searchattributesettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_searchcustomanalyzer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_searchrelationshipsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_service_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceappointment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceplan: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceplanmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_settingdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharedlinksetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharedobject: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharedworkspace: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharedworkspacepool: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharepointdocumentlocation_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharepointsite_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sideloadedaiplugin: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_site_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sla_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_slaitem_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_slakpiinstance_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_socialactivity_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_socialprofile_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solution_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_stagedentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_stagedentityattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_stagedmetadataasyncoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_stagesolutionupload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_subject_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_supportusertable: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapsedatabase: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkprofileentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkschedule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_syncerror_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_systemuser_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_task_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_tdsmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_team_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_teamtemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_template_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_territory_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topichistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodelconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodelexecutionhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_transactioncurrency_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_TranslationProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uom_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uomschedule_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userquery_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userqueryvisualization_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userrating: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_viewasexamplequestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_virtualentitymetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_workflow_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_workflowbinary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_workqueue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_workqueueitem: string;
		/** Request data for the entity that had the sync error. */
		RequestData: string;
		/** Shows whether the sync error is active or resolved. */
		StateCode: OptionSet.SyncError.StateCode;
		/** Select the sync error status. */
		StatusCode: OptionSet.SyncError.StatusCode;
		/** Unique identifier of the sync error. */
		SyncErrorId: string;
		/** Shows the version number of the sync error. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Action Name for which sync error has occurred */
			readonly Action: string;
			/** Show the action data */
			readonly ActionData: string;
			/** Unique identifier of the user who created the sync error. */
			readonly CreatedBy: string;
			/** Date and time when the sync Error was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sync error. */
			readonly CreatedOnBehalfBy: string;
			/** Enter a short description of the sync error. */
			readonly Description: string;
			/** Displays the error code. */
			readonly ErrorCode: string;
			/** Error description from the exception */
			readonly ErrorDetail: string;
			/** Error Message of the exception */
			readonly ErrorMessage: string;
			/** Date and time when the upsync request was executed on CRM server */
			readonly ErrorTime_UtcDateAndTime: string;
			/** Select the preferred error type. */
			readonly ErrorType: string;
			/** Unique identifier of the user who last modified the sync error. */
			readonly ModifiedBy: string;
			/** Date and time when the sync error was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sync error. */
			readonly ModifiedOnBehalfBy: string;
			/** Entity name of the record for which sync error has occurred */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Business unit that owns the sync error. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the sync error. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the sync error. */
			readonly OwningUser: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_account_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_activityfileattachment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_activitymimeattachment_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_activitymonitor: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_activityparty_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_adminsettingsentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_adx_externalidentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_adx_invitation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_adx_setting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_adx_webformsession: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aicopilot: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aiplugin: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginauth: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aiplugingovernance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aiplugininstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aiplugintitle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aipluginusersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_aiskillconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_annotation_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appaction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appactionmigration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appactionrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appelement: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_application: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_applicationuser: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appointment_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_appusersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_attachment_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_attributeimageconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_attributemaskingrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookableresource_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookableresourcebooking_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookableresourcebookingexchangesyncidmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookableresourcebookingheader_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookableresourcecategory_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookableresourcecategoryassn_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookableresourcecharacteristic_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookableresourcegroup_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bookingstatus_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bot: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_botcomponent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_botcomponentcollection: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bulkoperation_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_bulkoperationlog: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_businessdatalocalizedlabel_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_businessunit_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_c360_configuration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_campaign_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_campaignactivity_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_campaignresponse_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_card: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_catalog: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_catalogassignment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_category_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_certificatecredential: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_channelaccessprofile_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_channelaccessprofilerule_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_channelaccessprofileruleitem_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_characteristic_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_chat: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_childincidentcount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_comment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_commitment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_competitor_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_competitoraddress_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_connection_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_connectioninstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_connectionreference: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_connectionrole_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_connector: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_constraintbasedgroup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_contact_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_contract_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_contractdetail_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_contracttemplate_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_conversationtranscript: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_copilotsynonyms: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_credential: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_customapi: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_customeraddress_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_customeropportunityrole_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_datalakefolder: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_delegatedauthorization: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_deleteditemreference: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_desktopflowbinary: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_desktopflowmodule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_discount_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_discounttype_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_duplicaterule_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_duplicaterulecondition_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dvfilesearch: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dvtablesearch: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dynamicproperty: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dynamicpropertyassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dynamicpropertyinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_dynamicpropertyoptionsetitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_email_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_emailserverprofile_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entitlement_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entitlementchannel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entitlemententityallocationtypemapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entitlementtemplate_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entitlementtemplatechannel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entityanalyticsconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entityimageconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entityindex: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_entityrecordfilter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_equipment_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_ExpiredProcess_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_exportedexcel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_externalparty_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_externalpartyitem_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_fabricaiskill: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_fax_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_feedback_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_fieldpermission_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_fieldsecurityprofile_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_fileattachment_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowevent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowmachine: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowmachineimage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_flowsession: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_fxexpression: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_goal_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_goalrollupquery_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_governanceconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_holidaywrapper: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_importmap_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_incident_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_incidentresolution_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_indexattributes: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_internaladdress_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_invoice_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_invoicedetail_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_kbarticle_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_kbarticletemplate_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_keyvaultreference: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_knowledgearticle_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_knowledgearticleincident_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_knowledgearticleviews_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_knowledgebaserecord_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_lead_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_leadaddress_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_LeadToOpportunitySalesProcess_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_letter_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_list_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_listoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mailbox_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mailmergetemplate_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mainfewshot: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_makerfewshot: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_managedidentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_marketingformdisplayattributes: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_maskingrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_metadataforarchival: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_metric_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_activitymappingmetadatabase: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_additionalentityinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_aibuildercallbacktesthook: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_aibuildermodelmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_analysisinstanceconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_analysismetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_azuremlwebservice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_businessunitconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_cdsamodelmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_clusterloadmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_conflationcriteriastatistics: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_conflationmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_conflationrun: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_conflationstatistics: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_consentsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_dataflowmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_datapreparationmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_dataqualityfeaturewisemetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_dataqualityoverview: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_dataqualityreport: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_datasetcatalog: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_datasourcemetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_datatroubleshootingaccess: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_derivedentitymetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_diagnosticsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_discoveredcdsamodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_discoveryoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_enrichmentmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_enrichmentrun: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_entityfiltermetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_exportconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_exportconfigreport: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_exportedmoduleconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_exportsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_featuretemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_graphmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_hierarchymetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_hostloadmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_importexportstatusmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_insightmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_insightsdataqualityreport: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_instancemetrics: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_instancepartnercatalog: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_instancesearchconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_instancesettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_intelligenceworkflowmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_intelligenceworkflowrunmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_intelligenceworkspacemetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_keyvaultmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_lightcdsamodelmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_logicappssubscribermetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_mappedsecretmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_measuremetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_modelconfigmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_moduleconfigurationreference: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_notificationcheckpoint: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_packageimportmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_packagejobmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_packagemetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_platforminstancemapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_powerplatformconnector: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_powerplatformrefreshsignalmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_preenrichmentmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_profilestorestateinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_realtimeaggregatedstats: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_realtimem3configuration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_realtimem3searchconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_realtimepluginmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_realtimesystemtablemetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_realtimetablemetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_refreshhistorymetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_refreshschedulebase: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_refreshstatehistorymetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_relationshipmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_reportmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_resetinstancehistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_resourcemetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_runtimerealtimem3metadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_segmentmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_semanticentitymappingmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_sparkjobexecutionmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_templatedmeasuremetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_templatedsegmentmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_transformmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_addtocalendarstyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_appointmentactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_basestyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_buttonstyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_cdnconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_cdsaconnectorconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_codestyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_columnstyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_contentblock: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_contentblockstyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_contentsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_createleadactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_customerinsightsinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_customerjourney: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneycustomchannelactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneyiteration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneyruntimestate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneytemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneyworkflowlink: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_defaultmarketingsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_delaydatetimeactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_delaydurationactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_deprecatedcustomtileactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_deprecatedeventactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_deprecatedformsprosurveyactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_deprecatedpageactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_designerfeatureavailability: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_digitalassetsconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_dividerstyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_emailkeypoint: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_featureconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_file: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_formpage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_formpagetemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_generalstyles: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_geopin: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_gpt3log: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_gwennolfeatureconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_gwennolspamscoreactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_gwennolspamscorerequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_imagestyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_keyword: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_launchworkflowactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_layoutstyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_leadentityfield: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_leadscore: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_leadscoremodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_leadscore_v2: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_leadscoringconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_leadtoopportunity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaudience: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedincampaign: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedincampaignactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinform: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_listform: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_liveentitydependency: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingdataimport: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingemail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingfieldsubmission: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingform: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingformactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingformfield: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingformsubmission: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingformtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingformwhitelistrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingpage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingpageconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_marketingpagetemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_matchingstrategy: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_matchingstrategyattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_migration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_mktactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_networkpage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_personalizedpage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_personalizedpagefield: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_phonecallactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_portalsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_postingishts: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_qrcodestyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_quicksendemail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_quotainfoentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_reaction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_recordupdateactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_redirecturl: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_segment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_segmentactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_segmenttemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_setupdomain: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_socialpost: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_socialpostingconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_socialpostingconsent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_sourceactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_splitteractivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_tag: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_taskactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_taskactivitymarketingtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_textstyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_triggeractivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_uicconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_usergeoregion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_usersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_video: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_videostyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyncrm_website: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_aimodelversion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_apsconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_brandprofile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_brandsender: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_brandtheme: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_buttonstyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_byoacschannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_byoacschannelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_captcha: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_catalogeventstatusconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_cmsaddon: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_comparatormetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_compliancesettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_compliancesettings3: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_compliancesettings4: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_configuration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_consent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_consentcenterconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_consentprovider: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_consentproviderdefaultconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_consentproviderdefaultpurpose: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_consentproviderlocalization: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_consentsystemconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_contactpointconsent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_contactpointconsent2: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_contactpointconsent3: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_contactpointconsent4: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_contactpointsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_conversioneventdefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_createdentitylink: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_customchannelmessage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_customerdatamapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_customerdataselection: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_domain: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_email: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_emailtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_entitygradedistribution: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_entityscoredistribution: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_entityscoringmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_eventmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_eventparametermetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_experiment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_experimentv2: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_featureconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_formsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_formtargetaudience: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_fragment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_frequencycap: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_gdprrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_imagestyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_infobipchannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_infobipchannelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_journey: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_journeydependency: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_journeyevent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_journeyoptimizationcount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_journeyrunparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_journeysetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_journeytemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_journeyworkflowmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_keyword: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_leadqualificationmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_linkmobilitychannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_marketingfieldsubmission: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_marketingform: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_marketingformfield: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_marketingformsubmission: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_marketingformtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_matchingstrategy: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_matchingstrategyattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_metadataentityrelationship: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_metadataitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_metadatastorestate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_mobileapp: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_mobileappchannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_mobiledevice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_predefinedplaceholder: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_preferencecenter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_preferencecenterlink: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_purpose: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_pushdeviceregistrationresult: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_pushmobiledevice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_pushnotification: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_qrcodestyle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_quiettimesetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_recaptchaconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_segment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_segmentdefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_segmentexecution: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_segmentusage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_sms: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_submitbutton: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_tag: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_teamsengagement: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_telesignchannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_telesignchannelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_topic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_twiliochannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_twiliochannelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_utmtracking: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_vibeschannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_vibeschannelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdynmkt_webinaremailjourney: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_3dmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_accountkpiitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_actioncardactionstat: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_actioncardregarding: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_actioncardrolesetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_actioncardstataggregation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_activeicdextension: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_activityanalysiscleanupstate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_activityanalysisconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_actual: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_adaptivecardconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_adminappstate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentcapacityprofileunit: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentcapacityupdatehistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentchannelstate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentcopilotsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentgroup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentgroupmembership: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentresourceforecasting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agentstatushistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreement: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementbookingdate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementbookingincident: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementbookingproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementbookingsetup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicedate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_agreementsubstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aicontactsuggestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aievent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_analytics: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_analyticsadminsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_analyticsforcs: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_apirequestcache: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_apirequestfolder: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_appconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_appcopilotconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_applicationextension: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_applicationtabtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_appprofilerolemapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_appstate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_assetcategorytemplateassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_assetsuggestionssetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_assettemplateassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_assignmentconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_assignmentconfigurationstep: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_assignmentmap: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_assignmentrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_attribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_attributeinfluencestatistics: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_attributevalue: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_authenticationsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_authsettingsentry: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_autocapturerule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_autocapturesettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_autonomouscasecreationrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookableresourceassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookingalert: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookingalertstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookingchange: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookingjournal: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookingrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookingsetupmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bookingtimestamp: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_botsession: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_businessclosure: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_callablecontext: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_cannedmessage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_capacityprofile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_caseenrichment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_casefollowupandclosureconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_casesuggestionrequestpayload: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_casetopic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_casetopicsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_casetopicsummary: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_casetopic_incident: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_cdsentityengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channelcapability: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channeldefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channeldefinitionconsent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channeldefinitionlocale: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channelinstancesecret: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channelmessageattachment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channelmessagecontextpart: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channelmessagepart: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_channelprovider: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_chatansweroption: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_chatquestionnaireresponse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_chatwidgetlanguage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ciprovider: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_clientextension: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_collabgraphresource: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_collabspaceteamassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_configuration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationtype: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_consoleappparameterdefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_consumingapplication: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_contactkpiitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_contactsuggestionrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_contactsuggestionruleset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationaction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationactionitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationactionlocale: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationaggregatedinsights: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationcomment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationdata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationinsight: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationmessageblock: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationparticipantinsights: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationparticipantsentiment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationquestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationsegmentsentiment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationsentiment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationsignal: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationsubject: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationsummaryinteraction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationsummarysetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationsummarysuggestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationsystemtag: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationtag: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationtopic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationtopicsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationtopicsummary: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_conversationtopic_conversation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_copilotagentpreference: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_copilotinteraction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_copilotinteractiondata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_copilotinteractions: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_copilotknowledgeinteraction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_copilotsummarizationsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_copilottranscript: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_copilottranscriptdata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_crmconnection: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_csadminconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_cskeyvalueconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customapirulesetconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customerasset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customerassetattachment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customerassetcategory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customeremailcommunication: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customerfeedbacksurvey: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customerfeedbacksurveyinvite: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_customerfeedbacksurveyresponse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dailyaccountkpiitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dailycontactkpiitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dailyleadkpiitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dailyopportunitykpiitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsdataset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_copilot: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fs: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_mc: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_mkt: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc_rt: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sareporting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsworkspace: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_databaseversion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_datahygienesettinginfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dealmanageraccess: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dealmanagersettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_decisioncontract: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_decisionruleset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_defextendedchannelinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_defextendedchannelinstanceaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_deletedconversation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_derivedinsightsrelatedentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_digitalsellingactivetask: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_digitalsellingcompletedtask: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_distributedlock: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_duplicateleadmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_effortpredictionresult: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entitlementapplication: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityattachment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityattributepredictionrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityderivedinsight: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityrankingrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityroutingconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_entityworkstreammap: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_extendedusersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_externalcrm: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_externalrecord: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_facebookengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_fieldservicepricelistitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_fieldservicesummaryconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_fieldservicesystemjob: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flowcardtype: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_flwconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_forecastconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_forecastdefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_forecastingcache: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_forecastinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_forecastpredictionstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_forecastrecurrence: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_forecastsettingsandsummary: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_formmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_function: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_functionallocation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_functionallocationtype: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_gdprdata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_geofence: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_geofenceevent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_geofencingsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_geolocationsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_geolocationtracking: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_historicalcaseharvestbatch: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_historicalcaseharvestrun: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_icdextension: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_icebreakersconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iermlmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iermltraining: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inboxcardconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inboxconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inboxentityconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttype: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttypeproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttyperecommendationresult: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttyperesolution: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservicetask: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttypessetup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_incidenttype_requirementgroup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inspection: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inspectionattachment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inspectiondefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inspectioninstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inspectionresponse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_insurance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentattributeset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentattribute_entity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intententity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentfamily: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentfeature_configuration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentgroupcondition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentharvesting_batchjobstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentharvesting_provisioning_status: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentsolutionmap: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_intentsolution_mappingconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotalert: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotdevice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotdevicecategory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotdevicecommand: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotdevicecommanddefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotdevicedatahistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotdeviceproperty: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotfieldmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotpropertydefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotprovider: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotproviderinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iotsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_iottocaseprocess: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_kbenrichment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgeharvestjobrecord: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_kpieventdata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_kpieventdefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_leadhygienesetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_leadkpiitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_leadmodelconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_lineengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_linkedentityattributevalidity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_livechatconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_livechatengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_livechatwidgetlocation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_liveconversation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_liveworkitemevent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_liveworkstream: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_localizedsurveyquestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_locationtemplateassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_locationtypetemplateassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_lockstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_macrosession: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_maskingrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_masterentityroutingconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_migrationtracker: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_mobilesource: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_modelpreviewstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_mostcontacted: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_mostcontactedby: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_msteamssetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_msteamssettingsv2: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_nextaction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_notesanalysisconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_notificationfield: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_notificationtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_nottoexceed: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocagentassignedcustomapiprivilege: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocapplebusinessaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocapplepay: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocautoblockrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocautomatedactionrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocautomatedactionrulesmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocbotchannelregistration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocbotchannelregistrationsecret: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occarrier: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occhannelapimessageprivilege: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occhannelapimethodmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occhannelconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occhannelstateconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occommunicationprovidersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_occustommessagingchannel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocexternalcontext: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocfbapplication: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocfbpage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocflaggedspam: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocgatekeeperengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_oclanguage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_oclinechannelconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemparticipant: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemsentiment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_oclocalizationdata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocoutboundconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocoutboundmessage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocpaymentprofile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocphonecallengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocphonemusic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocphonenumber: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocprovisioningstate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocrecording: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocrichobject: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocrichobjectmap: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocruleitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsession: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsessioncharacteristic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsessionparticipantevent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsessionsentiment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsimltraining: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsitdimportconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsitdskill: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsitrainingdata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocskillidentmlmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsmschannelsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsmssettingsecret: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocsystemmessage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_octag: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_octeamschannelconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_octwitterapplication: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_octwitterhandle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_octwitterhandleprovisioningstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_octwitterhandlesecret: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocvoice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocvoicechannellanguagesetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocvoicechannelsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocvoicemail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocwechatchannelconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_oc_geolocationprovider: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_odosfeaturemetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_odosmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_omnichannelconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_omnichannelpersonalization: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_omnichannelqueue: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_omnichannelsyncconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_operatinghour: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_opportunitykpiitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_opportunitymodelconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingdate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingsetup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingsetupdate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_organizationalunit: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_orgchartnode: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_originatingqueue: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_overflowactionconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_paneconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_panetabconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_panetoolconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_payment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_paymentdetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_paymentmethod: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_paymentterm: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_personalmessage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_personalsoundsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_personasecurityrolemapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_playbookactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_playbookactivityattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_playbookcategory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_playbookinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_playbooktemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_pmview: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_postalbum: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_postalcode: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_postconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_postruleconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_predictioncomputationoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_predictionmodelstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_predictionscheduledoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_predictivemodelscore: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_predictivescore: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_predictivescoringsyncstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_predictworkhourdurationsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_preferredagent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_preferredagentcustomeridentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_preferredagentroutedentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_presence: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_priority: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_problematicasset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_problematicassetfeedback: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productinventory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productivityactioninputparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productivityactionoutputparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productivityagentscript: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productivityagentscriptstep: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productivitymacroactiontemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productivitymacroconnector: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_productivityparameterdefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_property: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_propertyassetassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_propertylocationassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_propertylog: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_propertytemplateassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_provider: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_purchaseorder: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_purchaseorderbill: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_purchaseorderproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_questionsequence: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_quotebookingincident: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_quotebookingproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_quotebookingservice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_quotebookingservicetask: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_quotebookingsetup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_quoteinvoicingproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_quoteinvoicingsetup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rawinsightentitylink: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_readtrackingenabledinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_realtimescoring: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_realtimescoringoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_recomputetracker: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_recording: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_recurringsalesaction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_recurringsalesactionv2: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_relationshipanalyticsmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_reportbookmark: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementchange: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementcharacteristic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementdependency: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementgroup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementorganizationunit: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementrelationship: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementresourcecategory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementresourcepreference: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_requirementstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_resolution: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_resourcepaytype: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_resourcerequirement: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_resourcerequirementdetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_resourceterritory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rma: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rmaproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rmareceipt: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rmareceiptproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rmasubstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_routingconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_routingconfigurationstep: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_routingrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_routingrulesetsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rtv: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rtvproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rtvsubstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_rulesetdependencymapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sabackupdiagnostic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sabatchruninstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesaccelerationinsight: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesaccelerationsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesassignmentsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salescopilotinsight: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salescopilotorgsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salescopilotusersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesinsightssettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesocmessage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesocsmstemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesroutingdiagnostic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salesroutingrun: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salessuggestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_salestag: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_saruninstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_scenario: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_schedule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_scheduleboardsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_schedulingfeatureflag: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_schedulingparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_schedulingscope: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sciconversation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_scicustomemailhighlight: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_scicustomhighlight: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_scicustompublisher: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_scienvironmentsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sciusersettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_searchconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_segment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_segmentationsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_segmentattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_segmentcatalogue: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sentimentanalysis: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sequence: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sequencestat: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sequencetarget: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sequencetargetstep: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sequencetemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_servicecopilotplugin: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_servicecopilotpluginaction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_servicecopilotpluginrole: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_serviceoneprovisioningrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_servicetasktype: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sessiondata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sessionevent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sessionparticipant: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sessionparticipantdata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sessiontemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_shareasconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_shipvia: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_siconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_sikeyvalueconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_similarentitiesfeatureimportance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_skillattachmentruleitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_skillattachmenttarget: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_smartassistconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_smsengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_smsnumber: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_soundfile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_soundnotificationsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_submodeldefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_suggestionassignmentrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_suggestioninteraction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_suggestionprincipalobjectaccess: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_suggestionrequestpayload: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_suggestionsellerpriority: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_suggestionsmodelsummary: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_suggestionssetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_surveyconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_surveyquestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_surveysetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_swarm: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_swarmparticipant: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_swarmparticipantrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_swarmrole: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_swarmskill: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_swarmtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_taggedrecord: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_taxcode: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_taxcodedetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_teamschannelengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_teamschatassociation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_teamschatsuggestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_teamscollaboration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_teamsdialeradminsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_teamsengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_templateforproperties: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_templateparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_templateruleset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_templatetags: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_timeentry: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_timeentrysetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_timegroup: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_timegroupdetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_timespent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_tour: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_trade: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_tradecoverage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_trainingresult: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_transactionorigin: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_transcript: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_twitterengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_unifiedroutingrun: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_uniquenumber: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_untrackedappointment: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_upgraderun: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_upgradestep: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_upgradeversion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_urnotificationtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_urnotificationtemplatemapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_usagemetric: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_usagereporting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_usersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_visitorjourney: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_vivacustomerlist: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_vivaentitysetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_vivaorgextensioncred: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_vivaorgsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_vivausersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_voicechannelorganizationsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_wallsavedquery: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_wallsavedqueryusersettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_warehouse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_warranty: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_wechatengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_whatsappengagementctx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_wkwcolleaguesforcompany: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_wkwcolleaguesforcontact: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_wkwconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workhourtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_worklistviewconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workorder: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workordercharacteristic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workorderincident: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workordernte: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workorderproduct: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workorderresolution: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workorderservice: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workorderservicetask: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workordersubstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workordertype: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workqueuestate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workqueueusersetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msdyn_workstreamhmmigrationstatus: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_attendeepass: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_authenticationsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_bucket: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_building: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_checkin: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_customregistrationfield: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_entitycounter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_event: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventadministration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventanalytics: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventcustomregistrationfield: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventmanagementactivity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventmanagementconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchase: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasecontact: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventregistration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventregistrationticket: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventteammember: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventteamsproperties: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_eventvendor: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_file: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_hotel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_layout: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_pass: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_registrationresponse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_room: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_roomreservation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_session: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_sessionregistration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_sessiontrack: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_speaker: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_speakerengagement: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_sponsorship: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_usertokencache: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_venue: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_waitlistitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_webapplication: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_webinarconsent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_webinarprovider: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_webinartype: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msevtmgt_websiteentityconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_alert: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_alertrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_emailtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_fileresponse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_localizedemailtemplate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_project: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_question: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_questionresponse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_satisfactionmetric: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_survey: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_surveyinvite: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_surveyreminder: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_surveyresponse: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msfp_unsubscribedrecipient: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msgdpr_gdprconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msgdpr_gdprconsentchangerecord: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_NewProcess_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_offlinecommanddefinition_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_opportunity_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_opportunityclose_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_opportunityproduct_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_OpportunitySalesProcess_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_orderclose_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_organization_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_organizationsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_package: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_packagehistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_pdfsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_phonecall_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_PhoneToCaseProcess_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_plannersyncaction: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_plugin: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_pluginpackage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_position_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_postfollow_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerbidataset: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerbireport: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerbireportapdx: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerfxrule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerpagecomponent: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerpagesite: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerpagesmanagedidentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_pricelevel_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_processsession_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_processstage_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_processstageparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_processtrigger_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_product_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_productassociation_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_productpricelevel_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_productsubstitute_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_publisher_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_queue_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_queueitem_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_quote_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_quoteclose_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_quotedetail_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_ratingmodel_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_ratingvalue_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_reconciliationinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_recordfilter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_recurringappointmentmaster_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_recyclebinconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_relationshipattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_report_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_reportcategory_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_reportparameter: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_resource_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_resourcegroup_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_resourcegroupexpansion_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_resourcespec: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_retaineddataexcel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_retentionconfig: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_retentionoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_retentionsuccessdetail: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_role_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_roleeditorlayout: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_rollupfield_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_salesliterature_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_salesliteratureitem: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_salesorder_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_salesorderdetail_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_salesprocessinstance: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_savedquery_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_savedqueryvisualization_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_searchattributesettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_service_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_serviceappointment_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_serviceplan: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_settingdefinition: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_sharedobject: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_sharedworkspace: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_sharepointdocumentlocation_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_sharepointsite_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_site_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_sla_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_slaitem_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_slakpiinstance_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_socialactivity_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_socialprofile_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_solution_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_stagedentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_stagedentityattribute: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_subject_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_supportusertable: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_synapsedatabase: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_syncerror_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_systemuser_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_task_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_tdsmetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_team_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_teamtemplate_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_template_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_territory_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_topic: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_topichistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_topicmodel: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_topicmodelconfiguration: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_topicmodelexecutionhistory: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_transactioncurrency_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_TranslationProcess_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_uom_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_uomschedule_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_userquery_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_userqueryvisualization_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_userrating: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_workflow_syncerror: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_workflowbinary: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_workqueue: string;
			/** Choose the record that the sync error relates to. */
			readonly regardingobjectid_workqueueitem: string;
			/** Request data for the entity that had the sync error. */
			readonly RequestData: string;
			/** Shows whether the sync error is active or resolved. */
			readonly StateCode: string;
			/** Select the sync error status. */
			readonly StatusCode: string;
			/** Unique identifier of the sync error. */
			readonly SyncErrorId: string;
			/** Shows the version number of the sync error. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SyncError {
		enum ErrorType {
			/** 0 */
			Conflict,
			/** 3 */
			Others,
			/** 2 */
			Record_already_exists,
			/** 1 */
			Record_not_found
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Resolved
		}
		enum StatusCode {
			/** 0 */
			Active,
			/** 1 */
			Fixed
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
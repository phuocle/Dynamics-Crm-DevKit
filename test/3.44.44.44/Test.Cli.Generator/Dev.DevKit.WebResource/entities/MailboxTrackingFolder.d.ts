//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class MailboxTrackingFolderApi {
		/**
		* DynamicsCrm.DevKit MailboxTrackingFolderApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the entry was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Folder Id for a folder in Exchange */
		ExchangeFolderId: string;
		/** Exchange Folder Name */
		ExchangeFolderName: string;
		/** Information to indicate whether the folder has been on boarded for auto tracking */
		FolderOnboardingStatus: number;
		/** Mailbox id associated with this record. */
		MailboxId: string;
		readonly MailboxTrackingFolderId: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the entry was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the record. */
		readonly OrganizationId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the folder mapping. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the folder mapping. */
		readonly OwningTeam: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_account: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_accountleads: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_activityfileattachment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_activitymonitor: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adminsettingsentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adx_externalidentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adx_invitation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adx_inviteredemption: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adx_portalcomment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adx_setting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adx_webformsession: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aicopilot: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aiplugin: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginauth: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginconversationstarter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginconversationstartermapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginexternalschema: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginexternalschemaproperty: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aiplugingovernance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aiplugingovernanceext: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aiplugininstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginoperationparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginoperationresponsetemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aiplugintitle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aipluginusersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_aiskillconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appactionmigration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appactionrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appelement: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_application: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_applicationuser: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appmodulecomponentedge: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appmodulecomponentnode: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appusersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_archivecleanupinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_archivecleanupoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_asyncoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_attributeimageconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_attributemaskingrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresource: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebooking: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebookingheader: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecategoryassn: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecharacteristic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcegroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookingstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bot: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_botcomponent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_botcomponentcollection: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkarchiveconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkarchivefailuredetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkarchiveoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkarchiveoperationdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkoperationlog: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_c360_configuration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaign: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignactivityitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_canvasappextendedmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_card: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_catalog: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_catalogassignment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_certificatecredential: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_characteristic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_chat: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_childincidentcount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_comment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_commitment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitor: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitoraddress: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitorproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitorsalesliterature: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_connectioninstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_connectionreference: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_connector: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_constraintbasedgroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contact: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactinvoices: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactleads: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactorders: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactquotes: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contract: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contractdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contracttemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_conversationtranscript: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_copilotexamplequestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_copilotglossaryterm: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_copilotsynonyms: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_credential: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customapi: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customapirequestparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customapiresponseproperty: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customeropportunityrole: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_datalakefolder: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_datalakefolderpermission: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_datalakeworkspace: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_datalakeworkspacepermission: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dataprocessingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_delegatedauthorization: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_deleteditemreference: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_desktopflowbinary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_desktopflowmodule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_discount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_discounttype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dvfilesearch: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dvfilesearchattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dvfilesearchentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dvtablesearch: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dvtablesearchattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dvtablesearchentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicproperty: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyoptionsetitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_enablearchivalrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlement: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementchannel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementcontacts: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlemententityallocationtypemapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementproducts: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplatechannel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplateproducts: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entityanalyticsconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entityimageconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entityindex: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entityrecordfilter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_environmentvariabledefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_environmentvariablevalue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_equipment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_exportedexcel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_exportsolutionupload: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_fabricaiskill: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_featurecontrolsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_federatedknowledgeconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowcapacityassignment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowcredentialapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowevent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachine: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachinegroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachineimage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachineimageversion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachinenetwork: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowsession: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_fxexpression: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_governanceconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_holidaywrapper: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incident: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incidentknowledgebaserecord: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incidentresolution: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_indexattributes: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_internalcatalogassignment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_invoice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_invoicedetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_keyvaultreference: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_knowledgearticleincident: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_lead: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadaddress: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadcompetitors: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadtoopportunitysalesprocess: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_list: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_listmember: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_listoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mainfewshot: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_makerfewshot: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_managedidentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_marketingformdisplayattributes: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_maskingrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_metadataforarchival: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mobileofflineprofileextension: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_activitymappingmetadatabase: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_additionalentityinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_aibuildercallbacktesthook: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_aibuildermodelmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_analysisinstanceconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_analysismetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_azuremlwebservice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_businessunitconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_cdsamodelmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_clusterloadmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_conflationcriteriastatistics: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_conflationmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_conflationrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_conflationstatistics: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_consentsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_dataflowmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_datapreparationmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_dataqualityfeaturewisemetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_dataqualityoverview: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_dataqualityreport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_datasetcatalog: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_datasourcemetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_datatroubleshootingaccess: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_derivedentitymetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_diagnosticsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_discoveredcdsamodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_discoveryoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_enrichmentmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_enrichmentrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_entityfiltermetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_exportconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_exportconfigreport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_exportedmoduleconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_exportsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_featuretemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_graphmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_hierarchymetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_hostloadmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_importexportstatusmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_insightmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_insightsdataqualityreport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_instancemetrics: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_instancepartnercatalog: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_instancesearchconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_instancesettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_intelligenceworkflowmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_intelligenceworkflowrunmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_intelligenceworkspacemetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_keyvaultmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_lightcdsamodelmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_logicappssubscribermetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_mappedsecretmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_measuremetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_modelconfigmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_moduleconfigurationreference: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_notificationcheckpoint: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_packageimportmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_packagejobmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_packagemetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_platforminstancemapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_powerplatformconnector: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_powerplatformrefreshsignalmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_preenrichmentmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_profilestorestateinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_realtimeaggregatedstats: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_realtimem3configuration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_realtimem3searchconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_realtimepluginmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_realtimesystemtablemetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_realtimetablemetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_refreshhistorymetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_refreshschedulebase: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_refreshstatehistorymetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_relationshipmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_reportmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_resetinstancehistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_resourcemetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_runtimerealtimem3metadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_segmentmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_semanticentitymappingmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_sparkjobexecutionmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_templatedmeasuremetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_templatedsegmentmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_transformmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynce_botcontent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_addtocalendarstyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_appointmentactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_basestyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_buttonstyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_cdnconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_cdsaconnectorconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_codestyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_columnstyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_contentblock: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_contentblockstyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_contentsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_createleadactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_customerinsightsinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_customerjourney: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_customerjourneycustomchannelactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_customerjourneyiteration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_customerjourneyruntimestate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_customerjourneytemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_customerjourneyworkflowlink: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_defaultmarketingsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_delaydatetimeactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_delaydurationactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_deprecatedcustomtileactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_deprecatedeventactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_deprecatedformsprosurveyactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_deprecatedpageactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_designerfeatureavailability: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_digitalassetsconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_dividerstyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_emailkeypoint: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_featureconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_file: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_formpage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_formpagetemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_generalstyles: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_geopin: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_gpt3log: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_gwennolfeatureconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_gwennolspamscoreactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_gwennolspamscorerequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_imagestyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_keyword: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_launchworkflowactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_layoutstyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_leadentityfield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_leadscore: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_leadscoremodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_leadscore_v2: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_leadscoringconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_leadtoopportunity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinaudience: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedincampaign: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedincampaignactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinfieldmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinform: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinformanswer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinformquestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinformsubmission: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_linkedinuserprofile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_listform: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_liveentitydependency: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingdataimport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingemail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingemailactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingemailtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingemailtest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingemailtestattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingemailtestsend: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingfieldsubmission: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingform: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingformactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingformfield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingformsubmission: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingformtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingformwhitelistrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingpage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingpageconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_marketingpagetemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_matchingstrategy: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_matchingstrategyattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_migration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_mktactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_networkpage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_personalizedpage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_personalizedpagefield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_phonecallactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_portalsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_postingishts: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_qrcodestyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_quicksendemail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_quotainfoentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_reaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_recordupdateactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_redirecturl: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_segment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_segmentactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_segmenttemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_setupdomain: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_socialpost: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_socialpostingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_socialpostingconsent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_sourceactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_splitteractivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_tag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_taskactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_taskactivitymarketingtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_textstyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_triggeractivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_uicconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_usergeoregion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_usersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_video: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_videostyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyncrm_website: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_aimodelversion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_apsconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_brandprofile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_brandsender: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_brandtheme: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_buttonstyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_byoacschannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_byoacschannelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_captcha: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_catalogeventstatusconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_cmsaddon: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_comparatormetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_compliancesettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_compliancesettings3: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_compliancesettings4: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_configuration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_consent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_consentcenterconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_consentprovider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_consentproviderdefaultconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_consentproviderdefaultpurpose: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_consentproviderlocalization: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_consentsystemconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_contactpointconsent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_contactpointconsent2: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_contactpointconsent3: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_contactpointconsent4: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_contactpointsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_conversioneventdefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_createdentitylink: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_customchannelmessage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_customerdatamapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_customerdataselection: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_domain: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_email: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_emailtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_entitygradedistribution: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_entityscoredistribution: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_entityscoringmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_eventmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_eventparametermetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_experiment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_experimentv2: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_featureconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_formsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_formtargetaudience: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_fragment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_frequencycap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_gdprrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_imagestyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_infobipchannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_infobipchannelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_journey: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_journeydependency: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_journeyevent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_journeyoptimizationcount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_journeyrunparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_journeysetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_journeytemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_journeyworkflowmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_keyword: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_leadqualificationmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_linkmobilitychannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_marketingfieldsubmission: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_marketingform: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_marketingformfield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_marketingformsubmission: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_marketingformtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_matchingstrategy: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_matchingstrategyattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_metadataentityrelationship: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_metadataitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_metadatastorestate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_mobileapp: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_mobileappchannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_mobiledevice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_mocksmsproviderchannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_predefinedplaceholder: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_preferencecenter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_preferencecenterlink: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_purpose: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_pushdeviceregistrationresult: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_pushmobiledevice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_pushnotification: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_qrcodestyle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_quiettimesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_recaptchaconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_segment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_segmentdefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_segmentexecution: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_segmentusage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_sms: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_submitbutton: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_tag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_teamsengagement: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_telesignchannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_telesignchannelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_topic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_twiliochannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_twiliochannelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_utmtracking: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_vibeschannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_vibeschannelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynmkt_webinaremailjourney: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_3dmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_accountkpiitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardactionstat: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardregarding: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardrolesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardstataggregation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_activeicdextension: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_activityanalysiscleanupstate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_activityanalysisconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actual: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_adaptivecardconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_adminappstate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentcapacityprofileunit: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentcapacityupdatehistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentchannelstate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentcopilotsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentgroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentgroupmembership: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentresourceforecasting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agentstatushistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreement: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingdate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingincident: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingservice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingsetup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementinvoicedate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementsubstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdataset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibfile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aicontactsuggestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aievent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aimodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodimage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodlabel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aitemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysisjob: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysisoverride: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysisresult: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analytics: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analyticsadminsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analyticsforcs: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_apirequestcache: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_apirequestfolder: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_appconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_appcopilotconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_appinsightsmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_applicationextension: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_applicationtabtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_appprofilerolemapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_appstate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_assetcategorytemplateassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_assetsuggestionssetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_assettemplateassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_assignmentconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_assignmentconfigurationstep: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_assignmentmap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_assignmentrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_attribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_attributeinfluencestatistics: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_attributevalue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_authenticationsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_authsettingsentry: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_autocapturerule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_autocapturesettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_autonomouscasecreationrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookableresourceassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingalert: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingalertstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingchange: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingjournal: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingsetupmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingtimestamp: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_botsession: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_businessclosure: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_callablecontext: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_cannedmessage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_capacityprofile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_caseenrichment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_casefollowupandclosureconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_casesuggestionrequestpayload: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_casetopic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_casetopicsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_casetopicsummary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_casetopic_incident: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_cdsentityengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelcapability: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channeldefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channeldefinitionconsent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channeldefinitionlocale: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelinstancesecret: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelmessageattachment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelmessagecontextpart: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelmessagepart: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelprovider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_chatansweroption: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_chatwidgetlanguage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ciprovider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_clientextension: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_collabgraphresource: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_collabspaceteamassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_configuration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationtype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleappparameterdefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consumingapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contactkpiitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contactsuggestionrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contactsuggestionruleset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationactionitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationactionlocale: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationaggregatedinsights: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationcomment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationdata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationinsight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationmessageblock: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationparticipantinsights: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationparticipantsentiment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationquestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsegmentsentiment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsentiment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsignal: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsubject: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsummaryinteraction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsummarysetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsummarysuggestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsystemtag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtopic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtopicsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtopicsummary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtopic_conversation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_copilotagentpreference: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_copilotinteraction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_copilotinteractiondata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_copilotinteractions: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_copilotknowledgeinteraction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_copilotsummarizationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_copilottranscript: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_copilottranscriptdata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_crmconnection: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_csadminconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_cskeyvalueconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customapirulesetconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerasset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerassetattachment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerassetcategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customeremailcommunication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerfeedbacksurvey: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerfeedbacksurveyinvite: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerfeedbacksurveyresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dailyaccountkpiitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dailycontactkpiitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dailyleadkpiitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dailyopportunitykpiitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsdataset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_copilot: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fs: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_mc: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_mkt: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_oc: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_oc_rt: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_sareporting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsworkspace: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_databaseversion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflow: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflowtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_datahygienesettinginfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dealmanageraccess: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dealmanagersettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_decisioncontract: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_decisionruleset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_defextendedchannelinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_defextendedchannelinstanceaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_deletedconversation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_derivedinsightsrelatedentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_digitalsellingactivetask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_digitalsellingcompletedtask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_distributedlock: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dmsrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dmsrequeststatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dmssyncrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dmssyncstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_duplicateleadmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_effortpredictionresult: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entitlementapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityattachment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityattributepredictionrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityderivedinsight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityrankingrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityroutingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityworkstreammap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_extendedusersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_externalcrm: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_externalrecord: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_facebookengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicepricelistitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicesummaryconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicesystemjob: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fileupload: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flowcardtype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_approval: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_approvalrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_approvalresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_approvalstep: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flow_flowapproval: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flwconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastdefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastingcache: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastpredictionstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastrecurrence: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastsettingsandsummary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_formmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_function: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_functionallocation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_functionallocationtype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_gdprdata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_geofence: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_geofenceevent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_geofencingsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_geolocationsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_geolocationtracking: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_helppage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_historicalcaseharvestbatch: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_historicalcaseharvestrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_icdextension: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_icebreakersconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iermlmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iermltraining: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inboxcardconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inboxconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inboxentityconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypeproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttyperecommendationresult: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttyperesolution: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypeservice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypeservicetask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypessetup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inspection: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inspectionattachment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inspectiondefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inspectioninstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inspectionresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_insurance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_integratedsearchprovider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentattributeset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentattribute_entity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intententity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentfamily: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentfeature_configuration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentgroupcondition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentharvesting_batchjobstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentharvesting_provisioning_status: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentsolutionmap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_intentsolution_mappingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryadjustment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryjournal: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventorytransfer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotalert: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicecategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicecommand: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicedatahistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdeviceproperty: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotfieldmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotpropertydefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotprovider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotproviderinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iottocaseprocess: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kbattachment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kbenrichment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgeharvestjobrecord: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kpieventdata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kpieventdefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_leadhygienesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_leadkpiitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_leadmodelconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_lineengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_linkedentityattributevalidity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_livechatconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_livechatengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_livechatwidgetlocation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_liveconversation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_liveworkitemevent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_liveworkstream: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_localizedsurveyquestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_locationtemplateassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_locationtypetemplateassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_lockstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_macrosession: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_maskingrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_masterentityroutingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_migrationtracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_mobileapp: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_mobilesource: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_modelpreviewstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_modulerundetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_mostcontacted: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_mostcontactedby: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_msteamssetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_msteamssettingsv2: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_nextaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_notesanalysisconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_notificationfield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_notificationtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_nottoexceed: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocagentassignedcustomapiprivilege: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocapplebusinessaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocapplepay: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocautoblockrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocautomatedactionrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocautomatedactionrulesmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocbotchannelregistration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocbotchannelregistrationsecret: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occarrier: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occhannelapimessageprivilege: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occhannelapimethodmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occhannelconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occhannelstateconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occommunicationprovidersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occustommessagingchannel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocexternalcontext: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocfbapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocfbpage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocflaggedspam: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocgatekeeperengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_oclanguage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_oclinechannelconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_oclocalizationdata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocoutboundconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocoutboundmessage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocpaymentprofile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocphonecallengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocphonemusic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocphonenumber: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocprovisioningstate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocrecording: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocrichobject: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocrichobjectmap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocruleitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsession: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsessioncharacteristic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsessionparticipantevent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsessionsentiment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsimltraining: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsitdimportconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsitdskill: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsitrainingdata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocskillidentmlmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsmschannelsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsmssettingsecret: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsystemmessage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_octag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_octeamschannelconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_octwitterapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_octwitterhandle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_octwitterhandleprovisioningstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_octwitterhandlesecret: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocvoice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocvoicechannellanguagesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocvoicechannelsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocvoicemail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocwechatchannelconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_oc_geolocationprovider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_odosfeaturemetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_odosmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_omnichannelconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_omnichannelpersonalization: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_omnichannelqueue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_omnichannelsyncconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_operatinghour: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitykpiitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitymodelconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingdate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingsetup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_organizationalunit: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orgchartnode: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_originatingqueue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_overflowactionconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_paneconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_panetabconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_panetoolconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_payment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_paymentdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_paymentmethod: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_paymentterm: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_personalmessage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_personalsoundsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_personasecurityrolemapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookactivityattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookcategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbooktemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmanalysishistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmcalendar: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmcalendarversion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pminferredtask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmprocesstemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmprocessusersettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmprocessversion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmrecording: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmsimulation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmview: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postalbum: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postalcode: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postruleconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictioncomputationoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictionmodelstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictionscheduledoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictivemodelscore: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictivescore: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictivescoringsyncstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictworkhourdurationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_preferredagent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_preferredagentcustomeridentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_preferredagentroutedentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_presence: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_priority: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_problematicasset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_problematicassetfeedback: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productinventory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productivityactioninputparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productivityactionoutputparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productivityagentscript: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productivityagentscriptstep: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productivitymacroactiontemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productivitymacroconnector: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productivityparameterdefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_property: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_propertyassetassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_propertylocationassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_propertylog: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_propertytemplateassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_provider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorder: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorderbill: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorderproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_questionsequence: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingincident: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingservice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingservicetask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingsetup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quoteinvoicingproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quoteinvoicingsetup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rawinsightentitylink: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_readtrackingenabledinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_realtimescoring: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_realtimescoringoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_recomputetracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_recording: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_recurringsalesaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_recurringsalesactionv2: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_relationshipanalyticsmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_reportbookmark: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementchange: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementcharacteristic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementdependency: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementgroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementorganizationunit: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementrelationship: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementresourcecategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementresourcepreference: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resolution: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcepaytype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcerequirement: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcerequirementdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourceterritory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_richtextfile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rma: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rmaproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rmareceipt: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rmareceiptproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rmasubstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_routingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_routingconfigurationstep: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_routingrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_routingrulesetsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rtv: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rtvproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rtvsubstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rulesetdependencymapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sabackupdiagnostic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sabatchruninstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesaccelerationinsight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesaccelerationsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesassignmentsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salescopilotinsight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salescopilotorgsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salescopilotusersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesinsightssettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesocmessage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesocsmstemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesroutingdiagnostic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesroutingrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salessuggestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salestag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_saruninstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scenario: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_schedule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scheduleboardsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_schedulingfeatureflag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_schedulingparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_schedulingscope: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sciconversation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scicustomemailhighlight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scicustomhighlight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scicustompublisher: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scienvironmentsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sciusersettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_searchconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_segment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_segmentationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_segmentattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_segmentcatalogue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sentimentanalysis: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sequence: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sequencestat: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sequencetarget: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sequencetargetstep: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sequencetemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_servicecopilotplugin: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_servicecopilotpluginaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_servicecopilotpluginrole: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_serviceoneprovisioningrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_servicetasktype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessiondata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessionevent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessionparticipant: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessionparticipantdata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessiontemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_shareasconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_shipvia: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_siconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sikeyvalueconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_similarentitiesfeatureimportance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_skillattachmentruleitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_skillattachmenttarget: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_slakpi: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_smartassistconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_smsengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_smsnumber: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_soundfile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_soundnotificationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_submodeldefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionassignmentrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestioninteraction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionprincipalobjectaccess: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionrequestpayload: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionsellerpriority: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionsmodelsummary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionssetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_surveyconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_surveyquestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_surveysetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_swarm: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_swarmparticipant: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_swarmparticipantrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_swarmrole: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_swarmskill: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_swarmtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_taggedrecord: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_taxcode: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_taxcodedetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_teamschannelengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_teamschatassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_teamschatsuggestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_teamscollaboration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_teamsdialeradminsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_teamsengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_templateforproperties: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_templateparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_templateruleset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_templatetags: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timeentry: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timeentrysetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timegroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timegroupdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timeoffrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timespent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_tour: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_trade: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_tradecoverage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_trainingresult: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactionorigin: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transcript: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_twitterengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_unifiedroutingrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_uniquenumber: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_untrackedappointment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgraderun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgradestep: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgradeversion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_urnotificationtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_urnotificationtemplatemapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_usagemetric: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_usagereporting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_usersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_visitorjourney: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_vivacustomerlist: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_vivaentitysetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_vivaorgextensioncred: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_vivaorgsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_vivausersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_voicechannelorganizationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wallsavedquery: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_warehouse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_warranty: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wechatengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_whatsappengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wkwcolleaguesforcompany: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wkwcolleaguesforcontact: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wkwconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workflowactionstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workhourtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_worklistviewconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorder: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workordercharacteristic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderincident: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workordernte: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderresolution: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderservice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderservicetask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workordersubstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workordertype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workqueuestate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workqueueusersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workstreamhmmigrationstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_attendeepass: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_authenticationsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_bucket: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_building: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_checkin: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_customregistrationfield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_entitycounter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_event: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventadministration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventanalytics: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventcustomregistrationfield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventmanagementactivity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventmanagementconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventpurchase: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventpurchaseattendee: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventpurchasecontact: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventpurchasepass: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventregistration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventregistrationticket: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventteammember: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventteamsproperties: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_eventvendor: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_file: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_hotel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_hotelroomallocation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_hotelroomreservation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_layout: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_pass: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_registrationresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_room: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_roomreservation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_session: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_sessionregistration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_sessiontrack: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_speaker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_speakerengagement: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_sponsorablearticle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_sponsorship: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_usertokencache: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_venue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_waitlistitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_webapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_webinarconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_webinarconsent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_webinarprovider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_webinartype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msevtmgt_websiteentityconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_alert: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_alertrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_emailtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_fileresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_localizedemailtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_project: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_question: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_questionresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_satisfactionmetric: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_survey: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_surveyinvite: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_surveyreminder: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_surveyresponse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_unsubscribedrecipient: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msgdpr_gdprconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msgdpr_gdprconsentchangerecord: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msgraphresourcetosubscription: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mspcat_packagestore: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunityclose: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunitycompetitors: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunityproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunitysalesprocess: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_orderclose: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncfnostate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncstate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_package: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_packagehistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pdfsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_phonetocaseprocess: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_plannerbusinessscenario: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_plannersyncaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_plugin: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pluginpackage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerbidataset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerbidatasetapdx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerbimashupparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerbireport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerbireportapdx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerfxrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerpagecomponent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerpagesite: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerpagesitelanguage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerpagesitepublished: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerpagesmanagedidentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_powerpagesscanreport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pricelevel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_privilegecheckerlog: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_privilegecheckerrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_privilegesremovalsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_processstageparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_product: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productpricelevel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productsalesliterature: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productsubstitute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_provisionlanguageforuser: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quote: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quoteclose: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quotedetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_ratingmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_ratingvalue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_reconciliationentityinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_reconciliationentitystepinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_reconciliationinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_recordfilter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_recyclebinconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_relationshipattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_reportparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resource: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcegroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcegroupexpansion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcespec: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_retaineddataexcel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_retentioncleanupinfo: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_retentioncleanupoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_retentionconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_retentionfailuredetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_retentionoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_retentionoperationdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_retentionsuccessdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_roleeditorlayout: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesliterature: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesliteratureitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesorder: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesorderdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesprocessinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_searchattributesettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_searchcustomanalyzer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_searchrelationshipsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_service: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceappointment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_servicecontractcontacts: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceplan: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceplancustomcontrol: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceplanmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_settingdefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_sharedlinksetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_sharedobject: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_sharedworkspace: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_sharedworkspacepool: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_sideloadedaiplugin: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_site: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_stagedentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_stagedentityattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_stagedmetadataasyncoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_stagesolutionupload: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_supportusertable: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_synapsedatabase: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_synapselinkprofile: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_synapselinkprofileentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_synapselinkschedule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_tdsmetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_territory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topichistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodelconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodelexecutionhistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uom: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uomschedule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_userrating: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_viewasexamplequestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_virtualentitymetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_workflowbinary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_workqueue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_workqueueitem: string;
		/** Version number of the mailbox tracking folder. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the entry was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Folder Id for a folder in Exchange */
			readonly ExchangeFolderId: string;
			/** Exchange Folder Name */
			readonly ExchangeFolderName: string;
			/** Information to indicate whether the folder has been on boarded for auto tracking */
			readonly FolderOnboardingStatus: string;
			/** Mailbox id associated with this record. */
			readonly MailboxId: string;
			readonly MailboxTrackingFolderId: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the entry was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization associated with the record. */
			readonly OrganizationId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the folder mapping. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the folder mapping. */
			readonly OwningTeam: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_account: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_accountleads: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_activityfileattachment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_activitymonitor: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_adminsettingsentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_adx_externalidentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_adx_invitation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_adx_setting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_adx_webformsession: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aicopilot: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aiplugin: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginauth: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aiplugingovernance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aiplugininstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aiplugintitle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aipluginusersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_aiskillconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appactionmigration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appactionrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appelement: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_application: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_applicationuser: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appusersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_asyncoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_attributeimageconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_attributemaskingrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookableresource: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookableresourcebooking: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookableresourcebookingexchangesyncidmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookableresourcebookingheader: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookableresourcecategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookableresourcecategoryassn: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookableresourcecharacteristic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookableresourcegroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bookingstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bot: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_botcomponent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_botcomponentcollection: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bulkoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bulkoperationlog: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_c360_configuration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_campaign: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_campaignactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_campaignactivityitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_campaignitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_campaignresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_card: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_catalog: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_catalogassignment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_certificatecredential: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_characteristic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_chat: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_childincidentcount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_comment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_commitment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_competitor: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_competitoraddress: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_competitorproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_competitorsalesliterature: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_connectioninstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_connectionreference: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_connector: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_constraintbasedgroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_contact: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_contactinvoices: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_contactleads: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_contactorders: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_contactquotes: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_contract: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_contractdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_contracttemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_conversationtranscript: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_copilotsynonyms: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_credential: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_customapi: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_customeropportunityrole: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_datalakefolder: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_delegatedauthorization: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_deleteditemreference: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_desktopflowbinary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_desktopflowmodule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_discount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_discounttype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dvfilesearch: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dvtablesearch: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dynamicproperty: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dynamicpropertyassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dynamicpropertyinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dynamicpropertyoptionsetitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entitlement: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entitlementchannel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entitlementcontacts: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entitlemententityallocationtypemapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entitlementproducts: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entitlementtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entitlementtemplatechannel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entitlementtemplateproducts: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entityanalyticsconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entityimageconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entityindex: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_entityrecordfilter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_equipment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_exportedexcel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_fabricaiskill: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowevent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowmachine: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowmachineimage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowsession: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_fxexpression: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_governanceconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_holidaywrapper: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_incident: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_incidentknowledgebaserecord: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_incidentresolution: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_indexattributes: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_invoice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_invoicedetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_keyvaultreference: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_knowledgearticleincident: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_lead: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_leadaddress: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_leadcompetitors: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_leadproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_leadtoopportunitysalesprocess: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_list: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_listmember: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_listoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mainfewshot: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_makerfewshot: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_managedidentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_marketingformdisplayattributes: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_maskingrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_metadataforarchival: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_activitymappingmetadatabase: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_additionalentityinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_aibuildercallbacktesthook: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_aibuildermodelmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_analysisinstanceconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_analysismetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_azuremlwebservice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_businessunitconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_cdsamodelmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_clusterloadmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_conflationcriteriastatistics: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_conflationmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_conflationrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_conflationstatistics: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_consentsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_dataflowmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_datapreparationmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_dataqualityfeaturewisemetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_dataqualityoverview: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_dataqualityreport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_datasetcatalog: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_datasourcemetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_datatroubleshootingaccess: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_derivedentitymetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_diagnosticsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_discoveredcdsamodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_discoveryoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_enrichmentmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_enrichmentrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_entityfiltermetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_exportconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_exportconfigreport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_exportedmoduleconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_exportsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_featuretemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_graphmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_hierarchymetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_hostloadmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_importexportstatusmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_insightmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_insightsdataqualityreport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_instancemetrics: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_instancepartnercatalog: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_instancesearchconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_instancesettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_intelligenceworkflowmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_intelligenceworkflowrunmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_intelligenceworkspacemetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_keyvaultmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_lightcdsamodelmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_logicappssubscribermetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_mappedsecretmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_measuremetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_modelconfigmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_moduleconfigurationreference: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_notificationcheckpoint: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_packageimportmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_packagejobmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_packagemetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_platforminstancemapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_powerplatformconnector: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_powerplatformrefreshsignalmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_preenrichmentmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_profilestorestateinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_realtimeaggregatedstats: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_realtimem3configuration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_realtimem3searchconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_realtimepluginmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_realtimesystemtablemetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_realtimetablemetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_refreshhistorymetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_refreshschedulebase: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_refreshstatehistorymetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_relationshipmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_reportmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_resetinstancehistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_resourcemetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_runtimerealtimem3metadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_segmentmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_semanticentitymappingmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_sparkjobexecutionmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_templatedmeasuremetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_templatedsegmentmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_transformmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_addtocalendarstyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_appointmentactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_basestyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_buttonstyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_cdnconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_cdsaconnectorconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_codestyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_columnstyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_contentblock: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_contentblockstyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_contentsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_createleadactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_customerinsightsinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_customerjourney: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneycustomchannelactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneyiteration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneyruntimestate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneytemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_customerjourneyworkflowlink: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_defaultmarketingsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_delaydatetimeactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_delaydurationactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_deprecatedcustomtileactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_deprecatedeventactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_deprecatedformsprosurveyactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_deprecatedpageactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_designerfeatureavailability: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_digitalassetsconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_dividerstyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_emailkeypoint: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_featureconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_file: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_formpage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_formpagetemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_generalstyles: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_geopin: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_gpt3log: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_gwennolfeatureconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_gwennolspamscoreactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_gwennolspamscorerequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_imagestyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_keyword: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_launchworkflowactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_layoutstyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_leadentityfield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_leadscore: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_leadscoremodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_leadscore_v2: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_leadscoringconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_leadtoopportunity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaudience: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedincampaign: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedincampaignactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinform: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_listform: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_liveentitydependency: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingdataimport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingemail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingfieldsubmission: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingform: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingformactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingformfield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingformsubmission: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingformtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingformwhitelistrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingpage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingpageconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_marketingpagetemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_matchingstrategy: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_matchingstrategyattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_migration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_mktactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_networkpage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_personalizedpage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_personalizedpagefield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_phonecallactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_portalsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_postingishts: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_qrcodestyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_quicksendemail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_quotainfoentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_reaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_recordupdateactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_redirecturl: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_segment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_segmentactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_segmenttemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_setupdomain: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_socialpost: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_socialpostingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_socialpostingconsent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_sourceactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_splitteractivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_tag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_taskactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_taskactivitymarketingtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_textstyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_triggeractivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_uicconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_usergeoregion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_usersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_video: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_videostyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyncrm_website: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_aimodelversion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_apsconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_brandprofile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_brandsender: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_brandtheme: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_buttonstyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_byoacschannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_byoacschannelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_captcha: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_catalogeventstatusconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_cmsaddon: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_comparatormetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_compliancesettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_compliancesettings3: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_compliancesettings4: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_configuration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_consent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_consentcenterconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_consentprovider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_consentproviderdefaultconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_consentproviderdefaultpurpose: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_consentproviderlocalization: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_consentsystemconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_contactpointconsent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_contactpointconsent2: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_contactpointconsent3: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_contactpointconsent4: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_contactpointsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_conversioneventdefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_createdentitylink: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_customchannelmessage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_customerdatamapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_customerdataselection: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_domain: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_email: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_emailtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_entitygradedistribution: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_entityscoredistribution: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_entityscoringmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_eventmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_eventparametermetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_experiment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_experimentv2: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_featureconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_formsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_formtargetaudience: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_fragment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_frequencycap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_gdprrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_imagestyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_infobipchannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_infobipchannelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_journey: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_journeydependency: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_journeyevent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_journeyoptimizationcount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_journeyrunparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_journeysetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_journeytemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_journeyworkflowmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_keyword: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_leadqualificationmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_linkmobilitychannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_marketingfieldsubmission: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_marketingform: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_marketingformfield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_marketingformsubmission: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_marketingformtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_matchingstrategy: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_matchingstrategyattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_metadataentityrelationship: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_metadataitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_metadatastorestate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_mobileapp: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_mobileappchannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_mobiledevice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_predefinedplaceholder: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_preferencecenter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_preferencecenterlink: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_purpose: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_pushdeviceregistrationresult: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_pushmobiledevice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_pushnotification: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_qrcodestyle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_quiettimesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_recaptchaconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_segment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_segmentdefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_segmentexecution: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_segmentusage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_sms: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_submitbutton: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_tag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_teamsengagement: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_telesignchannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_telesignchannelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_topic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_twiliochannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_twiliochannelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_utmtracking: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_vibeschannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_vibeschannelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynmkt_webinaremailjourney: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_3dmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_accountkpiitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_actioncardactionstat: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_actioncardregarding: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_actioncardrolesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_actioncardstataggregation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_activeicdextension: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_activityanalysiscleanupstate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_activityanalysisconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_actual: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_adaptivecardconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_adminappstate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentcapacityprofileunit: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentcapacityupdatehistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentchannelstate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentcopilotsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentgroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentgroupmembership: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentresourceforecasting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agentstatushistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreement: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementbookingdate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementbookingincident: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementbookingproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementbookingsetup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicedate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_agreementsubstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aicontactsuggestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aievent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_analytics: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_analyticsadminsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_analyticsforcs: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_apirequestcache: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_apirequestfolder: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_appconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_appcopilotconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_applicationextension: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_applicationtabtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_appprofilerolemapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_appstate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_assetcategorytemplateassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_assetsuggestionssetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_assettemplateassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_assignmentconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_assignmentconfigurationstep: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_assignmentmap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_assignmentrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_attribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_attributeinfluencestatistics: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_attributevalue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_authenticationsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_authsettingsentry: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_autocapturerule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_autocapturesettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_autonomouscasecreationrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookableresourceassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookingalert: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookingalertstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookingchange: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookingjournal: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookingrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookingsetupmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bookingtimestamp: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_botsession: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_businessclosure: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_callablecontext: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_cannedmessage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_capacityprofile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_caseenrichment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_casefollowupandclosureconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_casesuggestionrequestpayload: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_casetopic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_casetopicsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_casetopicsummary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_casetopic_incident: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_cdsentityengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channelcapability: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channeldefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channeldefinitionconsent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channeldefinitionlocale: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channelinstancesecret: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channelmessageattachment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channelmessagecontextpart: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channelmessagepart: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_channelprovider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_chatansweroption: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_chatquestionnaireresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_chatwidgetlanguage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ciprovider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_clientextension: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_collabgraphresource: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_collabspaceteamassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_configuration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_consoleapplicationtype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_consoleappparameterdefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_consumingapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contactkpiitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contactsuggestionrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contactsuggestionruleset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationactionitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationactionlocale: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationaggregatedinsights: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationcomment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationdata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationinsight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationmessageblock: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationparticipantinsights: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationparticipantsentiment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationquestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsegmentsentiment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsentiment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsignal: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsubject: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsummaryinteraction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsummarysetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsummarysuggestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsystemtag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtopic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtopicsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtopicsummary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtopic_conversation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_copilotagentpreference: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_copilotinteraction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_copilotinteractiondata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_copilotinteractions: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_copilotknowledgeinteraction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_copilotsummarizationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_copilottranscript: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_copilottranscriptdata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_crmconnection: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_csadminconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_cskeyvalueconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customapirulesetconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerasset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerassetattachment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerassetcategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customeremailcommunication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerfeedbacksurvey: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerfeedbacksurveyinvite: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerfeedbacksurveyresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dailyaccountkpiitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dailycontactkpiitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dailyleadkpiitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dailyopportunitykpiitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsdataset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_copilot: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fs: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_mc: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_mkt: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc_rt: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sareporting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsworkspace: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_databaseversion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_datahygienesettinginfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dealmanageraccess: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dealmanagersettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_decisioncontract: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_decisionruleset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_defextendedchannelinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_defextendedchannelinstanceaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_deletedconversation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_derivedinsightsrelatedentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_digitalsellingactivetask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_digitalsellingcompletedtask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_distributedlock: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_duplicateleadmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_effortpredictionresult: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entitlementapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityattachment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityattributepredictionrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityderivedinsight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityrankingrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityroutingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityworkstreammap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_extendedusersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_externalcrm: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_externalrecord: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_facebookengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldservicepricelistitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldservicesummaryconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldservicesystemjob: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flowcardtype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flwconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastdefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastingcache: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastpredictionstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastrecurrence: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastsettingsandsummary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_formmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_function: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_functionallocation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_functionallocationtype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_gdprdata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_geofence: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_geofenceevent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_geofencingsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_geolocationsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_geolocationtracking: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_historicalcaseharvestbatch: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_historicalcaseharvestrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_icdextension: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_icebreakersconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iermlmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iermltraining: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inboxcardconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inboxconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inboxentityconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttypeproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttyperecommendationresult: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttyperesolution: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservicetask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttypessetup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_incidenttype_requirementgroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inspection: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inspectionattachment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inspectiondefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inspectioninstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inspectionresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_insurance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentattributeset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentattribute_entity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intententity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentfamily: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentfeature_configuration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentgroupcondition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentharvesting_batchjobstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentharvesting_provisioning_status: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentsolutionmap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_intentsolution_mappingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotalert: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotdevice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotdevicecategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotdevicecommand: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotdevicecommanddefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotdevicedatahistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotdeviceproperty: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotfieldmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotpropertydefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotprovider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotproviderinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iotsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iottocaseprocess: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_kbenrichment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgeharvestjobrecord: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_kpieventdata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_kpieventdefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_leadhygienesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_leadkpiitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_leadmodelconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_lineengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_linkedentityattributevalidity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_livechatconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_livechatengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_livechatwidgetlocation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_liveconversation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_liveworkitemevent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_liveworkstream: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_localizedsurveyquestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_locationtemplateassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_locationtypetemplateassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_lockstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_macrosession: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_maskingrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_masterentityroutingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_migrationtracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_mobilesource: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_modelpreviewstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_mostcontacted: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_mostcontactedby: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_msteamssetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_msteamssettingsv2: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_nextaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_notesanalysisconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_notificationfield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_notificationtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_nottoexceed: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocagentassignedcustomapiprivilege: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocapplebusinessaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocapplepay: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocautoblockrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocautomatedactionrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocautomatedactionrulesmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocbotchannelregistration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocbotchannelregistrationsecret: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occarrier: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occhannelapimessageprivilege: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occhannelapimethodmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occhannelconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occhannelstateconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occommunicationprovidersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_occustommessagingchannel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocexternalcontext: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocfbapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocfbpage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocflaggedspam: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocgatekeeperengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_oclanguage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_oclinechannelconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemparticipant: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocliveworkitemsentiment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_oclocalizationdata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocoutboundconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocoutboundmessage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocpaymentprofile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocphonecallengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocphonemusic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocphonenumber: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocprovisioningstate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocrecording: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocrichobject: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocrichobjectmap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocruleitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsession: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsessioncharacteristic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsessionparticipantevent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsessionsentiment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsimltraining: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsitdimportconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsitdskill: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsitrainingdata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocskillidentmlmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsmschannelsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsmssettingsecret: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocsystemmessage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_octag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_octeamschannelconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_octwitterapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_octwitterhandle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_octwitterhandleprovisioningstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_octwitterhandlesecret: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocvoice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocvoicechannellanguagesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocvoicechannelsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocvoicemail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocwechatchannelconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_oc_geolocationprovider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_odosfeaturemetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_odosmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_omnichannelconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_omnichannelpersonalization: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_omnichannelqueue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_omnichannelsyncconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_operatinghour: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_opportunitykpiitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_opportunitymodelconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingdate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingsetup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingsetupdate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_organizationalunit: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orgchartnode: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_originatingqueue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_overflowactionconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_paneconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_panetabconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_panetoolconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_payment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_paymentdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_paymentmethod: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_paymentterm: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_personalmessage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_personalsoundsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_personasecurityrolemapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_playbookactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_playbookactivityattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_playbookcategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_playbookinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_playbooktemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmview: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_postalbum: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_postalcode: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_postconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_postruleconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictioncomputationoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictionmodelstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictionscheduledoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictivemodelscore: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictivescore: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictivescoringsyncstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictworkhourdurationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_preferredagent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_preferredagentcustomeridentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_preferredagentroutedentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_presence: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_priority: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_problematicasset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_problematicassetfeedback: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productinventory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productivityactioninputparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productivityactionoutputparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productivityagentscript: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productivityagentscriptstep: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productivitymacroactiontemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productivitymacroconnector: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_productivityparameterdefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_property: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_propertyassetassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_propertylocationassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_propertylog: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_propertytemplateassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_provider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_purchaseorder: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_purchaseorderbill: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_purchaseorderproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_questionsequence: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotebookingincident: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotebookingproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotebookingservice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotebookingservicetask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotebookingsetup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quoteinvoicingproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quoteinvoicingsetup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rawinsightentitylink: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_readtrackingenabledinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_realtimescoring: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_realtimescoringoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_recomputetracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_recording: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_recurringsalesaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_recurringsalesactionv2: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_relationshipanalyticsmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_reportbookmark: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementchange: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementcharacteristic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementdependency: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementgroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementorganizationunit: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementrelationship: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementresourcecategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementresourcepreference: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_requirementstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resolution: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourcepaytype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourcerequirement: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourcerequirementdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourceterritory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rma: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rmaproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rmareceipt: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rmareceiptproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rmasubstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_routingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_routingconfigurationstep: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_routingrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_routingrulesetsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rtv: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rtvproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rtvsubstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_rulesetdependencymapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sabackupdiagnostic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sabatchruninstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesaccelerationinsight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesaccelerationsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesassignmentsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salescopilotinsight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salescopilotorgsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salescopilotusersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesinsightssettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesocmessage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesocsmstemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesroutingdiagnostic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesroutingrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salessuggestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salestag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_saruninstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_scenario: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_schedule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_scheduleboardsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_schedulingfeatureflag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_schedulingparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_schedulingscope: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sciconversation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_scicustomemailhighlight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_scicustomhighlight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_scicustompublisher: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_scienvironmentsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sciusersettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_searchconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_segment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_segmentationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_segmentattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_segmentcatalogue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sentimentanalysis: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sequence: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sequencestat: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sequencetarget: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sequencetargetstep: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sequencetemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_servicecopilotplugin: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_servicecopilotpluginaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_servicecopilotpluginrole: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_serviceoneprovisioningrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_servicetasktype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sessiondata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sessionevent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sessionparticipant: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sessionparticipantdata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sessiontemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_shareasconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_shipvia: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_siconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sikeyvalueconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_similarentitiesfeatureimportance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_skillattachmentruleitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_skillattachmenttarget: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_smartassistconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_smsengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_smsnumber: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_soundfile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_soundnotificationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_submodeldefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionassignmentrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestioninteraction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionprincipalobjectaccess: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionrequestpayload: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionsellerpriority: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionsmodelsummary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionssetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_surveyconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_surveyquestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_surveysetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_swarm: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_swarmparticipant: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_swarmparticipantrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_swarmrole: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_swarmskill: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_swarmtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_taggedrecord: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_taxcode: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_taxcodedetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_teamschannelengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_teamschatassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_teamschatsuggestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_teamscollaboration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_teamsdialeradminsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_teamsengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_templateforproperties: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_templateparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_templateruleset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_templatetags: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_timeentry: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_timeentrysetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_timegroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_timegroupdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_timespent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_tour: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_trade: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_tradecoverage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_trainingresult: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transactionorigin: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transcript: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_twitterengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_unifiedroutingrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_uniquenumber: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_untrackedappointment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_upgraderun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_upgradestep: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_upgradeversion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_urnotificationtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_urnotificationtemplatemapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_usagemetric: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_usagereporting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_usersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_visitorjourney: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_vivacustomerlist: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_vivaentitysetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_vivaorgextensioncred: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_vivaorgsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_vivausersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_voicechannelorganizationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wallsavedquery: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wallsavedqueryusersettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_warehouse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_warranty: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wechatengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_whatsappengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wkwcolleaguesforcompany: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wkwcolleaguesforcontact: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wkwconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workhourtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_worklistviewconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workorder: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workordercharacteristic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workorderincident: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workordernte: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workorderproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workorderresolution: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workorderservice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workorderservicetask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workordersubstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workordertype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workqueuestate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workqueueusersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_workstreamhmmigrationstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_attendeepass: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_authenticationsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_bucket: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_building: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_checkin: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_customregistrationfield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_entitycounter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_event: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventadministration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventanalytics: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventcustomregistrationfield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventmanagementactivity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventmanagementconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchase: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasecontact: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventregistration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventregistrationticket: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventteammember: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventteamsproperties: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_eventvendor: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_file: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_hotel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_layout: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_pass: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_registrationresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_room: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_roomreservation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_session: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_sessionregistration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_sessiontrack: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_speaker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_speakerengagement: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_sponsorship: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_usertokencache: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_venue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_waitlistitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_webapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_webinarconsent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_webinarprovider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_webinartype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msevtmgt_websiteentityconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_alert: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_alertrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_emailtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_fileresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_localizedemailtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_project: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_question: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_questionresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_satisfactionmetric: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_survey: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_surveyinvite: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_surveyreminder: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_surveyresponse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msfp_unsubscribedrecipient: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msgdpr_gdprconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msgdpr_gdprconsentchangerecord: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_opportunity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_opportunityclose: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_opportunitycompetitors: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_opportunityproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_opportunitysalesprocess: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_orderclose: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_package: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_packagehistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_pdfsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_phonetocaseprocess: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_plannersyncaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_plugin: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_pluginpackage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerbidataset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerbireport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerbireportapdx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerfxrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerpagecomponent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerpagesite: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerpagesmanagedidentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_pricelevel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_processstageparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_product: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_productassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_productpricelevel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_productsalesliterature: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_productsubstitute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_quote: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_quoteclose: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_quotedetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_ratingmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_ratingvalue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_reconciliationinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_recordfilter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_recyclebinconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_relationshipattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_reportparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_resource: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_resourcegroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_resourcegroupexpansion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_resourcespec: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_retaineddataexcel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_retentionconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_retentionoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_retentionsuccessdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_roleeditorlayout: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_salesliterature: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_salesliteratureitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_salesorder: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_salesorderdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_salesprocessinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_searchattributesettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_service: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_serviceappointment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_servicecontractcontacts: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_serviceplan: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_serviceplancustomcontrol: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_settingdefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_sharedobject: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_sharedworkspace: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_site: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_stagedentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_stagedentityattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_supportusertable: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_synapsedatabase: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_tdsmetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_territory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_topic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_topichistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_topicmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_topicmodelconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_topicmodelexecutionhistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uom: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uomschedule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_userrating: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_workflowbinary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_workqueue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_workqueueitem: string;
			/** Version number of the mailbox tracking folder. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingFolder {
		enum RegardingObjectTypeCode {
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
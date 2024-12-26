//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class BulkDeleteFailureApi {
		/**
		* DynamicsCrm.DevKit BulkDeleteFailureApi
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
		/** Unique identifier of the system job that created this record. */
		readonly AsyncOperationId: string;
		/** Unique identifier of the bulk deletion failure record. */
		readonly BulkDeleteFailureId: string;
		/** Unique identifier of the bulk operation job which created this record */
		readonly BulkDeleteOperationId: string;
		/** Description of the error. */
		readonly ErrorDescription: string;
		/** Error code for the failed bulk deletion. */
		readonly ErrorNumber: number;
		/** Index of the ordered query expression that retrieved this record. */
		readonly OrderedQueryIndex: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the bulk deletion failure. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the bulk deletion failure record.
 */
		readonly OwningUser: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_account: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_accountleads: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_activityfileattachment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_activitymimeattachment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_activitymonitor: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_activitypointer: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_adminsettingsentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_adx_externalidentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_adx_invitation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_adx_inviteredemption: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_adx_portalcomment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_adx_setting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_adx_webformsession: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aicopilot: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aiplugin: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginauth: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginconversationstarter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginconversationstartermapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginexternalschema: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginexternalschemaproperty: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aiplugingovernance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aiplugingovernanceext: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aiplugininstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginoperationparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginoperationresponsetemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aiplugintitle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aipluginusersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_aiskillconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_annotation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_annualfiscalcalendar: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appaction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appactionmigration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appactionrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appelement: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_application: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_applicationuser: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appmodulecomponentedge: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appmodulecomponentnode: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appointment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_appusersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_archivecleanupinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_archivecleanupoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_attributeimageconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_attributemap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_attributemaskingrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookableresource: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookableresourcebooking: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookableresourcebookingexchangesyncidmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookableresourcebookingheader: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookableresourcecategory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookableresourcecategoryassn: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookableresourcecharacteristic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookableresourcegroup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bookingstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bot: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_botcomponent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_botcomponentcollection: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bulkarchiveconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bulkarchivefailuredetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bulkarchiveoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bulkarchiveoperationdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bulkoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_bulkoperationlog: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_businessunit: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_businessunitnewsarticle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_c360_configuration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_calendar: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_campaign: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_campaignactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_campaignactivityitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_campaignitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_campaignresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_canvasappextendedmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_card: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_catalog: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_catalogassignment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_certificatecredential: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly channelaccessprofile_bulkdeletefailures: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly channelaccessprofileruleid: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_characteristic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_chat: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_childincidentcount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_comment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_commitment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_competitor: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_competitoraddress: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_competitorproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_competitorsalesliterature: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_connectioninstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_connectionreference: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_connector: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_constraintbasedgroup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_contact: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_contactinvoices: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_contactleads: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_contactorders: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_contactquotes: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_contract: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_contractdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_contracttemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_conversationtranscript: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_copilotexamplequestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_copilotglossaryterm: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_copilotsynonyms: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_credential: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_customapi: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_customapirequestparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_customapiresponseproperty: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_customeraddress: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_customeropportunityrole: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_customerrelationship: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_datalakefolder: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_datalakefolderpermission: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_datalakeworkspace: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_datalakeworkspacepermission: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dataprocessingconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_delegatedauthorization: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_deleteditemreference: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_desktopflowbinary: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_desktopflowmodule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_discount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_discounttype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_displaystring: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dvfilesearch: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dvfilesearchattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dvfilesearchentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dvtablesearch: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dvtablesearchattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dvtablesearchentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dynamicproperty: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dynamicpropertyassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dynamicpropertyinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_dynamicpropertyoptionsetitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_email: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_emailserverprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_enablearchivalrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitlement: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitlementchannel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitlementcontacts: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitlemententityallocationtypemapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitlementproducts: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitlementtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitlementtemplatechannel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitlementtemplateproducts: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entityanalyticsconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entityimageconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entityindex: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entitymap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_entityrecordfilter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_environmentvariabledefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_environmentvariablevalue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_equipment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_exportedexcel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_exportsolutionupload: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly externalparty_bulkdeletefailures: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly externalpartyitem_bulkdeletefailures: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_fabricaiskill: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_fax: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_featurecontrolsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_federatedknowledgeconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_fixedmonthlyfiscalcalendar: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowcapacityassignment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowcredentialapplication: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowevent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowmachine: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowmachinegroup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowmachineimage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowmachineimageversion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowmachinenetwork: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_flowsession: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_fxexpression: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_governanceconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_holidaywrapper: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_import: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_importdata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_importfile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_importlog: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_importmap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_incident: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_incidentknowledgebaserecord: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_incidentresolution: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_indexattributes: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_internalcatalogassignment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_invoice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_invoicedetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_isvconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_kbarticle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_kbarticlecomment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_kbarticletemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_keyvaultreference: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_knowledgearticle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_knowledgearticleincident: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_knowledgebaserecord: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_lead: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_leadaddress: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_leadcompetitors: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_leadproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_leadtoopportunitysalesprocess: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_letter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_list: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_listmember: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_listoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mainfewshot: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_makerfewshot: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_managedidentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_marketingformdisplayattributes: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_maskingrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_metadataforarchival: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mobileofflineprofileextension: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_monthlyfiscalcalendar: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_activitymappingmetadatabase: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_additionalentityinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_aibuildercallbacktesthook: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_aibuildermodelmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_analysisinstanceconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_analysismetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_azuremlwebservice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_businessunitconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_cdsamodelmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_clusterloadmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_conflationcriteriastatistics: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_conflationmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_conflationrun: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_conflationstatistics: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_consentsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_dataflowmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_datapreparationmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_dataqualityfeaturewisemetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_dataqualityoverview: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_dataqualityreport: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_datasetcatalog: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_datasourcemetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_datatroubleshootingaccess: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_derivedentitymetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_diagnosticsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_discoveredcdsamodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_discoveryoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_enrichmentmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_enrichmentrun: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_entityfiltermetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_exportconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_exportconfigreport: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_exportedmoduleconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_exportsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_featuretemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_graphmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_hierarchymetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_hostloadmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_importexportstatusmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_insightmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_insightsdataqualityreport: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_instancemetrics: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_instancepartnercatalog: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_instancesearchconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_instancesettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_intelligenceworkflowmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_intelligenceworkflowrunmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_intelligenceworkspacemetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_keyvaultmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_lightcdsamodelmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_logicappssubscribermetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_mappedsecretmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_measuremetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_modelconfigmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_moduleconfigurationreference: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_notificationcheckpoint: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_packageimportmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_packagejobmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_packagemetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_platforminstancemapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_powerplatformconnector: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_powerplatformrefreshsignalmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_preenrichmentmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_profilestorestateinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_realtimeaggregatedstats: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_realtimem3configuration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_realtimem3searchconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_realtimepluginmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_realtimesystemtablemetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_realtimetablemetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_refreshhistorymetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_refreshschedulebase: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_refreshstatehistorymetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_relationshipmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_reportmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_resetinstancehistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_resourcemetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_runtimerealtimem3metadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_segmentmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_semanticentitymappingmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_sparkjobexecutionmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_templatedmeasuremetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_templatedsegmentmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_transformmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynce_botcontent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_addtocalendarstyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_appointmentactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_basestyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_buttonstyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_cdnconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_cdsaconnectorconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_codestyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_columnstyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_contentblock: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_contentblockstyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_contentsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_createleadactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_customerinsightsinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_customerjourney: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_customerjourneycustomchannelactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_customerjourneyiteration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_customerjourneyruntimestate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_customerjourneytemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_customerjourneyworkflowlink: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_defaultmarketingsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_delaydatetimeactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_delaydurationactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_deprecatedcustomtileactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_deprecatedeventactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_deprecatedformsprosurveyactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_deprecatedpageactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_designerfeatureavailability: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_digitalassetsconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_dividerstyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_emailkeypoint: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_featureconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_file: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_formpage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_formpagetemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_generalstyles: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_geopin: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_gpt3log: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_gwennolfeatureconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_gwennolspamscoreactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_gwennolspamscorerequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_imagestyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_keyword: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_launchworkflowactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_layoutstyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_leadentityfield: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_leadscore: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_leadscoremodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_leadscore_v2: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_leadscoringconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_leadtoopportunity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinaudience: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedincampaign: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedincampaignactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinfieldmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinform: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinformanswer: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinformquestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinformsubmission: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_linkedinuserprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_listform: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_liveentitydependency: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingdataimport: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingemail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingemailactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingemailtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingemailtest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingemailtestattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingemailtestsend: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingfieldsubmission: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingform: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingformactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingformfield: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingformsubmission: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingformtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingformwhitelistrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingpage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingpageconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_marketingpagetemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_matchingstrategy: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_matchingstrategyattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_migration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_mktactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_networkpage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_personalizedpage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_personalizedpagefield: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_phonecallactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_portalsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_postingishts: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_qrcodestyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_quicksendemail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_quotainfoentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_reaction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_recordupdateactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_redirecturl: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_segment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_segmentactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_segmenttemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_setupdomain: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_socialpost: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_socialpostingconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_socialpostingconsent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_sourceactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_splitteractivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_tag: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_taskactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_taskactivitymarketingtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_textstyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_triggeractivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_uicconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_usergeoregion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_usersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_video: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_videostyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyncrm_website: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_aimodelversion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_apsconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_brandprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_brandsender: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_brandtheme: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_buttonstyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_byoacschannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_byoacschannelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_captcha: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_catalogeventstatusconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_cmsaddon: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_comparatormetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_compliancesettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_compliancesettings3: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_compliancesettings4: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_configuration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_consent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_consentcenterconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_consentprovider: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_consentproviderdefaultconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_consentproviderdefaultpurpose: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_consentproviderlocalization: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_consentsystemconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_contactpointconsent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_contactpointconsent2: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_contactpointconsent3: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_contactpointconsent4: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_contactpointsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_conversioneventdefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_createdentitylink: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_customchannelmessage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_customerdatamapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_customerdataselection: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_domain: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_email: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_emailtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_entitygradedistribution: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_entityscoredistribution: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_entityscoringmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_eventmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_eventparametermetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_experiment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_experimentv2: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_featureconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_formsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_formtargetaudience: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_fragment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_frequencycap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_gdprrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_imagestyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_infobipchannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_infobipchannelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_journey: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_journeydependency: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_journeyevent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_journeyoptimizationcount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_journeyrunparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_journeysetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_journeytemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_journeyworkflowmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_keyword: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_leadqualificationmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_linkmobilitychannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_marketingfieldsubmission: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_marketingform: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_marketingformfield: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_marketingformsubmission: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_marketingformtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_matchingstrategy: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_matchingstrategyattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_metadataentityrelationship: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_metadataitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_metadatastorestate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_mobileapp: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_mobileappchannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_mobiledevice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_predefinedplaceholder: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_preferencecenter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_preferencecenterlink: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_purpose: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_pushdeviceregistrationresult: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_pushmobiledevice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_pushnotification: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_qrcodestyle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_quiettimesetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_recaptchaconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_segment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_segmentdefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_segmentexecution: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_segmentusage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_sms: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_submitbutton: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_tag: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_teamsengagement: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_telesignchannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_telesignchannelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_topic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_twiliochannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_twiliochannelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_utmtracking: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_vibeschannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_vibeschannelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdynmkt_webinaremailjourney: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_3dmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_accountkpiitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_actioncardactionstat: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_actioncardregarding: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_actioncardrolesetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_actioncardstataggregation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_activeicdextension: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_activityanalysiscleanupstate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_activityanalysisconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_actual: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_adaptivecardconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_adminappstate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentcapacityprofileunit: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentcapacityupdatehistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentchannelstate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentcopilotsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentgroup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentgroupmembership: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentresourceforecasting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agentstatushistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreement: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aibdataset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aibdatasetfile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aibfile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aiconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aicontactsuggestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aievent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aimodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aiodimage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aiodlabel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_aitemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_analysiscomponent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_analysisjob: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_analysisoverride: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_analysisresult: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_analysisresultdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_analytics: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_analyticsadminsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_analyticsforcs: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_apirequestcache: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_apirequestfolder: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_appconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_appcopilotconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_appinsightsmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_applicationextension: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_appprofilerolemapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_appstate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_assetcategorytemplateassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_assetsuggestionssetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_assettemplateassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_assignmentconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_assignmentconfigurationstep: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_assignmentmap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_assignmentrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_attribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_attributeinfluencestatistics: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_attributevalue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_authenticationsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_authsettingsentry: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_autocapturerule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_autocapturesettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_autonomouscasecreationrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookableresourceassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookingalert: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookingchange: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookingjournal: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookingrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookingsetupmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_botsession: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_businessclosure: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_callablecontext: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_cannedmessage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_capacityprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_caseenrichment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_casefollowupandclosureconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_casesuggestionrequestpayload: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_casetopic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_casetopicsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_casetopicsummary: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_casetopic_incident: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_cdsentityengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channelcapability: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channeldefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channeldefinitionconsent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channeldefinitionlocale: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channelinstancesecret: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channelmessageattachment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channelmessagecontextpart: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channelmessagepart: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_channelprovider: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_chatansweroption: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_chatquestionnaireresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_chatwidgetlanguage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ciprovider: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_clientextension: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_collabgraphresource: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_collabspaceteamassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_configuration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_consoleapplicationtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_consoleapplicationtype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_consoleappparameterdefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_consumingapplication: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_contactkpiitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationaction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationactionitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationaggregatedinsights: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationcomment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationdata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationinsight: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationmessageblock: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationparticipantinsights: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationparticipantsentiment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationquestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationsegmentsentiment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationsentiment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationsignal: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationsubject: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationsummaryinteraction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationsummarysetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationsummarysuggestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationsystemtag: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationtag: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationtopic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationtopicsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationtopicsummary: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_conversationtopic_conversation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_copilotagentpreference: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_copilotinteraction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_copilotinteractiondata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_copilotinteractions: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_copilotknowledgeinteraction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_copilotsummarizationsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_copilottranscript: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_copilottranscriptdata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_crmconnection: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_csadminconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_cskeyvalueconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customapirulesetconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customerasset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customerassetattachment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customerassetcategory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customeremailcommunication: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customerfeedbacksurvey: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customerfeedbacksurveyinvite: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_customerfeedbacksurveyresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dailyaccountkpiitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dailycontactkpiitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dailyleadkpiitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dailyopportunitykpiitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsdataset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_copilot: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_fs: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_mc: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_mkt: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_oc: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_oc_rt: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_sareporting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataanalyticsworkspace: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_databaseversion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataflow: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataflowtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_datahygienesettinginfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dealmanageraccess: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dealmanagersettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_decisioncontract: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_decisionruleset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_defextendedchannelinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_defextendedchannelinstanceaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_deletedconversation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_derivedinsightsrelatedentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_digitalsellingactivetask: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_digitalsellingcompletedtask: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_distributedlock: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dmsrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dmsrequeststatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dmssyncrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_dmssyncstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entitlementapplication: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityattachment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityattributepredictionrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityderivedinsight: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityrankingrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityroutingconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_entityworkstreammap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_extendedusersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_externalcrm: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_externalrecord: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_facebookengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_federatedarticle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_fieldservicesetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_fieldservicesummaryconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_fieldservicesystemjob: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_fileupload: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flowcardtype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_approval: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_approvalrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_approvalresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_approvalstep: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flow_flowapproval: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_flwconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_forecastdefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_forecastingcache: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_forecastinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_forecastpredictionstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_formmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_function: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_functionallocation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_functionallocationtype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_gdprdata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_geofence: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_geofenceevent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_geofencingsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_geolocationsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_geolocationtracking: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_helppage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_historicalcaseharvestbatch: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_historicalcaseharvestrun: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_icdextension: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iermlmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iermltraining: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inboxcardconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inboxconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inboxentityconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttyperecommendationresult: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttyperesolution: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttypeservicetask: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_incidenttype_requirementgroup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inspection: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inspectionattachment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inspectiondefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inspectioninstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inspectionresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_insurance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_integratedsearchprovider: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentattributeset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentattribute_entity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intententity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentfamily: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentfeature_configuration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentgroupcondition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentharvesting_batchjobstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentharvesting_provisioning_status: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentsolutionmap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_intentsolution_mappingconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inventoryjournal: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_inventorytransfer: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotalert: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotdevice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotdevicecommanddefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotdevicedatahistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotdeviceproperty: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotfieldmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotpropertydefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotprovider: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotproviderinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iotsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_iottocaseprocess: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_kalanguagesetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_kbattachment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_kbenrichment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgeharvestjobrecord: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_kpieventdata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_kpieventdefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_leadhygienesetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_leadkpiitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_lineengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_linkedentityattributevalidity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_livechatconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_livechatengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_livechatwidgetlocation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_liveconversation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_liveworkitemevent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_liveworkstream: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_localizedsurveyquestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_locationtemplateassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_locationtypetemplateassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_lockstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_macrosession: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_maskingrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_migrationtracker: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_mobileapp: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_mobilesource: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_modulerundetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_mostcontacted: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_mostcontactedby: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_msteamssetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_msteamssettingsv2: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_nextaction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_notesanalysisconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_notificationfield: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_notificationtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_nottoexceed: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocagentassignedcustomapiprivilege: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocapplepay: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocautomatedactionrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocautomatedactionrulesmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocbotchannelregistration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocbotchannelregistrationsecret: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occarrier: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occhannelapimessageprivilege: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occhannelapimethodmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occhannelconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occhannelstateconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occommunicationprovidersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_occustommessagingchannel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocexternalcontext: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocfbapplication: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocfbpage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocgatekeeperengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_oclanguage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_oclinechannelconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocliveworkitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocliveworkitemparticipant: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocliveworkitemsentiment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_oclocalizationdata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocoutboundconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocpaymentprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocphonecallengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocphonemusic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocphonenumber: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocprovisioningstate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocrecording: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocrichobject: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocrichobjectmap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocruleitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsentimentdailytopic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsession: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsessioncharacteristic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsessionparticipantevent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsessionsentiment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsimltraining: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsitdimportconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsitdskill: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsitrainingdata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocskillidentmlmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsmschannelsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsmssettingsecret: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocsystemmessage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_octag: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_octeamschannelconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_octwitterapplication: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_octwitterhandle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_octwitterhandleprovisioningstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_octwitterhandlesecret: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocvoice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocvoicechannellanguagesetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocvoicechannelsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocvoicemail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_oc_geolocationprovider: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_odosfeaturemetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_odosmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_omnichannelconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_omnichannelpersonalization: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_omnichannelqueue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_omnichannelsyncconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_operatinghour: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_opportunitykpiitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_organizationalunit: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_orgchartnode: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_originatingqueue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_paneconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_panetabconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_panetoolconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_payment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_paymentdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_paymentmethod: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_paymentterm: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_personalmessage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_personasecurityrolemapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_playbookactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_playbookactivityattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_playbookcategory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_playbookinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_playbooktemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmanalysishistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmcalendar: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmcalendarversion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pminferredtask: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmprocesstemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmprocessusersettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmprocessversion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmrecording: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmsimulation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_pmview: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_postalbum: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_postalcode: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_postconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_postruleconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_predictioncomputationoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_predictionmodelstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_predictionscheduledoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_predictivescore: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_predictivescoringsyncstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_predictworkhourdurationsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_preferredagent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_preferredagentcustomeridentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_preferredagentroutedentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_presence: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_priority: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_problematicasset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productinventory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productivityactioninputparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productivityactionoutputparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productivityagentscript: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productivityagentscriptstep: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productivitymacroactiontemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productivitymacroconnector: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_productivityparameterdefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_property: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_propertyassetassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_propertylocationassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_propertylog: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_propertytemplateassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_provider: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_purchaseorder: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_purchaseorderproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_questionsequence: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_quotebookingincident: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_quotebookingservice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_quotebookingsetup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_quoteinvoicingproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_quoteinvoicingsetup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rawinsightentitylink: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_readtrackingenabledinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_realtimescoring: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_realtimescoringoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_recomputetracker: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_recording: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_recurringsalesaction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_recurringsalesactionv2: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_relationshipanalyticsmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_reportbookmark: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementchange: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementdependency: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementgroup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementorganizationunit: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementrelationship: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_requirementstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_resolution: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_resourcepaytype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_resourcerequirement: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_resourceterritory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_richtextfile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rma: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rmaproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rmareceipt: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rmasubstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_routingconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_routingconfigurationstep: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_routingrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_routingrulesetsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rtv: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rtvproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_rulesetdependencymapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sabackupdiagnostic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sabatchruninstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesaccelerationinsight: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesassignmentsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salescopilotinsight: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salescopilotorgsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salescopilotusersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesocmessage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesocsmstemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesroutingdiagnostic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salesroutingrun: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salessuggestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_salestag: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_saruninstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_scenario: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_schedule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_schedulingparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_schedulingscope: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sciconversation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_scicustomemailhighlight: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_scicustomhighlight: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_scicustompublisher: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_scienvironmentsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sciusersettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_searchconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_segment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_segmentationsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_segmentattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_segmentcatalogue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sentimentanalysis: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sequence: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sequencestat: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sequencetarget: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sequencetargetstep: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sequencetemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_serviceconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_servicecopilotplugin: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_servicecopilotpluginaction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_servicecopilotpluginrole: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_serviceoneprovisioningrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_servicetasktype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sessiondata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sessionevent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sessionparticipant: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sessionparticipantdata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sessiontemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_shareasconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_shipvia: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_siconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_sikeyvalueconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_similarentitiesfeatureimportance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_skillattachmentruleitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_skillattachmenttarget: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_slakpi: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_smartassistconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_smsengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_smsnumber: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_solutionhealthrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_soundfile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_submodeldefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_suggestionassignmentrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_suggestioninteraction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_suggestionprincipalobjectaccess: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_suggestionrequestpayload: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_suggestionsellerpriority: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_suggestionsmodelsummary: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_suggestionssetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_surveyconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_surveyquestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_surveysetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_swarm: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_swarmparticipant: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_swarmparticipantrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_swarmrole: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_swarmskill: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_swarmtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_taggedrecord: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_taxcode: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_taxcodedetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_teamschannelengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_teamschatassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_teamschatsuggestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_teamscollaboration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_teamsdialeradminsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_teamsengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_templateforproperties: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_templateparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_templateruleset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_templatetags: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_timeentry: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_timeentrysetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_timegroup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_timegroupdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_timeoffrequest: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_timespent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_tour: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_trade: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_tradecoverage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_trainingresult: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_transactionorigin: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_transcript: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_twitterengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_unifiedroutingrun: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_uniquenumber: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_untrackedappointment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_upgraderun: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_upgradestep: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_upgradeversion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_urnotificationtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_urnotificationtemplatemapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_usagemetric: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_usagereporting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_usersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_visitorjourney: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_vivacustomerlist: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_vivaentitysetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_vivaorgextensioncred: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_vivaorgsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_vivausersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_voicechannelorganizationsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_wallsavedquery: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_wallsavedqueryusersettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_warehouse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_warranty: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_wechatengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_whatsappengagementctx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_wkwcolleaguesforcompany: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_wkwcolleaguesforcontact: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_wkwconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workflowactionstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workhourtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_worklistviewconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workorder: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workorderincident: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workordernte: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workorderproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workorderresolution: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workorderservice: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workorderservicetask: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workordersubstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workordertype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workqueuestate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workqueueusersetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msdyn_workstreamhmmigrationstatus: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_attendeepass: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_authenticationsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_bucket: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_building: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_checkin: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_customregistrationfield: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_entitycounter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_event: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventadministration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventanalytics: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventcustomregistrationfield: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventmanagementactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventmanagementconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventpurchase: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventpurchaseattendee: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventpurchasecontact: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventpurchasepass: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventregistration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventregistrationticket: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventteammember: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventteamsproperties: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_eventvendor: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_file: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_hotel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_hotelroomallocation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_hotelroomreservation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_layout: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_pass: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_registrationresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_room: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_roomreservation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_session: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_sessionregistration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_sessiontrack: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_speaker: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_speakerengagement: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_sponsorablearticle: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_sponsorship: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_usertokencache: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_venue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_waitlistitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_webapplication: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_webinarconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_webinarconsent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_webinarprovider: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_webinartype: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msevtmgt_websiteentityconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_alert: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_alertrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_emailtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_fileresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_localizedemailtemplate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_project: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_question: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_questionresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_satisfactionmetric: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_survey: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_surveyinvite: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_surveyreminder: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_surveyresponse: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msfp_unsubscribedrecipient: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msgdpr_gdprconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msgdpr_gdprconsentchangerecord: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_msgraphresourcetosubscription: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_mspcat_packagestore: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_opportunity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_opportunityclose: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_opportunitycompetitors: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_opportunityproduct: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_opportunitysalesprocess: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_orderclose: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_organization: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_organizationdatasyncfnostate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_organizationdatasyncstate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_organizationdatasyncsubscription: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_organizationsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_package: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_packagehistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_pdfsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_phonecall: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_phonetocaseprocess: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_plannerbusinessscenario: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_plannersyncaction: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_plugin: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_pluginpackage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_post: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerbidataset: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerbidatasetapdx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerbimashupparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerbireport: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerbireportapdx: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerfxrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerpagecomponent: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerpagesite: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerpagesitelanguage: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerpagesitepublished: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerpagesmanagedidentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_powerpagesscanreport: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_pricelevel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_privilege: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_privilegecheckerlog: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_privilegecheckerrun: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_privilegesremovalsetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_processstageparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_product: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_productassociation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_productpricelevel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_productsalesliterature: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_productsubstitute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_provisionlanguageforuser: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_quarterlyfiscalcalendar: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_queue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_queueitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_quote: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_quoteclose: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_quotedetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_ratingmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_ratingvalue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_reconciliationentityinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_reconciliationentitystepinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_reconciliationinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_recordfilter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_recurringappointmentmaster: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_recyclebinconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_relationshipattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_relationshiprole: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_relationshiprolemap: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_reportparameter: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_resource: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_resourcegroup: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_resourcegroupexpansion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_resourcespec: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_retaineddataexcel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_retentioncleanupinfo: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_retentioncleanupoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_retentionconfig: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_retentionfailuredetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_retentionoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_retentionoperationdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_retentionsuccessdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_role: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_roleeditorlayout: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_routingrule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_routingruleitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_salesliterature: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_salesliteratureitem: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_salesorder: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_salesorderdetail: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_salesprocessinstance: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_savedquery: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_searchattributesettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_searchcustomanalyzer: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_searchrelationshipsettings: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_semiannualfiscalcalendar: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_service: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_serviceappointment: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_servicecontractcontacts: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_serviceplan: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_serviceplancustomcontrol: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_serviceplanmapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_settingdefinition: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_sharedlinksetting: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_sharedobject: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_sharedworkspace: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_sharedworkspacepool: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_sideloadedaiplugin: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_site: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_sla: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_socialactivity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_solutioncomponentconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_stagedentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_stagedentityattribute: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_stagedmetadataasyncoperation: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_stagesolutionupload: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_subject: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_supportusertable: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_synapsedatabase: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_synapselinkexternaltablestate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_synapselinkprofile: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_synapselinkprofileentity: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_synapselinkprofileentitystate: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_synapselinkschedule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_systemform: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_systemuser: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_task: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_tdsmetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_team: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_teammobileofflineprofilemembership: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_template: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_territory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_theme: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_topic: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_topichistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_topicmodel: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_topicmodelconfiguration: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_topicmodelexecutionhistory: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_uom: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_uomschedule: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_userform: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_usermapping: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_usermobileofflineprofilemembership: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_userquery: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_userrating: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_viewasexamplequestion: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_virtualentitymetadata: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_workflowbinary: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_workqueue: string;
		/** Unique identifier of the record that can not be deleted. */
		readonly regardingobjectid_workqueueitem: string;
		readonly FormattedValue: {
			/** Unique identifier of the system job that created this record. */
			readonly AsyncOperationId: string;
			/** Unique identifier of the bulk deletion failure record. */
			readonly BulkDeleteFailureId: string;
			/** Unique identifier of the bulk operation job which created this record */
			readonly BulkDeleteOperationId: string;
			/** Description of the error. */
			readonly ErrorDescription: string;
			/** Error code for the failed bulk deletion. */
			readonly ErrorNumber: string;
			/** Index of the ordered query expression that retrieved this record. */
			readonly OrderedQueryIndex: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the bulk deletion failure. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the bulk deletion failure record.
 */
			readonly OwningUser: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_account: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_accountleads: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_activityfileattachment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_activitymimeattachment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_activitymonitor: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_activitypointer: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_adminsettingsentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_adx_externalidentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_adx_invitation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_adx_inviteredemption: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_adx_portalcomment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_adx_setting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_adx_webformsession: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aicopilot: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aiplugin: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginauth: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginconversationstarter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginconversationstartermapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginexternalschema: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginexternalschemaproperty: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aiplugingovernance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aiplugingovernanceext: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aiplugininstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginoperationparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginoperationresponsetemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aiplugintitle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aipluginusersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_aiskillconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_annotation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_annualfiscalcalendar: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appaction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appactionmigration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appactionrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appelement: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_application: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_applicationuser: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appmodulecomponentedge: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appmodulecomponentnode: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appointment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_appusersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_archivecleanupinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_archivecleanupoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_attributeimageconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_attributemap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_attributemaskingrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookableresource: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookableresourcebooking: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookableresourcebookingexchangesyncidmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookableresourcebookingheader: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookableresourcecategory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookableresourcecategoryassn: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookableresourcecharacteristic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookableresourcegroup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bookingstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bot: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_botcomponent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_botcomponentcollection: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bulkarchiveconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bulkarchivefailuredetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bulkarchiveoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bulkarchiveoperationdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bulkoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_bulkoperationlog: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_businessunit: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_businessunitnewsarticle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_c360_configuration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_calendar: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_campaign: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_campaignactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_campaignactivityitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_campaignitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_campaignresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_canvasappextendedmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_card: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_catalog: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_catalogassignment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_certificatecredential: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly channelaccessprofile_bulkdeletefailures: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly channelaccessprofileruleid: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_characteristic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_chat: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_childincidentcount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_comment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_commitment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_competitor: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_competitoraddress: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_competitorproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_competitorsalesliterature: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_connectioninstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_connectionreference: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_connector: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_constraintbasedgroup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_contact: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_contactinvoices: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_contactleads: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_contactorders: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_contactquotes: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_contract: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_contractdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_contracttemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_conversationtranscript: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_copilotexamplequestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_copilotglossaryterm: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_copilotsynonyms: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_credential: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_customapi: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_customapirequestparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_customapiresponseproperty: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_customeraddress: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_customeropportunityrole: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_customerrelationship: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_datalakefolder: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_datalakefolderpermission: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_datalakeworkspace: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_datalakeworkspacepermission: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dataprocessingconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_delegatedauthorization: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_deleteditemreference: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_desktopflowbinary: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_desktopflowmodule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_discount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_discounttype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_displaystring: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dvfilesearch: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dvfilesearchattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dvfilesearchentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dvtablesearch: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dvtablesearchattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dvtablesearchentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dynamicproperty: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dynamicpropertyassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dynamicpropertyinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_dynamicpropertyoptionsetitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_email: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_emailserverprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_enablearchivalrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitlement: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitlementchannel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitlementcontacts: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitlemententityallocationtypemapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitlementproducts: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitlementtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitlementtemplatechannel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitlementtemplateproducts: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entityanalyticsconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entityimageconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entityindex: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entitymap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_entityrecordfilter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_equipment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_exportedexcel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly externalparty_bulkdeletefailures: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly externalpartyitem_bulkdeletefailures: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_fabricaiskill: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_fax: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_federatedknowledgeconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_federatedknowledgeentityconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_fixedmonthlyfiscalcalendar: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowcapacityassignment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowcredentialapplication: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowevent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowmachine: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowmachineimage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowmachineimageversion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowmachinenetwork: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_flowsession: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_fxexpression: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_governanceconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_holidaywrapper: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_import: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_importdata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_importfile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_importlog: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_importmap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_incident: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_incidentknowledgebaserecord: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_incidentresolution: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_indexattributes: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_internalcatalogassignment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_invoice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_invoicedetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_isvconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_kbarticle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_kbarticlecomment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_kbarticletemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_keyvaultreference: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_knowledgearticleincident: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_knowledgebaserecord: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_lead: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_leadaddress: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_leadcompetitors: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_leadproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_leadtoopportunitysalesprocess: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_letter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_list: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_listmember: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_listoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mainfewshot: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_makerfewshot: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_managedidentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_marketingformdisplayattributes: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_maskingrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_metadataforarchival: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mobileofflineprofileextension: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_monthlyfiscalcalendar: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_activitymappingmetadatabase: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_additionalentityinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_aibuildercallbacktesthook: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_aibuildermodelmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_analysisinstanceconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_analysismetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_azuremlwebservice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_businessunitconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_cdsamodelmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_clusterloadmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_conflationcriteriastatistics: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_conflationmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_conflationrun: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_conflationstatistics: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_consentsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_dataflowmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_datapreparationmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_dataqualityfeaturewisemetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_dataqualityoverview: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_dataqualityreport: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_datasetcatalog: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_datasourcemetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_datatroubleshootingaccess: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_derivedentitymetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_diagnosticsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_discoveredcdsamodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_discoveryoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_enrichmentmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_enrichmentrun: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_entityfiltermetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_exportconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_exportconfigreport: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_exportedmoduleconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_exportsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_featuretemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_graphmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_hierarchymetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_hostloadmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_importexportstatusmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_insightmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_insightsdataqualityreport: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_instancemetrics: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_instancepartnercatalog: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_instancesearchconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_instancesettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_intelligenceworkflowmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_intelligenceworkflowrunmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_intelligenceworkspacemetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_keyvaultmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_lightcdsamodelmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_logicappssubscribermetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_mappedsecretmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_measuremetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_modelconfigmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_moduleconfigurationreference: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_notificationcheckpoint: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_packageimportmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_packagejobmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_packagemetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_platforminstancemapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_powerplatformconnector: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_powerplatformrefreshsignalmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_preenrichmentmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_profilestorestateinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_realtimeaggregatedstats: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_realtimem3configuration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_realtimem3searchconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_realtimepluginmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_realtimesystemtablemetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_realtimetablemetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_refreshhistorymetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_refreshschedulebase: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_refreshstatehistorymetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_relationshipmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_reportmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_resetinstancehistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_resourcemetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_runtimerealtimem3metadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_segmentmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_semanticentitymappingmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_sparkjobexecutionmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_templatedmeasuremetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_templatedsegmentmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_transformmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_addtocalendarstyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_appointmentactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_appointmentactivitymarketingtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_basestyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_buttonstyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_cdnconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_cdsaconnectorconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_codestyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_columnstyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_contentblock: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_contentblockstyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_contentsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_createleadactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_customerinsightsinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_customerjourney: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_customerjourneycustomchannelactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_customerjourneyiteration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_customerjourneyruntimestate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_customerjourneytemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_customerjourneyworkflowlink: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_defaultmarketingsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_delaydatetimeactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_delaydurationactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_deprecatedcustomtileactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_deprecatedeventactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_deprecatedformsprosurveyactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_deprecatedpageactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_designerfeatureavailability: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_digitalassetsconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_dividerstyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_emailkeypoint: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_featureconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_file: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_formpage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_formpagetemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_generalstyles: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_geopin: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_gpt3log: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_gwennolfeatureconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_gwennolspamscoreactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_gwennolspamscorerequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_imagestyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_keyword: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_launchworkflowactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_layoutstyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_leadentityfield: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_leadscore: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_leadscoremodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_leadscore_v2: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_leadscoringconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_leadtoopportunity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinaudience: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedincampaign: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedincampaignactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinform: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_listform: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_liveentitydependency: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingdataimport: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingemail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingemailactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingemailtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingemailtest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingemailtestattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingfieldsubmission: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingform: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingformactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingformfield: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingformsubmission: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingformtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingformwhitelistrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingpage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingpageconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_marketingpagetemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_matchingstrategy: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_matchingstrategyattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_migration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_mktactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_networkpage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_personalizedpage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_personalizedpagefield: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_phonecallactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_phonecallactivitymarketingtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_portalsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_postingishts: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_qrcodestyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_quicksendemail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_quotainfoentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_reaction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_recordupdateactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_redirecturl: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_segment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_segmentactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_segmenttemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_setupdomain: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_socialpost: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_socialpostingconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_socialpostingconsent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_sourceactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_splitteractivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_tag: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_taskactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_taskactivitymarketingtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_textstyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_triggeractivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_uicconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_usergeoregion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_usersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_video: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_videostyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyncrm_website: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_aimodelversion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_apsconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_brandprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_brandsender: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_brandtheme: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_buttonstyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_byoacschannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_byoacschannelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_captcha: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_catalogeventstatusconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_cmsaddon: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_comparatormetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_compliancesettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_compliancesettings3: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_compliancesettings4: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_configuration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_consent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_consentcenterconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_consentprovider: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_consentproviderdefaultconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_consentproviderdefaultpurpose: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_consentproviderlocalization: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_consentsystemconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_contactpointconsent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_contactpointconsent2: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_contactpointconsent3: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_contactpointconsent4: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_contactpointsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_conversioneventdefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_createdentitylink: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_customchannelmessage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_customerdatamapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_customerdataselection: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_domain: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_email: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_emailtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_entitygradedistribution: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_entityscoredistribution: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_entityscoringmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_eventmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_eventparametermetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_experiment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_experimentv2: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_featureconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_formsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_formtargetaudience: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_fragment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_frequencycap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_gdprrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_imagestyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_infobipchannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_infobipchannelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_journey: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_journeydependency: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_journeyevent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_journeyoptimizationcount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_journeyrunparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_journeysetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_journeytemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_journeyworkflowmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_keyword: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_leadqualificationmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_linkmobilitychannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_marketingfieldsubmission: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_marketingform: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_marketingformfield: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_marketingformsubmission: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_marketingformtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_matchingstrategy: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_matchingstrategyattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_metadataentityrelationship: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_metadataitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_metadatastorestate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_mobileapp: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_mobileappchannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_mobiledevice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_predefinedplaceholder: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_preferencecenter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_preferencecenterlink: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_purpose: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_pushdeviceregistrationresult: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_pushmobiledevice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_pushnotification: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_qrcodestyle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_quiettimesetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_recaptchaconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_segment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_segmentdefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_segmentexecution: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_segmentusage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_sms: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_submitbutton: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_tag: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_teamsengagement: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_telesignchannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_telesignchannelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_topic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_twiliochannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_twiliochannelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_utmtracking: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_vibeschannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_vibeschannelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdynmkt_webinaremailjourney: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_3dmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_accountkpiitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_actioncardactionstat: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_actioncardregarding: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_actioncardrolesetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_actioncardstataggregation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_activeicdextension: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_activityanalysiscleanupstate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_activityanalysisconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_actual: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_adaptivecardconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_adminappstate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentcapacityprofileunit: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentcapacityupdatehistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentchannelstate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentcopilotsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentgroup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentgroupmembership: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentresourceforecasting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agentstatushistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreement: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementbookingdate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementbookingincident: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementbookingservice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_agreementsubstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aibdataset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aibdatasetfile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aibdatasetrecord: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aibdatasetscontainer: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aibfile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aibfileattacheddata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aiconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aicontactsuggestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aievent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aifptrainingdocument: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aimodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aiodimage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aiodlabel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aiodtrainingboundingbox: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aiodtrainingimage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_aitemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_analysiscomponent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_analysisjob: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_analysisoverride: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_analysisresult: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_analysisresultdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_analytics: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_analyticsadminsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_analyticsforcs: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_apirequestcache: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_apirequestfolder: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_appconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_appcopilotconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_appinsightsmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_applicationextension: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_appprofilerolemapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_appstate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_assetcategorytemplateassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_assetsuggestionssetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_assettemplateassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_assignmentconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_assignmentconfigurationstep: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_assignmentmap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_assignmentrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_attribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_attributeinfluencestatistics: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_attributevalue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_authenticationsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_authsettingsentry: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_autocapturerule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_autocapturesettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_autonomouscasecreationrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookableresourceassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookingalert: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookingalertstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookingchange: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookingjournal: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookingrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookingsetupmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bookingtimestamp: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_botsession: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_businessclosure: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_callablecontext: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_cannedmessage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_capacityprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_caseenrichment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_casefollowupandclosureconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_casesuggestionrequestpayload: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_casetopic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_casetopicsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_casetopicsummary: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_casetopic_incident: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_cdsentityengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channelcapability: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channeldefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channeldefinitionconsent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channeldefinitionlocale: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channelinstancesecret: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channelmessageattachment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channelmessagecontextpart: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channelmessagepart: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_channelprovider: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_chatansweroption: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_chatquestionnaireresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_chatwidgetlanguage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ciprovider: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_clientextension: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_collabgraphresource: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_collabspaceteamassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_configuration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_consoleapplicationtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_consoleapplicationtype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_consoleappparameterdefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_consumingapplication: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_contactkpiitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationaction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationactionitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationaggregatedinsights: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationcomment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationdata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationinsight: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationmessageblock: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationparticipantinsights: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationparticipantsentiment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationquestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationsegmentsentiment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationsentiment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationsignal: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationsubject: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationsummaryinteraction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationsummarysetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationsummarysuggestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationsystemtag: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationtag: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationtopic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationtopicsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationtopicsummary: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_conversationtopic_conversation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_copilotagentpreference: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_copilotinteraction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_copilotinteractiondata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_copilotinteractions: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_copilotknowledgeinteraction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_copilotsummarizationsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_copilottranscript: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_copilottranscriptdata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_crmconnection: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_csadminconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_cskeyvalueconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customapirulesetconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customcontrolextendedsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customerasset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customerassetattachment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customerassetcategory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customeremailcommunication: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customerfeedbacksurvey: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customerfeedbacksurveyinvite: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_customerfeedbacksurveyresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dailyaccountkpiitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dailycontactkpiitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dailyleadkpiitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dailyopportunitykpiitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsdataset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_copilot: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_forecast: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fs: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_mc: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_mkt: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc_rt: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sareporting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataanalyticsworkspace: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_databaseversion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataflowconnectionreference: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataflowtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dataflow_datalakefolder: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_datahygienesettinginfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dealmanageraccess: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dealmanagersettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_decisioncontract: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_decisionruleset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_defextendedchannelinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_defextendedchannelinstanceaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_deletedconversation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_derivedinsightsrelatedentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_digitalsellingactivetask: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_digitalsellingcompletedtask: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_distributedlock: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dmsrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dmsrequeststatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dmssyncrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_dmssyncstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entitlementapplication: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityattachment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityattributepredictionrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityderivedinsight: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityrankingrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityroutingconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_entityworkstreammap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_extendedusersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_externalcrm: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_externalrecord: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_facebookengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_favoriteknowledgearticle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_fieldservicesetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_fieldservicesummaryconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_fieldservicesystemjob: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_fileupload: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flowcardtype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_actionapprovalmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_approval: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_approvalrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_approvalresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_approvalstep: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_basicapprovalmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flow_flowapproval: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_flwconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_forecastdefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_forecastingcache: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_forecastinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_forecastpredictionstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_formmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_function: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_functionallocation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_functionallocationtype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_gdprdata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_geofence: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_geofenceevent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_geofencingsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_geolocationsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_geolocationtracking: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_helppage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_historicalcaseharvestbatch: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_historicalcaseharvestrun: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_icdextension: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iermlmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iermltraining: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inboxcardconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inboxconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inboxentityconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttyperecommendationresult: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttyperesolution: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttypeservice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttypeservicetask: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttypessetup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_incidenttype_requirementgroup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_insightsstorevirtualentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inspection: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inspectionattachment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inspectiondefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inspectioninstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inspectionresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_insurance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_integratedsearchprovider: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentattributeset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentattribute_entity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intententity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentfamily: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentfeature_configuration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentgroupcondition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentharvesting_batchjobstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentharvesting_provisioning_status: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentsolutionmap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_intentsolution_mappingconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inventoryjournal: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_inventorytransfer: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotalert: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotdevice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotdevicecategory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotdevicecommand: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotdevicecommanddefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotdevicedatahistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotdeviceproperty: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotfieldmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotpropertydefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotprovider: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotproviderinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iotsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_iottocaseprocess: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_kalanguagesetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_kbattachment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_kbenrichment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_kmfederatedsearchconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_kmpersonalizationsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgearticletemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgeassetconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgeconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgeharvestjobrecord: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgeinteractioninsight: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgemanagementsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgepersonalfilter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgesearchfilter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_knowledgesearchinsight: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_kpieventdata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_kpieventdefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_leadhygienesetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_leadkpiitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_lineengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_linkedentityattributevalidity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_livechatconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_livechatengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_livechatwidgetlocation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_liveconversation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_liveworkitemevent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_liveworkstream: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_localizedsurveyquestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_locationtemplateassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_locationtypetemplateassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_lockstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_macrosession: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_maskingrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_migrationtracker: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_mobileapp: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_mobilesource: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_modulerundetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_mostcontacted: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_mostcontactedby: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_msteamssetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_msteamssettingsv2: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_nextaction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_notesanalysisconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_notificationfield: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_notificationtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_nottoexceed: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocagentassignedcustomapiprivilege: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocapplepay: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocautomatedactionrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocautomatedactionrulesmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocbotchannelregistration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocbotchannelregistrationsecret: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occarrier: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occhannelapimessageprivilege: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occhannelapimethodmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occhannelconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occhannelstateconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occommunicationprovidersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_occustommessagingchannel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocexternalcontext: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocfbapplication: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocfbpage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocflaggedspam: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocgatekeeperengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_oclanguage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_oclinechannelconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocliveworkitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocliveworkitemparticipant: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocliveworkitemsentiment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_oclocalizationdata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocoutboundconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocpaymentprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocphonecallengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocphonemusic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocphonenumber: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocprovisioningstate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocrecording: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocrichobject: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocrichobjectmap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocruleitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsession: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsessioncharacteristic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsessionparticipantevent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsessionsentiment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsimltraining: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsitdimportconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsitdskill: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsitrainingdata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocskillidentmlmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsmschannelsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsmssettingsecret: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocsystemmessage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_octag: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_octeamschannelconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_octwitterapplication: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_octwitterhandle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_octwitterhandleprovisioningstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_octwitterhandlesecret: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocvoice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocvoicechannellanguagesetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocvoicechannelsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocvoicemail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_oc_geolocationprovider: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_odosfeaturemetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_odosmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_omnichannelconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_omnichannelpersonalization: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_omnichannelqueue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_omnichannelsyncconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_operatinghour: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_opportunitykpiitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_organizationalunit: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_orgchartnode: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_originatingqueue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_overflowactionconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_paneconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_panetabconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_panetoolconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_payment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_paymentdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_paymentmethod: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_paymentterm: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_personalmessage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_personalsoundsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_personasecurityrolemapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_playbookactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_playbookactivityattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_playbookcategory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_playbookinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_playbooktemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmanalysishistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmcalendar: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmcalendarversion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmprocesstemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmprocessusersettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmprocessversion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmsimulation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_pmview: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_postalbum: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_postalcode: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_postconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_postruleconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_predictioncomputationoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_predictionmodelstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_predictionscheduledoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_predictivescore: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_predictivescoringsyncstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_predictworkhourdurationsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_preferredagent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_preferredagentcustomeridentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_preferredagentroutedentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_presence: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_priority: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_problematicasset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productinventory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productivityactioninputparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productivityactionoutputparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productivityagentscript: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productivityagentscriptstep: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productivitymacroactiontemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productivitymacroconnector: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_productivityparameterdefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_property: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_propertyassetassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_propertylocationassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_propertylog: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_propertytemplateassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_provider: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_purchaseorder: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_purchaseorderbill: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_purchaseorderproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_questionsequence: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_quotebookingincident: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_quotebookingproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_quotebookingservice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_quotebookingsetup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_quoteinvoicingproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_quoteinvoicingsetup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rawinsightentitylink: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_readtrackingenabledinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_realtimescoring: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_realtimescoringoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_recomputetracker: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_recording: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_recurringsalesaction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_recurringsalesactionv2: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_relationshipanalyticsmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_reportbookmark: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementchange: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementcharacteristic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementdependency: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementgroup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementorganizationunit: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementrelationship: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementresourcecategory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementresourcepreference: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_requirementstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_resolution: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_resourcepaytype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_resourcerequirement: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_resourcerequirementdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_resourceterritory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_richtextfile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rma: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rmaproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rmareceipt: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rmasubstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_routingconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_routingconfigurationstep: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_routingrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_routingrulesetsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rtv: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rtvproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rtvsubstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_rulesetdependencymapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sabackupdiagnostic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sabatchruninstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesaccelerationinsight: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesassignmentsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salescopilotinsight: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salescopilotorgsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salescopilotusersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesforcestructuredobject: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesocmessage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesocsmstemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesroutingdiagnostic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salesroutingrun: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salessuggestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_salestag: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_saruninstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_scenario: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_schedule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_schedulingparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_schedulingscope: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sciconversation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_scicustomemailhighlight: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_scicustomhighlight: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_scicustompublisher: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_scienvironmentsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sciusersettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_searchconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_segment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_segmentationsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_segmentattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_segmentcatalogue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sentimentanalysis: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sequence: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sequencestat: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sequencetarget: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sequencetargetstep: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sequencetemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_serviceconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_servicecopilotplugin: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_servicecopilotpluginaction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_servicecopilotpluginrole: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_serviceoneprovisioningrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_servicetasktype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sessiondata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sessionevent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sessionparticipant: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sessionparticipantdata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sessiontemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_shareasconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_shipvia: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_siconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_sikeyvalueconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_similarentitiesfeatureimportance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_skillattachmentruleitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_skillattachmenttarget: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_slakpi: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_smartassistconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_smsengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_smsnumber: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_solutionhealthrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_solutionhealthruleargument: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_solutionhealthruleset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_soundfile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_soundnotificationsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_submodeldefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_suggestionassignmentrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_suggestioninteraction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_suggestionprincipalobjectaccess: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_suggestionrequestpayload: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_suggestionsellerpriority: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_suggestionsmodelsummary: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_suggestionssetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_surveyconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_surveyquestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_surveysetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_swarm: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_swarmparticipant: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_swarmparticipantrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_swarmrole: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_swarmskill: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_swarmtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_taggedrecord: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_taxcode: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_taxcodedetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_teamschannelengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_teamschatassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_teamschatsuggestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_teamscollaboration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_teamsdialeradminsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_teamsengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_templateforproperties: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_templateparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_templateruleset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_templatetags: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_timeentry: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_timeentrysetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_timegroup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_timegroupdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_timeoffrequest: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_timespent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_tour: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_trade: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_tradecoverage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_trainingresult: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_transactionorigin: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_transcript: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_twitterengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_unifiedroutingrun: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_uniquenumber: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_untrackedappointment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_upgraderun: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_upgradestep: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_upgradeversion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_urnotificationtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_urnotificationtemplatemapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_usagemetric: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_usagereporting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_usersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_virtualtablecolumncandidate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_visitorjourney: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_vivacustomerlist: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_vivaentitysetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_vivaorgextensioncred: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_vivaorgsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_vivausersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_voicechannelorganizationsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_wallsavedquery: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_wallsavedqueryusersettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_warehouse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_warranty: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_wechatengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_whatsappengagementctx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_wkwcolleaguesforcompany: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_wkwcolleaguesforcontact: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_wkwconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workflowactionstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workhourtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_worklistviewconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workorder: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workordercharacteristic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workorderincident: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workordernte: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workorderproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workorderresolution: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workorderservice: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workorderservicetask: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workordersubstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workordertype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workqueuestate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workqueueusersetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msdyn_workstreamhmmigrationstatus: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_attendeepass: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_authenticationsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_bucket: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_building: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_checkin: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_customregistrationfield: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_entitycounter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_event: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventadministration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventanalytics: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventcustomregistrationfield: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventmanagementactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventmanagementconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventpurchase: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventpurchasecontact: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventregistration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventregistrationticket: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventteammember: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventteamsproperties: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_eventvendor: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_file: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_hotel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_layout: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_pass: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_registrationresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_room: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_roomreservation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_session: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_sessionregistration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_sessiontrack: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_speaker: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_speakerengagement: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_sponsorship: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_usertokencache: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_venue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_waitlistitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_webapplication: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_webinarconsent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_webinarprovider: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_webinartype: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msevtmgt_websiteentityconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_alert: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_alertrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_emailtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_fileresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_localizedemailtemplate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_project: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_question: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_questionresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_satisfactionmetric: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_survey: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_surveyinvite: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_surveyreminder: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_surveyresponse: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msfp_unsubscribedrecipient: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msgdpr_gdprconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msgdpr_gdprconsentchangerecord: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_msgraphresourcetosubscription: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mspcat_catalogsubmissionfiles: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_mspcat_packagestore: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_opportunity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_opportunityclose: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_opportunitycompetitors: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_opportunityproduct: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_opportunitysalesprocess: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_orderclose: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_organization: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_organizationdatasyncfnostate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_organizationdatasyncsubscriptionfnotable: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_organizationsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_package: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_packagehistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_pdfsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_phonecall: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_phonetocaseprocess: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_plannerbusinessscenario: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_plannersyncaction: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_plugin: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_pluginpackage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_post: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerbidataset: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerbidatasetapdx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerbimashupparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerbireport: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerbireportapdx: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerfxrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerpagecomponent: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerpagesite: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerpagesitelanguage: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerpagesitepublished: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerpagesmanagedidentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_powerpagesscanreport: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_pricelevel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_privilege: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_privilegecheckerlog: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_privilegecheckerrun: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_privilegesremovalsetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_processstageparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_product: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_productassociation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_productpricelevel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_productsalesliterature: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_productsubstitute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_provisionlanguageforuser: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_quarterlyfiscalcalendar: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_queue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_queueitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_quote: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_quoteclose: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_quotedetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_ratingmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_ratingvalue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_reconciliationentityinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_reconciliationentitystepinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_reconciliationinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_recordfilter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_recyclebinconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_relationshipattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_relationshiprole: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_relationshiprolemap: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_reportparameter: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_resource: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_resourcegroup: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_resourcegroupexpansion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_resourcespec: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_retaineddataexcel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_retentioncleanupinfo: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_retentioncleanupoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_retentionconfig: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_retentionfailuredetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_retentionoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_retentionoperationdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_retentionsuccessdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_role: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_roleeditorlayout: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_routingrule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_routingruleitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_salesliterature: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_salesliteratureitem: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_salesorder: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_salesorderdetail: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_salesprocessinstance: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_savedquery: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_searchattributesettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_searchcustomanalyzer: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_searchrelationshipsettings: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_semiannualfiscalcalendar: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_service: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_serviceappointment: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_servicecontractcontacts: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_serviceplan: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_serviceplancustomcontrol: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_serviceplanmapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_settingdefinition: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_sharedlinksetting: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_sharedobject: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_sharedworkspace: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_sharedworkspacepool: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_sideloadedaiplugin: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_site: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_sla: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_socialactivity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_solutioncomponentattributeconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_solutioncomponentbatchconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_solutioncomponentconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_solutioncomponentrelationshipconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_stagedentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_stagedentityattribute: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_stagedmetadataasyncoperation: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_stagesolutionupload: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_subject: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_supportusertable: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_synapsedatabase: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_synapselinkexternaltablestate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_synapselinkprofile: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_synapselinkprofileentity: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_synapselinkprofileentitystate: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_synapselinkschedule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_systemform: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_systemuser: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_systemuserauthorizationchangetracker: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_task: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_tdsmetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_team: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_teammobileofflineprofilemembership: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_template: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_territory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_theme: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_topic: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_topichistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_topicmodel: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_topicmodelconfiguration: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_topicmodelexecutionhistory: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_uom: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_uomschedule: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_userform: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_usermapping: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_userquery: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_userrating: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_viewasexamplequestion: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_workflowbinary: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_workqueue: string;
			/** Unique identifier of the record that can not be deleted. */
			readonly regardingobjectid_workqueueitem: string;
		}
	}
}
declare namespace OptionSet {
	namespace BulkDeleteFailure {
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
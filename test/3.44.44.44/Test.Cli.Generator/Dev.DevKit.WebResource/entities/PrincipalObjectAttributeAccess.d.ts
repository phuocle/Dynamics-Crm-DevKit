﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PrincipalObjectAttributeAccessApi {
		/**
		* DynamicsCrm.DevKit PrincipalObjectAttributeAccessApi
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
		/** Unique identifier of the shared secured field */
		AttributeId: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_account: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_accountleads: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_activityfileattachment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_activitymonitor: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adminsettingsentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adx_externalidentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adx_invitation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adx_inviteredemption: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adx_portalcomment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adx_setting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adx_webformsession: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aicopilot: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aiplugin: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginauth: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginconversationstarter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginconversationstartermapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginexternalschema: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginexternalschemaproperty: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aiplugingovernance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aiplugingovernanceext: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aiplugininstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginoperationparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginoperationresponsetemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aiplugintitle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aipluginusersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_aiskillconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appactionmigration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appactionrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appelement: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_application: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_applicationuser: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appmodulecomponentedge: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appmodulecomponentnode: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appointment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appusersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_archivecleanupinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_archivecleanupoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_attributeimageconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_attributemaskingrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresource: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebooking: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebookingexchangesyncidmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebookingheader: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecategoryassn: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecharacteristic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcegroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookingstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bot: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_botcomponent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_botcomponentcollection: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkarchiveconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkarchivefailuredetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkarchiveoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkarchiveoperationdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkoperationlog: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_businessunit: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_c360_configuration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaign: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignactivityitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_canvasappextendedmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_card: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_catalog: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_catalogassignment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_certificatecredential: string;
		/** Unique identifier of the entity instance with shared secured field */
		channelaccessprofile_principalobjectattributeaccess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_characteristic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_chat: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_childincidentcount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_comment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_commitment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitor: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitoraddress: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitorproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitorsalesliterature: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connection: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connectioninstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connectionreference: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connector: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_constraintbasedgroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contact: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactinvoices: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactleads: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactorders: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactquotes: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contract: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contractdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contracttemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_conversationtranscript: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_copilotexamplequestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_copilotglossaryterm: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_copilotsynonyms: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_credential: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customapi: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customapirequestparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customapiresponseproperty: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customeraddress: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customeropportunityrole: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datalakefolder: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datalakefolderpermission: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datalakeworkspace: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datalakeworkspacepermission: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dataprocessingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_delegatedauthorization: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_deleteditemreference: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_desktopflowbinary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_desktopflowmodule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_discount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_discounttype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dvfilesearch: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dvfilesearchattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dvfilesearchentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dvtablesearch: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dvtablesearchattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dvtablesearchentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicproperty: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyoptionsetitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_email: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_enablearchivalrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlement: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementchannel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementcontacts: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlemententityallocationtypemapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementproducts: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplatechannel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplateproducts: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityanalyticsconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityimageconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityindex: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityrecordfilter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_environmentvariabledefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_environmentvariablevalue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_equipment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_exportedexcel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_exportsolutionupload: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_fabricaiskill: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_fax: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_featurecontrolsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_federatedknowledgeconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_federatedknowledgeentityconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_feedback: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowcapacityassignment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowcredentialapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowevent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachine: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachinegroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachineimage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachineimageversion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachinenetwork: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowsession: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_fxexpression: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_goal: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_governanceconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_holidaywrapper: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incident: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incidentknowledgebaserecord: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incidentresolution: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_indexattributes: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_internalcatalogassignment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_invoice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_invoicedetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_kbarticle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_keyvaultreference: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticleincident: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticleviews: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgebaserecord: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_lead: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadaddress: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadcompetitors: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadtoopportunitysalesprocess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_letter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_list: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_listmember: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_listoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mailmergetemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mainfewshot: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_makerfewshot: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_managedidentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_marketingformdisplayattributes: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_maskingrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_metadataforarchival: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mobileofflineprofileextension: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_activitymappingmetadatabase: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_additionalentityinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_aibuildercallbacktesthook: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_aibuildermodelmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_analysisinstanceconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_analysismetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_azuremlwebservice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_businessunitconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_cdsamodelmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_clusterloadmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_conflationcriteriastatistics: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_conflationmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_conflationrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_conflationstatistics: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_consentsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_dataflowmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_datapreparationmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_dataqualityfeaturewisemetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_dataqualityoverview: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_dataqualityreport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_datasetcatalog: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_datasourcemetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_datatroubleshootingaccess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_derivedentitymetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_diagnosticsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_discoveredcdsamodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_discoveryoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_enrichmentmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_enrichmentrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_entityfiltermetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_exportconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_exportconfigreport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_exportedmoduleconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_exportsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_featuretemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_graphmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_hierarchymetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_hostloadmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_importexportstatusmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_insightmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_insightsdataqualityreport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_instancemetrics: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_instancepartnercatalog: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_instancesearchconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_instancesettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_intelligenceworkflowmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_intelligenceworkflowrunmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_intelligenceworkspacemetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_keyvaultmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_lightcdsamodelmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_logicappssubscribermetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_mappedsecretmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_measuremetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_modelconfigmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_moduleconfigurationreference: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_notificationcheckpoint: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_packageimportmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_packagejobmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_packagemetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_platforminstancemapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_powerplatformconnector: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_powerplatformrefreshsignalmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_preenrichmentmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_profilestorestateinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_realtimeaggregatedstats: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_realtimem3configuration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_realtimem3searchconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_realtimepluginmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_realtimesystemtablemetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_realtimetablemetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_refreshhistorymetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_refreshschedulebase: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_refreshstatehistorymetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_relationshipmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_reportmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_resetinstancehistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_resourcemetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_runtimerealtimem3metadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_segmentmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_semanticentitymappingmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_sparkjobexecutionmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_templatedmeasuremetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_templatedsegmentmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_transformmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynce_botcontent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_addtocalendarstyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_appointmentactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_appointmentactivitymarketingtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_basestyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_buttonstyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_cdnconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_cdsaconnectorconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_codestyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_columnstyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_contentblock: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_contentblockstyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_contentsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_createleadactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_customerinsightsinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_customerjourney: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_customerjourneycustomchannelactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_customerjourneyiteration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_customerjourneyruntimestate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_customerjourneytemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_customerjourneyworkflowlink: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_defaultmarketingsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_delaydatetimeactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_delaydurationactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_deprecatedcustomtileactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_deprecatedeventactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_deprecatedformsprosurveyactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_deprecatedpageactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_designerfeatureavailability: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_digitalassetsconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_dividerstyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_emailkeypoint: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_featureconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_file: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_formpage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_formpagetemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_generalstyles: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_geopin: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_gpt3log: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_gwennolfeatureconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_gwennolspamscoreactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_gwennolspamscorerequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_imagestyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_keyword: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_launchworkflowactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_layoutstyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_leadentityfield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_leadscore: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_leadscoremodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_leadscore_v2: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_leadscoringconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_leadtoopportunity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinaudience: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedincampaign: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedincampaignactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinfieldmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinform: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinformanswer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinformquestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinformsubmission: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinleadmatchingstrategy: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_linkedinuserprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_listform: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_liveentitydependency: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingdataimport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingdynamiccontentmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingemail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingemailactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingemailtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingemailtest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingemailtestattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingemailtestsend: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingfieldsubmission: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingform: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingformactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingformfield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingformsubmission: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingformtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingformwhitelistrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingpage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingpageconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_marketingpagetemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_matchingstrategy: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_matchingstrategyattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_migration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_mktactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_networkpage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_personalizedpage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_personalizedpagefield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_phonecallactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_phonecallactivitymarketingtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_portalsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_postingishts: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_qrcodestyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_quicksendemail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_quotainfoentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_reaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_recordupdateactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_redirecturl: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_segment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_segmentactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_segmenttemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_setupdomain: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_socialpost: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_socialpostingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_socialpostingconsent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_sourceactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_splitteractivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_tag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_taskactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_taskactivitymarketingtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_textstyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_triggeractivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_uicconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_usergeoregion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_usersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_video: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_videostyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyncrm_website: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_aimodelversion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_apsconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_brandprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_brandsender: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_brandtheme: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_buttonstyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_byoacschannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_byoacschannelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_captcha: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_catalogeventstatusconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_cmsaddon: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_comparatormetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_compliancesettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_compliancesettings3: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_compliancesettings4: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_configuration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_consent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_consentcenterconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_consentprovider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_consentproviderdefaultconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_consentproviderdefaultpurpose: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_consentproviderlocalization: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_consentsystemconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_contactpointconsent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_contactpointconsent2: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_contactpointconsent3: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_contactpointconsent4: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_contactpointsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_conversioneventdefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_createdentitylink: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_customchannelmessage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_customerdatamapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_customerdataselection: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_domain: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_email: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_emailtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_entitygradedistribution: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_entityscoredistribution: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_entityscoringmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_eventmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_eventparametermetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_experiment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_experimentv2: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_featureconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_formsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_formtargetaudience: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_fragment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_frequencycap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_gdprrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_imagestyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_infobipchannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_infobipchannelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_journey: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_journeydependency: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_journeyevent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_journeyoptimizationcount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_journeyrunparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_journeysetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_journeytemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_journeyworkflowmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_keyword: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_leadqualificationmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_linkmobilitychannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_marketingfieldsubmission: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_marketingform: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_marketingformfield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_marketingformsubmission: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_marketingformtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_matchingstrategy: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_matchingstrategyattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_metadataentityrelationship: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_metadataitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_metadatastorestate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_mobileapp: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_mobileappchannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_mobiledevice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_mocksmsproviderchannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_predefinedplaceholder: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_preferencecenter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_preferencecenterlink: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_purpose: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_pushdeviceregistrationresult: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_pushmobiledevice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_pushnotification: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_qrcodestyle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_quiettimesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_recaptchaconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_segment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_segmentdefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_segmentexecution: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_segmentusage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_sms: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_submitbutton: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_tag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_teamsengagement: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_telesignchannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_telesignchannelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_topic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_twiliochannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_twiliochannelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_utmtracking: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_vibeschannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_vibeschannelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynmkt_webinaremailjourney: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_3dmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_accountkpiitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardactionstat: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardregarding: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardrolesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardstataggregation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_activeicdextension: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_activityanalysiscleanupstate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_activityanalysisconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actual: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_adaptivecardconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_adminappstate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentcapacityprofileunit: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentcapacityupdatehistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentchannelstate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentcopilotsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentgroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentgroupmembership: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentresourceforecasting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentstatushistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreement: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdataset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetfile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetrecord: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetscontainer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibfile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibfileattacheddata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aicontactsuggestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aievent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aifptrainingdocument: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aimodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodimage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodlabel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodtrainingboundingbox: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodtrainingimage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aitemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysiscomponent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisjob: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisoverride: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisresult: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisresultdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analytics: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analyticsadminsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analyticsforcs: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_apirequestcache: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_apirequestfolder: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_appconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_appcopilotconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_appinsightsmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_applicationextension: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_appprofilerolemapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_appstate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assetcategorytemplateassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assetsuggestionssetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assettemplateassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assignmentconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assignmentconfigurationstep: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assignmentmap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assignmentrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_attribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_attributeinfluencestatistics: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_attributevalue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_authenticationsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_authsettingsentry: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_autocapturerule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_autocapturesettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_autonomouscasecreationrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookableresourceassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingalert: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingchange: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingjournal: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingsetupmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_botsession: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_businessclosure: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_callablecontext: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_cannedmessage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_capacityprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_caseenrichment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casefollowupandclosureconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casesuggestionrequestpayload: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casetopic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casetopicsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casetopicsummary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casetopic_incident: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_cdsentityengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelcapability: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channeldefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channeldefinitionconsent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channeldefinitionlocale: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelinstancesecret: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelmessageattachment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelmessagecontextpart: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelmessagepart: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelprovider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_chatansweroption: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_chatquestionnaireresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_chatquestionnaireresponseitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_chatwidgetlanguage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ciprovider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_clientextension: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_collabgraphresource: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_collabspaceteamassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_configuration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationtype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleappparameterdefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consumingapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contactkpiitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationactionitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationaggregatedinsights: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationcomment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationdata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationinsight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationmessageblock: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationparticipantinsights: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationparticipantsentiment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationquestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsegmentsentiment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsentiment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsignal: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsubject: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsummaryinteraction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsummarysetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsummarysuggestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsystemtag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopicsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopicsummary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopic_conversation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_copilotagentpreference: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_copilotinteraction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_copilotinteractiondata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_copilotinteractions: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_copilotknowledgeinteraction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_copilotsummarizationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_copilottranscript: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_copilottranscriptdata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_crmconnection: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_csadminconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_cskeyvalueconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customapirulesetconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customcontrolextendedsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerasset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerassetattachment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerassetcategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customeremailcommunication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerfeedbacksurvey: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerfeedbacksurveyinvite: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerfeedbacksurveyresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dailyaccountkpiitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dailycontactkpiitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dailyleadkpiitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dailyopportunitykpiitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticscustomizedreport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsdataset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_copilot: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_csrmanager: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_forecast: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_fs: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_ksinsights: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_mc: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_mkt: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_oc: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_oc_rt: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_sareporting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsworkspace: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_databaseversion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflow: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflowconnectionreference: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflowrefreshhistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflowtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflow_datalakefolder: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_datahygienesettinginfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_datainsightsandanalyticsfeature: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dealmanageraccess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dealmanagersettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_decisioncontract: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_decisionruleset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_defextendedchannelinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_defextendedchannelinstanceaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_deletedconversation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_derivedinsightsrelatedentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_digitalsellingactivetask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_digitalsellingcompletedtask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_distributedlock: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dmsrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dmsrequeststatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dmssyncrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dmssyncstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entitlementapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityattachment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityattributepredictionrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityderivedinsight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityrankingrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityroutingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityworkstreammap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_extendedusersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_externalcrm: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_externalrecord: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_facebookengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_favoriteknowledgearticle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_federatedarticle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldserviceslaconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicesummaryconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicesystemjob: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fileupload: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flowcardtype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_actionapprovalmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_approval: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_approvalrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_approvalresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_approvalstep: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_basicapprovalmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flow_flowapproval: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flwconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastdefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastingcache: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastpredictionstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_formmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_function: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_functionallocation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_functionallocationtype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_gdprdata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geofence: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geofenceevent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geofencingsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geolocationsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geolocationtracking: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_helppage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_historicalcaseharvestbatch: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_historicalcaseharvestrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_icdextension: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iermlmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iermltraining: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inboxcardconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inboxconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inboxentityconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttyperecommendationresult: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttyperesolution: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypeservicetask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttype_requirementgroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_insightsstorevirtualentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspection: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspectionattachment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspectiondefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspectioninstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspectionresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_insurance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_integratedsearchprovider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentattributeset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentattribute_entity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intententity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentfamily: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentfeature_configuration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentgroupcondition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentharvesting_batchjobstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentharvesting_provisioning_status: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentsolutionmap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_intentsolution_mappingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryjournal: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventorytransfer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotalert: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicecommanddefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicedatahistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdeviceproperty: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotfieldmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotpropertydefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotprovider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotproviderinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iottocaseprocess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kalanguagesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kbattachment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kbenrichment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kbkeywordsdescsuggestionsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kmfederatedsearchconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kmpersonalizationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgeassetconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgeconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgeharvestjobrecord: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgeinteractioninsight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgemanagementsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgepersonalfilter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgesearchfilter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgesearchinsight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kpieventdata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kpieventdefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_leadhygienesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_leadkpiitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_lineengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_linkedentityattributevalidity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_livechatconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_livechatengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_livechatwidgetlocation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_liveconversation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_liveworkitemevent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_liveworkstream: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_localizedsurveyquestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_locationtemplateassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_locationtypetemplateassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_lockstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_macrosession: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_maskingrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_migrationtracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_mobileapp: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_mobilesource: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_modulerundetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_mostcontacted: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_mostcontactedby: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_msteamssetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_msteamssettingsv2: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_nextaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notesanalysisconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notificationfield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notificationtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_nottoexceed: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocagentassignedcustomapiprivilege: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocapplepay: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocautomatedactionrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocautomatedactionrulesmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocbotchannelregistration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocbotchannelregistrationsecret: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occarrier: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occhannelapimessageprivilege: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occhannelapimethodmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occhannelconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occhannelstateconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occommunicationprovidersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occustommessagingchannel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocexternalcontext: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocfbapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocfbpage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocgatekeeperengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oclanguage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oclinechannelconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemparticipant: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemsentiment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oclocalizationdata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocoutboundconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocpaymentprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocphonecallengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocphonemusic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocphonenumber: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocprovisioningstate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocrecording: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocrichobject: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocrichobjectmap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocruleitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsentimentdailytopic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsession: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsessioncharacteristic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsessionparticipantevent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsessionsentiment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsimltraining: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsitdimportconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsitdskill: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsitrainingdata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocskillidentmlmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsmschannelsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsmssettingsecret: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsystemmessage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octeamschannelconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octwitterapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octwitterhandle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octwitterhandleprovisioningstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octwitterhandlesecret: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocvoice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocvoicechannellanguagesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocvoicechannelsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocvoicemail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oc_geolocationprovider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_odosfeaturemetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_odosmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_omnichannelconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_omnichannelpersonalization: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_omnichannelqueue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_omnichannelsyncconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_operatinghour: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitykpiitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_organizationalunit: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orgchartnode: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_originatingqueue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_paneconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_panetabconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_panetoolconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_payment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_paymentdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_paymentmethod: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_paymentterm: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_personalmessage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_personasecurityrolemapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookactivityattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookcategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbooktemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmanalysishistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmcalendar: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmcalendarversion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pminferredtask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmprocesstemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmprocessusersettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmprocessversion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmrecording: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmsimulation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmview: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postalbum: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postalcode: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postruleconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictioncomputationoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictionmodelstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictionscheduledoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictivescore: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictivescoringsyncstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictworkhourdurationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_preferredagent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_preferredagentcustomeridentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_preferredagentroutedentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_presence: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_priority: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_problematicasset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productinventory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityactioninputparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityactionoutputparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityagentscript: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityagentscriptstep: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivitymacroactiontemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivitymacroconnector: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityparameterdefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_property: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_propertyassetassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_propertylocationassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_propertylog: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_propertytemplateassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_provider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorder: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorderproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_questionsequence: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingincident: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingservice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingsetup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quoteinvoicingproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quoteinvoicingsetup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rawinsightentitylink: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_readtrackingenabledinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_realtimescoring: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_realtimescoringoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_recomputetracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_recording: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_recurringsalesaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_recurringsalesactionv2: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_relationshipanalyticsmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_reportbookmark: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementchange: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementdependency: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementgroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementorganizationunit: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementrelationship: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resolution: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcepaytype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcerequirement: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourceterritory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_richtextfile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rma: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rmaproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rmareceipt: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rmasubstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_routingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_routingconfigurationstep: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_routingrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_routingrulesetsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rtv: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rtvproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rulesetdependencymapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sabackupdiagnostic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sabatchruninstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesaccelerationinsight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesassignmentsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salescopilotinsight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salescopilotorgsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salescopilotusersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesforcestructuredobject: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesocmessage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesocsmstemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesroutingdiagnostic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesroutingrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salessuggestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salestag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_saruninstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scenario: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_schedule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_schedulingparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_schedulingscope: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sciconversation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scicustomemailhighlight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scicustomhighlight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scicustompublisher: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scienvironmentsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sciusersettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_searchconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_segment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_segmentationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_segmentattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_segmentcatalogue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sentimentanalysis: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequence: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequencestat: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequencetarget: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequencetargetstep: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequencetemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_serviceconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_servicecopilotplugin: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_servicecopilotpluginaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_servicecopilotpluginrole: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_serviceoneprovisioningrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_servicetasktype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessiondata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessionevent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessionparticipant: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessionparticipantdata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessiontemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_shareasconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_shipvia: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_siconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sikeyvalueconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_similarentitiesfeatureimportance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_skillattachmentruleitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_skillattachmenttarget: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_slakpi: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_smartassistconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_smsengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_smsnumber: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthruleargument: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthruleset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_soundfile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_submodeldefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionassignmentrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestioninteraction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionprincipalobjectaccess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionrequestpayload: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionsellerpriority: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionsmodelsummary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionssetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_surveyconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_surveyquestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_surveysetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_swarm: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_swarmparticipant: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_swarmparticipantrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_swarmrole: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_swarmskill: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_swarmtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_taggedrecord: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_taxcode: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_taxcodedetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamschannelengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamschatassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamschatsuggestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamscollaboration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamsdialeradminsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamsengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_templateforproperties: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_templateparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_templateruleset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_templatetags: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timeentry: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timeentrysetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timegroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timegroupdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timeoffrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timespent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_tour: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_trade: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_tradecoverage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_trainingresult: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactionorigin: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transcript: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_twitterengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_unifiedroutingrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_uniquenumber: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_untrackedappointment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgraderun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgradestep: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgradeversion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_urnotificationtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_urnotificationtemplatemapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_usagemetric: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_usagereporting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_usersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_virtualtablecolumncandidate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_visitorjourney: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_vivacustomerlist: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_vivaentitysetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_vivaorgextensioncred: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_vivaorgsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_vivausersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_voicechannelorganizationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wallsavedquery: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wallsavedqueryusersettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_warehouse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_warranty: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wechatengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_whatsappengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wkwcolleaguesforcompany: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wkwcolleaguesforcontact: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wkwconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workflowactionstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workhourtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_worklistviewconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorder: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderincident: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workordernte: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderresolution: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderservice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderservicetask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workordersubstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workordertype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workqueuestate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workqueueusersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workstreamhmmigrationstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_attendeepass: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_authenticationsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_bucket: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_building: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_checkin: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_customregistrationfield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_entitycounter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_event: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventadministration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventanalytics: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventcustomregistrationfield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventmanagementactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventmanagementconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventpurchase: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventpurchaseattendee: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventpurchasecontact: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventpurchasepass: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventregistration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventregistrationticket: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventteammember: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventteamsproperties: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_eventvendor: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_file: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_hotel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_hotelroomallocation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_hotelroomreservation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_layout: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_pass: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_registrationresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_room: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_roomreservation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_session: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_sessionregistration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_sessiontrack: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_speaker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_speakerengagement: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_sponsorablearticle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_sponsorship: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_usertokencache: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_venue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_waitlistitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_webapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_webinarconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_webinarconsent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_webinarprovider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_webinartype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msevtmgt_websiteentityconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_alert: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_alertrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_emailtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_fileresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_localizedemailtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_project: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_question: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_questionresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_satisfactionmetric: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_survey: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_surveyinvite: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_surveyreminder: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_surveyresponse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_unsubscribedrecipient: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msgdpr_gdprconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msgdpr_gdprconsentchangerecord: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msgraphresourcetosubscription: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mspcat_catalogsubmissionfiles: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mspcat_packagestore: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunityclose: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunitycompetitors: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunityproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunitysalesprocess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_orderclose: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncfnostate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncstate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncsubscription: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncsubscriptionfnotable: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_package: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_packagehistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pdfsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonecall: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonetocaseprocess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_plannerbusinessscenario: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_plannersyncaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_plugin: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pluginpackage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_position: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerbidataset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerbidatasetapdx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerbimashupparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerbireport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerbireportapdx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerfxrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerpagecomponent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerpagesite: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerpagesitelanguage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerpagesitepublished: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerpagesmanagedidentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_powerpagesscanreport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pricelevel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_privilegecheckerlog: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_privilegecheckerrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_privilegesremovalsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_processstageparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_product: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productassociation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productpricelevel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productsalesliterature: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productsubstitute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_provisionlanguageforuser: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queueitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quote: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quoteclose: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quotedetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_ratingmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_ratingvalue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reconciliationentityinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reconciliationentitystepinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reconciliationinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_recordfilter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_recurringappointmentmaster: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_recyclebinconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_relationshipattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reportcategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reportparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resource: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcegroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcegroupexpansion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcespec: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_retaineddataexcel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_retentioncleanupinfo: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_retentioncleanupoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_retentionconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_retentionfailuredetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_retentionoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_retentionoperationdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_retentionsuccessdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_roleeditorlayout: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesliterature: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesliteratureitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesorder: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesorderdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesprocessinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_searchattributesettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_searchcustomanalyzer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_searchrelationshipsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_service: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceappointment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_servicecontractcontacts: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceplan: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceplancustomcontrol: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceplanmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_settingdefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharedlinksetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharedobject: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharedworkspace: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharedworkspacepool: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointdocumentlocation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointsite: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sideloadedaiplugin: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_site: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialactivity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentattributeconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentbatchconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentrelationshipconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_stagedentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_stagedentityattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_stagedmetadataasyncoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_stagesolutionupload: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_supportusertable: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_synapsedatabase: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_synapselinkexternaltablestate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_synapselinkprofile: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_synapselinkprofileentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_synapselinkprofileentitystate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_synapselinkschedule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_systemuser: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_systemuserauthorizationchangetracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_task: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_tdsmetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_team: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_teammobileofflineprofilemembership: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_territory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topichistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodelconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodelexecutionhistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uom: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uomschedule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_usermobileofflineprofilemembership: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_userrating: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_viewasexamplequestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_virtualentitymetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_workflowbinary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_workqueue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_workqueueitem: string;
		/** Unique identifier of the associated organization. */
		readonly OrganizationId: string;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_systemuser: string;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_team: string;
		/** Unique identifier of the shared secured field instance */
		PrincipalObjectAttributeAccessId: string;
		/** Read permission for secured field instance */
		ReadAccess: boolean;
		/** Update permission for secured field instance */
		UpdateAccess: boolean;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the shared secured field */
			readonly AttributeId: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_account: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_accountleads: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_activityfileattachment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_activitymonitor: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_adminsettingsentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_adx_externalidentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_adx_invitation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_adx_inviteredemption: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_adx_portalcomment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_adx_setting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_adx_webformsession: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aicopilot: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aiplugin: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginauth: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginconversationstarter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginconversationstartermapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginexternalschema: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginexternalschemaproperty: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aiplugingovernance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aiplugingovernanceext: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aiplugininstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginoperationparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginoperationresponsetemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aiplugintitle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aipluginusersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_aiskillconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appactionmigration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appactionrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appelement: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_application: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_applicationuser: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appmodulecomponentedge: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appmodulecomponentnode: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appointment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appusersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_archivecleanupinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_archivecleanupoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_attributeimageconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_attributemaskingrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookableresource: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookableresourcebooking: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookableresourcebookingexchangesyncidmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookableresourcebookingheader: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookableresourcecategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookableresourcecategoryassn: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookableresourcecharacteristic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookableresourcegroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bookingstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bot: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_botcomponent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_botcomponentcollection: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bulkarchiveconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bulkarchivefailuredetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bulkarchiveoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bulkarchiveoperationdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bulkoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bulkoperationlog: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_businessunit: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_c360_configuration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_campaign: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_campaignactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_campaignactivityitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_campaignitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_campaignresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_canvasappextendedmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_card: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_catalog: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_catalogassignment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_certificatecredential: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly channelaccessprofile_principalobjectattributeaccess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_characteristic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_chat: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_childincidentcount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_comment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_commitment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_competitor: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_competitoraddress: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_competitorproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_competitorsalesliterature: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_connection: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_connectioninstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_connectionreference: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_connector: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_constraintbasedgroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_contact: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_contactinvoices: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_contactleads: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_contactorders: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_contactquotes: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_contract: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_contractdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_contracttemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_conversationtranscript: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_copilotexamplequestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_copilotglossaryterm: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_copilotsynonyms: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_credential: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_customapi: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_customapirequestparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_customapiresponseproperty: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_customeraddress: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_customeropportunityrole: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_datalakefolder: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_datalakefolderpermission: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_datalakeworkspace: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_datalakeworkspacepermission: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dataprocessingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_delegatedauthorization: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_deleteditemreference: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_desktopflowbinary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_desktopflowmodule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_discount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_discounttype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dvfilesearch: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dvfilesearchattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dvfilesearchentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dvtablesearch: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dvtablesearchattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dvtablesearchentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dynamicproperty: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dynamicpropertyassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dynamicpropertyinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_dynamicpropertyoptionsetitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_email: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_enablearchivalrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entitlement: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entitlementchannel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entitlementcontacts: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entitlemententityallocationtypemapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entitlementproducts: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entitlementtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entitlementtemplatechannel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entitlementtemplateproducts: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entityanalyticsconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entityimageconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entityindex: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_entityrecordfilter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_environmentvariabledefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_environmentvariablevalue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_equipment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_exportedexcel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_exportsolutionupload: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_fabricaiskill: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_fax: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_featurecontrolsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_federatedknowledgeconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_federatedknowledgeentityconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_feedback: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowcapacityassignment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowcredentialapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowevent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowmachine: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowmachinegroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowmachineimage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowmachineimageversion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowmachinenetwork: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowsession: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_fxexpression: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_goal: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_governanceconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_holidaywrapper: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_incident: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_incidentknowledgebaserecord: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_incidentresolution: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_indexattributes: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_internalcatalogassignment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_invoice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_invoicedetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_kbarticle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_keyvaultreference: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_knowledgearticle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_knowledgearticleincident: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_knowledgearticleviews: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_knowledgebaserecord: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_lead: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_leadaddress: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_leadcompetitors: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_leadproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_leadtoopportunitysalesprocess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_letter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_list: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_listmember: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_listoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mailmergetemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mainfewshot: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_makerfewshot: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_managedidentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_marketingformdisplayattributes: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_maskingrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_metadataforarchival: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mobileofflineprofileextension: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_activitymappingmetadatabase: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_additionalentityinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_aibuildercallbacktesthook: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_aibuildermodelmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_analysisinstanceconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_analysismetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_azuremlwebservice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_businessunitconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_cdsamodelmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_clusterloadmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_conflationcriteriastatistics: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_conflationmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_conflationrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_conflationstatistics: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_consentsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_dataflowmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_datapreparationmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_dataqualityfeaturewisemetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_dataqualityoverview: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_dataqualityreport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_datasetcatalog: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_datasourcemetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_datatroubleshootingaccess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_dataverseentitydatacleanupjobinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_derivedentitymetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_diagnosticsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_discoveredcdsamodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_discoveryoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_enrichmentmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_enrichmentrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_entityfiltermetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_exportconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_exportconfigreport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_exportedmoduleconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_exportsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_featuretemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_graphmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_hierarchymetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_hostloadmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_importexportstatusmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_insightmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_insightsdataqualityreport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_instancemetrics: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_instancepartnercatalog: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_instancesearchconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_instancesettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_intelligenceworkflowmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_intelligenceworkflowrunmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_intelligenceworkspacemetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_keyvaultmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_lightcdsamodelmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_logicappssubscribermetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_mappedsecretmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_measuremetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_modelconfigmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_moduleconfigurationreference: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_notificationcheckpoint: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_packageimportmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_packagejobmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_packagemetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_platforminstancemapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_powerplatformconnector: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_powerplatformrefreshsignalmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_preenrichmentmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_profilestorestateinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_realtimeaggregatedstats: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_realtimem3configuration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_realtimem3searchconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_realtimepluginmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_realtimesystemtablemetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_realtimetablemetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_refreshhistorymetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_refreshschedulebase: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_refreshstatehistorymetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_relationshipmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_reportmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_resetinstancehistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_resourcemetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_runtimerealtimem3metadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_segmentmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_semanticentitymappingmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_sparkjobexecutionmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_systemintegrationmigrationtrackinginfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_templatedmeasuremetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_templatedsegmentmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_transformmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mscipriv_unifiedactivitymappinggroupmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynce_botcontent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_addtocalendarstyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_appointmentactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_appointmentactivitymarketingtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_basestyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_buttonstyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_cdnconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_cdsaconnectorconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_codestyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_columnstyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_contentblock: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_contentblockstyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_contentsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_createleadactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_customerinsightsinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_customerjourney: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_customerjourneycustomchannelactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_customerjourneyiteration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_customerjourneyruntimestate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_customerjourneytemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_customerjourneyworkflowlink: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_defaultmarketingsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_delaydatetimeactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_delaydurationactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_deprecatedcustomtileactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_deprecatedeventactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_deprecatedformsprosurveyactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_deprecatedpageactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_designerfeatureavailability: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_digitalassetsconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_dividerstyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_emailkeypoint: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_featureconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_file: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_formpage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_formpagetemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_generalstyles: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_geopin: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_gpt3log: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_gwennolfeatureconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_gwennolspamscoreactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_gwennolspamscorerequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_imagestyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_keyword: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_launchworkflowactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_layoutstyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_leadentityfield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_leadscore: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_leadscoremodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_leadscore_v2: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_leadscoringconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_leadtoopportunity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinaudience: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedincampaign: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedincampaignactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinfieldmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinform: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinformanswer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinformquestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinformsubmission: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinleadmatchingstrategy: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_linkedinuserprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_listform: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_liveentitydependency: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingdataimport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingdynamiccontentmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingemail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingemailactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingemaildynamiccontentmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingemailtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingemailtest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingemailtestattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingemailtestsend: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingfieldsubmission: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingform: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingformactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingformfield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingformsubmission: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingformtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingformwhitelistrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingpage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingpageconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_marketingpagetemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_matchingstrategy: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_matchingstrategyattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_migration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_mktactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_networkpage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_personalizedpage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_personalizedpagefield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_phonecallactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_phonecallactivitymarketingtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_portalsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_postingishts: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_qrcodestyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_quicksendemail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_quotainfoentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_reaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_recordupdateactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_redirecturl: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_segment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_segmentactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_segmenttemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_setupdomain: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_socialpost: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_socialpostingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_socialpostingconsent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_sourceactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_splitteractivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_tag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_taskactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_taskactivitymarketingtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_textstyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_triggeractivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_uicconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_usergeoregion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_usersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_video: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_videostyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyncrm_website: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_aimodelversion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_apsconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_brandprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_brandsender: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_brandtheme: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_buttonstyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_byoacschannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_byoacschannelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_captcha: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_catalogeventstatusconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_cmsaddon: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_comparatormetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_compliancesettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_compliancesettings3: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_compliancesettings4: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_configuration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_consent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_consentcenterconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_consentprovider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_consentproviderdefaultconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_consentproviderdefaultpurpose: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_consentproviderlocalization: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_consentsystemconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_contactpointconsent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_contactpointconsent2: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_contactpointconsent3: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_contactpointconsent4: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_contactpointsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_conversioneventdefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_createdentitylink: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_customchannelmessage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_customerdatamapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_customerdataselection: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_domain: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_email: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_emailtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_entitygradedistribution: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_entityscoredistribution: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_entityscoringmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_eventmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_eventmetadata_sdkmessageprocessingstep: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_eventparametermetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_experiment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_experimentv2: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_featureconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_formsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_formtargetaudience: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_fragment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_frequencycap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_gdprrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_imagestyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_infobipchannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_infobipchannelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_journey: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_journeydependency: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_journeyevent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_journeyoptimizationcount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_journeyrunparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_journeysetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_journeytemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_journeyworkflowmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_keyword: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_leadqualificationmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_linkmobilitychannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_linkmobilitychannelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_marketingfieldsubmission: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_marketingform: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_marketingformfield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_marketingformsubmission: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_marketingformtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_matchingstrategy: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_matchingstrategyattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_metadataentityrelationship: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_metadataitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_metadatastorestate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_mobileapp: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_mobileappchannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_mobiledevice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_mocksmsproviderchannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_mocksmsproviderchannelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_predefinedplaceholder: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_preferencecenter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_preferencecenterlink: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_purpose: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_pushdeviceregistrationresult: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_pushmobiledevice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_pushnotification: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_qrcodestyle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_quiettimesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_recaptchaconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_segment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_segmentdefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_segmentexecution: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_segmentusage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_sms: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_submitbutton: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_tag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_teamsengagement: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_telesignchannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_telesignchannelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_topic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_twiliochannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_twiliochannelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_utmtracking: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_vibeschannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_vibeschannelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynmkt_webinaremailjourney: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_3dmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_accountkpiitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_actioncardactionstat: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_actioncardregarding: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_actioncardrolesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_actioncardstataggregation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_activeicdextension: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_activityanalysiscleanupstate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_activityanalysisconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_actual: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_adaptivecardconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_adminappstate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentcapacityprofileunit: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentcapacityupdatehistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentchannelstate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentcopilotsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentgroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentgroupmembership: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentresourceforecasting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agentstatushistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreement: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementbookingdate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementbookingincident: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementbookingservice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_agreementsubstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aibdataset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aibdatasetfile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aibdatasetrecord: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aibdatasetscontainer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aibfile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aibfileattacheddata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aiconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aicontactsuggestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aievent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aifptrainingdocument: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aimodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aiodimage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aiodlabel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aiodtrainingboundingbox: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aiodtrainingimage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_aitemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_analysiscomponent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_analysisjob: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_analysisoverride: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_analysisresult: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_analysisresultdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_analytics: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_analyticsadminsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_analyticsforcs: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_apirequestcache: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_apirequestfolder: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_appconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_appcopilotconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_appinsightsmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_applicationextension: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_appprofilerolemapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_appstate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_assetcategorytemplateassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_assetsuggestionssetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_assettemplateassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_assignmentconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_assignmentconfigurationstep: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_assignmentmap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_assignmentrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_attribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_attributeinfluencestatistics: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_attributevalue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_authenticationsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_authsettingsentry: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_autocapturerule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_autocapturesettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_autonomouscasecreationrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookableresourceassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookingalert: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookingalertstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookingchange: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookingjournal: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookingrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookingsetupmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bookingtimestamp: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_botsession: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_businessclosure: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_callablecontext: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_cannedmessage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_capacityprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_caseenrichment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_casefollowupandclosureconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_casesuggestionrequestpayload: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_casetopic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_casetopicsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_casetopicsummary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_casetopic_incident: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_cdsentityengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channelcapability: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channeldefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channeldefinitionconsent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channeldefinitionlocale: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channelinstancesecret: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channelmessageattachment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channelmessagecontextpart: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channelmessagepart: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_channelprovider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_chatansweroption: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_chatquestionnaireresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_chatquestionnaireresponseitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_chatwidgetlanguage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ciprovider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_clientextension: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_collabgraphresource: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_collabspaceteamassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_configuration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_consoleapplicationtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_consoleapplicationtype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_consoleappparameterdefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_consumingapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contactkpiitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationactionitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationaggregatedinsights: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationcomment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationdata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationinsight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationmessageblock: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationparticipantinsights: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationparticipantsentiment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationquestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsegmentsentiment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsentiment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsignal: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsubject: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsummaryinteraction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsummarysetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsummarysuggestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsystemtag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtopic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtopicsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtopicsummary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtopic_conversation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_copilotagentpreference: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_copilotinteraction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_copilotinteractiondata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_copilotinteractions: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_copilotknowledgeinteraction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_copilotsummarizationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_copilottranscript: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_copilottranscriptdata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_crmconnection: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_csadminconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_cskeyvalueconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customapirulesetconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customcontrolextendedsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerasset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerassetattachment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerassetcategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customeremailcommunication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerfeedbacksurvey: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerfeedbacksurveyinvite: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerfeedbacksurveyresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dailyaccountkpiitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dailycontactkpiitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dailyleadkpiitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dailyopportunitykpiitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticscustomizedreport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsdataset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_copilot: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_csrmanager: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_forecast: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_fs: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_ksinsights: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_mc: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_mkt: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_oc: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_oc_rt: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_sareporting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_ur_recordrouting_rt: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsworkspace: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_databaseversion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataflow: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataflowconnectionreference: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataflowrefreshhistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataflowtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataflow_datalakefolder: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_datahygienesettinginfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_datainsightsandanalyticsfeature: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dealmanageraccess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dealmanagersettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_decisioncontract: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_decisionruleset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_defextendedchannelinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_defextendedchannelinstanceaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_deletedconversation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_derivedinsightsrelatedentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_digitalsellingactivetask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_digitalsellingcompletedtask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_distributedlock: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dmsrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dmsrequeststatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dmssyncrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dmssyncstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entitlementapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityattachment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityattributepredictionrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityderivedinsight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityrankingrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityroutingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityworkstreammap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_extendedusersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_externalcrm: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_externalrecord: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_facebookengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_favoriteknowledgearticle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_federatedarticle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldservicesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldserviceslaconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldservicesummaryconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldservicesystemjob: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fileupload: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flowcardtype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_actionapprovalmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_approval: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_approvalrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_approvalresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_approvalstep: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_basicapprovalmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flow_flowapproval: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flwconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastdefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastingcache: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastpredictionstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_formmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_function: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_functionallocation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_functionallocationtype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_gdprdata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_geofence: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_geofenceevent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_geofencingsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_geolocationsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_geolocationtracking: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_helppage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_historicalcaseharvestbatch: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_historicalcaseharvestrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_icdextension: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iermlmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iermltraining: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inboxcardconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inboxconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inboxentityconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttyperecommendationresult: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttyperesolution: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttypeservice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttypeservicetask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttypessetup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_incidenttype_requirementgroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_insightsstorevirtualentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inspection: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inspectionattachment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inspectiondefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inspectioninstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inspectionresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_insurance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_integratedsearchprovider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentattributeset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentattribute_entity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intententity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentfamily: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentfeature_configuration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentgroupcondition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentharvesting_batchjobstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentharvesting_provisioning_status: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentsolutionmap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_intentsolution_mappingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inventoryjournal: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inventorytransfer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotalert: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotdevice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotdevicecategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotdevicecommand: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotdevicecommanddefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotdevicedatahistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotdeviceproperty: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotfieldmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotpropertydefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotprovider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotproviderinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iotsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iottocaseprocess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_kalanguagesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_kbattachment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_kbenrichment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_kbkeywordsdescsuggestionsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_kmfederatedsearchconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_kmpersonalizationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgearticletemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgeassetconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgeconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgeharvestjobrecord: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgeinteractioninsight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgemanagementsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgepersonalfilter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgesearchfilter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_knowledgesearchinsight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_kpieventdata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_kpieventdefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_leadhygienesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_leadkpiitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_lineengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_linkedentityattributevalidity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_livechatconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_livechatengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_livechatwidgetlocation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_liveconversation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_liveworkitemevent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_liveworkstream: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_localizedsurveyquestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_locationtemplateassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_locationtypetemplateassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_lockstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_macrosession: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_maskingrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_migrationtracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_mobileapp: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_mobilesource: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_modulerundetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_mostcontacted: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_mostcontactedby: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_msteamssetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_msteamssettingsv2: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_nextaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_notesanalysisconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_notificationfield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_notificationtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_nottoexceed: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocagentassignedcustomapiprivilege: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocapplepay: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocautomatedactionrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocautomatedactionrulesmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocbotchannelregistration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocbotchannelregistrationsecret: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occarrier: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occhannelapimessageprivilege: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occhannelapimethodmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occhannelconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occhannelstateconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occommunicationprovidersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_occustommessagingchannel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocexternalcontext: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocfbapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocfbpage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocflaggedspam: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocgatekeeperengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocgooglebusinessmessagesagentaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocgooglebusinessmessagesengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocgooglebusinessmessagespartneraccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_oclanguage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_oclinechannelconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocliveworkitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocliveworkitemparticipant: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocliveworkitemsentiment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_oclocalizationdata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocoutboundconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocpaymentprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocphonecallengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocphonemusic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocphonenumber: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocprovisioningstate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocrecording: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocrichobject: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocrichobjectmap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocruleitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsentimentdailytopic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsession: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsessioncharacteristic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsessionparticipantevent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsessionsentiment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsimltraining: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsitdimportconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsitdskill: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsitrainingdata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocskillidentmlmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsmschannelsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsmssettingsecret: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocsystemmessage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_octag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_octeamschannelconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_octwitterapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_octwitterhandle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_octwitterhandleprovisioningstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_octwitterhandlesecret: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocvoice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocvoicechannellanguagesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocvoicechannelsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocvoicemail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_oc_geolocationprovider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_odosfeaturemetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_odosmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_omnichannelconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_omnichannelpersonalization: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_omnichannelqueue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_omnichannelsyncconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_operatinghour: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_opportunitykpiitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_organizationalunit: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orgchartnode: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_originatingqueue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_overflowactionconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_paneconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_panetabconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_panetoolconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_payment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_paymentdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_paymentmethod: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_paymentterm: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_personalmessage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_personalsoundsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_personasecurityrolemapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_playbookactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_playbookactivityattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_playbookcategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_playbookinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_playbooktemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmanalysishistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmcalendar: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmcalendarversion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pminferredtask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmprocesstemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmprocessusersettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmprocessversion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmrecording: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmsimulation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmview: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_postalbum: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_postalcode: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_postconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_postruleconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictioncomputationoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictionmodelstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictionscheduledoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictivescore: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictivescoringsyncstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictworkhourdurationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_preferredagent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_preferredagentcustomeridentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_preferredagentroutedentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_presence: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_priority: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_problematicasset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productinventory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productivityactioninputparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productivityactionoutputparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productivityagentscript: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productivityagentscriptstep: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productivitymacroactiontemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productivitymacroconnector: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_productivityparameterdefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_property: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_propertyassetassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_propertylocationassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_propertylog: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_propertytemplateassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_provider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_purchaseorder: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_purchaseorderbill: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_purchaseorderproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_questionsequence: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotebookingincident: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotebookingproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotebookingservice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotebookingsetup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quoteinvoicingproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quoteinvoicingsetup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rawinsightentitylink: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_readtrackingenabledinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_realtimescoring: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_realtimescoringoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_recomputetracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_recording: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_recurringsalesaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_recurringsalesactionv2: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_relationshipanalyticsmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_reportbookmark: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementchange: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementcharacteristic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementdependency: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementgroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementorganizationunit: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementrelationship: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementresourcecategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementresourcepreference: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_requirementstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resolution: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourcepaytype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourcerequirement: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourcerequirementdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourceterritory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_richtextfile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rma: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rmaproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rmareceipt: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rmasubstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_routingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_routingconfigurationstep: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_routingrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_routingrulesetsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rtv: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rtvproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rtvsubstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_rulesetdependencymapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sabackupdiagnostic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sabatchruninstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesaccelerationinsight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesassignmentsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salescopilotinsight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salescopilotorgsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salescopilotusersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesforcestructuredobject: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesocmessage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesocsmstemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesroutingdiagnostic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesroutingrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salessuggestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salestag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_saruninstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_scenario: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_schedule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_schedulingparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_schedulingscope: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sciconversation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_scicustomemailhighlight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_scicustomhighlight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_scicustompublisher: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_scienvironmentsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sciusersettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_searchconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_segment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_segmentationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_segmentattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_segmentcatalogue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sentimentanalysis: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sequence: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sequencestat: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sequencetarget: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sequencetargetstep: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sequencetemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_serviceconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_servicecopilotplugin: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_servicecopilotpluginaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_servicecopilotpluginrole: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_serviceoneprovisioningrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_servicetasktype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sessiondata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sessionevent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sessionparticipant: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sessionparticipantdata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sessiontemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_shareasconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_shipvia: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_siconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sikeyvalueconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_similarentitiesfeatureimportance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_skillattachmentruleitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_skillattachmenttarget: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_slakpi: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_smartassistconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_smsengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_smsnumber: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_solutionhealthrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_solutionhealthruleargument: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_solutionhealthruleset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_soundfile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_soundnotificationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_submodeldefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionassignmentrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestioninteraction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionprincipalobjectaccess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionrequestpayload: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionsellerpriority: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionsmodelsummary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionssetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_surveyconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_surveyquestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_surveysetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_swarm: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_swarmparticipant: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_swarmparticipantrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_swarmrole: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_swarmskill: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_swarmtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_taggedrecord: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_taxcode: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_taxcodedetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_teamschannelengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_teamschatassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_teamschatsuggestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_teamscollaboration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_teamsdialeradminsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_teamsengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_templateforproperties: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_templateparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_templateruleset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_templatetags: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_timeentry: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_timeentrysetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_timegroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_timegroupdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_timeoffrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_timespent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_tour: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_trade: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_tradecoverage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_trainingresult: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transactionorigin: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transcript: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_twitterengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_unifiedroutingrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_uniquenumber: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_untrackedappointment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_upgraderun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_upgradestep: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_upgradeversion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_urnotificationtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_urnotificationtemplatemapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_usagemetric: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_usagereporting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_usersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_virtualtablecolumncandidate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_visitorjourney: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_vivacustomerlist: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_vivaentitysetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_vivaorgextensioncred: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_vivaorgsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_vivausersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_voicechannelorganizationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wallsavedquery: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wallsavedqueryusersettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_warehouse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_warranty: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wechatengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_whatsappengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wkwcolleaguesforcompany: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wkwcolleaguesforcontact: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wkwconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workflowactionstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workhourtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_worklistviewconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workorder: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workordercharacteristic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workorderincident: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workordernte: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workorderproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workorderresolution: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workorderservice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workorderservicetask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workordersubstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workordertype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workqueuestate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workqueueusersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_workstreamhmmigrationstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_attendeepass: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_authenticationsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_bucket: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_building: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_checkin: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_customregistrationfield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_entitycounter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_event: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventadministration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventanalytics: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventcustomregistrationfield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventmanagementactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventmanagementconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventpurchase: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventpurchaseattendee: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventpurchasecontact: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventpurchasepass: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventregistration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventregistrationticket: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventteammember: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventteamsproperties: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_eventvendor: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_file: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_hotel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_hotelroomallocation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_hotelroomreservation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_layout: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_pass: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_registrationresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_room: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_roomreservation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_session: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_sessionregistration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_sessiontrack: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_speaker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_speakerengagement: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_sponsorablearticle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_sponsorship: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_usertokencache: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_venue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_waitlistitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_webapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_webinarconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_webinarconsent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_webinarprovider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_webinartype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msevtmgt_websiteentityconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_alert: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_alertrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_emailtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_fileresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_localizedemailtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_project: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_question: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_questionresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_satisfactionmetric: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_survey: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_surveyinvite: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_surveyreminder: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_surveyresponse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msfp_unsubscribedrecipient: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msgdpr_gdprconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msgdpr_gdprconsentchangerecord: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msgraphresourcetosubscription: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mspcat_catalogsubmissionfiles: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_mspcat_packagestore: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_opportunity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_opportunityclose: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_opportunitycompetitors: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_opportunityproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_opportunitysalesprocess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_orderclose: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationdatasyncfnostate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationdatasyncstate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationdatasyncsubscription: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationdatasyncsubscriptionfnotable: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_package: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_packagehistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_pdfsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_phonecall: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_phonetocaseprocess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_plannerbusinessscenario: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_plannersyncaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_plugin: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_pluginpackage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_position: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerbidataset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerbidatasetapdx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerbimashupparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerbireport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerbireportapdx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerfxrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerpagecomponent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerpagesite: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerpagesitelanguage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerpagesitepublished: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerpagesmanagedidentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_powerpagesscanreport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_pricelevel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_privilegecheckerlog: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_privilegecheckerrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_privilegesremovalsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_processstageparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_product: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_productassociation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_productpricelevel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_productsalesliterature: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_productsubstitute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_provisionlanguageforuser: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_queue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_queueitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_quote: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_quoteclose: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_quotedetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_ratingmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_ratingvalue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_reconciliationentityinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_reconciliationentitystepinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_reconciliationinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_recordfilter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_recurringappointmentmaster: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_recyclebinconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_relationshipattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_reportcategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_reportparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_resource: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_resourcegroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_resourcegroupexpansion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_resourcespec: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_retaineddataexcel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_retentioncleanupinfo: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_retentioncleanupoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_retentionconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_retentionfailuredetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_retentionoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_retentionoperationdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_retentionsuccessdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_roleeditorlayout: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_salesliterature: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_salesliteratureitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_salesorder: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_salesorderdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_salesprocessinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_searchattributesettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_searchcustomanalyzer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_searchrelationshipsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_service: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_serviceappointment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_servicecontractcontacts: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_serviceplan: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_serviceplancustomcontrol: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_serviceplanmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_settingdefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_sharedlinksetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_sharedobject: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_sharedworkspace: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_sharedworkspacepool: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_sharepointdocumentlocation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_sharepointsite: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_sideloadedaiplugin: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_site: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_socialactivity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_socialprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_solutioncomponentattributeconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_solutioncomponentbatchconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_solutioncomponentconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_solutioncomponentrelationshipconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_stagedentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_stagedentityattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_stagedmetadataasyncoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_stagesolutionupload: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_supportusertable: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_synapsedatabase: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_synapselinkexternaltablestate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_synapselinkprofile: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_synapselinkprofileentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_synapselinkprofileentitystate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_synapselinkschedule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_systemuser: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_systemuserauthorizationchangetracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_task: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_tdsmetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_team: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_teammobileofflineprofilemembership: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_territory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_topic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_topichistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_topicmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_topicmodelconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_topicmodelexecutionhistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uom: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uomschedule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_usermobileofflineprofilemembership: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_userrating: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_viewasexamplequestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_virtualentitymetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_workflowbinary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_workqueue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_workqueueitem: string;
			/** Unique identifier of the associated organization. */
			readonly OrganizationId: string;
			/** Unique identifier of the principal to which secured field is shared */
			readonly principalid_systemuser: string;
			/** Unique identifier of the principal to which secured field is shared */
			readonly principalid_team: string;
			/** Unique identifier of the shared secured field instance */
			readonly PrincipalObjectAttributeAccessId: string;
			/** Read permission for secured field instance */
			readonly ReadAccess: string;
			/** Update permission for secured field instance */
			readonly UpdateAccess: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAttributeAccess {
		enum ObjectTypeCode {
		}
		enum PrincipalIdType {
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
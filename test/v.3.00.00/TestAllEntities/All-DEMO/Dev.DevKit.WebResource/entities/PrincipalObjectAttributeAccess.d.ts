//@ts-check
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the shared secured field */
		AttributeId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_accountleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_activityfileattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_activitymonitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appelement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_applicationuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appmodulecomponentedge: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appmodulecomponentnode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appusersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_attributeimageconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bookingstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bot: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_botcomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkoperationlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignactivityitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_canvasappextendedmetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_catalog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_catalogassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		channelaccessprofile_principalobjectattributeaccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_characteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_childincidentcount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_comment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_commitment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitoraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitorproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_competitorsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connectionreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactinvoices: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactorders: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contactquotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contractdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_contracttemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_conversationtranscript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customapirequestparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customapiresponseproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_customeropportunityrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datalakefolder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datalakefolderpermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datalakeworkspace: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datalakeworkspacepermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_datasyncstate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_discount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_discounttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entitlementtemplateproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityanalyticsconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityimageconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_entityindex: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_exportsolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_featurecontrolsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_feedback: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachine: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachinegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_incidentresolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_indexattributes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_internalcatalogassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_invoicedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_keyvaultreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgearticleviews: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadaddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadcompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_listmember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_listoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_managedidentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_marketingformdisplayattributes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynce_botcontent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynsm_marketingsitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynsm_salessitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynsm_servicessitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynsm_settingssitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_3dmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_accountpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actual: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_adaptivecardconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_adminappstate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agentstatushistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aicontactsuggestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analytics: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analyticsadminsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_analyticsforcs: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_appconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_applicationextension: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_applicationtabtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_approval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_approvalset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assetcategorytemplateassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assetsuggestionssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assettemplateassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assignmentconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assignmentconfigurationstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assignmentmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_assignmentrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_attribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_attributevalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_authenticationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_autocapturerule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_autocapturesettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_batchjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookableresourceassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookableresourcebookingquicknote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookableresourcecapacityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingchange: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingsetupmetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_businessclosure: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_cannedmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_capacityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_caseenrichment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casesuggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casetopic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casetopicsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casetopicsummary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_casetopic_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_cdsentityengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelcapability: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_channelprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_chatansweroption: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_chatquestionnaireresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_chatquestionnaireresponseitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_chatwidgetlanguage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ciprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_clientextension: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_collabgraphresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_configuration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationnotificationfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationnotificationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationsessiontemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationtemplateparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleapplicationtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_consoleappparameterdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contactpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contactsuggestionrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contactsuggestionruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contractlinedetailperformance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contractlineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contractlinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contractperformance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationactionlocale: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationinsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsuggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopicsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopicsummary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopic_conversation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerasset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerassetattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerassetcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_csrmanager: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_fs: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_fspredictrs: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_fspredictwhd: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_ksinsights: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_oc: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_ocvoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataexport: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_datainsightsandanalyticsfeature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dealmanageraccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dealmanagersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_decisioncontract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_decisionruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_delegation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dimension: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dimensionfieldname: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_effortpredictionresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entitlementapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entitylinkchatconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityroutingconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_estimate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_estimateline: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_expense: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_expensecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_expensereceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_extendedusersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_facebookengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_federatedarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldcomputation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicepricelistitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldserviceslaconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicesystemjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_findworkevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_functionallocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_gdprdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geofence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geofenceevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geofencingsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geolocationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_geolocationtracking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iermlmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iermltraining: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttyperecommendationresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttyperecommendationrunhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttyperesolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypeservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_incidenttype_requirementgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspectionattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspectiondefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspectioninstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inspectionresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_integrationjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_integrationjobdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_invoicefrequency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_invoicefrequencydetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicecommanddefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicedatahistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdeviceproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotdevicevisualizationconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotfieldmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotpropertydefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotproviderinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iotsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iottocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_journal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_journalline: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kbattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kbenrichment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kbkeywordsdescsuggestionsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kmpersonalizationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kpieventdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_kpieventdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_lineengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_livechatconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_livechatengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_livechatwidgetlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_liveworkitemevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_liveworkstream: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_liveworkstreamcapacityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_localizedsurveyquestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_macrosession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_maskingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_masterentityroutingconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_migrationtracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_mlresultcache: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_msteamssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_msteamssettingsv2: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notificationfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notificationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocautoblockrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocbotchannelregistration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occarrier: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occhannelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occhannelstateconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occommunicationprovidersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occommunicationprovidersettingentry: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_occustommessagingchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocfbapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocfbpage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocflaggedspam: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oclanguage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oclinechannelconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemcapacityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemcharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemcontextitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemparticipant: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkitemsentiment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocliveworkstreamcontextvariable: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oclocalizationdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocoutboundconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocoutboundmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocphonenumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocprovisioningstate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocrecording: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsentimentdailytopic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsentimentdailytopickeyword: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsentimentdailytopictrending: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsessioncharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsessionparticipantevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsessionsentiment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsimltraining: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsitdimportconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsitdskill: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsitrainingdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocskillidentmlmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsmschannelsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocsystemmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octag: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octeamschannelconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octwitterapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_octwitterhandle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocwechatchannelconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocwhatsappchannelaccount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocwhatsappchannelnumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oc_geolocationprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_omnichannelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_omnichannelpersonalization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_omnichannelqueue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_omnichannelsyncconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_operatinghour: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingsetupdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_organizationalunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_overflowactionconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_paneconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_panetabconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_panetoolconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_payment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_paymentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_paymentmethod: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_paymentterm: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_personalmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_personalsoundsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_personasecurityrolemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pminferredtask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmrecording: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postalcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictworkhourdurationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_presence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_priority: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_problematicasset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_problematicassetfeedback: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_processnotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productinventory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityactioninputparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityactionoutputparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityagentscript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityagentscriptstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivitymacroactiontemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivitymacroconnector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivitymacrosolutionconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_productivityparameterdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_project: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectapproval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projecttask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectteam: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_property: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_propertyassetassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_propertylog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_propertytemplateassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_provider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_questionsequence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotebookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quoteinvoicingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quoteinvoicingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelineanalyticsbreakdown: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotepricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementdependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementorganizationunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_requirementstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourceassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourceassignmentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcecategorymarkuppricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcepaytype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcerequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcerequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_richtextfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rma: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rmaproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rmasubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_roleutilization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_routingconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_routingconfigurationstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_routingrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_routingrulesetsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rtvproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_rulesetdependencymapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesaccelerationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesassignmentsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesroutingrun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scenario: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scheduleboardsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_schedulingfeatureflag: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_schedulingparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_searchconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_segment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_segmentcatalogue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sentimentanalysis: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequencestat: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequencetarget: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sequencetargetstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_servicetasktype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessiondata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessionevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessionparticipant: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessionparticipantdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sessiontemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_shipvia: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sikeyvalueconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_skillattachmentruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_skillattachmenttarget: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_smartassistconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_smsengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_smsnumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_soundfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_soundnotificationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestioninteraction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionsmodelsummary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_surveyquestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_taxcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_taxcodedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamschannelengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamschatassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamschatsuggestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamsdialeradminsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_teamsengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_templateforproperties: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_templateparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_templatetags: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timeentry: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timeentrysetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timeoffcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timeoffrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_tour: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactionconnection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactionorigin: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactiontype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transcript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_twitterengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_unifiedroutingdiagnostic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_unifiedroutingrun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_unifiedroutingsetuptracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_uniquenumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_urnotificationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_urnotificationtemplatemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_usersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_userworkhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_visitorjourney: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wechatengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_whatsappengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderdetailsgenerationqueue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderresolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workordertype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workqueuestate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_workqueueusersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_actioncallworkflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_agentscripttaskcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_answer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_auditanddiagnosticssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_configuration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_customizationfiles: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_entityassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_entitysearch: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_form: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_languagemodule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_scriptlet: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_scripttasktrigger: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_search: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_sessioninformation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_sessiontransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_ucisettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_uiievent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_usersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_windowroute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_alert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_alertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_fileresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_localizedemailtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_project: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_question: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_satisfactionmetric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_surveyreminder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunityclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunitycompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunityproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_opportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_orderclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncsubscription: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_package: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pdfsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonetocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pluginpackage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productpricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_productsubstitute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_provisionlanguageforuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quoteclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_quotedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_ratingmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_ratingvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_relationshipattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reportcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcegroupexpansion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcespec: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesorderdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_salesprocessinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_service: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_servicecontractcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceplan: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceplanmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_settingdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_site: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentbatchconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_systemuserauthorizationchangetracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_teammobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topichistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_action: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_audit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_context: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_hostedapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_nonhostedapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_option: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_savedsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_sessiontransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_workflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_workflowstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uom: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uomschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_usermobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_virtualentitymetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_workflowbinary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the principal to which secured field is shared */
		principalid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the shared secured field instance */
		PrincipalObjectAttributeAccessId: DevKit.WebApi.GuidValue;
		/** Read permission for secured field instance */
		ReadAccess: DevKit.WebApi.BooleanValue;
		/** Update permission for secured field instance */
		UpdateAccess: DevKit.WebApi.BooleanValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace PrincipalObjectAttributeAccess {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}
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
		objectid_appaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appactionmigration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appactionrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_appelement: string;
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
		objectid_attributeimageconfig: string;
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
		objectid_bulkoperation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_bulkoperationlog: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_businessunit: string;
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
		objectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_catalog: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_catalogassignment: string;
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
		objectid_discount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_discounttype: string;
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
		objectid_environmentvariabledefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_environmentvariablevalue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_equipment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_exportsolutionupload: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_fax: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_featurecontrolsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_feedback: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachine: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowmachinegroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_flowsession: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_goal: string;
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
		objectid_managedidentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_marketingformdisplayattributes: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynce_botcontent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynsm_marketingsitemap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynsm_salessitemap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynsm_servicessitemap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdynsm_settingssitemap: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_3dmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_accountpricelist: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardregarding: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actioncardrolesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_actual: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_adaptivecardconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_adminappstate: string;
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
		objectid_msdyn_appconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_applicationextension: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_approval: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_approvalset: string;
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
		objectid_msdyn_batchjob: string;
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
		objectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
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
		objectid_msdyn_channelprovider: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_characteristicreqforteammember: string;
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
		objectid_msdyn_contactpricelist: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contractlinedetailperformance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contractlineinvoiceschedule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contractlinescheduleofvalue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_contractperformance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationdata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationinsight: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationsuggestionrequestpayload: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopic: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopicsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopicsummary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_conversationtopic_conversation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_csadminconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerasset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerassetattachment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_customerassetcategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticscustomizedreport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport: string;
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
		objectid_msdyn_dataanalyticsreport_oc: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_databaseversion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataexport: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflow: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dataflowrefreshhistory: string;
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
		objectid_msdyn_delegation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dimension: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_dimensionfieldname: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entitlementapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityrankingrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_entityroutingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_estimate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_estimateline: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_expense: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_expensecategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_expensereceipt: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_extendedusersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_facebookengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fact: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_federatedarticle: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldcomputation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldserviceslaconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_fieldservicesystemjob: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_findworkevent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_flowcardtype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastdefinition: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastinstance: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_functionallocation: string;
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
		objectid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iermlmodel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_iermltraining: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inboxconfiguration: string;
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
		objectid_msdyn_integrationjob: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_integrationjobdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventoryjournal: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_inventorytransfer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_invoicefrequency: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_invoicefrequencydetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_invoicelinetransaction: string;
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
		objectid_msdyn_journal: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_journalline: string;
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
		objectid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_lineengagementctx: string;
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
		objectid_msdyn_macrosession: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_maskingrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_migrationtracker: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_mlresultcache: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_msteamssetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_msteamssettingsv2: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notesanalysisconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notificationfield: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_notificationtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocapplepay: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocbotchannelregistration: string;
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
		objectid_msdyn_ocfbapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocfbpage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocflaggedspam: string;
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
		objectid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_oc_geolocationprovider: string;
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
		objectid_msdyn_opportunitylineresourcecategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitylinetransaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitylinetransactioncategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitylinetransactionclassificatio: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_opportunitypricelist: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderlineresourcecategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderlinetransaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderlinetransactioncategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderlinetransactionclassification: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_orderpricelist: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_organizationalunit: string;
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
		objectid_msdyn_pminferredtask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmrecording: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_pmtemplate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postalbum: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postalcode: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_postruleconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictivescore: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_predictworkhourdurationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_presence: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_priority: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_problematicasset: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_processnotes: string;
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
		objectid_msdyn_project: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectapproval: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectparameterpricelist: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectpricelist: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projecttask: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projecttaskdependency: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projecttaskstatususer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectteam: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projectteammembersignup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_projecttransactioncategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_property: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_propertyassetassociation: string;
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
		objectid_msdyn_quotelineanalyticsbreakdown: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelineinvoiceschedule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelineresourcecategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelinescheduleofvalue: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelinetransaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelinetransactioncategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotelinetransactionclassification: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_quotepricelist: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_recording: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_relationshipinsightsunifiedconfig: string;
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
		objectid_msdyn_resourceassignment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourceassignmentdetail: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcecategorymarkuppricelevel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcecategorypricelevel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcepaytype: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_resourcerequest: string;
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
		objectid_msdyn_rolecompetencyrequirement: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_roleutilization: string;
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
		objectid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesassignmentsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salesroutingrun: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salessuggestion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_salestag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scenario: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_schedulingparameter: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_searchconfiguration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_segment: string;
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
		objectid_msdyn_shipvia: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_siconfig: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_sikeyvalueconfig: string;
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
		objectid_msdyn_suggestioninteraction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionrequestpayload: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionsmodelsummary: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_suggestionssetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_surveyquestion: string;
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
		objectid_msdyn_timeoffcalendar: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timeoffrequest: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_timespent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_tour: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactioncategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactioncategoryclassification: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactioncategoryhierarchyelement: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactioncategorypricelevel: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactionconnection: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactionorigin: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_transactiontype: string;
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
		objectid_msdyn_usersetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_userworkhistory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_visitorjourney: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wallsavedquery: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wallsavedqueryusersettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_warehouse: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_wechatengagementctx: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyn_whatsappengagementctx: string;
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
		objectid_msdyusd_actioncallworkflow: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_agentscriptaction: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_agentscripttaskcategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_answer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_auditanddiagnosticssetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_configuration: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_customizationfiles: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_entityassignment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_entitysearch: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_form: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_languagemodule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_scriptlet: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_scripttasktrigger: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_search: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_sessioninformation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_sessiontransfer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_task: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_toolbarbutton: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_toolbarstrip: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_tracesourcesetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_ucisettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_uiievent: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_usersettings: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_msdyusd_windowroute: string;
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
		objectid_organizationdatasyncstate: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncsubscription: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_organizationsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_package: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pdfsetting: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonecall: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_phonetocaseprocess: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pluginpackage: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_position: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_pricelevel: string;
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
		objectid_recurringappointmentmaster: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_relationshipattribute: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_reportcategory: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resource: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcegroup: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcegroupexpansion: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_resourcespec: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_revokeinheritedaccessrecordstracker: string;
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
		objectid_service: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceappointment: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_servicecontractcontacts: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_serviceplan: string;
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
		objectid_sharepointdocumentlocation: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_sharepointsite: string;
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
		objectid_stagesolutionupload: string;
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
		objectid_uii_action: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_audit: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_context: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_hostedapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_nonhostedapplication: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_option: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_savedsession: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_sessiontransfer: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_workflow: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_workflowstep: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uii_workflow_workflowstep_mapping: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uom: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_uomschedule: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_usermobileofflineprofilemembership: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_virtualentitymetadata: string;
		/** Unique identifier of the entity instance with shared secured field */
		objectid_workflowbinary: string;
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
			readonly objectid_appaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appactionmigration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appactionrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_appelement: string;
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
			readonly objectid_attributeimageconfig: string;
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
			readonly objectid_bulkoperation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_bulkoperationlog: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_businessunit: string;
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
			readonly objectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_catalog: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_catalogassignment: string;
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
			readonly objectid_discount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_discounttype: string;
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
			readonly objectid_environmentvariabledefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_environmentvariablevalue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_equipment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_exportsolutionupload: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_fax: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_featurecontrolsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_feedback: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowmachine: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowmachinegroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_flowsession: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_goal: string;
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
			readonly objectid_managedidentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_marketingformdisplayattributes: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynce_botcontent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynsm_marketingsitemap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynsm_salessitemap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynsm_servicessitemap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdynsm_settingssitemap: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_3dmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_accountpricelist: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_actioncardregarding: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_actioncardrolesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_actual: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_adaptivecardconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_adminappstate: string;
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
			readonly objectid_msdyn_appconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_applicationextension: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_approval: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_approvalset: string;
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
			readonly objectid_msdyn_batchjob: string;
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
			readonly objectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
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
			readonly objectid_msdyn_channelprovider: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_characteristicreqforteammember: string;
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
			readonly objectid_msdyn_contactpricelist: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contractlinedetailperformance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contractlineinvoiceschedule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contractlinescheduleofvalue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_contractperformance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationdata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationinsight: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationsuggestionrequestpayload: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtopic: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtopicsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtopicsummary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_conversationtopic_conversation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_csadminconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerasset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerassetattachment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_customerassetcategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticscustomizedreport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport: string;
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
			readonly objectid_msdyn_dataanalyticsreport_oc: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_databaseversion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataexport: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataflow: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dataflowrefreshhistory: string;
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
			readonly objectid_msdyn_delegation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dimension: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_dimensionfieldname: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entitlementapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityrankingrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_entityroutingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_estimate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_estimateline: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_expense: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_expensecategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_expensereceipt: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_extendedusersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_facebookengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fact: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_federatedarticle: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldcomputation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldservicesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldserviceslaconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_fieldservicesystemjob: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_findworkevent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_flowcardtype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastdefinition: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastinstance: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_functionallocation: string;
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
			readonly objectid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iermlmodel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_iermltraining: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inboxconfiguration: string;
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
			readonly objectid_msdyn_integrationjob: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_integrationjobdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inventoryjournal: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_inventorytransfer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_invoicefrequency: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_invoicefrequencydetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_invoicelinetransaction: string;
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
			readonly objectid_msdyn_journal: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_journalline: string;
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
			readonly objectid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_lineengagementctx: string;
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
			readonly objectid_msdyn_macrosession: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_maskingrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_migrationtracker: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_mlresultcache: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_msteamssetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_msteamssettingsv2: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_notesanalysisconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_notificationfield: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_notificationtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocapplepay: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocbotchannelregistration: string;
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
			readonly objectid_msdyn_ocfbapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocfbpage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocflaggedspam: string;
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
			readonly objectid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_oc_geolocationprovider: string;
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
			readonly objectid_msdyn_opportunitylineresourcecategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_opportunitylinetransaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_opportunitylinetransactioncategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_opportunitylinetransactionclassificatio: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_opportunitypricelist: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderlineresourcecategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderlinetransaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderlinetransactioncategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderlinetransactionclassification: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_orderpricelist: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_organizationalunit: string;
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
			readonly objectid_msdyn_pminferredtask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmrecording: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_pmtemplate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_postalbum: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_postalcode: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_postconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_postruleconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictivescore: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_predictworkhourdurationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_presence: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_priority: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_problematicasset: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_processnotes: string;
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
			readonly objectid_msdyn_project: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projectapproval: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projectparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projectparameterpricelist: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projectpricelist: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projecttask: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projecttaskdependency: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projecttaskstatususer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projectteam: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projectteammembersignup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_projecttransactioncategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_property: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_propertyassetassociation: string;
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
			readonly objectid_msdyn_quotelineanalyticsbreakdown: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotelineinvoiceschedule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotelineresourcecategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotelinescheduleofvalue: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotelinetransaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotelinetransactioncategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotelinetransactionclassification: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_quotepricelist: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_recording: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_relationshipinsightsunifiedconfig: string;
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
			readonly objectid_msdyn_resourceassignment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourceassignmentdetail: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourcecategorymarkuppricelevel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourcecategorypricelevel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourcepaytype: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_resourcerequest: string;
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
			readonly objectid_msdyn_rolecompetencyrequirement: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_roleutilization: string;
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
			readonly objectid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesassignmentsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salesroutingrun: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salessuggestion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_salestag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_scenario: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_schedulingparameter: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_searchconfiguration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_segment: string;
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
			readonly objectid_msdyn_shipvia: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_siconfig: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_sikeyvalueconfig: string;
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
			readonly objectid_msdyn_suggestioninteraction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionrequestpayload: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionsmodelsummary: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_suggestionssetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_surveyquestion: string;
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
			readonly objectid_msdyn_timeoffcalendar: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_timeoffrequest: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_timespent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_tour: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transactioncategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transactioncategoryclassification: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transactioncategoryhierarchyelement: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transactioncategorypricelevel: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transactionconnection: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transactionorigin: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_transactiontype: string;
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
			readonly objectid_msdyn_usersetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_userworkhistory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_visitorjourney: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wallsavedquery: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wallsavedqueryusersettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_warehouse: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_wechatengagementctx: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyn_whatsappengagementctx: string;
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
			readonly objectid_msdyusd_actioncallworkflow: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_agentscriptaction: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_agentscripttaskcategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_answer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_auditanddiagnosticssetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_configuration: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_customizationfiles: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_entityassignment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_entitysearch: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_form: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_languagemodule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_scriptlet: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_scripttasktrigger: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_search: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_sessioninformation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_sessiontransfer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_task: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_toolbarbutton: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_toolbarstrip: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_tracesourcesetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_ucisettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_uiievent: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_usersettings: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_msdyusd_windowroute: string;
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
			readonly objectid_organizationdatasyncstate: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationdatasyncsubscription: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_organizationsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_package: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_pdfsetting: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_phonecall: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_phonetocaseprocess: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_pluginpackage: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_position: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_pricelevel: string;
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
			readonly objectid_recurringappointmentmaster: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_relationshipattribute: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_reportcategory: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_resource: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_resourcegroup: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_resourcegroupexpansion: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_resourcespec: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_revokeinheritedaccessrecordstracker: string;
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
			readonly objectid_service: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_serviceappointment: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_servicecontractcontacts: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_serviceplan: string;
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
			readonly objectid_sharepointdocumentlocation: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_sharepointsite: string;
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
			readonly objectid_stagesolutionupload: string;
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
			readonly objectid_uii_action: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_audit: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_context: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_hostedapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_nonhostedapplication: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_option: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_savedsession: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_sessiontransfer: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_workflow: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_workflowstep: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uii_workflow_workflowstep_mapping: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uom: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_uomschedule: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_usermobileofflineprofilemembership: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_virtualentitymetadata: string;
			/** Unique identifier of the entity instance with shared secured field */
			readonly objectid_workflowbinary: string;
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
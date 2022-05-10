//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserEntityInstanceDataApi {
		/**
		* DynamicsCrm.DevKit UserEntityInstanceDataApi
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
		/** Common end date */
		CommonEnd_UtcDateAndTime: Date;
		/** Common start date */
		CommonStart_UtcDateAndTime: Date;
		/** Due Date */
		DueDate_UtcDateAndTime: Date;
		/** Flag due by */
		FlagDueBy_UtcDateAndTime: Date;
		/** Flag request */
		FlagRequest: string;
		/** Flag status. */
		FlagStatus: number;
		/** Unique identifier of the source record. */
		objectid_account: string;
		/** Unique identifier of the source record. */
		objectid_accountleads: string;
		/** Unique identifier of the source record. */
		objectid_activityfileattachment: string;
		/** Unique identifier of the source record. */
		objectid_activitymimeattachment: string;
		/** Unique identifier of the source record. */
		objectid_activitymonitor: string;
		/** Unique identifier of the source record. */
		objectid_activityparty: string;
		/** Unique identifier of the source record. */
		objectid_adminsettingsentity: string;
		/** Unique identifier of the source record. */
		objectid_annotation: string;
		/** Unique identifier of the source record. */
		objectid_appaction: string;
		/** Unique identifier of the source record. */
		objectid_appactionmigration: string;
		/** Unique identifier of the source record. */
		objectid_appactionrule: string;
		/** Unique identifier of the source record. */
		objectid_appelement: string;
		/** Unique identifier of the source record. */
		objectid_applicationuser: string;
		/** Unique identifier of the source record. */
		objectid_appmodulecomponentedge: string;
		/** Unique identifier of the source record. */
		objectid_appmodulecomponentnode: string;
		/** Unique identifier of the source record. */
		objectid_appointment: string;
		/** Unique identifier of the source record. */
		objectid_appsetting: string;
		/** Unique identifier of the source record. */
		objectid_appusersetting: string;
		/** Unique identifier of the source record. */
		objectid_asyncoperation: string;
		/** Unique identifier of the source record. */
		objectid_attachment: string;
		/** Unique identifier of the source record. */
		objectid_attributeimageconfig: string;
		/** Unique identifier of the source record. */
		objectid_attributemap: string;
		/** Unique identifier of the source record. */
		objectid_audit: string;
		/** Unique identifier of the source record. */
		objectid_bookableresource: string;
		/** Unique identifier of the source record. */
		objectid_bookableresourcebooking: string;
		/** Unique identifier of the source record. */
		objectid_bookableresourcebookingexchangesyncidmapping: string;
		/** Unique identifier of the source record. */
		objectid_bookableresourcebookingheader: string;
		/** Unique identifier of the source record. */
		objectid_bookableresourcecategory: string;
		/** Unique identifier of the source record. */
		objectid_bookableresourcecategoryassn: string;
		/** Unique identifier of the source record. */
		objectid_bookableresourcecharacteristic: string;
		/** Unique identifier of the source record. */
		objectid_bookableresourcegroup: string;
		/** Unique identifier of the source record. */
		objectid_bookingstatus: string;
		/** Unique identifier of the source record. */
		objectid_bot: string;
		/** Unique identifier of the source record. */
		objectid_botcomponent: string;
		/** Unique identifier of the source record. */
		objectid_bulkdeletefailure: string;
		/** Unique identifier of the source record. */
		objectid_bulkdeleteoperation: string;
		/** Unique identifier of the source record. */
		objectid_bulkoperation: string;
		/** Unique identifier of the source record. */
		objectid_bulkoperationlog: string;
		/** Unique identifier of the source record. */
		objectid_businessunitmap: string;
		/** Unique identifier of the source record. */
		objectid_businessunitnewsarticle: string;
		/** Unique identifier of the source record. */
		objectid_calendar: string;
		/** Unique identifier of the source record. */
		objectid_calendarrule: string;
		/** Unique identifier of the source record. */
		objectid_campaign: string;
		/** Unique identifier of the source record. */
		objectid_campaignactivity: string;
		/** Unique identifier of the source record. */
		objectid_campaignactivityitem: string;
		/** Unique identifier of the source record. */
		objectid_campaignitem: string;
		/** Unique identifier of the source record. */
		objectid_campaignresponse: string;
		/** Unique identifier of the source record. */
		objectid_canvasappextendedmetadata: string;
		/** Unique identifier of the source record. */
		objectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the source record. */
		objectid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the source record. */
		objectid_catalog: string;
		/** Unique identifier of the source record. */
		objectid_catalogassignment: string;
		/** Unique identifier of the source record. */
		channelaccessprofile_userentityinstancedatas: string;
		/** Unique identifier of the source record. */
		channelaccessprofileruleid: string;
		/** Unique identifier of the source record. */
		objectid_characteristic: string;
		/** Unique identifier of the source record. */
		objectid_chat: string;
		/** Unique identifier of the source record. */
		objectid_childincidentcount: string;
		/** Unique identifier of the source record. */
		objectid_clientupdate: string;
		/** Unique identifier of the source record. */
		objectid_columnmapping: string;
		/** Unique identifier of the source record. */
		objectid_comment: string;
		/** Unique identifier of the source record. */
		objectid_commitment: string;
		/** Unique identifier of the source record. */
		objectid_competitor: string;
		/** Unique identifier of the source record. */
		objectid_competitoraddress: string;
		/** Unique identifier of the source record. */
		objectid_competitorproduct: string;
		/** Unique identifier of the source record. */
		objectid_competitorsalesliterature: string;
		/** Unique identifier of the source record. */
		objectid_connection: string;
		/** Unique identifier of the source record. */
		objectid_connectionreference: string;
		/** Unique identifier of the source record. */
		objectid_connectionrole: string;
		/** Unique identifier of the source record. */
		objectid_connectionroleassociation: string;
		/** Unique identifier of the source record. */
		objectid_connectionroleobjecttypecode: string;
		/** Unique identifier of the source record. */
		objectid_connector: string;
		/** Unique identifier of the source record. */
		objectid_constraintbasedgroup: string;
		/** Unique identifier of the source record. */
		objectid_contact: string;
		/** Unique identifier of the source record. */
		objectid_contactinvoices: string;
		/** Unique identifier of the source record. */
		objectid_contactleads: string;
		/** Unique identifier of the source record. */
		objectid_contactorders: string;
		/** Unique identifier of the source record. */
		objectid_contactquotes: string;
		/** Unique identifier of the source record. */
		objectid_contract: string;
		/** Unique identifier of the source record. */
		objectid_contractdetail: string;
		/** Unique identifier of the source record. */
		objectid_contracttemplate: string;
		/** Unique identifier of the source record. */
		objectid_conversationtranscript: string;
		/** Unique identifier of the source record. */
		objectid_convertrule: string;
		/** Unique identifier of the source record. */
		objectid_customapi: string;
		/** Unique identifier of the source record. */
		objectid_customapirequestparameter: string;
		/** Unique identifier of the source record. */
		objectid_customapiresponseproperty: string;
		/** Unique identifier of the source record. */
		objectid_customeraddress: string;
		/** Unique identifier of the source record. */
		objectid_customeropportunityrole: string;
		/** Unique identifier of the source record. */
		objectid_customerrelationship: string;
		/** Unique identifier of the source record. */
		objectid_datalakefolder: string;
		/** Unique identifier of the source record. */
		objectid_datalakefolderpermission: string;
		/** Unique identifier of the source record. */
		objectid_datalakeworkspace: string;
		/** Unique identifier of the source record. */
		objectid_datalakeworkspacepermission: string;
		/** Unique identifier of the source record. */
		objectid_dataprocessingconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_dependency: string;
		/** Unique identifier of the source record. */
		objectid_dependencynode: string;
		/** Unique identifier of the source record. */
		objectid_discount: string;
		/** Unique identifier of the source record. */
		objectid_discounttype: string;
		/** Unique identifier of the source record. */
		objectid_displaystring: string;
		/** Unique identifier of the source record. */
		objectid_displaystringmap: string;
		/** Unique identifier of the source record. */
		objectid_documentindex: string;
		/** Unique identifier of the source record. */
		objectid_duplicaterecord: string;
		/** Unique identifier of the source record. */
		objectid_duplicaterule: string;
		/** Unique identifier of the source record. */
		objectid_duplicaterulecondition: string;
		/** Unique identifier of the source record. */
		objectid_dynamicproperty: string;
		/** Unique identifier of the source record. */
		objectid_dynamicpropertyassociation: string;
		/** Unique identifier of the source record. */
		objectid_dynamicpropertyinstance: string;
		/** Unique identifier of the source record. */
		objectid_dynamicpropertyoptionsetitem: string;
		/** Unique identifier of the source record. */
		objectid_email: string;
		/** Unique identifier of the source record. */
		objectid_emailhash: string;
		/** Unique identifier of the source record. */
		objectid_emailsearch: string;
		/** Unique identifier of the source record. */
		objectid_entitlement: string;
		/** Unique identifier of the source record. */
		objectid_entitlementchannel: string;
		/** Unique identifier of the source record. */
		objectid_entitlementcontacts: string;
		/** Unique identifier of the source record. */
		objectid_entitlemententityallocationtypemapping: string;
		/** Unique identifier of the source record. */
		objectid_entitlementproducts: string;
		/** Unique identifier of the source record. */
		objectid_entitlementtemplate: string;
		/** Unique identifier of the source record. */
		objectid_entitlementtemplatechannel: string;
		/** Unique identifier of the source record. */
		objectid_entitlementtemplateproducts: string;
		/** Unique identifier of the source record. */
		objectid_entityanalyticsconfig: string;
		/** Unique identifier of the source record. */
		objectid_entityimageconfig: string;
		/** Unique identifier of the source record. */
		objectid_entityindex: string;
		/** Unique identifier of the source record. */
		objectid_entitymap: string;
		/** Unique identifier of the source record. */
		objectid_environmentvariabledefinition: string;
		/** Unique identifier of the source record. */
		objectid_environmentvariablevalue: string;
		/** Unique identifier of the source record. */
		objectid_equipment: string;
		/** Unique identifier of the source record. */
		objectid_exportsolutionupload: string;
		/** Unique identifier of the source record. */
		externalparty_userentityinstancedatas: string;
		/** Unique identifier of the source record. */
		objectid_fax: string;
		/** Unique identifier of the source record. */
		objectid_featurecontrolsetting: string;
		/** Unique identifier of the source record. */
		objectid_fieldpermission: string;
		/** Unique identifier of the source record. */
		objectid_fieldsecurityprofile: string;
		/** Unique identifier of the source record. */
		objectid_fileattachment: string;
		/** Unique identifier of the source record. */
		objectid_filtertemplate: string;
		/** Unique identifier of the source record. */
		objectid_flowmachine: string;
		/** Unique identifier of the source record. */
		objectid_flowmachinegroup: string;
		/** Unique identifier of the source record. */
		objectid_flowsession: string;
		/** Unique identifier of the source record. */
		objectid_goal: string;
		/** Unique identifier of the source record. */
		objectid_goalrollupquery: string;
		/** Unique identifier of the source record. */
		objectid_holidaywrapper: string;
		/** Unique identifier of the source record. */
		objectid_import: string;
		/** Unique identifier of the source record. */
		objectid_importdata: string;
		/** Unique identifier of the source record. */
		objectid_importentitymapping: string;
		/** Unique identifier of the source record. */
		objectid_importfile: string;
		/** Unique identifier of the source record. */
		objectid_importjob: string;
		/** Unique identifier of the source record. */
		objectid_importlog: string;
		/** Unique identifier of the source record. */
		objectid_importmap: string;
		/** Unique identifier of the source record. */
		objectid_incident: string;
		/** Unique identifier of the source record. */
		objectid_incidentknowledgebaserecord: string;
		/** Unique identifier of the source record. */
		objectid_incidentresolution: string;
		/** Unique identifier of the source record. */
		objectid_indexattributes: string;
		/** Unique identifier of the source record. */
		objectid_internaladdress: string;
		/** Unique identifier of the source record. */
		objectid_internalcatalogassignment: string;
		/** Unique identifier of the source record. */
		objectid_invaliddependency: string;
		/** Unique identifier of the source record. */
		objectid_invoice: string;
		/** Unique identifier of the source record. */
		objectid_invoicedetail: string;
		/** Unique identifier of the source record. */
		objectid_isvconfig: string;
		/** Unique identifier of the source record. */
		objectid_kbarticle: string;
		/** Unique identifier of the source record. */
		objectid_kbarticlecomment: string;
		/** Unique identifier of the source record. */
		objectid_kbarticletemplate: string;
		/** Unique identifier of the source record. */
		objectid_keyvaultreference: string;
		/** Unique identifier of the source record. */
		objectid_knowledgearticle: string;
		/** Unique identifier of the source record. */
		objectid_knowledgearticleincident: string;
		/** Unique identifier of the source record. */
		objectid_knowledgebaserecord: string;
		/** Unique identifier of the source record. */
		objectid_lead: string;
		/** Unique identifier of the source record. */
		objectid_leadaddress: string;
		/** Unique identifier of the source record. */
		objectid_leadcompetitors: string;
		/** Unique identifier of the source record. */
		objectid_leadproduct: string;
		/** Unique identifier of the source record. */
		objectid_leadtoopportunitysalesprocess: string;
		/** Unique identifier of the source record. */
		objectid_letter: string;
		/** Unique identifier of the source record. */
		objectid_license: string;
		/** Unique identifier of the source record. */
		objectid_list: string;
		/** Unique identifier of the source record. */
		objectid_listmember: string;
		/** Unique identifier of the source record. */
		objectid_listoperation: string;
		/** Unique identifier of the source record. */
		objectid_lookupmapping: string;
		/** Unique identifier of the source record. */
		objectid_mailbox: string;
		/** Unique identifier of the source record. */
		objectid_mailmergetemplate: string;
		/** Unique identifier of the source record. */
		objectid_managedidentity: string;
		/** Unique identifier of the source record. */
		objectid_marketingformdisplayattributes: string;
		/** Unique identifier of the source record. */
		objectid_metric: string;
		/** Unique identifier of the source record. */
		objectid_msdynce_botcontent: string;
		/** Unique identifier of the source record. */
		objectid_msdynsm_marketingsitemap: string;
		/** Unique identifier of the source record. */
		objectid_msdynsm_salessitemap: string;
		/** Unique identifier of the source record. */
		objectid_msdynsm_servicessitemap: string;
		/** Unique identifier of the source record. */
		objectid_msdynsm_settingssitemap: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_3dmodel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_accountpricelist: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_actioncardregarding: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_actioncardrolesetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_actual: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_adaptivecardconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_adminappstate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agentstatushistory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreement: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibdataset: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibdatasetfile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibdatasetrecord: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibdatasetscontainer: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibfile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibfileattacheddata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aicontactsuggestion: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aifptrainingdocument: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aimodel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiodimage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiodlabel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiodtrainingboundingbox: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiodtrainingimage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_aitemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_analysiscomponent: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_analysisjob: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_analysisresult: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_analysisresultdetail: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_analytics: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_analyticsadminsettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_analyticsforcs: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_appconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_applicationextension: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_approval: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_approvalset: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_assetcategorytemplateassociation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_assetsuggestionssetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_assettemplateassociation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_assignmentconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_assignmentconfigurationstep: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_assignmentmap: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_assignmentrule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_attribute: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_attributevalue: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_authenticationsettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_authsettingsentry: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_autocapturerule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_autocapturesettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_batchjob: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookableresourceassociation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookingalert: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookingchange: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookingjournal: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookingrule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookingsetupmetadata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_businessclosure: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_callablecontext: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_cannedmessage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_capacityprofile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_caseenrichment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_casesuggestionrequestpayload: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_casetopic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_casetopicsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_casetopicsummary: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_casetopic_incident: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_cdsentityengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_channel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_channelcapability: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_channelprovider: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_characteristicreqforteammember: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_chatansweroption: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_chatquestionnaireresponse: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_chatquestionnaireresponseitem: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_chatwidgetlanguage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ciprovider: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_clientextension: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_collabgraphresource: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_configuration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_consoleapplicationtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_consoleapplicationtype: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_consoleappparameterdefinition: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_contactpricelist: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_contractlinedetailperformance: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_contractlineinvoiceschedule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_contractlinescheduleofvalue: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_contractperformance: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationaction: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationdata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationinsight: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationsuggestionrequestpayload: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationtopic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationtopicsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationtopicsummary: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_conversationtopic_conversation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_csadminconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_customengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_customerasset: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_customerassetattachment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_customerassetcategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticscustomizedreport: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_csrmanager: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_forecast: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_fs: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_ksinsights: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_oc: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_databaseversion: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataexport: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataflow: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataflowrefreshhistory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_datainsightsandanalyticsfeature: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dealmanageraccess: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dealmanagersettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_decisioncontract: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_decisionruleset: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_delegation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dimension: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_dimensionfieldname: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_entitlementapplication: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_entityconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_entityconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_entityrankingrule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_entityroutingconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_estimate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_estimateline: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_expense: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_expensecategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_expensereceipt: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_extendedusersetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_facebookengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_fact: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_federatedarticle: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_fieldcomputation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_fieldservicesetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_fieldserviceslaconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_fieldservicesystemjob: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_findworkevent: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_flowcardtype: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_forecastdefinition: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_forecastinstance: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_functionallocation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_gdprdata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_geofence: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_geofenceevent: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_geofencingsettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_geolocationsettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_geolocationtracking: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_helppage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iermlmodel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iermltraining: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inboxconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttype: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttyperecommendationresult: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttyperesolution: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttypeservicetask: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_incidenttype_requirementgroup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_insightsstorevirtualentity: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inspection: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inspectionattachment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inspectiondefinition: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inspectioninstance: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inspectionresponse: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_integrationjob: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_integrationjobdetail: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inventoryjournal: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_inventorytransfer: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_invoicefrequency: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_invoicefrequencydetail: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_invoicelinetransaction: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotalert: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotdevice: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotdevicecommanddefinition: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotdevicedatahistory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotdeviceproperty: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotfieldmapping: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotpropertydefinition: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotprovider: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotproviderinstance: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iotsettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_iottocaseprocess: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_journal: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_journalline: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_kalanguagesetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_kbattachment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_kbenrichment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_kbkeywordsdescsuggestionsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_kmfederatedsearchconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_kmpersonalizationsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgeinteractioninsight: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgemanagementsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgepersonalfilter: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgesearchfilter: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgesearchinsight: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_kpieventdata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_kpieventdefinition: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_leadhygienesetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_lineengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_livechatconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_livechatengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_livechatwidgetlocation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_liveconversation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_liveworkitemevent: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_liveworkstream: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_localizedsurveyquestion: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_macrosession: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_maskingrule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_migrationtracker: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_mlresultcache: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_msteamssetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_msteamssettingsv2: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_notesanalysisconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_notificationfield: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_notificationtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocapplepay: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocbotchannelregistration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occarrier: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occhannelapimessageprivilege: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occhannelapimethodmapping: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occhannelconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occhannelstateconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occommunicationprovidersetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_occustommessagingchannel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocfbapplication: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocfbpage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_oclanguage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_oclinechannelconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocliveworkitem: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocliveworkitemparticipant: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocliveworkitemsentiment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_oclocalizationdata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocoutboundconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocpaymentprofile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocphonenumber: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocprovisioningstate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocrecording: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocrequest: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocrichobject: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocrichobjectmap: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocruleitem: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsentimentdailytopic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsession: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsessioncharacteristic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsessionparticipantevent: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsessionsentiment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsimltraining: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsitdimportconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsitdskill: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsitrainingdata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocskillidentmlmodel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsmschannelsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocsystemmessage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_octag: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_octeamschannelconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_octwitterapplication: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_octwitterhandle: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_oc_geolocationprovider: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_omnichannelconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_omnichannelpersonalization: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_omnichannelqueue: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_omnichannelsyncconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_operatinghour: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_opportunitylineresourcecategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_opportunitylinetransaction: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_opportunitylinetransactioncategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_opportunitylinetransactionclassificatio: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_opportunitypricelist: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderlineresourcecategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderlinetransaction: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderlinetransactioncategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderlinetransactionclassification: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_orderpricelist: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_organizationalunit: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_paneconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_panetabconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_panetoolconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_payment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_paymentdetail: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_paymentmethod: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_paymentterm: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_personalmessage: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_personasecurityrolemapping: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbookactivity: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbookactivityattribute: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbookcategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbookinstance: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_playbooktemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_pmanalysishistory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_pminferredtask: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_pmrecording: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_pmtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_postalbum: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_postalcode: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_postconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_postruleconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_predictivescore: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_predictworkhourdurationsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_presence: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_priority: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_problematicasset: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_processnotes: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productinventory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productivityactioninputparameter: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productivityactionoutputparameter: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productivityagentscript: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productivityagentscriptstep: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productivitymacroactiontemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productivitymacroconnector: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_productivityparameterdefinition: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_project: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projectapproval: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projectparameter: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projectparameterpricelist: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projectpricelist: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projecttask: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projecttaskdependency: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projecttaskstatususer: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projectteam: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projectteammembersignup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_projecttransactioncategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_property: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_propertyassetassociation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_propertylog: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_propertytemplateassociation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_provider: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_purchaseorder: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_purchaseorderproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_questionsequence: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotebookingincident: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotebookingservice: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotebookingsetup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quoteinvoicingproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quoteinvoicingsetup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotelineanalyticsbreakdown: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotelineinvoiceschedule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotelineresourcecategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotelinescheduleofvalue: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotelinetransaction: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotelinetransactioncategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotelinetransactionclassification: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_quotepricelist: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_recording: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_requirementdependency: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_requirementgroup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_requirementorganizationunit: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_requirementrelationship: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_requirementstatus: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resolution: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourceassignment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourceassignmentdetail: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourcecategorymarkuppricelevel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourcecategorypricelevel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourcepaytype: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourcerequest: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourcerequirement: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_resourceterritory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_richtextfile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rma: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rmaproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rmareceipt: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rmasubstatus: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rolecompetencyrequirement: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_roleutilization: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_routingconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_routingconfigurationstep: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_routingrequest: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_routingrulesetsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rtv: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rtvproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_rulesetdependencymapping: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_salesassignmentsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_salesroutingrun: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_salessuggestion: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_salestag: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_scenario: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_schedulingparameter: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_searchconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_segment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_segmentcatalogue: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sentimentanalysis: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sequence: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sequencestat: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sequencetarget: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sequencetargetstep: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sequencetemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_serviceconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_servicetasktype: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sessiondata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sessionevent: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sessionparticipant: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sessionparticipantdata: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sessiontemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_shipvia: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_siconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_sikeyvalueconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_skillattachmentruleitem: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_skillattachmenttarget: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_slakpi: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_smartassistconfig: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_smsengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_smsnumber: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_solutionhealthrule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_solutionhealthruleargument: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_solutionhealthruleset: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_soundfile: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_suggestioninteraction: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_suggestionrequestpayload: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_suggestionsmodelsummary: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_suggestionssetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_surveyquestion: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_swarm: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_swarmparticipant: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_swarmparticipantrule: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_swarmrole: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_swarmskill: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_swarmtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_taxcode: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_taxcodedetail: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_teamschannelengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_teamschatassociation: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_teamschatsuggestion: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_teamscollaboration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_teamsdialeradminsettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_teamsengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_templateforproperties: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_templateparameter: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_templatetags: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_timeentry: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_timeentrysetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_timegroup: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_timegroupdetail: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_timeoffcalendar: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_timeoffrequest: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_timespent: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_tour: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_transactioncategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_transactioncategoryclassification: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_transactioncategoryhierarchyelement: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_transactioncategorypricelevel: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_transactionconnection: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_transactionorigin: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_transactiontype: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_transcript: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_twitterengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_unifiedroutingrun: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_uniquenumber: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_untrackedappointment: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_upgraderun: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_upgradestep: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_upgradeversion: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_urnotificationtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_urnotificationtemplatemapping: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_usagemetric: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_usersetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_userworkhistory: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_visitorjourney: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_wallsavedquery: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_wallsavedqueryusersettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_warehouse: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_wechatengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_whatsappengagementctx: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workhourtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_worklistviewconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workorder: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workorderincident: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workorderproduct: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workorderresolution: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workorderservice: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workorderservicetask: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workordersubstatus: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workordertype: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workqueuestate: string;
		/** Unique identifier of the source record. */
		objectid_msdyn_workqueueusersetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_actioncallworkflow: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_agentscriptaction: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_agentscripttaskcategory: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_answer: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_auditanddiagnosticssetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_configuration: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_customizationfiles: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_entityassignment: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_entitysearch: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_form: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_languagemodule: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_scriptlet: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_scripttasktrigger: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_search: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_sessioninformation: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_sessiontransfer: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_task: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_toolbarbutton: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_toolbarstrip: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_tracesourcesetting: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_ucisettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_uiievent: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_usersettings: string;
		/** Unique identifier of the source record. */
		objectid_msdyusd_windowroute: string;
		/** Unique identifier of the source record. */
		objectid_msfp_alert: string;
		/** Unique identifier of the source record. */
		objectid_msfp_alertrule: string;
		/** Unique identifier of the source record. */
		objectid_msfp_emailtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msfp_fileresponse: string;
		/** Unique identifier of the source record. */
		objectid_msfp_localizedemailtemplate: string;
		/** Unique identifier of the source record. */
		objectid_msfp_project: string;
		/** Unique identifier of the source record. */
		objectid_msfp_question: string;
		/** Unique identifier of the source record. */
		objectid_msfp_questionresponse: string;
		/** Unique identifier of the source record. */
		objectid_msfp_satisfactionmetric: string;
		/** Unique identifier of the source record. */
		objectid_msfp_survey: string;
		/** Unique identifier of the source record. */
		objectid_msfp_surveyinvite: string;
		/** Unique identifier of the source record. */
		objectid_msfp_surveyreminder: string;
		/** Unique identifier of the source record. */
		objectid_msfp_surveyresponse: string;
		/** Unique identifier of the source record. */
		objectid_msfp_unsubscribedrecipient: string;
		/** Unique identifier of the source record. */
		objectid_notification: string;
		/** Unique identifier of the source record. */
		objectid_opportunity: string;
		/** Unique identifier of the source record. */
		objectid_opportunityclose: string;
		/** Unique identifier of the source record. */
		objectid_opportunitycompetitors: string;
		/** Unique identifier of the source record. */
		objectid_opportunityproduct: string;
		/** Unique identifier of the source record. */
		objectid_opportunitysalesprocess: string;
		/** Unique identifier of the source record. */
		objectid_orderclose: string;
		/** Unique identifier of the source record. */
		objectid_organization: string;
		/** Unique identifier of the source record. */
		objectid_organizationdatasyncstate: string;
		/** Unique identifier of the source record. */
		objectid_organizationdatasyncsubscription: string;
		/** Unique identifier of the source record. */
		objectid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the source record. */
		objectid_organizationsetting: string;
		/** Unique identifier of the source record. */
		objectid_organizationstatistic: string;
		/** Unique identifier of the source record. */
		objectid_ownermapping: string;
		/** Unique identifier of the source record. */
		objectid_package: string;
		/** Unique identifier of the source record. */
		objectid_pdfsetting: string;
		/** Unique identifier of the source record. */
		objectid_phonecall: string;
		/** Unique identifier of the source record. */
		objectid_phonetocaseprocess: string;
		/** Unique identifier of the source record. */
		objectid_picklistmapping: string;
		/** Unique identifier of the source record. */
		objectid_pluginassembly: string;
		/** Unique identifier of the source record. */
		objectid_pluginpackage: string;
		/** Unique identifier of the source record. */
		objectid_plugintype: string;
		/** Unique identifier of the source record. */
		objectid_plugintypestatistic: string;
		/** Unique identifier of the source record. */
		objectid_pricelevel: string;
		/** Unique identifier of the source record. */
		objectid_principalattributeaccessmap: string;
		/** Unique identifier of the source record. */
		objectid_principalentitymap: string;
		/** Unique identifier of the source record. */
		objectid_principalobjectaccess: string;
		/** Unique identifier of the source record. */
		objectid_principalobjectattributeaccess: string;
		/** Unique identifier of the source record. */
		objectid_privilege: string;
		/** Unique identifier of the source record. */
		objectid_privilegesremovalsetting: string;
		/** Unique identifier of the source record. */
		objectid_processsession: string;
		/** Unique identifier of the source record. */
		objectid_processstageparameter: string;
		/** Unique identifier of the source record. */
		objectid_product: string;
		/** Unique identifier of the source record. */
		objectid_productassociation: string;
		/** Unique identifier of the source record. */
		objectid_productpricelevel: string;
		/** Unique identifier of the source record. */
		objectid_productsalesliterature: string;
		/** Unique identifier of the source record. */
		objectid_productsubstitute: string;
		/** Unique identifier of the source record. */
		objectid_provisionlanguageforuser: string;
		/** Unique identifier of the source record. */
		objectid_publisher: string;
		/** Unique identifier of the source record. */
		objectid_publisheraddress: string;
		/** Unique identifier of the source record. */
		objectid_queue: string;
		/** Unique identifier of the source record. */
		objectid_queueitem: string;
		/** Unique identifier of the source record. */
		objectid_quote: string;
		/** Unique identifier of the source record. */
		objectid_quoteclose: string;
		/** Unique identifier of the source record. */
		objectid_quotedetail: string;
		/** Unique identifier of the source record. */
		objectid_ratingmodel: string;
		/** Unique identifier of the source record. */
		objectid_ratingvalue: string;
		/** Unique identifier of the source record. */
		objectid_recurringappointmentmaster: string;
		/** Unique identifier of the source record. */
		objectid_relationshipattribute: string;
		/** Unique identifier of the source record. */
		objectid_relationshiprole: string;
		/** Unique identifier of the source record. */
		objectid_relationshiprolemap: string;
		/** Unique identifier of the source record. */
		objectid_report: string;
		/** Unique identifier of the source record. */
		objectid_reportcategory: string;
		/** Unique identifier of the source record. */
		objectid_reportentity: string;
		/** Unique identifier of the source record. */
		objectid_reportlink: string;
		/** Unique identifier of the source record. */
		objectid_reportvisibility: string;
		/** Unique identifier of the source record. */
		objectid_resource: string;
		/** Unique identifier of the source record. */
		objectid_resourcegroup: string;
		/** Unique identifier of the source record. */
		objectid_resourcegroupexpansion: string;
		/** Unique identifier of the source record. */
		objectid_resourcespec: string;
		/** Unique identifier of the source record. */
		objectid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the source record. */
		objectid_ribboncommand: string;
		/** Unique identifier of the source record. */
		objectid_ribboncontextgroup: string;
		/** Unique identifier of the source record. */
		objectid_ribboncustomization: string;
		/** Unique identifier of the source record. */
		objectid_ribbondiff: string;
		/** Unique identifier of the source record. */
		objectid_ribbonrule: string;
		/** Unique identifier of the source record. */
		objectid_ribbontabtocommandmap: string;
		/** Unique identifier of the source record. */
		objectid_role: string;
		/** Unique identifier of the source record. */
		objectid_roletemplate: string;
		/** Unique identifier of the source record. */
		objectid_rollupfield: string;
		/** Unique identifier of the source record. */
		objectid_routingrule: string;
		/** Unique identifier of the source record. */
		objectid_routingruleitem: string;
		/** Unique identifier of the source record. */
		objectid_salesliterature: string;
		/** Unique identifier of the source record. */
		objectid_salesliteratureitem: string;
		/** Unique identifier of the source record. */
		objectid_salesorder: string;
		/** Unique identifier of the source record. */
		objectid_salesorderdetail: string;
		/** Unique identifier of the source record. */
		objectid_salesprocessinstance: string;
		/** Unique identifier of the source record. */
		objectid_savedquery: string;
		/** Unique identifier of the source record. */
		objectid_savedqueryvisualization: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessage: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessagefilter: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessagepair: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstep: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstepimage: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstepsecureconfig: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessagerequest: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessagerequestfield: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessageresponse: string;
		/** Unique identifier of the source record. */
		objectid_sdkmessageresponsefield: string;
		/** Unique identifier of the source record. */
		objectid_service: string;
		/** Unique identifier of the source record. */
		objectid_serviceappointment: string;
		/** Unique identifier of the source record. */
		objectid_servicecontractcontacts: string;
		/** Unique identifier of the source record. */
		objectid_serviceendpoint: string;
		/** Unique identifier of the source record. */
		objectid_serviceplan: string;
		/** Unique identifier of the source record. */
		objectid_serviceplanmapping: string;
		/** Unique identifier of the source record. */
		objectid_settingdefinition: string;
		/** Unique identifier of the source record. */
		objectid_sharedlinksetting: string;
		/** Unique identifier of the source record. */
		objectid_sharedobject: string;
		/** Unique identifier of the source record. */
		objectid_sharedworkspace: string;
		/** Unique identifier of the source record. */
		objectid_sharepointdocumentlocation: string;
		/** Unique identifier of the source record. */
		objectid_sharepointsite: string;
		/** Unique identifier of the source record. */
		objectid_site: string;
		/** Unique identifier of the source record. */
		objectid_sitemap: string;
		/** Unique identifier of the source record. */
		objectid_sla: string;
		/** Unique identifier of the source record. */
		objectid_socialactivity: string;
		/** Unique identifier of the source record. */
		objectid_solution: string;
		/** Unique identifier of the source record. */
		objectid_solutioncomponent: string;
		/** Unique identifier of the source record. */
		objectid_solutioncomponentattributeconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_solutioncomponentbatchconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_solutioncomponentconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_solutioncomponentrelationshipconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_stagesolutionupload: string;
		/** Unique identifier of the source record. */
		objectid_statusmap: string;
		/** Unique identifier of the source record. */
		objectid_stringmap: string;
		/** Unique identifier of the source record. */
		objectid_subject: string;
		/** Unique identifier of the source record. */
		objectid_subscription: string;
		/** Unique identifier of the source record. */
		objectid_subscriptionmanuallytrackedobject: string;
		/** Unique identifier of the source record. */
		objectid_subscriptionsyncinfo: string;
		/** Unique identifier of the source record. */
		objectid_synapsedatabase: string;
		/** Unique identifier of the source record. */
		objectid_synapselinkexternaltablestate: string;
		/** Unique identifier of the source record. */
		objectid_synapselinkprofile: string;
		/** Unique identifier of the source record. */
		objectid_synapselinkprofileentity: string;
		/** Unique identifier of the source record. */
		objectid_synapselinkprofileentitystate: string;
		/** Unique identifier of the source record. */
		objectid_synapselinkschedule: string;
		/** Unique identifier of the source record. */
		objectid_systemuser: string;
		/** Unique identifier of the source record. */
		objectid_systemuserauthorizationchangetracker: string;
		/** Unique identifier of the source record. */
		objectid_systemuserbusinessunitentitymap: string;
		/** Unique identifier of the source record. */
		objectid_task: string;
		/** Unique identifier of the source record. */
		objectid_team: string;
		/** Unique identifier of the source record. */
		objectid_teammembership: string;
		/** Unique identifier of the source record. */
		objectid_teammobileofflineprofilemembership: string;
		/** Unique identifier of the source record. */
		objectid_template: string;
		/** Unique identifier of the source record. */
		objectid_territory: string;
		/** Unique identifier of the source record. */
		objectid_theme: string;
		/** Unique identifier of the source record. */
		objectid_timezonedefinition: string;
		/** Unique identifier of the source record. */
		objectid_timezonelocalizedname: string;
		/** Unique identifier of the source record. */
		objectid_timezonerule: string;
		/** Unique identifier of the source record. */
		objectid_topic: string;
		/** Unique identifier of the source record. */
		objectid_topichistory: string;
		/** Unique identifier of the source record. */
		objectid_topicmodel: string;
		/** Unique identifier of the source record. */
		objectid_topicmodelconfiguration: string;
		/** Unique identifier of the source record. */
		objectid_topicmodelexecutionhistory: string;
		/** Unique identifier of the source record. */
		objectid_transactioncurrency: string;
		/** Unique identifier of the source record. */
		objectid_transformationmapping: string;
		/** Unique identifier of the source record. */
		objectid_transformationparametermapping: string;
		/** Unique identifier of the source record. */
		objectid_uii_action: string;
		/** Unique identifier of the source record. */
		objectid_uii_audit: string;
		/** Unique identifier of the source record. */
		objectid_uii_context: string;
		/** Unique identifier of the source record. */
		objectid_uii_hostedapplication: string;
		/** Unique identifier of the source record. */
		objectid_uii_nonhostedapplication: string;
		/** Unique identifier of the source record. */
		objectid_uii_option: string;
		/** Unique identifier of the source record. */
		objectid_uii_savedsession: string;
		/** Unique identifier of the source record. */
		objectid_uii_sessiontransfer: string;
		/** Unique identifier of the source record. */
		objectid_uii_workflow: string;
		/** Unique identifier of the source record. */
		objectid_uii_workflowstep: string;
		/** Unique identifier of the source record. */
		objectid_uii_workflow_workflowstep_mapping: string;
		/** Unique identifier of the source record. */
		objectid_unresolvedaddress: string;
		/** Unique identifier of the source record. */
		objectid_uom: string;
		/** Unique identifier of the source record. */
		objectid_uomschedule: string;
		/** Unique identifier of the source record. */
		objectid_userentityuisettings: string;
		/** Unique identifier of the source record. */
		objectid_userfiscalcalendar: string;
		/** Unique identifier of the source record. */
		objectid_userform: string;
		/** Unique identifier of the source record. */
		objectid_usermapping: string;
		/** Unique identifier of the source record. */
		objectid_usermobileofflineprofilemembership: string;
		/** Unique identifier of the source record. */
		objectid_userquery: string;
		/** Unique identifier of the source record. */
		objectid_userqueryvisualization: string;
		/** Unique identifier of the source record. */
		objectid_virtualentitymetadata: string;
		/** Unique identifier of the source record. */
		objectid_webresource: string;
		/** Unique identifier of the source record. */
		objectid_webwizard: string;
		/** Unique identifier of the source record. */
		objectid_wizardaccessprivilege: string;
		/** Unique identifier of the source record. */
		objectid_wizardpage: string;
		/** Unique identifier of the source record. */
		objectid_workflow: string;
		/** Unique identifier of the source record. */
		objectid_workflowbinary: string;
		/** Unique identifier of the source record. */
		objectid_workflowdependency: string;
		/** Unique identifier of the source record. */
		objectid_workflowlog: string;
		/** Unique identifier of the source record. */
		objectid_workflowwaitsubscription: string;
		/** Object Type Code */
		ObjectTypeCode: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns this object. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns this object. */
		readonly OwningUser: string;
		/** Personal categories */
		PersonalCategories: string;
		/** Indicates whether a reminder is set on this object. */
		ReminderSet: boolean;
		/** Reminder time */
		ReminderTime_UtcDateAndTime: Date;
		/** Start Time */
		StartTime_UtcDateAndTime: Date;
		/** To Do item flags. */
		ToDoItemFlags: number;
		/** For internal use only. */
		ToDoOrdinalDate_UtcDateAndTime: Date;
		/** For internal use only. */
		ToDoSubOrdinal: string;
		/** For internal use only. */
		ToDoTitle: string;
		/** Unique identifier user entity */
		UserEntityInstanceDataId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Common end date */
			readonly CommonEnd_UtcDateAndTime: string;
			/** Common start date */
			readonly CommonStart_UtcDateAndTime: string;
			/** Due Date */
			readonly DueDate_UtcDateAndTime: string;
			/** Flag due by */
			readonly FlagDueBy_UtcDateAndTime: string;
			/** Flag request */
			readonly FlagRequest: string;
			/** Flag status. */
			readonly FlagStatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_account: string;
			/** Unique identifier of the source record. */
			readonly objectid_accountleads: string;
			/** Unique identifier of the source record. */
			readonly objectid_activityfileattachment: string;
			/** Unique identifier of the source record. */
			readonly objectid_activitymimeattachment: string;
			/** Unique identifier of the source record. */
			readonly objectid_activitymonitor: string;
			/** Unique identifier of the source record. */
			readonly objectid_activityparty: string;
			/** Unique identifier of the source record. */
			readonly objectid_adminsettingsentity: string;
			/** Unique identifier of the source record. */
			readonly objectid_annotation: string;
			/** Unique identifier of the source record. */
			readonly objectid_appaction: string;
			/** Unique identifier of the source record. */
			readonly objectid_appactionmigration: string;
			/** Unique identifier of the source record. */
			readonly objectid_appactionrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_appelement: string;
			/** Unique identifier of the source record. */
			readonly objectid_applicationuser: string;
			/** Unique identifier of the source record. */
			readonly objectid_appmodulecomponentedge: string;
			/** Unique identifier of the source record. */
			readonly objectid_appmodulecomponentnode: string;
			/** Unique identifier of the source record. */
			readonly objectid_appointment: string;
			/** Unique identifier of the source record. */
			readonly objectid_appsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_appusersetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_asyncoperation: string;
			/** Unique identifier of the source record. */
			readonly objectid_attachment: string;
			/** Unique identifier of the source record. */
			readonly objectid_attributeimageconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_attributemap: string;
			/** Unique identifier of the source record. */
			readonly objectid_audit: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookableresource: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookableresourcebooking: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookableresourcebookingexchangesyncidmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookableresourcebookingheader: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookableresourcecategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookableresourcecategoryassn: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookableresourcecharacteristic: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookableresourcegroup: string;
			/** Unique identifier of the source record. */
			readonly objectid_bookingstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_bot: string;
			/** Unique identifier of the source record. */
			readonly objectid_botcomponent: string;
			/** Unique identifier of the source record. */
			readonly objectid_bulkdeletefailure: string;
			/** Unique identifier of the source record. */
			readonly objectid_bulkdeleteoperation: string;
			/** Unique identifier of the source record. */
			readonly objectid_bulkoperation: string;
			/** Unique identifier of the source record. */
			readonly objectid_bulkoperationlog: string;
			/** Unique identifier of the source record. */
			readonly objectid_businessunitmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_businessunitnewsarticle: string;
			/** Unique identifier of the source record. */
			readonly objectid_calendar: string;
			/** Unique identifier of the source record. */
			readonly objectid_calendarrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_campaign: string;
			/** Unique identifier of the source record. */
			readonly objectid_campaignactivity: string;
			/** Unique identifier of the source record. */
			readonly objectid_campaignactivityitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_campaignitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_campaignresponse: string;
			/** Unique identifier of the source record. */
			readonly objectid_canvasappextendedmetadata: string;
			/** Unique identifier of the source record. */
			readonly objectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the source record. */
			readonly objectid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the source record. */
			readonly objectid_catalog: string;
			/** Unique identifier of the source record. */
			readonly objectid_catalogassignment: string;
			/** Unique identifier of the source record. */
			readonly channelaccessprofile_userentityinstancedatas: string;
			/** Unique identifier of the source record. */
			readonly channelaccessprofileruleid: string;
			/** Unique identifier of the source record. */
			readonly objectid_characteristic: string;
			/** Unique identifier of the source record. */
			readonly objectid_chat: string;
			/** Unique identifier of the source record. */
			readonly objectid_childincidentcount: string;
			/** Unique identifier of the source record. */
			readonly objectid_clientupdate: string;
			/** Unique identifier of the source record. */
			readonly objectid_columnmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_comment: string;
			/** Unique identifier of the source record. */
			readonly objectid_commitment: string;
			/** Unique identifier of the source record. */
			readonly objectid_competitor: string;
			/** Unique identifier of the source record. */
			readonly objectid_competitoraddress: string;
			/** Unique identifier of the source record. */
			readonly objectid_competitorproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_competitorsalesliterature: string;
			/** Unique identifier of the source record. */
			readonly objectid_connection: string;
			/** Unique identifier of the source record. */
			readonly objectid_connectionreference: string;
			/** Unique identifier of the source record. */
			readonly objectid_connectionrole: string;
			/** Unique identifier of the source record. */
			readonly objectid_connectionroleassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_connectionroleobjecttypecode: string;
			/** Unique identifier of the source record. */
			readonly objectid_connector: string;
			/** Unique identifier of the source record. */
			readonly objectid_constraintbasedgroup: string;
			/** Unique identifier of the source record. */
			readonly objectid_contact: string;
			/** Unique identifier of the source record. */
			readonly objectid_contactinvoices: string;
			/** Unique identifier of the source record. */
			readonly objectid_contactleads: string;
			/** Unique identifier of the source record. */
			readonly objectid_contactorders: string;
			/** Unique identifier of the source record. */
			readonly objectid_contactquotes: string;
			/** Unique identifier of the source record. */
			readonly objectid_contract: string;
			/** Unique identifier of the source record. */
			readonly objectid_contractdetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_contracttemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_conversationtranscript: string;
			/** Unique identifier of the source record. */
			readonly objectid_convertrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_customapi: string;
			/** Unique identifier of the source record. */
			readonly objectid_customapirequestparameter: string;
			/** Unique identifier of the source record. */
			readonly objectid_customapiresponseproperty: string;
			/** Unique identifier of the source record. */
			readonly objectid_customeraddress: string;
			/** Unique identifier of the source record. */
			readonly objectid_customeropportunityrole: string;
			/** Unique identifier of the source record. */
			readonly objectid_customerrelationship: string;
			/** Unique identifier of the source record. */
			readonly objectid_datalakefolder: string;
			/** Unique identifier of the source record. */
			readonly objectid_datalakefolderpermission: string;
			/** Unique identifier of the source record. */
			readonly objectid_datalakeworkspace: string;
			/** Unique identifier of the source record. */
			readonly objectid_datalakeworkspacepermission: string;
			/** Unique identifier of the source record. */
			readonly objectid_dataprocessingconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_dependency: string;
			/** Unique identifier of the source record. */
			readonly objectid_dependencynode: string;
			/** Unique identifier of the source record. */
			readonly objectid_discount: string;
			/** Unique identifier of the source record. */
			readonly objectid_discounttype: string;
			/** Unique identifier of the source record. */
			readonly objectid_displaystring: string;
			/** Unique identifier of the source record. */
			readonly objectid_displaystringmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_documentindex: string;
			/** Unique identifier of the source record. */
			readonly objectid_duplicaterecord: string;
			/** Unique identifier of the source record. */
			readonly objectid_duplicaterule: string;
			/** Unique identifier of the source record. */
			readonly objectid_duplicaterulecondition: string;
			/** Unique identifier of the source record. */
			readonly objectid_dynamicproperty: string;
			/** Unique identifier of the source record. */
			readonly objectid_dynamicpropertyassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_dynamicpropertyinstance: string;
			/** Unique identifier of the source record. */
			readonly objectid_dynamicpropertyoptionsetitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_email: string;
			/** Unique identifier of the source record. */
			readonly objectid_emailhash: string;
			/** Unique identifier of the source record. */
			readonly objectid_emailsearch: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitlement: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitlementchannel: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitlementcontacts: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitlemententityallocationtypemapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitlementproducts: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitlementtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitlementtemplatechannel: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitlementtemplateproducts: string;
			/** Unique identifier of the source record. */
			readonly objectid_entityanalyticsconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_entityimageconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_entityindex: string;
			/** Unique identifier of the source record. */
			readonly objectid_entitymap: string;
			/** Unique identifier of the source record. */
			readonly objectid_environmentvariabledefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_environmentvariablevalue: string;
			/** Unique identifier of the source record. */
			readonly objectid_equipment: string;
			/** Unique identifier of the source record. */
			readonly objectid_exportsolutionupload: string;
			/** Unique identifier of the source record. */
			readonly externalparty_userentityinstancedatas: string;
			/** Unique identifier of the source record. */
			readonly objectid_fax: string;
			/** Unique identifier of the source record. */
			readonly objectid_featurecontrolsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_fieldpermission: string;
			/** Unique identifier of the source record. */
			readonly objectid_fieldsecurityprofile: string;
			/** Unique identifier of the source record. */
			readonly objectid_fileattachment: string;
			/** Unique identifier of the source record. */
			readonly objectid_filtertemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_flowmachine: string;
			/** Unique identifier of the source record. */
			readonly objectid_flowmachinegroup: string;
			/** Unique identifier of the source record. */
			readonly objectid_flowsession: string;
			/** Unique identifier of the source record. */
			readonly objectid_goal: string;
			/** Unique identifier of the source record. */
			readonly objectid_goalrollupquery: string;
			/** Unique identifier of the source record. */
			readonly objectid_holidaywrapper: string;
			/** Unique identifier of the source record. */
			readonly objectid_import: string;
			/** Unique identifier of the source record. */
			readonly objectid_importdata: string;
			/** Unique identifier of the source record. */
			readonly objectid_importentitymapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_importfile: string;
			/** Unique identifier of the source record. */
			readonly objectid_importjob: string;
			/** Unique identifier of the source record. */
			readonly objectid_importlog: string;
			/** Unique identifier of the source record. */
			readonly objectid_importmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_incident: string;
			/** Unique identifier of the source record. */
			readonly objectid_incidentknowledgebaserecord: string;
			/** Unique identifier of the source record. */
			readonly objectid_incidentresolution: string;
			/** Unique identifier of the source record. */
			readonly objectid_indexattributes: string;
			/** Unique identifier of the source record. */
			readonly objectid_internaladdress: string;
			/** Unique identifier of the source record. */
			readonly objectid_internalcatalogassignment: string;
			/** Unique identifier of the source record. */
			readonly objectid_invaliddependency: string;
			/** Unique identifier of the source record. */
			readonly objectid_invoice: string;
			/** Unique identifier of the source record. */
			readonly objectid_invoicedetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_isvconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_kbarticle: string;
			/** Unique identifier of the source record. */
			readonly objectid_kbarticlecomment: string;
			/** Unique identifier of the source record. */
			readonly objectid_kbarticletemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_keyvaultreference: string;
			/** Unique identifier of the source record. */
			readonly objectid_knowledgearticle: string;
			/** Unique identifier of the source record. */
			readonly objectid_knowledgearticleincident: string;
			/** Unique identifier of the source record. */
			readonly objectid_knowledgebaserecord: string;
			/** Unique identifier of the source record. */
			readonly objectid_lead: string;
			/** Unique identifier of the source record. */
			readonly objectid_leadaddress: string;
			/** Unique identifier of the source record. */
			readonly objectid_leadcompetitors: string;
			/** Unique identifier of the source record. */
			readonly objectid_leadproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_leadtoopportunitysalesprocess: string;
			/** Unique identifier of the source record. */
			readonly objectid_letter: string;
			/** Unique identifier of the source record. */
			readonly objectid_license: string;
			/** Unique identifier of the source record. */
			readonly objectid_list: string;
			/** Unique identifier of the source record. */
			readonly objectid_listmember: string;
			/** Unique identifier of the source record. */
			readonly objectid_listoperation: string;
			/** Unique identifier of the source record. */
			readonly objectid_lookupmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_mailbox: string;
			/** Unique identifier of the source record. */
			readonly objectid_mailmergetemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_managedidentity: string;
			/** Unique identifier of the source record. */
			readonly objectid_marketingformdisplayattributes: string;
			/** Unique identifier of the source record. */
			readonly objectid_metric: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdynce_botcontent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdynsm_marketingsitemap: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdynsm_salessitemap: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdynsm_servicessitemap: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdynsm_settingssitemap: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_3dmodel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_accountpricelist: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_actioncardregarding: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_actioncardrolesetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_actual: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_adaptivecardconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_adminappstate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agentstatushistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreement: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementbookingdate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementbookingincident: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementbookingservice: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_agreementsubstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aibdataset: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aibdatasetfile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aibdatasetrecord: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aibdatasetscontainer: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aibfile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aibfileattacheddata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aiconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aicontactsuggestion: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aifptrainingdocument: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aimodel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aiodimage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aiodlabel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aiodtrainingboundingbox: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aiodtrainingimage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_aitemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_analysiscomponent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_analysisjob: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_analysisresult: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_analysisresultdetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_analytics: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_analyticsadminsettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_analyticsforcs: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_appconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_applicationextension: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_approval: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_approvalset: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_assetcategorytemplateassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_assetsuggestionssetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_assettemplateassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_assignmentconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_assignmentconfigurationstep: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_assignmentmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_assignmentrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_attribute: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_attributevalue: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_authenticationsettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_authsettingsentry: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_autocapturerule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_autocapturesettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_batchjob: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookableresourceassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookingalert: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookingalertstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookingchange: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookingjournal: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookingrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookingsetupmetadata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bookingtimestamp: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_businessclosure: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_callablecontext: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_cannedmessage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_capacityprofile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_caseenrichment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_casesuggestionrequestpayload: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_casetopic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_casetopicsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_casetopicsummary: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_casetopic_incident: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_cdsentityengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_channel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_channelcapability: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_channelprovider: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_characteristicreqforteammember: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_chatansweroption: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_chatquestionnaireresponse: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_chatquestionnaireresponseitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_chatwidgetlanguage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ciprovider: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_clientextension: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_collabgraphresource: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_configuration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_consoleapplicationtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_consoleapplicationtype: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_consoleappparameterdefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_contactpricelist: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_contractlinedetailperformance: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_contractlineinvoiceschedule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_contractlinescheduleofvalue: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_contractperformance: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationaction: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationdata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationinsight: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationsuggestionrequestpayload: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationtopic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationtopicsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationtopicsummary: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_conversationtopic_conversation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_csadminconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_customengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_customerasset: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_customerassetattachment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_customerassetcategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticscustomizedreport: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_csrmanager: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_forecast: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_fs: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_ksinsights: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_oc: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_databaseversion: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataexport: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataflow: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dataflowrefreshhistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_datainsightsandanalyticsfeature: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dealmanageraccess: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dealmanagersettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_decisioncontract: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_decisionruleset: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_delegation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dimension: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_dimensionfieldname: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_entitlementapplication: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_entityconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_entityconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_entityrankingrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_entityroutingconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_estimate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_estimateline: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_expense: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_expensecategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_expensereceipt: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_extendedusersetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_facebookengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_fact: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_federatedarticle: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_fieldcomputation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_fieldservicesetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_fieldserviceslaconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_fieldservicesystemjob: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_findworkevent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_flowcardtype: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_forecastdefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_forecastinstance: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_functionallocation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_gdprdata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_geofence: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_geofenceevent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_geofencingsettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_geolocationsettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_geolocationtracking: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_helppage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iermlmodel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iermltraining: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inboxconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttype: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttyperecommendationresult: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttyperesolution: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttypeservice: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttypeservicetask: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttypessetup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_incidenttype_requirementgroup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_insightsstorevirtualentity: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inspection: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inspectionattachment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inspectiondefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inspectioninstance: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inspectionresponse: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_integrationjob: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_integrationjobdetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inventoryjournal: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_inventorytransfer: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_invoicefrequency: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_invoicefrequencydetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_invoicelinetransaction: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotalert: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotdevice: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotdevicecategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotdevicecommand: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotdevicecommanddefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotdevicedatahistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotdeviceproperty: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotfieldmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotpropertydefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotprovider: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotproviderinstance: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iotsettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_iottocaseprocess: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_journal: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_journalline: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_kalanguagesetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_kbattachment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_kbenrichment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_kbkeywordsdescsuggestionsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_kmfederatedsearchconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_kmpersonalizationsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_knowledgearticletemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_knowledgeinteractioninsight: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_knowledgemanagementsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_knowledgepersonalfilter: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_knowledgesearchfilter: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_knowledgesearchinsight: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_kpieventdata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_kpieventdefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_leadhygienesetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_lineengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_livechatconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_livechatengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_livechatwidgetlocation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_liveconversation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_liveworkitemevent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_liveworkstream: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_localizedsurveyquestion: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_macrosession: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_maskingrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_migrationtracker: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_mlresultcache: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_msteamssetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_msteamssettingsv2: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_notesanalysisconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_notificationfield: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_notificationtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocapplepay: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocbotchannelregistration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occarrier: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occhannelapimessageprivilege: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occhannelapimethodmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occhannelconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occhannelstateconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occommunicationprovidersetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_occustommessagingchannel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocfbapplication: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocfbpage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocflaggedspam: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_oclanguage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_oclinechannelconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocliveworkitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocliveworkitemparticipant: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocliveworkitemsentiment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_oclocalizationdata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocoutboundconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocpaymentprofile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocphonenumber: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocprovisioningstate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocrecording: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocrequest: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocrichobject: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocrichobjectmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocruleitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsentimentdailytopic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsession: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsessioncharacteristic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsessionparticipantevent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsessionsentiment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsimltraining: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsitdimportconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsitdskill: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsitrainingdata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocskillidentmlmodel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsmschannelsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocsystemmessage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_octag: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_octeamschannelconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_octwitterapplication: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_octwitterhandle: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_oc_geolocationprovider: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_omnichannelconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_omnichannelpersonalization: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_omnichannelqueue: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_omnichannelsyncconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_operatinghour: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_opportunitylineresourcecategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_opportunitylinetransaction: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_opportunitylinetransactioncategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_opportunitylinetransactionclassificatio: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_opportunitypricelist: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderlineresourcecategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderlinetransaction: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderlinetransactioncategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderlinetransactionclassification: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_orderpricelist: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_organizationalunit: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_overflowactionconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_paneconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_panetabconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_panetoolconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_payment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_paymentdetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_paymentmethod: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_paymentterm: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_personalmessage: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_personalsoundsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_personasecurityrolemapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_playbookactivity: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_playbookactivityattribute: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_playbookcategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_playbookinstance: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_playbooktemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_pmanalysishistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_pminferredtask: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_pmrecording: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_pmtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_postalbum: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_postalcode: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_postconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_postruleconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_predictivescore: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_predictworkhourdurationsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_presence: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_priority: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_problematicasset: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_processnotes: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productinventory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productivityactioninputparameter: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productivityactionoutputparameter: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productivityagentscript: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productivityagentscriptstep: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productivitymacroactiontemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productivitymacroconnector: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_productivityparameterdefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_project: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projectapproval: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projectparameter: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projectparameterpricelist: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projectpricelist: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projecttask: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projecttaskdependency: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projecttaskstatususer: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projectteam: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projectteammembersignup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_projecttransactioncategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_property: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_propertyassetassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_propertylog: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_propertytemplateassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_provider: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_purchaseorder: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_purchaseorderbill: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_purchaseorderproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_questionsequence: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotebookingincident: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotebookingproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotebookingservice: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotebookingsetup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quoteinvoicingproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quoteinvoicingsetup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotelineanalyticsbreakdown: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotelineinvoiceschedule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotelineresourcecategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotelinescheduleofvalue: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotelinetransaction: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotelinetransactioncategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotelinetransactionclassification: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_quotepricelist: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_recording: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_requirementcharacteristic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_requirementdependency: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_requirementgroup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_requirementorganizationunit: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_requirementrelationship: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_requirementresourcecategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_requirementresourcepreference: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_requirementstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resolution: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourceassignment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourceassignmentdetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourcecategorymarkuppricelevel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourcecategorypricelevel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourcepaytype: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourcerequest: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourcerequirement: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourcerequirementdetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_resourceterritory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_richtextfile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rma: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rmaproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rmareceipt: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rmasubstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rolecompetencyrequirement: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_roleutilization: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_routingconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_routingconfigurationstep: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_routingrequest: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_routingrulesetsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rtv: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rtvproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rtvsubstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_rulesetdependencymapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_salesassignmentsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_salesroutingrun: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_salessuggestion: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_salestag: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_scenario: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_schedulingparameter: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_searchconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_segment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_segmentcatalogue: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sentimentanalysis: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sequence: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sequencestat: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sequencetarget: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sequencetargetstep: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sequencetemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_serviceconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_servicetasktype: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sessiondata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sessionevent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sessionparticipant: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sessionparticipantdata: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sessiontemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_shipvia: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_siconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_sikeyvalueconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_skillattachmentruleitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_skillattachmenttarget: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_slakpi: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_smartassistconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_smsengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_smsnumber: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_solutionhealthrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_solutionhealthruleargument: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_solutionhealthruleset: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_soundfile: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_soundnotificationsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_suggestioninteraction: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_suggestionrequestpayload: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_suggestionsmodelsummary: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_suggestionssetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_surveyquestion: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_swarm: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_swarmparticipant: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_swarmparticipantrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_swarmrole: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_swarmskill: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_swarmtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_taxcode: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_taxcodedetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_teamschannelengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_teamschatassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_teamschatsuggestion: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_teamscollaboration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_teamsdialeradminsettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_teamsengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_templateforproperties: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_templateparameter: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_templatetags: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_timeentry: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_timeentrysetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_timegroup: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_timegroupdetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_timeoffcalendar: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_timeoffrequest: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_timespent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_tour: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_transactioncategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_transactioncategoryclassification: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_transactioncategoryhierarchyelement: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_transactioncategorypricelevel: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_transactionconnection: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_transactionorigin: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_transactiontype: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_transcript: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_twitterengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_unifiedroutingrun: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_uniquenumber: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_untrackedappointment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_upgraderun: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_upgradestep: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_upgradeversion: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_urnotificationtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_urnotificationtemplatemapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_usagemetric: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_usersetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_userworkhistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_visitorjourney: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_wallsavedquery: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_wallsavedqueryusersettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_warehouse: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_wechatengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_whatsappengagementctx: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workhourtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_worklistviewconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workorder: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workordercharacteristic: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workorderincident: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workorderproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workorderresolution: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workorderservice: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workorderservicetask: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workordersubstatus: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workordertype: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workqueuestate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyn_workqueueusersetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_actioncallworkflow: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_agentscriptaction: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_agentscripttaskcategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_answer: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_auditanddiagnosticssetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_configuration: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_customizationfiles: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_entityassignment: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_entitysearch: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_form: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_languagemodule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_scriptlet: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_scripttasktrigger: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_search: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_sessioninformation: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_sessiontransfer: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_task: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_toolbarbutton: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_toolbarstrip: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_tracesourcesetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_ucisettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_uiievent: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_usersettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_msdyusd_windowroute: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_alert: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_alertrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_emailtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_fileresponse: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_localizedemailtemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_project: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_question: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_questionresponse: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_satisfactionmetric: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_survey: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_surveyinvite: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_surveyreminder: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_surveyresponse: string;
			/** Unique identifier of the source record. */
			readonly objectid_msfp_unsubscribedrecipient: string;
			/** Unique identifier of the source record. */
			readonly objectid_notification: string;
			/** Unique identifier of the source record. */
			readonly objectid_opportunity: string;
			/** Unique identifier of the source record. */
			readonly objectid_opportunityclose: string;
			/** Unique identifier of the source record. */
			readonly objectid_opportunitycompetitors: string;
			/** Unique identifier of the source record. */
			readonly objectid_opportunityproduct: string;
			/** Unique identifier of the source record. */
			readonly objectid_opportunitysalesprocess: string;
			/** Unique identifier of the source record. */
			readonly objectid_orderclose: string;
			/** Unique identifier of the source record. */
			readonly objectid_organization: string;
			/** Unique identifier of the source record. */
			readonly objectid_organizationdatasyncstate: string;
			/** Unique identifier of the source record. */
			readonly objectid_organizationdatasyncsubscription: string;
			/** Unique identifier of the source record. */
			readonly objectid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the source record. */
			readonly objectid_organizationsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_organizationstatistic: string;
			/** Unique identifier of the source record. */
			readonly objectid_ownermapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_package: string;
			/** Unique identifier of the source record. */
			readonly objectid_pdfsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_phonecall: string;
			/** Unique identifier of the source record. */
			readonly objectid_phonetocaseprocess: string;
			/** Unique identifier of the source record. */
			readonly objectid_picklistmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_pluginassembly: string;
			/** Unique identifier of the source record. */
			readonly objectid_pluginpackage: string;
			/** Unique identifier of the source record. */
			readonly objectid_plugintype: string;
			/** Unique identifier of the source record. */
			readonly objectid_plugintypestatistic: string;
			/** Unique identifier of the source record. */
			readonly objectid_pricelevel: string;
			/** Unique identifier of the source record. */
			readonly objectid_principalattributeaccessmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_principalentitymap: string;
			/** Unique identifier of the source record. */
			readonly objectid_principalobjectaccess: string;
			/** Unique identifier of the source record. */
			readonly objectid_principalobjectattributeaccess: string;
			/** Unique identifier of the source record. */
			readonly objectid_privilege: string;
			/** Unique identifier of the source record. */
			readonly objectid_privilegesremovalsetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_processsession: string;
			/** Unique identifier of the source record. */
			readonly objectid_processstageparameter: string;
			/** Unique identifier of the source record. */
			readonly objectid_product: string;
			/** Unique identifier of the source record. */
			readonly objectid_productassociation: string;
			/** Unique identifier of the source record. */
			readonly objectid_productpricelevel: string;
			/** Unique identifier of the source record. */
			readonly objectid_productsalesliterature: string;
			/** Unique identifier of the source record. */
			readonly objectid_productsubstitute: string;
			/** Unique identifier of the source record. */
			readonly objectid_provisionlanguageforuser: string;
			/** Unique identifier of the source record. */
			readonly objectid_publisher: string;
			/** Unique identifier of the source record. */
			readonly objectid_publisheraddress: string;
			/** Unique identifier of the source record. */
			readonly objectid_queue: string;
			/** Unique identifier of the source record. */
			readonly objectid_queueitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_quote: string;
			/** Unique identifier of the source record. */
			readonly objectid_quoteclose: string;
			/** Unique identifier of the source record. */
			readonly objectid_quotedetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_ratingmodel: string;
			/** Unique identifier of the source record. */
			readonly objectid_ratingvalue: string;
			/** Unique identifier of the source record. */
			readonly objectid_recurringappointmentmaster: string;
			/** Unique identifier of the source record. */
			readonly objectid_relationshipattribute: string;
			/** Unique identifier of the source record. */
			readonly objectid_relationshiprole: string;
			/** Unique identifier of the source record. */
			readonly objectid_relationshiprolemap: string;
			/** Unique identifier of the source record. */
			readonly objectid_report: string;
			/** Unique identifier of the source record. */
			readonly objectid_reportcategory: string;
			/** Unique identifier of the source record. */
			readonly objectid_reportentity: string;
			/** Unique identifier of the source record. */
			readonly objectid_reportlink: string;
			/** Unique identifier of the source record. */
			readonly objectid_reportvisibility: string;
			/** Unique identifier of the source record. */
			readonly objectid_resource: string;
			/** Unique identifier of the source record. */
			readonly objectid_resourcegroup: string;
			/** Unique identifier of the source record. */
			readonly objectid_resourcegroupexpansion: string;
			/** Unique identifier of the source record. */
			readonly objectid_resourcespec: string;
			/** Unique identifier of the source record. */
			readonly objectid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the source record. */
			readonly objectid_ribboncommand: string;
			/** Unique identifier of the source record. */
			readonly objectid_ribboncontextgroup: string;
			/** Unique identifier of the source record. */
			readonly objectid_ribboncustomization: string;
			/** Unique identifier of the source record. */
			readonly objectid_ribbondiff: string;
			/** Unique identifier of the source record. */
			readonly objectid_ribbonrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_ribbontabtocommandmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_role: string;
			/** Unique identifier of the source record. */
			readonly objectid_roletemplate: string;
			/** Unique identifier of the source record. */
			readonly objectid_rollupfield: string;
			/** Unique identifier of the source record. */
			readonly objectid_routingrule: string;
			/** Unique identifier of the source record. */
			readonly objectid_routingruleitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_salesliterature: string;
			/** Unique identifier of the source record. */
			readonly objectid_salesliteratureitem: string;
			/** Unique identifier of the source record. */
			readonly objectid_salesorder: string;
			/** Unique identifier of the source record. */
			readonly objectid_salesorderdetail: string;
			/** Unique identifier of the source record. */
			readonly objectid_salesprocessinstance: string;
			/** Unique identifier of the source record. */
			readonly objectid_savedquery: string;
			/** Unique identifier of the source record. */
			readonly objectid_savedqueryvisualization: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessage: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessagefilter: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessagepair: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessageprocessingstep: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessageprocessingstepimage: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessageprocessingstepsecureconfig: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessagerequest: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessagerequestfield: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessageresponse: string;
			/** Unique identifier of the source record. */
			readonly objectid_sdkmessageresponsefield: string;
			/** Unique identifier of the source record. */
			readonly objectid_service: string;
			/** Unique identifier of the source record. */
			readonly objectid_serviceappointment: string;
			/** Unique identifier of the source record. */
			readonly objectid_servicecontractcontacts: string;
			/** Unique identifier of the source record. */
			readonly objectid_serviceendpoint: string;
			/** Unique identifier of the source record. */
			readonly objectid_serviceplan: string;
			/** Unique identifier of the source record. */
			readonly objectid_serviceplanmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_settingdefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_sharedlinksetting: string;
			/** Unique identifier of the source record. */
			readonly objectid_sharedobject: string;
			/** Unique identifier of the source record. */
			readonly objectid_sharedworkspace: string;
			/** Unique identifier of the source record. */
			readonly objectid_sharepointdocumentlocation: string;
			/** Unique identifier of the source record. */
			readonly objectid_sharepointsite: string;
			/** Unique identifier of the source record. */
			readonly objectid_site: string;
			/** Unique identifier of the source record. */
			readonly objectid_sitemap: string;
			/** Unique identifier of the source record. */
			readonly objectid_sla: string;
			/** Unique identifier of the source record. */
			readonly objectid_socialactivity: string;
			/** Unique identifier of the source record. */
			readonly objectid_solution: string;
			/** Unique identifier of the source record. */
			readonly objectid_solutioncomponent: string;
			/** Unique identifier of the source record. */
			readonly objectid_solutioncomponentattributeconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_solutioncomponentbatchconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_solutioncomponentconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_solutioncomponentrelationshipconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_stagesolutionupload: string;
			/** Unique identifier of the source record. */
			readonly objectid_statusmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_stringmap: string;
			/** Unique identifier of the source record. */
			readonly objectid_subject: string;
			/** Unique identifier of the source record. */
			readonly objectid_subscription: string;
			/** Unique identifier of the source record. */
			readonly objectid_subscriptionmanuallytrackedobject: string;
			/** Unique identifier of the source record. */
			readonly objectid_subscriptionsyncinfo: string;
			/** Unique identifier of the source record. */
			readonly objectid_synapsedatabase: string;
			/** Unique identifier of the source record. */
			readonly objectid_synapselinkexternaltablestate: string;
			/** Unique identifier of the source record. */
			readonly objectid_synapselinkprofile: string;
			/** Unique identifier of the source record. */
			readonly objectid_synapselinkprofileentity: string;
			/** Unique identifier of the source record. */
			readonly objectid_synapselinkprofileentitystate: string;
			/** Unique identifier of the source record. */
			readonly objectid_synapselinkschedule: string;
			/** Unique identifier of the source record. */
			readonly objectid_systemuser: string;
			/** Unique identifier of the source record. */
			readonly objectid_systemuserauthorizationchangetracker: string;
			/** Unique identifier of the source record. */
			readonly objectid_systemuserbusinessunitentitymap: string;
			/** Unique identifier of the source record. */
			readonly objectid_task: string;
			/** Unique identifier of the source record. */
			readonly objectid_team: string;
			/** Unique identifier of the source record. */
			readonly objectid_teammembership: string;
			/** Unique identifier of the source record. */
			readonly objectid_teammobileofflineprofilemembership: string;
			/** Unique identifier of the source record. */
			readonly objectid_template: string;
			/** Unique identifier of the source record. */
			readonly objectid_territory: string;
			/** Unique identifier of the source record. */
			readonly objectid_theme: string;
			/** Unique identifier of the source record. */
			readonly objectid_timezonedefinition: string;
			/** Unique identifier of the source record. */
			readonly objectid_timezonelocalizedname: string;
			/** Unique identifier of the source record. */
			readonly objectid_timezonerule: string;
			/** Unique identifier of the source record. */
			readonly objectid_topic: string;
			/** Unique identifier of the source record. */
			readonly objectid_topichistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_topicmodel: string;
			/** Unique identifier of the source record. */
			readonly objectid_topicmodelconfiguration: string;
			/** Unique identifier of the source record. */
			readonly objectid_topicmodelexecutionhistory: string;
			/** Unique identifier of the source record. */
			readonly objectid_transactioncurrency: string;
			/** Unique identifier of the source record. */
			readonly objectid_transformationmapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_transformationparametermapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_action: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_audit: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_context: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_hostedapplication: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_nonhostedapplication: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_option: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_savedsession: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_sessiontransfer: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_workflow: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_workflowstep: string;
			/** Unique identifier of the source record. */
			readonly objectid_uii_workflow_workflowstep_mapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_unresolvedaddress: string;
			/** Unique identifier of the source record. */
			readonly objectid_uom: string;
			/** Unique identifier of the source record. */
			readonly objectid_uomschedule: string;
			/** Unique identifier of the source record. */
			readonly objectid_userentityuisettings: string;
			/** Unique identifier of the source record. */
			readonly objectid_userfiscalcalendar: string;
			/** Unique identifier of the source record. */
			readonly objectid_userform: string;
			/** Unique identifier of the source record. */
			readonly objectid_usermapping: string;
			/** Unique identifier of the source record. */
			readonly objectid_usermobileofflineprofilemembership: string;
			/** Unique identifier of the source record. */
			readonly objectid_userquery: string;
			/** Unique identifier of the source record. */
			readonly objectid_userqueryvisualization: string;
			/** Unique identifier of the source record. */
			readonly objectid_virtualentitymetadata: string;
			/** Unique identifier of the source record. */
			readonly objectid_webresource: string;
			/** Unique identifier of the source record. */
			readonly objectid_webwizard: string;
			/** Unique identifier of the source record. */
			readonly objectid_wizardaccessprivilege: string;
			/** Unique identifier of the source record. */
			readonly objectid_wizardpage: string;
			/** Unique identifier of the source record. */
			readonly objectid_workflow: string;
			/** Unique identifier of the source record. */
			readonly objectid_workflowbinary: string;
			/** Unique identifier of the source record. */
			readonly objectid_workflowdependency: string;
			/** Unique identifier of the source record. */
			readonly objectid_workflowlog: string;
			/** Unique identifier of the source record. */
			readonly objectid_workflowwaitsubscription: string;
			/** Object Type Code */
			readonly ObjectTypeCode: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns this object. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns this object. */
			readonly OwningUser: string;
			/** Personal categories */
			readonly PersonalCategories: string;
			/** Indicates whether a reminder is set on this object. */
			readonly ReminderSet: string;
			/** Reminder time */
			readonly ReminderTime_UtcDateAndTime: string;
			/** Start Time */
			readonly StartTime_UtcDateAndTime: string;
			/** To Do item flags. */
			readonly ToDoItemFlags: string;
			/** For internal use only. */
			readonly ToDoOrdinalDate_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ToDoSubOrdinal: string;
			/** For internal use only. */
			readonly ToDoTitle: string;
			/** Unique identifier user entity */
			readonly UserEntityInstanceDataId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserEntityInstanceData {
		enum OwnerIdType {
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
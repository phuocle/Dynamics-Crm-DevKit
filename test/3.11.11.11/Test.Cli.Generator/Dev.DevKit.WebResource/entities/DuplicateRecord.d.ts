//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class DuplicateRecordApi {
		/**
		* DynamicsCrm.DevKit DuplicateRecordApi
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
		/** Unique identifier of the base record. */
		readonly baserecordid_account: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_activityfileattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_activitymonitor: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_adminsettingsentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_applicationuser: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_appointment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresource: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcebooking: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcebookingheader: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcecategoryassn: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcecharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookableresourcegroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_bookingstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_campaign: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_campaignresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_canvasappextendedmetadata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_catalogassignment: string;
		/** Unique identifier of the base record. */
		readonly channelaccessprofile_duplicatebaserecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_characteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_chat: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_competitor: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_connector: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_contact: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_contract: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_conversationtranscript: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_datalakefolder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_datalakefolderpermission: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_datalakeworkspace: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_datalakeworkspacepermission: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_dataprocessingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_email: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_emailserverprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entitlement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entitlementchannel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entitlemententityallocationtypemapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_entitlementtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_environmentvariabledefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_environmentvariablevalue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_equipment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_exportsolutionupload: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_fax: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_featurecontrolsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_feedback: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_flowmachinegroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_goal: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_goalrollupquery: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_incident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_kbarticle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_keyvaultreference: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_knowledgearticle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_knowledgebaserecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_lead: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_letter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_list: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_managedidentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_marketingformdisplayattributes: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_accountpricelist: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_actioncardregarding: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_actual: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agentstatushistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibdataset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibdatasetfile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibdatasetrecord: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibdatasetscontainer: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibfile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aibfileattacheddata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aiodimage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aiodlabel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aiodtrainingboundingbox: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_aiodtrainingimage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysiscomponent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysisjob: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysisresult: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analysisresultdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_analytics: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_appconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_applicationextension: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_approval: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_approvalset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_assignmentconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_assignmentconfigurationstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_attribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_attributevalue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_authsettingsentry: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_autocapturerule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_autocapturesettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_batchjob: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookableresourceassociation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookingalert: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookingrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_callablecontext: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_cannedmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_capacityprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelcapability: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_channelprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_characteristicreqforteammember: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_chatwidgetlanguage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ciprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_clientextension: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_consoleapplicationtype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_contactpricelist: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_contractlinedetailperformance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_contractlineinvoiceschedule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_contractlinescheduleofvalue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_conversationsuggestionrequestpayload: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_csadminconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerasset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerassetattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_customerassetcategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsreport_fs: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataexport: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataflow: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dataflowrefreshhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dealmanageraccess: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dealmanagersettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_decisioncontract: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_decisionruleset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_delegation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dimension: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_dimensionfieldname: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entitlementapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entityconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_estimate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_estimateline: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_expense: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_expensecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_fact: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_federatedarticle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_fieldcomputation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_findworkevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_flowcardtype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastdefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastinstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geofence: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geofenceevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geofencingsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geolocationsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_geolocationtracking: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iermlmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iermltraining: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inboxconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttyperecommendationresult: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttyperesolution: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypeservicetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_incidenttype_requirementgroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspection: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspectionattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspectiondefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspectioninstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inspectionresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inventoryjournal: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_inventorytransfer: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_invoicefrequency: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_invoicefrequencydetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_invoicelinetransaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicecommanddefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicedatahistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdeviceproperty: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotfieldmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotpropertydefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotproviderinstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_iotsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_journal: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_journalline: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kalanguagesetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kbattachment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kmfederatedsearchconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgeinteractioninsight: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgemanagementsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgepersonalfilter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgesearchfilter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_knowledgesearchinsight: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kpieventdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_kpieventdefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_leadhygienesetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_liveworkitemevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_localizedsurveyquestion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_macrosession: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_maskingrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_migrationtracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_notificationfield: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_notificationtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocapplepay: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocbotchannelregistration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occarrier: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelapimessageprivilege: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelapimethodmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occhannelstateconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occommunicationprovidersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_occustommessagingchannel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocfbapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocfbpage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_oclanguage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_oclinechannelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkitemparticipant: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_oclocalizationdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocoutboundconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocpaymentprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocphonenumber: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocprovisioningstate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocrecording: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocrichobject: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocrichobjectmap: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsentimentdailytopic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsession: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsessioncharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsessionparticipantevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsimltraining: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsitdimportconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsitdskill: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsitrainingdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocskillidentmlmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsmschannelsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocsystemmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_octeamschannelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_octwitterapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_octwitterhandle: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_oc_geolocationprovider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_omnichannelconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_omnichannelsyncconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_opportunitylineresourcecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_opportunitylinetransaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_opportunitylinetransactioncategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_opportunitylinetransactionclassificatio: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_opportunitypricelist: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderlineresourcecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderlinetransaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderlinetransactioncategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderlinetransactionclassification: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_orderpricelist: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_organizationalunit: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_paneconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_panetabconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_panetoolconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_payment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_paymentdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_paymentmethod: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_paymentterm: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_personalmessage: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_personasecurityrolemapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbookactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbookactivityattribute: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbookcategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbookinstance: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_playbooktemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmanalysishistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pminferredtask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmrecording: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_pmtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_postalbum: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_postalcode: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_predictivescore: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_presence: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_priority: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_problematicasset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_processnotes: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productinventory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityactioninputparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityactionoutputparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityagentscript: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityagentscriptstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivitymacroactiontemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivitymacroconnector: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_productivityparameterdefinition: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_project: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projectapproval: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projectparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projectparameterpricelist: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projectpricelist: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projecttask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projecttaskdependency: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projecttaskstatususer: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projectteam: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projectteammembersignup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_projecttransactioncategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_provider: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseorder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingincident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingservice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotebookingsetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quoteinvoicingproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quoteinvoicingsetup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotelineanalyticsbreakdown: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotelineinvoiceschedule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotelineresourcecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotelinescheduleofvalue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotelinetransaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotelinetransactioncategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotelinetransactionclassification: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_quotepricelist: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_recording: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementdependency: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementgroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementorganizationunit: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementrelationship: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_requirementstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resolution: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourceassignmentdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourcecategorymarkuppricelevel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourcecategorypricelevel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourcerequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourcerequirement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_resourceterritory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rma: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rmareceipt: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rmasubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rolecompetencyrequirement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_roleutilization: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_routingconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_routingconfigurationstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_routingrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_routingrulesetsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rtv: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rtvproduct: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_rulesetdependencymapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salesroutingrun: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salessuggestion: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_salestag: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_scenario: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_segment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sentimentanalysis: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sequence: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sequencetarget: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_serviceconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_servicetasktype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessiondata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessionevent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessionparticipant: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessionparticipantdata: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_sessiontemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_shipvia: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_siconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_skillattachmentruleitem: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_skillattachmenttarget: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_slakpi: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_smartassistconfig: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_smsnumber: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_solutionhealthrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_solutionhealthruleargument: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_solutionhealthruleset: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_soundfile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarm: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmparticipant: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmparticipantrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmrole: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmskill: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_swarmtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_taxcode: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_taxcodedetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_teamschannelengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_teamsdialeradminsettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_teamsengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_templateparameter: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_templatetags: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timeentrysetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timegroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timegroupdetail: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timeoffcalendar: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timeoffrequest: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_timespent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_transactioncategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_transactioncategoryclassification: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_transactioncategoryhierarchyelement: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_transactioncategorypricelevel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_transactionconnection: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_transactionorigin: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_transactiontype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_twitterengagementctx: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_unifiedroutingrun: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_untrackedappointment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_urnotificationtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_urnotificationtemplatemapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_userworkhistory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_warehouse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workhourtemplate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_worklistviewconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderincident: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderresolution: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderservice: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workorderservicetask: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workordersubstatus: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workordertype: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workqueuestate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyn_workqueueusersetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_agentscriptaction: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_agentscripttaskcategory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_configuration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_customizationfiles: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_entityassignment: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_entitysearch: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_form: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_languagemodule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_scriptlet: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_search: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_sessioninformation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_toolbarbutton: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_toolbarstrip: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_tracesourcesetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_ucisettings: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msdyusd_uiievent: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msfp_alert: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msfp_alertrule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msfp_fileresponse: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_msfp_surveyreminder: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_opportunity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_organizationdatasyncstate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_organizationdatasyncsubscription: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_package: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_phonecall: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_privilegesremovalsetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_publisher: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_queue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_quote: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_ratingmodel: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_ratingvalue: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_recurringappointmentmaster: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_resourcegroup: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_service: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_serviceplan: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_serviceplanmapping: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_sharedlinksetting: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_sharepointdocumentlocation: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_sharepointsite: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_socialactivity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_socialprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_solutioncomponentattributeconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_solutioncomponentbatchconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_solutioncomponentconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_solutioncomponentrelationshipconfiguration: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_stagesolutionupload: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapsedatabase: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkexternaltablestate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkprofile: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkprofileentity: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkprofileentitystate: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_synapselinkschedule: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_systemuser: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_task: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_team: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_territory: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_transactioncurrency: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_action: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_context: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_hostedapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_nonhostedapplication: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_option: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_savedsession: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_sessiontransfer: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_workflow: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_workflowstep: string;
		/** Unique identifier of the base record. */
		readonly baserecordid_uii_workflow_workflowstep_mapping: string;
		/** Date and time when the duplicate record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the duplicate record. */
		DuplicateId: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_account: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_activityfileattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_activitymonitor: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_adminsettingsentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_applicationuser: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_appointment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresource: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcebooking: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcebookingheader: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcecategoryassn: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcecharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookableresourcegroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_bookingstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_campaign: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_campaignresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_canvasappextendedmetadata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_cascadegrantrevokeaccessrecordstracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_cascadegrantrevokeaccessversiontracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_catalogassignment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly channelaccessprofile_duplicatematchingrecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_characteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_chat: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_competitor: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_connector: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_contact: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_contract: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_conversationtranscript: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_datalakefolder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_datalakefolderpermission: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_datalakeworkspace: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_datalakeworkspacepermission: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_dataprocessingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_email: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_emailserverprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entitlement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entitlementchannel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entitlemententityallocationtypemapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_entitlementtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_environmentvariabledefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_environmentvariablevalue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_equipment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_exportsolutionupload: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_fax: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_featurecontrolsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_feedback: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_flowmachinegroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_goal: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_goalrollupquery: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_incident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_kbarticle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_keyvaultreference: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_knowledgearticle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_knowledgebaserecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_lead: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_letter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_list: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_managedidentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_marketingformdisplayattributes: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_accountpricelist: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_actioncardregarding: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_actual: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agentstatushistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibdataset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibdatasetfile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibdatasetrecord: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibdatasetscontainer: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibfeedbackloop: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibfile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aibfileattacheddata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aiodimage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aiodlabel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aiodtrainingboundingbox: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_aiodtrainingimage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysiscomponent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysisjob: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysisresult: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analysisresultdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_analytics: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_appconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_applicationextension: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_applicationtabtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_approval: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_approvalset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_assignmentconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_assignmentconfigurationstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_attribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_attributevalue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_authsettingsentry: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_autocapturerule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_autocapturesettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_batchjob: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookableresourceassociation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookableresourcebookingquicknote: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookableresourcecapacityprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookingalert: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookingrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_callablecontext: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_cannedmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_capacityprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelcapability: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_channelprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_characteristicreqforteammember: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_chatwidgetlanguage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ciprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_clientextension: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationnotificationfield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationsessiontemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationtemplateparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_consoleapplicationtype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_contactpricelist: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_contactsuggestionrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_contactsuggestionruleset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_contractlinedetailperformance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_contractlineinvoiceschedule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_contractlinescheduleofvalue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationactionlocale: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_conversationsuggestionrequestpayload: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_csadminconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerasset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerassetattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_customerassetcategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsreport_fs: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataexport: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataflow: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dataflowrefreshhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dealmanageraccess: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dealmanagersettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_decisioncontract: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_decisionruleset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_delegation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dimension: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_dimensionfieldname: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_duplicatedetectionpluginrun: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_duplicateleadmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_effortpredictionresult: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entitlementapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entityconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entitylinkchatconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_entityrefreshhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_estimate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_estimateline: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_expense: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_expensecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_fact: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_federatedarticle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_federatedarticleincident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_fieldcomputation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_fieldservicepricelistitem: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_findworkevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_flowcardtype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastdefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastinstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastrecurrence: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_forecastsettingsandsummary: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geofence: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geofenceevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geofencingsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geolocationsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_geolocationtracking: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_icebreakersconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iermlmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iermltraining: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inboxconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttyperecommendationresult: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttyperesolution: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypeservicetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_incidenttype_requirementgroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspection: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspectionattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspectiondefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspectioninstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inspectionresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inventoryjournal: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_inventorytransfer: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_invoicefrequency: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_invoicefrequencydetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_invoicelinetransaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicecommanddefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicedatahistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdeviceproperty: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotfieldmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotpropertydefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotproviderinstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_iotsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_journal: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_journalline: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kalanguagesetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kbattachment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kmfederatedsearchconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgearticleimage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgearticletemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgeinteractioninsight: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgemanagementsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgepersonalfilter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgesearchfilter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_knowledgesearchinsight: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kpieventdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_kpieventdefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_leadhygienesetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_leadmodelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_liveworkitemevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_liveworkstreamcapacityprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_localizedsurveyquestion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_macrosession: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_maskingrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_masterentityroutingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_migrationtracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_modelpreviewstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_notificationfield: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_notificationtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocapplebusinessaccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocapplepay: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocautoblockrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocbotchannelregistration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occarrier: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelapiconversationprivilege: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelapimessageprivilege: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelapimethodmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occhannelstateconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occommunicationprovidersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occommunicationprovidersettingentry: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_occustommessagingchannel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocfbapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocfbpage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_oclanguage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_oclinechannelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkitemcharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkitemcontextitem: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkitemparticipant: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_oclocalizationdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocoutboundconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocpaymentprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocphonenumber: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocprovisioningstate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocrecording: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocrichobject: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocrichobjectmap: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsentimentdailytopic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsentimentdailytopickeyword: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsentimentdailytopictrending: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsession: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsessioncharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsessionparticipantevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsimltraining: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsitdimportconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsitdskill: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsitrainingdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocskillidentmlmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsmschannelsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocsystemmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_octeamschannelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_octwitterapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_octwitterhandle: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocwechatchannelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocwhatsappchannelaccount: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_ocwhatsappchannelnumber: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_oc_geolocationprovider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_omnichannelconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_omnichannelsyncconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_opportunitylineresourcecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_opportunitylinetransaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_opportunitylinetransactioncategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_opportunitylinetransactionclassificatio: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_opportunitymodelconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_opportunitypricelist: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderinvoicingdate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderinvoicingproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderinvoicingsetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderinvoicingsetupdate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderlineresourcecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderlinetransaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderlinetransactioncategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderlinetransactionclassification: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_orderpricelist: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_organizationalunit: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_paneconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_panetabconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_panetoolconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_payment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_paymentdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_paymentmethod: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_paymentterm: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_personalmessage: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_personasecurityrolemapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbookactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbookactivityattribute: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbookcategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbookinstance: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_playbooktemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmanalysishistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pminferredtask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmrecording: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_pmtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_postalbum: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_postalcode: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_predictivemodelscore: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_predictivescore: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_presence: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_priority: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_problematicasset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_problematicassetfeedback: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_processnotes: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productinventory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityactioninputparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityactionoutputparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityagentscript: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityagentscriptstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivitymacroactiontemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivitymacroconnector: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_productivityparameterdefinition: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_project: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projectapproval: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projectparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projectparameterpricelist: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projectpricelist: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projecttask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projecttaskdependency: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projecttaskstatususer: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projectteam: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projectteammembersignup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_projecttransactioncategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_provider: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseorder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingincident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingservice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotebookingsetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quoteinvoicingproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quoteinvoicingsetup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotelineanalyticsbreakdown: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotelineinvoiceschedule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotelineresourcecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotelinescheduleofvalue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotelinetransaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotelinetransactioncategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotelinetransactionclassification: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_quotepricelist: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_recording: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementdependency: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementgroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementorganizationunit: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementrelationship: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_requirementstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resolution: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourceassignmentdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourcecategorymarkuppricelevel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourcecategorypricelevel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourcerequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourcerequirement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_resourceterritory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rma: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rmareceipt: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rmasubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rolecompetencyrequirement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_roleutilization: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_routingconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_routingconfigurationstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_routingrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_routingrulesetsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rtv: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rtvproduct: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_rulesetdependencymapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesaccelerationsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesinsightssettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salesroutingrun: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salessuggestion: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_salestag: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_scenario: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_scheduleboardsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_schedulingfeatureflag: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_segment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sentimentanalysis: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sequence: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sequencetarget: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_serviceconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_servicetasktype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessiondata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessionevent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessionparticipant: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessionparticipantdata: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_sessiontemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_shipvia: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_siconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_skillattachmentruleitem: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_skillattachmenttarget: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_slakpi: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_smartassistconfig: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_smsnumber: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_solutionhealthrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_solutionhealthruleargument: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_solutionhealthruleset: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_soundfile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarm: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmparticipant: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmparticipantrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmrole: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmskill: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_swarmtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_taxcode: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_taxcodedetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_teamschannelengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_teamsdialeradminsettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_teamsengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_templateparameter: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_templatetags: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timeentrysetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timegroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timegroupdetail: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timeoffcalendar: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timeoffrequest: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_timespent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_transactioncategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_transactioncategoryclassification: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_transactioncategoryhierarchyelement: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_transactioncategorypricelevel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_transactionconnection: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_transactionorigin: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_transactiontype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_twitterengagementctx: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_unifiedroutingdiagnostic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_unifiedroutingrun: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_unifiedroutingsetuptracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_untrackedappointment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_urnotificationtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_urnotificationtemplatemapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_userworkhistory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_warehouse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workhourtemplate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_worklistviewconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderdetailsgenerationqueue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderincident: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderresolution: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderservice: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workorderservicetask: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workordersubstatus: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workordertype: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workqueuestate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyn_workqueueusersetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_agentscriptaction: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_agentscripttaskcategory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_configuration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_customizationfiles: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_entityassignment: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_entitysearch: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_form: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_languagemodule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_scriptlet: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_search: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_sessioninformation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_toolbarbutton: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_toolbarstrip: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_tracesourcesetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_ucisettings: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msdyusd_uiievent: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msfp_alert: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msfp_alertrule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msfp_fileresponse: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_msfp_surveyreminder: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_opportunity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_organizationdatasyncstate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_organizationdatasyncsubscription: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_organizationdatasyncsubscriptionentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_package: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_phonecall: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_privilegesremovalsetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_publisher: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_queue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_quote: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_ratingmodel: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_ratingvalue: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_recurringappointmentmaster: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_resourcegroup: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_revokeinheritedaccessrecordstracker: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_service: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_serviceplan: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_serviceplanmapping: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_sharedlinksetting: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_sharepointdocumentlocation: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_sharepointsite: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_socialactivity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_socialprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_solutioncomponentattributeconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_solutioncomponentbatchconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_solutioncomponentconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_solutioncomponentrelationshipconfiguration: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_stagesolutionupload: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapsedatabase: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkexternaltablestate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkprofile: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkprofileentity: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkprofileentitystate: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_synapselinkschedule: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_systemuser: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_task: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_team: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_territory: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_transactioncurrency: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_action: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_context: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_hostedapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_nonhostedapplication: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_option: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_savedsession: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_sessiontransfer: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_workflow: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_workflowstep: string;
		/** Unique identifier of the potential duplicate record. */
		readonly duplicaterecordid_uii_workflow_workflowstep_mapping: string;
		/** Unique identifier of the duplicate rule against which this duplicate was found. */
		readonly DuplicateRuleId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the duplicate record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the duplicate record. */
		readonly OwningUser: string;
		readonly FormattedValue: {
			/** Unique identifier of the system job that created this record. */
			readonly AsyncOperationId: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_account: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_activityfileattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_activitymonitor: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_adminsettingsentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_applicationuser: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_appointment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresource: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcebooking: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcebookingheader: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcecategoryassn: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcecharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookableresourcegroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_bookingstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_campaign: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_campaignresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_canvasappextendedmetadata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_catalogassignment: string;
			/** Unique identifier of the base record. */
			readonly channelaccessprofile_duplicatebaserecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_characteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_chat: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_competitor: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_connector: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_contact: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_contract: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_conversationtranscript: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_datalakefolder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_datalakefolderpermission: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_datalakeworkspace: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_datalakeworkspacepermission: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_dataprocessingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_email: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_emailserverprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entitlement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entitlementchannel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entitlemententityallocationtypemapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_entitlementtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_environmentvariabledefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_environmentvariablevalue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_equipment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_exportsolutionupload: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_fax: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_featurecontrolsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_feedback: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_flowmachinegroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_goal: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_goalrollupquery: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_incident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_kbarticle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_keyvaultreference: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_knowledgearticle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_knowledgebaserecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_lead: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_letter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_list: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_managedidentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_marketingformdisplayattributes: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_accountpricelist: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_actioncardregarding: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_actual: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agentstatushistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingdate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingincident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingservice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_agreementsubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibdataset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibdatasetfile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibdatasetrecord: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibdatasetscontainer: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibfile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aibfileattacheddata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aiodimage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aiodlabel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aiodtrainingboundingbox: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_aiodtrainingimage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysiscomponent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysisjob: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysisresult: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analysisresultdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_analytics: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_appconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_applicationextension: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_approval: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_approvalset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_assignmentconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_assignmentconfigurationstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_attribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_attributevalue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_authsettingsentry: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_autocapturerule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_autocapturesettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_batchjob: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookableresourceassociation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookingalert: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookingalertstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookingrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_bookingtimestamp: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_callablecontext: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_cannedmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_capacityprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelcapability: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_channelprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_characteristicreqforteammember: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_chatwidgetlanguage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ciprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_clientextension: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_consoleapplicationtype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_contactpricelist: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_contractlinedetailperformance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_contractlineinvoiceschedule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_contractlinescheduleofvalue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_conversationsuggestionrequestpayload: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_csadminconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerasset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerassetattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_customerassetcategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsreport_fs: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataexport: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataflow: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dataflowrefreshhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dealmanageraccess: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dealmanagersettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_decisioncontract: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_decisionruleset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_delegation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dimension: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_dimensionfieldname: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entitlementapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entityconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_estimate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_estimateline: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_expense: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_expensecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_fact: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_federatedarticle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_fieldcomputation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_findworkevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_flowcardtype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastdefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastinstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geofence: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geofenceevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geofencingsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geolocationsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_geolocationtracking: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iermlmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iermltraining: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inboxconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttyperecommendationresult: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttyperesolution: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypeservice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypeservicetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttypessetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_incidenttype_requirementgroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspection: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspectionattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspectiondefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspectioninstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inspectionresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inventoryjournal: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_inventorytransfer: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_invoicefrequency: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_invoicefrequencydetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_invoicelinetransaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicecommand: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicecommanddefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicedatahistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdeviceproperty: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotfieldmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotpropertydefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotproviderinstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_iotsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_journal: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_journalline: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kalanguagesetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kbattachment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kmfederatedsearchconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgearticletemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgeinteractioninsight: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgemanagementsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgepersonalfilter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgesearchfilter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_knowledgesearchinsight: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kpieventdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_kpieventdefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_leadhygienesetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_liveworkitemevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_localizedsurveyquestion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_macrosession: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_maskingrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_migrationtracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_notificationfield: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_notificationtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocapplepay: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocbotchannelregistration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occarrier: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelapimessageprivilege: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelapimethodmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occhannelstateconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occommunicationprovidersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_occustommessagingchannel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocfbapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocfbpage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocflaggedspam: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_oclanguage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_oclinechannelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkitemparticipant: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_oclocalizationdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocoutboundconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocpaymentprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocphonenumber: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocprovisioningstate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocrecording: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocrichobject: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocrichobjectmap: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsentimentdailytopic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsession: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsessioncharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsessionparticipantevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsimltraining: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsitdimportconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsitdskill: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsitrainingdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocskillidentmlmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsmschannelsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocsystemmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_octeamschannelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_octwitterapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_octwitterhandle: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_oc_geolocationprovider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_omnichannelconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_omnichannelsyncconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_opportunitylineresourcecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_opportunitylinetransaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_opportunitylinetransactioncategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_opportunitylinetransactionclassificatio: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_opportunitypricelist: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderlineresourcecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderlinetransaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderlinetransactioncategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderlinetransactionclassification: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_orderpricelist: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_organizationalunit: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_overflowactionconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_paneconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_panetabconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_panetoolconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_payment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_paymentdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_paymentmethod: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_paymentterm: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_personalmessage: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_personalsoundsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_personasecurityrolemapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbookactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbookactivityattribute: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbookcategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbookinstance: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_playbooktemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmanalysishistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pminferredtask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmrecording: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_pmtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_postalbum: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_postalcode: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_predictivescore: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_presence: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_priority: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_problematicasset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_processnotes: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productinventory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityactioninputparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityactionoutputparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityagentscript: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityagentscriptstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivitymacroactiontemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivitymacroconnector: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_productivityparameterdefinition: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_project: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projectapproval: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projectparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projectparameterpricelist: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projectpricelist: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projecttask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projecttaskdependency: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projecttaskstatususer: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projectteam: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projectteammembersignup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_projecttransactioncategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_provider: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseorder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseorderbill: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingincident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingservice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotebookingsetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quoteinvoicingproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quoteinvoicingsetup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotelineanalyticsbreakdown: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotelineinvoiceschedule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotelineresourcecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotelinescheduleofvalue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotelinetransaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotelinetransactioncategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotelinetransactionclassification: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_quotepricelist: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_recording: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementcharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementdependency: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementgroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementorganizationunit: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementrelationship: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementresourcecategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementresourcepreference: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_requirementstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resolution: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourceassignmentdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourcecategorymarkuppricelevel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourcecategorypricelevel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourcerequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourcerequirement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourcerequirementdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_resourceterritory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rma: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rmareceipt: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rmasubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rolecompetencyrequirement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_roleutilization: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_routingconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_routingconfigurationstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_routingrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_routingrulesetsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rtv: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rtvproduct: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rtvsubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_rulesetdependencymapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salesroutingrun: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salessuggestion: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_salestag: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_scenario: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_segment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sentimentanalysis: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sequence: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sequencetarget: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_serviceconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_servicetasktype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessiondata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessionevent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessionparticipant: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessionparticipantdata: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_sessiontemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_shipvia: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_siconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_skillattachmentruleitem: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_skillattachmenttarget: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_slakpi: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_smartassistconfig: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_smsnumber: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_solutionhealthrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_solutionhealthruleargument: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_solutionhealthruleset: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_soundfile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_soundnotificationsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarm: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmparticipant: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmparticipantrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmrole: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmskill: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_swarmtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_taxcode: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_taxcodedetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_teamschannelengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_teamsdialeradminsettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_teamsengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_templateparameter: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_templatetags: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timeentrysetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timegroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timegroupdetail: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timeoffcalendar: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timeoffrequest: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_timespent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_transactioncategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_transactioncategoryclassification: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_transactioncategoryhierarchyelement: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_transactioncategorypricelevel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_transactionconnection: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_transactionorigin: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_transactiontype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_twitterengagementctx: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_unifiedroutingrun: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_untrackedappointment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_urnotificationtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_urnotificationtemplatemapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_userworkhistory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_warehouse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workhourtemplate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_worklistviewconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workordercharacteristic: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderincident: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderresolution: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderservice: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workorderservicetask: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workordersubstatus: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workordertype: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workqueuestate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyn_workqueueusersetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_agentscriptaction: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_agentscripttaskcategory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_configuration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_customizationfiles: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_entityassignment: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_entitysearch: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_form: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_languagemodule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_scriptlet: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_search: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_sessioninformation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_toolbarbutton: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_toolbarstrip: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_tracesourcesetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_ucisettings: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msdyusd_uiievent: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msfp_alert: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msfp_alertrule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msfp_fileresponse: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_msfp_surveyreminder: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_opportunity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_organizationdatasyncstate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_organizationdatasyncsubscription: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_package: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_phonecall: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_privilegesremovalsetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_publisher: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_queue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_quote: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_ratingmodel: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_ratingvalue: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_recurringappointmentmaster: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_resourcegroup: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_service: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_serviceplan: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_serviceplanmapping: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_sharedlinksetting: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_sharepointdocumentlocation: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_sharepointsite: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_socialactivity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_socialprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_solutioncomponentattributeconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_solutioncomponentbatchconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_solutioncomponentconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_solutioncomponentrelationshipconfiguration: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_stagesolutionupload: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapsedatabase: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkexternaltablestate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkprofile: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkprofileentity: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkprofileentitystate: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_synapselinkschedule: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_systemuser: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_task: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_team: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_territory: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_transactioncurrency: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_action: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_context: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_hostedapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_nonhostedapplication: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_option: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_savedsession: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_sessiontransfer: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_workflow: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_workflowstep: string;
			/** Unique identifier of the base record. */
			readonly baserecordid_uii_workflow_workflowstep_mapping: string;
			/** Date and time when the duplicate record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the duplicate record. */
			readonly DuplicateId: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_account: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_activityfileattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_activitymonitor: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_adminsettingsentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_applicationuser: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_appointment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresource: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcebooking: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcebookingheader: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcecategoryassn: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcecharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookableresourcegroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_bookingstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_campaign: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_campaignresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_canvasappextendedmetadata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_cascadegrantrevokeaccessrecordstracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_cascadegrantrevokeaccessversiontracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_catalogassignment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly channelaccessprofile_duplicatematchingrecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_characteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_chat: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_competitor: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_connector: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_contact: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_contract: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_conversationtranscript: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_datalakefolder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_datalakefolderpermission: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_datalakeworkspace: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_datalakeworkspacepermission: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_dataprocessingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_email: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_emailserverprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entitlement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entitlementchannel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entitlemententityallocationtypemapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_entitlementtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_environmentvariabledefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_environmentvariablevalue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_equipment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_exportsolutionupload: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_fax: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_featurecontrolsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_feedback: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_flowmachinegroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_goal: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_goalrollupquery: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_incident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_kbarticle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_keyvaultreference: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_knowledgearticle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_knowledgebaserecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_lead: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_letter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_list: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_managedidentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_marketingformdisplayattributes: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_accountpricelist: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_actioncardregarding: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_actual: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agentstatushistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingdate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingincident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingservice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_agreementsubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibdataset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibdatasetfile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibdatasetrecord: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibdatasetscontainer: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibfeedbackloop: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibfile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aibfileattacheddata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aiodimage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aiodlabel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aiodtrainingboundingbox: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_aiodtrainingimage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysiscomponent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysisjob: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysisresult: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analysisresultdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_analytics: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_appconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_applicationextension: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_applicationtabtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_approval: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_approvalset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_assignmentconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_assignmentconfigurationstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_attribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_attributevalue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_authsettingsentry: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_autocapturerule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_autocapturesettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_batchjob: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookableresourceassociation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookableresourcebookingquicknote: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookableresourcecapacityprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookingalert: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookingalertstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookingrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_bookingtimestamp: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_callablecontext: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_cannedmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_capacityprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelcapability: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_channelprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_characteristicreqforteammember: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_chatwidgetlanguage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ciprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_clientextension: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationnotificationfield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationnotificationtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationsessiontemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationtemplateparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_consoleapplicationtype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_contactpricelist: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_contactsuggestionrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_contactsuggestionruleset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_contractlinedetailperformance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_contractlineinvoiceschedule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_contractlinescheduleofvalue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationactionlocale: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_conversationsuggestionrequestpayload: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_csadminconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerasset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerassetattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_customerassetcategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsreport_fs: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsreport_fspredictrs: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataanalyticsreport_fspredictwhd: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataexport: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataflow: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dataflowrefreshhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dealmanageraccess: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dealmanagersettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_decisioncontract: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_decisionruleset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_delegation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dimension: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_dimensionfieldname: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_duplicatedetectionpluginrun: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_duplicateleadmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_effortpredictionresult: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entitlementapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entityconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entitylinkchatconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_entityrefreshhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_estimate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_estimateline: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_expense: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_expensecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_fact: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_federatedarticle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_federatedarticleincident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_fieldcomputation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_fieldservicepricelistitem: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_findworkevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_flowcardtype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastdefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastinstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastrecurrence: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_forecastsettingsandsummary: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geofence: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geofenceevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geofencingsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geolocationsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_geolocationtracking: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_icebreakersconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iermlmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iermltraining: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inboxconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttyperecommendationresult: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttyperecommendationrunhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttyperesolution: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypeservice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypeservicetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttypessetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_incidenttype_requirementgroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspection: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspectionattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspectiondefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspectioninstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inspectionresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inventoryadjustment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inventoryjournal: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_inventorytransfer: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_invoicefrequency: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_invoicefrequencydetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_invoicelinetransaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicecommand: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicecommanddefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicedatahistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdeviceproperty: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotdevicevisualizationconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotfieldmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotpropertydefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotproviderinstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_iotsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_journal: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_journalline: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kalanguagesetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kbattachment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kmfederatedsearchconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgearticleimage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgearticletemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgeinteractioninsight: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgemanagementsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgepersonalfilter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgesearchfilter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_knowledgesearchinsight: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kpieventdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_kpieventdefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_leadhygienesetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_leadmodelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_liveworkitemevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_liveworkstreamcapacityprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_localizedsurveyquestion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_macrosession: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_maskingrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_masterentityroutingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_migrationtracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_modelpreviewstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_notificationfield: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_notificationtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocapplebusinessaccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocapplepay: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocautoblockrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocbotchannelregistration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occarrier: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelapiconversationprivilege: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelapimessageprivilege: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelapimethodmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occhannelstateconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occommunicationprovidersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occommunicationprovidersettingentry: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_occustommessagingchannel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocfbapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocfbpage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocflaggedspam: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_oclanguage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_oclinechannelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkitemcapacityprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkitemcharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkitemcontextitem: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkitemparticipant: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocliveworkstreamcontextvariable: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_oclocalizationdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocoutboundconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocpaymentprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocphonenumber: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocprovisioningstate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocrecording: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocrichobject: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocrichobjectmap: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsentimentdailytopic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsentimentdailytopickeyword: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsentimentdailytopictrending: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsession: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsessioncharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsessionparticipantevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsimltraining: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsitdimportconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsitdskill: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsitrainingdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocskillidentmlmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsmschannelsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocsystemmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_octeamschannelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_octwitterapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_octwitterhandle: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocwechatchannelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocwhatsappchannelaccount: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_ocwhatsappchannelnumber: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_oc_geolocationprovider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_omnichannelconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_omnichannelsyncconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_opportunitylineresourcecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_opportunitylinetransaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_opportunitylinetransactioncategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_opportunitylinetransactionclassificatio: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_opportunitymodelconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_opportunitypricelist: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderinvoicingdate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderinvoicingproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderinvoicingsetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderinvoicingsetupdate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderlineresourcecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderlinetransaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderlinetransactioncategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderlinetransactionclassification: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_orderpricelist: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_organizationalunit: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_overflowactionconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_paneconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_panetabconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_panetoolconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_payment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_paymentdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_paymentmethod: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_paymentterm: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_personalmessage: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_personalsoundsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_personasecurityrolemapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbookactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbookactivityattribute: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbookcategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbookinstance: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_playbooktemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmanalysishistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pminferredtask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmrecording: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_pmtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_postalbum: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_postalcode: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_predictivemodelscore: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_predictivescore: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_presence: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_priority: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_problematicasset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_problematicassetfeedback: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_processnotes: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productinventory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityactioninputparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityactionoutputparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityagentscript: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityagentscriptstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivitymacroactiontemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivitymacroconnector: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivitymacrosolutionconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_productivityparameterdefinition: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_project: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projectapproval: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projectparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projectparameterpricelist: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projectpricelist: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projecttask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projecttaskdependency: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projecttaskstatususer: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projectteam: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projectteammembersignup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_projecttransactioncategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_provider: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseorder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseorderbill: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingincident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingservice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotebookingsetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quoteinvoicingproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quoteinvoicingsetup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotelineanalyticsbreakdown: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotelineinvoiceschedule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotelineresourcecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotelinescheduleofvalue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotelinetransaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotelinetransactioncategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotelinetransactionclassification: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_quotepricelist: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_recording: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_relationshipinsightsunifiedconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementcharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementdependency: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementgroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementorganizationunit: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementrelationship: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementresourcecategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementresourcepreference: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_requirementstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resolution: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourceassignmentdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourcecategorymarkuppricelevel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourcecategorypricelevel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourcerequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourcerequirement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourcerequirementdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_resourceterritory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rma: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rmareceipt: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rmasubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rolecompetencyrequirement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_roleutilization: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_routingconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_routingconfigurationstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_routingrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_routingrulesetsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rtv: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rtvproduct: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rtvsubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_rulesetdependencymapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesaccelerationsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesinsightssettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salesroutingrun: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salessuggestion: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_salestag: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_scenario: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_scheduleboardsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_schedulingfeatureflag: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_segment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sentimentanalysis: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sequence: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sequencetarget: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_serviceconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_servicetasktype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessiondata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessionevent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessionparticipant: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessionparticipantdata: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_sessiontemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_shipvia: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_siconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_skillattachmentruleitem: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_skillattachmenttarget: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_slakpi: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_smartassistconfig: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_smsnumber: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_solutionhealthrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_solutionhealthruleargument: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_solutionhealthruleset: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_soundfile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_soundnotificationsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarm: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmparticipant: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmparticipantrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmrole: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmskill: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_swarmtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_taxcode: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_taxcodedetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_teamschannelengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_teamsdialeradminsettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_teamsengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_templateparameter: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_templatetags: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timeentrysetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timegroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timegroupdetail: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timeoffcalendar: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timeoffrequest: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_timespent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_transactioncategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_transactioncategoryclassification: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_transactioncategoryhierarchyelement: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_transactioncategorypricelevel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_transactionconnection: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_transactionorigin: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_transactiontype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_twitterengagementctx: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_unifiedroutingdiagnostic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_unifiedroutingrun: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_unifiedroutingsetuptracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_untrackedappointment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_urnotificationtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_urnotificationtemplatemapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_userworkhistory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_warehouse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workhourtemplate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_worklistviewconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workordercharacteristic: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderdetailsgenerationqueue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderincident: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderresolution: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderservice: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workorderservicetask: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workordersubstatus: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workordertype: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workqueuestate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyn_workqueueusersetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_agentscriptaction: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_agentscripttaskcategory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_configuration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_customizationfiles: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_entityassignment: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_entitysearch: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_form: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_languagemodule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_scriptlet: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_search: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_sessioninformation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_toolbarbutton: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_toolbarstrip: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_tracesourcesetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_ucisettings: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msdyusd_uiievent: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msfp_alert: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msfp_alertrule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msfp_fileresponse: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_msfp_surveyreminder: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_opportunity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_organizationdatasyncstate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_organizationdatasyncsubscription: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_organizationdatasyncsubscriptionentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_package: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_phonecall: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_privilegesremovalsetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_publisher: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_queue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_quote: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_ratingmodel: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_ratingvalue: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_recurringappointmentmaster: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_resourcegroup: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_revokeinheritedaccessrecordstracker: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_service: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_serviceplan: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_serviceplanmapping: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_sharedlinksetting: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_sharepointdocumentlocation: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_sharepointsite: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_socialactivity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_socialprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_solutioncomponentattributeconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_solutioncomponentbatchconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_solutioncomponentconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_solutioncomponentrelationshipconfiguration: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_stagesolutionupload: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapsedatabase: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkexternaltablestate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkprofile: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkprofileentity: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkprofileentitystate: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_synapselinkschedule: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_systemuser: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_task: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_team: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_territory: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_transactioncurrency: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_action: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_context: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_hostedapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_nonhostedapplication: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_option: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_savedsession: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_sessiontransfer: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_workflow: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_workflowstep: string;
			/** Unique identifier of the potential duplicate record. */
			readonly duplicaterecordid_uii_workflow_workflowstep_mapping: string;
			/** Unique identifier of the duplicate rule against which this duplicate was found. */
			readonly DuplicateRuleId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the duplicate record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the duplicate record. */
			readonly OwningUser: string;
		}
	}
}
declare namespace OptionSet {
	namespace DuplicateRecord {
		enum BaseRecordIdTypeCode {
		}
		enum DuplicateRecordIdTypeCode {
		}
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
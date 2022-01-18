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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the system job that created this record. */
		AsyncOperationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_activityfileattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_activitymonitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_adminsettingsentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_applicationuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_appnotification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcebooking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcebookingheader: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcecategoryassn: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookableresourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_bookingstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_campaign: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_campaignresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_canvasappextendedmetadata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_catalogassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		channelaccessprofile_duplicatebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_characteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_competitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_contract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_conversationtranscript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_datalakefolder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_datalakefolderpermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_datalakeworkspace: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_datalakeworkspacepermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_entitlement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_entitlementchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_entitlementtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_environmentvariabledefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_environmentvariablevalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_equipment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_exportsolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_feedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_flowmachinegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_goal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_goalrollupquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_incident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_keyvaultreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_lead: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_list: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_managedidentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_marketingformdisplayattributes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_accountpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_actioncardregarding: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_actual: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agentstatushistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibdataset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aiodimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aiodlabel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analysiscomponent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analysisjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analysisresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_analytics: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_appconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_applicationextension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_applicationtabtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_approval: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_assignmentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_assignmentconfigurationstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_autocapturerule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_autocapturesettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_batchjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_bookableresourceassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_bookableresourcebookingquicknote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_bookableresourcecapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_bookingalert: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_bookingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_callablecontext: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_cannedmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_capacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_channel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_channelcapability: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_channelprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_chatwidgetlanguage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ciprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_clientextension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_consoleapplicationnotificationfield: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_consoleapplicationnotificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_consoleapplicationsessiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_consoleapplicationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_consoleapplicationtemplateparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_consoleapplicationtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_contactpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_contractlinedetailperformance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_contractlineinvoiceschedule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_contractlinescheduleofvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_conversationaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_conversationactionlocale: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_conversationdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_conversationsuggestionrequestpayload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_customengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_customerasset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_customerassetattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_customerassetcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_dataexport: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_dataflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_decisioncontract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_decisionruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_delegation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_dimension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_dimensionfieldname: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_entitlementapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_entityconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_estimate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_estimateline: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_expense: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_expensecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_fact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_federatedarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_fieldcomputation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_fieldservicepricelistitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_findworkevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_flowcardtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_forecastconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_forecastdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_forecastinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_geofence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_geofenceevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_geofencingsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_geolocationsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_geolocationtracking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttyperecommendationresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttyperecommendationrunhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttyperesolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttypeservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_incidenttype_requirementgroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inspection: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inspectionattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inspectiondefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inspectioninstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inspectionresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inventoryjournal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_inventorytransfer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_invoicefrequency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_invoicefrequencydetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotdevice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotdevicecommanddefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotdevicedatahistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotdeviceproperty: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotdevicevisualizationconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotfieldmapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotpropertydefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotproviderinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_iotsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_journal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_journalline: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_kpieventdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_kpieventdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_liveworkitemevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_liveworkstreamcapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_localizedsurveyquestion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_macrosession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_maskingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_masterentityroutingconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_migrationtracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_notificationfield: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_notificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocbotchannelregistration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_occhannelconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_occhannelstateconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_occommunicationprovidersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_occommunicationprovidersettingentry: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_occustommessagingchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocfbapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocfbpage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_oclanguage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_oclinechannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocliveworkitemcapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocliveworkitemcharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocliveworkitemcontextitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocliveworkitemparticipant: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocliveworkstreamcontextvariable: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_oclocalizationdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocoutboundconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocoutboundmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocphonenumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocprovisioningstate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsentimentdailytopic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsentimentdailytopickeyword: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsentimentdailytopictrending: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsessioncharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsimltraining: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsitdimportconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsitdskill: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsitrainingdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocskillidentmlmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsmschannelsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocsystemmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_octeamschannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_octwitterapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_octwitterhandle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocwechatchannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocwhatsappchannelaccount: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_ocwhatsappchannelnumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_oc_geolocationprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_omnichannelconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_omnichannelsyncconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderinvoicingdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderinvoicingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderinvoicingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderinvoicingsetupdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_orderpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_organizationalunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_paneconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_panetabconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_panetoolconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_payment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_paymentdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_paymentmethod: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_paymentterm: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_personalmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_personalsoundsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_personasecurityrolemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbookactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbookcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbookinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_playbooktemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_pminferredtask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_pmrecording: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_postalbum: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_postalcode: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_presence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_priority: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_problematicasset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_problematicassetfeedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_processnotes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productinventory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productivityactioninputparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productivityactionoutputparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productivityagentscript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productivityagentscriptstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productivitymacroactiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productivitymacroconnector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productivitymacrosolutionconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_productivityparameterdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_project: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projectapproval: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projectparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projectpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projecttask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projectteam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_provider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_purchaseorder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotebookingincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotebookingservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotebookingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quoteinvoicingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quoteinvoicingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotelineanalyticsbreakdown: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotelineinvoiceschedule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotelinescheduleofvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_quotepricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_requirementdependency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_requirementgroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_requirementorganizationunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_requirementrelationship: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_requirementstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_resolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_resourceassignmentdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_resourcecategorymarkuppricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_resourcerequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_resourcerequirement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_resourceterritory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rma: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rmareceipt: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rmasubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_roleutilization: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_routingconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_routingconfigurationstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_routingrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_routingrulesetsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rtv: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rtvproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_rulesetdependencymapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_scenario: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_scheduleboardsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_schedulingfeatureflag: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_sentimentanalysis: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_servicetasktype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_sessiondata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_sessionevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_sessionparticipant: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_sessionparticipantdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_sessiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_shipvia: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_siconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_skillattachmentruleitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_skillattachmenttarget: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_slakpi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_smartassistconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_smsnumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_soundfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_soundnotificationsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_taxcode: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_taxcodedetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_teamsdialeradminsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_teamsengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_templateparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_templatetags: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_timeentrysetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_timegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_timegroupdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_timeoffcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_timeoffrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_transactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_transactionconnection: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_transactionorigin: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_transactiontype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_twitterengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_unifiedroutingdiagnostic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_unifiedroutingrun: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_unifiedroutingsetuptracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_untrackedappointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_urnotificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_urnotificationtemplatemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_userworkhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_warehouse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workhourtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workorder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workorderdetailsgenerationqueue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workorderincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workorderresolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workorderservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workorderservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workordersubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyn_workordertype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_agentscripttaskcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_configuration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_customizationfiles: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_entityassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_entitysearch: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_form: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_languagemodule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_scriptlet: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_search: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_sessioninformation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_ucisettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msdyusd_uiievent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_alert: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_alertrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_fileresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_msfp_surveyreminder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_opportunity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_organizationdatasyncsubscription: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_package: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_publisher: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_quote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_ratingmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_ratingvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_resourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_service: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_serviceplan: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_sharepointdocumentlocation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_sharepointsite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_socialprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_solutioncomponentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_stagesolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_territory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_transactioncurrency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_action: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_context: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_hostedapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_nonhostedapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_option: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_savedsession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_sessiontransfer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_workflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_workflowstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the base record. */
		baserecordid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the duplicate record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the duplicate record. */
		DuplicateId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_activityfileattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_activitymonitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_adminsettingsentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_applicationuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_appnotification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcebooking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcebookingheader: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcecategoryassn: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookableresourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_bookingstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_campaign: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_campaignresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_canvasappextendedmetadata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_catalogassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		channelaccessprofile_duplicatematchingrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_characteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_competitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_contract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_conversationtranscript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_datalakefolder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_datalakefolderpermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_datalakeworkspace: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_datalakeworkspacepermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_entitlement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_entitlementchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_entitlementtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_environmentvariabledefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_environmentvariablevalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_equipment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_exportsolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_feedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_flowmachinegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_goal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_goalrollupquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_incident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_keyvaultreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_lead: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_list: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_managedidentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_marketingformdisplayattributes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_accountpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_actioncardregarding: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_actual: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agentstatushistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibdataset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aiodimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aiodlabel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analysiscomponent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analysisjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analysisresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_analytics: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_appconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_applicationextension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_applicationtabtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_approval: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_assignmentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_assignmentconfigurationstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_autocapturerule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_autocapturesettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_batchjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_bookableresourceassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_bookableresourcebookingquicknote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_bookableresourcecapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_bookingalert: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_bookingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_callablecontext: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_cannedmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_capacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_channel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_channelcapability: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_channelprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_chatwidgetlanguage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ciprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_clientextension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_consoleapplicationnotificationfield: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_consoleapplicationnotificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_consoleapplicationsessiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_consoleapplicationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_consoleapplicationtemplateparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_consoleapplicationtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_contactpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_contractlinedetailperformance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_contractlineinvoiceschedule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_contractlinescheduleofvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_conversationaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_conversationactionlocale: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_conversationdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_conversationsuggestionrequestpayload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_customengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_customerasset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_customerassetattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_customerassetcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_dataexport: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_dataflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_decisioncontract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_decisionruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_delegation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_dimension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_dimensionfieldname: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_entitlementapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_entityconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_estimate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_estimateline: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_expense: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_expensecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_fact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_federatedarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_fieldcomputation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_fieldservicepricelistitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_findworkevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_flowcardtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_forecastconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_forecastdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_forecastinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_geofence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_geofenceevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_geofencingsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_geolocationsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_geolocationtracking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttyperecommendationresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttyperecommendationrunhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttyperesolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttypeservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_incidenttype_requirementgroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inspection: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inspectionattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inspectiondefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inspectioninstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inspectionresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inventoryjournal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_inventorytransfer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_invoicefrequency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_invoicefrequencydetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotdevice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotdevicecommanddefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotdevicedatahistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotdeviceproperty: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotdevicevisualizationconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotfieldmapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotpropertydefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotproviderinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_iotsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_journal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_journalline: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_kpieventdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_kpieventdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_liveworkitemevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_liveworkstreamcapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_localizedsurveyquestion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_macrosession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_maskingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_masterentityroutingconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_migrationtracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_notificationfield: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_notificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocbotchannelregistration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_occhannelconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_occhannelstateconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_occommunicationprovidersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_occommunicationprovidersettingentry: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_occustommessagingchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocfbapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocfbpage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_oclanguage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_oclinechannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocliveworkitemcapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocliveworkitemcharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocliveworkitemcontextitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocliveworkitemparticipant: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocliveworkstreamcontextvariable: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_oclocalizationdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocoutboundconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocoutboundmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocphonenumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocprovisioningstate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsentimentdailytopic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsentimentdailytopickeyword: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsentimentdailytopictrending: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsessioncharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsimltraining: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsitdimportconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsitdskill: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsitrainingdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocskillidentmlmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsmschannelsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocsystemmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_octeamschannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_octwitterapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_octwitterhandle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocwechatchannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocwhatsappchannelaccount: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_ocwhatsappchannelnumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_oc_geolocationprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_omnichannelconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_omnichannelsyncconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderinvoicingdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderinvoicingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderinvoicingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderinvoicingsetupdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_orderpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_organizationalunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_paneconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_panetabconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_panetoolconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_payment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_paymentdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_paymentmethod: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_paymentterm: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_personalmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_personalsoundsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_personasecurityrolemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbookactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbookcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbookinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_playbooktemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_pminferredtask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_pmrecording: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_postalbum: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_postalcode: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_presence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_priority: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_problematicasset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_problematicassetfeedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_processnotes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productinventory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productivityactioninputparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productivityactionoutputparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productivityagentscript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productivityagentscriptstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productivitymacroactiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productivitymacroconnector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productivitymacrosolutionconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_productivityparameterdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_project: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projectapproval: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projectparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projectpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projecttask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projectteam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_provider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_purchaseorder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotebookingincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotebookingservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotebookingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quoteinvoicingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quoteinvoicingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotelineanalyticsbreakdown: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotelineinvoiceschedule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotelinescheduleofvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_quotepricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_requirementdependency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_requirementgroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_requirementorganizationunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_requirementrelationship: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_requirementstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_resolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_resourceassignmentdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_resourcecategorymarkuppricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_resourcerequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_resourcerequirement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_resourceterritory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rma: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rmareceipt: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rmasubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_roleutilization: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_routingconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_routingconfigurationstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_routingrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_routingrulesetsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rtv: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rtvproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_rulesetdependencymapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_scenario: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_scheduleboardsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_schedulingfeatureflag: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_sentimentanalysis: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_servicetasktype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_sessiondata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_sessionevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_sessionparticipant: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_sessionparticipantdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_sessiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_shipvia: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_siconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_skillattachmentruleitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_skillattachmenttarget: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_slakpi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_smartassistconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_smsnumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_soundfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_soundnotificationsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_taxcode: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_taxcodedetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_teamsdialeradminsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_teamsengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_templateparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_templatetags: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_timeentrysetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_timegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_timegroupdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_timeoffcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_timeoffrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_transactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_transactionconnection: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_transactionorigin: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_transactiontype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_twitterengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_unifiedroutingdiagnostic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_unifiedroutingrun: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_unifiedroutingsetuptracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_untrackedappointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_urnotificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_urnotificationtemplatemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_userworkhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_warehouse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workhourtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workorder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workorderdetailsgenerationqueue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workorderincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workorderresolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workorderservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workorderservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workordersubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyn_workordertype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_agentscripttaskcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_configuration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_customizationfiles: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_entityassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_entitysearch: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_form: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_languagemodule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_scriptlet: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_search: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_sessioninformation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_ucisettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msdyusd_uiievent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_alert: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_alertrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_fileresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_msfp_surveyreminder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_opportunity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_organizationdatasyncsubscription: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_package: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_publisher: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_quote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_ratingmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_ratingvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_resourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_service: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_serviceplan: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_sharepointdocumentlocation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_sharepointsite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_socialprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_solutioncomponentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_stagesolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_territory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_transactioncurrency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_action: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_context: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_hostedapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_nonhostedapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_option: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_savedsession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_sessiontransfer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_workflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_workflowstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the potential duplicate record. */
		duplicaterecordid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the duplicate rule against which this duplicate was found. */
		DuplicateRuleId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the duplicate record. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the duplicate record. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace DuplicateRecord {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
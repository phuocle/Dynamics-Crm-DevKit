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
		/** Unique identifier of the bulk deletion failure record. */
		BulkDeleteFailureId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the bulk operation job which created this record */
		BulkDeleteOperationId: DevKit.WebApi.LookupValueReadonly;
		/** Description of the error. */
		ErrorDescription: DevKit.WebApi.StringValueReadonly;
		/** Error code for the failed bulk deletion. */
		ErrorNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Index of the ordered query expression that retrieved this record. */
		OrderedQueryIndex: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the bulk deletion failure. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the bulk deletion failure record.
 */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_account: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_accountleads: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activityfileattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitymimeattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitymonitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_activitypointer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_adminsettingsentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_annualfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appelement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_applicationuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appmodulecomponentedge: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appmodulecomponentnode: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_appusersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_attributeimageconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_attributemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcebooking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcebookingheader: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookableresourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bookingstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bot: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_botcomponent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bulkoperation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_bulkoperationlog: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_calendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaign: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaignactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaignactivityitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaignitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_campaignresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_canvasappextendedmetadata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_catalog: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_catalogassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		channelaccessprofile_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_characteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_childincidentcount: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_comment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_commitment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_competitor: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_competitoraddress: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_competitorproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_competitorsalesliterature: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_connectionreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_connector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_constraintbasedgroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contactinvoices: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contactleads: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contactorders: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contactquotes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contractdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_contracttemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_conversationtranscript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customapi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customapirequestparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customapiresponseproperty: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customeropportunityrole: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_datalakefolder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_datalakefolderpermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_datalakeworkspace: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_datalakeworkspacepermission: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_datasyncstate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_discount: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_discounttype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_displaystring: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_dynamicproperty: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_dynamicpropertyassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_dynamicpropertyinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_email: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementcontacts: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementproducts: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementtemplatechannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitlementtemplateproducts: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entityanalyticsconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entityimageconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entityindex: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_entitymap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_equipment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_exportsolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		externalparty_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		externalpartyitem_bulkdeletefailures: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_fax: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_featurecontrolsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_fixedmonthlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_flowmachine: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_flowmachinegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_flowsession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_import: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importlog: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_importmap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_incident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_incidentresolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_indexattributes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_internalcatalogassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_invoice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_invoicedetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_isvconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticlecomment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_kbarticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_keyvaultreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_knowledgearticleincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_lead: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_leadaddress: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_leadcompetitors: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_leadproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_letter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_list: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_listmember: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_listoperation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_managedidentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_marketingformdisplayattributes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_monthlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdynce_botcontent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdynsm_marketingsitemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdynsm_salessitemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdynsm_servicessitemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdynsm_settingssitemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_3dmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_accountpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_actual: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_adaptivecardconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_adminappstate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agentstatushistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibdataset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aicontactsuggestion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aimodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiodimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiodlabel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_aitemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analysisjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analysisresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analytics: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analyticsadminsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_analyticsforcs: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_appconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_applicationextension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_applicationtabtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_approval: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_approvalset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_assetcategorytemplateassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_assetsuggestionssetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_assettemplateassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_assignmentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_assignmentconfigurationstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_assignmentmap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_assignmentrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_attribute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_attributevalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_authenticationsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_autocapturerule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_autocapturesettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_batchjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookableresourceassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookableresourcebookingquicknote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookableresourcecapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookingalert: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookingchange: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookingjournal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookingsetupmetadata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_businessclosure: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_callablecontext: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_cannedmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_capacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_caseenrichment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_casesuggestionrequestpayload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_casetopic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_casetopicsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_casetopicsummary: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_casetopic_incident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_cdsentityengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_channel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_channelcapability: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_channelprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_chatansweroption: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_chatquestionnaireresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_chatwidgetlanguage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ciprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_clientextension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_collabgraphresource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_configuration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_consoleapplicationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_consoleapplicationtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_consoleappparameterdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_contactpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_contactsuggestionrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_contactsuggestionruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_contractlinedetailperformance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_contractlineinvoiceschedule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_contractlinescheduleofvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_contractperformance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationactionlocale: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationinsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationsuggestionrequestpayload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationtopic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationtopicsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationtopicsummary: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_conversationtopic_conversation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_customengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_customerasset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_customerassetattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_customerassetcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataanalyticsreport: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataanalyticsreport_csrmanager: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataanalyticsreport_fs: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataanalyticsreport_ksinsights: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataanalyticsreport_oc: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_databaseversion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataexport: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_datainsightsandanalyticsfeature: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dealmanageraccess: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dealmanagersettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_decisioncontract: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_decisionruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_delegation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dimension: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_dimensionfieldname: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_effortpredictionresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_entitlementapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_entityconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_entityconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_entityroutingconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_estimate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_estimateline: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_expense: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_expensecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_expensereceipt: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_extendedusersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_facebookengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_fact: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_federatedarticle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_fieldcomputation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_fieldservicepricelistitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_fieldservicesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_fieldservicesystemjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_findworkevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_flowcardtype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_forecastconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_forecastinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_functionallocation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_gdprdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_geofence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_geofenceevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_geofencingsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_geolocationsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_geolocationtracking: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iermlmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iermltraining: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttyperecommendationresult: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttyperecommendationrunhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttyperesolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttypeservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inspection: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inspectionattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inspectiondefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inspectioninstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inspectionresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_integrationjob: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_integrationjobdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inventoryjournal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_invoicefrequency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_invoicefrequencydetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotalert: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotdevice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotdevicedatahistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotdeviceproperty: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotfieldmapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotpropertydefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotproviderinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iotsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_iottocaseprocess: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_journal: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_journalline: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_kbattachment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_kbenrichment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_kmpersonalizationsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_kpieventdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_kpieventdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_lineengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_livechatconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_livechatengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_livechatwidgetlocation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_liveconversation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_liveworkitemevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_liveworkstream: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_liveworkstreamcapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_localizedsurveyquestion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_macrosession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_maskingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_masterentityroutingconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_migrationtracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_mlresultcache: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_msteamssetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_msteamssettingsv2: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_notificationfield: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_notificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocautoblockrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocbotchannelregistration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_occarrier: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_occhannelconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_occhannelstateconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_occommunicationprovidersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_occommunicationprovidersettingentry: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_occustommessagingchannel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocfbapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocfbpage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocflaggedspam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_oclanguage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_oclinechannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocliveworkitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocliveworkitemcapacityprofile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_oclocalizationdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocoutboundconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocoutboundmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocphonenumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocprovisioningstate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocrecording: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocruleitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsentimentdailytopic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsentimentdailytopickeyword: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsentimentdailytopictrending: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsessioncharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsessionparticipantevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsessionsentiment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsimltraining: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsitdimportconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsitdskill: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsitrainingdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocskillidentmlmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsmschannelsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocsystemmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_octag: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_octeamschannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_octwitterapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_octwitterhandle: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocwechatchannelconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_oc_geolocationprovider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_omnichannelconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_omnichannelpersonalization: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_omnichannelqueue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_omnichannelsyncconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_operatinghour: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderinvoicingdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderinvoicingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderinvoicingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_orderpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_organizationalunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_overflowactionconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_paneconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_panetabconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_panetoolconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_payment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_paymentdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_paymentmethod: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_paymentterm: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_personalmessage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_personalsoundsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_personasecurityrolemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbookcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbookinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_pminferredtask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_pmrecording: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_postalbum: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_postalcode: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_postconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_postruleconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_predictworkhourdurationsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_presence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_priority: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_problematicasset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_problematicassetfeedback: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_processnotes: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productinventory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productivityactioninputparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productivityactionoutputparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productivityagentscript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productivityagentscriptstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productivitymacroactiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productivitymacroconnector: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productivitymacrosolutionconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_productivityparameterdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_project: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projectapproval: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projectparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projectpricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projecttask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projectteam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_property: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_propertyassetassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_propertylog: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_propertytemplateassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_provider: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_purchaseorder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_questionsequence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotebookingincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotebookingservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotebookingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quoteinvoicingproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quoteinvoicingsetup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotelineanalyticsbreakdown: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotelineinvoiceschedule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotelinescheduleofvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_quotepricelist: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_requirementdependency: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_requirementgroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_requirementorganizationunit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_requirementrelationship: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_requirementstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourceassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourceassignmentdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourcecategorymarkuppricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourcepaytype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourcerequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourcerequirement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_resourceterritory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_richtextfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rma: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rmaproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rmareceipt: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rmasubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_roleutilization: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_routingconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_routingconfigurationstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_routingrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_routingrulesetsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rtv: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rtvproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_rulesetdependencymapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_salesaccelerationsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_salesassignmentsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_salesroutingrun: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_scenario: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_scheduleboardsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_schedulingfeatureflag: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_schedulingparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_searchconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_segment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_segmentcatalogue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sentimentanalysis: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sequence: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sequencestat: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sequencetarget: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sequencetargetstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_servicetasktype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sessiondata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sessionevent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sessionparticipant: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sessionparticipantdata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sessiontemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_shipvia: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_siconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_sikeyvalueconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_skillattachmentruleitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_skillattachmenttarget: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_smartassistconfig: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_smsengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_smsnumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_soundfile: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_soundnotificationsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_suggestioninteraction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_suggestionrequestpayload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_suggestionsmodelsummary: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_suggestionssetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_surveyquestion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_taxcode: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_taxcodedetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_teamschannelengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_teamschatassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_teamschatsuggestion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_teamsdialeradminsettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_teamsengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_templateforproperties: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_templateparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_templatetags: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_timeentry: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_timeentrysetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_timegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_timeoffcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_timeoffrequest: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_tour: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_transactioncategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_transactionconnection: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_transactionorigin: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_transactiontype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_transcript: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_twitterengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_unifiedroutingdiagnostic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_unifiedroutingrun: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_unifiedroutingsetuptracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_uniquenumber: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_upgraderun: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_upgradestep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_upgradeversion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_urnotificationtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_urnotificationtemplatemapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_usersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_userworkhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_visitorjourney: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_warehouse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_wechatengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_whatsappengagementctx: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workhourtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workorder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workorderincident: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workorderproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workorderresolution: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workorderservice: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workordersubstatus: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workordertype: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workqueuestate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyn_workqueueusersetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_actioncallworkflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_agentscripttaskcategory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_answer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_auditanddiagnosticssetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_configuration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_customizationfiles: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_entityassignment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_entitysearch: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_form: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_languagemodule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_scriptlet: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_scripttasktrigger: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_search: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_sessioninformation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_sessiontransfer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_ucisettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_uiievent: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_usersettings: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msdyusd_windowroute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_alert: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_alertrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_emailtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_fileresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_localizedemailtemplate: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_project: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_question: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_questionresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_satisfactionmetric: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_survey: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_surveyreminder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_new_test: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunityclose: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunitycompetitors: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunityproduct: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_opportunitysalesprocess: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_orderclose: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_organization: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_organizationdatasyncsubscription: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_organizationsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_package: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_pdfsetting: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_phonetocaseprocess: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_pluginpackage: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_post: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_pricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_privilege: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_product: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_productassociation: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_productpricelevel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_productsalesliterature: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_productsubstitute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_provisionlanguageforuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quarterlyfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_queue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quote: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quoteclose: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_quotedetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_ratingmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_ratingvalue: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshipattribute: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_relationshiprolemap: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_resource: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_resourcegroup: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_resourcegroupexpansion: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_resourcespec: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_role: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesliteratureitem: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesorder: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesorderdetail: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_salesprocessinstance: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_savedquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_semiannualfiscalcalendar: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_service: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_serviceappointment: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_servicecontractcontacts: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_serviceplanmapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_settingdefinition: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_site: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_sla: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_socialactivity: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_solutioncomponentbatchconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_subject: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_systemform: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_systemuserauthorizationchangetracker: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_task: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_teammobileofflineprofilemembership: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_template: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_territory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_theme: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topic: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topichistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topicmodel: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topicmodelconfiguration: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_action: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_audit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_context: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_hostedapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_nonhostedapplication: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_option: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_savedsession: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_sessiontransfer: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_workflow: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_workflowstep: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uom: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_uomschedule: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_userform: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_usermapping: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_usermobileofflineprofilemembership: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_userquery: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_virtualentitymetadata: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the record that can not be deleted. */
		regardingobjectid_workflowbinary: DevKit.WebApi.LookupValueReadonly;
	}
}
declare namespace OptionSet {
	namespace BulkDeleteFailure {
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
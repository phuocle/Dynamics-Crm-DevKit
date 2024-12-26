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
		regardingobjectid_appaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appactionmigration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appactionrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_appelement: string;
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
		regardingobjectid_asyncoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_attributeimageconfig: string;
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
		regardingobjectid_bulkoperation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkoperationlog: string;
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
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_catalog: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_catalogassignment: string;
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
		regardingobjectid_discount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_discounttype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicproperty: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyassociation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyoptionsetitem: string;
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
		regardingobjectid_environmentvariabledefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_environmentvariablevalue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_equipment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_exportsolutionupload: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_featurecontrolsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachine: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowmachinegroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowsession: string;
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
		regardingobjectid_managedidentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_marketingformdisplayattributes: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynce_botcontent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynsm_marketingsitemap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynsm_salessitemap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynsm_servicessitemap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynsm_settingssitemap: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_3dmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_accountpricelist: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardregarding: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardrolesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actual: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_adaptivecardconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_adminappstate: string;
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
		regardingobjectid_msdyn_appconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_applicationextension: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_applicationtabtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_approval: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_approvalset: string;
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
		regardingobjectid_msdyn_batchjob: string;
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
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
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
		regardingobjectid_msdyn_channelprovider: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_characteristicreqforteammember: string;
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
		regardingobjectid_msdyn_contactpricelist: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contactsuggestionrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contactsuggestionruleset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contractlinedetailperformance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contractlineinvoiceschedule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contractlinescheduleofvalue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contractperformance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationactionlocale: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationdata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationinsight: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationsuggestionrequestpayload: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtopic: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtopicsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtopicsummary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationtopic_conversation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_csadminconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerasset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerassetattachment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerassetcategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport: string;
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
		regardingobjectid_msdyn_dataanalyticsreport_oc: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_databaseversion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataexport: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflow: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
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
		regardingobjectid_msdyn_delegation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dimension: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dimensionfieldname: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_duplicateleadmapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_effortpredictionresult: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entitlementapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityrankingrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityroutingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_estimate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_estimateline: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_expense: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_expensecategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_expensereceipt: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_extendedusersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_facebookengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fact: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldcomputation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicepricelistitem: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicesystemjob: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_findworkevent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flowcardtype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastdefinition: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastinstance: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastrecurrence: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastsettingsandsummary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_functionallocation: string;
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
		regardingobjectid_msdyn_icebreakersconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iermlmodel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iermltraining: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inboxconfiguration: string;
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
		regardingobjectid_msdyn_integrationjob: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_integrationjobdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryadjustment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryjournal: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventorytransfer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_invoicefrequency: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_invoicefrequencydetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_invoicelinetransaction: string;
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
		regardingobjectid_msdyn_journal: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_journalline: string;
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
		regardingobjectid_msdyn_leadmodelconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_lineengagementctx: string;
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
		regardingobjectid_msdyn_macrosession: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_maskingrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_masterentityroutingconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_migrationtracker: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_mlresultcache: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_modelpreviewstatus: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_msteamssetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_msteamssettingsv2: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_notesanalysisconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_notificationfield: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_notificationtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocapplebusinessaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocapplepay: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocautoblockrule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocbotchannelregistration: string;
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
		regardingobjectid_msdyn_ocfbapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocfbpage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocflaggedspam: string;
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
		regardingobjectid_msdyn_ocwechatchannelconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_oc_geolocationprovider: string;
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
		regardingobjectid_msdyn_opportunitylineresourcecategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitylinetransaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitylinetransactioncategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitylinetransactionclassificatio: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitymodelconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitypricelist: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingdate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingproduct: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingsetup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderlineresourcecategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderlinetransaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderlinetransactioncategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderlinetransactionclassification: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderpricelist: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_organizationalunit: string;
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
		regardingobjectid_msdyn_pminferredtask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmrecording: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_pmtemplate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postalbum: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postalcode: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postruleconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictivemodelscore: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictivescore: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_predictworkhourdurationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_presence: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_priority: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_problematicasset: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_problematicassetfeedback: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_processnotes: string;
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
		regardingobjectid_msdyn_project: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectapproval: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectparameterpricelist: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectpricelist: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projecttask: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projecttaskdependency: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projecttaskstatususer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectteam: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectteammembersignup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projecttransactioncategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_property: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_propertyassetassociation: string;
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
		regardingobjectid_msdyn_quotelineanalyticsbreakdown: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelineinvoiceschedule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelineresourcecategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelinescheduleofvalue: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelinetransaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelinetransactioncategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelinetransactionclassification: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotepricelist: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_recording: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
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
		regardingobjectid_msdyn_resourceassignment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourceassignmentdetail: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcecategorymarkuppricelevel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcecategorypricelevel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcepaytype: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcerequest: string;
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
		regardingobjectid_msdyn_rolecompetencyrequirement: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_roleutilization: string;
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
		regardingobjectid_msdyn_salesaccelerationsettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesassignmentsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesinsightssettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesroutingrun: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salessuggestion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salestag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scenario: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scheduleboardsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_schedulingfeatureflag: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_schedulingparameter: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_searchconfiguration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_segment: string;
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
		regardingobjectid_msdyn_shipvia: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_siconfig: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sikeyvalueconfig: string;
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
		regardingobjectid_msdyn_suggestioninteraction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionrequestpayload: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionsmodelsummary: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_suggestionssetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_surveyquestion: string;
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
		regardingobjectid_msdyn_timeoffcalendar: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timeoffrequest: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timespent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_tour: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactioncategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactioncategoryclassification: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactioncategoryhierarchyelement: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactioncategorypricelevel: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactionconnection: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactionorigin: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactiontype: string;
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
		regardingobjectid_msdyn_usersetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_userworkhistory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_visitorjourney: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wallsavedquery: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_warehouse: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wechatengagementctx: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_whatsappengagementctx: string;
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
		regardingobjectid_msdyusd_actioncallworkflow: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_agentscriptaction: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_agentscripttaskcategory: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_answer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_auditanddiagnosticssetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_configuration: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_customizationfiles: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_entityassignment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_entitysearch: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_form: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_languagemodule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_scriptlet: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_scripttasktrigger: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_search: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_sessioninformation: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_sessiontransfer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_task: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_toolbarbutton: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_toolbarstrip: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_tracesourcesetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_ucisettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_uiievent: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_usersettings: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_windowroute: string;
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
		regardingobjectid_organizationdatasyncstate: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_organizationsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_package: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pdfsetting: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_phonetocaseprocess: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pluginpackage: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pricelevel: string;
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
		regardingobjectid_relationshipattribute: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resource: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcegroup: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcegroupexpansion: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcespec: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
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
		regardingobjectid_service: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceappointment: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_servicecontractcontacts: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceplan: string;
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
		regardingobjectid_stagesolutionupload: string;
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
		regardingobjectid_uii_action: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_audit: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_context: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_hostedapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_nonhostedapplication: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_option: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_savedsession: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_sessiontransfer: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_workflow: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_workflowstep: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_workflow_workflowstep_mapping: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uom: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uomschedule: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_virtualentitymetadata: string;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_workflowbinary: string;
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
			readonly regardingobjectid_appaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appactionmigration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appactionrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_appelement: string;
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
			readonly regardingobjectid_asyncoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_attributeimageconfig: string;
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
			readonly regardingobjectid_bulkoperation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_bulkoperationlog: string;
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
			readonly regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_catalog: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_catalogassignment: string;
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
			readonly regardingobjectid_discount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_discounttype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dynamicproperty: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dynamicpropertyassociation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dynamicpropertyinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_dynamicpropertyoptionsetitem: string;
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
			readonly regardingobjectid_environmentvariabledefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_environmentvariablevalue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_equipment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_exportsolutionupload: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_featurecontrolsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowmachine: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowmachinegroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_flowsession: string;
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
			readonly regardingobjectid_managedidentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_marketingformdisplayattributes: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynce_botcontent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynsm_marketingsitemap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynsm_salessitemap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynsm_servicessitemap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdynsm_settingssitemap: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_3dmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_accountpricelist: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_actioncardregarding: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_actioncardrolesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_actual: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_adaptivecardconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_adminappstate: string;
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
			readonly regardingobjectid_msdyn_appconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_applicationextension: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_applicationtabtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_approval: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_approvalset: string;
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
			readonly regardingobjectid_msdyn_batchjob: string;
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
			readonly regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
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
			readonly regardingobjectid_msdyn_channelprovider: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_characteristicreqforteammember: string;
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
			readonly regardingobjectid_msdyn_contactpricelist: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contactsuggestionrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contactsuggestionruleset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contractlinedetailperformance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contractlineinvoiceschedule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contractlinescheduleofvalue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_contractperformance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationactionlocale: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationdata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationinsight: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationsuggestionrequestpayload: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtopic: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtopicsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtopicsummary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_conversationtopic_conversation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_csadminconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerasset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerassetattachment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_customerassetcategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticscustomizedreport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport: string;
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
			readonly regardingobjectid_msdyn_dataanalyticsreport_oc: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_databaseversion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataexport: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataflow: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dataflowrefreshhistory: string;
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
			readonly regardingobjectid_msdyn_delegation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dimension: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_dimensionfieldname: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_duplicateleadmapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_effortpredictionresult: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entitlementapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entitylinkchatconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityrankingrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityrefreshhistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_entityroutingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_estimate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_estimateline: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_expense: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_expensecategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_expensereceipt: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_extendedusersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_facebookengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fact: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_federatedarticle: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_federatedarticleincident: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldcomputation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldservicepricelistitem: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_fieldservicesystemjob: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_findworkevent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_flowcardtype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastdefinition: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastinstance: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastrecurrence: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_forecastsettingsandsummary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_functionallocation: string;
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
			readonly regardingobjectid_msdyn_icebreakersconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iermlmodel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_iermltraining: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inboxconfiguration: string;
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
			readonly regardingobjectid_msdyn_integrationjob: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_integrationjobdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_invoicefrequency: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_invoicefrequencydetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_invoicelinetransaction: string;
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
			readonly regardingobjectid_msdyn_journal: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_journalline: string;
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
			readonly regardingobjectid_msdyn_leadmodelconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_lineengagementctx: string;
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
			readonly regardingobjectid_msdyn_macrosession: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_maskingrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_masterentityroutingconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_migrationtracker: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_mlresultcache: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_modelpreviewstatus: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_msteamssetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_msteamssettingsv2: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_notesanalysisconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_notificationfield: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_notificationtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocapplebusinessaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocapplemessagesforbusinessengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocapplepay: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocautoblockrule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocbotchannelregistration: string;
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
			readonly regardingobjectid_msdyn_ocfbapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocfbpage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocflaggedspam: string;
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
			readonly regardingobjectid_msdyn_ocwechatchannelconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_oc_geolocationprovider: string;
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
			readonly regardingobjectid_msdyn_opportunitylineresourcecategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_opportunitylinetransaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_opportunitylinetransactioncategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_opportunitylinetransactionclassificatio: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_opportunitymodelconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_opportunitypricelist: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingdate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingproduct: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingsetup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderinvoicingsetupdate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderlineresourcecategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderlinetransaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderlinetransactioncategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderlinetransactionclassification: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_orderpricelist: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_organizationalunit: string;
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
			readonly regardingobjectid_msdyn_pminferredtask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmrecording: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_pmtemplate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_postalbum: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_postalcode: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_postconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_postruleconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictivemodelscore: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictivescore: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_predictworkhourdurationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_presence: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_priority: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_problematicasset: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_problematicassetfeedback: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_processnotes: string;
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
			readonly regardingobjectid_msdyn_project: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projectapproval: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projectparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projectparameterpricelist: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projectpricelist: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projecttask: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projecttaskdependency: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projecttaskstatususer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projectteam: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projectteammembersignup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_projecttransactioncategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_property: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_propertyassetassociation: string;
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
			readonly regardingobjectid_msdyn_quotelineanalyticsbreakdown: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotelineinvoiceschedule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotelineresourcecategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotelinescheduleofvalue: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotelinetransaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotelinetransactioncategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotelinetransactionclassification: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_quotepricelist: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_recording: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
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
			readonly regardingobjectid_msdyn_resourceassignment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourceassignmentdetail: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourcecategorymarkuppricelevel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourcecategorypricelevel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourcepaytype: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_resourcerequest: string;
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
			readonly regardingobjectid_msdyn_rolecompetencyrequirement: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_roleutilization: string;
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
			readonly regardingobjectid_msdyn_salesaccelerationsettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesassignmentsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesinsightssettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salesroutingrun: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salessuggestion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_salestag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_scenario: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_scheduleboardsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_schedulingfeatureflag: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_schedulingparameter: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_searchconfiguration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_segment: string;
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
			readonly regardingobjectid_msdyn_shipvia: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_siconfig: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_sikeyvalueconfig: string;
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
			readonly regardingobjectid_msdyn_suggestioninteraction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionrequestpayload: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionsmodelsummary: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_suggestionssetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_surveyquestion: string;
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
			readonly regardingobjectid_msdyn_timeoffcalendar: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_timespent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_tour: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transactioncategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transactioncategoryclassification: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transactioncategoryhierarchyelement: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transactioncategorypricelevel: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transactionconnection: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transactionorigin: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_transactiontype: string;
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
			readonly regardingobjectid_msdyn_usersetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_userworkhistory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_visitorjourney: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wallsavedquery: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wallsavedqueryusersettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_warehouse: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_wechatengagementctx: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyn_whatsappengagementctx: string;
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
			readonly regardingobjectid_msdyusd_actioncallworkflow: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_agentscriptaction: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_agentscripttaskcategory: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_answer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_auditanddiagnosticssetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_configuration: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_customizationfiles: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_entityassignment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_entitysearch: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_form: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_languagemodule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_scriptlet: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_scripttasktrigger: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_search: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_sessioninformation: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_sessiontransfer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_task: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_toolbarbutton: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_toolbarstrip: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_tracesourcesetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_ucisettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_uiievent: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_usersettings: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_msdyusd_windowroute: string;
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
			readonly regardingobjectid_organizationdatasyncstate: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationdatasyncsubscription: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationdatasyncsubscriptionentity: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_organizationsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_package: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_pdfsetting: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_phonetocaseprocess: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_pluginpackage: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_pricelevel: string;
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
			readonly regardingobjectid_relationshipattribute: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_resource: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_resourcegroup: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_resourcegroupexpansion: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_resourcespec: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_revokeinheritedaccessrecordstracker: string;
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
			readonly regardingobjectid_service: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_serviceappointment: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_servicecontractcontacts: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_serviceplan: string;
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
			readonly regardingobjectid_stagesolutionupload: string;
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
			readonly regardingobjectid_uii_action: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_audit: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_context: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_hostedapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_nonhostedapplication: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_option: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_savedsession: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_sessiontransfer: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_workflow: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_workflowstep: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uii_workflow_workflowstep_mapping: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uom: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_uomschedule: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_usermobileofflineprofilemembership: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_virtualentitymetadata: string;
			/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
			readonly regardingobjectid_workflowbinary: string;
			/** Version number of the mailbox tracking folder. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingFolder {
		enum OwnerIdType {
		}
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
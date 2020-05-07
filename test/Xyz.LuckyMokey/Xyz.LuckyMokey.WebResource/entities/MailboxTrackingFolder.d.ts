//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the entry was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Folder Id for a folder in Exchange */
		ExchangeFolderId: DevKit.WebApi.StringValue;
		/** Exchange Folder Name */
		ExchangeFolderName: DevKit.WebApi.StringValue;
		/** Information to indicate whether the folder has been on boarded for auto tracking */
		FolderOnboardingStatus: DevKit.WebApi.IntegerValue;
		/** Mailbox id associated with this record. */
		MailboxId: DevKit.WebApi.LookupValue;
		MailboxTrackingFolderId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the entry was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the record. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the folder mapping. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the folder mapping. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_accountleads: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_agreement: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_agreementdocument: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_agreementmappingtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_agreementtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_datamap: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_datamappingattachment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_datamapreverse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_integrationsettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_migratedrecord: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_recipient: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_templatedocument: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_templaterecipient: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_transactionperformance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_adobe_workflow_activity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_apisettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_attributeimageconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresource: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bookingstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_bulkoperationlog: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaign: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignactivityitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_characteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_childincidentcount: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_commitment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitor: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitoraddress: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitorproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_competitorsalesliterature: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_connectionreference: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_connector: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactinvoices: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactleads: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactorders: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contactquotes: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contract: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contractdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_contracttemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_customeropportunityrole: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_discount: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_discounttype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicproperty: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyassociation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlement: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementcontacts: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementproducts: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entitlementtemplateproducts: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entityanalyticsconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_entityimageconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_equipment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_flowsession: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incident: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_incidentresolution: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_invoice: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_invoicedetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_knowledgearticleincident: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_lead: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadaddress: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadcompetitors: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_list: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_listmember: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynsm_marketingsitemap: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynsm_salessitemap: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynsm_servicessitemap: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdynsm_settingssitemap: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_3dmodel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_accountpricelist: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_actual: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysisjob: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysisresult: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analytics: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analyticsadminsettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_analyticsforcs: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_approval: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_authenticationsettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_autocapturerule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_autocapturesettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_batchjob: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookableresourceassociation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingchange: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingjournal: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingrule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingsetupmetadata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_businessclosure: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_cannedmessage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_cdsentityengagementctx: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_channelcapability: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_chatansweroption: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_chatwidgetlanguage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ciprovider: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_clientextension: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_collabgraphresource: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_configuration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleapplicationtype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_consoleappparameterdefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contactpricelist: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contractlineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_contractlinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationaction: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationactionlocale: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_conversationdata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerasset: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_customerassetcategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataanalyticsreport: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataexport: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_delegation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dimension: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_dimensionfieldname: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entitlementapplication: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_entityroutingconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_estimate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_estimateline: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_expense: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_expensecategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_expensereceipt: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_facebookengagementctx: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fact: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldcomputation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicepricelistitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicesetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_fieldservicesystemjob: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_findworkevent: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_geofence: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_geofenceevent: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_geofencingsettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypeservicetask: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_integrationjob: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_integrationjobdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventoryjournal: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_invoicefrequency: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_invoicefrequencydetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevice: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicedatahistory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdeviceproperty: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotfieldmapping: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotpropertydefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotprovider: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotproviderinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iotsettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_iottocaseprocess: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_journal: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_journalline: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kpieventdata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_kpieventdefinition: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_livechatconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_livechatengagementctx: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_livechatwidgetlocation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_liveworkstream: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_localizedsurveyquestion: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_maskingrule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_mlresultcache: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_msteamssetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_msteamssettingsv2: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocbotchannelregistration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occhannelconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_occhannelstateconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocfbapplication: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocfbpage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_oclocalizationdata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocprovisioningstate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocrequest: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocruleitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsessioncharacteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsessionsentiment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_ocsystemmessage: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_oc_geolocationprovider: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_omnichannelconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_omnichannelpersonalization: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_omnichannelqueue: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_omnichannelsyncconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_operatinghour: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingdate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingsetup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_orderpricelist: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_organizationalunit: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_payment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_paymentdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_paymentmethod: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_paymentterm: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postalcode: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_presence: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_priority: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_processnotes: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_productinventory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_project: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectapproval: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectparameter: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectpricelist: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projecttask: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectteam: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_provider: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_questionsequence: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingincident: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingservice: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotebookingsetup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quoteinvoicingproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quoteinvoicingsetup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelineanalyticsbreakdown: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_quotepricelist: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementgroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementorganizationunit: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementrelationship: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_requirementstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourceassignment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourceassignmentdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcecategorymarkuppricelevel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcepaytype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcerequest: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcerequirement: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rma: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rmaproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rmasubstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_roleutilization: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_routingrequest: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rtvproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scenario: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_scheduleboardsetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_schedulingparameter: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_searchconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sentimentanalysis: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_servicetasktype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessiondata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessionevent: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessionparticipant: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sessionparticipantdata: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_shipvia: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_sikeyvalueconfig: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_skillattachmentruleitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_skillattachmenttarget: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_smsengagementctx: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_smsnumber: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_surveyquestion: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_taxcode: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_taxcodedetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_templatetags: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timeentry: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timeoffcalendar: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_timeoffrequest: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactioncategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactionconnection: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactionorigin: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transactiontype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_transcript: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_uniquenumber: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_userworkhistory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_visitorjourney: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workordersubstatus: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyn_workordertype: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_actioncallworkflow: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_agentscripttaskcategory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_answer: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_auditanddiagnosticssetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_configuration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_customizationfiles: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_entityassignment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_entitysearch: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_form: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_languagemodule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_scriptlet: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_scripttasktrigger: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_search: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_sessioninformation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_sessiontransfer: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_task: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_uiievent: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_usersettings: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msdyusd_windowroute: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_question: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mwns_mawenssolution: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_mwns_mawenssolutionsetting: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunityclose: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunitycompetitors: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunityproduct: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_opportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_orderclose: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_phonetocaseprocess: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_pricelevel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_product: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productassociation: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productpricelevel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productsalesliterature: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_productsubstitute: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quote: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quoteclose: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_quotedetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_ratingmodel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_ratingvalue: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resource: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcegroup: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcegroupexpansion: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_resourcespec: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesorder: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesorderdetail: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_salesprocessinstance: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_service: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_servicecontractcontacts: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_site: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topic: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topichistory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodel: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodelconfiguration: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_action: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_audit: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_context: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_hostedapplication: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_nonhostedapplication: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_option: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_savedsession: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_sessiontransfer: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_workflow: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_workflowstep: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uom: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_uomschedule: DevKit.WebApi.LookupValue;
		/** The regarding object such as Account, Contact, Lead etc. that the folder relates to. */
		regardingobjectid_workflowbinary: DevKit.WebApi.LookupValue;
		/** Version number of the mailbox tracking folder. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MailboxTrackingFolder {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}
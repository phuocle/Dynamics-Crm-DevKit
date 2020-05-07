//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAnnotation_Information {
		interface tab_general_Sections {
			account_information: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the note. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the note was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** File name of the note. */
			FileName: DevKit.Form.Controls.ControlString;
			/** File size of the note. */
			FileSize: DevKit.Form.Controls.ControlInteger;
			/** Specifies whether the note is an attachment. */
			IsDocument: DevKit.Form.Controls.ControlBoolean;
			/** Unique identifier of the user who last modified the note. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Date and time when the note was last modified. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			/** Text of the note. */
			NoteText: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the user or team who owns the note. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormAnnotation_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Annotation_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Annotation_Information */
		Body: LuckyMokey.FormAnnotation_Information.Body;
	}
	class AnnotationApi {
		/**
		* DynamicsCrm.DevKit AnnotationApi
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
		/** Unique identifier of the note. */
		AnnotationId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the note. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the note was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the annotation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Contents of the note's attachment. */
		DocumentBody: DevKit.WebApi.StringValue;
		/** File name of the note. */
		FileName: DevKit.WebApi.StringValue;
		/** File pointer of the attachment. */
		FilePointer: DevKit.WebApi.StringValueReadonly;
		/** File size of the note. */
		FileSize: DevKit.WebApi.IntegerValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Specifies whether the note is an attachment. */
		IsDocument: DevKit.WebApi.BooleanValue;
		IsPrivate: DevKit.WebApi.BooleanValueReadonly;
		/** Language identifier for the note. */
		LangId: DevKit.WebApi.StringValue;
		/** MIME type of the note's attachment. */
		MimeType: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the note. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the note was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the annotation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Text of the note. */
		NoteText: DevKit.WebApi.StringValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_adobe_agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_adobe_agreementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_adobe_integrationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_adobe_migratedrecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_adobe_templatedocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_adobe_templaterecipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_calendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		channelaccessprofile_annotations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_profileruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_commitment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_contractdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_duplicaterule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_emailserverprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_incidentresolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_3dmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_accountpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_actual: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_approval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_contactpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_customerasset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_dataexport: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_delegation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_estimate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_estimateline: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_expense: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_expensecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_expensereceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_fact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_fieldservicesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_findworkevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inventoryjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotdevice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_journal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_journalline: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_organizationalunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_payment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_paymentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_paymentmethod: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_paymentterm: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_postalcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_priority: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_processnotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_productinventory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_project: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectapproval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projecttask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectteam: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotebookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotebookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotepricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_requirementstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcepaytype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcerequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcerequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rma: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rmaproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rmasubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rtvproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_servicetasktype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_shipvia: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_solutioncomponentdatasource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_solutionhistorydatasource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_taxcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_taxcodedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_timeentry: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_timeoffrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactionconnection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactionorigin: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactiontype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transcript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_answer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_configuration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_customizationfiles: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_entityassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_entitysearch: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_form: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_languagemodule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_scriptlet: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_scripttasktrigger: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_search: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_sessioninformation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_uiievent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_windowroute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_opportunityclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_orderclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_quoteclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_resourcespec: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_service: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_sharepointdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_action: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_hostedapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_nonhostedapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_option: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_workflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_workflowstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the note is associated. */
		objectid_workflow: DevKit.WebApi.LookupValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the note. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the note. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the note. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Prefix of the file pointer in blob storage. */
		Prefix: DevKit.WebApi.StringValueReadonly;
		/** workflow step id associated with the note. */
		StepId: DevKit.WebApi.StringValue;
		/** Storage pointer. */
		StoragePointer: DevKit.WebApi.StringValueReadonly;
		/** Subject associated with the note. */
		Subject: DevKit.WebApi.StringValue;
		/** Version number of the note. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Annotation {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
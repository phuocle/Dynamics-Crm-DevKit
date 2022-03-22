//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAnnotation_Information {
		interface tab_general_Sections {
			account_information: DevKit.Controls.Section;
			attachment_information: DevKit.Controls.Section;
			content_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the note. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the note was created. */
			CreatedOn: DevKit.Controls.DateTime;
			filenameattachment: DevKit.Controls.ActionCards;
			/** File size of the note. */
			FileSize: DevKit.Controls.Integer;
			/** Specifies whether the note is an attachment. */
			IsDocument: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the note. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the note was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			notetext: DevKit.Controls.ActionCards;
			/** Unique identifier of the user or team who owns the note. */
			OwnerId: DevKit.Controls.Lookup;
			regardingobject: DevKit.Controls.ActionCards;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormAnnotation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Annotation_Information */
		Body: DevKit.FormAnnotation_Information.Body;
		/** The Process of form Annotation_Information */
		Process: DevKit.FormAnnotation_Information.Process;
		/** The SidePanes of form Annotation_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNote_Quick_Create_Form {
		interface tab_general_Sections {
			notes_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Text of the note. */
			NoteText: DevKit.Controls.String;
			/** Subject associated with the note. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormNote_Quick_Create_Form extends DevKit.IForm {
		/**
		* Note Quick Create Form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Note_Quick_Create_Form */
		Body: DevKit.FormNote_Quick_Create_Form.Body;
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
		/** Unique identifier of the note. */
		AnnotationId: string;
		/** Unique identifier of the user who created the note. */
		readonly CreatedBy: string;
		/** Date and time when the note was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the annotation. */
		readonly CreatedOnBehalfBy: string;
		/** Contents of the note's attachment. */
		DocumentBody: string;
		/** Dummy attribute associated with the note attachment */
		readonly DummyFileName: string;
		/** Dummy attribute associated with the note regarding */
		readonly DummyRegarding: string;
		/** File name of the note. */
		FileName: string;
		/** File pointer of the attachment. */
		readonly FilePointer: string;
		/** File size of the note. */
		readonly FileSize: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Specifies whether the note is an attachment. */
		IsDocument: boolean;
		readonly IsPrivate: boolean;
		/** Language identifier for the note. */
		LangId: string;
		/** MIME type of the note's attachment. */
		MimeType: string;
		/** Unique identifier of the user who last modified the note. */
		readonly ModifiedBy: string;
		/** Date and time when the note was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the annotation. */
		readonly ModifiedOnBehalfBy: string;
		/** Text of the note. */
		NoteText: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_account: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_appointment: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresource: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcebooking: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcebookingheader: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcecategoryassn: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcecharacteristic: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bookableresourcegroup: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_bulkoperation: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_calendar: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_campaign: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_campaignactivity: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_campaignresponse: string;
		/** Unique identifier of the object with which the note is associated. */
		channelaccessprofile_annotations: string;
		/** Unique identifier of the object with which the note is associated. */
		channelaccessprofileruleid: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_profileruleitem: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_chat: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_commitment: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_competitor: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_contact: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_contract: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_contractdetail: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_convertrule: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_duplicaterule: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_email: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_emailserverprofile: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_entitlement: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_entitlementchannel: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_entitlementtemplate: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_equipment: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_fax: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_goal: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_incident: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_incidentresolution: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_invoice: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_kbarticle: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_knowledgearticle: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_knowledgebaserecord: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_lead: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_letter: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_list: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_mailbox: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_3dmodel: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_accountpricelist: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_actual: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreement: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingdate: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingincident: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingservice: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_agreementsubstatus: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aifptrainingdocument: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aimodel: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_aiodimage: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_approval: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_approvalset: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingalert: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingalertstatus: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingjournal: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingrule: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_bookingtimestamp: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_characteristicreqforteammember: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_contactpricelist: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_customerasset: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_dataexport: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_delegation: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_estimate: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_estimateline: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_expense: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_expensecategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_expensereceipt: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_fact: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_fieldservicesetting: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_findworkevent: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttype: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttypeservice: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_incidenttypessetup: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inspectionattachment: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inventoryadjustment: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inventoryjournal: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_inventorytransfer: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_invoicelinetransaction: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotalert: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotdevice: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotdevicecategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotdevicecommand: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_journal: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_journalline: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_liveconversation: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_ocflaggedspam: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_ocsession: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitylineresourcecategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitylinetransaction: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitylinetransactioncategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitylinetransactionclassificatio: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_opportunitypricelist: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderlineresourcecategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderlinetransaction: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderlinetransactioncategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderlinetransactionclassification: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_orderpricelist: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_organizationalunit: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_overflowactionconfig: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_payment: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_paymentdetail: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_paymentmethod: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_paymentterm: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_personalsoundsetting: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_playbookinstance: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_playbooktemplate: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_postalbum: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_postalcode: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_priority: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_processnotes: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_productinventory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_project: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectapproval: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectparameter: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectparameterpricelist: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectpricelist: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projecttask: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projecttaskdependency: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projecttaskstatususer: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectteam: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projectteammembersignup: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_projecttransactioncategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorder: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorderbill: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorderproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotebookingincident: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotebookingproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotebookingservice: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotelineresourcecategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotelinetransaction: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotelinetransactioncategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotelinetransactionclassification: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_quotepricelist: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_requirementcharacteristic: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_requirementresourcecategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_requirementresourcepreference: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_requirementstatus: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcecategorypricelevel: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcepaytype: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcerequest: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcerequirement: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourcerequirementdetail: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_resourceterritory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rma: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rmaproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rmareceipt: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rmasubstatus: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rolecompetencyrequirement: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rtv: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rtvproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_rtvsubstatus: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_salessuggestion: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_servicetasktype: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_shipvia: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_soundfile: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_soundnotificationsetting: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_taxcode: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_taxcodedetail: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_timeentry: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_timegroup: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_timegroupdetail: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_timeoffrequest: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactioncategory: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactioncategoryclassification: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactioncategoryhierarchyelement: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactioncategorypricelevel: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactionconnection: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactionorigin: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transactiontype: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_transcript: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_warehouse: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workhourtemplate: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorder: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workordercharacteristic: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderincident: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderproduct: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderservice: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workorderservicetask: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyn_workordersubstatus: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_agentscriptaction: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_answer: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_configuration: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_customizationfiles: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_entityassignment: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_entitysearch: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_form: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_languagemodule: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_scriptlet: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_scripttasktrigger: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_search: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_sessioninformation: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_task: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_toolbarbutton: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_toolbarstrip: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_tracesourcesetting: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_uiievent: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msdyusd_windowroute: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msfp_alert: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msfp_question: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msfp_surveyinvite: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_msfp_surveyresponse: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_opportunity: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_opportunityclose: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_orderclose: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_phonecall: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_product: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_quote: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_quoteclose: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_recurringappointmentmaster: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_resourcespec: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_routingrule: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_routingruleitem: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_salesorder: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_service: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_serviceappointment: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_sharepointdocument: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_sla: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_socialactivity: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_task: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_action: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_hostedapplication: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_nonhostedapplication: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_option: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_workflow: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_workflowstep: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_uii_workflow_workflowstep_mapping: string;
		/** Unique identifier of the object with which the note is associated. */
		objectid_workflow: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the note. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the note. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the note. */
		readonly OwningUser: string;
		/** Prefix of the file pointer in blob storage. */
		readonly Prefix: string;
		/** workflow step id associated with the note. */
		StepId: string;
		/** Storage pointer. */
		readonly StoragePointer: string;
		/** Subject associated with the note. */
		Subject: string;
		/** Version number of the note. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace Annotation {
		enum ObjectTypeCode {
			/** 1 */
			Account,
			/** 4201 */
			Appointment,
			/** 4407 */
			Bulk_Import,
			/** 4003 */
			Calendar,
			/** 4400 */
			Campaign,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 112 */
			Case,
			/** 4206 */
			Case_Resolution,
			/** 4215 */
			Commitment,
			/** 123 */
			Competitor,
			/** 2 */
			Contact,
			/** 1010 */
			Contract,
			/** 1011 */
			Contract_Line,
			/** 4202 */
			Email,
			/** 4000 */
			FacilityEquipment,
			/** 4204 */
			Fax,
			/** 1090 */
			Invoice,
			/** 4 */
			Lead,
			/** 4207 */
			Letter,
			/** 4300 */
			Marketing_List,
			/** 3 */
			Opportunity,
			/** 4208 */
			Opportunity_Close,
			/** 1088 */
			Order,
			/** 4209 */
			Order_Close,
			/** 4210 */
			Phone_Call,
			/** 1024 */
			Product,
			/** 1084 */
			Quote,
			/** 4211 */
			Quote_Close,
			/** 4006 */
			Resource_Specification,
			/** 8181 */
			Routing_Rule,
			/** 8199 */
			Routing_Rule_Item,
			/** 4001 */
			Service,
			/** 4214 */
			Service_Activity,
			/** 4212 */
			Task
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
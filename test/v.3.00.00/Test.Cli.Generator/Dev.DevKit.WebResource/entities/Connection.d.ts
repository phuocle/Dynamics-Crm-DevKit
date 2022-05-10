//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConnection_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the source record. */
			Record1Id: DevKit.Controls.Lookup;
		}
		interface tab_details_Sections {
			connect_from: DevKit.Controls.Section;
			details: DevKit.Controls.Section;
		}
		interface tab_info_Sections {
			description: DevKit.Controls.Section;
			info_s: DevKit.Controls.Section;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_info extends DevKit.Controls.ITab {
			Section: tab_info_Sections;
		}
		interface Tabs {
			details: tab_details;
			info: tab_info;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the connection, such as the length or quality of the relationship. */
			Description: DevKit.Controls.String;
			/** Enter the end date of the connection. */
			EffectiveEnd: DevKit.Controls.Date;
			/** Enter the start date of the connection. */
			EffectiveStart: DevKit.Controls.Date;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the source record. */
			Record1Id: DevKit.Controls.Lookup;
			/** Choose the primary party's role or relationship with the second party. */
			Record1RoleId: DevKit.Controls.Lookup;
			/** Unique identifier of the target record. */
			Record2Id: DevKit.Controls.Lookup;
			/** Choose the secondary party's role or relationship with the primary party. */
			Record2RoleId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormConnection_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Connection_Information */
		Body: DevKit.FormConnection_Information.Body;
		/** The Footer section of form Connection_Information */
		Footer: DevKit.FormConnection_Information.Footer;
		/** The Header section of form Connection_Information */
		Header: DevKit.FormConnection_Information.Header;
		/** The Process of form Connection_Information */
		Process: DevKit.FormConnection_Information.Process;
		/** The SidePanes of form Connection_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ConnectionApi {
		/**
		* DynamicsCrm.DevKit ConnectionApi
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
		/** Unique identifier of the connection. */
		ConnectionId: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the connection, such as the length or quality of the relationship. */
		Description: string;
		/** Enter the end date of the connection. */
		EffectiveEnd_UtcDateOnly: Date;
		/** Enter the start date of the connection. */
		EffectiveStart_UtcDateOnly: Date;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Indicates that this is the master record. */
		readonly IsMaster: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the connection. */
		readonly Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the connection. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the connection. */
		readonly OwningUser: string;
		/** Unique identifier of the source record. */
		record1id_account: string;
		/** Unique identifier of the source record. */
		record1id_activitypointer: string;
		/** Unique identifier of the source record. */
		record1id_appointment: string;
		/** Unique identifier of the source record. */
		record1id_campaign: string;
		/** Unique identifier of the source record. */
		record1id_campaignactivity: string;
		/** Unique identifier of the source record. */
		profileruleid1: string;
		/** Unique identifier of the source record. */
		record1id_competitor: string;
		/** Unique identifier of the source record. */
		record1id_constraintbasedgroup: string;
		/** Unique identifier of the source record. */
		record1id_contact: string;
		/** Unique identifier of the source record. */
		record1id_contract: string;
		/** Unique identifier of the source record. */
		record1id_email: string;
		/** Unique identifier of the source record. */
		record1id_entitlement: string;
		/** Unique identifier of the source record. */
		record1id_entitlementchannel: string;
		/** Unique identifier of the source record. */
		record1id_entitlementtemplatechannel: string;
		/** Unique identifier of the source record. */
		record1id_equipment: string;
		/** Unique identifier of the source record. */
		record1id_fax: string;
		/** Unique identifier of the source record. */
		record1id_goal: string;
		/** Unique identifier of the source record. */
		record1id_incident: string;
		/** Unique identifier of the source record. */
		record1id_invoice: string;
		/** Unique identifier of the source record. */
		record1id_knowledgearticle: string;
		/** Unique identifier of the source record. */
		record1id_knowledgebaserecord: string;
		/** Unique identifier of the source record. */
		record1id_lead: string;
		/** Unique identifier of the source record. */
		record1id_letter: string;
		/** Unique identifier of the source record. */
		record1id_list: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreement: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingdate: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingincident: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingservice: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_approval: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_assignmentmap: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_assignmentrule: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_bookingalert: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_bookingalertstatus: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_bookingrule: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_bookingtimestamp: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_customerasset: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_incidenttypeservice: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_inventoryadjustment: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_inventoryjournal: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_inventorytransfer: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotalert: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotdevice: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotdevicecategory: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotdevicecommand: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_liveconversation: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_ocliveworkitem: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_ocsession: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_payment: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_paymentdetail: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_paymentmethod: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_paymentterm: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_postalbum: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_postalcode: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_processnotes: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_productinventory: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_project: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_projectteam: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorder: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorderbill: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorderproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_quotebookingincident: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_quotebookingproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_quotebookingservice: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_resourceterritory: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_rma: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_rmaproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_rmareceipt: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_rmasubstatus: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_rtv: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_rtvproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_rtvsubstatus: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_salessuggestion: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_sequence: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_sequencetarget: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_shipvia: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_taxcode: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_timegroup: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_timegroupdetail: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_timeoffrequest: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_warehouse: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorder: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_workordercharacteristic: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderincident: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderproduct: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderservice: string;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderservicetask: string;
		/** Unique identifier of the source record. */
		record1id_msdyusd_toolbarbutton: string;
		/** Unique identifier of the source record. */
		record1id_msfp_alert: string;
		/** Unique identifier of the source record. */
		record1id_msfp_surveyinvite: string;
		/** Unique identifier of the source record. */
		record1id_msfp_surveyresponse: string;
		/** Unique identifier of the source record. */
		record1id_opportunity: string;
		/** Unique identifier of the source record. */
		record1id_phonecall: string;
		/** Unique identifier of the source record. */
		record1id_position: string;
		/** Unique identifier of the source record. */
		record1id_pricelevel: string;
		/** Unique identifier of the source record. */
		record1id_processsession: string;
		/** Unique identifier of the source record. */
		record1id_product: string;
		/** Unique identifier of the source record. */
		record1id_quote: string;
		/** Unique identifier of the source record. */
		record1id_recurringappointmentmaster: string;
		/** Unique identifier of the source record. */
		record1id_resourcegroup: string;
		/** Unique identifier of the source record. */
		record1id_salesorder: string;
		/** Unique identifier of the source record. */
		record1id_serviceappointment: string;
		/** Unique identifier of the source record. */
		record1id_socialactivity: string;
		/** Unique identifier of the source record. */
		record1id_socialprofile: string;
		/** Unique identifier of the source record. */
		record1id_systemuser: string;
		/** Unique identifier of the source record. */
		record1id_task: string;
		/** Unique identifier of the source record. */
		record1id_team: string;
		/** Unique identifier of the source record. */
		record1id_territory: string;
		/** Unique identifier of the source record. */
		record1id_uii_option: string;
		/** Shows the record type of the source record. */
		readonly Record1ObjectTypeCode: OptionSet.Connection.Record1ObjectTypeCode;
		/** Choose the primary party's role or relationship with the second party. */
		Record1RoleId: string;
		/** Unique identifier of the target record. */
		record2id_account: string;
		/** Unique identifier of the target record. */
		record2id_activitypointer: string;
		/** Unique identifier of the target record. */
		record2id_appointment: string;
		/** Unique identifier of the target record. */
		record2id_campaign: string;
		/** Unique identifier of the target record. */
		record2id_campaignactivity: string;
		/** Unique identifier of the target record. */
		channelaccessprofileruleid: string;
		/** Unique identifier of the target record. */
		record2id_competitor: string;
		/** Unique identifier of the target record. */
		record2id_constraintbasedgroup: string;
		/** Unique identifier of the target record. */
		record2id_contact: string;
		/** Unique identifier of the target record. */
		record2id_contract: string;
		/** Unique identifier of the target record. */
		record2id_email: string;
		/** Unique identifier of the target record. */
		record2id_entitlement: string;
		/** Unique identifier of the target record. */
		record2id_entitlementchannel: string;
		/** Unique identifier of the target record. */
		record2id_entitlementtemplatechannel: string;
		/** Unique identifier of the target record. */
		record2id_equipment: string;
		/** Unique identifier of the target record. */
		record2id_fax: string;
		/** Unique identifier of the target record. */
		record2id_goal: string;
		/** Unique identifier of the target record. */
		record2id_incident: string;
		/** Unique identifier of the target record. */
		record2id_invoice: string;
		/** Unique identifier of the target record. */
		record2id_knowledgearticle: string;
		/** Unique identifier of the target record. */
		record2id_knowledgebaserecord: string;
		/** Unique identifier of the target record. */
		record2id_lead: string;
		/** Unique identifier of the target record. */
		record2id_letter: string;
		/** Unique identifier of the target record. */
		record2id_list: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreement: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingdate: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingincident: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingservice: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingservicetask: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingsetup: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementinvoicedate: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementinvoiceproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementinvoicesetup: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_approval: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_assignmentmap: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_assignmentrule: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_bookingalert: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_bookingalertstatus: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_bookingrule: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_bookingtimestamp: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_customerasset: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_incidenttypecharacteristic: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_incidenttypeproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_incidenttypeservice: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_inventoryadjustment: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_inventoryadjustmentproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_inventoryjournal: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_inventorytransfer: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotalert: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotdevice: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotdevicecategory: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotdevicecommand: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotdeviceregistrationhistory: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_liveconversation: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_ocliveworkitem: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_ocoutboundmessage: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_ocsession: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_payment: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_paymentdetail: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_paymentmethod: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_paymentterm: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_postalbum: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_postalcode: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_processnotes: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_productinventory: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_project: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_projectteam: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorder: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorderbill: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorderproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorderreceipt: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorderreceiptproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseordersubstatus: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_quotebookingincident: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_quotebookingproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_quotebookingservice: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_quotebookingservicetask: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_resourceterritory: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_rma: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_rmaproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_rmareceipt: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_rmareceiptproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_rmasubstatus: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_rtv: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_rtvproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_rtvsubstatus: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_salessuggestion: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_sequence: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_sequencetarget: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_shipvia: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_systemuserschedulersetting: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_taxcode: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_timegroup: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_timegroupdetail: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_timeoffrequest: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_warehouse: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorder: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_workordercharacteristic: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderincident: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderproduct: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderresourcerestriction: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderservice: string;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderservicetask: string;
		/** Unique identifier of the target record. */
		record2id_msdyusd_toolbarbutton: string;
		/** Unique identifier of the target record. */
		record2id_msfp_alert: string;
		/** Unique identifier of the target record. */
		record2id_msfp_surveyinvite: string;
		/** Unique identifier of the target record. */
		record2id_msfp_surveyresponse: string;
		/** Unique identifier of the target record. */
		record2id_opportunity: string;
		/** Unique identifier of the target record. */
		record2id_phonecall: string;
		/** Unique identifier of the target record. */
		record2id_position: string;
		/** Unique identifier of the target record. */
		record2id_pricelevel: string;
		/** Unique identifier of the target record. */
		record2id_processsession: string;
		/** Unique identifier of the target record. */
		record2id_product: string;
		/** Unique identifier of the target record. */
		record2id_quote: string;
		/** Unique identifier of the target record. */
		record2id_recurringappointmentmaster: string;
		/** Unique identifier of the target record. */
		record2id_resourcegroup: string;
		/** Unique identifier of the target record. */
		record2id_salesorder: string;
		/** Unique identifier of the target record. */
		record2id_serviceappointment: string;
		/** Unique identifier of the target record. */
		record2id_socialactivity: string;
		/** Unique identifier of the target record. */
		record2id_socialprofile: string;
		/** Unique identifier of the target record. */
		record2id_systemuser: string;
		/** Unique identifier of the target record. */
		record2id_task: string;
		/** Unique identifier of the target record. */
		record2id_team: string;
		/** Unique identifier of the target record. */
		record2id_territory: string;
		/** Unique identifier of the target record. */
		record2id_uii_option: string;
		/** Shows the record type of the target record. */
		readonly Record2ObjectTypeCode: OptionSet.Connection.Record2ObjectTypeCode;
		/** Choose the secondary party's role or relationship with the primary party. */
		Record2RoleId: string;
		/** Unique identifier for the reciprocal connection record. */
		readonly RelatedConnectionId: string;
		/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
		StateCode: OptionSet.Connection.StateCode;
		/** Reason for the status of the connection. */
		StatusCode: OptionSet.Connection.StatusCode;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** Version number of the connection. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the connection. */
			readonly ConnectionId: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the connection, such as the length or quality of the relationship. */
			readonly Description: string;
			/** Enter the end date of the connection. */
			readonly EffectiveEnd_UtcDateOnly: string;
			/** Enter the start date of the connection. */
			readonly EffectiveStart_UtcDateOnly: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Indicates that this is the master record. */
			readonly IsMaster: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the connection. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the connection. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the connection. */
			readonly OwningUser: string;
			/** Unique identifier of the source record. */
			readonly record1id_account: string;
			/** Unique identifier of the source record. */
			readonly record1id_activitypointer: string;
			/** Unique identifier of the source record. */
			readonly record1id_appointment: string;
			/** Unique identifier of the source record. */
			readonly record1id_campaign: string;
			/** Unique identifier of the source record. */
			readonly record1id_campaignactivity: string;
			/** Unique identifier of the source record. */
			readonly profileruleid1: string;
			/** Unique identifier of the source record. */
			readonly record1id_competitor: string;
			/** Unique identifier of the source record. */
			readonly record1id_constraintbasedgroup: string;
			/** Unique identifier of the source record. */
			readonly record1id_contact: string;
			/** Unique identifier of the source record. */
			readonly record1id_contract: string;
			/** Unique identifier of the source record. */
			readonly record1id_email: string;
			/** Unique identifier of the source record. */
			readonly record1id_entitlement: string;
			/** Unique identifier of the source record. */
			readonly record1id_entitlementchannel: string;
			/** Unique identifier of the source record. */
			readonly record1id_entitlementtemplatechannel: string;
			/** Unique identifier of the source record. */
			readonly record1id_equipment: string;
			/** Unique identifier of the source record. */
			readonly record1id_fax: string;
			/** Unique identifier of the source record. */
			readonly record1id_goal: string;
			/** Unique identifier of the source record. */
			readonly record1id_incident: string;
			/** Unique identifier of the source record. */
			readonly record1id_invoice: string;
			/** Unique identifier of the source record. */
			readonly record1id_knowledgearticle: string;
			/** Unique identifier of the source record. */
			readonly record1id_knowledgebaserecord: string;
			/** Unique identifier of the source record. */
			readonly record1id_lead: string;
			/** Unique identifier of the source record. */
			readonly record1id_letter: string;
			/** Unique identifier of the source record. */
			readonly record1id_list: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreement: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementbookingdate: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementbookingincident: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementbookingservice: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_approval: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_assignmentmap: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_assignmentrule: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_bookingalert: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_bookingalertstatus: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_bookingrule: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_bookingtimestamp: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_customerasset: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_incidenttypeservice: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_inventoryadjustment: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_inventoryjournal: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_inventorytransfer: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_iotalert: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_iotdevice: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_iotdevicecategory: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_iotdevicecommand: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_liveconversation: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_ocliveworkitem: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_ocsession: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_payment: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_paymentdetail: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_paymentmethod: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_paymentterm: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_postalbum: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_postalcode: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_processnotes: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_productinventory: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_project: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_projectteam: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_purchaseorder: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_purchaseorderbill: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_purchaseorderproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_quotebookingincident: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_quotebookingproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_quotebookingservice: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_resourceterritory: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_rma: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_rmaproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_rmareceipt: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_rmasubstatus: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_rtv: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_rtvproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_rtvsubstatus: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_salessuggestion: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_sequence: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_sequencetarget: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_shipvia: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_taxcode: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_timegroup: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_timegroupdetail: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_timeoffrequest: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_warehouse: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_workorder: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_workordercharacteristic: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_workorderincident: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_workorderproduct: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_workorderservice: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyn_workorderservicetask: string;
			/** Unique identifier of the source record. */
			readonly record1id_msdyusd_toolbarbutton: string;
			/** Unique identifier of the source record. */
			readonly record1id_msfp_alert: string;
			/** Unique identifier of the source record. */
			readonly record1id_msfp_surveyinvite: string;
			/** Unique identifier of the source record. */
			readonly record1id_msfp_surveyresponse: string;
			/** Unique identifier of the source record. */
			readonly record1id_opportunity: string;
			/** Unique identifier of the source record. */
			readonly record1id_phonecall: string;
			/** Unique identifier of the source record. */
			readonly record1id_position: string;
			/** Unique identifier of the source record. */
			readonly record1id_pricelevel: string;
			/** Unique identifier of the source record. */
			readonly record1id_processsession: string;
			/** Unique identifier of the source record. */
			readonly record1id_product: string;
			/** Unique identifier of the source record. */
			readonly record1id_quote: string;
			/** Unique identifier of the source record. */
			readonly record1id_recurringappointmentmaster: string;
			/** Unique identifier of the source record. */
			readonly record1id_resourcegroup: string;
			/** Unique identifier of the source record. */
			readonly record1id_salesorder: string;
			/** Unique identifier of the source record. */
			readonly record1id_serviceappointment: string;
			/** Unique identifier of the source record. */
			readonly record1id_socialactivity: string;
			/** Unique identifier of the source record. */
			readonly record1id_socialprofile: string;
			/** Unique identifier of the source record. */
			readonly record1id_systemuser: string;
			/** Unique identifier of the source record. */
			readonly record1id_task: string;
			/** Unique identifier of the source record. */
			readonly record1id_team: string;
			/** Unique identifier of the source record. */
			readonly record1id_territory: string;
			/** Unique identifier of the source record. */
			readonly record1id_uii_option: string;
			/** Shows the record type of the source record. */
			readonly Record1ObjectTypeCode: string;
			/** Choose the primary party's role or relationship with the second party. */
			readonly Record1RoleId: string;
			/** Unique identifier of the target record. */
			readonly record2id_account: string;
			/** Unique identifier of the target record. */
			readonly record2id_activitypointer: string;
			/** Unique identifier of the target record. */
			readonly record2id_appointment: string;
			/** Unique identifier of the target record. */
			readonly record2id_campaign: string;
			/** Unique identifier of the target record. */
			readonly record2id_campaignactivity: string;
			/** Unique identifier of the target record. */
			readonly channelaccessprofileruleid: string;
			/** Unique identifier of the target record. */
			readonly record2id_competitor: string;
			/** Unique identifier of the target record. */
			readonly record2id_constraintbasedgroup: string;
			/** Unique identifier of the target record. */
			readonly record2id_contact: string;
			/** Unique identifier of the target record. */
			readonly record2id_contract: string;
			/** Unique identifier of the target record. */
			readonly record2id_email: string;
			/** Unique identifier of the target record. */
			readonly record2id_entitlement: string;
			/** Unique identifier of the target record. */
			readonly record2id_entitlementchannel: string;
			/** Unique identifier of the target record. */
			readonly record2id_entitlementtemplatechannel: string;
			/** Unique identifier of the target record. */
			readonly record2id_equipment: string;
			/** Unique identifier of the target record. */
			readonly record2id_fax: string;
			/** Unique identifier of the target record. */
			readonly record2id_goal: string;
			/** Unique identifier of the target record. */
			readonly record2id_incident: string;
			/** Unique identifier of the target record. */
			readonly record2id_invoice: string;
			/** Unique identifier of the target record. */
			readonly record2id_knowledgearticle: string;
			/** Unique identifier of the target record. */
			readonly record2id_knowledgebaserecord: string;
			/** Unique identifier of the target record. */
			readonly record2id_lead: string;
			/** Unique identifier of the target record. */
			readonly record2id_letter: string;
			/** Unique identifier of the target record. */
			readonly record2id_list: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreement: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementbookingdate: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementbookingincident: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementbookingproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementbookingservice: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementbookingservicetask: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementbookingsetup: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementinvoicedate: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementinvoiceproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_agreementinvoicesetup: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_approval: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_assignmentmap: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_assignmentrule: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_bookingalert: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_bookingalertstatus: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_bookingrule: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_bookingtimestamp: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_customerasset: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_incidenttypecharacteristic: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_incidenttypeproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_incidenttypeservice: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_inventoryadjustment: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_inventoryadjustmentproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_inventoryjournal: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_inventorytransfer: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_iotalert: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_iotdevice: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_iotdevicecategory: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_iotdevicecommand: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_iotdeviceregistrationhistory: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_liveconversation: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_ocliveworkitem: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_ocoutboundmessage: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_ocsession: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_payment: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_paymentdetail: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_paymentmethod: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_paymentterm: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_postalbum: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_postalcode: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_processnotes: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_productinventory: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_project: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_projectteam: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_purchaseorder: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_purchaseorderbill: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_purchaseorderproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_purchaseorderreceipt: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_purchaseorderreceiptproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_purchaseordersubstatus: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_quotebookingincident: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_quotebookingproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_quotebookingservice: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_quotebookingservicetask: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_resourceterritory: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_rma: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_rmaproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_rmareceipt: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_rmareceiptproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_rmasubstatus: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_rtv: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_rtvproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_rtvsubstatus: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_salessuggestion: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_sequence: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_sequencetarget: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_shipvia: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_systemuserschedulersetting: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_taxcode: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_timegroup: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_timegroupdetail: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_timeoffrequest: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_warehouse: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_workorder: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_workordercharacteristic: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_workorderincident: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_workorderproduct: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_workorderresourcerestriction: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_workorderservice: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyn_workorderservicetask: string;
			/** Unique identifier of the target record. */
			readonly record2id_msdyusd_toolbarbutton: string;
			/** Unique identifier of the target record. */
			readonly record2id_msfp_alert: string;
			/** Unique identifier of the target record. */
			readonly record2id_msfp_surveyinvite: string;
			/** Unique identifier of the target record. */
			readonly record2id_msfp_surveyresponse: string;
			/** Unique identifier of the target record. */
			readonly record2id_opportunity: string;
			/** Unique identifier of the target record. */
			readonly record2id_phonecall: string;
			/** Unique identifier of the target record. */
			readonly record2id_position: string;
			/** Unique identifier of the target record. */
			readonly record2id_pricelevel: string;
			/** Unique identifier of the target record. */
			readonly record2id_processsession: string;
			/** Unique identifier of the target record. */
			readonly record2id_product: string;
			/** Unique identifier of the target record. */
			readonly record2id_quote: string;
			/** Unique identifier of the target record. */
			readonly record2id_recurringappointmentmaster: string;
			/** Unique identifier of the target record. */
			readonly record2id_resourcegroup: string;
			/** Unique identifier of the target record. */
			readonly record2id_salesorder: string;
			/** Unique identifier of the target record. */
			readonly record2id_serviceappointment: string;
			/** Unique identifier of the target record. */
			readonly record2id_socialactivity: string;
			/** Unique identifier of the target record. */
			readonly record2id_socialprofile: string;
			/** Unique identifier of the target record. */
			readonly record2id_systemuser: string;
			/** Unique identifier of the target record. */
			readonly record2id_task: string;
			/** Unique identifier of the target record. */
			readonly record2id_team: string;
			/** Unique identifier of the target record. */
			readonly record2id_territory: string;
			/** Unique identifier of the target record. */
			readonly record2id_uii_option: string;
			/** Shows the record type of the target record. */
			readonly Record2ObjectTypeCode: string;
			/** Choose the secondary party's role or relationship with the primary party. */
			readonly Record2RoleId: string;
			/** Unique identifier for the reciprocal connection record. */
			readonly RelatedConnectionId: string;
			/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
			readonly StateCode: string;
			/** Reason for the status of the connection. */
			readonly StatusCode: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Version number of the connection. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Connection {
		enum OwnerIdType {
		}
		enum Record1IdObjectTypeCode {
		}
		enum Record1ObjectTypeCode {
			/** 1 */
			Account,
			/** 4200 */
			Activity,
			/** 10579 */
			Agreement,
			/** 10580 */
			Agreement_Booking_Date,
			/** 10581 */
			Agreement_Booking_Incident,
			/** 10582 */
			Agreement_Booking_Product,
			/** 10583 */
			Agreement_Booking_Service,
			/** 10584 */
			Agreement_Booking_Service_Task,
			/** 10585 */
			Agreement_Booking_Setup,
			/** 10586 */
			Agreement_Invoice_Date,
			/** 10587 */
			Agreement_Invoice_Product,
			/** 10588 */
			Agreement_Invoice_Setup,
			/** 4201 */
			Appointment,
			/** 10300 */
			Assignment_Map,
			/** 10297 */
			Assignment_Rule,
			/** 10473 */
			Booking_Alert,
			/** 10474 */
			Booking_Alert_Status,
			/** 10476 */
			Booking_Rule,
			/** 10591 */
			Booking_Timestamp,
			/** 4400 */
			Campaign,
			/** 4402 */
			Campaign_Activity,
			/** 112 */
			Case,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 123 */
			Competitor,
			/** 2 */
			Contact,
			/** 1010 */
			Contract,
			/** 10743 */
			Conversation,
			/** 10151 */
			Customer_Asset,
			/** 10330 */
			Customer_Voice_alert,
			/** 10340 */
			Customer_Voice_survey_invite,
			/** 10342 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 9700 */
			Entitlement,
			/** 9701 */
			Entitlement_Channel,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 4000 */
			FacilityEquipment,
			/** 4204 */
			Fax,
			/** 10484 */
			Fulfillment_Preference,
			/** 9600 */
			Goal,
			/** 10602 */
			Incident_Type_Characteristic,
			/** 10603 */
			Incident_Type_Product,
			/** 10604 */
			Incident_Type_Service,
			/** 10608 */
			Inventory_Adjustment,
			/** 10609 */
			Inventory_Adjustment_Product,
			/** 10610 */
			Inventory_Journal,
			/** 10611 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10165 */
			IoT_Alert,
			/** 10166 */
			IoT_Device,
			/** 10167 */
			IoT_Device_Category,
			/** 10168 */
			IoT_Device_Command,
			/** 10172 */
			IoT_Device_Registration_History,
			/** 9953 */
			Knowledge_Article,
			/** 9930 */
			Knowledge_Base_Record,
			/** 4 */
			Lead,
			/** 4207 */
			Letter,
			/** 4300 */
			Marketing_List,
			/** 10733 */
			Ongoing_conversation_Deprecated,
			/** 3 */
			Opportunity,
			/** 10916 */
			Option,
			/** 1088 */
			Order,
			/** 10857 */
			Outbound_message,
			/** 10616 */
			Payment,
			/** 10617 */
			Payment_Detail,
			/** 10618 */
			Payment_Method,
			/** 10619 */
			Payment_Term,
			/** 4210 */
			Phone_Call,
			/** 50 */
			Position,
			/** 10620 */
			Postal_Code,
			/** 1022 */
			Price_List,
			/** 10527 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 1024 */
			Product,
			/** 10621 */
			Product_Inventory,
			/** 10325 */
			Profile_Album,
			/** 10528 */
			Project,
			/** 10489 */
			Project_Service_Approval,
			/** 10536 */
			Project_Team_Member,
			/** 10622 */
			Purchase_Order,
			/** 10623 */
			Purchase_Order_Bill,
			/** 10624 */
			Purchase_Order_Product,
			/** 10625 */
			Purchase_Order_Receipt,
			/** 10626 */
			Purchase_Order_Receipt_Product,
			/** 10627 */
			Purchase_Order_SubStatus,
			/** 1084 */
			Quote,
			/** 10628 */
			Quote_Booking_Incident,
			/** 10629 */
			Quote_Booking_Product,
			/** 10630 */
			Quote_Booking_Service,
			/** 10631 */
			Quote_Booking_Service_Task,
			/** 4251 */
			Recurring_Appointment,
			/** 4007 */
			Resource_Group,
			/** 10656 */
			Resource_Restriction_Deprecated,
			/** 10480 */
			Resource_Territory,
			/** 10636 */
			RMA,
			/** 10637 */
			RMA_Product,
			/** 10638 */
			RMA_Receipt,
			/** 10639 */
			RMA_Receipt_Product,
			/** 10640 */
			RMA_SubStatus,
			/** 10641 */
			RTV,
			/** 10642 */
			RTV_Product,
			/** 10643 */
			RTV_Substatus,
			/** 4005 */
			Scheduling_Group,
			/** 10289 */
			Sequence,
			/** 10291 */
			Sequence_Target,
			/** 4214 */
			Service_Activity,
			/** 10760 */
			Session,
			/** 10645 */
			Ship_Via,
			/** 4216 */
			Social_Activity,
			/** 99 */
			Social_Profile,
			/** 10306 */
			Suggestion,
			/** 10483 */
			System_User_Scheduler_Setting,
			/** 4212 */
			Task,
			/** 10646 */
			Tax_Code,
			/** 9 */
			Team,
			/** 2013 */
			Territory,
			/** 10485 */
			Time_Group_Detail,
			/** 10648 */
			Time_Off_Request,
			/** 10952 */
			Toolbar_Button,
			/** 8 */
			User,
			/** 10650 */
			Warehouse,
			/** 10651 */
			Work_Order,
			/** 10652 */
			Work_Order_Characteristic_Deprecated,
			/** 10654 */
			Work_Order_Incident,
			/** 10655 */
			Work_Order_Product,
			/** 10657 */
			Work_Order_Service,
			/** 10658 */
			Work_Order_Service_Task
		}
		enum Record2IdObjectTypeCode {
		}
		enum Record2ObjectTypeCode {
			/** 1 */
			Account,
			/** 4200 */
			Activity,
			/** 10579 */
			Agreement,
			/** 10580 */
			Agreement_Booking_Date,
			/** 10581 */
			Agreement_Booking_Incident,
			/** 10582 */
			Agreement_Booking_Product,
			/** 10583 */
			Agreement_Booking_Service,
			/** 10584 */
			Agreement_Booking_Service_Task,
			/** 10585 */
			Agreement_Booking_Setup,
			/** 10586 */
			Agreement_Invoice_Date,
			/** 10587 */
			Agreement_Invoice_Product,
			/** 10588 */
			Agreement_Invoice_Setup,
			/** 4201 */
			Appointment,
			/** 10300 */
			Assignment_Map,
			/** 10297 */
			Assignment_Rule,
			/** 10473 */
			Booking_Alert,
			/** 10474 */
			Booking_Alert_Status,
			/** 10476 */
			Booking_Rule,
			/** 10591 */
			Booking_Timestamp,
			/** 4400 */
			Campaign,
			/** 4402 */
			Campaign_Activity,
			/** 112 */
			Case,
			/** 9400 */
			Channel_Access_Profile_Rule,
			/** 123 */
			Competitor,
			/** 2 */
			Contact,
			/** 1010 */
			Contract,
			/** 10743 */
			Conversation,
			/** 10151 */
			Customer_Asset,
			/** 10330 */
			Customer_Voice_alert,
			/** 10340 */
			Customer_Voice_survey_invite,
			/** 10342 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 9700 */
			Entitlement,
			/** 9701 */
			Entitlement_Channel,
			/** 9703 */
			Entitlement_Template_Channel,
			/** 4000 */
			FacilityEquipment,
			/** 4204 */
			Fax,
			/** 10484 */
			Fulfillment_Preference,
			/** 9600 */
			Goal,
			/** 10602 */
			Incident_Type_Characteristic,
			/** 10603 */
			Incident_Type_Product,
			/** 10604 */
			Incident_Type_Service,
			/** 10608 */
			Inventory_Adjustment,
			/** 10609 */
			Inventory_Adjustment_Product,
			/** 10610 */
			Inventory_Journal,
			/** 10611 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10165 */
			IoT_Alert,
			/** 10166 */
			IoT_Device,
			/** 10167 */
			IoT_Device_Category,
			/** 10168 */
			IoT_Device_Command,
			/** 10172 */
			IoT_Device_Registration_History,
			/** 9953 */
			Knowledge_Article,
			/** 9930 */
			Knowledge_Base_Record,
			/** 4 */
			Lead,
			/** 4207 */
			Letter,
			/** 4300 */
			Marketing_List,
			/** 10733 */
			Ongoing_conversation_Deprecated,
			/** 3 */
			Opportunity,
			/** 10916 */
			Option,
			/** 1088 */
			Order,
			/** 10857 */
			Outbound_message,
			/** 10616 */
			Payment,
			/** 10617 */
			Payment_Detail,
			/** 10618 */
			Payment_Method,
			/** 10619 */
			Payment_Term,
			/** 4210 */
			Phone_Call,
			/** 50 */
			Position,
			/** 10620 */
			Postal_Code,
			/** 1022 */
			Price_List,
			/** 10527 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 1024 */
			Product,
			/** 10621 */
			Product_Inventory,
			/** 10325 */
			Profile_Album,
			/** 10528 */
			Project,
			/** 10489 */
			Project_Service_Approval,
			/** 10536 */
			Project_Team_Member,
			/** 10622 */
			Purchase_Order,
			/** 10623 */
			Purchase_Order_Bill,
			/** 10624 */
			Purchase_Order_Product,
			/** 10625 */
			Purchase_Order_Receipt,
			/** 10626 */
			Purchase_Order_Receipt_Product,
			/** 10627 */
			Purchase_Order_SubStatus,
			/** 1084 */
			Quote,
			/** 10628 */
			Quote_Booking_Incident,
			/** 10629 */
			Quote_Booking_Product,
			/** 10630 */
			Quote_Booking_Service,
			/** 10631 */
			Quote_Booking_Service_Task,
			/** 4251 */
			Recurring_Appointment,
			/** 4007 */
			Resource_Group,
			/** 10656 */
			Resource_Restriction_Deprecated,
			/** 10480 */
			Resource_Territory,
			/** 10636 */
			RMA,
			/** 10637 */
			RMA_Product,
			/** 10638 */
			RMA_Receipt,
			/** 10639 */
			RMA_Receipt_Product,
			/** 10640 */
			RMA_SubStatus,
			/** 10641 */
			RTV,
			/** 10642 */
			RTV_Product,
			/** 10643 */
			RTV_Substatus,
			/** 4005 */
			Scheduling_Group,
			/** 10289 */
			Sequence,
			/** 10291 */
			Sequence_Target,
			/** 4214 */
			Service_Activity,
			/** 10760 */
			Session,
			/** 10645 */
			Ship_Via,
			/** 4216 */
			Social_Activity,
			/** 99 */
			Social_Profile,
			/** 10306 */
			Suggestion,
			/** 10483 */
			System_User_Scheduler_Setting,
			/** 4212 */
			Task,
			/** 10646 */
			Tax_Code,
			/** 9 */
			Team,
			/** 2013 */
			Territory,
			/** 10485 */
			Time_Group_Detail,
			/** 10648 */
			Time_Off_Request,
			/** 10952 */
			Toolbar_Button,
			/** 8 */
			User,
			/** 10650 */
			Warehouse,
			/** 10651 */
			Work_Order,
			/** 10652 */
			Work_Order_Characteristic_Deprecated,
			/** 10654 */
			Work_Order_Incident,
			/** 10655 */
			Work_Order_Product,
			/** 10657 */
			Work_Order_Service,
			/** 10658 */
			Work_Order_Service_Task
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}
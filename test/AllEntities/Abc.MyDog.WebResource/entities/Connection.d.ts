//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormConnection_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the source record. */
			Record1Id: DevKit.Controls.Lookup;
		}
		interface tab_info_Sections {
			info_s: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			connect_from: DevKit.Controls.Section;
			details: DevKit.Controls.Section;
		}
		interface tab_info extends DevKit.Controls.ITab {
			Section: tab_info_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface Tabs {
			info: tab_info;
			details: tab_details;
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
	}
	class FormConnection_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Connection_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Connection_Information */
		Body: MyDog.FormConnection_Information.Body;
		/** The Footer section of form Connection_Information */
		Footer: MyDog.FormConnection_Information.Footer;
		/** The Header section of form Connection_Information */
		Header: MyDog.FormConnection_Information.Header;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the connection. */
		ConnectionId: DevKit.WebApi.GuidValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the connection, such as the length or quality of the relationship. */
		Description: DevKit.WebApi.StringValue;
		/** Enter the end date of the connection. */
		EffectiveEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the start date of the connection. */
		EffectiveStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** The default image for the entity. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Indicates that this is the master record. */
		IsMaster: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the connection. */
		Name: DevKit.WebApi.StringValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the connection. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the connection. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the source record. */
		record1id_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		profileruleid1: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_approval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_bookingalertstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_bookingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_customerasset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_incidenttypeservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_inventoryjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotdevice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotdevicecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotdevicecommand: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_ocoutboundmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_payment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_paymentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_paymentmethod: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_paymentterm: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_postalcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_processnotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_productinventory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_project: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_projectteam: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorderbill: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_quotebookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_quotebookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_quotebookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_rma: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_rmaproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_rmasubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_rtvproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_rtvsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_shipvia: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_taxcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_timeoffrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_workordercharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msdyusd_toolbarbutton: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msfp_alert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		record1id_uii_option: DevKit.WebApi.LookupValue;
		/** Shows the record type of the source record. */
		Record1ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Choose the primary party's role or relationship with the second party. */
		Record1RoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_approval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_bookingalertstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_bookingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_customerasset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_incidenttypeservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_inventoryjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotdevice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotdevicecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotdevicecommand: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_ocoutboundmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_payment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_paymentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_paymentmethod: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_paymentterm: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_postalcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_processnotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_productinventory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_project: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_projectteam: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorderbill: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_quotebookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_quotebookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_quotebookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_rma: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_rmaproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_rmasubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_rtvproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_rtvsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_shipvia: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_taxcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_timeoffrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_workordercharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msdyusd_toolbarbutton: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msfp_alert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the target record. */
		record2id_uii_option: DevKit.WebApi.LookupValue;
		/** Shows the record type of the target record. */
		Record2ObjectTypeCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Choose the secondary party's role or relationship with the primary party. */
		Record2RoleId: DevKit.WebApi.LookupValue;
		/** Unique identifier for the reciprocal connection record. */
		RelatedConnectionId: DevKit.WebApi.LookupValueReadonly;
		/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the connection. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Version number of the connection. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Connection {
		enum Record1ObjectTypeCode {
			/** 1 */
			Account,
			/** 4200 */
			Activity,
			/** 10353 */
			Agreement,
			/** 10354 */
			Agreement_Booking_Date,
			/** 10355 */
			Agreement_Booking_Incident,
			/** 10356 */
			Agreement_Booking_Product,
			/** 10357 */
			Agreement_Booking_Service,
			/** 10358 */
			Agreement_Booking_Service_Task,
			/** 10359 */
			Agreement_Booking_Setup,
			/** 10360 */
			Agreement_Invoice_Date,
			/** 10361 */
			Agreement_Invoice_Product,
			/** 10362 */
			Agreement_Invoice_Setup,
			/** 4201 */
			Appointment,
			/** 10235 */
			Booking_Alert,
			/** 10236 */
			Booking_Alert_Status,
			/** 10238 */
			Booking_Rule,
			/** 10365 */
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
			/** 10480 */
			Conversation,
			/** 10095 */
			Customer_Asset,
			/** 10216 */
			Customer_Voice_alert,
			/** 10225 */
			Customer_Voice_survey_invite,
			/** 10227 */
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
			/** 10258 */
			Fulfillment_Preference,
			/** 9600 */
			Goal,
			/** 10376 */
			Incident_Type_Characteristic,
			/** 10377 */
			Incident_Type_Product,
			/** 10378 */
			Incident_Type_Service,
			/** 10382 */
			Inventory_Adjustment,
			/** 10383 */
			Inventory_Adjustment_Product,
			/** 10384 */
			Inventory_Journal,
			/** 10385 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10105 */
			IoT_Alert,
			/** 10106 */
			IoT_Device,
			/** 10107 */
			IoT_Device_Category,
			/** 10108 */
			IoT_Device_Command,
			/** 10112 */
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
			/** 10474 */
			Ongoing_conversation_Deprecated,
			/** 3 */
			Opportunity,
			/** 10572 */
			Option,
			/** 1088 */
			Order,
			/** 10566 */
			Outbound_message,
			/** 10390 */
			Payment,
			/** 10391 */
			Payment_Detail,
			/** 10392 */
			Payment_Method,
			/** 10393 */
			Payment_Term,
			/** 4210 */
			Phone_Call,
			/** 50 */
			Position,
			/** 10394 */
			Postal_Code,
			/** 1022 */
			Price_List,
			/** 10303 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 1024 */
			Product,
			/** 10395 */
			Product_Inventory,
			/** 10211 */
			Profile_Album,
			/** 10304 */
			Project,
			/** 10265 */
			Project_Service_Approval,
			/** 10312 */
			Project_Team_Member,
			/** 10396 */
			Purchase_Order,
			/** 10397 */
			Purchase_Order_Bill,
			/** 10398 */
			Purchase_Order_Product,
			/** 10399 */
			Purchase_Order_Receipt,
			/** 10400 */
			Purchase_Order_Receipt_Product,
			/** 10401 */
			Purchase_Order_SubStatus,
			/** 1084 */
			Quote,
			/** 10402 */
			Quote_Booking_Incident,
			/** 10403 */
			Quote_Booking_Product,
			/** 10404 */
			Quote_Booking_Service,
			/** 10405 */
			Quote_Booking_Service_Task,
			/** 4251 */
			Recurring_Appointment,
			/** 4007 */
			Resource_Group,
			/** 10430 */
			Resource_Restriction_Deprecated,
			/** 10254 */
			Resource_Territory,
			/** 10410 */
			RMA,
			/** 10411 */
			RMA_Product,
			/** 10412 */
			RMA_Receipt,
			/** 10413 */
			RMA_Receipt_Product,
			/** 10414 */
			RMA_SubStatus,
			/** 10415 */
			RTV,
			/** 10416 */
			RTV_Product,
			/** 10417 */
			RTV_Substatus,
			/** 4005 */
			Scheduling_Group,
			/** 4214 */
			Service_Activity,
			/** 10489 */
			Session,
			/** 10419 */
			Ship_Via,
			/** 4216 */
			Social_Activity,
			/** 99 */
			Social_Profile,
			/** 10257 */
			System_User_Scheduler_Setting,
			/** 4212 */
			Task,
			/** 10420 */
			Tax_Code,
			/** 9 */
			Team,
			/** 2013 */
			Territory,
			/** 10259 */
			Time_Group_Detail,
			/** 10422 */
			Time_Off_Request,
			/** 10595 */
			Toolbar_Button,
			/** 8 */
			User,
			/** 10424 */
			Warehouse,
			/** 10425 */
			Work_Order,
			/** 10426 */
			Work_Order_Characteristic_Deprecated,
			/** 10428 */
			Work_Order_Incident,
			/** 10429 */
			Work_Order_Product,
			/** 10431 */
			Work_Order_Service,
			/** 10432 */
			Work_Order_Service_Task
		}
		enum Record2ObjectTypeCode {
			/** 1 */
			Account,
			/** 4200 */
			Activity,
			/** 10353 */
			Agreement,
			/** 10354 */
			Agreement_Booking_Date,
			/** 10355 */
			Agreement_Booking_Incident,
			/** 10356 */
			Agreement_Booking_Product,
			/** 10357 */
			Agreement_Booking_Service,
			/** 10358 */
			Agreement_Booking_Service_Task,
			/** 10359 */
			Agreement_Booking_Setup,
			/** 10360 */
			Agreement_Invoice_Date,
			/** 10361 */
			Agreement_Invoice_Product,
			/** 10362 */
			Agreement_Invoice_Setup,
			/** 4201 */
			Appointment,
			/** 10235 */
			Booking_Alert,
			/** 10236 */
			Booking_Alert_Status,
			/** 10238 */
			Booking_Rule,
			/** 10365 */
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
			/** 10480 */
			Conversation,
			/** 10095 */
			Customer_Asset,
			/** 10216 */
			Customer_Voice_alert,
			/** 10225 */
			Customer_Voice_survey_invite,
			/** 10227 */
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
			/** 10258 */
			Fulfillment_Preference,
			/** 9600 */
			Goal,
			/** 10376 */
			Incident_Type_Characteristic,
			/** 10377 */
			Incident_Type_Product,
			/** 10378 */
			Incident_Type_Service,
			/** 10382 */
			Inventory_Adjustment,
			/** 10383 */
			Inventory_Adjustment_Product,
			/** 10384 */
			Inventory_Journal,
			/** 10385 */
			Inventory_Transfer,
			/** 1090 */
			Invoice,
			/** 10105 */
			IoT_Alert,
			/** 10106 */
			IoT_Device,
			/** 10107 */
			IoT_Device_Category,
			/** 10108 */
			IoT_Device_Command,
			/** 10112 */
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
			/** 10474 */
			Ongoing_conversation_Deprecated,
			/** 3 */
			Opportunity,
			/** 10572 */
			Option,
			/** 1088 */
			Order,
			/** 10566 */
			Outbound_message,
			/** 10390 */
			Payment,
			/** 10391 */
			Payment_Detail,
			/** 10392 */
			Payment_Method,
			/** 10393 */
			Payment_Term,
			/** 4210 */
			Phone_Call,
			/** 50 */
			Position,
			/** 10394 */
			Postal_Code,
			/** 1022 */
			Price_List,
			/** 10303 */
			Process_Notes,
			/** 4710 */
			Process_Session,
			/** 1024 */
			Product,
			/** 10395 */
			Product_Inventory,
			/** 10211 */
			Profile_Album,
			/** 10304 */
			Project,
			/** 10265 */
			Project_Service_Approval,
			/** 10312 */
			Project_Team_Member,
			/** 10396 */
			Purchase_Order,
			/** 10397 */
			Purchase_Order_Bill,
			/** 10398 */
			Purchase_Order_Product,
			/** 10399 */
			Purchase_Order_Receipt,
			/** 10400 */
			Purchase_Order_Receipt_Product,
			/** 10401 */
			Purchase_Order_SubStatus,
			/** 1084 */
			Quote,
			/** 10402 */
			Quote_Booking_Incident,
			/** 10403 */
			Quote_Booking_Product,
			/** 10404 */
			Quote_Booking_Service,
			/** 10405 */
			Quote_Booking_Service_Task,
			/** 4251 */
			Recurring_Appointment,
			/** 4007 */
			Resource_Group,
			/** 10430 */
			Resource_Restriction_Deprecated,
			/** 10254 */
			Resource_Territory,
			/** 10410 */
			RMA,
			/** 10411 */
			RMA_Product,
			/** 10412 */
			RMA_Receipt,
			/** 10413 */
			RMA_Receipt_Product,
			/** 10414 */
			RMA_SubStatus,
			/** 10415 */
			RTV,
			/** 10416 */
			RTV_Product,
			/** 10417 */
			RTV_Substatus,
			/** 4005 */
			Scheduling_Group,
			/** 4214 */
			Service_Activity,
			/** 10489 */
			Session,
			/** 10419 */
			Ship_Via,
			/** 4216 */
			Social_Activity,
			/** 99 */
			Social_Profile,
			/** 10257 */
			System_User_Scheduler_Setting,
			/** 4212 */
			Task,
			/** 10420 */
			Tax_Code,
			/** 9 */
			Team,
			/** 2013 */
			Territory,
			/** 10259 */
			Time_Group_Detail,
			/** 10422 */
			Time_Off_Request,
			/** 10595 */
			Toolbar_Button,
			/** 8 */
			User,
			/** 10424 */
			Warehouse,
			/** 10425 */
			Work_Order,
			/** 10426 */
			Work_Order_Characteristic_Deprecated,
			/** 10428 */
			Work_Order_Incident,
			/** 10429 */
			Work_Order_Product,
			/** 10431 */
			Work_Order_Service,
			/** 10432 */
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
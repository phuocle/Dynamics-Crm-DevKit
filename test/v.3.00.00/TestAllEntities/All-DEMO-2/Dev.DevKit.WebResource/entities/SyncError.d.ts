//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSync_Error {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the sync error. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the sync error status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab_Details_Sections {
		}
		interface tab_General_Tab_Sections {
			SYNCERROR_INFORMATION: DevKit.Controls.Section;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_General_Tab extends DevKit.Controls.ITab {
			Section: tab_General_Tab_Sections;
		}
		interface Tabs {
			Details: tab_Details;
			General_Tab: tab_General_Tab;
		}
		interface Body {
			Tab: Tabs;
			/** Action Name for which sync error has occurred */
			Action: DevKit.Controls.String;
			/** Enter a short description of the sync error. */
			Description: DevKit.Controls.String;
			/** Displays the error code. */
			ErrorCode: DevKit.Controls.String;
			/** Error description from the exception */
			ErrorDetail: DevKit.Controls.String;
			/** Error Message of the exception */
			ErrorMessage: DevKit.Controls.String;
			/** Date and time when the upsync request was executed on CRM server */
			ErrorTime: DevKit.Controls.DateTime;
			/** Select the preferred error type. */
			ErrorType: DevKit.Controls.OptionSet;
			/** Entity name of the record for which sync error has occurred */
			Name: DevKit.Controls.String;
			/** Choose the record that the sync error relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
	}
	class FormSync_Error extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Sync_Error
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Sync_Error */
		Body: DevKit.FormSync_Error.Body;
		/** The Header section of form Sync_Error */
		Header: DevKit.FormSync_Error.Header;
	}
	class SyncErrorApi {
		/**
		* DynamicsCrm.DevKit SyncErrorApi
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
		/** Action Name for which sync error has occurred */
		Action: DevKit.WebApi.StringValue;
		/** Show the action data */
		ActionData: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the sync error. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the sync Error was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sync error. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter a short description of the sync error. */
		Description: DevKit.WebApi.StringValue;
		/** Displays the error code. */
		ErrorCode: DevKit.WebApi.StringValue;
		/** Error description from the exception */
		ErrorDetail: DevKit.WebApi.StringValue;
		/** Error Message of the exception */
		ErrorMessage: DevKit.WebApi.StringValue;
		/** Date and time when the upsync request was executed on CRM server */
		ErrorTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Select the preferred error type. */
		ErrorType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who last modified the sync error. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the sync error was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sync error. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Entity name of the record for which sync error has occurred */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Business unit that owns the sync error. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the sync error. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the sync error. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activityfileattachment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activitymimeattachment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activitymonitor: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activityparty_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_annotation_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appelement: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_applicationuser: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appmodulecomponentedge: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appmodulecomponentnode: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appnotification: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appointment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appusersetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attachment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attributeimageconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresource_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebooking_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebookingheader_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecategory_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecategoryassn_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecharacteristic_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcegroup_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookingstatus_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bot: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_botcomponent: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkoperation_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkoperationlog: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_businessdatalocalizedlabel_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_businessunit_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaign_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaignactivity_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaignresponse_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_canvasappextendedmetadata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_catalog: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_catalogassignment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_category_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofile_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofilerule_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofileruleitem_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_characteristic_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_childincidentcount: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_commitment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_competitor_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_competitoraddress_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connection_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connectionreference: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connectionrole_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connector: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contact_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contract_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contractdetail_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contracttemplate_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_conversationtranscript: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapi: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapirequestparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapiresponseproperty: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customeraddress_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customeropportunityrole_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakefolder: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakefolderpermission: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakeworkspace: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakeworkspacepermission: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_discount_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_discounttype_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_duplicaterule_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_duplicaterulecondition_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicproperty: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyassociation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyinstance: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_email_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_emailserverprofile_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlement_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementtemplate_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityanalyticsconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityimageconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_equipment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ExpiredProcess_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_exportsolutionupload: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_externalparty_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_externalpartyitem_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fax_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_feedback_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fieldpermission_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fieldsecurityprofile_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fileattachment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachine: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachinegroup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowsession: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_goal_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_goalrollupquery_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_importmap_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_incident_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_incidentresolution_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_internaladdress_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_internalcatalogassignment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_invoice_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_invoicedetail_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_kbarticle_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_kbarticletemplate_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_keyvaultreference: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticle_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticleincident_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticleviews_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgebaserecord_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_lead_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_leadaddress_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_LeadToOpportunitySalesProcess_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_letter_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_list_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_listoperation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mailbox_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mailmergetemplate_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_managedidentity: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_marketingformdisplayattributes: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_metric_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynce_botcontent: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynsm_marketingsitemap: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynsm_salessitemap: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynsm_servicessitemap: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynsm_settingssitemap: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_3dmodel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_accountpricelist: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actual: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_adaptivecardconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_adminappstate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentstatushistory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisjob: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisresult: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analytics: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analyticsadminsettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analyticsforcs: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_appconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_applicationextension: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_applicationtabtemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_approval: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assetcategorytemplateassociation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assettemplateassociation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentconfigurationstep: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_authenticationsettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_autocapturerule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_autocapturesettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_batchjob: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourceassociation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourcebookingquicknote: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourcecapacityprofile: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingchange: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingjournal: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingrule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingsetupmetadata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_businessclosure: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_cannedmessage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_capacityprofile: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_caseenrichment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casesuggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopicsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopicsummary: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopic_incident: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_cdsentityengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelcapability: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelprovider: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatansweroption: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponse: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatwidgetlanguage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ciprovider: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_clientextension: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_collabgraphresource: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_configuration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtype: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleappparameterdefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contactpricelist: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contractlinedetailperformance: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contractlineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contractlinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contractperformance: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationaction: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationactionlocale: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationdata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationinsight: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsuggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopicsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopicsummary: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopic_conversation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerasset: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerassetattachment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerassetcategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_csrmanager: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ksinsights: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_oc: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataexport: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_datainsightsandanalyticsfeature: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_decisioncontract: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_decisionruleset: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_delegation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dimension: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dimensionfieldname: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entitlementapplication: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityroutingconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_estimate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_estimateline: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_expense: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_expensecategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_expensereceipt: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_facebookengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fact: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_federatedarticle: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldcomputation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicepricelistitem: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicesetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicesystemjob: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_findworkevent: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_functionallocation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_gdprdata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofence: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofenceevent: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofencingsettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geolocationsettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geolocationtracking: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttype: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperecommendationresult: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperecommendationrunhistory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperesolution: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeservicetask: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspection: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectionattachment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectiondefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectioninstance: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectionresponse: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_integrationjob: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_integrationjobdetail: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryjournal: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_invoicefrequency: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_invoicefrequencydetail: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevice: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicedatahistory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdeviceproperty: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotfieldmapping: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotpropertydefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotprovider: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotproviderinstance: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotsettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iottocaseprocess: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_journal: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_journalline: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kbenrichment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kmpersonalizationsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kpieventdata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kpieventdefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_lineengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatwidgetlocation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkitemevent: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkstream: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkstreamcapacityprofile: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_localizedsurveyquestion: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_macrosession: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_maskingrule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_masterentityroutingconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_migrationtracker: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_mlresultcache: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_msteamssetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_msteamssettingsv2: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notificationfield: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notificationtemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocbotchannelregistration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelstateconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occommunicationprovidersetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occommunicationprovidersettingentry: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occustommessagingchannel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocfbapplication: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocfbpage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclanguage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclinechannelconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcapacityprofile: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclocalizationdata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocoutboundconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocoutboundmessage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocphonenumber: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocprovisioningstate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocrequest: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocruleitem: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopickeyword: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopictrending: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsessioncharacteristic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsessionsentiment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsimltraining: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitdimportconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitdskill: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitrainingdata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocskillidentmlmodel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsmschannelsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsystemmessage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octag: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octeamschannelconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octwitterapplication: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octwitterhandle: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwechatchannelconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oc_geolocationprovider: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelpersonalization: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelqueue: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelsyncconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_operatinghour: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingdate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingsetup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderpricelist: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_organizationalunit: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paneconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_panetabconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_panetoolconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_payment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentdetail: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentmethod: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentterm: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personalmessage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personalsoundsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personasecurityrolemapping: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pminferredtask: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmrecording: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postalcode: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_presence: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_priority: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_problematicasset: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_problematicassetfeedback: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_processnotes: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productinventory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityactioninputparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityactionoutputparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityagentscript: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityagentscriptstep: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacroactiontemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacroconnector: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacrosolutionconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityparameterdefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_project: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectapproval: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectpricelist: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projecttask: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectteam: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_property: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertyassetassociation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertylog: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertytemplateassociation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_provider: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_questionsequence: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingincident: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingservice: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingsetup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quoteinvoicingproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quoteinvoicingsetup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelineanalyticsbreakdown: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotepricelist: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementdependency: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementgroup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementorganizationunit: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementrelationship: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementstatus: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resolution: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourceassignment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourceassignmentdetail: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcecategorymarkuppricelevel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcepaytype: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcerequest: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcerequirement: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_richtextfile: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rma: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmaproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmasubstatus: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_roleutilization: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingconfigurationstep: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingrequest: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingrulesetsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtvproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rulesetdependencymapping: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scenario: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scheduleboardsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_schedulingfeatureflag: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_schedulingparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_searchconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sentimentanalysis: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_servicetasktype: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessiondata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionevent: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionparticipant: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionparticipantdata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessiontemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_shipvia: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sikeyvalueconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_skillattachmentruleitem: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_skillattachmenttarget: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smartassistconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smsengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smsnumber: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_soundfile: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_soundnotificationsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestioninteraction: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionsmodelsummary: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionssetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_surveyquestion: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_taxcode: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_taxcodedetail: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamsdialeradminsettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamsengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templateforproperties: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templateparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templatetags: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeentry: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeentrysetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeoffcalendar: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeoffrequest: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_tour: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactioncategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactionconnection: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactionorigin: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactiontype: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transcript: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_twitterengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingdiagnostic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingrun: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingsetuptracker: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_uniquenumber: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_urnotificationtemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_urnotificationtemplatemapping: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_usersetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_userworkhistory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_visitorjourney: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wechatengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_whatsappengagementctx: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderresolution: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordersubstatus: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordertype: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_actioncallworkflow: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_agentscripttaskcategory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_answer: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_auditanddiagnosticssetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_configuration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_customizationfiles: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_entityassignment: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_entitysearch: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_form: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_languagemodule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_scriptlet: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_scripttasktrigger: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_search: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_sessioninformation: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_sessiontransfer: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_task: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_ucisettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_uiievent: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_usersettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_windowroute: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_alert: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_alertrule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_fileresponse: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_localizedemailtemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_project: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_question: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_satisfactionmetric: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyreminder: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_NewProcess_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_offlinecommanddefinition_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunity_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunityclose_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunityproduct_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_OpportunitySalesProcess_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_orderclose_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organization_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncsubscription: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_package: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_pdfsetting: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_phonecall_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_PhoneToCaseProcess_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_position_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_postfollow_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_pricelevel_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processsession_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processstage_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processtrigger_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_product_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productassociation_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productpricelevel_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productsubstitute_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_provisionlanguageforuser: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_publisher_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_queue_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_queueitem_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quote_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quoteclose_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quotedetail_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ratingmodel_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ratingvalue_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_recurringappointmentmaster_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_relationshipattribute: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_report_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_reportcategory_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resource_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcegroup_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcegroupexpansion_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcespec: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_role_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_rollupfield_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesliterature_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesorder_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesorderdetail_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesprocessinstance: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_savedquery_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_savedqueryvisualization_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_service_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceappointment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_settingdefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharepointdocumentlocation_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharepointsite_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_site_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sla_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_slaitem_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_slakpiinstance_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_socialactivity_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_socialprofile_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solution_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_subject_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_syncerror_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_systemuser_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_systemuserauthorizationchangetracker: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_task_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_team_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_teammobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_teamtemplate_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_template_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_territory_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topic: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topichistory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodel: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodelconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_transactioncurrency_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_TranslationProcess_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_action: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_audit: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_context: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_hostedapplication: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_nonhostedapplication: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_option: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_savedsession: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_sessiontransfer: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_workflow: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_workflowstep: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uom_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uomschedule_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_usermobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userquery_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userqueryvisualization_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_virtualentitymetadata: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_workflow_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_workflowbinary: DevKit.WebApi.LookupValue;
		/** Request data for the entity that had the sync error. */
		RequestData: DevKit.WebApi.StringValue;
		/** Shows whether the sync error is active or resolved. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the sync error status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the sync error. */
		SyncErrorId: DevKit.WebApi.GuidValue;
		/** Shows the version number of the sync error. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SyncError {
		enum ErrorType {
			/** 0 */
			Conflict,
			/** 3 */
			Others,
			/** 2 */
			Record_already_exists,
			/** 1 */
			Record_not_found
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Resolved
		}
		enum StatusCode {
			/** 0 */
			Active,
			/** 1 */
			Fixed
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
//{'JsForm':['Sync Error'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
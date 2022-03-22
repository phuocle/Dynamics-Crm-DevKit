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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSync_Error extends DevKit.IForm {
		/**
		* Sync Error [Main Form]
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
		/** The Process of form Sync_Error */
		Process: DevKit.FormSync_Error.Process;
		/** The SidePanes of form Sync_Error */
		SidePanes: DevKit.SidePanes;
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
		/** Action Name for which sync error has occurred */
		Action: string;
		/** Show the action data */
		ActionData: string;
		/** Unique identifier of the user who created the sync error. */
		readonly CreatedBy: string;
		/** Date and time when the sync Error was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sync error. */
		readonly CreatedOnBehalfBy: string;
		/** Enter a short description of the sync error. */
		Description: string;
		/** Displays the error code. */
		ErrorCode: string;
		/** Error description from the exception */
		ErrorDetail: string;
		/** Error Message of the exception */
		ErrorMessage: string;
		/** Date and time when the upsync request was executed on CRM server */
		ErrorTime_UtcDateAndTime: Date;
		/** Select the preferred error type. */
		ErrorType: OptionSet.SyncError.ErrorType;
		/** Unique identifier of the user who last modified the sync error. */
		readonly ModifiedBy: string;
		/** Date and time when the sync error was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sync error. */
		readonly ModifiedOnBehalfBy: string;
		/** Entity name of the record for which sync error has occurred */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Business unit that owns the sync error. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the sync error. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the sync error. */
		readonly OwningUser: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_account_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activityfileattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activitymimeattachment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activitymonitor: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activityparty_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_adminsettingsentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_annotation_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appelement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_applicationuser: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appmodulecomponentedge: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appmodulecomponentnode: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appointment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appusersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attachment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attributeimageconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresource_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebooking_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcebookingheader_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecategory_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecategoryassn_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcecharacteristic_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookableresourcegroup_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bookingstatus_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bot: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_botcomponent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkoperation_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_bulkoperationlog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_businessdatalocalizedlabel_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_businessunit_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaign_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaignactivity_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_campaignresponse_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_canvasappextendedmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_catalog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_catalogassignment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_category_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofile_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofilerule_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofileruleitem_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_characteristic_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_chat: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_childincidentcount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_comment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_commitment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_competitor_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_competitoraddress_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connection_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connectionreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connectionrole_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connector: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_constraintbasedgroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contact_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contract_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contractdetail_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contracttemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_conversationtranscript: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapi: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapirequestparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customapiresponseproperty: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customeraddress_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customeropportunityrole_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakefolder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakefolderpermission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakeworkspace: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datalakeworkspacepermission: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dataprocessingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_datasyncstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_discount_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_discounttype_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_duplicaterule_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_duplicaterulecondition_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicproperty: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_dynamicpropertyoptionsetitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_email_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_emailserverprofile_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlement_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementchannel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlemententityallocationtypemapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementtemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entitlementtemplatechannel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityanalyticsconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityimageconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityindex: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_environmentvariabledefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_environmentvariablevalue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_equipment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ExpiredProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_exportsolutionupload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_externalparty_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_externalpartyitem_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fax_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_featurecontrolsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_feedback_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fieldpermission_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fieldsecurityprofile_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_fileattachment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachine: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowmachinegroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_flowsession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_goal_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_goalrollupquery_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_holidaywrapper: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_importmap_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_incident_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_incidentresolution_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_indexattributes: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_internaladdress_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_internalcatalogassignment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_invoice_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_invoicedetail_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_kbarticle_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_kbarticletemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_keyvaultreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticle_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticleincident_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticleviews_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgebaserecord_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_lead_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_leadaddress_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_LeadToOpportunitySalesProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_letter_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_list_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_listoperation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mailbox_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mailmergetemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_managedidentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_marketingformdisplayattributes: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_metric_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynce_botcontent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynsm_marketingsitemap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynsm_salessitemap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynsm_servicessitemap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdynsm_settingssitemap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_3dmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_accountpricelist: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actioncardregarding: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actioncardrolesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_actual: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_adaptivecardconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_adminappstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agentstatushistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingdate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingincident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementbookingsetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoicedate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_agreementsubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdataset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetfile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetrecord: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibdatasetscontainer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibfeedbackloop: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibfile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aibfileattacheddata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aicontactsuggestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aifptrainingdocument: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aimodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodimage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodlabel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aiodtrainingimage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_aitemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysiscomponent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisjob: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisresult: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analysisresultdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analytics: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analyticsadminsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_analyticsforcs: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_appconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_applicationextension: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_applicationtabtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_approval: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_approvalset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assetcategorytemplateassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assetsuggestionssetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assettemplateassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentconfigurationstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentmap: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_assignmentrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_attribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_attributevalue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_authenticationsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_autocapturerule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_autocapturesettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_batchjob: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourceassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourcebookingquicknote: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookableresourcecapacityprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingalert: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingalertstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingchange: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingjournal: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingsetupmetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bookingtimestamp: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_businessclosure: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_callablecontext: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_cannedmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_capacityprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_caseenrichment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casesuggestionrequestpayload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopicsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopicsummary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_casetopic_incident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_cdsentityengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelcapability: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_channelprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_characteristicreqforteammember: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatansweroption: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_chatwidgetlanguage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ciprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_clientextension: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_collabgraphresource: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_configuration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleapplicationtype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_consoleappparameterdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contactpricelist: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contactsuggestionrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contactsuggestionruleset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contractlinedetailperformance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contractlineinvoiceschedule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contractlinescheduleofvalue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_contractperformance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationactionlocale: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationinsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationsuggestionrequestpayload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopicsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopicsummary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_conversationtopic_conversation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerasset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerassetattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_customerassetcategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_csrmanager: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fs: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ksinsights: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_oc: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataanalyticsreport_sutreporting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_databaseversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataexport: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataflow: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dataflowrefreshhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_datainsightsandanalyticsfeature: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dealmanageraccess: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dealmanagersettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_decisioncontract: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_decisionruleset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_delegation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dimension: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_dimensionfieldname: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_duplicatedetectionpluginrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_duplicateleadmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_effortpredictionresult: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entitlementapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityrankingrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityrefreshhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_entityroutingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_estimate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_estimateline: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_expense: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_expensecategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_expensereceipt: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_extendedusersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_facebookengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fact: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_federatedarticle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_federatedarticleincident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldcomputation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicepricelistitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_fieldservicesystemjob: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_findworkevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_flowcardtype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_forecastrecurrence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_functionallocation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_gdprdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofenceevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geofencingsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geolocationsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_geolocationtracking: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_helppage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_icebreakersconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iermlmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iermltraining: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperecommendationresult: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperecommendationrunhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttyperesolution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypeservicetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttypessetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspection: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectionattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectiondefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectioninstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inspectionresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_integrationjob: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_integrationjobdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryadjustment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventoryjournal: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_inventorytransfer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_invoicefrequency: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_invoicefrequencydetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_invoicelinetransaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotalert: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecommand: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicedatahistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdeviceproperty: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotfieldmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotpropertydefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotproviderinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iotsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_iottocaseprocess: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_journal: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_journalline: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kalanguagesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kbattachment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kbenrichment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kmpersonalizationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgearticleimage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgearticletemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgemanagementsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgepersonalfilter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgesearchfilter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgesearchinsight: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kpieventdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_kpieventdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_leadhygienesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_leadmodelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_lineengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_livechatwidgetlocation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveconversation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkitemevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkstream: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_liveworkstreamcapacityprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_localizedsurveyquestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_macrosession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_maskingrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_masterentityroutingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_migrationtracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_mlresultcache: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_modelpreviewstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_msteamssetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_msteamssettingsv2: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notesanalysisconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notificationfield: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_notificationtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocautoblockrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocbotchannelregistration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occarrier: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelapiconversationprivilege: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelapimessageprivilege: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelapimethodmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occhannelstateconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occommunicationprovidersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occommunicationprovidersettingentry: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_occustommessagingchannel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocfbapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocfbpage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocflaggedspam: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclanguage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclinechannelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcapacityprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oclocalizationdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocoutboundconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocoutboundmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocphonenumber: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocprovisioningstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocrecording: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocruleitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopickeyword: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsentimentdailytopictrending: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsessioncharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsessionparticipantevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsessionsentiment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsimltraining: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitdimportconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitdskill: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsitrainingdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocskillidentmlmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsmschannelsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocsystemmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octeamschannelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octwitterapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_octwitterhandle: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwechatchannelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_oc_geolocationprovider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelpersonalization: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelqueue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_omnichannelsyncconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_operatinghour: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitylineresourcecategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitylinetransaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitylinetransactioncategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitylinetransactionclassificatio: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitymodelconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_opportunitypricelist: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingdate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingsetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderlineresourcecategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderlinetransaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderlinetransactioncategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderlinetransactionclassification: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_orderpricelist: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_organizationalunit: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_overflowactionconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paneconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_panetabconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_panetoolconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_payment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentmethod: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_paymentterm: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personalmessage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personalsoundsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_personasecurityrolemapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookactivity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookactivityattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookcategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbookinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_playbooktemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pminferredtask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_pmrecording: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postalbum: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postalcode: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_postruleconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictivemodelscore: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictivescore: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_predictworkhourdurationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_presence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_priority: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_problematicasset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_problematicassetfeedback: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_processnotes: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productinventory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityactioninputparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityactionoutputparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityagentscript: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityagentscriptstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacroactiontemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacroconnector: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivitymacrosolutionconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_productivityparameterdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_project: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectapproval: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectparameterpricelist: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectpricelist: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projecttask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projecttaskdependency: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projecttaskstatususer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectteam: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projectteammembersignup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_projecttransactioncategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_property: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertyassetassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertylog: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_propertytemplateassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_provider: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderbill: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_questionsequence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingincident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingservicetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotebookingsetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quoteinvoicingproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quoteinvoicingsetup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelineanalyticsbreakdown: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelineinvoiceschedule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelineresourcecategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelinescheduleofvalue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelinetransaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelinetransactioncategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotelinetransactionclassification: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_quotepricelist: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_recording: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementcharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementdependency: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementgroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementorganizationunit: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementrelationship: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementresourcecategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementresourcepreference: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_requirementstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resolution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourceassignment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourceassignmentdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcecategorymarkuppricelevel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcecategorypricelevel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcepaytype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcerequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcerequirement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourcerequirementdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_resourceterritory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_richtextfile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rma: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmaproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmareceipt: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmareceiptproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rmasubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rolecompetencyrequirement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_roleutilization: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingconfigurationstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_routingrulesetsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtv: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtvproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rtvsubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_rulesetdependencymapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesaccelerationsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesassignmentsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesinsightssettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salesroutingrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salessuggestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_salestag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scenario: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_scheduleboardsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_schedulingfeatureflag: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_schedulingparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_searchconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_segment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_segmentcatalogue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sentimentanalysis: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequence: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequencestat: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequencetarget: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequencetargetstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sequencetemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_serviceconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_servicetasktype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessiondata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionevent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionparticipant: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessionparticipantdata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sessiontemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_shipvia: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_siconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_sikeyvalueconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_skillattachmentruleitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_skillattachmenttarget: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_slakpi: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smartassistconfig: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smsengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_smsnumber: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthruleargument: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthruleset: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_soundfile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_soundnotificationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestioninteraction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionrequestpayload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionsmodelsummary: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_suggestionssetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_surveyquestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_taxcode: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_taxcodedetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamschannelengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamschatassociation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamschatsuggestion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamscollaboration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamsdialeradminsettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_teamsengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templateforproperties: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templateparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_templatetags: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeentry: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeentrysetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timegroup: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timegroupdetail: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeoffcalendar: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_timeoffrequest: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_tour: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactioncategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactioncategoryclassification: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactioncategoryhierarchyelement: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactioncategorypricelevel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactionconnection: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactionorigin: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transactiontype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_transcript: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_twitterengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingdiagnostic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingrun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_unifiedroutingsetuptracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_uniquenumber: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_untrackedappointment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgraderun: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgradestep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_upgradeversion: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_urnotificationtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_urnotificationtemplatemapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_usagemetric: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_usersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_userworkhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_visitorjourney: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wallsavedquery: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_warehouse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_wechatengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_whatsappengagementctx: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workhourtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_worklistviewconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordercharacteristic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderincident: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderproduct: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderresolution: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderservice: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workorderservicetask: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordersubstatus: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workordertype: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workqueuestate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_workqueueusersetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_actioncallworkflow: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_agentscriptaction: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_agentscripttaskcategory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_answer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_auditanddiagnosticssetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_configuration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_customizationfiles: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_entityassignment: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_entitysearch: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_form: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_languagemodule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_scriptlet: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_scripttasktrigger: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_search: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_sessioninformation: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_sessiontransfer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_task: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_toolbarbutton: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_toolbarstrip: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_tracesourcesetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_ucisettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_uiievent: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_usersettings: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyusd_windowroute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_alert: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_alertrule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_emailtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_fileresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_localizedemailtemplate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_project: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_question: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_questionresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_satisfactionmetric: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_survey: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyinvite: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyreminder: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_surveyresponse: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msfp_unsubscribedrecipient: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_NewProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_offlinecommanddefinition_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunity_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunityclose_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_opportunityproduct_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_OpportunitySalesProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_orderclose_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organization_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncstate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncsubscription: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationdatasyncsubscriptionentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organizationsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_package: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_pdfsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_phonecall_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_PhoneToCaseProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_pluginpackage: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_position_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_postfollow_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_pricelevel_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_privilegesremovalsetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processsession_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processstage_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processstageparameter: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processtrigger_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_product_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productassociation_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productpricelevel_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_productsubstitute_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_provisionlanguageforuser: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_publisher_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_queue_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_queueitem_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quote_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quoteclose_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_quotedetail_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ratingmodel_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ratingvalue_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_recurringappointmentmaster_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_relationshipattribute: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_report_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_reportcategory_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resource_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcegroup_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcegroupexpansion_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_resourcespec: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_revokeinheritedaccessrecordstracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_role_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_rollupfield_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesliterature_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesliteratureitem: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesorder_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesorderdetail_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_salesprocessinstance: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_savedquery_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_savedqueryvisualization_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_service_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceappointment_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceplan: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceplanmapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_settingdefinition: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharedlinksetting: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharepointdocumentlocation_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharepointsite_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_site_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sla_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_slaitem_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_slakpiinstance_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_socialactivity_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_socialprofile_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solution_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentattributeconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentbatchconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_stagesolutionupload: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_subject_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapsedatabase: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkexternaltablestate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkprofile: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkprofileentity: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkprofileentitystate: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_synapselinkschedule: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_syncerror_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_systemuser_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_systemuserauthorizationchangetracker: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_task_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_team_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_teammobileofflineprofilemembership: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_teamtemplate_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_template_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_territory_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topic: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topichistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodel: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodelconfiguration: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_topicmodelexecutionhistory: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_transactioncurrency_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_TranslationProcess_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_action: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_audit: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_context: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_hostedapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_nonhostedapplication: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_option: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_savedsession: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_sessiontransfer: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_workflow: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_workflowstep: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uii_workflow_workflowstep_mapping: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uom_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_uomschedule_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_usermobileofflineprofilemembership: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userquery_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userqueryvisualization_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_virtualentitymetadata: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_workflow_syncerror: string;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_workflowbinary: string;
		/** Request data for the entity that had the sync error. */
		RequestData: string;
		/** Shows whether the sync error is active or resolved. */
		StateCode: OptionSet.SyncError.StateCode;
		/** Select the sync error status. */
		StatusCode: OptionSet.SyncError.StatusCode;
		/** Unique identifier of the sync error. */
		SyncErrorId: string;
		/** Shows the version number of the sync error. */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}
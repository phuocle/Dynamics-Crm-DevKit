//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAsyncOperation_Information {
		interface tab_generaltab_Sections {
			custom: DevKit.Controls.Section;
			general: DevKit.Controls.Section;
			systemlinksection: DevKit.Controls.Section;
		}
		interface tab_generaltab extends DevKit.Controls.ITab {
			Section: tab_generaltab_Sections;
		}
		interface Tabs {
			generaltab: tab_generaltab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Controls.String;
			/** Message related to the system job. */
			Message: DevKit.Controls.String;
			/** Name of the system job. */
			Name: DevKit.Controls.String;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Controls.Integer;
			WebResource_systemjob: DevKit.Controls.WebResource;
		}
	}
	class FormAsyncOperation_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form AsyncOperation_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form AsyncOperation_Information */
		Body: DevKit.FormAsyncOperation_Information.Body;
		/** The SidePanes of form AsyncOperation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class AsyncOperationApi {
		/**
		* DynamicsCrm.DevKit AsyncOperationApi
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
		/** Unique identifier of the system job. */
		AsyncOperationId: DevKit.WebApi.GuidValue;
		/** The breadcrumb record ID. */
		BreadcrumbId: DevKit.WebApi.GuidValue;
		/** The origin of the caller. */
		CallerOrigin: DevKit.WebApi.StringValue;
		/** Date and time when the system job was completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier used to correlate between multiple SDK requests and system jobs. */
		CorrelationId: DevKit.WebApi.GuidValue;
		/** Last time the correlation depth was updated. */
		CorrelationUpdatedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who created the system job. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the system job was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the asyncoperation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unstructured data associated with the system job. */
		Data: DevKit.WebApi.StringValue;
		/** File Id for the blob url used for file storage. */
		DataBlobId: DevKit.WebApi.StringValueReadonly;
		/** Execution of all operations with the same dependency token is serialized. */
		DependencyToken: DevKit.WebApi.StringValue;
		/** Number of SDK calls made since the first call. */
		Depth: DevKit.WebApi.IntegerValue;
		/** Error code returned from a canceled system job. */
		ErrorCode: DevKit.WebApi.IntegerValueReadonly;
		/** Time that the system job has taken to execute. */
		ExecutionTimeSpan: DevKit.WebApi.DoubleValueReadonly;
		/** The datetime when the Expander pipeline started. */
		ExpanderStartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Message provided by the system job. */
		FriendlyMessage: DevKit.WebApi.StringValue;
		/** Unique identifier of the host that owns this system job. */
		HostId: DevKit.WebApi.StringValue;
		/** Indicates that the system job is waiting for an event. */
		IsWaitingForEvent: DevKit.WebApi.BooleanValueReadonly;
		/** Message related to the system job. */
		Message: DevKit.WebApi.StringValueReadonly;
		/** Name of the message that started this system job. */
		MessageName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the system job. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the system job was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the asyncoperation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the system job. */
		Name: DevKit.WebApi.StringValue;
		/** Type of the system job. */
		OperationType: DevKit.WebApi.OptionSetValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the system job. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the owning extension with which the system job is associated. */
		OwningExtensionId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the team who owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		ParentPluginExecutionId: DevKit.WebApi.GuidValue;
		/** Indicates whether the system job should run only after the specified date and time. */
		PostponeUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Pattern of the system job's recurrence. */
		RecurrencePattern: DevKit.WebApi.StringValue;
		/** Starting time in UTC for the recurrence pattern. */
		RecurrenceStartTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_accountleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_activityfileattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_activitymimeattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_activitymonitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_adminsettingsentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_annualfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_appaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_appelement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_applicationuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_appmodulecomponentedge: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_appmodulecomponentnode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_appsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_appusersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_attributeimageconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_attributemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcebooking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcebookingexchangesyncidmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcebookingheader: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcecategoryassn: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookableresourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bookingstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bot: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_botcomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bulkoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_bulkoperationlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_calendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaign: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaignactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaignactivityitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaignitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_campaignresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_canvasappextendedmetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_catalog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_catalogassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		channelaccessprofile_asyncoperations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_characteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_childincidentcount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_comment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_commitment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_competitor: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_competitoraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_competitorproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_competitorsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_connectionreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_connectionrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_constraintbasedgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contactinvoices: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contactleads: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contactorders: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contactquotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contractdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_contracttemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_conversationtranscript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customapirequestparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customapiresponseproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customeropportunityrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_datalakefolder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_datalakefolderpermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_datalakeworkspace: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_datalakeworkspacepermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_datasyncstate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_discount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_discounttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_displaystring: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_dynamicproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_dynamicpropertyassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_dynamicpropertyinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_dynamicpropertyoptionsetitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_emailserverprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlemententityallocationtypemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementtemplatechannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitlementtemplateproducts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entityanalyticsconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entityimageconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entityindex: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_entitymap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_equipment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_exportsolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		externalparty_asyncoperations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		externalpartyitem_asyncoperations: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_featurecontrolsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_fixedmonthlyfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_flowmachine: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_flowmachinegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_flowsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_goalrollupquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_import: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_importdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_importfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_importlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_importmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_incidentknowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_incidentresolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_indexattributes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_new_interactionforemail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_internalcatalogassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_invoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_invoicedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_isvconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_kbarticlecomment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_kbarticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_keyvaultreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_knowledgearticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_lead: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_leadaddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_leadcompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_leadproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_leadtoopportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_list: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_listmember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_listoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_managedidentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_marketingformdisplayattributes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_metric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_monthlyfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdynce_botcontent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdynsm_marketingsitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdynsm_salessitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdynsm_servicessitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdynsm_settingssitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_3dmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_accountpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_actioncardregarding: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_actioncardrolesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_actual: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_adaptivecardconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_adminappstate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agentstatushistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementbookingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementbookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementbookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementbookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementbookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementinvoicedate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_agreementsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aicontactsuggestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_analysisjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_analysisresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_analytics: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_analyticsadminsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_analyticsforcs: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_appconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_applicationextension: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_applicationtabtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_approval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_approvalset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_assetcategorytemplateassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_assetsuggestionssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_assettemplateassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_assignmentconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_assignmentconfigurationstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_assignmentmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_assignmentrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_attribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_attributevalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_authenticationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_autocapturerule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_autocapturesettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_batchjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookableresourceassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookableresourcebookingquicknote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookableresourcecapacityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookingalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookingalertstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookingchange: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookingjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookingsetupmetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bookingtimestamp: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_businessclosure: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_callablecontext: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_cannedmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_capacityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_caseenrichment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_casesuggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_casetopic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_casetopicsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_casetopicsummary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_casetopic_incident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_cdsentityengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_channel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_channelcapability: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_channelprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_characteristicreqforteammember: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_chatansweroption: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_chatquestionnaireresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_chatquestionnaireresponseitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_chatwidgetlanguage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ciprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_clientextension: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_collabgraphresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_configuration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_consoleapplicationnotificationfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_consoleapplicationnotificationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_consoleapplicationsessiontemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_consoleapplicationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_consoleapplicationtemplateparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_consoleapplicationtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_consoleappparameterdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_contactpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_contactsuggestionrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_contactsuggestionruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_contractlinedetailperformance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_contractlineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_contractlinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_contractperformance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationactionlocale: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationinsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationsuggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationtopic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationtopicsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationtopicsummary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_conversationtopic_conversation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_customengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_customerasset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_customerassetattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_customerassetcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataanalyticsreport: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_csrmanager: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_fs: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictrs: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_fspredictwhd: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_ksinsights: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_oc: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataanalyticsreport_ocvoice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_databaseversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataexport: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_datainsightsandanalyticsfeature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dealmanageraccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dealmanagersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_decisioncontract: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_decisionruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_delegation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dimension: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_dimensionfieldname: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_effortpredictionresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_entitlementapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_entityconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_entityconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_entitylinkchatconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_entityrankingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_entityroutingconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_estimate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_estimateline: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_expense: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_expensecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_expensereceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_extendedusersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_facebookengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_fact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_federatedarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_fieldcomputation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_fieldservicepricelistitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_fieldservicesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_fieldserviceslaconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_fieldservicesystemjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_findworkevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_flowcardtype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_forecastconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_forecastdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_forecastinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_forecastrecurrence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_functionallocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_gdprdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_geofence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_geofenceevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_geofencingsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_geolocationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_geolocationtracking: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_icebreakersconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iermlmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iermltraining: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttypeproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttyperecommendationresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttyperecommendationrunhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttyperesolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttypeservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttypeservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttypessetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_incidenttype_requirementgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inspection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inspectionattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inspectiondefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inspectioninstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inspectionresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_integrationjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_integrationjobdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inventoryadjustment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inventoryjournal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_inventorytransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_invoicefrequency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_invoicefrequencydetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_invoicelinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotalert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotdevice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotdevicecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotdevicecommand: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotdevicecommanddefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotdevicedatahistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotdeviceproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotdeviceregistrationhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotdevicevisualizationconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotfieldmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotpropertydefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotproviderinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iotsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_iottocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_journal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_journalline: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_kbattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_kbenrichment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_kbkeywordsdescsuggestionsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_kmpersonalizationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_kpieventdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_kpieventdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_lineengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_livechatconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_livechatengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_livechatwidgetlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_liveconversation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_liveworkitemevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_liveworkstream: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_liveworkstreamcapacityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_localizedsurveyquestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_macrosession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_maskingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_masterentityroutingconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_migrationtracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_mlresultcache: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_msteamssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_msteamssettingsv2: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_notesanalysisconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_notificationfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_notificationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocautoblockrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocbotchannelregistration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_occarrier: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_occhannelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_occhannelstateconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_occommunicationprovidersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_occommunicationprovidersettingentry: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_occustommessagingchannel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocfbapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocfbpage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocflaggedspam: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_oclanguage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_oclinechannelconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocliveworkitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocliveworkitemcapacityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocliveworkitemcharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocliveworkitemcontextitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocliveworkitemparticipant: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocliveworkitemsentiment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocliveworkstreamcontextvariable: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_oclocalizationdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocoutboundconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocoutboundmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocphonenumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocprovisioningstate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocrecording: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsentimentdailytopic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsentimentdailytopickeyword: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsentimentdailytopictrending: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsessioncharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsessionparticipantevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsessionsentiment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsimltraining: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsitdimportconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsitdskill: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsitrainingdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocskillidentmlmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsmschannelsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocsystemmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_octag: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_octeamschannelconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_octwitterapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_octwitterhandle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocwechatchannelconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocwhatsappchannelaccount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_ocwhatsappchannelnumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_oc_geolocationprovider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_omnichannelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_omnichannelpersonalization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_omnichannelqueue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_omnichannelsyncconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_operatinghour: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_opportunitylineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_opportunitylinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_opportunitylinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_opportunitylinetransactionclassificatio: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_opportunitypricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderinvoicingdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderinvoicingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderinvoicingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderinvoicingsetupdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderlineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderlinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderlinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderlinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_orderpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_organizationalunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_overflowactionconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_paneconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_panetabconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_panetoolconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_payment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_paymentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_paymentmethod: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_paymentterm: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_personalmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_personalsoundsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_personasecurityrolemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbookactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbookactivityattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbookcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbookinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_playbooktemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_pminferredtask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_pmrecording: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_postalbum: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_postalcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_postconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_postruleconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_predictworkhourdurationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_presence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_priority: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_problematicasset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_problematicassetfeedback: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_processnotes: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productinventory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productivityactioninputparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productivityactionoutputparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productivityagentscript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productivityagentscriptstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productivitymacroactiontemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productivitymacroconnector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productivitymacrosolutionconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_productivityparameterdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_project: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projectapproval: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projectparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projectparameterpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projectpricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projecttask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projecttaskdependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projecttaskstatususer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projectteam: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projectteammembersignup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_projecttransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_property: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_propertyassetassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_propertylog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_propertytemplateassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_provider: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_purchaseorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_purchaseorderbill: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_purchaseorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_questionsequence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotebookingincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotebookingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotebookingservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotebookingservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotebookingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quoteinvoicingproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quoteinvoicingsetup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotelineanalyticsbreakdown: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotelineinvoiceschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotelineresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotelinescheduleofvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotelinetransaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotelinetransactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotelinetransactionclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_quotepricelist: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_relationshipinsightsunifiedconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_requirementcharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_requirementdependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_requirementgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_requirementorganizationunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_requirementrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_requirementresourcecategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_requirementresourcepreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_requirementstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourceassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourceassignmentdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourcecategorymarkuppricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourcecategorypricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourcepaytype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourcerequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourcerequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourcerequirementdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_resourceterritory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_richtextfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rma: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rmaproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rmareceipt: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rmareceiptproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rmasubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rolecompetencyrequirement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_roleutilization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_routingconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_routingconfigurationstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_routingrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_routingrulesetsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rtv: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rtvproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rtvsubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_rulesetdependencymapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_salesaccelerationsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_salesassignmentsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_salesinsightssettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_salesroutingrun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_scenario: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_scheduleboardsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_schedulingfeatureflag: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_schedulingparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_searchconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_segment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_segmentcatalogue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sentimentanalysis: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sequence: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sequencestat: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sequencetarget: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sequencetargetstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_servicetasktype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sessiondata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sessionevent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sessionparticipant: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sessionparticipantdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sessiontemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_shipvia: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_siconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_sikeyvalueconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_skillattachmentruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_skillattachmenttarget: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_smartassistconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_smsengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_smsnumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_soundfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_soundnotificationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_suggestioninteraction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_suggestionrequestpayload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_suggestionsmodelsummary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_suggestionssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_surveyquestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_taxcode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_taxcodedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_teamschannelengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_teamschatassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_teamschatsuggestion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_teamscollaboration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_teamsdialeradminsettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_teamsengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_templateforproperties: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_templateparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_templatetags: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_timeentry: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_timeentrysetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_timegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_timegroupdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_timeoffcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_timeoffrequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_tour: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_transactioncategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_transactioncategoryclassification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_transactioncategoryhierarchyelement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_transactioncategorypricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_transactionconnection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_transactionorigin: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_transactiontype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_transcript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_twitterengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_unifiedroutingdiagnostic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_unifiedroutingrun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_unifiedroutingsetuptracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_uniquenumber: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_untrackedappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_upgraderun: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_upgradestep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_upgradeversion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_urnotificationtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_urnotificationtemplatemapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_usersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_userworkhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_visitorjourney: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_wallsavedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_wallsavedqueryusersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_warehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_wechatengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_whatsappengagementctx: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workordercharacteristic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workorderdetailsgenerationqueue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workorderincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workorderproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workorderresolution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workorderservice: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workorderservicetask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workordersubstatus: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workordertype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workqueuestate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyn_workqueueusersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_actioncallworkflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_agentscriptaction: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_agentscripttaskcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_answer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_auditanddiagnosticssetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_configuration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_customizationfiles: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_entityassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_entitysearch: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_form: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_languagemodule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_scriptlet: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_scripttasktrigger: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_search: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_sessioninformation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_sessiontransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_toolbarbutton: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_toolbarstrip: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_tracesourcesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_ucisettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_uiievent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_usersettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msdyusd_windowroute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_alert: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_alertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_emailtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_fileresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_localizedemailtemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_project: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_question: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_questionresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_satisfactionmetric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_survey: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_surveyinvite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_surveyreminder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_surveyresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_msfp_unsubscribedrecipient: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunityclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunitycompetitors: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunityproduct: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_opportunitysalesprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_orderclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_organization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_organizationdatasyncsubscription: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_organizationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_package: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_pdfsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_phonetocaseprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_pluginpackage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_post: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_postfollow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_pricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_privilege: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_product: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_productassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_productpricelevel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_productsalesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_productsubstitute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_provisionlanguageforuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_quarterlyfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_quote: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_quoteclose: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_quotedetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_ratingmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_ratingvalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_relationshipattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_relationshiprolemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_report: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_resource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_resourcegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_resourcegroupexpansion: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_resourcespec: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_role: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_rollupfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesliterature: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesliteratureitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesorder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesorderdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_salesprocessinstance: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_savedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_semiannualfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_service: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_serviceappointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_servicecontractcontacts: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_serviceplanmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_settingdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_similarityrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_site: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_solutioncomponentbatchconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_subject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_systemform: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_systemuserauthorizationchangetracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_teammobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_template: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_theme: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topichistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topicmodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topicmodelconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_topicmodelexecutionhistory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_transactioncurrency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_action: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_audit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_context: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_hostedapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_nonhostedapplication: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_option: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_savedsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_sessiontransfer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_workflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_workflowstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uom: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_uomschedule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_userform: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_usermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_usermobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_userquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_virtualentitymetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the system job is associated. */
		regardingobjectid_workflowbinary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the request that generated the system job. */
		RequestId: DevKit.WebApi.GuidValue;
		/** Retain job history. */
		RetainJobHistory: DevKit.WebApi.BooleanValue;
		/** Number of times to retry the system job. */
		RetryCount: DevKit.WebApi.IntegerValueReadonly;
		/** Root execution context of the job that trigerred async job. */
		RootExecutionContext: DevKit.WebApi.StringValue;
		/** Order in which operations were submitted. */
		Sequence: DevKit.WebApi.BigIntValueReadonly;
		/** Date and time when the system job was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Status of the system job. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the system job. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** The Subtype of the Async Job */
		Subtype: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the workflow activation related to the system job. */
		WorkflowActivationId: DevKit.WebApi.LookupValue;
		/** Indicates whether the workflow instance was blocked when it was persisted. */
		WorkflowIsBlocked: DevKit.WebApi.BooleanValueReadonly;
		/** Name of a workflow stage. */
		WorkflowStageName: DevKit.WebApi.StringValueReadonly;
		/** State of the workflow job. */
		WorkflowState: DevKit.WebApi.StringValueReadonly;
		/** The workload name. */
		Workload: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace AsyncOperation {
		enum OperationType {
			/** 6 */
			Activity_Propagation,
			/** 190690092 */
			AI_Builder_Prediction_Events,
			/** 190690091 */
			AI_Builder_Training_Events,
			/** 73 */
			ALM_Anomaly_Detection_Operation,
			/** 72 */
			App_Module_Metadata_Operation,
			/** 41 */
			Audit_Partition_Creation,
			/** 13 */
			Bulk_Delete,
			/** 94 */
			Bulk_Delete_File_Attachment,
			/** 23 */
			Bulk_Delete_Subprocess,
			/** 8 */
			Bulk_Duplicate_Detection,
			/** 2 */
			Bulk_Email,
			/** 260 */
			BulkArchive_Async_Operation,
			/** 261 */
			BulkArchiveBatch_Async_Operation,
			/** 22 */
			Calculate_Organization_Maximum_Storage_Size,
			/** 18 */
			Calculate_Organization_Storage_Size,
			/** 57 */
			Calculate_Rollup_Field,
			/** 79 */
			CallbackRegistration_Expander_Operation,
			/** 100 */
			Cascade_FlowSession_Permissions_Async_Operation,
			/** 12801 */
			Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation,
			/** 90 */
			CascadeAssign,
			/** 91 */
			CascadeDelete,
			/** 42 */
			Check_For_Language_Pack_Updates,
			/** 32 */
			Cleanup_inactive_workflow_assemblies,
			/** 71 */
			Cleanup_Solution_Components,
			/** 19 */
			Collect_Organization_Database_Statistics,
			/** 16 */
			Collect_Organization_Statistics,
			/** 20 */
			Collection_Organization_Size_Statistics,
			/** 62 */
			Convert_Date_And_Time_Behavior,
			/** 98 */
			Create_Or_Refresh_Virtual_Entity,
			/** 26 */
			Database_log_backup,
			/** 21 */
			Database_Tuning,
			/** 28 */
			DBCC_SHRINKDATABASE_maintenance_job,
			/** 29 */
			DBCC_SHRINKFILE_maintenance_job,
			/** 14 */
			Deletion_Service,
			/** 7 */
			Duplicate_Detection_Rule_Publish,
			/** 53 */
			Encryption_Health_Check,
			/** 63 */
			EntityKey_Index_Creation,
			/** 92 */
			Event_Expander_Operation,
			/** 54 */
			Execute_Async_Request,
			/** 202 */
			Export_Solution_Async_Operation,
			/** 75 */
			Flow_Notification,
			/** 40 */
			Goal_Roll_Up,
			/** 5 */
			Import,
			/** 3 */
			Import_File_Parse,
			/** 38 */
			Import_Sample_Data,
			/** 203 */
			Import_Solution_Async_Operation,
			/** 93 */
			Import_Solution_Metadata,
			/** 17 */
			Import_Subprocess,
			/** 59 */
			Import_Translation,
			/** 51 */
			Incoming_Email_Processing,
			/** 15 */
			Index_Management,
			/** 52 */
			Mailbox_Test_Access,
			/** 58 */
			Mass_Calculate_Rollup_Field,
			/** 12 */
			Matchcode_Update,
			/** 85 */
			Migrate_notes_to_attachments_job,
			/** 25 */
			Organization_Full_Text_Catalog_Index,
			/** 50 */
			Outgoing_Activity,
			/** 49 */
			Post_to_Yammer,
			/** 201 */
			Provision_language_for_user,
			/** 43 */
			Provision_Language_Pack,
			/** 11 */
			Quick_Campaign,
			/** 35 */
			Recurring_Series_Expansion,
			/** 95 */
			Refresh_Business_Unit_for_Records_Owned_By_Principal,
			/** 250 */
			Refresh_Runtime_Integration_Components_Async_Operation,
			/** 46 */
			Regenerate_Entity_Row_Count_Snapshot_Data,
			/** 47 */
			Regenerate_Read_Share_Snapshot_Data,
			/** 30 */
			Reindex_all_indices_maintenance_job,
			/** 69 */
			Relationship_Assistant_Cards,
			/** 68 */
			Resource_Booking_Sync,
			/** 96 */
			Revoke_Inherited_Access,
			/** 76 */
			Ribbon_Client_Metadata_Operation,
			/** 9 */
			SQM_Data_Collection,
			/** 31 */
			Storage_Limit_Notification,
			/** 1 */
			System_Event,
			/** 4 */
			Transform_Parse_Data,
			/** 27 */
			Update_Contract_States,
			/** 56 */
			Update_Entitlement_States,
			/** 65 */
			Update_Knowledge_Article_States,
			/** 101 */
			Update_Modern_Flow_Async_Operation,
			/** 44 */
			Update_Organization_Database,
			/** 45 */
			Update_Solution,
			/** 24 */
			Update_Statistic_Intervals,
			/** 10 */
			Workflow
		}
		enum StateCode {
			/** 3 */
			Completed,
			/** 2 */
			Locked,
			/** 0 */
			Ready,
			/** 1 */
			Suspended
		}
		enum StatusCode {
			/** 32 */
			Canceled,
			/** 22 */
			Canceling,
			/** 31 */
			Failed,
			/** 20 */
			In_Progress,
			/** 21 */
			Pausing,
			/** 30 */
			Succeeded,
			/** 10 */
			Waiting,
			/** 0 */
			Waiting_For_Resources
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}
//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormSync_Error {
		interface Header {
			/** Unique identifier of the user or team who owns the sync error. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the sync error status. */
			StatusCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_General_Tab_Sections {
			SYNCERROR_INFORMATION: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Details_Sections {
		}
		interface tab_General_Tab extends DevKit.Form.Controls.IControlTab {
			Section: tab_General_Tab_Sections;
		}
		interface tab_Details extends DevKit.Form.Controls.IControlTab {
			Section: tab_Details_Sections;
		}
		interface Tabs {
			General_Tab: tab_General_Tab;
			Details: tab_Details;
		}
		interface Body {
			Tab: Tabs;
			/** Action Name for which sync error has occurred */
			Action: DevKit.Form.Controls.ControlString;
			/** Enter a short description of the sync error. */
			Description: DevKit.Form.Controls.ControlString;
			/** Displays the error code. */
			ErrorCode: DevKit.Form.Controls.ControlString;
			/** Error description from the exception */
			ErrorDetail: DevKit.Form.Controls.ControlString;
			/** Error Message of the exception */
			ErrorMessage: DevKit.Form.Controls.ControlString;
			/** Date and time when the upsync request was executed on CRM server */
			ErrorTime: DevKit.Form.Controls.ControlDateTime;
			/** Select the preferred error type. */
			ErrorType: DevKit.Form.Controls.ControlOptionSet;
			/** Entity name of the record for which sync error has occurred */
			Name: DevKit.Form.Controls.ControlString;
			/** Choose the record that the sync error relates to. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormSync_Error extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Sync_Error
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Sync_Error */
		Body: LuckyStar.FormSync_Error.Body;
		/** The Header section of form Sync_Error */
		Header: LuckyStar.FormSync_Error.Header;
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
		regardingobjectid_activitymimeattachment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_activityparty_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_annotation_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_apisettings: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_appointment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attachment_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_attributeimageconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_businessdatalocalizedlabel_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_businessunit_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_category_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofile_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofilerule_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_channelaccessprofileruleitem_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connection_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connectionrole_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_connector: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_contact_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_customeraddress_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_devkit_processwebapi1: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_duplicaterule_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_duplicaterulecondition_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_email_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_emailserverprofile_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityanalyticsconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_entityimageconfig: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_ExpiredProcess_syncerror: DevKit.WebApi.LookupValue;
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
		regardingobjectid_internaladdress_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_kbarticle_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_kbarticletemplate_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticle_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgearticleviews_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_knowledgebaserecord_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_letter_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mailbox_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_mailmergetemplate_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_metric_syncerror: DevKit.WebApi.LookupValue;
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
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_NewProcess_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_offlinecommanddefinition_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_organization_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_phonecall_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_position_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_postfollow_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processsession_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processstage_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_processtrigger_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_publisher_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_queue_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_queueitem_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_recurringappointmentmaster_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_report_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_reportcategory_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_role_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_rollupfield_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_savedquery_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_savedqueryvisualization_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharepointdocumentlocation_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_sharepointsite_syncerror: DevKit.WebApi.LookupValue;
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
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_subject_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_syncerror_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_systemuser_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_task_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_team_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_teamtemplate_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_template_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_territory_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_transactioncurrency_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_TranslationProcess_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userquery_syncerror: DevKit.WebApi.LookupValue;
		/** Choose the record that the sync error relates to. */
		regardingobjectid_userqueryvisualization_syncerror: DevKit.WebApi.LookupValue;
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
			/** 1 */
			Record_not_found,
			/** 2 */
			Record_already_exists,
			/** 3 */
			Others
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
//{'JsForm':['Sync Error'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}
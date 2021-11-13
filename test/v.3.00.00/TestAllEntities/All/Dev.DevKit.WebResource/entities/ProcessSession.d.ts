//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormProcessSession_Information {
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections {
			Details: DevKit.Controls.Section;
		}
		interface tab_Comments_Sections {
			Comments: DevKit.Controls.Section;
		}
		interface tab_Details_Sections {
			Details_2: DevKit.Controls.Section;
		}
		interface tab_Linked_Sessions_Sections {
			Linked_Sessions: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			Summary: DevKit.Controls.Section;
		}
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417 extends DevKit.Controls.ITab {
			Section: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections;
		}
		interface tab_Comments extends DevKit.Controls.ITab {
			Section: tab_Comments_Sections;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_Linked_Sessions extends DevKit.Controls.ITab {
			Section: tab_Linked_Sessions_Sections;
		}
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417;
			Comments: tab_Comments;
			Details: tab_Details;
			Linked_Sessions: tab_Linked_Sessions;
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who canceled the dialog session. */
			CanceledBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was canceled. */
			CanceledOn: DevKit.Controls.DateTime;
			/** User comments. */
			Comments: DevKit.Controls.String;
			/** Unique identifier of the user who completed the dialog session. */
			CompletedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the dialog session was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Name of the dialog session. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the succeeding linked dialog session. */
			NextLinkedSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the originating dialog session. */
			OriginatingSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the dialog session. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the preceding linked dialog session. */
			PreviousLinkedSessionId: DevKit.Controls.Lookup;
			/** Select the process activation record that is related to the dialog session. */
			ProcessId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the dialog session is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Controls.DateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the dialog session. */
			StateCode: DevKit.Controls.OptionSet;
		}
	}
	class FormProcessSession_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form ProcessSession_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ProcessSession_Information */
		Body: DevKit.FormProcessSession_Information.Body;
		/** The Footer section of form ProcessSession_Information */
		Footer: DevKit.FormProcessSession_Information.Footer;
	}
	class ProcessSessionApi {
		/**
		* DynamicsCrm.DevKit ProcessSessionApi
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
		/** Name of the activity that is being executed. */
		ActivityName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who canceled the dialog session. */
		CanceledBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was canceled. */
		CanceledOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** User comments. */
		Comments: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who completed the dialog session. */
		CompletedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was completed. */
		CompletedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the user who started the dialog session. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the dialog session. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Error code related to the dialog session. */
		ErrorCode: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who ran the dialog process. */
		ExecutedBy: DevKit.WebApi.LookupValue;
		/** Date and time when the dialog process was run. */
		ExecutedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Input arguments for the child dialog process. */
		InputArguments: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who last modified the dialog session. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the dialog session. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the dialog session. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the succeeding linked dialog session. */
		NextLinkedSessionId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the originating dialog session. */
		OriginatingSessionId: DevKit.WebApi.LookupValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the dialog session. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the dialog session. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the dialog session. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the preceding linked dialog session. */
		PreviousLinkedSessionId: DevKit.WebApi.LookupValue;
		/** Select the process activation record that is related to the dialog session. */
		ProcessId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the dialog session. */
		ProcessSessionId: DevKit.WebApi.GuidValue;
		/** Name of the dialog stage. */
		ProcessStageName: DevKit.WebApi.StringValue;
		/** State of the dialog process. */
		ProcessState: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ProtectionKey: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_activityfileattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_annotation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appelement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_applicationuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appmodulecomponentedge: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appmodulecomponentnode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appnotification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_appusersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_bot: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_botcomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_businessunit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_businessunitnewsarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_canvasappextendedmetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_catalog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_catalogassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		channelaccessprofile_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		profileid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connectionreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connectionrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_conversationtranscript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customapirequestparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customapiresponseproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_customerrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_datalakefolder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_datalakefolderpermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_datalakeworkspace: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_datalakeworkspacepermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_devkit_bpfaccount: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_expiredprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_exportsolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		externalparty_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		externalpartyitem_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_featurecontrolsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_flowmachine: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_flowmachinegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_goalrollupquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_internalcatalogassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticlecomment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_kbarticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_keyvaultreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_managedidentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_metric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdynce_botcontent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_federatedarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_kmpersonalizationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_pminferredtask: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_pmrecording: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_richtextfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_msdyn_tour: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_newprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_organizationdatasyncsubscription: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_organizationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_package: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_pdfsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_position: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_provisionlanguageforuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_relationshiprole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_report: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_rollupfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_serviceplan: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_serviceplanmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_settingdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_socialprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentbatchconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_subject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_systemuserauthorizationchangetracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_teammobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_template: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_theme: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_transactioncurrency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_translationprocess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_usermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_usermobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_virtualentitymetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the dialog session is associated. */
		regardingobjectid_workflowbinary: DevKit.WebApi.LookupValue;
		RegardingObjectIdYomiName: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who started the dialog session. */
		StartedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the dialog session was started. */
		StartedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Status of the dialog session. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the dialog session. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Name of the dialog step. */
		StepName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace ProcessSession {
		enum StateCode {
			/** 1 */
			Complete,
			/** 0 */
			Incomplete
		}
		enum StatusCode {
			/** 5 */
			Canceled,
			/** 4 */
			Completed,
			/** 6 */
			Failed,
			/** 2 */
			In_Progress,
			/** 1 */
			Not_Started,
			/** 3 */
			Paused
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
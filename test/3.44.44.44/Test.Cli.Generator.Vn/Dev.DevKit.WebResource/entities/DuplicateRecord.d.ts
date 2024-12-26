//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class DuplicateRecordApi {
		/**
		* DynamicsCrm.DevKit DuplicateRecordApi
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
		/** Mã định danh duy nhất của công việc hệ thống đã tạo bản ghi này. */
		readonly AsyncOperationId: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_account: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_activityfileattachment: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_adx_invitation: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_adx_inviteredemption: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_aicopilot: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_aipluginauth: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_aipluginoperationparameter: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_aipluginoperationresponsetemplate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_aiplugintitle: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_aipluginusersetting: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_applicationuser: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_appointment: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_archivecleanupinfo: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_archivecleanupoperation: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_bulkarchiveconfig: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_bulkarchivefailuredetail: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_bulkarchiveoperation: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_canvasappextendedmetadata: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_card: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_cascadegrantrevokeaccessrecordstracker: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_cascadegrantrevokeaccessversiontracker: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_catalogassignment: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly channelaccessprofile_duplicatebaserecord: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_connectioninstance: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_connector: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_contact: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_conversationtranscript: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_credential: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_datalakefolder: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_datalakefolderpermission: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_datalakeworkspace: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_datalakeworkspacepermission: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_dataprocessingconfiguration: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_deleteditemreference: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_desktopflowmodule: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_email: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_emailserverprofile: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_enablearchivalrequest: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_entityrecordfilter: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_environmentvariabledefinition: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_environmentvariablevalue: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_exportedexcel: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_exportsolutionupload: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_fax: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_featurecontrolsetting: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_feedback: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_flowcredentialapplication: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_flowevent: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_flowmachinegroup: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_flowmachineimage: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_flowmachineimageversion: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_flowmachinenetwork: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_fxexpression: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_goal: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_goalrollupquery: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_kbarticle: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_keyvaultreference: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_knowledgearticle: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_knowledgebaserecord: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_letter: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_managedidentity: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_maskingrule: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aibdataset: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aibdatasetfile: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aibdatasetrecord: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aibdatasetscontainer: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aibfeedbackloop: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aibfile: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aibfileattacheddata: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aievent: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aiodimage: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aiodlabel: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aiodtrainingboundingbox: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_aiodtrainingimage: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_analysiscomponent: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_analysisjob: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_analysisoverride: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_analysisresult: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_analysisresultdetail: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_appinsightsmetadata: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_customcontrolextendedsettings: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_dataflow: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_dataflowconnectionreference: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_dataflowrefreshhistory: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_dataflow_datalakefolder: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_dmsrequest: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_dmsrequeststatus: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_entitylinkchatconfiguration: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_entityrefreshhistory: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_favoriteknowledgearticle: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_federatedarticle: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_federatedarticleincident: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_fileupload: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_actionapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_approval: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_approvalrequest: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_approvalresponse: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_approvalstep: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_awaitallapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_basicapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_flow_flowapproval: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_integratedsearchprovider: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_kalanguagesetting: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_kbattachment: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_kmfederatedsearchconfig: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_knowledgearticleimage: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_knowledgearticletemplate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_knowledgeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_knowledgeinteractioninsight: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_knowledgemanagementsetting: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_knowledgepersonalfilter: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_knowledgesearchfilter: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_knowledgesearchinsight: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_mobileapp: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_modulerundetail: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmanalysishistory: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmbusinessruleautomationconfig: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmcalendar: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmcalendarversion: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pminferredtask: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmprocessextendedmetadataversion: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmprocesstemplate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmprocessusersettings: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmprocessversion: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmrecording: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmsimulation: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmtemplate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_pmview: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_schedule: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_serviceconfiguration: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_slakpi: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_solutionhealthrule: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_solutionhealthruleargument: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_solutionhealthruleset: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_msdyn_virtualtablecolumncandidate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_mspcat_packagestore: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_organizationdatasyncfnostate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_organizationdatasyncstate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_organizationdatasyncsubscription: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_organizationdatasyncsubscriptionentity: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_organizationdatasyncsubscriptionfnotable: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_package: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_packagehistory: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_phonecall: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_powerbidataset: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_powerbidatasetapdx: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_powerbimashupparameter: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_powerbireport: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_powerbireportapdx: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_powerfxrule: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_powerpagesscanreport: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_privilegesremovalsetting: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_publisher: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_queue: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_reconciliationinfo: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_recordfilter: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_reportparameter: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_retaineddataexcel: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_retentioncleanupinfo: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_retentioncleanupoperation: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_retentionconfig: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_retentionfailuredetail: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_retentionoperation: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_revokeinheritedaccessrecordstracker: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_roleeditorlayout: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_searchattributesettings: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_searchcustomanalyzer: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_searchrelationshipsettings: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_serviceplan: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_serviceplancustomcontrol: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_serviceplanmapping: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_sharedlinksetting: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_sharepointdocumentlocation: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_sharepointsite: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_socialactivity: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_socialprofile: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_solutioncomponentattributeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_solutioncomponentbatchconfiguration: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_solutioncomponentconfiguration: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_solutioncomponentrelationshipconfiguration: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_stagesolutionupload: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_supportusertable: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_synapsedatabase: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_synapselinkexternaltablestate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_synapselinkprofile: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_synapselinkprofileentity: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_synapselinkprofileentitystate: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_synapselinkschedule: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_systemuser: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_task: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_tdsmetadata: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_team: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_transactioncurrency: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_userrating: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_workqueue: string;
		/** Mã định danh duy nhất của bản ghi cơ sở. */
		readonly baserecordid_workqueueitem: string;
		/** Ngày và giờ tạo bản ghi trùng lặp. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Mã định danh duy nhất của bản ghi trùng lặp. */
		DuplicateId: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_account: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_activityfileattachment: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_adx_invitation: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_adx_inviteredemption: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_aicopilot: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_aipluginauth: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_aipluginoperationparameter: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_aipluginoperationresponsetemplate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_aiplugintitle: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_aipluginusersetting: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_applicationuser: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_appointment: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_archivecleanupinfo: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_archivecleanupoperation: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_bulkarchiveconfig: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_bulkarchivefailuredetail: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_bulkarchiveoperation: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_canvasappextendedmetadata: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_card: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_cascadegrantrevokeaccessrecordstracker: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_cascadegrantrevokeaccessversiontracker: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_catalogassignment: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly channelaccessprofile_duplicatematchingrecord: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_connectioninstance: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_connector: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_contact: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_conversationtranscript: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_credential: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_datalakefolder: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_datalakefolderpermission: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_datalakeworkspace: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_datalakeworkspacepermission: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_dataprocessingconfiguration: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_deleteditemreference: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_desktopflowmodule: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_email: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_emailserverprofile: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_enablearchivalrequest: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_entityrecordfilter: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_environmentvariabledefinition: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_environmentvariablevalue: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_exportedexcel: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_exportsolutionupload: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_fax: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_featurecontrolsetting: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_feedback: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_flowcredentialapplication: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_flowevent: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_flowmachinegroup: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_flowmachineimage: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_flowmachineimageversion: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_flowmachinenetwork: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_fxexpression: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_goal: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_goalrollupquery: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_kbarticle: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_keyvaultreference: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_knowledgearticle: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_knowledgebaserecord: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_letter: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_managedidentity: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_maskingrule: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aibdataset: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aibdatasetfile: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aibdatasetrecord: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aibdatasetscontainer: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aibfeedbackloop: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aibfile: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aibfileattacheddata: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aievent: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aiodimage: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aiodlabel: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aiodtrainingboundingbox: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_aiodtrainingimage: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_analysiscomponent: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_analysisjob: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_analysisoverride: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_analysisresult: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_analysisresultdetail: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_appinsightsmetadata: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_customcontrolextendedsettings: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_dataflow: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_dataflowconnectionreference: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_dataflowrefreshhistory: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_dataflow_datalakefolder: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_dmsrequest: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_dmsrequeststatus: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_entitylinkchatconfiguration: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_entityrefreshhistory: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_favoriteknowledgearticle: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_federatedarticle: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_federatedarticleincident: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_fileupload: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_actionapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_approval: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_approvalrequest: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_approvalresponse: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_approvalstep: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_awaitallapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_basicapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_flow_flowapproval: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_integratedsearchprovider: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_kalanguagesetting: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_kbattachment: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_kmfederatedsearchconfig: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_knowledgearticleimage: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_knowledgearticletemplate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_knowledgeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_knowledgeinteractioninsight: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_knowledgemanagementsetting: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_knowledgepersonalfilter: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_knowledgesearchfilter: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_knowledgesearchinsight: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_mobileapp: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_modulerundetail: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmanalysishistory: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmbusinessruleautomationconfig: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmcalendar: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmcalendarversion: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pminferredtask: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmprocessextendedmetadataversion: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmprocesstemplate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmprocessusersettings: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmprocessversion: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmrecording: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmsimulation: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmtemplate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_pmview: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_schedule: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_serviceconfiguration: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_slakpi: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_solutionhealthrule: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_solutionhealthruleargument: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_solutionhealthruleset: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_msdyn_virtualtablecolumncandidate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_mspcat_packagestore: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_organizationdatasyncfnostate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_organizationdatasyncstate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_organizationdatasyncsubscription: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_organizationdatasyncsubscriptionentity: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_organizationdatasyncsubscriptionfnotable: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_package: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_packagehistory: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_phonecall: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_powerbidataset: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_powerbidatasetapdx: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_powerbimashupparameter: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_powerbireport: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_powerbireportapdx: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_powerfxrule: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_powerpagesscanreport: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_privilegesremovalsetting: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_publisher: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_queue: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_reconciliationinfo: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_recordfilter: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_reportparameter: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_retaineddataexcel: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_retentioncleanupinfo: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_retentioncleanupoperation: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_retentionconfig: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_retentionfailuredetail: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_retentionoperation: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_revokeinheritedaccessrecordstracker: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_roleeditorlayout: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_searchattributesettings: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_searchcustomanalyzer: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_searchrelationshipsettings: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_serviceplan: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_serviceplancustomcontrol: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_serviceplanmapping: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_sharedlinksetting: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_sharepointdocumentlocation: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_sharepointsite: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_socialactivity: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_socialprofile: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_solutioncomponentattributeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_solutioncomponentbatchconfiguration: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_solutioncomponentconfiguration: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_solutioncomponentrelationshipconfiguration: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_stagesolutionupload: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_supportusertable: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_synapsedatabase: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_synapselinkexternaltablestate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_synapselinkprofile: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_synapselinkprofileentity: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_synapselinkprofileentitystate: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_synapselinkschedule: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_systemuser: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_task: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_tdsmetadata: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_team: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_transactioncurrency: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_userrating: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_workqueue: string;
		/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
		readonly duplicaterecordid_workqueueitem: string;
		/** Mã định danh duy nhất của quy tắc trùng lặp theo đó trường hợp trùng lặp này được tìm thấy. */
		readonly DuplicateRuleId: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi trùng lặp. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của người dùng sở hữu bản ghi trùng lặp. */
		readonly OwningUser: string;
		readonly FormattedValue: {
			/** Mã định danh duy nhất của công việc hệ thống đã tạo bản ghi này. */
			readonly AsyncOperationId: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_account: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_activityfileattachment: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_adx_invitation: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_adx_inviteredemption: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_aicopilot: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_aipluginauth: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_aipluginoperationparameter: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_aipluginoperationresponsetemplate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_aiplugintitle: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_aipluginusersetting: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_applicationuser: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_appointment: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_archivecleanupinfo: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_archivecleanupoperation: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_bulkarchiveconfig: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_bulkarchivefailuredetail: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_bulkarchiveoperation: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_canvasappextendedmetadata: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_card: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_cascadegrantrevokeaccessrecordstracker: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_cascadegrantrevokeaccessversiontracker: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_catalogassignment: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly channelaccessprofile_duplicatebaserecord: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_connectioninstance: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_connector: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_contact: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_conversationtranscript: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_credential: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_datalakefolder: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_datalakefolderpermission: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_datalakeworkspace: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_datalakeworkspacepermission: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_dataprocessingconfiguration: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_deleteditemreference: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_desktopflowmodule: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_email: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_emailserverprofile: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_enablearchivalrequest: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_entityrecordfilter: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_environmentvariabledefinition: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_environmentvariablevalue: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_exportedexcel: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_exportsolutionupload: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_fax: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_featurecontrolsetting: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_feedback: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_flowcredentialapplication: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_flowevent: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_flowmachinegroup: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_flowmachineimage: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_flowmachineimageversion: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_flowmachinenetwork: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_fxexpression: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_goal: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_goalrollupquery: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_kbarticle: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_keyvaultreference: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_knowledgearticle: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_knowledgebaserecord: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_letter: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_managedidentity: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_maskingrule: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aibdataset: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aibdatasetfile: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aibdatasetrecord: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aibdatasetscontainer: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aibfeedbackloop: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aibfile: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aibfileattacheddata: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aievent: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aiodimage: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aiodlabel: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aiodtrainingboundingbox: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_aiodtrainingimage: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_analysiscomponent: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_analysisjob: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_analysisoverride: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_analysisresult: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_analysisresultdetail: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_appinsightsmetadata: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_customcontrolextendedsettings: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_dataflow: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_dataflowconnectionreference: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_dataflowrefreshhistory: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_dataflow_datalakefolder: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_dmsrequest: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_dmsrequeststatus: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_entitylinkchatconfiguration: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_entityrefreshhistory: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_favoriteknowledgearticle: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_federatedarticle: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_federatedarticleincident: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_fileupload: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_actionapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_approval: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_approvalrequest: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_approvalresponse: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_approvalstep: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_awaitallapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_basicapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_flow_flowapproval: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_integratedsearchprovider: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_kalanguagesetting: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_kbattachment: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_kmfederatedsearchconfig: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_knowledgearticleimage: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_knowledgearticletemplate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_knowledgeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_knowledgeinteractioninsight: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_knowledgemanagementsetting: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_knowledgepersonalfilter: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_knowledgesearchfilter: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_knowledgesearchinsight: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_mobileapp: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_modulerundetail: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmanalysishistory: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmbusinessruleautomationconfig: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmcalendar: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmcalendarversion: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pminferredtask: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmprocessextendedmetadataversion: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmprocesstemplate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmprocessusersettings: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmprocessversion: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmrecording: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmsimulation: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmtemplate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_pmview: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_schedule: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_serviceconfiguration: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_slakpi: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_solutionhealthrule: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_solutionhealthruleargument: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_solutionhealthruleset: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_msdyn_virtualtablecolumncandidate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_mspcat_packagestore: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_organizationdatasyncfnostate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_organizationdatasyncstate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_organizationdatasyncsubscription: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_organizationdatasyncsubscriptionentity: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_organizationdatasyncsubscriptionfnotable: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_package: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_packagehistory: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_phonecall: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_powerbidataset: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_powerbidatasetapdx: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_powerbimashupparameter: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_powerbireport: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_powerbireportapdx: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_powerfxrule: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_powerpagesscanreport: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_privilegesremovalsetting: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_publisher: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_queue: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_reconciliationinfo: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_recordfilter: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_reportparameter: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_retaineddataexcel: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_retentioncleanupinfo: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_retentioncleanupoperation: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_retentionconfig: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_retentionfailuredetail: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_retentionoperation: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_revokeinheritedaccessrecordstracker: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_roleeditorlayout: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_searchattributesettings: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_searchcustomanalyzer: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_searchrelationshipsettings: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_serviceplan: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_serviceplancustomcontrol: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_serviceplanmapping: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_sharedlinksetting: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_sharepointdocumentlocation: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_sharepointsite: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_socialactivity: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_socialprofile: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_solutioncomponentattributeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_solutioncomponentbatchconfiguration: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_solutioncomponentconfiguration: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_solutioncomponentrelationshipconfiguration: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_stagesolutionupload: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_supportusertable: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_synapsedatabase: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_synapselinkexternaltablestate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_synapselinkprofile: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_synapselinkprofileentity: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_synapselinkprofileentitystate: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_synapselinkschedule: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_systemuser: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_task: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_tdsmetadata: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_team: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_transactioncurrency: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_userrating: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_workqueue: string;
			/** Mã định danh duy nhất của bản ghi cơ sở. */
			readonly baserecordid_workqueueitem: string;
			/** Ngày và giờ tạo bản ghi trùng lặp. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Mã định danh duy nhất của bản ghi trùng lặp. */
			readonly DuplicateId: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_account: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_activityfileattachment: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_adx_invitation: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_adx_inviteredemption: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_aicopilot: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_aipluginauth: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_aipluginoperationparameter: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_aipluginoperationresponsetemplate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_aiplugintitle: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_aipluginusersetting: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_applicationuser: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_appointment: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_archivecleanupinfo: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_archivecleanupoperation: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_bulkarchiveconfig: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_bulkarchivefailuredetail: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_bulkarchiveoperation: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_canvasappextendedmetadata: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_card: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_cascadegrantrevokeaccessrecordstracker: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_cascadegrantrevokeaccessversiontracker: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_catalogassignment: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly channelaccessprofile_duplicatematchingrecord: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_connectioninstance: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_connector: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_contact: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_conversationtranscript: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_credential: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_datalakefolder: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_datalakefolderpermission: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_datalakeworkspace: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_datalakeworkspacepermission: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_dataprocessingconfiguration: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_deleteditemreference: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_desktopflowmodule: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_email: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_emailserverprofile: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_enablearchivalrequest: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_entityrecordfilter: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_environmentvariabledefinition: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_environmentvariablevalue: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_exportedexcel: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_exportsolutionupload: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_fax: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_featurecontrolsetting: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_feedback: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_flowcredentialapplication: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_flowevent: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_flowmachinegroup: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_flowmachineimage: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_flowmachineimageversion: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_flowmachinenetwork: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_fxexpression: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_goal: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_goalrollupquery: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_kbarticle: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_keyvaultreference: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_knowledgearticle: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_knowledgebaserecord: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_letter: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_managedidentity: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_maskingrule: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aibdataset: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aibdatasetfile: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aibdatasetrecord: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aibdatasetscontainer: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aibfeedbackloop: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aibfile: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aibfileattacheddata: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aievent: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aiodimage: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aiodlabel: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aiodtrainingboundingbox: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_aiodtrainingimage: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_analysiscomponent: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_analysisjob: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_analysisoverride: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_analysisresult: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_analysisresultdetail: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_appinsightsmetadata: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_customcontrolextendedsettings: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_dataflow: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_dataflowconnectionreference: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_dataflowrefreshhistory: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_dataflow_datalakefolder: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_dmsrequest: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_dmsrequeststatus: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_entitylinkchatconfiguration: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_entityrefreshhistory: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_favoriteknowledgearticle: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_federatedarticle: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_federatedarticleincident: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_fileupload: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_actionapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_approval: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_approvalrequest: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_approvalresponse: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_approvalstep: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_awaitallapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_basicapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_flow_flowapproval: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_integratedsearchprovider: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_kalanguagesetting: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_kbattachment: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_kmfederatedsearchconfig: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_knowledgearticleimage: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_knowledgearticletemplate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_knowledgeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_knowledgeinteractioninsight: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_knowledgemanagementsetting: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_knowledgepersonalfilter: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_knowledgesearchfilter: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_knowledgesearchinsight: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_mobileapp: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_modulerundetail: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmanalysishistory: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmbusinessruleautomationconfig: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmcalendar: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmcalendarversion: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pminferredtask: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmprocessextendedmetadataversion: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmprocesstemplate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmprocessusersettings: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmprocessversion: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmrecording: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmsimulation: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmtemplate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_pmview: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_schedule: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_serviceconfiguration: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_slakpi: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_solutionhealthrule: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_solutionhealthruleargument: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_solutionhealthruleset: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_msdyn_virtualtablecolumncandidate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_mspcat_packagestore: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_organizationdatasyncfnostate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_organizationdatasyncstate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_organizationdatasyncsubscription: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_organizationdatasyncsubscriptionentity: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_organizationdatasyncsubscriptionfnotable: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_package: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_packagehistory: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_phonecall: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_powerbidataset: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_powerbidatasetapdx: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_powerbimashupparameter: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_powerbireport: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_powerbireportapdx: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_powerfxrule: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_powerpagesscanreport: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_privilegesremovalsetting: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_publisher: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_queue: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_reconciliationinfo: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_recordfilter: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_reportparameter: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_retaineddataexcel: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_retentioncleanupinfo: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_retentioncleanupoperation: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_retentionconfig: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_retentionfailuredetail: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_retentionoperation: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_revokeinheritedaccessrecordstracker: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_roleeditorlayout: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_searchattributesettings: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_searchcustomanalyzer: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_searchrelationshipsettings: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_serviceplan: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_serviceplancustomcontrol: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_serviceplanmapping: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_sharedlinksetting: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_sharepointdocumentlocation: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_sharepointsite: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_socialactivity: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_socialprofile: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_solutioncomponentattributeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_solutioncomponentbatchconfiguration: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_solutioncomponentconfiguration: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_solutioncomponentrelationshipconfiguration: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_stagesolutionupload: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_supportusertable: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_synapsedatabase: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_synapselinkexternaltablestate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_synapselinkprofile: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_synapselinkprofileentity: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_synapselinkprofileentitystate: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_synapselinkschedule: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_systemuser: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_task: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_tdsmetadata: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_team: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_transactioncurrency: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_userrating: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_workqueue: string;
			/** Mã định danh duy nhất của bản ghi có khả năng trùng lặp. */
			readonly duplicaterecordid_workqueueitem: string;
			/** Mã định danh duy nhất của quy tắc trùng lặp theo đó trường hợp trùng lặp này được tìm thấy. */
			readonly DuplicateRuleId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi trùng lặp. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của người dùng sở hữu bản ghi trùng lặp. */
			readonly OwningUser: string;
		}
	}
}
declare namespace OptionSet {
	namespace DuplicateRecord {
		enum BaseRecordIdTypeCode {
		}
		enum DuplicateRecordIdTypeCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}
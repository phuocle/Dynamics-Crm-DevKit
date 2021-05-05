//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class UserEntityInstanceDataApi {
		/**
		* DynamicsCrm.DevKit UserEntityInstanceDataApi
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
		/** Common end date */
		CommonEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Common start date */
		CommonStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Due Date */
		DueDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Flag due by */
		FlagDueBy_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Flag request */
		FlagRequest: DevKit.WebApi.StringValue;
		/** Flag status. */
		FlagStatus: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the source record. */
		objectid_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_activityfileattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_activitymimeattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_activityparty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_annotation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_apisettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_appelement: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_applicationuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_appmodulecomponentedge: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_appmodulecomponentnode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_appnotification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_appsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_appusersetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_attachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_attributeimageconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_attributemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_audit: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bot: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_botcomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bulkdeletefailure: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_bulkdeleteoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_businessunitmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_businessunitnewsarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_calendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_calendarrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_canvasappextendedmetadata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_cascadegrantrevokeaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_cascadegrantrevokeaccessversiontracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_catalog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_catalogassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		channelaccessprofile_userentityinstancedatas: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		channelaccessprofileruleid: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_clientupdate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_columnmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connection: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connectionreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connectionrole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connectionroleassociation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connectionroleobjecttypecode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_connector: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_conversationtranscript: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_convertrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_customapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_customapirequestparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_customapiresponseproperty: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_customeraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_customerrelationship: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_datalakefolder: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_datalakefolderpermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_datalakeworkspace: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_datalakeworkspacepermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_dependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_dependencynode: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_devkit_bpfaccount1: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_devkit_bpfaccount3: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_devkit_bpf_location_1: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_devkit_customactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_devkit_location: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_devkit_processwebapi1: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_devkit_webapi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_displaystring: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_displaystringmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_documentindex: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_duplicaterecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_duplicaterule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_duplicaterulecondition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_emailhash: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_emailsearch: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entityanalyticsconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entityimageconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_entitymap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_environmentvariabledefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_environmentvariablevalue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_exportsolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		externalparty_userentityinstancedatas: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_fieldpermission: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_fieldsecurityprofile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_fileattachment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_filtertemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_flowmachine: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_flowmachinegroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_flowsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_goal: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_goalrollupquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_holidaywrapper: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_import: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importdata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importentitymapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_importmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_internaladdress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_internalcatalogassignment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_invaliddependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_isvconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_kbarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_kbarticlecomment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_kbarticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_keyvaultreference: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_knowledgearticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_knowledgebaserecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_license: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_lookupmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_mailbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_mailmergetemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_managedidentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_metric: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdynce_botcontent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibdataset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibdatasetfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibdatasetrecord: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibdatasetscontainer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aibfileattacheddata: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aifptrainingdocument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aimodel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiodimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiodlabel: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiodtrainingboundingbox: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aiodtrainingimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_aitemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_analysiscomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_analysisjob: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_analysisresult: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_analysisresultdetail: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_dataflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_federatedarticle: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_federatedarticleincident: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_helppage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_kalanguagesetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_kmfederatedsearchconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_kmpersonalizationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgearticleimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgearticletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgeinteractioninsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgepersonalfilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgesearchfilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_knowledgesearchinsight: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_richtextfile: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_serviceconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_slakpi: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_solutionhealthrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_solutionhealthruleargument: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_msdyn_solutionhealthruleset: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_new_bpf_301232cf016d4faebcee80f57b143c69: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_notification: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_organization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_organizationdatasyncsubscription: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_organizationdatasyncsubscriptionentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_organizationsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_organizationstatistic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ownermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_package: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_pdfsetting: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_picklistmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_pluginassembly: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_plugintype: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_plugintypestatistic: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_principalattributeaccessmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_principalentitymap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_principalobjectaccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_principalobjectattributeaccess: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_privilege: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_processsession: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_processstageparameter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_provisionlanguageforuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_publisher: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_publisheraddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_queue: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_queueitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_recurringappointmentmaster: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_relationshipattribute: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_relationshiprole: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_relationshiprolemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_report: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_reportcategory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_reportentity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_reportlink: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_reportvisibility: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_revokeinheritedaccessrecordstracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribboncommand: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribboncontextgroup: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribboncustomization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribbondiff: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribbonrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_ribbontabtocommandmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_role: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_roletemplate: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_rollupfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_routingrule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_routingruleitem: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_savedquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_savedqueryvisualization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessagefilter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessagepair: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstep: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstepimage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageprocessingstepsecureconfig: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessagerequest: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessagerequestfield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageresponse: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sdkmessageresponsefield: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_serviceendpoint: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_serviceplan: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_settingdefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sharepointdocumentlocation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sharepointsite: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sitemap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_sla: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_solution: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_solutioncomponent: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_solutioncomponentattributeconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_solutioncomponentconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_solutioncomponentrelationshipconfiguration: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_stagesolutionupload: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_statusmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_stringmap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_subject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_subscription: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_subscriptionmanuallytrackedobject: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_subscriptionsyncinfo: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_systemuser: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_systemuserauthorizationchangetracker: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_systemuserbusinessunitentitymap: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_teammembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_teammobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_template: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_territory: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_theme: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_timezonedefinition: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_timezonelocalizedname: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_timezonerule: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_transactioncurrency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_transformationmapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_transformationparametermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_unresolvedaddress: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userentityuisettings: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userfiscalcalendar: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userform: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_usermapping: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_usermobileofflineprofilemembership: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userquery: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_userqueryvisualization: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_webresource: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_webwizard: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_wizardaccessprivilege: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_wizardpage: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflow: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflowbinary: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflowdependency: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflowlog: DevKit.WebApi.LookupValue;
		/** Unique identifier of the source record. */
		objectid_workflowwaitsubscription: DevKit.WebApi.LookupValue;
		/** Object Type Code */
		ObjectTypeCode: DevKit.WebApi.IntegerValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns this. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns this object. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns this object. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Personal categories */
		PersonalCategories: DevKit.WebApi.StringValue;
		/** Indicates whether a reminder is set on this object. */
		ReminderSet: DevKit.WebApi.BooleanValue;
		/** Reminder time */
		ReminderTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Start Time */
		StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** To Do item flags. */
		ToDoItemFlags: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		ToDoOrdinalDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		ToDoSubOrdinal: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ToDoTitle: DevKit.WebApi.StringValue;
		/** Unique identifier user entity */
		UserEntityInstanceDataId: DevKit.WebApi.GuidValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace UserEntityInstanceData {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}
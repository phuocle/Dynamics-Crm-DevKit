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
		/** Ngày kết thúc thông thường */
		CommonEnd_UtcDateAndTime: Date;
		/** Thời gian bắt đầu thông thường */
		CommonStart_UtcDateAndTime: Date;
		/** Ngày Hết hạn */
		DueDate_UtcDateAndTime: Date;
		/** Hạn gắn cờ bởi */
		FlagDueBy_UtcDateAndTime: Date;
		/** Yêu cầu gắn cờ */
		FlagRequest: string;
		/** Trạng thái cờ. */
		FlagStatus: number;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_account: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_activityfileattachment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_activitymimeattachment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_activityparty: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_adx_externalidentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_adx_invitation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_adx_inviteredemption: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_adx_portalcomment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_adx_setting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_adx_webformsession: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aicopilot: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aiplugin: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginauth: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginconversationstarter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginconversationstartermapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginexternalschema: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginexternalschemaproperty: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aiplugingovernance: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aiplugingovernanceext: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aiplugininstance: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginoperation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginoperationparameter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginoperationresponsetemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aiplugintitle: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_aipluginusersetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_annotation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appaction: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appactionmigration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appactionrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appelement: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_application: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_applicationuser: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appmodulecomponentedge: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appmodulecomponentnode: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appointment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appsetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_appusersetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_archivecleanupinfo: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_archivecleanupoperation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_asyncoperation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_attachment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_attributeimageconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_attributemap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_attributemaskingrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_audit: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_bot: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_botcomponent: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_botcomponentcollection: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_bulkarchiveconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_bulkarchivefailuredetail: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_bulkarchiveoperation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_bulkarchiveoperationdetail: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_bulkdeletefailure: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_bulkdeleteoperation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_businessunitmap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_businessunitnewsarticle: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_calendar: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_calendarrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_canvasappextendedmetadata: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_card: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_cascadegrantrevokeaccessrecordstracker: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_cascadegrantrevokeaccessversiontracker: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_catalog: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_catalogassignment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		channelaccessprofile_userentityinstancedatas: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		channelaccessprofileruleid: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_chat: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_clientupdate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_columnmapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_comment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_connection: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_connectioninstance: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_connectionreference: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_connectionrole: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_connectionroleassociation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_connectionroleobjecttypecode: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_connector: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_contact: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_conversationtranscript: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_convertrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_copilotexamplequestion: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_copilotglossaryterm: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_copilotsynonyms: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_credential: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_customapi: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_customapirequestparameter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_customapiresponseproperty: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_customeraddress: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_customerrelationship: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_datalakefolder: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_datalakefolderpermission: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_datalakeworkspace: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_datalakeworkspacepermission: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dataprocessingconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_delegatedauthorization: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_deleteditemreference: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dependency: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dependencynode: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_desktopflowbinary: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_desktopflowmodule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_displaystring: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_displaystringmap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_documentindex: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_duplicaterecord: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_duplicaterule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_duplicaterulecondition: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dvfilesearch: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dvfilesearchattribute: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dvfilesearchentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dvtablesearch: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dvtablesearchattribute: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_dvtablesearchentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_email: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_emailhash: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_emailsearch: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_enablearchivalrequest: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_entityanalyticsconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_entityimageconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_entityindex: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_entitymap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_entityrecordfilter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_environmentvariabledefinition: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_environmentvariablevalue: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_exportedexcel: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_exportsolutionupload: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		externalparty_userentityinstancedatas: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_fabricaiskill: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_fax: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_featurecontrolsetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_federatedknowledgeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_federatedknowledgeentityconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_fieldpermission: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_fieldsecurityprofile: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_fileattachment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_filtertemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowcapacityassignment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowcredentialapplication: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowevent: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowmachine: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowmachinegroup: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowmachineimage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowmachineimageversion: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowmachinenetwork: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_flowsession: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_fxexpression: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_goal: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_goalrollupquery: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_holidaywrapper: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_import: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_importdata: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_importentitymapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_importfile: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_importjob: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_importlog: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_importmap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_indexattributes: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_internaladdress: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_internalcatalogassignment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_invaliddependency: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_isvconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_kbarticle: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_kbarticlecomment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_kbarticletemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_keyvaultreference: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_knowledgearticle: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_knowledgebaserecord: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_letter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_license: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_lookupmapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_mailbox: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_mailmergetemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_mainfewshot: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_makerfewshot: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_managedidentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_maskingrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_metadataforarchival: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_metric: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_mobileofflineprofileextension: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdynce_botcontent: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aibdataset: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aibdatasetfile: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aibdatasetrecord: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aibdatasetscontainer: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aibfeedbackloop: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aibfile: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aibfileattacheddata: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aiconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aievent: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aifptrainingdocument: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aimodel: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aiodimage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aiodlabel: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aiodtrainingboundingbox: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aiodtrainingimage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_aitemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_analysiscomponent: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_analysisjob: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_analysisoverride: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_analysisresult: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_analysisresultdetail: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_appinsightsmetadata: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_customcontrolextendedsettings: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dataflow: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dataflowconnectionreference: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dataflowrefreshhistory: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dataflowtemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dataflow_datalakefolder: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dmsrequest: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dmsrequeststatus: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dmssyncrequest: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_dmssyncstatus: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_entitylinkchatconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_entityrefreshhistory: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_favoriteknowledgearticle: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_federatedarticle: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_federatedarticleincident: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_fileupload: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_actionapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_approval: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_approvalrequest: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_approvalresponse: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_approvalstep: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_awaitallactionapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_awaitallapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_basicapprovalmodel: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_flow_flowapproval: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_helppage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_insightsstorevirtualentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_integratedsearchprovider: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_kalanguagesetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_kbattachment: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_kmfederatedsearchconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_kmpersonalizationsetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgearticleimage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgearticletemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgeassetconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgeinteractioninsight: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgemanagementsetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgepersonalfilter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgesearchfilter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_knowledgesearchinsight: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_mobileapp: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_modulerundetail: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmanalysishistory: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmbusinessruleautomationconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmcalendar: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmcalendarversion: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pminferredtask: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmprocessextendedmetadataversion: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmprocesstemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmprocessusersettings: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmprocessversion: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmrecording: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmsimulation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmtemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_pmview: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_richtextfile: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_salesforcestructuredobject: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_salesforcestructuredqnaconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_schedule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_serviceconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_slakpi: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_solutionhealthrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_solutionhealthruleargument: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_solutionhealthruleset: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_tour: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_virtualtablecolumncandidate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msdyn_workflowactionstatus: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_msgraphresourcetosubscription: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_mspcat_catalogsubmissionfiles: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_mspcat_packagestore: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_notification: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_organization: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_organizationdatasyncfnostate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_organizationdatasyncstate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_organizationdatasyncsubscription: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_organizationdatasyncsubscriptionentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_organizationdatasyncsubscriptionfnotable: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_organizationsetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_organizationstatistic: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_ownermapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_package: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_packagehistory: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_pdfsetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_phonecall: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_picklistmapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_plannerbusinessscenario: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_plannersyncaction: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_pluginassembly: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_pluginpackage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_plugintype: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_plugintypestatistic: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerbidataset: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerbidatasetapdx: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerbimashupparameter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerbireport: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerbireportapdx: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerfxrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerpagecomponent: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerpagesite: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerpagesitelanguage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerpagesitepublished: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_powerpagesscanreport: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_principalattributeaccessmap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_principalentitymap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_principalobjectaccess: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_principalobjectattributeaccess: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_privilege: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_privilegecheckerlog: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_privilegecheckerrun: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_privilegesremovalsetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_processsession: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_processstageparameter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_provisionlanguageforuser: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_publisher: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_publisheraddress: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_queue: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_queueitem: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_reconciliationentityinfo: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_reconciliationentitystepinfo: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_reconciliationinfo: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_recordfilter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_recurringappointmentmaster: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_recyclebinconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_relationshipattribute: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_relationshiprole: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_relationshiprolemap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_report: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_reportcategory: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_reportentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_reportlink: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_reportparameter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_reportvisibility: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_retaineddataexcel: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_retentioncleanupinfo: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_retentioncleanupoperation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_retentionconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_retentionfailuredetail: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_retentionoperation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_retentionoperationdetail: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_revokeinheritedaccessrecordstracker: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_ribboncommand: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_ribboncontextgroup: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_ribboncustomization: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_ribbondiff: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_ribbonrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_ribbontabtocommandmap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_role: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_roleeditorlayout: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_roletemplate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_rollupfield: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_routingrule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_routingruleitem: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_savedquery: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_savedqueryvisualization: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessagefilter: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessagepair: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessageprocessingstep: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessageprocessingstepimage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessageprocessingstepsecureconfig: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessagerequest: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessagerequestfield: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessageresponse: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sdkmessageresponsefield: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_searchattributesettings: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_searchcustomanalyzer: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_searchrelationshipsettings: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_serviceendpoint: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_serviceplan: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_serviceplancustomcontrol: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_serviceplanmapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_settingdefinition: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sharedlinksetting: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sharedobject: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sharedworkspace: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sharedworkspacepool: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sharepointdocumentlocation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sharepointsite: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sideloadedaiplugin: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sitemap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_sla: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_socialactivity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_solution: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_solutioncomponent: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_solutioncomponentattributeconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_solutioncomponentbatchconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_solutioncomponentconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_solutioncomponentrelationshipconfiguration: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_stagedentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_stagedentityattribute: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_stagedmetadataasyncoperation: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_stagesolutionupload: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_statusmap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_stringmap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_subject: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_subscription: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_subscriptionmanuallytrackedobject: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_subscriptionsyncinfo: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_supportusertable: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_synapsedatabase: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_synapselinkexternaltablestate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_synapselinkprofile: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_synapselinkprofileentity: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_synapselinkprofileentitystate: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_synapselinkschedule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_systemuser: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_systemuserauthorizationchangetracker: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_systemuserbusinessunitentitymap: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_task: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_tdsmetadata: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_team: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_teammembership: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_teammobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_template: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_territory: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_theme: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_timezonedefinition: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_timezonelocalizedname: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_timezonerule: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_transactioncurrency: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_transformationmapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_transformationparametermapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_unresolvedaddress: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_userentityuisettings: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_userfiscalcalendar: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_userform: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_usermapping: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_usermobileofflineprofilemembership: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_userquery: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_userqueryvisualization: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_userrating: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_viewasexamplequestion: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_virtualentitymetadata: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_webresource: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_webwizard: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_wizardaccessprivilege: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_wizardpage: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_workflow: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_workflowbinary: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_workflowdependency: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_workflowlog: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_workflowwaitsubscription: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_workqueue: string;
		/** Mã định danh duy nhất của bản ghi nguồn. */
		objectid_workqueueitem: string;
		/** Mã loại đối tượng */
		ObjectTypeCode: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu đối tượng này. */
		readonly OwningBusinessUnit: string;
		/** Mã định danh duy nhất của nhóm sở hữu đối tượng này. */
		readonly OwningTeam: string;
		/** Mã định danh duy nhất của người dùng sở hữu đối tượng này. */
		readonly OwningUser: string;
		/** Thể loại cá nhân */
		PersonalCategories: string;
		/** Cho biết có đặt nhắc nhở trên đối tượng này không. */
		ReminderSet: boolean;
		/** Thời gian nhắc nhở */
		ReminderTime_UtcDateAndTime: Date;
		/** Thời gian Bắt đầu */
		StartTime_UtcDateAndTime: Date;
		/** Thực hiện mục cờ. */
		ToDoItemFlags: number;
		/** Chỉ sử dụng nội bộ. */
		ToDoOrdinalDate_UtcDateAndTime: Date;
		/** Chỉ sử dụng nội bộ. */
		ToDoSubOrdinal: string;
		/** Chỉ sử dụng nội bộ. */
		ToDoTitle: string;
		/** Mã định danh duy nhất cho thực thể người dùng. */
		UserEntityInstanceDataId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Ngày kết thúc thông thường */
			readonly CommonEnd_UtcDateAndTime: string;
			/** Thời gian bắt đầu thông thường */
			readonly CommonStart_UtcDateAndTime: string;
			/** Ngày Hết hạn */
			readonly DueDate_UtcDateAndTime: string;
			/** Hạn gắn cờ bởi */
			readonly FlagDueBy_UtcDateAndTime: string;
			/** Yêu cầu gắn cờ */
			readonly FlagRequest: string;
			/** Trạng thái cờ. */
			readonly FlagStatus: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_account: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_activityfileattachment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_activitymimeattachment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_activityparty: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_adx_externalidentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_adx_invitation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_adx_inviteredemption: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_adx_portalcomment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_adx_setting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_adx_webformsession: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aicopilot: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aiplugin: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginauth: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginconversationstarter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginconversationstartermapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginexternalschema: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginexternalschemaproperty: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aiplugingovernance: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aiplugingovernanceext: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aiplugininstance: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginoperation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginoperationparameter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginoperationresponsetemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aiplugintitle: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_aipluginusersetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_annotation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appaction: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appactionmigration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appactionrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appelement: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_application: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_applicationuser: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appmodulecomponentedge: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appmodulecomponentnode: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appointment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appsetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_appusersetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_archivecleanupinfo: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_archivecleanupoperation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_asyncoperation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_attachment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_attributeimageconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_attributemap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_attributemaskingrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_audit: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_bot: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_botcomponent: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_botcomponentcollection: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_bulkarchiveconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_bulkarchivefailuredetail: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_bulkarchiveoperation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_bulkarchiveoperationdetail: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_bulkdeletefailure: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_bulkdeleteoperation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_businessunitmap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_businessunitnewsarticle: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_calendar: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_calendarrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_canvasappextendedmetadata: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_card: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_cascadegrantrevokeaccessrecordstracker: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_cascadegrantrevokeaccessversiontracker: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_catalog: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_catalogassignment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly channelaccessprofile_userentityinstancedatas: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly channelaccessprofileruleid: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_chat: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_clientupdate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_columnmapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_comment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_connection: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_connectioninstance: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_connectionreference: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_connectionrole: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_connectionroleassociation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_connectionroleobjecttypecode: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_connector: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_contact: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_conversationtranscript: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_convertrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_copilotexamplequestion: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_copilotglossaryterm: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_copilotsynonyms: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_credential: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_customapi: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_customapirequestparameter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_customapiresponseproperty: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_customeraddress: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_customerrelationship: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_datalakefolder: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_datalakefolderpermission: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_datalakeworkspace: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_datalakeworkspacepermission: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dataprocessingconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_delegatedauthorization: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_deleteditemreference: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dependency: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dependencynode: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_desktopflowbinary: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_desktopflowmodule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_displaystring: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_displaystringmap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_documentindex: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_duplicaterecord: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_duplicaterule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_duplicaterulecondition: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dvfilesearch: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dvfilesearchattribute: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dvfilesearchentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dvtablesearch: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dvtablesearchattribute: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_dvtablesearchentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_email: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_emailhash: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_emailsearch: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_enablearchivalrequest: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_entityanalyticsconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_entityimageconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_entityindex: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_entitymap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_entityrecordfilter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_environmentvariabledefinition: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_environmentvariablevalue: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_exportedexcel: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_exportsolutionupload: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly externalparty_userentityinstancedatas: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_fabricaiskill: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_fax: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_featurecontrolsetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_federatedknowledgeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_federatedknowledgeentityconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_fieldpermission: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_fieldsecurityprofile: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_fileattachment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_filtertemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowcapacityassignment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowcredentialapplication: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowevent: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowmachine: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowmachinegroup: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowmachineimage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowmachineimageversion: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowmachinenetwork: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_flowsession: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_fxexpression: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_goal: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_goalrollupquery: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_holidaywrapper: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_import: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_importdata: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_importentitymapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_importfile: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_importjob: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_importlog: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_importmap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_indexattributes: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_internaladdress: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_internalcatalogassignment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_invaliddependency: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_isvconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_kbarticle: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_kbarticlecomment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_kbarticletemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_keyvaultreference: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_knowledgearticle: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_knowledgebaserecord: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_letter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_license: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_lookupmapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_mailbox: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_mailmergetemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_mainfewshot: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_makerfewshot: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_managedidentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_maskingrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_metadataforarchival: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_metric: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_mobileofflineprofileextension: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdynce_botcontent: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aibdataset: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aibdatasetfile: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aibdatasetrecord: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aibdatasetscontainer: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aibfeedbackloop: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aibfile: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aibfileattacheddata: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aiconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aievent: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aifptrainingdocument: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aimodel: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aiodimage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aiodlabel: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aiodtrainingboundingbox: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aiodtrainingimage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_aitemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_analysiscomponent: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_analysisjob: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_analysisoverride: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_analysisresult: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_analysisresultdetail: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_appinsightsmetadata: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_customcontrolextendedsettings: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dataflow: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dataflowconnectionreference: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dataflowrefreshhistory: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dataflowtemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dataflow_datalakefolder: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dmsrequest: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dmsrequeststatus: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dmssyncrequest: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_dmssyncstatus: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_entitylinkchatconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_entityrefreshhistory: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_favoriteknowledgearticle: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_federatedarticle: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_federatedarticleincident: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_fileupload: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_actionapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_approval: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_approvalrequest: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_approvalresponse: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_approvalstep: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_awaitallactionapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_awaitallapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_basicapprovalmodel: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_flow_flowapproval: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_helppage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_insightsstorevirtualentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_integratedsearchprovider: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_kalanguagesetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_kbattachment: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_kmfederatedsearchconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_kmpersonalizationsetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgearticleimage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgearticletemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgeassetconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgeinteractioninsight: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgemanagementsetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgepersonalfilter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgesearchfilter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_knowledgesearchinsight: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_mobileapp: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_modulerundetail: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmanalysishistory: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmbusinessruleautomationconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmcalendar: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmcalendarversion: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pminferredtask: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmprocessextendedmetadataversion: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmprocesstemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmprocessusersettings: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmprocessversion: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmrecording: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmsimulation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmtemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_pmview: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_richtextfile: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_salesforcestructuredobject: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_salesforcestructuredqnaconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_schedule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_serviceconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_slakpi: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_solutionhealthrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_solutionhealthruleargument: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_solutionhealthruleset: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_tour: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_virtualtablecolumncandidate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msdyn_workflowactionstatus: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_msgraphresourcetosubscription: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_mspcat_catalogsubmissionfiles: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_mspcat_packagestore: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_notification: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_organization: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_organizationdatasyncfnostate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_organizationdatasyncstate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_organizationdatasyncsubscription: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_organizationdatasyncsubscriptionentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_organizationdatasyncsubscriptionfnotable: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_organizationsetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_organizationstatistic: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_ownermapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_package: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_packagehistory: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_pdfsetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_phonecall: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_picklistmapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_plannerbusinessscenario: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_plannersyncaction: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_pluginassembly: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_pluginpackage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_plugintype: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_plugintypestatistic: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerbidataset: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerbidatasetapdx: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerbimashupparameter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerbireport: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerbireportapdx: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerfxrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerpagecomponent: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerpagesite: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerpagesitelanguage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerpagesitepublished: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_powerpagesscanreport: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_principalattributeaccessmap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_principalentitymap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_principalobjectaccess: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_principalobjectattributeaccess: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_privilege: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_privilegecheckerlog: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_privilegecheckerrun: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_privilegesremovalsetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_processsession: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_processstageparameter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_provisionlanguageforuser: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_publisher: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_publisheraddress: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_queue: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_queueitem: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_reconciliationentityinfo: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_reconciliationentitystepinfo: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_reconciliationinfo: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_recordfilter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_recurringappointmentmaster: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_recyclebinconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_relationshipattribute: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_relationshiprole: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_relationshiprolemap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_report: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_reportcategory: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_reportentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_reportlink: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_reportparameter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_reportvisibility: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_retaineddataexcel: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_retentioncleanupinfo: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_retentioncleanupoperation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_retentionconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_retentionfailuredetail: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_retentionoperation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_retentionoperationdetail: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_revokeinheritedaccessrecordstracker: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_ribboncommand: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_ribboncontextgroup: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_ribboncustomization: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_ribbondiff: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_ribbonrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_ribbontabtocommandmap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_role: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_roleeditorlayout: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_roletemplate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_rollupfield: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_routingrule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_routingruleitem: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_savedquery: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_savedqueryvisualization: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessagefilter: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessagepair: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessageprocessingstep: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessageprocessingstepimage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessageprocessingstepsecureconfig: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessagerequest: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessagerequestfield: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessageresponse: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sdkmessageresponsefield: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_searchattributesettings: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_searchcustomanalyzer: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_searchrelationshipsettings: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_serviceendpoint: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_serviceplan: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_serviceplancustomcontrol: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_serviceplanmapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_settingdefinition: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sharedlinksetting: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sharedobject: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sharedworkspace: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sharedworkspacepool: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sharepointdocumentlocation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sharepointsite: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sideloadedaiplugin: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sitemap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_sla: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_socialactivity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_solution: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_solutioncomponent: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_solutioncomponentattributeconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_solutioncomponentbatchconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_solutioncomponentconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_solutioncomponentrelationshipconfiguration: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_stagedentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_stagedentityattribute: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_stagedmetadataasyncoperation: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_stagesolutionupload: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_statusmap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_stringmap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_subject: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_subscription: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_subscriptionmanuallytrackedobject: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_subscriptionsyncinfo: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_supportusertable: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_synapsedatabase: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_synapselinkexternaltablestate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_synapselinkprofile: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_synapselinkprofileentity: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_synapselinkprofileentitystate: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_synapselinkschedule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_systemuser: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_systemuserauthorizationchangetracker: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_systemuserbusinessunitentitymap: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_task: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_tdsmetadata: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_team: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_teammembership: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_teammobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_template: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_territory: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_theme: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_timezonedefinition: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_timezonelocalizedname: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_timezonerule: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_transactioncurrency: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_transformationmapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_transformationparametermapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_unresolvedaddress: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_userentityuisettings: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_userfiscalcalendar: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_userform: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_usermapping: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_usermobileofflineprofilemembership: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_userquery: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_userqueryvisualization: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_userrating: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_viewasexamplequestion: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_virtualentitymetadata: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_webresource: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_webwizard: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_wizardaccessprivilege: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_wizardpage: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_workflow: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_workflowbinary: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_workflowdependency: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_workflowlog: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_workflowwaitsubscription: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_workqueue: string;
			/** Mã định danh duy nhất của bản ghi nguồn. */
			readonly objectid_workqueueitem: string;
			/** Mã loại đối tượng */
			readonly ObjectTypeCode: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Mã định danh duy nhất của bơn vị kinh doanh sở hữu đối tượng này. */
			readonly OwningBusinessUnit: string;
			/** Mã định danh duy nhất của nhóm sở hữu đối tượng này. */
			readonly OwningTeam: string;
			/** Mã định danh duy nhất của người dùng sở hữu đối tượng này. */
			readonly OwningUser: string;
			/** Thể loại cá nhân */
			readonly PersonalCategories: string;
			/** Cho biết có đặt nhắc nhở trên đối tượng này không. */
			readonly ReminderSet: string;
			/** Thời gian nhắc nhở */
			readonly ReminderTime_UtcDateAndTime: string;
			/** Thời gian Bắt đầu */
			readonly StartTime_UtcDateAndTime: string;
			/** Thực hiện mục cờ. */
			readonly ToDoItemFlags: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ToDoOrdinalDate_UtcDateAndTime: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ToDoSubOrdinal: string;
			/** Chỉ sử dụng nội bộ. */
			readonly ToDoTitle: string;
			/** Mã định danh duy nhất cho thực thể người dùng. */
			readonly UserEntityInstanceDataId: string;
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}